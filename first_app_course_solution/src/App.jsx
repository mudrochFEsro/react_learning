import React, {Component} from "react";
import './App.css';
import Pokegame from "./Pokegame";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Pokegame!</h1>
                <Pokegame/>
            </div>);
    }


}

export default App;
