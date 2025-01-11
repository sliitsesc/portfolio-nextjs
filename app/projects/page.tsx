import { FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaReact, FaNodeJs ,FaLaravel} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql ,SiArduino} from "react-icons/si";

const projects = [
  {
    title: " MediX- Healthcare Management System",
    description: "Manage roles for admin, employee, and doctor accounts. Track and approve leave requests and manage employee schedules. Patients can book appointments, and admins manage doctor availability and schedules.",
    stack: ["react", "express", "node", "mysql"],
    link: "https://github.com/ayyashzamny/medi-x-csse.git",
  },
  
  
  {
    title: "Tailor Management System",
    description: "An online order management system for tailor shops, where users can place orders and shop owners can manage them.",
    stack: ["react", "express", "node", "mongodb"],
    link: "https://github.com/ayyashzamny/MSR-ITP.git",
  },
  {
    title: "IoT System for Agricultural Monitoring",
    description: "An IoT solution for real-time agricultural monitoring, including automated watering and SMS alerts for low moisture levels.",
    stack: ["react", "express", "node", "mysql", "arduino"],
    link: "",
  },
  {
    title: "Employee Leave Management System",
    description: "A system where employees can apply for leave, and admins can approve or reject requests.",
    stack: ["html", "css", "javascript","laravel"],
    link: "https://github.com/ayyashzamny/Employee-Leave-System-Laravel.git",
  },
  {
    title: "Vehicle Rental System",
    description: "A platform where vehicle owners can list their vehicles, and users can rent the cars available on the page.",
    stack: ["html", "css", "javascript", "java"],
    link: "https://github.com/ayyashzamny/Vehicle-Rental-System.git",
  },
];

const techIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  javascript: <FaJs />,
  php: <FaPhp />,
  java: <FaJava />,
  react: <FaReact />,
  node: <FaNodeJs />,
  mongodb: <SiMongodb />,
  express: <SiExpress />,
  mysql: <SiMysql />,
  // Text for technologies without icons:
  arduino: <SiArduino />,
  laravel: <FaLaravel />,
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg transition hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex space-x-4 mb-2 text-white">
              {project.stack.map((tech, idx) => (
                <div key={idx} className="text-xl">
                  {techIcons[tech] ? techIcons[tech] : tech} {/* Use icons or text */}
                </div>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="text-blue-500 hover:underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="mr-2" /> View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
