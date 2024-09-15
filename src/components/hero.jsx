import React from 'react'
import carouseImg1 from '../carouseImg1.jpg'
import carouseImg2 from '../carouseImg2.jpg'
import carouseImg3 from '../carouseImg3.jpg'
import Carousel from './carousel'
import RequestForm from './requestForm'

const Hero = () => {
  return (
    <div className=" relative">
      <Carousel images={[carouseImg1, carouseImg2, carouseImg3]} />
      <div className="invisible_form">  
        <RequestForm />
      </div>
    </div>
  )
}

export default Hero