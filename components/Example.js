

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import React from 'react'
import Link from "next/link"
import { useState,useEffect } from 'react'
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'
import Image from 'next/image'
import homeimg from '../assets/Homeimg.jpeg'

const Example =  function Example() {

  const[web3Api,setWe3Api] = useState({
    provider:null,
    web3:null
})

const providerChanged = (provider)=>{
    provider.on("accountsChanged",_=>window.location.reload());
    provider.on("chainChanged",_=>window.location.reload());

}
const[account,setAccount]= useState(null);
useEffect(()=>{
    const loadProvider = async()=>{
        const provider =  await detectEthereumProvider();

        if(provider){
            providerChanged(provider);
            setWe3Api({
                provider,
                web3:new Web3(provider),
            })
        } else {

          window.alert("Unlock Your Wallet or Install a Wallet Like Metamask")
            
         //  router.push("https://metamask.io/download.html")
        }


    }

    loadProvider()
},[])


useEffect(()=>{
    const loadAccount = async()=>{
        const accounts = await web3Api.web3.eth.getAccounts();
        setAccount(accounts[0])

        
    }

  web3Api.web3&& loadAccount();
},[ web3Api.web3])


useEffect(()=>{
    const connect = async()=>{
       await connectMetamask()
    }
    web3Api.web3&& account&&connect()
   
},[web3Api.web3&&account])


const connectMetamask = async () => {
    const currentProvider = await detectEthereumProvider();
    console.log( "WE ARE IN META MASK CONNECT" );
      if (currentProvider) {
          // let web3InstanceCopy = new Web3(currentProvider);
          // setWeb3Instance(web3InstanceCopy);
          if (!window.ethereum.selectedAddress) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
          }
          await window.ethereum.enable();
          let currentAddress = window.ethereum.selectedAddress;
          console.log(currentAddress);
          setAccount(currentAddress);
           const web3 = new Web3(currentProvider);
          let amount = await web3.eth.getBalance(currentAddress);
          amount = web3.utils.fromWei(web3.utils.toBN(amount), "ether");
      } else {
          console.log('Please install MetaMask!');
      }

  }


  

  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Embrace the exquisite lifestyle</span>
                <span className="block">Welcome to clase azul nft's.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Crafted by the best clase azul artists.
              </p>


              {
                               !account?      
                        <button className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50 " onClick={connectMetamask} >Connect Wallet</button>
                        
                        :
                        <button className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10" >{account.toString()}</button>
                           }
                         
                           
             
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <Image
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={homeimg}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example;