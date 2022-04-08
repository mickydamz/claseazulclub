import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Example from '../components/Example'
import Incentives from '../components/Incentives'
import Heading from '../components/Heading'
import Content from '../components/Content'
import Continue from '../components/Continue'
import Moving from '../components/Moving'
import Missing from '../components/Missing'
import Lower from '../components/Lower'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {


  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }


  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {(
        <>
          
          
          <Example />
         
          <Continue />
          <Missing />
          
          <Lower />
          <Incentives/>
          <Moving />
          <Content />
          


        </>
      ) }
    </div>
  )
  
}


