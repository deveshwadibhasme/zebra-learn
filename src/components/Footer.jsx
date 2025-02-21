import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* For Traders Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">For Traders</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Trading Mastermind</a></li>
            <li><a href="#" className="hover:text-white transition">Futures & Options Blueprint</a></li>
            <li><a href="#" className="hover:text-white transition">51 Trading Strategies</a></li>
          </ul>
        </div>

        {/* For Investors Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">For Investors</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Money Smart in your 20s & 30s</a></li>
            <li><a href="#" className="hover:text-white transition">Stock Investing Mastermind</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Books & Courses</a></li>
            <li><a href="#" className="hover:text-white transition">Schools</a></li>
            <li><a href="#" className="hover:text-white transition">Authors</a></li>
            <li><a href="#" className="hover:text-white transition">Partnerships & Collaborations</a></li>
            <li><a href="#" className="hover:text-white transition">Login</a></li>
            <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">For Designer</a></li>
            <li><a href="#" className="hover:text-white transition">For Writers</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Help & Support</a></li>
          </ul>
        </div>
      </div>

      {/* Shop Products Button */}
      <div className="mt-12">
        <a 
          href="#" 
          className="inline-flex items-center text-white hover:text-gray-300 transition"
        >
          <span className="text-xl font-semibold">Shop Products</span>
          {/* <ChevronRight className="ml-2" /> */}
        </a>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            ZEBRA<span className="font-normal">LEARN</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-transparent border-2 border-[#FF4405] text-[#FF4405] px-4 py-2 rounded hover:bg-[#FF4405] hover:text-white transition">
              Use App
            </button>
            <button className="bg-[#FF4405] text-white px-6 py-2 rounded hover:bg-[#FF3300] transition">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer