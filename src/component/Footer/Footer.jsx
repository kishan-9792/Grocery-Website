import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className="bg-zinc-100 py-20">
            <div className="flex flex-wrap gap-10 max-w-[1400px] mx-auto px-10">
                {/* Logo + About */}
                <div className="flex-1 basis-[300px]">
                    <a href="#" className="text-3xl font-bold">
                        Gr<span className="text-orange-500 uppercase">o</span>cift
                    </a>
                    <p className="text-zinc-600 mt-6 max-w-[350px]">
                        Bred for a high content of beneficial substances. Our products are
                        all fresh and healthy.
                    </p>
                    <p className="text-zinc-800 mt-6">2025 &copy; all rights reserved</p>
                </div>

                {/* Company */}
                <ul className="flex-1 basis-[200px]">
                    <li>
                        <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500">
                            About
                        </a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500">
                            FAQ&apos;s
                        </a>
                    </li>
                </ul>

                {/* Support */}
                <ul className="flex-1 basis-[200px]">
                    <li>
                        <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500">
                            Support Center
                        </a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500">
                            Feedback
                        </a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500">
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* Stay Connected */}
                <div className="flex-1 basis-[250px]">
                    <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
                    <p className="text-zinc-600 mt-6">
                        Questions or feedback? <br />
                        We&apos;d love to hear from you.
                    </p>

                    <div className=' flex bg-white p-1 rounded-lg mt-6'>
                        <input type="email" name="email" id='email' autoCapitalize='off'  placeholder='Email Address' className='h-[5vhh] pl-4 focus:outline-none flex-1'/>
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                            <IoIosArrowForward/>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
