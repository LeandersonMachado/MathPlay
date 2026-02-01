import React from 'react';

export default function Policy() {
    return (
        <div 
            className="pt-[100px] pb-10 min-h-screen flex justify-center bg-gray-100 p-4"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/marble-white.png")' }}
        >
            <div className="bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden max-w-4xl w-full border h-fit">
                
                <div className="flex-1 p-8 md:p-12">
                    <h1 className="text-[#2563EB] text-3xl font-bold mb-2">Política de Privacidade</h1>
                    <p className="text-gray-500 mb-8 font-medium">
                        Última Atualização: {new Date().toLocaleDateString()}
                    </p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                Introdução
                            </h2>
                            <p>
                                Bem-vindo ao MathPlay. Estamos comprometidos em proteger sua privacidade. Esta Política de Privacidade explica nossas práticas em relação à coleta e ao uso de dados.
                            </p>
                        </section>

                        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="bg-[#00c569] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                Coleta de Dados
                            </h2>
                            <p className="font-bold text-gray-800 mb-2">Nós não coletamos nenhum dado pessoal de nossos usuários.</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <li className="flex items-center text-sm"><i className="fa-solid fa-check text-green-500 mr-2"></i> Sem coleta de e-mails</li>
                                <li className="flex items-center text-sm"><i className="fa-solid fa-check text-green-500 mr-2"></i> Sem rastreamento</li>
                                <li className="flex items-center text-sm"><i className="fa-solid fa-check text-green-500 mr-2"></i> Sem cookies de ID</li>
                                <li className="flex items-center text-sm"><i className="fa-solid fa-check text-green-500 mr-2"></i> Sem geolocalização</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                                Uso das Informações
                            </h2>
                            <p>
                                Como não coletamos dados pessoais, não temos informações para usar, compartilhar ou vender. Sua privacidade é completamente preservada ao usar nosso serviço educacional.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                                Serviços de Terceiros
                            </h2>
                            <p>
                                Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade deles. Recomendamos a leitura da política de cada site visitado.
                            </p>
                        </section>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                        <p className="text-gray-500 text-sm">Dúvidas sobre sua privacidade?</p>
                        <button className="bg-[#2563EB] hover:bg-sky-800 text-white font-bold py-2 px-6 rounded-full transition-colors uppercase tracking-wider text-xs">
                            Contato
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}