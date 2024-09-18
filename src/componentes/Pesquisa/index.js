import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 40%, #326589 165%);
        color: white;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-bottom: 20px;
    cursor: pointer;
    

    p {
        width: 200px;
    }
    img {
        width: 50px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])


    
    return (
    <PesquisaContainer>
        <Titulo>Já sabe o que procurar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa plataforma</Subtitulo>
        <Input 
            placeholder="Escreva sua próxima leitura"
            onBlur={evento => {
                const textoDgitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDgitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
       { livrosPesquisados.map( livro => (
            <Resultado>
                <p>{livro.nome}</p>
                <img src={livro.src}/>
            </Resultado>
               
       )) }    
    </PesquisaContainer>

    )
}

export default Pesquisa