import React from "react";

const About = () => {
  return (
    <div className="bg-[#ccff00] text-black p-8 mt-10">
      <div className="w-full h-[1px] bg-black my-10"></div>
      <div className="flex sm:flex-row flex-col justify-between my-3">
        <h1 className="sm:w-[40%] text-[38px] font-medium">About us</h1>

        <p className="sm:w-[60%]">
          This is a space to share more about the business: who&apos;s behind it,
          what it does and what this site has to offer. It&aposs an opportunity to
          tell the story behind the business or describe a special service or
          product it offers. You can use this section to share the company&apos;s
          history or highlight a particular feature that sets it apart from
          competitors. <br /> <br /> Let the writing speak for itself. Keep a consistent tone
          and voice throughout the website to stay true to the brand image and
          give visitors a taste of the company&apos;s values and personality.
        </p>
      </div>
    </div>
  );
};

export default About;
