import React from "react";

function Footer() {
  return (
    <div className="h-[6rem] bg-[#f6cb61] flex lg:flex-row flex-col items-center justify-evenly relative bottom-[-4rem] left-0 w-full">
      <h2 className="font-medium lg:text-lg text-lg">HireMeNow</h2>
      <ul className="lg:flex lg:flex-row hidden gap-6">
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact Support</li>
        <li>Cookie Policy</li>
      </ul>
      <p>&copy; 2026 HireMeNow. All rights reserved.</p>
    </div>
  );
}

export default Footer;
