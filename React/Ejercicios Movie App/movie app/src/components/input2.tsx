import { useState, useEffect } from "react";

function Input() {
    const [inputValue, setInputValue] = useState("");
    const [movies, setMovies] = useState<{ title: string }[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        const newMovie: { title: string } = { title: inputValue };
        setMovies([...movies, newMovie]);
        setInputValue(""); // Limpia el input
    };

    // useEffect para ver el estado actualizado de movies
    useEffect(() => {
        console.log(movies); // Este log se ejecutará cada vez que `movies` cambie
    }, [movies]);

    return (
        <div>
            <h1>Input 2</h1>
            <input title="provisional" type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Enter</button>

            <div>
                {movies.map((movie, index) => (
                    <div key={index}>{movie.title}</div>
                ))}
            </div>
        </div>
    );
}

export default Input;
