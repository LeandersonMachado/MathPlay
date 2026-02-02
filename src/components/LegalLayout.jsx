import React from 'react';

export default function LegalLayout({ title, children, footer }) {
    return (
        <div
            className="pt-[100px] pb-10 min-h-screen flex justify-center bg-gray-100 p-4"
        >
            <div className="bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden max-w-4xl w-full border h-fit">
                <div className="flex-1 p-8 md:p-12">
                    <h1 className="text-[#2563EB] text-3xl font-bold mb-2">
                        {title}
                    </h1>
                    <p className="text-gray-500 mb-8 font-medium">
                        Última Atualização: {new Date().toLocaleDateString()}
                    </p>

                    <div className="space-y-10 text-gray-700 leading-relaxed">
                        {children}
                    </div>

                    {footer && (
                        <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
