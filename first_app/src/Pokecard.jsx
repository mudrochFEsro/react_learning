import React, {Component} from "react";
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const {name, src, type, base_experience} = this.props;
        return (
            <div className='Pokecard'>
                <h2>{name}</h2>
                <img src={src} alt={name}/>
                <p>Type: {type}</p>
                <p>EXP: {base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;