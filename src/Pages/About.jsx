import MyImageOne from '../assets/my_photo.png';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the styles
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";

import { SiJquery,SiTailwindcss,   SiC } from "react-icons/si"; 
import { FaHtml5, FaCss3Alt } from "react-icons/fa"; 

import { SiMongodb, SiJavascript, SiGit, SiPostman, SiExpress, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-700 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: "Git", icon: <SiGit className="text-red-600 text-5xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600 text-5xl" /> }, // New Skill: Express.js
  { name: "Java", icon: <FaJava className="text-blue-700 text-5xl" /> }, // New Skill: Java
  { name: "C", icon: <SiC className="text-blue-500 text-5xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-700 text-5xl" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-5xl" /> },
  { name: "Vercel", icon: <FaDocker className="text-black text-5xl" /> }, 
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> }, // MySQL icon
];

const About = () => {
  return (
    <section id="about" className="pt-20 p-8 bg-gray-100">
      
      <div className="max-w-6xl mx-auto">

      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 shadow-lg rounded-[40px] px-10 py-4 flex space-x-10 text-lg font-medium z-1">


  <a href="#experience" className="hover:text-blue-600 transition duration-300">Experience</a>
  <a href="#education" className="hover:text-blue-600 transition duration-300">Education</a>
  <a href="#skills" className="hover:text-blue-600 transition duration-300">Skills</a>
  <a href="#hobbies" className="hover:text-blue-600 transition duration-300">Hobbies</a>
</div>

        
        {/* Transparent Background for "About Me" */}
        <div className="bg-white bg-opacity-80 p-8 rounded-[30px] shadow-xl mt-16 flex flex-col md:flex-row items-center">
  {/* Photo on the left */}
  <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-8">
    <img 
      src={MyImageOne} 
      alt="Your Photo" 
      className="w-full h-auto rounded-full shadow-lg transform hover:scale-105 transition-all duration-300" 
    />
  </div>

  {/* About Text Section */}
  <div className="w-full md:w-2/3">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">About Me</h2>
    <p className="text-lg mb-6 text-gray-800">
      I am a passionate full-stack developer with a strong foundation in backend development and web technologies.
      I am skilled in React, MERN stack, Java, and JavaScript. I love solving challenging problems and building dynamic
      web applications that provide users with seamless experiences. My goal is to keep growing as a developer and contribute to
      impactful projects.
    </p>

    {/* LeetCode and HackerRank Buttons */}
    <div className="flex space-x-4">
      <a 
        href="https://leetcode.com/u/GAGAN_N_SALIAN/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        LeetCode
      </a>
      <a 
        href="https://www.hackerrank.com/profile/saliangagan00" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
      >
        HackerRank
      </a>
    </div>
  </div>
</div>


{/* 
============================================================EXPERIRNCE======================================================= */}
 <h3 id="experience" className="text-2xl font-semibold mt-8 mb-4 relative inline-block">
  Experience Timeline
  <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-1"></span>
</h3>


        <VerticalTimeline>
          {/* Software Development Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Jun 2024"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<i className="fas fa-laptop-code"></i>}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Accolade Tech Solutions</h4>
            <p>May 2024 - Jun 2024 (2 months)</p>
            <p>
              As a Software Development Intern at Accolade Tech Solutions, I worked on web-based applications using MERN stack technologies. 
              My primary focus was building dynamic user interfaces with React.js, integrating backend APIs with Express.js, and optimizing 
              frontend functionalities.
            </p>
          </VerticalTimelineElement>

          {/* Incubation Center Project */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Nov 2024"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<i className="fas fa-building"></i>}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer & UI/UX Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Incubation Center Website</h4>
            <p>Jan 2024 - Nov 2024</p>
            <p>
              Worked on developing the Incubation Center website for my college using the MERN stack. As a frontend developer, I designed 
              intuitive user interfaces with a focus on seamless user experience. I also worked as a UI/UX designer, creating wireframes 
              and prototypes to enhance the overall design.
            </p>
          </VerticalTimelineElement>

          {/* Python Internship at Codfost */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="15 Jul 2023 - 15 Aug 2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<i className="fas fa-code"></i>}
          >
            <h3 className="vertical-timeline-element-title">Python Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Codfost</h4>
            <p>15 Jul 2023 - 15 Aug 2023</p>
            <p>
              During my Python internship at Codfost, I worked with Tkinter to build desktop applications, including tools like a to-do 
              list manager and a simple calculator. I gained hands-on experience in GUI development and developed problem-solving skills.
            </p>
          </VerticalTimelineElement>

          {/* Web Developer at Technohacks */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="20 Aug 2023 - 20 Sep 2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<i className="fas fa-laptop-code"></i>}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Technohacks</h4>
            <p>20 Aug 2023 - 20 Sep 2023</p>
            <p>
              As a Web Developer at Technohacks, I worked on building and deploying web applications using HTML, CSS, JavaScript, and 
              React. My tasks included creating responsive web pages, implementing interactive features, and ensuring cross-browser compatibility.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>


{/* ===========================================================EDUCATION============================================= */}

        <h3 id="education" className="text-2xl font-semibold mt-8 mb-4 relative inline-block">
  Education Timeline
  <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-1"></span>
</h3>

        <VerticalTimeline>
                   {/* First Education Entry */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<i className="fas fa-graduation-cap"></i>}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology (B.Tech) - Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Srinivas University Institute of Engineering and Technology
            </h4>
            <p>CGPA: 9+ (Currently Pursuing)</p>
            <p>
              I am currently pursuing my Bachelors in Computer Science. My main focus areas are backend development, web technologies, 
              and software engineering principles. Through various projects, I have enhanced my problem-solving and coding skills.
            </p>
          </VerticalTimelineElement>

          {/* Second Education Entry */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021"
            iconStyle={{ background: "#e5c35c", color: "#fff" }}
            icon={<i className="fas fa-book"></i>}
          >
            <h3 className="vertical-timeline-element-title">2nd PUC (Pre-University Course)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Poornaprajna PU College, Admar
            </h4>
            <p>Percentage: 75%</p>
            <p>
              Focused on Science and Mathematics, which helped me develop a strong foundation for pursuing engineering. 
              It was during this time that I discovered my passion for programming and problem-solving.
            </p>
          </VerticalTimelineElement>

          {/* Third Education Entry */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019"
            iconStyle={{ background: "#e5c35c", color: "#fff" }}
            icon={<i className="fas fa-book"></i>}
          >
            <h3 className="vertical-timeline-element-title">SSLC (Secondary School Leaving Certificate)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Poornaprajna English Medium School, Admar
            </h4>
            <p>Percentage: 80.48%</p>
            <p>
              Completed my secondary education with a focus on building a strong academic foundation. This phase played a key role in 
              shaping my curiosity towards technology and problem-solving.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>


 {/* Skills Section */}
<div id="skills" className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
  <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Expertise</h3>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
    {/* Skill Icons */}
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 flex flex-col items-center"
      >
        {skill.icon}
        <p className="mt-2 text-lg font-medium text-gray-800">{skill.name}</p>
      </div>
    ))}
  </div>

  {/* Skills Progress Section */}
  <div className="mt-12">
    <h4 className="text-xl font-semibold text-center mb-6">Skill Proficiency</h4>

    {/* Frontend */}
    <div className="mb-6">
      <p className="text-lg font-medium text-gray-800">Frontend (80%)</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* Backend */}
    <div className="mb-6">
      <p className="text-lg font-medium text-gray-800">Backend (60%)</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
      </div>
    </div>

    {/* Programming */}
    <div className="mb-6">
      <p className="text-lg font-medium text-gray-800">Programming (70%)</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
      </div>
    </div>
  </div>
</div>



<div className="bg-white shadow-lg rounded-xl p-6 mt-6">
<h3 id="hobbies" className="text-2xl font-semibold mt-8 mb-4 relative inline-block">
  Hobbies
  <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-1"></span>
</h3>
  <div className="grid grid-cols-2 gap-4">
    {["Drawing", "Listening to music", "Designing", "Exploring new technologies"].map((hobby, index) => (
      <div
        key={index}
        className="p-4 rounded-lg shadow-md text-lg font-medium text-gray-800 text-center transition-transform transform hover:scale-105"
        style={{
          backgroundColor: ["#f1f1f1", "#e0e0e0", "#d1d1d1", "#c0c0c0"][index % 4],
          color: "#333"
        }}
      >
        {hobby}
      </div>
    ))}
  </div>
</div>



      </div>
    </section>
  );
};

export default About;
