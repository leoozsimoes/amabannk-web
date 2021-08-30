/* eslint-disable-next-line no-return-assign, no-param-reassign */
import React from 'react'
import NavCallToAction from '../NavCallToAction/NavCallToAction'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = ({ abrir, activeClass, to1, to2, to3, to4, to5, spy, smooth, offset, duration, onClick }) => {
   
    
    return (
        <nav className={abrir}>
            <ul className="md:flex">
                <li className="md:mr-10 lg:mr-12">
                    <Link href="/" activeClass={activeClass} to={to1} spy={spy} smooth={smooth} offset={offset} duration={duration} onClick={onClick}>
                        Banco Digital
                    </Link>
                </li>
                <li className="md:mr-10 lg:mr-12">
                    <Link href="/" activeClass={activeClass} to={to2} spy={spy} smooth={smooth} offset={offset} duration={duration} onClick={onClick}>
                        Serviços
                    </Link>
                </li>
                <li className="md:mr-10 lg:mr-12">
                    <Link href="/" activeClass={activeClass} to={to3} spy={spy} smooth={smooth} offset={offset} duration={duration} onClick={onClick}>
                        Selos
                    </Link>
                </li>
                <li className="md:mr-10 lg:mr-12">
                    <Link href="/" activeClass={activeClass} to={to4} spy={spy} smooth={smooth} offset={offset} duration={duration} onClick={onClick}>
                        Contato
                    </Link>
                </li>
            </ul>
            <div className="block md:hidden">
                <NavCallToAction activeClass={activeClass} to={to5} spy={spy} smooth={smooth} offset={offset} duration={duration} onClick={onClick}/>
            </div>
            
        </nav>
    )
}

export default Nav
