import React from "react";

function VtcSocials({ props }) {
  return (
    <div className="flex flex-col items-center md:flex-row justify-around w-full">
      {Object.entries(props).map(([socialName, socialLink], i) => {
        return (
          <a
            href={socialLink}
            key={i}
            className={
              !socialLink
                ? "hidden"
                : "my-4 md:my-0 font-bold duration-500 ease-in-out underline underline-offset-8 hover:shadow-2xl hover:scale-150"
            }
          >
            {socialName.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}

export default VtcSocials;
