import React, { Component } from "react";
import './Dog.css';
import ReactLogo from './logo.svg';

class Dog extends Component{
    render() {
        return (
            <div className='Dog'>
                <h1>DOG!</h1>
                <img className='Dog-img' src={ReactLogo} alt='React Logo' />
            </div>
        )
    }
}
export default Dog;