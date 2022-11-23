const React = require('react')
const myStyle = {
    color: 'darkred',
    backgroundColor: 'gold',
};

class Show extends React.Component {
    render() {
        const { name, img } = this.props.pokemon
        const character = name.charAt(0).toUpperCase() + name.slice(1)
        return (

            <body style={myStyle}>
                <h3>
                    <a href={`/pokemon`}>Home</a>
                </h3>
                <h1>
                    "Gotta Catch 'Em All"'
                </h1>
                <h2>
                    {character} <br></br>
                    <img src={`${img}.jpg`}></img>
                    <br></br>
                </h2>

            </body >
        )
    }
}
module.exports = Show