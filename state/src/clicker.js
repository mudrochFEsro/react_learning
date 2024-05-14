import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.genRandom = this.genRandom.bind(this);
    }

    genRandom() {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand})
    }

    render() {
        let showWin = this.state.num === 7
            ? <h2>You won!</h2>
            : <button onClick={this.genRandom}>Random number</button>;
        return (
            <div>
                <h1>Number is: {this.state.num}</h1>
                {showWin}
            </div>
        )
    }
}

export default Clicker;