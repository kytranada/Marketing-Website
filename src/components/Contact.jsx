import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    toast.success("Message sent Successfully");
    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7FB3D5]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Contact
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-pastel-blue h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        We are eager and ready to help you increase your visibility and start meaningful conversations with your clients and customers. We aim for authentic human connections so that we can both grow, together.
      </p>

      <div className="lg:flex justify-center">
        {/* form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[80%] w-full px-6 py-5 shadow-xl border-t-[3px] border-b-[3px] border-pastel-blue" // Adjusted width
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Schedule a discovery call</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="name">Please enter your name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-pastel-blue outline-none text-black"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="email">Please enter your email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-pastel-blue outline-none text-black"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex gap-6 mt-4">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    {...register("businessName")} // Not strictly required on Joy's form visually, but good to have
                    type="text"
                    id="businessName"
                    placeholder="Your Company LLC"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-pastel-blue outline-none text-black"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="websiteUrl">Website URL (if applicable)</label>
                  <input
                    {...register("websiteUrl")}
                    type="url"
                    id="websiteUrl"
                    placeholder="https://example.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-pastel-blue outline-none text-black"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="howCanWeHelp">How can we help?</label>
              <textarea
                {...register("howCanWeHelp", { required: true })}
                id="howCanWeHelp"
                placeholder="Tell us about your marketing needs..."
                className="w-full h-40 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-pastel-blue outline-none resize-none text-black"
              ></textarea>
            </div>

            <div className="flex justify-center m-3 mt-6">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
