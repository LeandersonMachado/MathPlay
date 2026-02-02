import React from 'react';
import { FooterData } from './FooterData';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <div className="bg-[#2563EB] text-white text-center p-4">

                <ul className="flex justify-center gap-6 mb-4">

                    {FooterData.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                to={item.url}
                                className="text-white hover:text-yellow-300 mx-2 transition-colors"
                            >
                                <i className={`${item.icon} mr-2`}></i>
                                {item.title}
                            </Link>
                        );
                    })}
                </ul>

                <div className='mt-4' >
                    <a className="text-white hover:text-yellow-300 mx-2 transition-colors">
                        <i className="fa-solid fa-copyright mr-2"></i>
                        2026 MathPlay - Todos os direitos reservados
                    </a>
                </div>

            </div>

        );
    }
}
export default Footer;
