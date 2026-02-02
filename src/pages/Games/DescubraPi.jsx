import { useEffect, useRef, useState } from "react";
import GameLayout from "../../components/GameLayout";
import PiDisplay from "../../components/Games/PiDisplay";

export default function DescubraPi() {

    useEffect(() => {
        document.title = "Descubra Pi π | MathPlay";
    }, []);

    const PI = "141592653589793238462643383279";

    const [posicao, setPosicao] = useState(0);
    const [entrada, setEntrada] = useState("");
    const [resultado, setResultado] = useState(null);

    const inputRef = useRef(null);

    function verificarResposta() {
        if (!entrada) return;
        if (posicao >= PI.length) return;

        if (entrada === PI[posicao]) {
            if (posicao + 1 === PI.length) {
                setPosicao(prev => prev + 1);
                setResultado("fim");
            } else {
                setPosicao(prev => prev + 1);
                setResultado("acerto");
            }
        } else {
            reiniciarJogo();
        }

        setEntrada("");
    }

    function reiniciarJogo() {
        setPosicao(0);
        setEntrada("");
        setResultado(null);
    }

    useEffect(() => {
        if (resultado !== "fim") {
            inputRef.current?.focus();
        }
    }, [posicao, resultado]);

    return (
        <GameLayout
            title="Descubra o número π"
            description="Digite corretamente os próximos dígitos do número π e veja até onde você consegue chegar."
        >
            <div className="flex justify-center">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-6">

                    <PiDisplay pi={PI} position={posicao} total={8} />

                    <input
                        ref={inputRef}
                        type="text"
                        maxLength={1}
                        disabled={resultado === "fim"}
                        value={entrada}
                        onChange={e =>
                            setEntrada(e.target.value.replace(/\D/g, ""))
                        }
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                verificarResposta();
                            }
                        }}
                        className="
                            w-20
                            text-center
                            text-2xl
                            font-semibold
                            border
                            border-gray-300
                            rounded-lg
                            p-2
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            disabled:bg-gray-100
                        "
                    />

                    <div className="flex gap-4">
                        <button
                            onClick={verificarResposta}
                            disabled={resultado === "fim"}
                            className="
                                px-6
                                py-2
                                bg-blue-600
                                text-white
                                rounded-lg
                                hover:bg-blue-700
                                transition
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                        >
                            Confirmar
                        </button>

                        <button
                            onClick={reiniciarJogo}
                            className="
                                px-6
                                py-2
                                bg-gray-200
                                text-gray-700
                                rounded-lg
                                hover:bg-gray-300
                                transition
                            "
                        >
                            Reiniciar
                        </button>
                    </div>

                    {resultado === "acerto" && (
                        <p className="text-green-600 font-semibold">
                            Correto!
                        </p>
                    )}

                    {resultado === "fim" && (
                        <p className="text-blue-600 font-semibold text-center">
                            Parabéns! Você chegou ao fim da sequência do número π 🎉
                        </p>
                    )}
                </div>
            </div>
        </GameLayout>
    );
}
