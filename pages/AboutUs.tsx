import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="w-full pt-[250px] flex justify-center items-center flex-col gap-4">
      <h1 className="underline text-[80px] text-orange-500 text-bold">
        Manukula Charitable And Educational Trust
      </h1>
      <Image width={600} height={400} src="/manukulaAbout.jpg" alt="About" />
      <h1 className="text-orange-500 text-center mx-[100px] text-[25px] italic py-[10px]">
        Shree Manukula Charitable & Educational Trust was founded in the year
        2013-14. The “TRUST” is a non-government and not for profit organization
        which has been striving to provide a wide range of social services to
        the society. Trust aims to emphasize a great deal of working for
        building the capacity, communications, opportunities and developmental
        approach for all stratum of society. Sree Manukula is one of its kind
        Centre for empowerment and rehabilitation of blind women in India. It’s
        also the one of the centers to conduct job mapping studies to develop as
        many jobs as possible for blind or visually impaired women in India. The
        Centre provides training to both educated and uneducated visually
        impaired women with the objective of enabling them to gain employment,
        take up higher education and regain their career after a gap (due to
        late onset of blindness). The Centre is busy enabling Livelihood
        Creation for the hidden visually impaired (VI) women by empowering them
        with skills and training
      </h1>
    </div>
  );
}

export default AboutUs;
