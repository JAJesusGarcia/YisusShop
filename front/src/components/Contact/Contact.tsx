import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from 'lucide-react';
import Button from '../Button/Button';

const Contact = () => {
  return (
    <main>
      <div className="w-full max-w-6xl pt-10 mt-10 mb-10 mx-auto bg-secondary/50 rounded-3xl">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-quinary mb-6">Contact Us</h1>
          <p className="text-primary mb-8">
            We'd love to hear from you. Please fill out the form below or use
            our contact information to get in touch.
          </p>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-quinary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className=" w-full p-2 rounded bg-primary/10 text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-quinary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded bg-primary/10 text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-quinary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 rounded bg-primary/10 text-primary"
                  ></textarea>
                </div>
                <button
                  className="py-2 px-4 border-2 rounded transition-all hover:scale-105 duration-300 active:scale-100 mt-10 text-secondary bg-primary border-primary font-bold hover:bg-secondary hover:text-primary hover:border-primary relative z-10"
                  disabled
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2 space-y-6">
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-2xl font-bold text-quinary mb-4">
                  My Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-2" />
                    <span className="text-primary">
                      Rosario, Santa Fe - Argentina
                    </span>
                  </div>

                  <div className="flex items-center">
                    <SquareArrowOutUpRight className="w-6 h-6 text-primary mr-2" />
                    <span className="text-primary">
                      <a
                        className="hover:text-suse-500"
                        href="https://synergy2devs.com"
                        target="_blank"
                      >
                        www.synergy2devs.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-quinary/15 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-quinary mb-4">
                  More Contact
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-2" />
                    <span className="text-primary">(+54) 3416153479</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-2" />
                    <span className="text-primary">
                      jgarcia@synergy2devs.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-6 h-6 text-primary mr-2" />
                    <a
                      href="https://github.com/JAJesusGarcia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/JAJesusGarcia
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-6 h-6 text-primary mr-2" />
                    <a
                      href="https://www.linkedin.com/in/jesusjagarcia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/JesusGarcia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
