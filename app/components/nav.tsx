import Link from "next/link";
import { FaHome, FaBook, FaUserAlt, FaProjectDiagram } from "react-icons/fa"; // Import icons

const navItems = {
  "/": {
    name: "home",
    icon: <FaHome />, // Icon for home
  },
  "/blog": {
    name: "blog",
    icon: <FaBook />, // Icon for blog
  },
  "/about": {
    name: "about",
    icon: <FaUserAlt />, // Icon for about
  },
  "/projects": {
    name: "projects",
    icon: <FaProjectDiagram />, // Icon for projects
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
            {Object.entries(navItems).map(([path, { name, icon }]) => {
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
