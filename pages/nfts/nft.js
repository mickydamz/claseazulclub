import Header from '../../components/Header'
import Heading from '../../components/Heading'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'


import NFTI from '../../components/nft/NFTI'
import MakeOffer from '../../components/nft/MakeOffer'
import GeneralD from '../../components/nft/GeneralD'

import Purchase from '../../components/nft/Purchase'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nftt = () => {

  
     
  
  



  return (
    <div>
     
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTI />
            </div>
            <div className={style.detailsContainer}>
              <GeneralD />
              <MakeOffer />
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Nftt
