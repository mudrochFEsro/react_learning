class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name='Juraj'
                    hobbies={['Snowboarding','Fishing','Car Driving']}
                />
                <Friend
                    name='Katka'
                    hobbies={['Drinking','Playing games']}
                />
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

