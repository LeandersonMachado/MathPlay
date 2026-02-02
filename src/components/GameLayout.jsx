import React from 'react';

export default function GameLayout({ title, description, children }) {
  return (
    <div className="pt-[30px] min-h-screen bg-gray-100 px-4 pb-10">

      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {title}
        </h1>
        <p className="text-gray-600 text-base">
          {description}
        </p>
      </div>

      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
}
