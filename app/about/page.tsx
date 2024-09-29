import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaPhp, FaJava } from "react-icons/fa";
import { SiMongodb, SiMysql, SiArduino, SiLaravel } from "react-icons/si"; // Additional tech stack icons

const skills = {
  frontend: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap"],
  backend: ["Node.js", "Express.js", "PHP", "Laravel"],
  databases: ["MongoDB", "MySQL"],
  iot: ["Arduino"],
};

const programmingLanguages = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Java", icon: <FaJava /> },
];

const achievements = [
  "Gold Medal at Kaohsiung International Invention & Design Expo (Taiwan, 2019)",
  "Finalist at Intel International Science and Engineering Fair (USA, 2019)",
  "Gold Medal at International Young Inventors Award (Indonesia, 2017)",
  "President's Scout Award (Sri Lanka Scout Association, 2022)",
  "Gold Medal at National Muay Thai Championship (2020)",
  "Gold Medal at Sahasak Nimawum National Exhibition for Inventions & Innovation (2019)",
];

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Asipiya Soft Solutions",
    duration: "June 2024 - Sep 2024",
    description:
      "Developed and maintained backend & frontend for Micro Finance application using Laravel. Created Jira-like interface for the Invoice application using React.js. Built complex interfaces for a Finance application using Laravel.",
  },
  {
    title: "IoT System Developer for Agricultural Monitoring",
    company: "Group Project",
    duration: "Ongoing",
    description:
      "Developed IoT hardware with Arduino Uno for real-time agricultural monitoring. Visualized sensor data using React.js for live monitoring and implemented an automatic watering system with SMS alerts.",
  },
];

const education = [
  {
    degree: "BSc (Hons) in IT Specialization in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    duration: "2022 - Present",
    gpa: "CGPA: 3.30 / 4.0",
  },
  {
    degree: "G.C.E A/L in Physical Science",
    institution: "Zahira College Mawanella",
    duration: "2019 - 2021",
    notes: "Senior Prefect, President of New Inventors Club and Photography Club",
  },
];

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <p className="mb-4">
        I am Ayyash Zamny, a Software Engineering student at Sri Lanka Institute of Information Technology. With a passion for developing innovative solutions, I have worked on a variety of projects ranging from web development to IoT systems.
      </p>

      {/* Skills Section */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Skills</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Frontend</h3>
          <p>{skills.frontend.join(", ")}</p>
        </div>
        <div>
          <h3 className="font-semibold">Backend</h3>
          <p>{skills.backend.join(", ")}</p>
        </div>
        <div>
          <h3 className="font-semibold">Databases</h3>
          <p>{skills.databases.join(", ")}</p>
        </div>
        <div>
          <h3 className="font-semibold">IoT</h3>
          <p>{skills.iot.join(", ")}</p>
        </div>
      </div>

      

      {/* Work Experience Section */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Work Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-500">{job.company} - {job.duration}</p>
          <p className="text-gray-700">{job.description}</p>
        </div>
      ))}

      {/* Education Section */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{edu.degree}</h3>
          <p className="text-gray-500">{edu.institution} - {edu.duration}</p>
          {edu.gpa && <p className="text-gray-700">{edu.gpa}</p>}
          {edu.notes && <p className="text-gray-700">{edu.notes}</p>}
        </div>
      ))}

      {/* Programming Languages Section */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Programming Languages</h2>
      <ul className="flex flex-wrap gap-6">
        {programmingLanguages.map(({ name, icon }, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-3xl">{icon}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>

      {/* Achievements Section */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Achievements</h2>
      <ul className="list-disc pl-5 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}
