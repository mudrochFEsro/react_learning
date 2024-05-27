import React, {Component} from "react";
import Coin from "./Coin";
import './Flip.css'

class Flip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
            trumpCount: 0,
            kangarooCount: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    flip() {
        let randNum = Math.floor(Math.random() * 2) + 1;
        this.setState((prevState) => ({
            flipped: randNum,
            trumpCount: randNum === 1 ? prevState.trumpCount++ : prevState.trumpCount,
            kangarooCount: randNum === 2 ? prevState.kangarooCount++  : prevState.kangarooCount
        }))
    }
    clickHandler(){
        this.flip()
    }
    render() {
        return (
            <div className='Flip'>
                <div className={this.state.flipped ? '' : 'hide'}>
                    <Coin
                        trumCount={this.state.trumpCount}
                        KangarooCount={this.state.kangarooCount}
                        side={this.state.flipped}
                    />
                </div>

                <button onClick={this.clickHandler}>Flip the coin!</button>
            </div>
        )
    }
}

export default Flip;