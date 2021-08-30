/* eslint-disable-next-line no-return-assign, no-param-reassign */

import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavCallToAction = ({ activeClass, to, spy, smooth, offset, duration, onClick}) => {
    return (
        <Link href="/" activeClass={activeClass} to={to} spy={spy} smooth={smooth} offset={offset} duration={duration} onClick={onClick}>
            <span className="cursor-pointer text-white bg-Green-600 py-4 px-5 rounded-2xl mb-8 lg:text-base md:text-tiny text-White-50">
                Quero preservar a <span className="font-bold">Ama</span>zônia!
            </span>
        </Link>

    )
}

export default NavCallToAction
