import { useEffect } from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function Contact() {

    useEffect(() => {
        document.title = 'Contato | MathPlay';
    }, []);

    return (
        <LegalLayout
            title="Contato"
            footer={
                <p className="text-gray-500 text-sm">
                    Contato: leandersonmachado.dev@gmail.com
                </p>
            }
        >
            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        1
                    </span>
                    Fale com o MathPlay
                </h2>

                <p>
                    O MathPlay está sempre aberto a sugestões, dúvidas, correções e ideias que ajudem a melhorar a experiência dos jogos e o aprendizado dos usuários.
                </p>
                <p className="mt-3">
                    Se você é aluno, professor, pai ou apenas alguém interessado no projeto, fique à vontade para entrar em contato.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        2
                    </span>
                    Formulário de contato
                </h2>

                <form className="space-y-6 max-w-xl">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome
                        </label>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mensagem
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Escreva sua mensagem..."
                            className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#2563EB] hover:bg-sky-800 text-white font-bold py-2 px-8 rounded-full transition-colors uppercase tracking-wider text-xs"
                    >
                        Enviar mensagem
                    </button>
                </form>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#00c569] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        3
                    </span>
                    Observações importantes
                </h2>

                <p>
                    Este formulário tem como objetivo facilitar a comunicação entre os usuários e o MathPlay.
                </p>
                <p className="mt-3">
                    Nenhuma informação enviada aqui será compartilhada com terceiros. Os dados fornecidos serão utilizados apenas para responder ao contato realizado.
                </p>
            </section>
        </LegalLayout>
    );
}
