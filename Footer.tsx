import { PiArrowFatLineRightBold } from "react-icons/pi"
const Footer = () => {
  return (
    <>

<div className="bg-black text-white px-6 py-16">
 
  <div className="flex flex-col md:flex-row gap-8 md:gap-5 justify-evenly items-center text-center md:text-left">
    
   
    <div className="space-y-4 w-full md:w-auto h-[232px]">
      <h2 className="text-2xl font-bold">Exclusive</h2>
      <h3>Subscribe</h3>
      <p>Get 10% off your order</p>
      <div className="flex items-center gap-4 p-2 border-2 border-white text-gray-500 rounded-lg w-full md:w-auto">
        <h4 className="text-lg flex-1">Enter your Email</h4>
        <PiArrowFatLineRightBold className="text-white text-xl" />
      </div>
    </div>

   
    <div className="space-y-4 w-full md:w-auto h-[232px]">
      <h2 className="font-bold text-2xl">Support</h2>
      <p>1234, Park Street,<br /> DL-11111, India</p>
      <a href="https://mail.google.com/mail" className="hover:underline">Test@testmail.com</a><br />
      <a href="tel:+918838846835" className="hover:underline">+91 8838846835</a>
    </div>

    
    <div className="space-y-4 w-full md:w-auto">
      <h3 className="font-bold text-2xl">Account</h3>
      <h6 className="hover:text-gray-400 cursor-pointer">My Account</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">Login/Register</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">Cart</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">Wish List</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">Shop</h6>
    </div>

   
    <div className="space-y-4 w-full md:w-auto">
      <h3 className="font-bold text-2xl">Quick Link</h3>
      <h6 className="hover:text-gray-400 cursor-pointer">Privacy Policy</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">Login/Register</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">Terms Of Use</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">FAQ</h6>
      <h6 className="hover:text-gray-400 cursor-pointer">Contact</h6>
    </div>

  </div>

 
  <div className="border-t-2 border-gray-500 flex justify-center bg-black text-gray-500 py-6 mt-8">
    <p className="text-lg text-center">© Copyright Harmoni 2025. All rights reserved</p>
  </div>

</div>


    </>
  )
}

export default Footer;
