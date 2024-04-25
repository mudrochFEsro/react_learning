class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to='Juro'
                    from='Marek'
                />
                <Hello
                    to='Juro'
                    num={5}
                />
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

