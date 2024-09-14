import React from 'react'

const RequestForm = () => {
    return (
        <div className="form-container text-left pt-5 absolute right-0 top-0" style={{ paddingTop: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: 'auto' }}>
            <form className="w-full max-w-lg">
                <h1 className='text-center text-2xl font-normal text-black'>REQUEST A CALL BACK</h1>
                <label>
                    <input type="text" name="name" required placeholder="Name" className="block w-full border p-2 mb-4" />
                </label>
                <label>
                    <input type="email" name="email" required placeholder="Email" className="block w-full border p-2 mb-4" />
                </label>
                <label>
                    <select name="country" className="block w-full border p-2 mb-4">
                        <option value="India">India</option>
                    </select>
                </label>
                <label>
                    <select name="state" className="block w-full border p-2 mb-4">
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </label>
                <label className='mb-10'>
                    <input type="text" name="mobile" required placeholder="Mobile No. (Without Country Code):" className="block w-full border p-2 mb-4" />
                </label>
                <label className='mb-4'>
                    <input type="checkbox" name="whatsapp" /> Receive updates on WhatsApp
                </label>
                <label className='flex gap-5 mt-4 mb-10'>
                    <div>
                        <input type="checkbox" name="enquire" /> Enquire
                    </div>
                    <div>
                        <input type="checkbox" name="site-visit" /> Book a site visit
                    </div>
                </label>
                <div className="flex items-center gap-1">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
                    <p className='font-bold m-0 p-0'>Call: 022-50030139</p>
                </div>
            </form>
        </div>
    )
}

export default RequestForm
