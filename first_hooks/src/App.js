import './App.css';
import './CountersHook'
import CountersHook from "./CountersHook";
import Toggler from "./Toggler";
import SimpleFormHook from "./SImpleFormHook";

function App() {
    return (
        <div className="App">
            <CountersHook/>
            <Toggler/>
            <SimpleFormHook/>
        </div>
    );
}

export default App;
