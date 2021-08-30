// eslint-disable-next-line no-use-before-define
import Image from 'next/image'
import React, { useRef } from 'react'
import cardUser from '../../../img/card_user_lg.png'
import Link from 'next/link'

const FormRegister = () => {
    const sim = useRef()
    const [check, setCheck] = React.useState('')

    function Form(event) {
        event.preventDefault();
        window.location.href = '/cadastro'
    }
    function handleSubmit(event) {
        setCheck(event.target)
        console.log(check);
    }

    return (
        <article className="pt-12">
            <div className="bg-Green-600 rounded-3xl p-8 max-w-4xl m-auto lg:relative bottom-36">
                <div className="md:grid md:grid-cols-2 md:relative">
                    <h3 className="text-Blue-700 title-form font-semibold mb-10 md:text-White-50">
                        Seja um beta tester!
                    </h3>
                    <div className="hidden md:block md:absolute r--5 md:-bottom-4 lg:right-0 lg:-bottom-7">
                        <Image src={cardUser} />
                    </div>
                </div>
                <div className="mb-5">
                    <form name="amabank-beta-test" className="form">
                        <div>
                            <label>Nome</label>
                            <input type="text" name="nome" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" />
                        </div>

                        <div className="grid-form-1">
                            <div>
                                <label htmlFor="estado" className="w-28 sm:w-3/4">Região que mora</label>
                                <select name="estado" id="estado">
                                    <option></option>
                                    <option value="Sul">Sul</option>
                                    <option value="Sudeste">Sudeste</option>
                                    <option value="Nordeste">Nordeste</option>
                                    <option value="Norte">Norte</option>
                                </select>
                            </div>
                            <div>
                                <label className="w-28 sm:w-3/4">Data de nascimento</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label className="w-28 sm:w-3/4">Você tem renda</label>
                                <div className="sm:mt-5 lg:mt-0">
                                    <div>
                                        <input type="radio" id="rsim" value="Sim" name="confirm" />
                                        <label className="not" htmlFor="rsim">Sim</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="rnao" value="Nao" name="confirm" />
                                        <label className="not" htmlFor="rnao">Não</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Usa banco digital? Quais? </label>
                            <input type="text" />
                        </div>
                        <div className="sm:pb-5">
                            <label className="mb-1">Você gostaria de testar nosso aplicativo?</label>
                            <div className="sm:pt-2">
                                <div className="inline-block">
                                    <input type="radio" id="csim" name="confirn_part" value="Sim" onChange={handleSubmit}/>
                                    <label className="not" htmlFor="csim">Sim</label>
                                </div>
                                <div className="inline-block ml-6">
                                    <input type="radio" value="Nao" id="cnao" name="confirn_part" />
                                    <label className="not" htmlFor="cnao">Não</label>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <label className="mb-1">Você gostaria de nos auxiliar em melhorias constantes na sua jornada como cliente</label>
                            <div className="pb-8 sm:pt-5">
                                <div className="inline-block">
                                    <input type="radio" value="Sim" id="asim" name="auxilio_app" />
                                    <label className="not" htmlFor="asim">Sim</label>
                                </div>
                                <div className="inline-block ml-6">
                                    <input type="radio" value="Nao" id="anao" name="auxilio_app" />
                                    <label className="not" htmlFor="anao">Não</label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="cursor-pointer" onClick={Form} value="QUERO MEU CARTÃO AMABANK" />
                    </form>
                </div>
                <small className="text-Blue-700 form-small md:text-White-50">
                    Ao enviar o formulário, declaro que tenho mais de 18 anos e ACEITO os &nbsp;
                    <Link href="/">
                        <a className="italic underline">Termos de Serviço</a>
                    </Link>
                    &nbsp; e &nbsp;
                    <Link href="/">
                        <a className="italic underline"> Política de Privacidade</a>
                    </Link>.
                </small>
            </div>
        </article>
    )
}

export default FormRegister
