import { useEffect } from 'react';
import GameCard from '../../components/GameCard';

export default function Home() {

  useEffect(() => {
          document.title = 'Página Inicial | MathPlay';
      }, []);

  return (
    <div
      className="pt-[100px] pb-16 min-h-screen bg-gray-100 px-4"
      style={{
      }}
    >
      <div className="max-w-6xl mx-auto space-y-16">

        <section className="bg-white rounded-3xl shadow-xl border p-10 text-center">
          <h1 className="text-4xl font-bold text-[#2563EB] mb-4">
            Aprenda Matemática Jogando
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Jogos educativos gratuitos para treinar lógica, números e raciocínio.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {/*<Link
              to="/jogos"
              className="bg-[#2563EB] hover:bg-sky-800 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm transition-colors"
            >
              Começar a Jogar
            </Link> */}

            <a
              href="#jogos"
              className="border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm transition-colors"
            >
              Ver Jogos
            </a>
          </div>
        </section>

        {/* JOGOS */}
        <section
          id="jogos"
          className="scroll-mt-[90px]"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Jogos Disponíveis
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <GameCard
              title="Valor do Dígito"
              description="Descubra o valor posicional de um dígito em números naturais."
              level="Ensino Fundamental"
              to="/valor-do-digito"
            />
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-md border p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Por que MathPlay?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <i className="fa-solid fa-graduation-cap text-3xl text-[#2563EB] mb-3"></i>
              <p className="font-bold">Educativo</p>
            </div>

            <div>
              <i className="fa-solid fa-gift text-3xl text-[#2563EB] mb-3"></i>
              <p className="font-bold">Gratuito</p>
            </div>

            <div>
              <i className="fa-solid fa-user-check text-3xl text-[#2563EB] mb-3"></i>
              <p className="font-bold">Sem cadastro</p>
            </div>

            <div>
              <i className="fa-solid fa-brain text-3xl text-[#2563EB] mb-3"></i>
              <p className="font-bold">Aprendizado real</p>
            </div>
          </div>
        </section>

        <section className="text-center text-gray-600 max-w-3xl mx-auto">
          <p>
            O MathPlay foi criado para ajudar estudantes, professores e curiosos
            a praticar matemática de forma simples, acessível e divertida,
            diretamente no navegador.
          </p>
        </section>

      </div>
    </div>
  );
}
