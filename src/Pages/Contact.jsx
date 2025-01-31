import MyImageOne from '../assets/my_photo.png';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 relative">
      
      {/* =========================Left Side - Profile Image & Contact Info ==================================*/}

      
      <div className="md:w-1/2 flex flex-col items-center text-white">
        <div className="relative">
          {/* Floating Shadow Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#3b82f6] blur-3xl opacity-40 rounded-full"></div>

          {/* Profile Image */}
          <img 
            src={MyImageOne} 
            alt="Gagan N Salian"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 relative"
          />
        </div>
        
        <h2 className="text-4xl font-extrabold mt-6">Gagan N Salian</h2>
        <p className="text-lg text-gray-400 mb-4">Full-Stack Developer | MERN | Java</p>

        {/* Contact Details */}
        <div className="space-y-3 text-lg text-gray-300">
          <p className="flex items-center space-x-3 hover:scale-105 transition">
            <FaEnvelope className="text-[#3b82f6] text-xl" /> 
            <a href="mailto:saliangaagn002@gmail.com" className="hover:underline">
              saliangagan00@gmail.com
            </a>
          </p>
          <p className="flex items-center space-x-3 hover:scale-105 transition">
            <FaPhone className="text-[#3b82f6] text-xl" /> 
            <span>+91 XXXXX XXXXX</span> 
          </p>
          <p className="flex items-center space-x-3 hover:scale-105 transition">
            <FaLinkedin className="text-[#3b82f6] text-xl" /> 
            <a href="https://www.linkedin.com/in/gagan-n-salian-835792268/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </p>
          <p className="flex items-center space-x-3 hover:scale-105 transition">
            <FaGithub className="text-[#3b82f6] text-xl" /> 
            <a href="https://github.com/gagannsalian" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </div>





      {/*============================ Right Side - Contact Form ===========================================*/}
      <div className="md:w-1/2 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full max-w-md mt-6 md:mt-0 border border-gray-600 hover:shadow-[0_15px_40px_rgba(59,130,246,0.7)] transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Get in Touch</h2>
        <p className="text-gray-900 mb-6">
          Have a project idea or just want to say hi? Lets talk!
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-400 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-[#1e293b] text-gray-200 border-gray-500 focus:ring-2 focus:ring-[#3b82f6] outline-none shadow-lg"
            />
          </div>

          <div>
            <label className="block text-gray-400 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-[#1e293b] text-gray-200 border-gray-500 focus:ring-2 focus:ring-[#3b82f6] outline-none shadow-lg"
            />
          </div>

          <div>
            <label className="block text-gray-400 font-semibold">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-[#1e293b] text-gray-200 border-gray-500 focus:ring-2 focus:ring-[#3b82f6] outline-none shadow-lg"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3b82f6] text-white py-3 rounded-lg shadow-lg hover:bg-[#2563eb] transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-4 text-center text-gray-500 text-sm bg-[#0f172a]">
        Developed by <span className="text-gray-300 font-bold">Gagan N Salian</span> | © {new Date().getFullYear()} All Rights Reserved
      </footer>

    </div>
  );
};

export default Contact;
