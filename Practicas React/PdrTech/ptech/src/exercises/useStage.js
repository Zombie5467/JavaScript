import { useState } from "react" ;

function Age() {
    let [ age, setAge ] = useState(0);

    const increase = () => {
        setAge(age + 1)
    }
    const decrease = () => {
        // if (age > 0) {setAge(age - 1)};
        age > 0 && setAge(age - 1);
    }
    const reset = () => {
        setAge(0)
    }

    return (
        <div>
            {age}
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Age;