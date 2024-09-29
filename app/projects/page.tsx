import Image from "next/image";

const projects = [
  {
    title: "Medical Laboratory Information Management System",
    description: "A system for managing laboratory tests, where users can create accounts, book appointments, and download test reports.",
    stack: "HTML, CSS, JavaScript, PHP",
    link: "https://github.com/ayyashzamny/ARM_MediLab.git",
  },
  {
    title: "Vehicle Rental System",
    description: "A platform where vehicle owners can list their vehicles, and users can rent the cars available on the page.",
    stack: "HTML, CSS, JavaScript, Java",
    link: "https://github.com/ayyashzamny/Vehicle-Rental-System.git",
  },
  {
    title: "Certificate Verification System",
    description: "A system that allows users to verify certificates by entering the certificate ID to check for validity.",
    stack: "HTML, CSS, JavaScript, PHP",
    link: "http://test-web-institute.free.nf/?i=1",
  },
  {
    title: "Tailor Management System",
    description: "An online order management system for tailor shops, where users can place orders and shop owners can manage them.",
    stack: "React, Express.js, Node.js, MongoDB",
    link: "https://github.com/ayyashzamny/MSR-ITP.git",
  },
  {
    title: "IoT System for Agricultural Monitoring",
    description: "An IoT solution for real-time agricultural monitoring, including automated watering and SMS alerts for low moisture levels.",
    stack: "React, Express.js, Node.js, MySQL, Arduino",
    link: "",
  },
  {
    title: "Employee Leave Management System",
    description: "A system where employees can apply for leave, and admins can approve or reject requests.",
    stack: "Laravel",
    link: "https://github.com/ayyashzamny/Employee-Leave-System-Laravel.git",
  },
  {
    title: "IS Interiors Website Development",
    description: "A website for an interior design shop to showcase their products and services.",
    stack: "HTML, CSS, JavaScript, PHP",
    link: "",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <div className="space-y-8"> {/* space-y-8 adds space between the project cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg transition hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-gray-800 font-medium mb-2">
              Stack: {project.stack}
            </p>
            {project.link && (
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
