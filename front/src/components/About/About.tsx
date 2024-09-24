import React from "react";
import Image from "next/image";
import { Users, Target, Sparkles } from "lucide-react";

const About = () => {
  return (
    <main className="container">
      <div className="mb-10 mt-10 w-full max-w-6xl rounded-3xl bg-secondary/50 pt-10">
        <div className="flex flex-col gap-10 p-8 md:flex-row">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-4xl font-bold text-quinary">About Us</h1>
            <p className="mb-4 text-primary/90">
              We are a passionate team dedicated to bringing you the best
              products and experiences. Our journey began with a simple idea: to
              make quality accessible to everyone.
            </p>
            <p className="mb-4 text-primary/90">
              Today, we continue to innovate and strive for excellence in
              everything we do. Our commitment to quality and customer
              satisfaction remains at the core of our business...
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://demo.phlox.pro/shop-gadget/wp-content/uploads/sites/335/2021/02/op_xianjuan-hu-uPYpcsbICI4-unsplash-scaled-486x503.jpg"
              alt="Our Team"
              width={400}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="mb-10 rounded-xl bg-secondary p-8">
          <h2 className="mb-6 text-2xl font-bold text-quinary">Our Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Users className="mb-2 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-quinary">
                Customer First
              </h3>
              <p className="text-primary/90">
                We prioritize our customers in every decision we make.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target className="mb-2 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-quinary">
                Quality Focus
              </h3>
              <p className="text-primary/90">
                We never compromise on the quality of our products and services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sparkles className="mb-2 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-quinary">
                Continuous Innovation
              </h3>
              <p className="text-primary/90">
                We constantly seek new ways to improve and innovate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
