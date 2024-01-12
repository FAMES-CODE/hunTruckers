import React from "react";

function VtcSocials({ LogoUrl, SocialName, SocialLink }) {
  return (
    <div>
      <a href={SocialLink}>{SocialName}</a>
    </div>
  );
}

export default VtcSocials;
