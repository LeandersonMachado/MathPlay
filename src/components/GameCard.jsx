import { Link } from 'react-router-dom';

export default function GameCard({ title, description, level, to }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        <span className="inline-block text-xs font-bold text-white bg-[#00c569] px-3 py-1 rounded-full">
          {level}
        </span>
      </div>

      <Link
        to={to}
        className="mt-6 bg-[#2563EB] hover:bg-sky-800 text-white text-center font-bold py-2 rounded-full transition-colors uppercase tracking-wider text-xs"
      >
        Jogar
      </Link>
    </div>
  );
}
