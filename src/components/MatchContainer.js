import React, {Component} from 'react';

import axios from 'axios'

import Match from './Match'

class MatchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameData: 'loading ...',
            dataGot: false,
            awayTeam: 'loading ...',
            homeTeam: 'loading ...'
        }
    }
    componentDidMount() {
        let store = this.props.route.store.getState();
        const config = {
            url: `${store.sport}/${store.league}/games`,
            method: 'get',
            baseURL: 'https://api.stattleship.com/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token token=622f168fb6038516d14a8fec8751b607',
                'Accept': 'application/vnd.stattleship.com; version=1'
            },
            params: {
                // Uses the match ID stored in Games.js's chooseGame()
                id: store.match,
                on: 'today'
            }
        }
        axios.request(config).then((response) => {
            // response.data paths are arrays of games that match the query. The first index is chosen
            this.setState({
                gameData: response.data.games.find((element) => {
                    if (element.id === store.match)
                        return element
                }),
                dataGot: true,
                awayTeam: response.data.away_teams.find((element) => {
                    if (element.id === store.awayTeam) {
                        return element
                    }
                }),
                homeTeam: response.data.home_teams.find((element) => {
                    if (element.id === store.homeTeam) {
                        return element
                    }
                })
            })
            this.props.route.store.dispatch({type: 'GOT_DATA', gameData: this.state.gameData})
        });

    }
    render() {
        return (
            <div>
                <Match game={this.state.gameData} homeTeam={this.state.homeTeam} awayTeam={this.state.awayTeam}/>
            </div>
        );
    }

}

export default MatchContainer;
