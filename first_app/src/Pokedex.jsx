import React, {Component} from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

class Pokedex extends Component{
    render() {
        const defaultProps = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'leaf', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'psychic', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
        ]
        const PokeImageURL = (defaultProp) =>{
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${defaultProp.id}.png`
        }
        return (
            <div className="Pokedex">
                {defaultProps.map(defaultProp =>
                    <Pokecard
                        key={defaultProp.id}
                        name={defaultProp.name}
                        src={PokeImageURL(defaultProp)}
                        alt={defaultProp.name}
                        type={defaultProp.type}
                        base_experience={defaultProp.base_experience}
                    />
                )}

            </div>
        );
    }


}

export default Pokedex;
