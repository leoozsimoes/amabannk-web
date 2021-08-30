/* eslint-disable-next-line no-return-assign, no-param-reassign */
import FormRegister from '../../molecule/FormRegister/FormRegister'
import Image from 'next/image'
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { CgArrowLongRight } from 'react-icons/cg'
import * as Scroll from 'react-scroll';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import amazonia from '../../../img/nos-pela-amazônia.png'
import card from '../../../img/card.png'
import icone from '../../../img/icon.png'
import homem from '../../../img/persona-homem.png'
import card_folha from '../../../img/card_folha.png'
import card_user from '../../../img/card_user.png'
import card_lampada from '../../../img/card_lampada.png'
import card_20_ton from '../../../img/card_20_ton.png'

const Section = ({ }) => {
    const scroll = Scroll.animateScroll;
    function scrollToTop() {
        scroll.scrollToTop();
    }
    return (
        <section className="section">
            <div className="xl:container m-auto px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-14 text-Blue-700">
                    <Slide left>
                        <Element name="form">
                            <FormRegister />
                        </Element>
                    </Slide>
                    <article className="xl:pt-24">
                        <Slide right>
                            <div className="pt-16 pb-5 lg:pt-28">
                                <h2 className="title-paragraph font-semibold inline-block">
                                    O <span className="italic">amabanker</span> usa,<br /> nós, preservamos!
                                    <span className="title-line">&mdash;</span>
                                </h2>
                            </div>
                            <div className="paragraph">
                                <p className="pb-6 xl:pb-12">
                                    Quanto mais você utiliza nossos serviços no app do <strong >Amabank</strong>, mais direcionamos uma parte da nossa receita para o programa <strong className="underline">“Nós pela Amazônia”</strong>.
                                </p>
                                <p className="pb-6 xl:pb-12">
                                    <strong>Você não paga nada pela nossa doação</strong>, mas faz parte dela por escolher se integrar ao nosso Banco Digital!
                                </p>
                                <p className="pb-6 xl:pb-12">
                                    Além disso, juntos, fazemos parte de:
                                </p>
                            </div>
                            <ul className="ul-paragraph ml-14 pb-16">
                                <li>Projetos Climáticos;</li>
                                <li>Projetos Ambientais;</li>
                                <li>Projetos Sociais;</li>
                                <li>Gestão de unidades de conservação;</li>
                                <li>Aquisição de novas áreas para conservação.</li>
                            </ul>
                            <div className="grid grid-cols-2 lg:w-full pb-12 sm:w-7/12 ">
                                <div>
                                    <h5 className="font-bold title-h5">
                                        Saiba tudo sobre a causa acessando o site oficial: <br />
                                        <Link href="https://amazonianalliance.com" targat="_black">
                                            <a className="underline italic font-normal">amazonianalliance.com</a>
                                        </Link>
                                    </h5>
                                </div>
                                <Image src={amazonia} />
                            </div>
                        </Slide>
                    </article>
                    <article className="md:hidden">
                        <Zoom>
                            <div className="relative flex justify-center">
                                <Image src={card} width={337} height={303} className="m-auto" />
                            </div>
                        </Zoom>
                    </article>
                    <article >
                        <Element name="banco-digital">
                            <Slide left>
                                <div className="pt-5 pb-5 lg:pb-20">
                                    <h2 className="title-paragraph font-semibold inline-block pb-5">
                                        Igual <span className="font-normal">ao que você já conhece, mas ainda</span>  melhor!
                                        <span className="title-line">&mdash;</span>
                                    </h2>
                                </div>
                                <div className="paragraph pb-10">
                                    <p className="pb-6 xl:pb-12">
                                        Temos a <strong>tecnologia equivalente</strong> às fintechs que você já conhece, mas com o diferencial de prestarmos contas através do nosso <em>app</em> , <strong className="italic">em tempo real!</strong>
                                    </p>
                                    <p className="pb-6 xl:pb-12">
                                        <strong>Mostramos o quanto estamos investindo na natureza com parte da nossa receita, em detalhes.</strong> Tudo o que fazemos é porque acreditamos que o planeta e as pessoas vêm acima do lucro!
                                    </p>
                                    <p className="pb-6 xl:pb-12">
                                        <strong>E tudo isso graças à você,</strong> que nos escolheu como o seu Banco Digital, visando preservar a Amazônia constantemente e sem precisar descontar do próprio bolso!
                                    </p>
                                </div>
                            </Slide>
                        </Element>
                    </article>
                    <article className="hidden lg:flex lg: justify-center flex-col xl:block">
                        <Slide right>
                            <div className="lg:relative app">
                                <Image src="/img/app.png" layout="fill" />
                            </div>
                        </Slide>
                    </article>
                    <article className="col-span-2 h-auto">
                        <Element name="servicos">
                            <Zoom>
                                <h2 className="title-paragraph font-semibold inline-block pb-10">
                                    O que você faz no app da Amabank?
                                    <span className="title-line">&mdash;</span>
                                </h2>
                            </Zoom>
                        </Element>
                    </article>
                    <article className="block sm:hidden">
                        <Slide right>
                            <div className="px-11">
                                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-10 font-semibold list-app">
                                    <li className="bg-lg">
                                        <span>PIX</span>
                                    </li>
                                    <li className="borda">
                                        <div className="relative">
                                            <Image src={icone} className="icon" />
                                        </div>
                                        <span>RECARGA DE CELULAR</span>
                                    </li>
                                    <li className="borda">
                                        <div className="relative">
                                            <Image src={icone} className="icon" />
                                        </div>
                                        <span>EMPRÉSTIMO <br /> PJ E PF</span>
                                    </li>
                                    <li className="bg-lg">
                                        <span>SEGUROS</span>
                                    </li>
                                    <li className="bg-lg">
                                        <span>PAGAMENTOS <br /> DE CONTAS</span>
                                    </li>
                                    <li className="borda">
                                        <div>
                                            <Image src={icone} className="icon" />
                                        </div>
                                        <span>CARTÃO DIGITAL</span>
                                    </li>
                                    <li className="borda">
                                        <div className="relative">
                                            <Image src={icone} className="icon" />
                                        </div>
                                        <span>TRANSFERÊNCIA ENTRE CONTAS</span>
                                    </li>
                                    <li className="bg-lg">
                                        <span>SAQUE NA <br />REDE 24H </span>
                                    </li>
                                    <li className="bg-lg">
                                        <span>PAGAMENTO <br />POR QR CODE</span>
                                    </li>
                                    <li className="borda">
                                        <div className="relative">
                                            <Image src={icone} className="icon" />
                                        </div>
                                        <span>BOLETO <br /> BANCÁRIO</span>
                                    </li>
                                    <li className="col-span-2 bg-lg">
                                        CARTÃO DE DÉBITO COM <br /> MODALIDADE CRÉDITO
                                    </li>
                                </ul>
                            </div>
                        </Slide>
                    </article>
                    <article className="hidden sm:block lg:col-span-2">
                        <Slide>
                            <div className="px-11 flex lg:pb-36" >
                                <div className="relative men hidden lg:block">
                                    <Image src={homem} />
                                </div>
                                <div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-10 font-semibold list-app md:pb-24">
                                        <li className="bg-lg">
                                            <span>PIX</span>
                                        </li>
                                        <li className="borda">
                                            <div className="relative">
                                                <Image src={icone} className="icon" />
                                            </div>
                                            <span>RECARGA DE CELULAR</span>
                                        </li>
                                        <li className="bg-lg">
                                            <span>SAQUE NA <br />REDE 24H </span>
                                        </li>
                                        <li className="borda">
                                            <div className="relative">
                                                <Image src={icone} className="icon" />
                                            </div>
                                            <span>TRANSFERÊNCIA ENTRE CONTAS</span>
                                        </li>
                                        <li className="borda">
                                            <div className="relative">
                                                <Image src={icone} className="icon" />
                                            </div>
                                            <span>EMPRÉSTIMO <br /> PJ E PF</span>
                                        </li>
                                        <li className="bg-lg">
                                            <span>SEGUROS</span>
                                        </li>
                                        <li className="borda">
                                            <div className="relative">
                                                <Image src={icone} className="icon" />
                                            </div>
                                            <span>BOLETO <br /> BANCÁRIO</span>
                                        </li>
                                        <li className="bg-lg">
                                            <span>PAGAMENTOS <br /> DE CONTAS</span>
                                        </li>
                                        <li className="bg-lg">
                                            <span>PAGAMENTO <br />POR QR CODE</span>
                                        </li>
                                        <li className="borda">
                                            <div>
                                                <Image src={icone} className="icon" />
                                            </div>
                                            <span>CARTÃO DIGITAL</span>
                                        </li>
                                        <li className="col-span-2 bg-lg">
                                            CARTÃO DE DÉBITO COM <br /> MODALIDADE CRÉDITO
                                        </li>
                                        <li className="col-span-4">
                                            <div className="text-center pt-20 rounded-3xl  mt-20">
                                                <h4 className="font-bold text-lg">QUERO TODOS ESSES BENEFÍCIOS</h4>
                                                <p className="font-medium text-base">
                                                    e ainda ajudar a proteger a <span className="font-bold">Ama</span>zônia <br /> ativamente, <span className="font-bold">de graça!</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Slide>
                    </article>
                    <article className="block md:hidden">
                        <Zoom top>
                            <div className="text-center bg-White-50 py-3 rounded-3xl mt-9 mb-20 block sm:hidden">
                                <h4 className="font-bold text-tiny">QUERO TODOS ESSES BENEFÍCIOS</h4>
                                <p className="font-medium text-xs">
                                    e ainda ajudar a proteger a <span className="font-bold">Ama</span>zônia <br /> ativamente, <span className="font-bold">de graça!</span>
                                </p>
                            </div>
                        </Zoom>
                    </article>
                </div>
            </div>
            <article className="gerenation_planet relative block md:hidden mt-24">
                <Zoom>
                    <Image src="/img/gerenation_planet.png" layout="fill" objectFit="cover" />
                </Zoom>
            </article>
            <article className="bg-Green-600 pb-24">
                <div className="xl:container m-auto px-8">
                    <div className="lg:grid grid-670-auto pt-16">
                        <div className="lg:pr-20">
                            <Slide left>
                                <div className="pt-16 pb-5">
                                    <Element name="selos">
                                        <h2 className="text-lg sm:text-2xl lg:text-5xl font-semibold inline-block text-White-50 lg:pt-10 lg:pb-24">
                                            Precisamos de pessoas que estejam na mesma sintonia que a gente!
                                            <span className="title-line text-Blue-700">&mdash;</span>
                                        </h2>
                                    </Element>
                                </div>
                                <div className="bg-White-50 p-12 lg:p-20 rounded-3xl relative">
                                    <p className="font-medium text-xs sm:text-tiny lg:text-base text-Blue-700">
                                        Dá uma olhada nos selos que você pode receber
                                        <span className="font-bold">utilizando nosso app</span> enquanto também luta pela
                                        Amazônia, pelo clima e pelas pessoas!
                                    </p>
                                    <p className="font-semibold text-xs sm:text-tiny lg:text-base text-Blue-700 italic pt-6">
                                        #OPlanetaEAsPessoasAcimaDoLucro
                                    </p>

                                    <i className="absolute right-5 bottom-5 block lg:hidden">
                                        <HiOutlineArrowNarrowDown className="text-xl text-Blue-700" />
                                    </i>
                                    <i className="absolute right-5 bottom-5 hidden lg:block">
                                        <CgArrowLongRight className="text-4xl text-Blue-700" />
                                    </i>
                                </div>
                                <div className="mt-10 hidden lg:block">
                                    <Link href="/">
                                        <a className="bg-Blue-700 block text-White-50 text-center py-4 font-bold text-lg rounded-2xl">
                                            QUERO SER UM AMABANKER E AJUDAR A AMAZÔNIA!
                                        </a>
                                    </Link>
                                </div>
                            </Slide>
                        </div>
                        <Slide right>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 pr-0 pl-14 sm:pt-10 max-w-xl m-auto sm:max-w-full gap-10 lg:gap-3 lg:bg-White-50 h-3/4 rounded-3xl relative top-20 sm:top-32 mb-48 lg:pb-14 lg:pt-14 lg:pl-14 lg:pr-10">
                                <div className="relative icon-card">
                                    <h3 className="text-White-50 lg:text-Blue-700 font-semibold text-sm lg:text-base sm:h-24 sm:flex sm:justify-center sm:flex-col">Novo <br /> Amabanker</h3>
                                    <Image src={card_folha} layout="fill" />
                                </div>
                                <div className="relative icon-card">
                                    <h3 className="text-White-50 lg:text-Blue-700 font-semibold text-sm lg:text-base sm:h-24 sm:flex justify-center sm:flex-col">Usuário <br /> Ativo</h3>
                                    <Image src={card_user} layout="fill" />
                                </div>
                                <div className="relative icon-card">
                                    <h3 className="text-White-50 lg:text-Blue-700 font-semibold text-sm lg:text-base h-24 lg:h-48 flex justify-center flex-col">Inovador</h3>
                                    <Image src={card_lampada} layout="fill" />
                                </div>
                                <div className="relative icon-card">
                                    <h3 className="text-White-50 lg:text-Blue-700 font-semibold text-sm lg:text-base h-24 lg:h-48 flex justify-center flex-col lg:w-3/5">20 toneladas de carbono aprisionados</h3>
                                    <Image src={card_20_ton} layout="fill" />
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="mt-14 block lg:hidden">
                        <Link href={null} to="form" spy={false} smooth={true} offset={0} duration={500} onClick={scrollToTop} className="bg-Blue-700 block text-White-50 text-center py-2 font-bold text-sm rounded-2xl">
                            QUERO SER UM AMABANKER <br /> E AJUDAR A AMAZÔNIA!
                        </Link>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default Section
