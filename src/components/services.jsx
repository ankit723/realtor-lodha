import React from 'react'

const Services = () => {
    const services = [
        { name: "Easy Lease", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-easylease.svg" },
        { name: "Loyalty Program", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/services-priva.svg" },
        { name: "Home loan support", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-homeloansupport.svg" },
        { name: "Registration Support", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-registrationsupport.svg" },
        { name: "Facility management", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-management.svg" },
        { name: "NRI services", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/services-nriservices.svg" },
      ];
  return (
    <div className='service-class'>
              <div className="image-title-wrapper">
                <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />

                <h1>OUR&nbsp; <br />SERVICES</h1>

              </div>

              <div className="grid-container">
                {services.map((service, index) => (
                  <div key={index} className="grid-item">
                    <button className="grid-button">
                      <div className="image-above">
                        <img src={service.img} alt={service.name} />
                        <p>{service.name}</p>
                      </div>
                      <div className="image-below">
                        <img src={service.img} alt={service.name} />
                        <p>{service.name}</p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default Services