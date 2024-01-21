import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-white">
      <div className="lg:flex justify-between items-center  px-8  bg-[#34465a] h-28 font-bold border-b-2 border-slate-500">
        <div className="flex items-center justify-evenly lg:inline">
          <h1 className="text-3xl lg:text-6xl">hunTruckers</h1>
          <h2 className="text-sm lg:text-xl italic font-medium">
            A TruckersMP profile viewer
          </h2>
        </div>
        <div className="lg:w-full flex font-medium uppercase justify-evenly lg:justify-end">
          <Link to="/" className="mt-4 text-sm lg:mx-14 lg:text-md">
            <HomeBtn />
          </Link>
          <Link to="/players" className="mt-4 text-sm lg:mx-14 lg:text-md">
            <PlayerBtn />
          </Link>
          <Link to="/vtc" className="mt-4 text-sm lg:mx-14 lg:text-md">
            <VtcBtn />
          </Link>
          <Link to="/about" className="mt-4 text-sm lg:mx-14 lg:text-md">
            <AboutBtn />
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomeBtn() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        width="36"
        viewBox="0 0 576 512"
        fill="#babbbd"
      >
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      </svg>
      <h1 className="text-[#899a9a]">Home</h1>
    </div>
  );
}
function PlayerBtn() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        width="36"
        viewBox="0 0 576 512"
        fill="#babbbd"
      >
        <path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z" />
      </svg>
      <h1 className="text-[#899a9a]">Players</h1>
    </div>
  );
}
function VtcBtn() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        width="36"
        viewBox="0 0 384 512"
        fill="#babbbd"
      >
        <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
      </svg>
      <h1 className="text-[#899a9a]">VTC</h1>
    </div>
  );
}
function AboutBtn() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        width="36"
        viewBox="0 0 512 512"
        fill="#babbbd"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
      </svg>
      <h1 className="text-[#899a9a]">About</h1>
    </div>
  );
}
