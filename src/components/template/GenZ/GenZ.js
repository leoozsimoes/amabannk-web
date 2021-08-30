// eslint-disable-next-line no-use-before-define
import Footer from '../../organism/Footer/Footer'
import Header from '../../organism/Header.js/Header'
import Section from '../../organism/Section/Section'
import * as Scroll from 'react-scroll';


const GenZ = () => {
    const scroll= Scroll.animateScroll;
    function scrollToTop() {
        scroll.scrollToTop();
    }
   
    return (
        <div className="xl:overflow-x-hidden">
            <Header
                background="background-gen-z"
                opacity="blue-30"
                className="active"
                to1="banco-digital"
                to2="servicos"
                to3="selos"
                to4="selos"
                to5="form"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick ={scrollToTop}
            />
            <Section />
            <Footer />
        </div>
    )
}

export default GenZ
