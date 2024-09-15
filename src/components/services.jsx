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
        <div className="section-image flex justify-center items-center">
          <svg enable-background="new 0 0 37.061 32" height="32px" version="1.1" viewBox="0 0 37.061 32" width="37.061px" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"><circle cx="19.044" cy="7.115" r="1.339"></circle><path d="M0.905,25.639" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="12"></path><path d="M34.342,25.23h-1.072c0-3.688-1.46-7.191-4.109-9.864c-2.646-2.669-6.188-4.218-9.975-4.362h-1.232
                                c-3.819,0.145-7.386,1.693-10.043,4.363c-2.655,2.667-4.118,6.171-4.118,9.863H2.719c0-3.979,1.573-7.75,4.432-10.62
                                c2.852-2.864,6.678-4.526,10.773-4.679h0.021h1.273c4.062,0.152,7.863,1.814,10.705,4.68
                                C32.772,17.486,34.342,21.258,34.342,25.23z"></path><path d="M7.495,23.488c-0.007,0-0.013,0-0.02,0c-0.298-0.012-0.528-0.262-0.519-0.557c0.195-5.359,4.844-9.558,10.367-9.356
                                    c0.296,0.011,0.527,0.261,0.517,0.556c-0.011,0.297-0.26,0.528-0.556,0.518c-4.93-0.182-9.082,3.554-9.255,8.322
                                    C8.021,23.26,7.783,23.488,7.495,23.488z"></path><path d="M24.49,3.411c-0.138,0-0.274-0.052-0.38-0.156c-1.378-1.377-3.194-2.151-5.115-2.181
                                    c-1.912-0.028-3.693,0.687-5.017,2.009c-0.21,0.209-0.551,0.209-0.76,0c-0.21-0.209-0.21-0.55,0-0.76
                                    C14.748,0.793,16.808-0.033,19.01,0c2.201,0.031,4.281,0.918,5.857,2.493c0.21,0.209,0.21,0.55,0,0.759
                                    C24.764,3.359,24.626,3.411,24.49,3.411z"></path><path d="M22.517,5.209c-0.137,0-0.274-0.052-0.379-0.156c-1.736-1.736-4.514-1.785-6.188-0.109c-0.21,0.21-0.55,0.21-0.759,0
                                    c-0.21-0.209-0.21-0.549,0-0.759c2.095-2.095,5.551-2.046,7.706,0.108c0.21,0.209,0.21,0.549,0,0.76
                                    C22.792,5.158,22.655,5.209,22.517,5.209z"></path><path d="M37.06,32H0l2.868-5.246H34.19L37.06,32z M1.81,30.926h33.438l-1.693-3.1H3.505L1.81,30.926z"></path></svg>
        </div>

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