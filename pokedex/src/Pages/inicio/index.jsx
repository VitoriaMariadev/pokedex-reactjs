import Header from '../../Components/Header'
import './style.css'
import { NavLink } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Inicio = () => { 

    const [local, setLocal] = useState(0)
    const [seta, setSeta] = useState('')

    const location = useLocation();
    const url = location.pathname;

    const posicao = useRef(null)

    const telaColaboradores = () => {
        if (url === '/Colaboradores'){
            posicao.current.scrollTo({ top: 1231, behavior: 'smooth' });
            
        }else{
            posicao.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
     }
    
    const mudarSeta = () => {
        if (local >= 2500){
            setSeta('oculto')
        }else{
            setSeta('')
        }
    }

    useEffect(() => {
        telaColaboradores()
    }, [url])

    useEffect(() => {
        mudarSeta()
    }, [local])

    useEffect(() => {
        
        const posicaoNaTela = () => {
            if (posicao.current){
                const posicaoAtual = posicao.current.scrollTop
                setLocal(posicaoAtual)
            }
        
          // Define o tempo em milissegundos para o próximo loop (neste caso, 1 segundo)
          const tempoDoLoopEmMilissegundos = 300;
    
          // Chama a função novamente após o tempo definido
          
          setTimeout(posicaoNaTela, tempoDoLoopEmMilissegundos);
        };
    

        posicaoNaTela();
    
        // Retorna uma função de limpeza para parar o loop quando o componente for desmontado
        return () => {
          console.log('O loop foi parado!'); // Apenas para fins de demonstração
        };
      }, []);


    return(
        <div>
            <Header/>
            <main className='main-inicio' ref={posicao}>
                <IoIosArrowDown className={seta}/>
                <div className="main-inicio-logo"></div>
                <div className="main-inicio-bolinhas1 bolinhas-main"></div>
                <div className="main-inicio-bolinhas2 bolinhas-main"></div>
                <div className="main-inicio-triangulo1 triangulo"></div>
                <div className="main-inicio-triangulo2 triangulo"></div>

                <div className="main-inicio-container">
                    
                    <div className="main-inicio-titulo">
                        <div className="main-inicio-titulo-container">
                                <h1 className='main-inicio-titulo-container-preto'>POKEDEX</h1>
                                <h1 className='main-inicio-titulo-container-transparente'>POKEDEX</h1>
                        </div>
                        
                    </div>

                    <div className="main-inicio-mensagem">
                        <div className="main-inicio-mensagem-titulo-logo">
                            <div className="main-inicio-mensagem-titulo-logo-titulo">
                                <h1>VAMOS PEGAR TODOS ELES!</h1>
                            </div>
                            <div className="main-inicio-mensagem-titulo-logo-logo"></div>
                        </div>
                        <div className="main-inicio-mensagem-texto">

                            <div className="main-inicio-mensagem-texto-paragrafo">
                                <p className='paragrafo'>
                                Embarque nessa aventura de conseguir todos os pokemons!
                                Aqui você poderá identificar com mais detalhes o pokemon assim
                                adquirido. Aperte aqui para fazer seu <NavLink to="/Logar_usuario">login</NavLink>. Caso ainda não
                                possua uma conta, aperte aqui para fazer parte da nossa jornada
                                fazendo seu <NavLink to="/Cadastrar_usuario">cadastro</NavLink>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="main-inicio-colaboradores">
                        <div className="main-inicio-colaboradores-contato">
                            <div className="main-inicio-colaboradores-contato-titulo">
                                <h1>Colaboradores...</h1>
                            </div>
                            <div className="main-inicio-colaboradores-contato-container">
                                <div className="main-inicio-colaboradores-contato-container-divisao">
                                    <div className="main-inicio-colaboradores-contato-container-divisao-foto"></div>
                                    <h1>Anderson Lucas</h1>
                                    <p>Back-end</p>
                                    <a href='https://github.com/AndersonLucasdev'className='main-inicio-colaboradores-contato-container-divisao-logo'><AiFillGithub/></a>
                                </div>

                                <div className="main-inicio-colaboradores-contato-container-divisao">
                                    <div className="main-inicio-colaboradores-contato-container-divisao-foto"></div>
                                    <h1>Vitória Maria</h1>
                                    <p>Front-end</p>
                                    <a href='https://github.com/VitoriaMariadev' className='main-inicio-colaboradores-contato-container-divisao-logo'><AiFillGithub/></a>
                                </div>

                                <div className="main-inicio-colaboradores-contato-container-divisao">
                                    <div className="main-inicio-colaboradores-contato-container-divisao-foto"></div>
                                    <h1>Vitor Manoel</h1>
                                    <p>Banco de Dados & Desing</p>
                                    <a href='https://github.com/Vitor4654' className='main-inicio-colaboradores-contato-container-divisao-logo'><AiFillGithub/></a>
                                </div>

                                <div className="main-inicio-colaboradores-contato-container-divisao">
                                    <div className="main-inicio-colaboradores-contato-container-divisao-foto"></div>
                                    <h1>Thiago Andrade</h1>
                                    <p>Desing</p>
                                    <a href='https://github.com/Tsar006' className='main-inicio-colaboradores-contato-container-divisao-logo'><AiFillGithub/></a>
                                </div>

                                <div className="main-inicio-colaboradores-contato-container-divisao">
                                    <div className="main-inicio-colaboradores-contato-container-divisao-foto"></div>
                                    <h1>Carlos Eduardo</h1>
                                    <p>Banco de Dados & Desing</p>
                                    <a href='https://github.com/yedulima' className='main-inicio-colaboradores-contato-container-divisao-logo'><AiFillGithub/></a>
                                </div>
                            </div>
                        </div>  
                        <div className="main-inicio-colaboradores-rodape">

                            <div className="main-inicio-colaboradores-rodape-container">
                                <div className="main-inicio-colaboradores-rodape-container-logo"></div>
                                <div className="main-inicio-colaboradores-rodape-container-frase">
                                    <p>2023© Copyright - Pokémon</p>
                                </div>
                            </div>

                        </div>
                    </div>        
                </div>

            </main>
        </div>
    )
}

export default Inicio