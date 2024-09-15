import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 my-10" style={{marginTop: '5rem', marginBottom: '5rem'}}>
      {/* ABOUT Section */}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="image-title-wrapper">
          <img 
            src="https://www.lodhagroup.in/themes/basic/images/svg/5-bar-black.svg" 
            width="60px" 
            height="60px" 
            alt="About" 
            className="section-image" 
          />
          <h1 className='font-bold text-2xl md:text-3xl text-left'>
            <span className='text-black'>ABOUT</span> <br /> LODHA
          </h1>
        </div>

        <div className="text-left font-semibold flex flex-col gap-3">
          <p className='text-sm md:text-md'>
            At Lodha, our passion is to create landmarks that meet global standards, epitomise the values of our family,
            and are built on a legacy of trust spanning four decades. We are guided by our vision of ‘Building a Better Life’.
            Lodha enables and transforms you to be a better version of yourself by maximising your potential and leading a
            flourished life.
          </p>
          <p className='text-sm md:text-md'>
            All our developments deliver the highest level of design and craftsmanship, uncompromising quality, unparalleled
            service – putting Lodha developments in the league of the world’s finest. Our homes are designed to enable more
            productivity, amenities designed and curated to equip with opportunity!
          </p>
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-20">
        <div className="image-title-wrapper">
          <img 
            src="https://www.lodhagroup.in/themes/basic/images/svg/5-bar-black.svg" 
            width="60px" 
            height="60px" 
            alt="About" 
            className="section-image" 
          />
          <h1 className='font-bold text-2xl md:text-3xl text-left'>
            <span className='text-black'>Special</span> <br /> Offer
          </h1>
        </div>

        <div className="text-left font-bold flex flex-col gap-8">
          <p className='text-sm md:text-md'>
            No pre-emi for 12 months and additional festive offers
          </p>
        </div>
      </div>

      {/* Crown Taloja Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="image-title-wrapper">
          <img 
            src="https://www.lodhagroup.in/themes/basic/images/svg/5-bar-black.svg" 
            width="60px" 
            height="60px" 
            alt="About" 
            className="section-image" 
          />
          <h1 className='font-bold text-2xl md:text-3xl text-left'>
            <span className='text-black'>CROWN TALOJA BY LODHA</span> <br /> JIYO TOH AISE
          </h1>
        </div>

        <div className="text-left font-bold flex flex-col gap-8">
          <p className='font-extrabold'>The Crown Promise</p>
          <p className='font-normal text-sm md:text-md'>
            Lodha, India's No.1^ real estate developer, presents Crown Taloja – a new brand of truly
            affordable homes that will ensure that every hardworking family in the Mumbai Metropolitan Region (MMR) can enjoy
            a life of no compromises, in a home that fills them with pride, at locations which ensure convenience and easy commutes.
            Jiyo Toh Aise!
          </p>
          <p>^By residential sales of FY 16-23.</p>
        </div>
      </div>
    </div>
  )
}

export default About
