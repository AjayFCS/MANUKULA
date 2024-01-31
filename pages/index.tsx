"use client"
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import ImageTiles from "../components/ImageTiles";

const contentStyle = {
  margin: 0,
  height: "670px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const carouselImages = [
  "/carousel-manukula-1.jpeg",
  "/carousel-manukula-2.jpeg",
  "/carousel-manukula-3.jpeg",
  "/carousel-manukula-4.jpeg",
];

const sideImages = [
  "/side-image-1.jpeg",
  "/side-image-2.jpeg",
  "/side-image-3.jpeg",
];

const tiledImages = [
  "/tiled1.jpeg",
  "/tiled2.jpeg",
  "/tiled3.jpeg",
  "/tiled4.jpeg",
  "/tiled5.jpeg",
  "/tiled6.jpeg",
];

const images = tiledImages.map((imageUrl, index) => ({
  url: imageUrl,
  description: `Description for Image ${index + 1}`,
}));

function Index() {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetOffset = 500; // Adjust this value based on when you want the effect to trigger
      setIsFadeIn(scrollTop > targetOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="text-[#192e5b] flex flex-col w-full gap-5 pt-[185px]">
      <Carousel afterChange={onChange} autoplay autoplaySpeed={1900}>
        {carouselImages.map((imageURL, index) => (
          <div key={index}>
            <Image
              src={imageURL}
              alt={`Slide ${index + 1}`}
              style={{ ...contentStyle, width: "100%", textAlign: "center" }}
              width={1200}
              height={470}
            />
          </div>
        ))}
      </Carousel>

      <section className="px-[100px] ml-[50px] flex flex-row gap-[40px]">
        <div className="border border-orange-100 rounded-md text-left py-5 max-w-[50%] px-[50px]">
          <h1 className="text-orange-500 text-[50px] text-center">MISSION</h1>
          <div className="text-[#605E5E]">
            <h2>
              <span className="text-orange-500 bold">
                Manukula Charitable & Educational Trust
              </span>{" "}
              aims to empower visually impaired girls and women for a
              self-sufficient and independent future.
            </h2>
            <ul className="list-disc text-[#605E5E]">
              <li>
                <span className="text-orange-500 bold text-[20px]">
                  Target Impact:
                </span>
                Enabling individuals to bring positive change to their
                communities, countries, or even the world.
              </li>
              <li>
                <span className="text-orange-500 bold text-[20px]">
                  Empowerment Approach:
                </span>
                <ul className="list-disc ml-6 text-[#605E5E]">
                  <li>Working with both adults and children.</li>
                  <li>
                    Serving individuals of any race, creed, caste, or religion.
                  </li>
                  <li>Providing unconditional love without reservation.</li>
                  <li>
                    Encouraging and teaching personal responsibility for their
                    lives and futures.
                  </li>
                  <li>Training trainers to empower others.</li>
                  <li>
                    Fostering responsibility, kindness, and love towards
                    visually impaired individuals.
                  </li>
                </ul>
              </li>
              <li>
                <span className="text-orange-500 bold text-[20px]">
                  Holistic Support:
                </span>
                <ul className="list-disc ml-6 text-[#605E5E]">
                  <li>
                    Creating safe and permanent family homes for visually
                    impaired individuals.
                  </li>
                  <li>
                    Establishing safe and nurturing communities that encourage
                    dreams and provide the means to achieve them.
                  </li>
                </ul>
              </li>
              <li>
                <span className="text-orange-500 bold text-[20px]">
                  Relief and Education:
                </span>
                <ul className="list-disc ml-6 text-[#605E5E]">
                  <li>
                    Providing relief and education to those in need, distressed,
                    or underprivileged.
                  </li>
                  <li>Teaching self-care and fostering independence.</li>
                </ul>
              </li>
              <li>
                <span className="text-orange-500 bold text-[20px]">
                  Acts of Love:
                </span>
                <ul className="list-disc ml-6 text-[#605E5E]">
                  <li>Offering comfort by addressing basic needs.</li>
                  <li>Demonstrating kindness and tenderness abundantly.</li>
                  <li>Sharing strength, hearts, and energy.</li>
                  <li>Continuous learning from experiences.</li>
                </ul>
              </li>
              <li>
                <span className="text-orange-500 bold text-[20px]">
                  Focus on Disability:
                </span>
                <ul className="list-disc ml-6 text-[#605E5E]">
                  <li>
                    Prioritizing support for the disabled, considering it the
                    greatest act of love.
                  </li>
                  <li>
                    Offering assistance to both disabled individuals and their
                    caregivers.
                  </li>
                </ul>
              </li>
              <li>
                <span className="text-orange-500 bold text-[20px]">
                  Core Values:
                </span>
                <ul className="list-disc ml-6 text-[#605E5E]">
                  <li>Belief in the power of human commitment.</li>
                  <li>Esteeming the honesty of work.</li>
                  <li>Valuing the courage to dream.</li>
                  <li>
                    Viewing commitment and effort as keystones of dignity.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[50px]">
          {sideImages.map((imageURL, index) => (
            <div
              key={index}
              className={`${
                isFadeIn ? "animate-fade-in" : "opacity-0"
              } transition-opacity`}
            >
              <Image
                src={imageURL}
                alt="image"
                style={{ width: "100%", height: "270px" }}
                width={500}
                height={400}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 h-[300px] w-full text-white text-wrap flex flex-col gap-[10px]  text-center">
        <h1 className="text-[50px] pt-5 text-center">WHO WE ARE</h1>
        <p className="mx-[150px] text-[20px]">
          Shree Manukula Charitable & Educational Trust was founded in the year
          2013-14. The “TRUST” is a non-government and not for profit
          organization which has been striving to provide a wide range of social
          services to the society. Trust aims to emphasize a great deal of
          working for building the capacity, communications, opportunities and
          developmental approach for all stratum of society.
        </p>
        <div className="self-center">
          <Link href="/AboutUs">
            <h1 className="donate-button bg-white h-fit w-fit px-7 py-2 flex justify-center text-[20px] text-orange-500 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              KNOW MORE
            </h1>
          </Link>
        </div>
      </section>
      <section>
        <ImageTiles images={images} />
      </section>
    </div>
  );
}

export default Index;
