import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/styles.module.css";

function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetOffset = 200; // Adjust this value based on when you want the effect to trigger

      setIsScrolled(scrollTop > targetOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`bg-nav-background fixed z-10 w-full flex justify-between px-6 py-5 border border-orange-500 border-b-2 ${isScrolled ? styles.scrolled : ""}`}>
      <div>
       <Link href="/"><Image src="/manukula_logo.jpg" alt="Manukula_Logo" width={200} height={200} /></Link>
      </div>
      <div className="flex justify-between gap-5 self-center h-full text-[22px]">
        <Link href="/AboutUs">
          <p className="nav-link">ABOUT US</p>
        </Link>
        <Link href="/donate">
          <p className="nav-link">SUPPORT US</p>
        </Link>
        <Link href="/Projects">
          <p className="nav-link">OUR PROJECTS</p>
        </Link>
        <Link href="/contactUs">
          <p className="nav-link">CONTACT US</p>
        </Link>
        {/* <Link href="">
          <p className="nav-link">BLOG</p>
        </Link> */}
      </div>
      <div className="ml-[20px] h-full self-center">
        <Link href="/donate">
          <h1 className="donate-button bg-orange-500 h-full px-10 py-2 flex items-center justify-center text-[20px] text-white rounded-md">
            DONATE
          </h1>
        </Link>
      </div>

      <style jsx>{`
        .nav-link {
          color: #c63900; /* Set your desired link color */
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #f60; /* Set your desired hover color */
        }

        .nav-link:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: #f60; /* Set your desired underline color */
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s;
        }

        .nav-link:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .donate-button:hover{
          background:white;
          color:#c63900;
          border:1px solid orange;
        }
        .bg-nav-background {
          background-image: url('/bgmain.jpg'); /* Set your background image path */
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
