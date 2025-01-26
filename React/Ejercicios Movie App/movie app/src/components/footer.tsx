
const fecha = new Date()
console.log(fecha)

const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const año = fecha.getFullYear();
const formatoFecha = `${dia}/${mes}/${año}`


// interface FooterProps {
//     texto: string;
// }

function Footer () {
    return <div>{formatoFecha}</div>;
}

export default Footer;
