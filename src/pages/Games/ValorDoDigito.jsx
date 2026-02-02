import { useEffect, useState } from 'react';
import useQuestao from '../../hooks/useQuestao';
import useTimer from '../../hooks/useTimer';

import GameLayout from '../../components/GameLayout';
import GameHUD from '../../components/GameHud';



export default function ValorDoDigito() {

    useEffect(() => {
        document.title = 'Valor do Dígito | MathPlay';
    }, []);

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
        <GameLayout
            title="Valor do Dígito"
            description="Observe o número apresentado e descubra qual é o valor do dígito destacado, de acordo com sua posição. Digite a resposta correta para marcar pontos."
        >
            <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden max-w-2xl w-full border h-fit">

                <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-gray-700 text-xl font-medium mb-8">
                            Qual o valor do dígito sublinhado?
                        </h2>

                        <div className="text-5xl font-bold tracking-widest text-gray-800 mb-10">
                            {questao.numeroCompleto.split('').map((char, i) => (
                                <span
                                    key={i}
                                    className={
                                        i === questao.posicaoSublinhada
                                            ? 'border-b-4 border-gray-800 pb-1 text-green-600'
                                            : ''
                                    }
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
                            <p
                                className={`text-sm font-bold ${feedback.includes('🎉')
                                    ? 'text-green-500'
                                    : 'text-red-500'
                                    }`}
                            >
                                {feedback}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={() => verificarResposta(inputValue)}
                        className="bg-[#2563EB] hover:bg-sky-800 text-white font-bold py-3 px-8 rounded-full w-fit transition-colors uppercase tracking-wider text-sm mt-4"
                    >
                        Verificar
                    </button>
                </div>

                <GameHUD
                    respondidas={respondidas}
                    pontuacao={pontuacao}
                    minutes={minutes}
                    seconds={seconds}
                />
            </div>
        </GameLayout>
    );
}
