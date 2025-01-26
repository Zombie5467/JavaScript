interface SaludoProps {
    texto: string;
}

function Saludo ({texto}:SaludoProps) {
    return <h1>{texto}</h1>
}

export default Saludo;