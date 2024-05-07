import Pokecard from "./Pokecard";
import React, {Component} from "react";
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
                <h1>Pokedex!</h1>
                <p>Total experience: {this.props.exp}</p>
                <p>{this.props.isWinner ? 'WINNER!' : 'LOSER!'}</p>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((pokemon) => (
                        <Pokecard
                            id={pokemon.id}
                            key={pokemon.id}
                            type={pokemon.type}
                            name={pokemon.name}
                            exp={pokemon.base_experience}
                        />
                    ))}
                </div>
            </div>
        )

    }

}

export default Pokedex;
