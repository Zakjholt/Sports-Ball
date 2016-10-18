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
    componentDidMount() {
        let self = this
        let state = this.props.route.store.getState();
        const config = {
            url: (state.sport + '/' + state.league + '/games'),
            method: 'get',
            baseURL: 'https://api.stattleship.com/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token token=622f168fb6038516d14a8fec8751b607',
                'Accept': 'application/vnd.stattleship.com; version=1'
            },
            params: {
                status: 'in_progress'
            }
        }
        axios.request(config).then(function(games) {
            var gamesArray = []
            games.data.games.map((game) => {
                gamesArray.push(game)
            });
            console.log(gamesArray);
            self.setState({games: gamesArray})
        });
    }
    render() {


        return (
            <div>
            {console.log(this.state.games)}
                <Games gamesArray={this.state.games}/>
            </div>
        );


    }
}

export default GamesContainer;
