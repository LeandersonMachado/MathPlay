import { useEffect } from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function About() {

    useEffect(() => {
        document.title = 'Sobre o MathPlay | MathPlay';
    }, []);

    return (
        <LegalLayout
            title="Sobre o MathPlay"
        >
            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        1
                    </span>
                    O que é o MathPlay?
                </h2>

                <p>
                    O <strong>MathPlay</strong> é um site de jogos matemáticos criado para auxiliar no ensino e no aprendizado de matemática para alunos do ensino fundamental, do 1º ao 9º ano.
                </p>
                <p className="mt-3">
                    O projeto reúne jogos de matemática e geometria que vão desde o treino de tabuadas até cálculos envolvendo figuras planas, sempre de forma interativa e acessível.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        2
                    </span>
                    Para quem o MathPlay foi criado?
                </h2>

                <div className="space-y-4">
                    <p>
                        O MathPlay foi criado principalmente para alunos que desejam melhorar seus conhecimentos em matemática de forma lúdica, aprendendo enquanto jogam.
                    </p>
                    <p>
                        Muitos dos jogos exigem pesquisa, raciocínio e compreensão dos conceitos para serem resolvidos, o que incentiva o aluno a buscar conhecimento além do jogo em si.
                    </p>
                    <p>
                        Além disso, o MathPlay também é uma excelente ferramenta para professores que desejam inserir atividades lúdicas no processo de ensino em sala de aula, bem como para pais que procuram jogos educativos de qualidade para seus filhos.
                    </p>
                </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#00c569] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        3
                    </span>
                    Qual é a intenção do projeto?
                </h2>

                <div className="space-y-4">
                    <p>
                        Além de ser um projeto voltado à educação matemática, o MathPlay também nasceu como um espaço de aprendizado para seu criador, que utiliza o projeto como forma de estudar e praticar tecnologias de desenvolvimento web.
                    </p>
                    <p>
                        O MathPlay é uma escola para quem usa e para quem desenvolve.
                    </p>
                    <p>
                        Embora o autor não seja professor de matemática, ele é professor de língua portuguesa, apaixonado por cálculo e comprometido com a criação de conteúdos matemáticos corretos, claros e confiáveis, prezando sempre pela qualidade e pela ausência de erros conceituais.
                    </p>
                </div>
            </section>
        </LegalLayout>
    );
}
