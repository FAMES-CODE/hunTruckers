import React from "react";

function VtcGame({ GameName }) {
  const etsLogo =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/da107l6-6f39c0d9-0567-4d13-8f30-6baebc24c471.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGExMDdsNi02ZjM5YzBkOS0wNTY3LTRkMTMtOGYzMC02YmFlYmMyNGM0NzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4yMbk7IzwTrqX_BdUd_giHIOuVdFO1mEgmFSSAEgVVg";

  const atsLogo =
    "https://cdn.sanity.io/images/nqsyepft/production/8dcafbf349f734424cd29b04a9260ce990a9476f-256x256.png";

  return (
    <div className="flex flex-col lg:flex-row items-center">
      <img
        src={GameName == "Euro Truck Simulator 2" ? etsLogo : atsLogo}
        alt=""
        className="w-[128px]"
      />
      <h1 className="text-fold text-lg lg:text-2xl">{GameName}</h1>
    </div>
  );
}

export default VtcGame;
