import { useEffect } from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function TermsOfUse() {

    useEffect(() => {
        document.title = 'Termos de Uso | MathPlay';
    }, []);

    return (
        <LegalLayout
            title="Termos de Uso"
            footer={
                <>
                    <p className="text-gray-500 text-sm">
                        Ao continuar, você concorda com estes termos
                    </p>
                </>
            }
        >
            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        1
                    </span>
                    Aceitação dos Termos
                </h2>

                <p>
                    Ao acessar e utilizar o site MathPlay, o usuário concorda com os presentes Termos de Uso e com todas as leis e regulamentos aplicáveis.
                </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#00c569] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        2
                    </span>
                    Compromisso do Usuário
                </h2>

                <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-green-500 mr-2 mt-1"></i>
                        Não utilizar o site para fins ilegais ou contrários à boa fé e à ordem pública.
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-green-500 mr-2 mt-1"></i>
                        Não difundir conteúdos ilícitos, discriminatórios, ofensivos ou que violem direitos humanos.
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-green-500 mr-2 mt-1"></i>
                        Não causar danos aos sistemas físicos ou lógicos do MathPlay ou de terceiros.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        3
                    </span>
                    Propriedade Intelectual
                </h2>

                <p>
                    Todo o conteúdo disponibilizado no site, incluindo textos, marcas, layouts e códigos, é de propriedade do MathPlay, sendo vedada a reprodução sem autorização.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        4
                    </span>
                    Limitação de Responsabilidade
                </h2>

                <p>
                    O MathPlay não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        5
                    </span>
                    Alterações dos Termos
                </h2>

                <p>
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, sendo recomendável que o usuário os revise periodicamente.
                </p>
            </section>
        </LegalLayout>
    );
}
