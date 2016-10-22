import React, {Component} from 'react';
import {Link} from 'react-router';
import moment from 'moment-timezone'

class Games extends Component {

    chooseGame(match, awayTeam, homeTeam) {
        this.props.store.dispatch({type: 'CHOOSE_MATCH', match: match, awayTeam: awayTeam, homeTeam: homeTeam})
    }
    render() {
        let self = this;
        return (
            <div>
                {this.props.games.map(function(game) {
                    return <Link to='match' key={game.id}>
                        <div className='card' onClick={() => self.chooseGame(game.id, game.away_team_id, game.home_team_id)}>{game.label} <br/> {moment.tz(game.started_at, 'America/New_York').format('dddd, Do, h:mmA') + ' EST'}</div>
                    </Link>
                })}
                <Link to='/'><div className="back">Back to Sports</div></Link>
            </div>
        );
    }
}

export default Games;
