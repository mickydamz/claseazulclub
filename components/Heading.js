/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useState,useEffect } from 'react'
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Collections',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'Home',
    description: 'clase azul home',
    href: 'https://theazulclub.com',
    icon: CursorClickIcon,
  },
  { name: 'Purchases', description: "view purchases", href: '#', icon: ShieldCheckIcon },

]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
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
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="/" className="flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://theazulclub.com/images/claseazul.png"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            
          <a href="https://theazulclub.com" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>

            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Collections
            </a>

            <a href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
              dashboard
            </a>

            <a href="/purchased" className="text-base font-medium text-gray-500 hover:text-gray-900">
              purchased 
            </a>
          

            

            

          </Popover.Group>
          <div className="flex items-center md:ml-12">


          {
                               !account?      
                               <a
                               href=""
                               onClick={connectMetamask} className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                             >
                               Connect wallet
                             </a>
                        
                        :
                        <a
                        href="#"
                        className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Connected
                      </a>
                           }
  
            
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://theazulclub.com/images/claseazul.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                {
                               !account?      
                               <a
                               href=""
                               onClick={connectMetamask} className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                             >
                               Connect wallet
                             </a>
                        
                        :
                        <a
                        href="#"
                        className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Connected
                      </a>
                           }
                           
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
           
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
