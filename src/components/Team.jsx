import React, { useEffect } from "react";
import team1 from "../img/team/team-1.jpg";
import team2 from "../img/team/team-2.jpg";
import team3 from "../img/team/team-3.jpg";
import team4 from "../img/team/team-4.jpg";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

// custom styles
import "./Team.css";
import TeamImage from "./TeamImage";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7FB3D5]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Team
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#7FB3D5] h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-600 text-center mt-7 mb-10 text-lg">
        Our mission is to bring joy to marketing for small businesses by creating authentic connections between brands and their audiences.
      </p>

      <div className="flex flex-col xs:flex-row justify-center gap-10 p-5 lg:p-0 items-center">
        <TeamImage image={team1} name={"Isaiah R"} role={"Chief Executive Officer"} />
        <TeamImage image={team2} name={"De'anna M"} role={"Product Manager"} />
      </div>
    </div>
  );
};

export default Team;
