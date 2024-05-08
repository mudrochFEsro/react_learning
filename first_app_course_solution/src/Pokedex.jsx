import Pokecard from "./Pokecard";
import React, {Component} from "react";
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title = <p className={this.props.isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{this.props.isWinner ? 'WINNER!' : 'LOSER!'}</p>
        if (this.props.isWinner) {
            title = <h1 className='Pokedex-winner'>Winning Hand</h1>
        } else {
            title = <h1 className='Pokedex-loser'>Losing Hand</h1>
        }
        return (
            <div className='Pokedex'>
                {title}
                <h4>Total experience: {this.props.exp}</h4>
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
