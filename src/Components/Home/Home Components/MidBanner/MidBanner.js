
import React from "react";
import InfoCard from "./InfoCard";
import Pricing from "./Pricing";
import Skills from "./Skills";
import Testimonial from "./Testimonial";

const MidBanner = () => {
  return (
    <div>
        <Skills></Skills>
        <InfoCard></InfoCard>
        <Pricing></Pricing>
        <Testimonial></Testimonial>
    </div>
  );
};

export default MidBanner;