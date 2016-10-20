import React, {Component} from 'react';

import axios from 'axios';

import Games from './Games';

class GamesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: []
        }
    }

    componentWillMount() {
        let self = this
        let state = this.props.route.store.getState();
        const config = {
            url: `${state.sport}/${state.league}/games`,
            method: 'get',
            baseURL: 'https://api.stattleship.com/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token token=622f168fb6038516d14a8fec8751b607',
                'Accept': 'application/vnd.stattleship.com; version=1'
            },
            params: {
                on: 'today'
            }
        }
        axios.request(config).then((games) => {
            var gamesArray = []
            games.data.games.map((game) => {
                return gamesArray.push(game)
            });
            self.setState({games: gamesArray})
        });
    }


    render() {

        return (
            <div>
                <Games store={this.props.route.store} chooseGame={this.chooseGame} games={this.state.games}/>
            </div>
        );


    }
}

export default GamesContainer;
