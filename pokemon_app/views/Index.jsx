const h1 = {
    color: '#ffffff',
    backgroundColor: '#a91c49',
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
                    <a href="/pokemon/new">Create New Pokemon</a>
                </nav>
                <ul>
                    {
                        pokemon.map((figure, i) => {
                            let figureName = figure.name;

                            return (
                                <li key={i}>
                                    <a href={`/pokemon/${figure._id}`}>
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