import React, {Component} from "react";
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='Pokecard'>
                <h2>{this.props.name}</h2>
                <img
                    src={this.props.src}
                    alt={this.props.name}/>
                <p>Type: {this.props.type}</p>
                <p>EXP: {this.props.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;