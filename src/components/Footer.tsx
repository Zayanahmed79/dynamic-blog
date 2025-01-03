import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black flex md:flex-row flex-col justify-around md:items-end gap-5 px-5 py-10">
      <div>
        <ul>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">
              ABOUT
            </li>
          </Link>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">
              BLOG
            </li>
          </Link>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">
              COMMUNITIES
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">X</li>
          </Link>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">
              INSTAGRAM
            </li>
          </Link>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">
              FACEBOOK
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">
              ACCESSIBILITY STATEMENT
            </li>
          </Link>
          <Link href={"/"}>
            <li className="text-white hover:text-[#ccff00] duration-150">
              PRIVACY POLICY
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1>© 2035 by 20X HUB.  Built on Wix Studio</h1>
      </div>
    </div>
  );
};

export default Footer;
