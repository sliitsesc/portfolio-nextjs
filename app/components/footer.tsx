import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
         
          <div className="flex mt-2 space-x-4">
            <a
              href="https://github.com/ayyashzamny"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayyashzamny/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/ayyashzamny/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/mohmmed.ayyash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} AyyTec
      </p>
    </footer>
  );
}
