/* This example requires Tailwind CSS v2.0+ */
const posts = [
    {
      title: 'OUR CULTURE.',
      href: '#',
      category: { name: 'Our culture', href: '#' },
      description:
        'Our NFT carry our mexican culture which is ingrained in the very fabric of our NFTs',
      date: '',
      datetime: '',
      imageUrl:
        'https://theazulclub.com/images/azul4.jpeg',
      readingTime: '',
      author: {
        name: '',
        href: '/collections/collection',
        imageUrl:
          '',
      },
    },
    {
      title: 'THE BEST CRAFTMANSHIP.',
      href: '/collections/collection',
      category: { name: 'craftmanship', href: '/collections/collection' },
      description:
        'Only the best craftsmen from the Clase Azul Club community were allowed to create on this project.',
      date: '',
      datetime: '',
      imageUrl:
        'https://theazulclub.com/images/800x500_4.jpg',
      readingTime: '',
      author: {
        name: '',
        href: '',
        imageUrl:
          '',
      },
    },
    {
      title: 'THE VERY BEST NFT DEVELOPERS.',
      href: '/collections/collection',
      category: { name: 'nft developers', href: '/collections/collection' },
      description:
        'What do you get when you bring together the best nft developers? The most robust nfts to match our tradition.',
      date: '',
      datetime: '',
      imageUrl:
        'https://theazulclub.com/images/azul9.jpeg',
      readingTime: '',
      author: {
        name: '',
        href: '/collections/collection',
        imageUrl:
          '',
      },
    },
  ]
  
  export default function Lower() {
    return (
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Clase Azul Club</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Our NFT carry our mexican culture which is ingrained in the very fabric of our NFT's.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  