import React from "react";
import CareerEntry from "./career-entry";

const CareerTimeline: React.FC = () => {
  return (
    <div id="career" className="CareerTimeline">
      <h1 className="HeaderCenterText">Experience</h1>
      <CareerEntry
        startDate="Jan 2018"
        endDate="Dec 2020"
        companyName="Tech Corp"
        position="Software Engineer"
        skills={["C#", ".NET"]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <CareerEntry
        startDate="Jan 2018"
        endDate="Dec 2020"
        companyName="Tech Corp"
        position="Software Engineer"
        skills={["C#", ".NET"]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
};

export default CareerTimeline;
