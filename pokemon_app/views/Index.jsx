const h1 = {
    color: 'darkred',
    backgroundColor: 'gold',
    padding: '10px'
};


const React = require("react");

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div>
                <h1 style={h1}>See All The Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Add a New Pokemon</a>
                </nav>
                <ul>
                    {
                        pokemon.map((pokemon, i) => {
                            let figure = pokemon.name;
                            return (
                                <li key={i}>
                                    <a href={`/pokemon/${i}`}>
                                        {figure.charAt(0).toUpperCase() + figure.slice(1).toLowerCase()}
                                    </a>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index