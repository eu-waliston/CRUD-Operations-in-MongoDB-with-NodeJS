import React from "react";
import "./AllCharacters.scss"
import Character from "./Character";


async function getCharacters(){
    let res = await fetch("https://crud-operations-in-mongodb-with-nodejs.onrender.com/get-all-users/")

    let data = await res.json()

    return data;
}

const AllCharacters = () => {

    const [characters, setCharacters] = React.useState([])
    React.useEffect(() => {
        getCharacters().then((data) => {
            setCharacters(data)
        })
    }, [])

    return (
        <div className="AllCharacters">
            <div className="allcharacters--grid">
                {
                    characters.map((character,index) =>(
                        <Character 
                        Image={character.Image}
                        key={index}
                     />
                    ))
                }
            </div>
        </div>
    )
}

export default AllCharacters;