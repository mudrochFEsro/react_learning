class Hello extends React.Component {
    static defaultProps ={
        from: 'Anonymous',
        num: 1
    }
    render() {
        let bangs = '!'.repeat(this.props.num)
        return (
            <div>
                <div>
                    <p>Hi {this.props.to} form {this.props.from} {bangs}</p>
                </div>
            </div>
        )
    }
}