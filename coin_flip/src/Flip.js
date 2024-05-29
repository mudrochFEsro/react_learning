import React, {Component} from "react";
import Coin from "./Coin";
import Text from "./Text";
import './Flip.css'

class Flip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: 0,
            trumpCount: 0,
            kangarooCount: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    flip() {
        let randNum = Math.floor(Math.random() * 2) + 1;
        this.setState(prevState => ({
            flipped: randNum,
            trumpCount: randNum === 1 ? prevState.trumpCount + 1 : prevState.trumpCount,
            kangarooCount: randNum === 2 ? prevState.kangarooCount + 1 : prevState.kangarooCount
        }))
        // this.setState((prevState) => {
        //     let newTrumpCount = prevState.trumpCount;
        //     let newKangarooCount = prevState.kangarooCount;
        //
        //     if (randNum === 1) {
        //         newTrumpCount += 1;
        //     } else if (randNum === 2) {
        //         newKangarooCount += 1;
        //     }
        //     return {
        //         flipped: randNum,
        //         trumpCount: newTrumpCount,
        //         kangarooCount: newKangarooCount
        //     };
        // });

    }
    clickHandler() {
        this.flip()
    }
    render() {
        return (
            <div className='Flip'>
                <h1>Flip the coin!</h1>
                <Coin
                    side={this.state.flipped}
                />
                <Text
                    trumpFlips={this.state.trumpCount}
                    kangarooFlips={this.state.kangarooCount}
                />
                <button onClick={this.clickHandler}>Flip the coin!</button>
            </div>
        )
    }
}

export default Flip;