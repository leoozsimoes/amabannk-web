import React from 'react'
import Image from 'next/image'
import header from '../../../img/logo.png'
import footer from '../../../img/logo-footer.png'

const Logo = ({ rodape, className }) => {
    if (rodape == true) {
        return (
            <Image src={footer} alt="Logo AmeBank" className={className} />
        )
    } else {
        return (
            <Image src={header} alt="Logo AmeBank" className={className}/>
        )
    }

}

export default Logo
