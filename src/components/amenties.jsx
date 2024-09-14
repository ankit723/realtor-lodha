import React from 'react'

const Amenties = () => {
  return (
    <div className="wrapper">
    <div className="details">

      <div className="image-title-wrapper">
        <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />
        <h1 className='amenities'>AMENITIES AT CROWN TALOJA</h1>
      </div>
      <p>Here is some information about the content.</p>
      <button className="viewMoreButton">View More</button>
    </div>
    <div className="imageContainer">
      <img src="https://s3.ap-south-1.amazonaws.com/lodhagroup.in-tfz/1263x550_Crown_Taloja_Retail.jpg" alt="Placeholder" className="image" />
    </div>
  </div>
  )
}

export default Amenties