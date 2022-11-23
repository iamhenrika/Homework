const h1 = {
    color: 'darkred',
    backgroundColor: 'gold',
    padding: '10px'
};

const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Add a Pokemon</h1>
                <nav>
                    <a href="/pokemon">Pokedex</a>

                </nav>
                <form action="/pokemon" method="POST">
                    Can you list 'em all? = <input type="text" name='name' />
                    <br />
                    Snapshot : <input type="text" name='img' />
                    <br />
                    <input type="submit" value='Create Pokemon' />
                </form>

            </div>
        )
    }
}
module.exports = New
