import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';

const SubFooter = () => {
  return (
    <div className="bg-secondary pt-20 pb-20 p-4 mt-10">
      <div className="flex flex-wrap lg:flex-wrap gap-8 max-w-screen-xl mx-auto">
        <div className="flex-1 min-w-[250px] bg-secondary p-4 rounded-md order-first lg:order-none">
          <Link href="/" className="text-quinary text-xl font-bold">
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
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jesusjagarcia/"
              target="_blank"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/synergy2devs/"
              target="_blank"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <AiFillInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-around gap-5 lg:flex-nowrap lg:flex-1">
          {[
            {
              title: 'Useful Links',
              links: [
                'How it works',
                'Cancellations',
                'Getting Started',
                'Photo Gallery',
              ],
            },
            {
              title: 'Title...',
              links: [
                'Adventures',
                'Expert Interview',
                'Remodeling',
                'Roofing',
              ],
            },
            {
              title: 'Our Services',
              links: [
                'Automotive Parts & System',
                'Power & Energy',
                'Aero Space',
                'Ship Building Industry',
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="flex-1 min-w-[200px] max-w-[200px] bg-secondary p-4 rounded-md"
            >
              <h3 className="font-bold text-lg text-quinary mb-2">
                {section.title}
              </h3>
              <div className="flex flex-col space-y-2">
                {section.links.map((link, linkIndex) => (
                  <ul className="">
                    <a
                      key={linkIndex}
                      href="#"
                      className="text-tertiary hover:text-primary hover:rounded-md text-center transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </ul>
                ))}
              </div>
            </div>
          ))}
          <div className="flex-1 text-center min-w-[200px] max-w-[200px] bg-secondary p-4 rounded-md">
            <h3 className="font-bold text-lg text-quinary">Newsletter</h3>
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
