class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <h1>Slot Machine!</h1>
                <SlotMachine
                    s1='&#127815;'
                    s2='&#127826;'
                    s3='&#129373;'
                />
                <SlotMachine
                    s1='&#127815;'
                    s2='&#127815;'
                    s3='&#127815;'
                />
                <SlotMachine
                    s1='&#127821;'
                    s2='&#127821;'
                    s3='&#129373;'
                />
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

