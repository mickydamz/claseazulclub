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
const people = [
   
    {
        name: 'Grey Fire Ice',
        role: 'grey fire ice',
        imageUrl:
          'https://theazulclub.com/images/800x500_2.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'blue iron nft',
        role: 'blue iron nft',
        imageUrl:
          'https://theazulclub.com/images/800x500_3.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Ice cold',
        role: 'this is the ice cold',
        imageUrl:
          'https://theazulclub.com/images/800x500_3.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      
      
      
    // More people...
  ]
  
  export default function Moving() {
    return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Latest NFT</h2>
              <p className="text-xl text-gray-500">
                These are some of our latest nft's.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  