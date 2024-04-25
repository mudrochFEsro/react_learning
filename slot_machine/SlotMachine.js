class SlotMachine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props
        const winner = (s1 === s2) && (s2 === s3)
        const style = {
            fontSize: '30px'
        }
        const fontColor = winner ? 'SlotMachine-winner' : 'SlotMachine-loser'
        return (
            <div className="SlotMachine">
                <p style={style}>
                    {s1} - {s2} - {s3}
                </p>
                <h2 className={fontColor}>
                    {winner ? 'You won!' : 'You lost!'}
                </h2>
            </div>
        )
    }
}