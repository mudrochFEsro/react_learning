import React, {Component} from "react";
import './Text.css'

class Text extends Component {
    render() {
        let {trumpFlips, kangarooFlips} = this.props;
        let total = trumpFlips + kangarooFlips
        return (
            <div className='Text'>
                <p>
                    Trump head count: {trumpFlips}
                    <br/>
                    Kangaroo head count: {kangarooFlips}
                    <br/>
                    Total flips: {total}
                </p>

            </div>
        )
    }
}

export default Text;