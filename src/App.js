
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const headerHeight = document.querySelector('.header').offsetHeight;
//       if (window.scrollY > headerHeight) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {loading ? (
//         <div className="loader" />
//       ) : (
//         <>
//           <header className="header">
//             <a className="menu" href="#" id="menu-icon">
//               MENU
//             </a>

//             <a className="logo" href="/projects/residential-property-in-taloja/lodha-crown-taloja/about">
//               <img
//                 src="https://s3.ap-south-1.amazonaws.com/lodhagroup.in-tfz/Codename-Goldendream/Crown_Taloja_Logo_without_tagline.svg"
//                 alt="Logo"
//               />
//             </a>

//             <div className="right-side">
//               <ul className="right-side-list">
//                 <li>
//                   <a className="menu-search" href="#">
//                     <img src="https://www.lodhagroup.in/themes/basic/images/svg/search.svg" alt="Search" />
//                   </a>
//                   <p><a className="menu-search" href="#">Search</a></p>
//                 </li>
//                 <li>
//                   <a href="http://myaccount.lodhagroup.in" target="_blank" rel="noopener noreferrer">
//                     <img src="https://www.lodhagroup.in/themes/basic/images/svg/Login.svg" alt="Login" />
//                   </a>
//                   <p><a href="http://myaccount.lodhagroup.in" target="_blank" rel="noopener noreferrer">Login</a></p>
//                 </li>
//               </ul>
//             </div>
//           </header>

//           <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//             <ul className="nav-list">
//               <li className="nav-item"><a className='current' href="#">About</a></li>
//               <li className="nav-item"><a href="#">Location</a></li>
//               <li className="nav-item"><a href="#">Plans</a></li>
//               <li className="nav-item"><a href="#">Price</a></li>
//               <li className="nav-item"><a href="#">Amenities</a></li>
//               <li className="nav-item"><a href="#">Gallery</a></li>
//             </ul>
//             {isScrolled && <button className="contact-us-btn">Contact Us</button>}
//           </nav>
//           <div>

