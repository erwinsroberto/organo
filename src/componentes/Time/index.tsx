import './time.css'
 import Colaborador from '../Colaborador'
import { IColaborador } from '../compartilhado/interfaces/IColaborador'
import React from 'react'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
    return (
        (props.colaboradores.length >0) ? <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        corDeFundo={props.corPrimaria} 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section>
        : <React.Fragment></React.Fragment>
    )
}

export default Time