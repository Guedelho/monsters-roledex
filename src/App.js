import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleChange = event => {
        const searchField = event.target.value;
        this.setState({ searchField });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <SearchBox
                    searchField={searchField}
                    onChange={this.handleChange}
                    placeholder="search monsters"
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
