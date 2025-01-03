import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#ccff00] text-black p-8">
      <div className="w-full border-b border-black my-5"></div>
      <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-10 my-3">
        <div className="space-y-4">
          <h1 className="sm:w-[40%] text-[38px] font-medium">Contact</h1>

          <p className="w-1/2">
            500 Terry Francine St. San Francisco, CA 94158 123-456-7890
            info@mysite.com
          </p>

          <div className="flex items-center gap-2">
            <span className="bg-[#020300] text-[#ccff00] flex justify-center items-center p-1 rounded-full">
              {" "}
              <FaFacebookF className="text-[#ccff00] text-[17px]" />
            </span>
            <span className="bg-[#020300] text-[#ccff00] flex justify-center items-center p-1 rounded-full">
              {" "}
              <FaYoutube className="text-[#ccff00] text-[17px]" />
            </span>
            <span className="bg-[#020300] text-[#ccff00] flex justify-center items-center p-1 rounded-full">
              {" "}
              <FaInstagram className="text-[#ccff00] text-[17px]" />
            </span>
            <span className="bg-[#020300] text-[#ccff00] flex justify-center items-center p-1 rounded-full">
              {" "}
              <FaTiktok className="text-[#ccff00] text-[17px]" />
            </span>
            <span className="bg-[#020300] text-[#ccff00] flex justify-center items-center p-1 rounded-full">
              {" "}
              <FaPinterest className="text-[#ccff00] text-[17px]" />
            </span>
            <span className="bg-[#020300] text-[#ccff00] flex justify-center items-center p-1 rounded-full">
              {" "}
              <FaLinkedinIn className="text-[#ccff00] text-[17px]" />
            </span>
          </div>
        </div>

        <div className="sm:w-[60%]">
          <h1 className="text-[40px] font-medium">
            Reach out to submit a resource
          </h1>
          <form action="" className="md:space-y-5 space-3 sm:my-0 my-3">
            <div className="flex md:flex-row flex-col md:items-center md:gap-5 gap-2">
              <div className="space-y-5">
                {" "}
                <label htmlFor="">First name *</label> <br />
                <input
                  type="text"
                  className="bg-transparent border-b border-black focus:outline-none lg:w-[300px] md:w-[200px] w-full"
                />
              </div>
              <div className="space-y-5">
                {" "}
                <label htmlFor="">Last name *</label> <br />
                <input
                  type="text"
                  className="bg-transparent border-b border-black focus:outline-none  lg:w-[300px] md:w-[200px] w-full"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center md:gap-5 gap-2">
              <div className="space-y-5">
                {" "}
                <label htmlFor="">Email *</label> <br />
                <input
                  type="text"
                  className="bg-transparent border-b border-black focus:outline-none  lg:w-[300px] md:w-[200px] w-full"
                />
              </div>
              <div className="space-y-5">
                {" "}
                <label htmlFor="">Choose a category</label> <br />
                <select
                  id="productSize"
                  name="size"
                  className="bg-transparent border-b border-black focus:outline-none  lg:w-[300px] md:w-[200px] w-full"
                >
                  <option value=""></option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center w-full">
              <div className="space-y-5">
                {" "}
                <label htmlFor="">Message</label> <br />
                <textarea className="bg-transparent border-b border-black focus:outline-none  lg:w-[600px] md:w-[400px] w-full" />
              </div>
            </div>
            <button className="w-fit mt-2 px-8 py-[10px] border border-black hover:border-[#ccff00] hover:text-[#ccff00] hover:bg-black text-black duration-150 rounded-3xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
