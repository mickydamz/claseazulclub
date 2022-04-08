import React, { useEffect, useState, useMemo } from 'react'
import { Router, useRouter } from 'next/router'
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'
import axios from 'axios'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import Image from 'next/image'



const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover opacity:25`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-dark`,
  endRow: `w-full flex justify-end text-dark`,
  profileImg: `w-40 h-40  object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
  


  wrapper: `bg-black text-white flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover opacity:25`,
  details: `p-3`,
  info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#8a939b]`,
  assetName: `font-bold text-lg text-white mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#8a939b]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,
}

const Collection = () => {
  const[web3Api,setWe3Api] = useState({
    provider:null,
    web3:null
})
const router = useRouter();


//Craete function to listen the change in account changed and network changes

const providerChanged = (provider)=>{
    provider.on("accountsChanged",_=>window.location.reload());
    provider.on("chainChanged",_=>window.location.reload());

}

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

          window.alert(" Unlock Your Wallet Or Please install any provider wallet like MetaMask")
            
          // router.push("https://metamask.io/download.html")
        }


    }

    loadProvider()
},[])
//Create LoadAccounts Function
const[account,setAccount]= useState(null);
const[accountBalance,setAccountBalance]= useState(null);


useEffect(()=>{
     const loadAccount = async()=>{
         const accounts = await web3Api.web3.eth.getAccounts();
         setAccount(accounts[0])

         

          // const myBalance = await web3Api.web3.eth.getBalance(accounts[0])
          // const convertBalance = await  web3Api.web3.utils.fromWei(myBalance,"ether")
          // setAccountBalance(convertBalance)

         
     }

   web3Api.web3&& loadAccount();
},[ web3Api.web3])

//Load Contracts Function
const[nftContract,setNFtContract]= useState(null)
const[marketContract,setMarketContract]= useState(null)
const[nftAddress,setNFtAddress]= useState(null)
const[marketAddress,setMarketAddress]= useState(null)
const[unsoldItems,setUnsoldItems]= useState([])

const indexOfunsold = unsoldItems.length;

const firstOne = unsoldItems[indexOfunsold-1 ]
const seconsOne = unsoldItems[indexOfunsold-2]
const thirdOne = unsoldItems[indexOfunsold-3]
const fourthOne = unsoldItems[indexOfunsold-4]
const fivthOne = unsoldItems[indexOfunsold-5]


useEffect(()=>{
    const LoadContracts = async()=>{
        //Paths of Json File
        const nftContratFile =  await fetch("/abis/NFT.json");
        const marketContractFile = await fetch("/abis/NFTMarketPlace.json");
//Convert all to json
       const  convertNftContratFileToJson = await nftContratFile.json();
       const  convertMarketContractFileToJson = await marketContractFile.json();
//Get The ABI
       const markrtAbi = convertMarketContractFileToJson.abi;
       const nFTAbi = convertNftContratFileToJson.abi;

       const netWorkId =  await web3Api.web3.eth.net.getId();

       const nftNetWorkObject =  convertNftContratFileToJson.networks[netWorkId];
       const nftMarketWorkObject =  convertMarketContractFileToJson.networks[netWorkId];

       if(nftMarketWorkObject && nftMarketWorkObject){
        const nftAddress = nftNetWorkObject.address;
        setNFtAddress(nftAddress)
        const marketAddress = nftMarketWorkObject.address;
        setMarketAddress(marketAddress)

        const deployedNftContract = await new web3Api.web3.eth.Contract(nFTAbi,nftAddress);
        setNFtContract(deployedNftContract)
        const deployedMarketContract = await new web3Api.web3.eth.Contract(markrtAbi,marketAddress);
        setMarketContract(deployedMarketContract)

        //Fetch all unsold items
        const data =  await deployedMarketContract.methods.getAllUnsoldItems().call()
        console.log(data)
           const items = await Promise.all(data.map(async item=>{
            const nftUrl = await deployedNftContract.methods.tokenURI(item.tokenId).call();
            console.log(nftUrl)
            console.log(item)
            const priceToWei = Web3.utils.fromWei((item.price).toString(),"ether")
            const metaData =  await axios.get(nftUrl);

//TODO: fix this object
          let myItem = {
            price:priceToWei,
            itemId : item.id,
            owner :item.owner,
            seller:item.seller,
            image:metaData.data.image,
            name:metaData.data.name,
            description:metaData.data.description
        }
        console.log(item)

        return myItem;


        

          }))

          setUnsoldItems(items)
     




       }else{
           window.alert("You are at Wrong Network, Connect with Binance Please")
       }


    }
    web3Api.web3&&LoadContracts()

},[web3Api.web3])
//Create nft Buy Function

const nextPage = async (nftItem)=>{
  console.log("********")
  console.log(account)
  console.log(nftAddress)
  console.log(marketContract)
  
  const priceToWei = Web3.utils.toWei((nftItem.price).toString(),"ether")
  const convertIdtoInt = Number(nftItem.itemId)
 

  router.push({
    pathname: `/nfts/${nftItem.itemId}`,
    
  })
 
  
  
  
  }
  
const buyNFT = async (nftItem)=>{
console.log("********")
console.log(account)
console.log(nftAddress)
console.log(marketContract)

const priceToWei = Web3.utils.toWei((nftItem.price).toString(),"ether")
const convertIdtoInt = Number(nftItem.itemId)

router.push({
  pathname: `/nfts/nft`,
  
})
const result =  await marketContract.methods.createMarketForSale(nftAddress,convertIdtoInt).send({from:account,value:priceToWei})
router.reload()
console.log(result)



}

  
  return (
    <div className="overflow-hidden">
 
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          src='https://elitetraveler.com/wp-content/uploads/2021/08/cas5_optimized.jpg'
          alt="banner"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
         
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}>{'azul club'}</div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>
            Created by{' '}
            <span className="text-[#2081e2]">{'azul club creator'}</span>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>{'23'}</div>
              <div className={style.statName}>items</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                { 'TAC'}
              </div>
              <div className={style.statName}>owners</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                {'45'}
              </div>
              <div className={style.statName}>floor price</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                {'5K'}
              </div>
              <div className={style.statName}>volume traded</div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          {/* <div className={style.description}>{'azul club nfts'}</div> */}
        </div>
      </div>
      <div className="flex flex-wrap ">


      {
               unsoldItems.map((item,index)=>{

                return(
                    <>
                     <div
      className={style.wrapper}
      onClick = {()=>nextPage(item)}
    >
      <div className={style.imgContainer}>
        <img src={item.image} alt={''} className={style.nftImg} />

      </div>
      <div className={style.details}>
        <div className={style.info}>
          <div className={style.infoLeft}>
            <div className={style.collectionName}>{item.name}</div>
            <div className={style.assetName}>{item.id}</div>
            <button classNames="lg:text-sm text-lg btn btn-secondary font-bold" onClick = {()=>nextPage(item)}>Proceed to Buy</button>
          </div>
         
            <div className={style.infoRight}>
              <div className={style.priceTag}>Price</div>
              <div className={style.priceValue}>
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                {item.price}

              </div>
            </div>
         
        </div>
       
      </div>
    </div>
    
                    </>
                )
               })
           }
      
        
        
      </div>
    </div>
  )
}

export default Collection
