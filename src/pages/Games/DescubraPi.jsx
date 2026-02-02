import { useEffect, useRef, useState } from "react";
import GameLayout from "../../components/GameLayout";
import PiDisplay from "../../components/Games/PiDisplay";

export default function DescubraPi() {

    useEffect(() => {
        document.title = 'Descubra Pi π | MathPlay';
    }, []);

    const PI = "141592653589793238462643383279";

    const [posicao, setPosicao] = useState(0);
    const [entrada, setEntrada] = useState("");
    const [resultado, setResultado] = useState(null);

    const inputRef = useRef(null);

    function verificarResposta() {

        if (!entrada) return;

        if (entrada === PI[posicao]) {
            setPosicao(prev => prev + 1);
            setResultado("acerto");
        } else {
            setResultado("erro");
        }

        setEntrada("");
    }

    function reiniciarJogo() {
        setPosicao(0);
        setEntrada("");
        setResultado(null);
    }

    useEffect(() => {
        inputRef.current?.focus();
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
            "
                    />

                    <div className="flex gap-4">
                        <button
                            onClick={verificarResposta}
                            className="
                px-6 
                py-2 
                bg-blue-600 
                text-white 
                rounded-lg 
                hover:bg-blue-700 
                transition
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

                    {resultado === "erro" && (
                        <p className="text-red-600 font-semibold">
                            Tente novamente
                        </p>
                    )}
                </div>
            </div>
        </GameLayout>
    );
}
