import Link from "next/link";
import { FaHome, FaUserAlt, FaProjectDiagram, FaDownload } from "react-icons/fa"; // Import icons

const navItems = {
  "/": {
    name: "home",
    icon: <FaHome />, // Icon for home
    link: "", // Link to the home page
  },
  "/about": {
    name: "about",
    icon: <FaUserAlt />, // Icon for about
    link: "", // Link to the about page
  },
  "/projects": {
    name: "projects",
    icon: <FaProjectDiagram />, // Icon for projects
    link: "", // Link to the
  },
  "/resume": {
    name: "resume",
    icon: <FaDownload />, // Icon for download
    link: "/path/to/your/resume.pdf", // Path to your resume file
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, icon, link }]) => {
              // Check if the item is for resume download
              if (name === "resume") {
                return (
                  <a
                    key={path}
                    href={link} // Link to the resume file
                    download="Ayyash Zamny Resume.pdf" // Download attribute with file name
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center py-1 px-2 m-1">
                    <span className="mr-2">{icon}</span>
                    {name}
                  </a>
                );
              }
              
              // Regular navigation items
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center py-1 px-2 m-1">
                  <span className="mr-2">{icon}</span> {/* Add the icon */}
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
