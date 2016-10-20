import React, {Component} from 'react';
import {Link} from 'react-router';

class Games extends Component {

    chooseGame(match, awayTeam, homeTeam) {
        this.props.store.dispatch({type: 'CHOOSE_MATCH', match: match, awayTeam: awayTeam, homeTeam: homeTeam})
    }
    render() {
        let self = this;
        return (
            <div>
                <h1>Games</h1>

                {this.props.games.map(function(game) {
                    return <Link to='match' key={game.id}>
                        <div className='card' onClick={() => self.chooseGame(game.id, game.away_team_id, game.home_team_id)}>{game.name}</div>
                    </Link>
                })}
                <Link to='/'><div className="back">Back to Sports</div></Link>
            </div>
        );
    }
}

export default Games;
