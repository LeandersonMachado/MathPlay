import { useEffect } from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function PrivacyPolicy() {

    useEffect(() => {
        document.title = 'Política de Privacidade | MathPlay';
    }, []);


    return (
        <LegalLayout
            title="Política de Privacidade"
            footer={
                <>
                    <p className="text-gray-500 text-sm">
                        Dúvidas sobre privacidade e dados?
                    </p>
                    <button className="bg-[#2563EB] hover:bg-sky-800 text-white font-bold py-2 px-6 rounded-full transition-colors uppercase tracking-wider text-xs">
                        Contato
                    </button>
                </>
            }
        >
            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        1
                    </span>
                    Informações Gerais
                </h2>

                <p>
                    A sua privacidade é importante para nós. É política do MathPlay respeitar a sua privacidade em relação a qualquer informação sua que possa ser coletada ao utilizar nosso site e nossos serviços.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        2
                    </span>
                    Coleta e Uso de Informações
                </h2>

                <div className="space-y-4">
                    <p>
                        Solicitamos informações pessoais apenas quando realmente necessárias para fornecer um serviço, sempre por meios justos e legais, com o conhecimento e consentimento do usuário.
                    </p>
                    <p>
                        As informações coletadas são utilizadas exclusivamente para melhorar a experiência do usuário, garantir o funcionamento adequado da plataforma e cumprir obrigações legais.
                    </p>
                </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#00c569] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        3
                    </span>
                    Cookies e Publicidade
                </h2>

                <p>
                    Utilizamos serviços de terceiros, como o Google AdSense, que podem usar cookies e tecnologias semelhantes para exibir anúncios relevantes aos usuários.
                </p>
                <p className="mt-3">
                    Esses cookies permitem identificar padrões de navegação, melhorar a entrega de anúncios e medir desempenho. O usuário pode desativar cookies nas configurações do navegador.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        4
                    </span>
                    Compartilhamento de Dados
                </h2>

                <p>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou necessário para o funcionamento dos serviços contratados.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        5
                    </span>
                    Links Externos
                </h2>

                <p>
                    Nosso site pode conter links para sites externos que não são operados por nós. Não nos responsabilizamos pelas práticas de privacidade desses sites.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        6
                    </span>
                    Consentimento
                </h2>

                <p>
                    O uso continuado do site será considerado como aceitação desta Política de Privacidade.
                </p>
            </section>
        </LegalLayout>
    );
}
