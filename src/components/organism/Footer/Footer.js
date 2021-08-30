// eslint-disable-next-line no-use-before-define
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../atom/Logo/Logo'

const Footer = () => {
   
    return (
        <footer>
            <div className="xl:container m-auto px-8">
                <div className="grid grid-rows-3 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-5 text-Blue-700 text-xs md:text-tiny pt-8 pb-6 lg:py-16">
                    <address className="not-italic col-span-2 md:col-auto">
                        <p>Amabank S/A.</p>
                        <p>CNPJ/MF n. 35.379.282/0001-64</p>
                        <p>Rua Humberto Carta, 96 - Hugo Lange</p>
                        <p>80.040-150 - Curitiba - Paraná.</p>
                    </address>
                    <div className="col-span-2 md:col-auto">
                        <h4 className="font-bold">Contato:</h4>
                        <Link href="mailto:contato@amabank.io">
                            <a className="block">contato@amabank.io</a>
                        </Link>
                        <Link href="tel:+554130197219">
                            <a className="block">41 3019-7219</a>
                        </Link>
                    </div>
                    <div className="col-span-1 md:col-auto">
                        <h4 className="font-bold">Nos siga nas redes:</h4>
                        <div className="pt-6 md:mr-28 flex justify-center">
                            <Link href="/">
                                <a>
                                    <i className="pr-4">
                                        <Image src="/img/insta-png.png" width="32" height="32" />
                                    </i>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="block">
                                    <i>
                                        <Image src="/img/fb-png.png" width="32" height="32" />
                                    </i>
                                </a>
                            </Link>

                        </div>
                    </div>
                    <div className="col-span-1 md:col-auto">
                        <div className="logo-footer relative left-8 top-8 md:top-0 xl:left-48">
                            <Logo rodape={true} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-Green-300">
                <div className="xl:container m-auto px-8">
                    <p className="text-Blue-700 text-xs py-1 sm:text-tiny">
                        Todos direitos reservados à Amabank© {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
