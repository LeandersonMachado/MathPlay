import React from 'react';
import { TimerPanel } from './TimerPanel';

export default function GameHUD({ respondidas, pontuacao, minutes, seconds }) {
  return (
    <div className="w-full md:w-48 flex flex-col text-white text-center font-bold">

      <div className="bg-[#00c569] p-3 text-sm">Questões</div>
      <div className="bg-[#9c9c9c] p-4 text-3xl">
        {respondidas}
      </div>

      <TimerPanel minutes={minutes} seconds={seconds} />

      <div className="bg-[#ff5b5b] p-3 text-sm">Pontuação</div>
      <div className="bg-[#9c9c9c] p-4 text-3xl flex items-center justify-center">
        {pontuacao}
      </div>

    </div>
  );
}
