import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

const SubFooter = () => {
  return (
    <div className="mt-10 bg-secondary p-4 py-20">
      <div className="mx-auto flex max-w-screen-xl flex-wrap gap-8 lg:flex-wrap">
        <div className="order-first min-w-[250px] flex-1 rounded-md bg-secondary p-4 lg:order-none">
          <Link href="/" className="text-xl font-bold text-quinary">
            Yisus
            <span className="text-tertiary">
              Shop<span className="text-primary/70">!</span>
            </span>
          </Link>
          <br />
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the...
          </p>
          <br />
          <div className="flex space-x-4">
            <a
              href="https://github.com/JAJesusGarcia"
              target="_blank"
              className="text-gray-600 transition-colors duration-300 hover:text-primary"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jesusjagarcia/"
              target="_blank"
              className="text-gray-600 transition-colors duration-300 hover:text-primary"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/synergy2devs/"
              target="_blank"
              className="text-gray-600 transition-colors duration-300 hover:text-primary"
            >
              <AiFillInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-around gap-5 lg:flex-1 lg:flex-nowrap">
          {[
            {
              title: "Useful Links",
              links: [
                "How it works",
                "Cancellations",
                "Getting Started",
                "Photo Gallery",
              ],
            },
            {
              title: "Our Services",
              links: [
                "Adventures",
                "Expert Interview",
                "Remodeling",
                "Roofing",
              ],
            },
            {
              title: "Market Sectors",
              links: [
                "Automotive Parts & System",
                "Power & Energy",
                "Aero Space",
                "Ship Building Industry",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="min-w-[200px] max-w-[200px] flex-1 rounded-md bg-secondary p-4"
            >
              <h3 className="mb-2 text-lg font-bold text-quinary">
                {section.title}
              </h3>
              <div className="flex flex-col space-y-2">
                {section.links.map((link, linkIndex) => (
                  <ul className="">
                    <a
                      key={linkIndex}
                      href="#"
                      className="text-center text-tertiary transition-colors duration-300 hover:rounded-md hover:text-primary"
                    >
                      {link}
                    </a>
                  </ul>
                ))}
              </div>
            </div>
          ))}
          <div className="min-w-[200px] max-w-[200px] flex-1 rounded-md bg-secondary p-4 text-center">
            <h3 className="text-lg font-bold text-quinary">Newsletter</h3>
            <p className="text-center text-tertiary">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
