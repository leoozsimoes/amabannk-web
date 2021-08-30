import Image from 'next/image'
import React from 'react'

import card from '../../../img/cartão.png'
import { HiOutlineArrowLeft } from 'react-icons/hi'
const Home = ({text}) => {
    return (
        <section>
            <div className="lg:grid lg:grid-cols-2 lg:justify-between lg:pb-40">
                <div className="lg:flex lg:flex-col lg:justify-center">
                    <h1 className="text-White-50 title font-normal pt-20 pb-12 md:pb-40 lg:pb-16">
                        <span className="font-semibold">Banco Digital</span> com propósito
                        <span className="font-semibold"> socioambiental</span>
                        <span className="text-Green-600"> &amp; </span>
                        climático
                        <span className="title-line">&mdash;</span>
                    </h1>
                    <div className="hidden lg:block text-White-50 text-base leading-11">
                        <h5 className="font-bold">Bem-vindos ao futuro!</h5>
                        <p className="w-11/12">
                            Uma nova maneira de entender uma fintech e uma nova forma de agir pela Amazônia, pelas pessoas e pelo clima.
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block text-right lg:relative">
                    <Image src={card} alt="Cartão AmaBank" />
                    <div className="lg:absolute bottom-0 right-0 text-White-50 w-60">
                        <i className="lg:flex lg:justify-end" >
                            <HiOutlineArrowLeft  className=" lg:text-right text-2xl"/>
                        </i>
                        <span className="font-normal italic text-base">
                            Modelo do
                            nosso cartão
                            reciclável!
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
