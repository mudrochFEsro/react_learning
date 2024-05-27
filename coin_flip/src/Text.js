import React, {Component} from "react";
import './Text.css'
class Text extends Component {
    render() {
        let total = this.props.trumpFlips + this.props.kangarooFlips
        return (
            <div className='Text'>
                <p>
                    Trump head count: {this.props.trumpFlips}
                    <br/>
                    Kangaroo head count: {this.props.kangarooFlips}
                    <br/>
                    Total flips: {total}
                </p>

            </div>
        )
    }
}

export default Text;