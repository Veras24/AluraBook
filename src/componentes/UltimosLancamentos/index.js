import { livros} from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: gray;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
             <Titulo 
             cor="black" 
             tamanhoFonte="36px" 
             alinhamento="center">
             ÚLTIMOS LANÇAMENTOS
             </Titulo>
             <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por leitura"
                subtitulo="Angular 11"
                descricao="Contruindo uma plataforma Google"
                img={imagemLivro}
            />
          


        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos