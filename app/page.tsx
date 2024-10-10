import { FaJs, FaPhp, FaPython, FaJava, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa"; // Import programming language icons
import { SiMongodb , SiArduino} from "react-icons/si"; // Import MongoDB icon
import Image from "next/image"; // Use next/image for image optimization
import profilePic from "../public/AYS_5568.jpg"; // Import profile picture

export default function Page() {
  return (
    <section>
      <div className="flex gap-x-4 items-center flex-row mb-10">
        <Image
          src={profilePic}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full border-[2px] border-yellow-500 -ml-2 hover:grayscale transition-all duration-300"
        />
        <div>
          <p className="text-xl font-semibold">Ayyash Zamny</p>
          <p className="text-lg text-gray-400">Software Engineer Intern</p>
          {/* Programming Languages Icons */}
          <div className="flex mt-2 space-x-4 text-gray-400">
            
            <FaJs size={24} className="hover:text-gray-600" title="JavaScript" />
            <FaPhp size={24} className="hover:text-gray-600" title="PHP" />
            <FaPython size={24} className="hover:text-gray-600" title="Python" />
            <FaJava size={24} className="hover:text-gray-600" title="Java" />
            <FaReact size={24} className="hover:text-gray-600" title="React.js" />
            <FaNodeJs size={24} className="hover:text-gray-600" title="Node.js" />
            <FaLaravel size={24} className="hover:text-gray-600" title="Laravel" />
            <SiMongodb size={24} className="hover:text-gray-600" title="MongoDB" />
            <SiArduino size={24} className="hover:text-gray-600" title="Arduino" />
          </div>
        </div>
      </div>

      <p className="mb-4">
        I'm Ayyash Zamny, a Software Engineering student at the Sri Lanka Institute of Information Technology. With a CGPA of 3.30, I have gained hands-on experience in developing innovative solutions across various projects, including the Medical Laboratory Information Management System, Vehicle Rental System, and IoT-based agricultural monitoring systems.
      </p>

      <p className="mb-4">
        Over the course of my academic journey, I have honed my skills in several programming languages like Java, PHP, Python, JavaScript, and have developed proficiency in both front-end and back-end technologies. I have worked on projects ranging from certificate verification systems to employee leave management solutions, using stacks like React.js, Node.js, Laravel, and MongoDB.
      </p>

      <p className="mb-4">
        My passion for tech and innovation is complemented by achievements like winning gold medals at the Kaohsiung International Invention & Design Expo and National Muay Thai Championship. I'm always looking to learn, adapt, and take on challenges in my pursuit of building impactful software.
      </p>
    </section>
  );
}
