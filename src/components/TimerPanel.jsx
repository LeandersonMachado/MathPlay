export function TimerPanel({ minutes, seconds }) {
  return (
    <>
      <div className="bg-[#5671ff] p-3 text-sm">Tempo</div>

      <div className="bg-[#9c9c9c] p-3 flex justify-center gap-2">
        <div className="flex flex-col">
          <span className="bg-white text-gray-600 px-2 py-1 rounded text-sm mb-1">
            {minutes}
          </span>
          <span className="text-[10px]">M</span>
        </div>

        <div className="flex flex-col">
          <span className="bg-white text-gray-600 px-2 py-1 rounded text-sm mb-1">
            {seconds}
          </span>
          <span className="text-[10px]">S</span>
        </div>
      </div>
    </>
  );
}
export default TimerPanel;