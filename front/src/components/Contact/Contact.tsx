"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const showAlert = (
    message: string | React.ReactNode,
    icon: "success" | "error" | "warning" | "info",
    callback?: () => void,
  ) => {
    MySwal.fire({
      html: <p>{message}</p>,
      icon: icon,
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      willClose: () => {
        if (callback) {
          callback();
        }
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      // MySwal.fire({
      //   title: <p>Message Sent Successfully!</p>,
      //   icon: "success",
      //   backdrop: true,
      //   toast: true,
      //   position: "center",
      //   confirmButtonText: "OK",
      // });

      showAlert("Message Sent Successfully!", "success");
      // Clear form inputs
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <main>
      <div className="mx-auto my-10 w-full max-w-6xl rounded-3xl bg-secondary/50 pt-10">
        <div className="p-8">
          <h1 className="mb-6 text-4xl font-bold text-quinary">Contact Us</h1>
          <p className="mb-8 text-primary">
            We would love to hear from you. Please fill out the form below or
            use our contact information to get in touch.
          </p>

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="md:w-1/2">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-quinary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded bg-primary/10 p-2 text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-quinary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded bg-primary/10 p-2 text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-quinary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded bg-primary/10 p-2 text-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="relative z-10 mt-10 rounded border-2 border-primary bg-primary px-4 py-2 font-bold text-secondary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary hover:text-primary active:scale-100"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6 md:w-1/2">
              <div className="rounded-xl bg-secondary p-6">
                <h2 className="mb-4 text-2xl font-bold text-quinary">
                  My Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2 size-6 text-primary" />
                    <span className="text-primary">
                      Rosario, Santa Fe - Argentina
                    </span>
                  </div>

                  <div className="flex items-center">
                    <SquareArrowOutUpRight className="mr-2 size-6 text-primary" />
                    <span className="text-primary">
                      <a
                        className="hover:text-suse-500"
                        href="https://synergy2devs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.synergy2devs.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-quinary/15 p-6">
                <h2 className="mb-4 text-2xl font-bold text-quinary">
                  More Contact
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-2 size-6 text-primary" />
                    <span className="text-primary">(+54) 3416153479</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 size-6 text-primary" />
                    <span className="text-primary">
                      jgarcia@synergy2devs.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-2 size-6 text-primary" />
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
                    <Linkedin className="mr-2 size-6 text-primary" />
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
