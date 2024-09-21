import React from 'react';
import Image from 'next/image';
import { Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <main className="container">
      <div className="w-full max-w-6xl mt-10 mb-10 pt-10 bg-secondary/50 rounded-3xl">
        <div className="flex flex-col md:flex-row gap-10 p-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-quinary mb-6">About Us</h1>
            <p className="text-primary/90 mb-4">
              We are a passionate team dedicated to bringing you the best
              products and experiences. Our journey began with a simple idea: to
              make quality accessible to everyone.
            </p>
            <p className="text-primary/90 mb-4">
              Today, we continue to innovate and strive for excellence in
              everything we do. Our commitment to quality and customer
              satisfaction remains at the core of our business.
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

        <div className="bg-secondary mb-10 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-quinary mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-primary mb-2" />
              <h3 className="text-xl font-semibold text-quinary mb-2">
                Customer First
              </h3>
              <p className="text-primary/90">
                We prioritize our customers in every decision we make.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target className="w-12 h-12 text-primary mb-2" />
              <h3 className="text-xl font-semibold text-quinary mb-2">
                Quality Focus
              </h3>
              <p className="text-primary/90">
                We never compromise on the quality of our products and services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sparkles className="w-12 h-12 text-primary mb-2" />
              <h3 className="text-xl font-semibold text-quinary mb-2">
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
