

export const planets = [
    {name: 'Mars', isGasPlanet: false},
    {name: 'Earth', isGasPlanet: false},
    {name: 'Jupiter', isGasPlanet: true},
    {name: 'Venus', isGasPlanet: false},
    {name: 'Neptune', isGasPlanet: true},
    {name: 'Uranus', isGasPlanet: true},
]

const Planets = (props) => { 
    return (<div>
        {props.name} {props.isGasPlanet} 
    </div> )
}

// console.log('Pluto is a planet')
export default Planets;

