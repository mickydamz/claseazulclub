/* This example requires Tailwind CSS v2.0+ */
const incentives = [
    {
      name: 'First',
      imageSrc: 'https://www.svgrepo.com/show/6974/one.svg',
      description: "At the first stage we are going to be launching the well crafted art by the Clase Azul Club Artist and distribution of a limited amount of the nft art to the community weekly.",
    },
    {
      name: 'Second',
      imageSrc: 'https://www.svgrepo.com/show/12680/two.svg',
      description: "Some whitelist spots will be reserved for the community members. These spots will be won by playing some games and completing some task. These nfts are rare so getting a spot in the whitelist is worth alot.",
    },
    {
      name: 'Third',
      imageSrc: 'https://www.svgrepo.com/show/7916/three.svg',
      description:
        "At the Third stage 5-10 ETH will be allocated for the marketing campaigns in other to ensure the success of The Clase Azul Club.Once the floor price has been completely sold out winners of our giveaways will be announced and rewarded.",
    },
    {
        name: 'Fourth',
        imageSrc: 'https://www.svgrepo.com/show/129425/four.svg',
        description:
          "Metaverse development will begin, as well as our custom game server will be launched. A huge marketing campaign will be set to attract investors and supporters for a long term development.",
      },
      {
        name: 'Five',
        imageSrc: 'https://www.svgrepo.com/show/401400/digit-five.svg',
        description:
          "Once the floor price is completely soldout we will be awarding only the verified community members with $1,000,000. This will be distributed amongst the verified members and holders of the Clase Azul Club NFT.",
      },

      {
        name: 'Six',
        imageSrc: 'https://www.svgrepo.com/show/59658/six.svg',
        description:
          "After the floor price has been soldout 20% of the funds made will go into charity and the rest will be reinvested into the development of games, Metaverse and giveaway to the community.",
      },
      {
        name: 'Seven',
        imageSrc: 'https://www.svgrepo.com/show/401405/digit-seven.svg',
        description:
          "Every New Clase Azul Bottle will be gifted to holders of any of the top 23 rare CAC bottles NFTs. An all expense paid trip to mexico on the DOD celebration for 3 years.",
      },
      {
        name: 'Eight',
        imageSrc: 'https://www.svgrepo.com/show/41993/eight.svg',
        description:
          "The holders of any of our rare 23 bottles CAC NFTs will get a free resort in the clase Azul Metaverse Island. The Island will be released in our second road map and the top 23 characters that represent each bottles.",
      },
      
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Our roadmap
              </h2>
              <p className="mt-4 text-gray-500">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
                about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
                clarify in the small print but hope people don't actually read it.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  