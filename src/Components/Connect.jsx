import React, {useState } from 'react';
import './Connect.css';
import getWeb3 from './getWeb3';
const Connect = () => {
  const [web3,setweb3]=useState();
  const [account,setaccount]=useState();
  const [networkName,setnetworkName]=useState("Wallet not");
  const [Balance,setBalance]=useState();
  const [Balance2,setBalance2]=useState();
  const [Toaddress,setToaddress]=useState('j');
  const [Quantity,setQuantity]=useState();
  const [Income,setIncome]=useState(0.00);
  const [Expense,setExpense]=useState(0.00);
 const connect = async () => {
      const Web3 = await getWeb3();
      setweb3(Web3);
      const accounts = await Web3.eth.getAccounts();
      setaccount(accounts[0]);
      const balance = await Web3.eth.getBalance(accounts[0]);
      const balance2=Web3.utils.fromWei(balance,'ether');
      // alert(balance2);
      setBalance(balance2);
       const networkId = await Web3.eth.net.getId();
       if(networkId===1){
        setnetworkName("Mainnet")
        // alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===3){
        setnetworkName("Ropsten")
        // alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===42){
        setnetworkName("Kovan")
        // alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===4){
        setnetworkName("Rinkeby")
      }else if(networkId===5){
        setnetworkName("Goerli")
        // alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===5777){
        setnetworkName("Ganache")
        // alert("Connect to Rinkeby network otherwise it won't work")
      }else{
        setnetworkName("Undefined")
        // alert("Connect to Rinkeby network otherwise it won't work")
      }
    }
connect();
const restart=()=>{
 window.location.reload(false);
}
  return (
    <>
  <nav className="navbar">
  <div className="upper">
      <h4>{networkName} Connected</h4>
      <h4>Balance: {Balance}</h4>
      <button className="btn" onClick={restart}><h4>Connect to Wallet</h4></button></div>
  <div className="lower">Account:{account}</div>
  </nav>
    </>
    )
 }
export default Connect;
