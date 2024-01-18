import React from "react";

function VtcSocials({ props }) {
  console.log(Object(props));
  return (
    <div className="flex justify-around w-full">
      {Object.entries(props).map(([socialName, socialLink], i) => {
        return (
          <a
            href={socialLink}
            key={i}
            className={
              !socialLink
                ? "text-[#99999b]"
                : " font-bold duration-500 ease-in-out underline underline-offset-8 hover:shadow-2xl hover:scale-150"
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
