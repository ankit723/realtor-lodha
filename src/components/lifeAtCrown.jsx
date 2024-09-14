import React from 'react'

const LifeAtCrown = () => {
  return (
    <div className='information-section' style={{marginBottom:"5rem", marginTop:'5rem'}}>
      <table className="section" style={{marginBottom:"3rem", marginTop:'3rem'}}>
        <tbody className='my-10'>
          <tr>
            <td className="image-title-cell">
              <div className="image-title-wrapper">
                <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />
                <h1 className='text-2xl font-bold'> <span className='text-black'>LIFE AT</span> <br /> CROWN TALOJA</h1>
              </div>
            </td>
            <td className="info-cell">
              <p className='font-bold'>
                Crown Taloja does not only bring you well-designed homes, but also a range of services that will enrich your life. Whether it’s the security of your family, necessities like water and electricity or connectivity services, everything has been designed keeping you at the center.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <img src="https://s3.ap-south-1.amazonaws.com/lodhagroup.in-tfz/Codename-Goldendream/1000x400_life_at_01.jpg" className='Goldendream-project-image' alt="Image" />

    </div>
  )
}

export default LifeAtCrown