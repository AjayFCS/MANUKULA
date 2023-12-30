import React from "react";

function Projects() {
  return (
    <div className="pt-[200px] flex items-center flex-col gap-10 text-[40px] text-orange-500">
      <h1 className="underline">Projects</h1>
      {/* Embed a YouTube video */}
      <iframe
        width="1060"
        height="515"
        src="/gnanakshi.mp4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen // Corrected attribute name
      ></iframe>

      <div className="flex flex-col text-center justify-center max-w-[900px]">
        <h1 className="text-[35px] underline text-orange-500 font-bold">
          Why Gnanakshi!
        </h1>
        <p className="text-[25px] text-orange-500 text-center">
          India has 15 Million Blind Women Surprisingly ,only 5% of them are
          capable to earn a living.Blind women in India are confined to
          perpetual darkness of the fears of society and poverty. A girl child,
          that too blind is considered burden by her own family
        </p>
      </div>
      <h1 className="text-orange-500 text-center text-[40px] underline">
        PROPOSED SOLUTIONS
      </h1>
      <div className="flex text-[20px] gap-[20px] flex-col max-w-[1000px]">
        <div className="flex flex-col gap-[5px] text-center">
          <h1 className="text-[30px] underline">RESIDENTIAL FACILITY:</h1>
          <p className="text-[25px] p-0 m-0">
            The Girls Are Famiy! The center provides free residential stay to
            the students during their training. We want our students to be
            completely stress-free while they learn.
          </p>
        </div>

        <div className="flex flex-col gap-[5px] text-center">
          <h1 className="text-[30px] underline">COUNSELLING:</h1>
          <p className="text-[25px]">
            Psychological Upkeep Is our Priority! The centre pays a lot of
            attention to the mental health of the girls especially those who
            have lost their eye sight later in life. It provides counseling
            session girls from rural and backward sections and to anyone
            struggling with emotional baggage and trying to cope up with having
            lost some physical ability. Counseling is an important service
            offered to all students, but this intervention is of special
            significance for the child with vision impairment. In counseling the
            student with vision impairment it is essential to see the child as
            an individual first. So, just as a counselor would assess any
            student referred for services, consideration would be given to
            chronological age, developmental level, academic and social
            strengths and problem areas, family situation, emotional
            functioning, cultural identification, and any other factors that may
            be affecting the child. At the same time, an awareness of the impact
            of the student’s disability is maintained as the total picture is
            put together. The only thing worse than being blind is having sight
            but no vision.” – Helen Keller Our counseling service is available
            to anyone experiencing low mood when dealing with sight related
            difficulties. We also recognize that anxiety can be experienced by
            parents, partners, careers, and we extend our services to anyone
            affected directly or indirectly, by sight loss
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
