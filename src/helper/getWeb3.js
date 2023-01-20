import Web3 from "web3";
import { CONTRACT_ADDRESS, TOKEN_ADDRESS, CONTRACT_ABI, TOKEN_ABI } from "./config";

const web3 = new Web3(Web3.givenProvider);

const contract_instance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
const token_instance = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS)





export async function startNow() {
    web3.eth.getChainId().then((res)=>{
        console.log(res,"chain ID",typeof(res));
        if(res !== 97){
            SwitchNetwork();
        }
       
    })

    return new Promise((resolve, reject) => {
        
      if (window.ethereum) {
        try {
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then(async function (address) {
              console.log(address,"array");
              const userAddress = address[0];
              console.log(userAddress,"userAddress1");
              resolve({
                userAddress
              });
              window.ethereum.on("accountsChanged", function (accounts) {
                window.location.reload();
              });
            });
        } catch (error) {
          if (error.code === 4001) {
          }
          console.log(error);
          reject(error);
        }
      }
    });
    
  }

export async function SwitchNetwork() {
    return new Promise((resolve, reject) => {
      if (window.ethereum) {
        try {
          window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x61",
                chainName: "Binance Smart Chain",
                nativeCurrency: {
                  name: "Binance Testnet",
                  symbol: "BNB",
                  decimals: 18,
                },
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                blockExplorerUrls: ["https://testnet.bscscan.com"],
              },
            ],
          });
          window.ethereum.on("networkChanged", function (networkId) {
            window.location.reload();
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
  }
export const isUserExist = async(id)=>{
    const data = await contract_instance.methods.IsExist(id).call()
    console.log(data);
}
export const idToAddress = async(id)=>{
  const data = await contract_instance.methods.IdToAddress(id).call()
  console.log(data);
}
export const userDetails = async(userAddress)=>{
  const data = await contract_instance.methods.UserDetail(userAddress).call()
  console.log(data);
}
export const getUserBalance = async(userAddress)=>{
  const data = await token_instance.methods.balanceOf(userAddress).call()
  console.log(data)
}
export const allowance = async(userAddress, contractAddress)=>{
  const data = await token_instance.methods.allowance(userAddress,contractAddress).call()
  console.log(data)
}


export async function buy(userAddress, amount, ref,id) {
  console.table([
    [userAddress, "userAddress"],
    [amount, "amount"],
    [ref, "ref"],
  ]);
  try {
    contract_instance.methods.IsExist(id).call().then((res)=>{
      const isUserExist = res
      if(isUserExist){
        console.log("USER EXIST")
        token_instance.methods.balanceOf(userAddress).call().then((res)=>{
          const userBalance = res/1e18
          if(userBalance>amount){
            token_instance.methods.allowance(userAddress,CONTRACT_ADDRESS).call().then((res)=>{
              const allowance = res/1e18
              if(allowance > amount){
                try {
              
                } catch (error) {
                  console.log(error);
                }
              }else{

              }
            })
          }else{
            console.log("Insufficaint user Balance");
          }
        })
      }else{
        console.log("User Is Not Exist");
      }
    })
          
            ana_ico_instance.methods
              .isUserExist(userAddress)
              .call()
              .then(async (res) => {
                const isUserExist = res;
                if (isUserExist) {
                  console.log("USER EXIST");
                  inrx_token_instance.methods
                    .balanceOf(userAddress)
                    .call()
                    .then((res) => {
                      const userBalance = res / 1e2;
                      console.log(userBalance, "user k valute ka balnce");
                      ana_ico_instance.methods
                        .calculateINRxAmount(amount)
                        .call()
                        .then((res) => {
                          const anaInINRx = res / 1e2;
                          console.log(anaInINRx, "ana in INRX ++");
                          if (userBalance > anaInINRx) {
                            inrx_token_instance.methods
                              .allowance(userAddress, ANA_ICO_ADDRESS)
                              .call()
                              .then((res) => {
                                console.log(res, "allownce response");
                                const allowance = res / 1e2;
                                console.log(
                                  allowance,
                                  anaInINRx,
                                  "before if condition"
                                );
                                if (allowance > anaInINRx) {
                                  console.log(
                                    allowance,
                                    anaInINRx,
                                    "after if condition"
                                  );
                                  try {
                                    // console.log(amount, "Amount in inrx");
                                    const data = ana_ico_instance.methods
                                      .buy(amount)
                                      .send({ from: userAddress, value: 0 });
                                    toast.promise(data, {
                                      loading: "Transaction Pending...",
                                      success: (() => {
                                        setRefresh(true)
                                        return <b>Transaction Successful</b>
                                      }),
                                      error: <b>Transaction Canceld.</b>
                                    });
                                    console.log(data, "DIRECT BUY");
                                  } catch (error) {
                                    console.log(error, "buy with out approve");
                                  }
                                } else if (allowance < anaInINRx) {
                                  let test1;
                                  test1 = slippage > 0 ? Math.floor(Number(((anaInINRx * 1e2) * slippage) / 100) + Number(anaInINRx * 1e2)) : (anaInINRx * 1e2)
                                  try {
                                    const approveData = inrx_token_instance.methods.approve(ANA_ICO_ADDRESS, test1).send({ from: userAddress, value: 0 })
                                    console.log(approveData, "approveData");
                                    toast.promise(approveData, {
                                      loading: "Approval Pending...",
                                      success: (
                                        <b>Approval Successful</b>
                                      ),
                                      error: (
                                        <b>Approval request failed.</b>)
                                    })
                                      .then((res) => {
                                        const data = ana_ico_instance.methods
                                          .buy(amount)
                                          .send({
                                            from: userAddress,
                                            value: 0,
                                          });
                                        toast.promise(data, {
                                          loading: "Transaction Pending...",
                                          success: (() => {
                                            setRefresh(true)
                                            return <b>Transaction Successful</b>
                                          }),
                                          error: (
                                            <b>Transaction Canceld.</b>)
                                        })
                                      })
                                  } catch (error) {
                                    console.log(error, "approval Error");
                                  }
                                }
                              })
                              .catch((err) => {
                                console.log(err, "allowance 1");
                              });
                          } else {
                            toast("Insufficaint Wallet Balance");
                            console.log("Insufficaint user Balance");
                          }
                        })
                        .catch((err) => {
                          console.log(err, "calculateINRxAmount");
                        });
                    })
                    .catch((err) => {
                      console.log(err, "balanceOf");
                    });
                }
                 else if (!isUserExist) {
                  console.log("USER NOT EXIST");
                  const refferal = ref
                    ? ref
                    : "0x3b6b4E9FCF68CEbBb41465E1c35767613728B7eb";
                  inrx_token_instance.methods
                    .balanceOf(userAddress)
                    .call()
                    .then((res) => {
                      const userBalance = res / 1e2;
                      console.log(userBalance, "userBalance");
                      ana_ico_instance.methods
                        .calculateINRxAmount(amount)
                        .call()
                        .then((res) => {
                          const anaInINRx = res / 1e2;
                          console.table(
                            [
                              [anaInINRx, "anaInINRx"],
                              [userBalance, "userBalance"]
                            ]
                          )
                          if (userBalance > anaInINRx) {
                            console.log("amit yadav");
                            inrx_token_instance.methods
                              .allowance(userAddress, ANA_ICO_ADDRESS)
                              .call()
                              .then((res) => {
                                const allowance = res / 1e2;
                                console.log(allowance, "allowance");
                                if (allowance > anaInINRx) {
                                  try {
                                    const data = ana_ico_instance.methods
                                      .buyWithRefferal(refferal, amount)
                                      .send({ from: userAddress, value: 0 });
                                    toast.promise(data, {
                                      loading: "Transaction Pending...",
                                      success: (() => {
                                        setRefresh(true)
                                        return <b>Transaction Successful</b>
                                      }),
                                      error: <b>Transaction Canceld.</b>,
                                    });
                                  } catch (error) {
                                    console.log(error, "buyWithRefferal-1");
                                  }
                                  console.log(amount, "Passed amount");
                                } else if (allowance < anaInINRx) {
                                  console.log(refferal, "PASSD REF");
                                  let test1;
                                  test1 = slippage > 0 ? Math.floor(Number(((anaInINRx * 1e2) * slippage) / 100) + Number(anaInINRx * 1e2)) : (anaInINRx * 1e2)
                                  console.log(test1, "test slip");
                                  try {
                                    const approveData = inrx_token_instance.methods.approve(ANA_ICO_ADDRESS, test1 * 1e2).send({ from: userAddress, value: 0 })
                                    toast.promise(approveData, {
                                      loading: "Approval Pending...",
                                      success: (
                                        <b>Approval Successful</b>
                                      ),
                                      error: (
                                        <b>Approval request failed.</b>)
                                    }).then((res) => {
                                      const data = ana_ico_instance.methods
                                        .buyWithRefferal(refferal, amount)
                                        .send({
                                          from: userAddress,
                                          value: 0,
                                        });
                                      toast.promise(data, {
                                        loading: "Transaction Pending...",
                                        success: (() => {
                                          setRefresh(true)
                                          return <b>Transaction Successful</b>
                                        }),
                                        error: <b>Transaction Canceld.</b>,
                                      })
                                    })
                                  } catch (error) {
                                    console.log(error, "approve and buy");
                                  }
                                }
                              })
                              .catch((err) => {
                                console.log(err, "Error -3");
                              });
                          } else {
                            toast("Insufficaint Wallet Balance");
                            console.log("Insufficiant Balance");
                          }
                        })
                        .catch((error) => {
                          console.log(error, "Error -2");
                        });
                    })
                    .catch((error) => {
                      console.log(error, "Error -1");
                    });
                }
              })
              .catch((err) => {
                console.log(err, "isUserExist");
              });
          
       
  } catch (error) {
    console.log(error, "ERROR");
  }
  // })
};