//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const services = [
    { name: "Easy Lease", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-easylease.svg" },
    { name: "Loyalty Program", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/services-priva.svg" },
    { name: "Home loan support", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-homeloansupport.svg" },
    { name: "Registration Support", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-registrationsupport.svg" },
    { name: "Facility management", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/service-management.svg" },
    { name: "NRI services", img: "https://www.lodhagroup.in/themes/basic/images/svg/service-icons/services-nriservices.svg" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      if (window.scrollY > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : (
        <div className="App">
          <header className="header">
            <a className="menu" href="#" id="menu-icon">
              MENU
            </a>

            <a className="logo" href="/projects/residential-property-in-taloja/lodha-crown-taloja/about">
              <img
                src="https://s3.ap-south-1.amazonaws.com/lodhagroup.in-tfz/Codename-Goldendream/Crown_Taloja_Logo_without_tagline.svg"
                alt="Logo"
              />
            </a>

            <div className="right-side">
              <ul className="right-side-list">
                <li>
                  <a className="menu-search" href="#">
                    <img src="https://www.lodhagroup.in/themes/basic/images/svg/search.svg" alt="Search" />
                  </a>
                  <p><a className="menu-search" href="#">Search</a></p>
                </li>
                <li>
                  <a href="http://myaccount.lodhagroup.in" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.lodhagroup.in/themes/basic/images/svg/Login.svg" alt="Login" />
                  </a>
                  <p><a href="http://myaccount.lodhagroup.in" target="_blank" rel="noopener noreferrer">Login</a></p>
                </li>
              </ul>
            </div>
          </header>

          <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item"><a className='current' href="#">About</a></li>
              <li className="nav-item"><a href="#">Location</a></li>
              <li className="nav-item"><a href="#">Plans</a></li>
              <li className="nav-item"><a href="#">Price</a></li>
              <li className="nav-item"><a href="#">Amenities</a></li>
              <li className="nav-item"><a href="#">Gallery</a></li>
            </ul>
            {isScrolled && <button className="contact-us-btn">Contact Us</button>}
          </nav>

          {/* <div className="content-section">
            <div className="image-container">
              <img src="https://images.pexels.com/photos/1388069/pexels-photo-1388069.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Placeholder" />
            </div>
            <div className="form-container">
              <form>
                REQUEST A CALL BACK
                <label>
                  <input type="text" name="name" required placeholder='Name' />
                </label>
                <label>
                  <input type="email" name="email" required placeholder='Email' />
                </label>
                <label>
                  <select name="country">
                    <option value="India">India</option>
                  </select>
                </label>
                <label>
                  <select name="state">
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </label>
                <label>
                  <input type="text" name="mobile" required placeholder='Mobile No. (Without Country Code):' />
                </label>
                <label>

                  <input type="checkbox" name="whatsapp" />Receive updates on WhatsApp
                </label>
                <p></p>
                <label>
                  <input type="checkbox" name="enquire" />
                  Enquire
                  <input type="checkbox" name="site-visit" />
                  Book a site visit
                </label>
                <p></p>
                <button type="submit">Submit</button>
                Call: 022-50030139
              </form>
            </div>
          </div> */}
          <div className="content-section">
            <div className="image-container">
              <img src="https://images.pexels.com/photos/1388069/pexels-photo-1388069.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Placeholder" />
            </div>
            <div className="form-container">
              <form>
                REQUEST A CALL BACK
                <label>
                  <input type="text" name="name" required placeholder="Name" />
                </label>
                <label>
                  <input type="email" name="email" required placeholder="Email" />
                </label>
                <label>
                  <select name="country">
                    <option value="India">India</option>
                  </select>
                </label>
                <label>
                  <select name="state">
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </label>
                <label>
                  <input type="text" name="mobile" required placeholder="Mobile No. (Without Country Code):" />
                </label>
                <label>
                  <input type="checkbox" name="whatsapp" /> Receive updates on WhatsApp
                </label>
                <p></p>
                <label>
                  <input type="checkbox" name="enquire" /> Enquire
                  <input type="checkbox" name="site-visit" /> Book a site visit
                </label>
                <p></p>
                <button type="submit">Submit</button>
                Call: 022-50030139
              </form>
            </div>
            <div className="contact-button">
              <button>Contact Us</button>
            </div>
          </div>
          <main>
            <div className="container">
              {/* ABOUT Section */}
              <table className="section">
                <tbody>
                  <tr>
                    <td className="image-title-cell">
                      <div className="image-title-wrapper">
                        <img src="https://www.lodhagroup.in/themes/basic/images/svg/5-bar-black.svg" width="30px" height="30px" alt="About" className="section-image" />
                        <h1>ABOUT LODHA</h1>
                      </div>
                    </td>
                    <td className="info-cell">
                      <p>
                        At Lodha, our passion is to create landmarks that meet global standards, epitomise the values of our family,
                        and are built on a legacy of trust spanning four decades. We are guided by our vision of ‘Building a Better Life’.
                        Lodha enables and transforms you to be a better version of yourself by maximising your potential and leading a
                        flourished life.
                      </p>
                      <p>
                        All our developments deliver the highest level of design and craftsmanship, uncompromising quality, unparalleled
                        service – putting Lodha developments in the league of the world’s finest. Our homes are designed to enable more
                        productivity, amenities designed and curated to equip with opportunity!
                      </p>
                    </td>
                  </tr>

                </tbody>
              </table>

              {/* Special Offer Section */}
              <table className="section">
                <tbody>
                  <tr>
                    <td className="image-title-cell">
                      <div className="image-title-wrapper">
                        <img src="https://www.lodhagroup.in/themes/basic/images/svg/scheme.svg" alt="Special Offer" className="section-image" />
                        <h1>Special Offer</h1>
                      </div>
                    </td>
                    <td className="info-cell">
                      <b><p>No pre-emi for 12 months and additional festive offers</p></b>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Crown Taloja Section */}
              <table className="section">
                <tbody>
                  <tr>
                    <td className="image-title-cell">
                      <div className="image-title-wrapper">
                        <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />
                        <h1>CROWN TALOJA BY LODHA - JIYO TOH AISE</h1>
                      </div>
                    </td>
                    <td className="info-cell">
                      <b>The Crown Promise </b><br />
                      <p>
                        Lodha, India's No.1^ real estate developer, presents Crown Taloja – a new brand of truly
                        affordable homes that will ensure that every hardworking family in the Mumbai Metropolitan Region (MMR) can enjoy
                        a life of no compromises, in a home that fills them with pride, at locations which ensure convenience and easy commutes.
                        Jiyo Toh Aise!
                      </p>
                      <p>^By residential sales of FY 16-23.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

            <div>

              <div className="plans-container">
                <div className="plans-title">
                  <div className="image-title-wrapper">
                    <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />
                    <h1 className='amenities'>Plans <br />& Prices</h1>
                  </div>
                </div>

                <div className="plans-box-container">
                  {/* Plan 1 */}
                  <div className="plan-box">
                    <h3>Type</h3>
                    <p>1 BED</p>
                    <h3>Starting</h3>
                    <p>₹ 31.99 Lacs+</p>
                    <button className="details-button">View Details</button>
                  </div>

                  {/* Plan 2 */}
                  <div className="plan-box">
                    <h3>Type</h3>
                    <p>2 BED</p>
                    <h3>Starting</h3>
                    <p>₹ 48.99 Lacs+</p>
                    <button className="details-button">View Details</button>
                  </div>
                </div>
              </div>

            </div>
            <div className='information-section'>
              <table className="section">
                <tbody>
                  <tr>
                    <td className="image-title-cell">
                      <div className="image-title-wrapper">
                        <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />
                        <h1>LIFE AT CROWN TALOJA</h1>
                      </div>
                    </td>
                    <td className="info-cell">
                      <p>
                        Crown Taloja does not only bring you well-designed homes, but also a range of services that will enrich your life. Whether it’s the security of your family, necessities like water and electricity or connectivity services, everything has been designed keeping you at the center.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <img src="https://s3.ap-south-1.amazonaws.com/lodhagroup.in-tfz/Codename-Goldendream/1000x400_life_at_01.jpg" className='Goldendream-project-image' alt="Image" />

            </div>



            <div>
              <div className="section-header crown-info">
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
            <div className='service-class'>
              <div className="image-title-wrapper">
                <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />

                <h1>OUR&nbsp;</h1><br />
                {/* </div>
                <div> */}
                <h1>SERVICES</h1>

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
          </main>
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-left">
                <p className="breadcrumb">Home &gt; Residential Projects &gt; Crown Taloja &gt; About</p>
                <hr className="breadcrumb-line" />
                <div className="footer-info">
                  <div className="footer-links">
                    © LODHAGroup 2022
                    <a href="#">Site Map</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>

                  </div>
                  <div className="footer-right">
                    <button className="more-btn">More v</button>
                  </div>
                </div>
              </div>


            </div>
          </footer>
        </div>

      )}
    </div>
  );
}

export default App;
