const Hero = () => {
  return (
    <div className="mx-auto mb-5 pt-5 pb-[5rem]">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-wide font-bold uppercase">
          Eclipse, your journey into a 
          <span className="bg-gradient-to-r from-violet-500 to-violet-900 text-transparent bg-clip-text">
            {" "}new reality  
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget vestibulum arcu. Morbi ultricies pretium lacinia. Aenean fringilla efficitur lacus eu rhoncus. Integer eu justo felis. Nullam eu ipsum vel dolor suscipit semper in eu lacus. Nunc vitae ligula auctor, ultricies risus a, bibendum mauris. Donec feugiat tellus sit amet mauris posuere, vitae congue ligula commodo.
        </p>
        <div className="mt-10  lg:flex lg:mt-10 lg:justify-center lg:w-[100rem] lg:h-[30rem]">
            <iframe
              className="rounded-lg lg:w-1/2 border border-violet-500 shadow-violet-900 mx-2 my-4"
              allowFullScreen
              src="#"
            >
            </iframe>
            <iframe
              className="rounded-lg lg:w-1/2 border border-violet-500 shadow-violet-900 mx-2 my-4"
              allowFullScreen
              src="#"
            >
            </iframe>
        </div>
      </div>
    </div>
  )
}

export default Hero