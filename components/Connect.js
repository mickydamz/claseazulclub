
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
  wrapper: ``,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

const Connect = () => {
  const { address, connectWallet } = useWeb3()

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

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      
      {address ? (
        <>
        
    
        </>
      ) : (

        <div className={style.headerIcon} onClick={() => connectWallet('injected')}>
          <MdOutlineAccountBalanceWallet />
        </div>
      )}
    </div>
  )
}

export default Connect
