import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'


const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados abaixo para criar o card do funcionário</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}></CampoTexto>

                <CampoTexto obrigatorio = {true} 
                    label="Cargo" 
                    placeholder="Digite o cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}></CampoTexto>

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}></CampoTexto>

                <ListaSuspensa  
                    obrigatorio = {true} 
                    label="Time" itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario