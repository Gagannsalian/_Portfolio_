import SplashCursor from '../Components/SplashCursor';
import myImage from '../assets/MY.png';
import '../App.css'; // Ensure the CSS file is imported

const Home = () => {
  return (
    <section id="home" className="h-screen bg-gray-800 text-white flex items-center justify-center">
      {/* SplashCursor Animation */}
      <SplashCursor />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl px-6">

        {/*=========================== Left Side (Text Content) ========================*/}
        <div className="text-center sm:text-left max-w-2xl relative z-10 px-4 lg:px-8 pt-6 pb-2">
          {/* Title with Typing Animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white overflow-hidden leading-tight">
            <span className="typing-animation">
              Hi, I am Gagan N
            </span>
            <br />
            <span className="typing-animation" style={{ animationDelay: '4s' }}>
              Salian
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl sm:text-2xl lg:text-3xl">
            A Passionate Full-Stack Developer
          </p>

          {/* Buttons: Project & Resume (Side by Side) */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="https://github.com/Gagannsalian" 
              className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View My Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1wPgWOPnt2wmfe407XJrHRCijFgcKtO-y/view?usp=sharing" // Update with your actual resume path
              download
              className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/*========================== Right Side (Image)======================== */}
        <div className="hidden lg:block w-full lg:w-1/2 mt-6 lg:mt-0 overflow-hidden">
          <img
            src={myImage}
            alt="Gagan N Salian"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
