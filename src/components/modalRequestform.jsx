import React, {useState} from 'react'
import axios from 'axios'

const ModalRequestForm = ({closeModal}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '1 BHK',
        state: 'Mumbai',
        mobile: '',
        whatsapp: false,
        enquire: false,
        siteVisit: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/submit', formData);
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="form-container text-left pt-5 relative bg-white p-8 rounded-lg w-full max-w-lg" style={{ paddingTop: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: 'auto', zIndex:100}}>
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <h1 className='text-center text-2xl font-normal text-black'>REQUEST A CALL BACK</h1>
                    <label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="block w-full border p-2 mb-4"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            className="block w-full border p-2 mb-4"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <select
                            name="country"
                            className="block w-full border p-2 mb-4"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="1 BHK">1 BHK</option>
                            <option value="2 BHK">2 BHK</option>
                        </select>
                    </label>
                    <label>
                        <select
                            name="state"
                            className="block w-full border p-2 mb-4"
                            value={formData.state}
                            onChange={handleChange}
                        >
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kalyan">Kalyan</option>
                            <option value="Dombivali">Dombivali</option>
                            <option value="Navi Mumbai">Navi Mumbai</option>
                        </select>
                    </label>
                    <label className='mb-10'>
                        <input
                            type="text"
                            name="mobile"
                            required
                            placeholder="Mobile No. (Without Country Code):"
                            className="block w-full border p-2 mb-4"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='mb-4'>
                        <input
                            type="checkbox"
                            name="whatsapp"
                            checked={formData.whatsapp}
                            onChange={handleChange}
                        /> Receive updates on WhatsApp
                    </label>
                    <label className='flex gap-5 mt-4 mb-10'>
                        <div>
                            <input
                                type="checkbox"
                                name="enquire"
                                checked={formData.enquire}
                                onChange={handleChange}
                            /> Enquire
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="siteVisit"
                                checked={formData.siteVisit}
                                onChange={handleChange}
                            /> Book a site visit
                        </div>
                    </label>
                    <div className="flex items-center gap-1">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
                        <p className='font-bold m-0 p-0'>Call: +918433606213</p>
                    </div>
                </form>

                <div className="absolute text-2xl text-left right-3 top-1 cursor-pointer" onClick={()=>closeModal(false)}>&times;</div>
            </div>
        </div>
    )
}

export default ModalRequestForm
