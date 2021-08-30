/* eslint-disable-next-line no-return-assign, no-param-reassign */
import React from 'react'
import Home from '../../molecule/Home/Home'
import Menu from '../../molecule/Menu/Menu'


const Header = ({ background, opacity, activeClass, to1, to2, to3, to4, to5, spy, smooth, offset, duration, onClick }) => {
    return (
        <>
            <header className={background}>
                <div className={opacity}>
                    <div className="xl:container m-auto px-8">
                        <Menu
                            activeClass={activeClass}
                            to1={to1}
                            to2={to2}
                            to3={to3}
                            to4={to4}
                            to5={to5}
                            spy={spy}
                            smooth={smooth}
                            offset={offset}
                            duration={duration}
                            onClick={onClick}
                        />
                        <Home />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
