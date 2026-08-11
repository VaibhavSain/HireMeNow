import React from "react";

function Footer() {
  return (
    <div className="h-[6rem] bg-[#f6cb61] flex flex-row items-center justify-evenly relative bottom-[-4rem] left-0 w-full">
      <h2 className="font-medium text-lg">HireMeNow</h2>
      <ul className="flex flex-row gap-6">
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
