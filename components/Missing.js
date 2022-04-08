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
const features = [
    {
      name: 'OUR MYSTICAL TRADITIONS',
      description: 'Discover the mystical traditions behind our exquisite Clase Azul Club Spirits in a unique experience that will delight all of your senses..which we have transferred into making our NFT',
      imageSrc: 'https://theazulclub.com/images/azul4.jpeg',
      imageAlt: 'Clase Azul Nft',
    },
    {
      name: 'THE IMPORTANCE OF OUR ROOTS',
      description: 'Clase Azul Club Tequila is produced at one of the highest points in the state of Jalisco. Our NFT are made by the best artists in mexico by only artists whose work align with our esteemed values',
      imageSrc: 'https://theazulclub.com/images/800x500_4.jpg',
      imageAlt: 'Clase Azul Nft.',
    },
    {
      name: 'TECHNOLOGY',
      description: 'Minted with the ERC 721 technology, we did not spare any cost to make the best NFT.',
      imageSrc: 'https://theazulclub.com/images/azul7.jpeg',
      imageAlt: 'Clase Azul Nft',
    },
    {
      name: 'Refill packs',
      description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc: 'https://theazulclub.com/images/azul9.jpeg',
      imageAlt: 'Clase Azul Nft',
    },
  ]
  
  export default function Missing() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="font-medium text-gray-500">
            WHY CLASE AZUL CLUB NFT?
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">The Azul Club</p>
            <p className="mt-4 text-gray-500">
              Why should you buy our NFT's.
            </p>
          </div>
  
          <div className="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col-reverse">
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                </div>
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  