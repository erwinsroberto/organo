import './banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = ({ enderecoImagem, textoAlternativo }:BannerProps) => {
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="É o banner principal da página organo"></img> */}
            <img src={enderecoImagem} alt={textoAlternativo}></img>
        </header>       
    )
}

export default Banner