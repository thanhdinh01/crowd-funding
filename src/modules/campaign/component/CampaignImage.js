import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CampaignImage = ({ to = "", className = "", src = "" }) => {
  return (
    <Link
      to={to}
      className={`h-[158px] rounded-2xl ${className} inline-block mb-[15px] overflow-hidden`}
    >
      <img src={src} alt="" className={`w-full h-full object-cover`} />
    </Link>
  );
};

CampaignImage.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
};

export default CampaignImage;
