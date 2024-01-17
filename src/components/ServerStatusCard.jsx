export default function ServerStatusCard({ props }) {
  return (
    <div className="flex gap-12 items-center shadow shadow-slate-500 bg-[#34465a] mx-8 p-8 rounded-xl">
      <div>
        {props.online ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 640 512"
              fill="#008c6a"
            >
              <path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
            </svg>
          </div>
        ) : (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 64 512"
              fill="#ed2b3c"
            >
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </svg>
          </div>
        )}
      </div>

      <div>
        <h1 className="text-xl font-bold">{props.shortname} | {props.name} {props.game}</h1>
        <h2 className="italic">{props.players} / {props.maxplayers}</h2>
      </div>
    </div>
  );
}
