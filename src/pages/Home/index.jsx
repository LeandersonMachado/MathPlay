import { useEffect, useState } from 'react';
import useQuestao from '../../hooks/useQuestao';
import useTimer from '../../hooks/useTimer';
import { TimerPanel } from '../../components/TimerPanel'; 

export default function Home() {
  const {
    questao,
    feedback,
    respondidas,
    pontuacao,
    gerarNovaQuestao,
    verificarResposta
  } = useQuestao();

  const { minutes, seconds } = useTimer();

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    gerarNovaQuestao();
  }, [gerarNovaQuestao]);

  useEffect(() => {
    if (feedback === 'Correto! 🎉') {
      const t = setTimeout(() => {
        setInputValue('');
        gerarNovaQuestao();
      }, 1000);

      return () => clearTimeout(t);
    }
  }, [feedback, gerarNovaQuestao]);

  if (!questao) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
      style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/marble-white.png")' }}>

      <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden max-w-2xl w-full border">

        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-gray-700 text-xl font-medium mb-8">
              Qual o valor do dígito sublinhado?
            </h2>

            <div className="text-5xl font-bold tracking-widest text-gray-800 mb-10">
              {questao.numeroCompleto.split('').map((char, i) => (
                <span
                  key={i}
                  className={i === questao.posicaoSublinhada
                    ? 'border-b-4 border-gray-800 pb-1 text-green-600'
                    : ''}
                >
                  {char}
                </span>
              ))}
            </div>

            <input
              type="number"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && verificarResposta(inputValue)}
              placeholder="Ex: 100"
              className="w-40 p-3 bg-gray-100 rounded-lg text-center text-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
            />

            {feedback && (
              <p className={`text-sm font-bold ${
                feedback.includes('🎉') ? 'text-green-500' : 'text-red-500'
              }`}>
                {feedback}
              </p>
            )}
          </div>

          <button
            onClick={() => verificarResposta(inputValue)}
            className="bg-[#00c569] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full w-fit transition-colors uppercase tracking-wider text-sm mt-4"
          >
            Verificar
          </button>
        </div>

        <div className="w-full md:w-48 flex flex-col text-white text-center font-bold">
          <div className="bg-[#00c569] p-3 text-sm">Questões</div>
          <div className="bg-[#9c9c9c] p-4 text-3xl">{respondidas}</div>

          <TimerPanel minutes={minutes} seconds={seconds} />

          <div className="bg-[#ff5b5b] p-3 text-sm">Pontuação</div>
          <div className="bg-[#9c9c9c] p-4 text-3xl flex items-center justify-center">
            {pontuacao}
          </div>
        </div>
      </div>
    </div>
  );
}