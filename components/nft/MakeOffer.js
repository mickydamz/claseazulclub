import { useEffect, useState } from 'react'

import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  button: `mr-8 flex items-center py-2 px-12 blrounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = () => {
  

  return (
    <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-blue-200 px-12">
      <Toaster position="bottom-left" reverseOrder={false} />

        <div
            onClick={() => {
           
            }}
            className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
          >
            <IoMdWallet className={style.buttonIcon} />
            <div className={style.buttonText}>Buy Now</div>
          </div>
     
    </div>
  )
 }
export default MakeOffer
