/* This example requires Tailwind CSS v2.0+ */
export default function Banner() {
  return (
    <div className="relative text-black bg-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://elitetraveler.com/wp-content/uploads/2021/08/cas5_optimized.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-white mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl lg:text-6xl">Get in touch</h1>
        <p className="mt-6 text-xl text-blue-900 max-w-3xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
          lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>
  )
}
