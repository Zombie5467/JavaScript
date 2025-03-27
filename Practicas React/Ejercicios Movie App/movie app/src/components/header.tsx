interface HeaderProps {
    texto: string;
}

function Header ({texto}:HeaderProps) {
    return <h1>{texto}</h1>
}

export default Header;