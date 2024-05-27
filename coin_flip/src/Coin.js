import React, { Component} from "react";
import TrumpImg from './img/trump.png'
import KangarooImg from './img/kangaroo.png'
import './Coin.css'

class Coin extends Component {
    render() {
        // let coinSide;
        // if (this.props.side === 1) {
        //     coinSide = <img src={`${TrumpImg}`} alt='' />;
        // } else {
        //     coinSide = <img src={`${KangarooImg}`} alt='' />;
        // }
        let coinSide = this.props.side === 1
            ? <img src={`${TrumpImg}`} alt=''/>
            : <img src={`${KangarooImg}`} alt=''/>

        return (
            <div className={`Coin ${this.props.side ? '' : 'hide'}`}>
                {coinSide}
            </div>
        )
    }
}

export default Coin;