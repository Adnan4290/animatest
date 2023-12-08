/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "frame-3888" | "variant-3" | "frame-3887";
  className: any;
}

export const Component = ({ property1, className }: Props): JSX.Element => {
  return (
    <div className={`w-[800px] h-[105px] overflow-hidden relative ${className}`}>
      <div
        className={`w-[800px] left-0 h-[105px] absolute ${
          property1 === "variant-3" ? "top-[8px]" : property1 === "frame-3888" ? "top-[-330px]" : "top-[-170px]"
        }`}
      >
        <p className="[font-family:'Montserrat',Helvetica] w-[798px] left-0 tracking-[-0.23px] text-[22px] top-0 text-white absolute h-[105px] font-medium leading-[34.9px]">
          Social media marketing is the art of crafting your brand&#39;s narrative and spreading it across the globe,
          creating a magnetic presence that attracts and captivates your audience.
        </p>
      </div>
      <div
        className={`w-[800px] left-[2px] h-[70px] absolute ${
          property1 === "variant-3" ? "top-[192px]" : property1 === "frame-3888" ? "top-[-146px]" : "top-[14px]"
        }`}
      >
        <p className="[font-family:'Montserrat',Helvetica] w-[798px] left-0 tracking-[-0.23px] text-[24px] top-0 text-white absolute h-[70px] font-medium leading-[34.9px]">
          At nomADZ Digital, India&#39;s premier social media marketing agency, we&#39;re experts in making your brand
          shine online.
        </p>
      </div>
      <div
        className={`w-[800px] left-[2px] h-[105px] absolute ${
          property1 === "variant-3" ? "top-[340px]" : property1 === "frame-3888" ? "top-[2px]" : "top-[162px]"
        }`}
      >
        <p className="[font-family:'Montserrat',Helvetica] w-[798px] left-0 tracking-[-0.23px] text-[24px] top-0 text-white absolute h-[105px] font-medium leading-[34.9px]">
          Our mastery in audience segmentation, social advertising, and staying ahead of social algorithm updates is
          your gateway to success.
        </p>
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-3888", "variant-3", "frame-3887"]),
};
