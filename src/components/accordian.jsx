import React, { useState } from 'react'
import qr from '../135x135_QR_Crown_Taloja_Tulip_P51700051956 (1).jpg'

const Accordian = () => {
  const [activeSection, setActiveSection] = useState('rera');

  const toggleSection = (section) => {
    console.log(section)
    setActiveSection(activeSection === section ? null : section);
  };
  return (
    <div style={{marginTop:"5rem", marginBottom:"5rem"}}>
      <div className="section-header crown-info" >
        <span>Crown Taloja RERA</span>
        <button onClick={() => toggleSection('rera')} className="toggle-button">
          {activeSection === 'rera' ? '-' : '+'}
        </button>
      </div>
      <div className={`content rera-content ${activeSection === 'rera' ? 'show' : 'hide'}`}>
        <p>
          Crown Taloja has been registered via MahaRERA registration number:
          P51700033960, P51700051956 is available on the website.{' '}
          https://maharera.mahaonline.gov.in {' '}
          under registered projects
        </p>
        <p>
          <b>Site Office:</b> Crown Taloja, Taloja Bypass road | <b>Corporate office:</b>
          Lodha Excelus, N.M. Joshi Marg. Mahalaxmi. Mumbai- 400011
        </p>

        <img src={qr} alt="" />
      </div>

      <div className="section-header disclaimer-info">
        <span>Disclaimer</span>
        <button onClick={() => toggleSection('disclaimer')} className="toggle-button">
          {activeSection === 'disclaimer' ? '-' : '+'}
        </button>
      </div>
      <div className={`content disclaimer-content ${activeSection === 'disclaimer' ? 'show' : 'hide'}`}>
        <p>* Except Maintenance.</p>
      </div>

      <div className="section-header about-info">
        <span>About Lodha</span>
        <button onClick={() => toggleSection('about')} className="toggle-button">
          {activeSection === 'about' ? '-' : '+'}
        </button>
      </div>
      <div className={`content about-content ${activeSection === 'about' ? 'show' : 'hide'}`}>
        <p>
          Lodha is amongst India’s largest real estate developer.* The company has clocked sales of approximately ~Rs.35,000 crore in FY 18-20^. It has delivered an area of 7.7 crore sq. ft.** and as on December 2020, Lodha has 36 ongoing projects and 18 planned projects.</p>
        <p></p>
        <p><b>
          **7.72 crore square feet of Completed Developable Area until December 31, 2020. Completed Developable Area refers to area where construction has been completed and units are ready to be handed over to the customer. ^Cumulative Revenue from operations for India Business over FY18-20; Revenues from operations for India business for financial years 2020, 2019 and 2018 were Rs 9,576.65 Crores, Rs 11,906.55 Crores, 13,527.19 Crores respectively
        </b>
        </p>
      </div>
    </div>
  )
}

export default Accordian