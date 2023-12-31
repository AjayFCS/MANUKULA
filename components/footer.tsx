import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-orange-500 h-[500px] w-full mt-[30px] items-center flex flex-col justify-evenly">
      <div className="px-[100px] items-center flex justify-between w-full">
        <a href="/">
          <Image
            src="/manukula_logo.jpg"
            alt="Manukula_Logo"
            width={300}
            height={400}
          />
        </a>
        <a href="/donate">
          <h1 className="text-[70px] text-white italic">#SUPPORT US</h1>
        </a>
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className="text-[40px] text-center text-white italic">
          &ldquo; We May Not be able to reduce their pain but could support them to survive &ldquo;
        </h1>
        <Link href="/donate">
          <h1 className="self-center donate-button w-fit bg-white h-fit px-10 py-2 text-[20px] text-orange rounded-md">
            DONATE NOW
          </h1>
        </Link>
      </div>

      <div className="justify-between w-full px-[100px] pb-10">
        <div className="text-white italic text-[20px] flex justify-between pt-2 flex-row">
          <p>CONTACT US: <a href='tel:+9513889732'>9513889732</a>, <a href='tel:+9538071012'>9538071012</a>, <a href='tel:+9538071032'>9538071032</a></p>
          <p>Email Us at: <a href='mailto:manukulacharitable.org@gmail.com'>manukulacharitable.org@gmail.com</a></p>
        </div>
      </div>

      <style jsx>{`
        .donate-button:hover {
          background: white;
          color: orange;
          border: 1px solid orange;
        }
      `}</style>
    </div>
  );
}
export default Footer;
{
  /* <div className="h-fit self-center">
          
        </div> */
}
