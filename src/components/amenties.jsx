import React from 'react'
import Carousel from './carousel'
import carousel1 from '../1263x550_Crown_Taloja_Clubhouse.jpg'
import carousel2 from '../1263x550_Crown_Taloja_Courtyard.jpg'
import carousel3 from '../1263x550_Crown_Taloja_Kids.jpg'
import carousel4 from '../1263x550_Crown_Taloja_School.jpg'
import carousel5 from '../1263x550_Crown_Taloja_Temple.jpg'
const Amenties = () => {
  return (
    <div className='flex md:flex-row  flex-col '>
      <div className="details md:w-[25%] w-full" style={{padding:'4rem'}}>

        <div className="flex items-center justify-center">
          <div className="section-image" style={{display:'flex' , justifyContent:"center", alignItems:"center"}}>
              <svg enable-background="new 404.341 285.14 33.208 25" height="25px" version="1.1" viewBox="404.341 285.14 33.208 25" width="33.208px" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
                <path d="M434.775,290.497c-1.558,0-2.812,1.254-2.812,2.812c0,0.835,0.38,1.558,0.95,2.089l-5.965,3.191l-5.054-7.56

                  c1.14-0.456,1.938-1.558,1.938-2.85c0-1.672-1.367-3.04-3.04-3.04c-1.672,0-3.04,1.368-3.04,3.04c0,1.292,0.798,2.394,1.938,2.812

                  l-5.357,7.561l-5.433-3.078c0.646-0.494,1.064-1.292,1.064-2.204c0-1.558-1.254-2.812-2.812-2.812c-1.558,0-2.812,1.253-2.812,2.812

                  c0,1.368,0.988,2.507,2.28,2.735l1.672,12.425c0.152,0.987,0.988,1.709,1.976,1.709h21.049c0.987,0,1.861-0.722,1.976-1.748

                  l1.672-12.386c1.443-0.114,2.583-1.33,2.583-2.773C437.586,291.751,436.332,290.497,434.775,290.497z M420.831,286.698

                  c0.835,0,1.52,0.684,1.52,1.52s-0.685,1.52-1.52,1.52c-0.836,0-1.52-0.684-1.52-1.52S419.995,286.698,420.831,286.698z

                  M405.899,293.271c0-0.722,0.57-1.292,1.292-1.292c0.722,0,1.292,0.57,1.292,1.292c0,0.722-0.57,1.292-1.292,1.292

                  C406.469,294.563,405.899,293.993,405.899,293.271z M408.293,296.881l5.889,3.344c0.342,0.189,0.76,0.113,0.988-0.229l5.623-7.865

                  l5.244,7.865c0.228,0.342,0.646,0.418,0.987,0.266l6.308-3.381l-0.988,7.523h-23.062L408.293,296.881z M431.356,308.658h-21.049

                  c-0.228,0-0.456-0.189-0.494-0.417l-0.304-2.394h22.645l-0.305,2.355C431.811,308.507,431.583,308.658,431.356,308.658z

                  M434.775,294.563c-0.722,0-1.292-0.57-1.292-1.292c0-0.722,0.57-1.292,1.292-1.292s1.292,0.57,1.292,1.292

                  C436.067,293.993,435.496,294.563,434.775,294.563z">
                </path>
              </svg>
          </div>
          <h1 style={{fontSize:"1.6rem", fontWeight:"bold"}}> <span className='text-black'> AMENITIES AT </span> CROWN TALOJA</h1>
        </div>
        <p>Here is some information about the content.</p>
        <button className="viewMoreButton">View More</button>
      </div>
      <Carousel images={[carousel1, carousel2, carousel3, carousel4, carousel5]} sx={{height:"550px"}}/>
    </div>
  )
}

export default Amenties