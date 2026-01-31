import React from 'react';
import { MenuData } from './MenuData';
import Logo from '../assets/MathPlay.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="flex justify-between items-center bg-[#2563EB] px-5 md:px-[30px] text-white shadow-xl h-[70px] w-full sticky top-0 z-[999]">
                
                <div className="flex items-center gap-3 z-[100] cursor-pointer">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        className="h-10 w-auto object-contain" 
                    />
                    <h1 className="text-white font-bold text-xl md:text-2xl tracking-tight">
                        MathPlay
                    </h1>
                </div>

                <div className="md:hidden z-[100] cursor-pointer text-2xl w-10 h-10 flex items-center justify-center rounded-md active:bg-blue-700 transition-colors" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={`
                    flex flex-col md:flex-row items-center list-none gap-4 md:gap-8 ml-auto
                    absolute md:static bg-[#2563EB] md:bg-transparent left-0 w-full md:w-auto
                    transition-all duration-500 ease-in-out z-[1] md:z-auto
                    ${this.state.clicked ? "top-[70px] opacity-100 shadow-2xl" : "top-[-600px] opacity-0 md:opacity-100"}
                    pb-10 md:pb-0 pt-6 md:pt-0 border-t border-blue-400/30 md:border-none
                `}>
                    {MenuData.map((item, index) => {
                        return (
                            <li 
                                key={index} 
                                className={`w-[90%] md:w-auto transition-all duration-500 transform
                                ${this.state.clicked ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0 md:translate-x-0 md:opacity-100"}`}
                                style={{ transitionDelay: this.state.clicked ? `${index * 70}ms` : "0ms" }}
                            >
                                <a 
                                    href={item.url} 
                                    className={`${item.cName} flex items-center justify-center gap-3 transition-all duration-300 
                                    hover:text-yellow-400 hover:bg-blue-700 md:hover:bg-transparent
                                    rounded-lg py-3 md:py-0 text-[1.1rem] font-medium`}
                                >
                                    <i className={`${item.icon} text-yellow-400 md:text-white`}></i> 
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;