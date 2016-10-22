import React, {Component} from 'react';
import {Link} from 'react-router';
import moment from 'moment-timezone'


//import guide components
import HockeyGuide from './Guides/HockeyGuide';
import BasketballGuide from './Guides/BasketballGuide';
import BaseballGuide from './Guides/BaseballGuide';
import FootballGuide from './Guides/FootballGuide';

class Match extends Component {
    render() {
        let awayTeamStyles = {
            background: '#' + this.props.awayTeam.color,
            color: 'white',
            fontWeight: 'bold'
        }
        let homeTeamStyles = {
            background: '#' + this.props.homeTeam.color,
            color: 'white',
            fontWeight: 'bold'
        }
        let guide;
        switch(this.props.sport) {
            case 'hockey':
                guide = <HockeyGuide />;
                break;
            case 'basketball':
                guide = <BasketballGuide />;
                break;
            case 'baseball':
                guide = <BaseballGuide />;
                break;
            case 'football':
                guide = <FootballGuide />;
                break;
        }
        let gameClock = this.props.game.clock
        // Sets the time displayed depend on if the game is currently going
        let gameTime = gameClock === '0:00'
            ? `Game starts today at ${moment.tz(this.props.game.started_at, 'America/New_York').format('h:mmA')} EST`
            : `Current game time: ${gameClock}`
        return (
            <div>
                <div className="row">
                <img src={`./logos/${this.props.awayTeam.slug}.jpg`} alt={`${this.props.awayTeam.nickname}'s logo'`} className="logo"/>
                <div className="spacer">VS</div>
                <img src={`./logos/${this.props.homeTeam.slug}.jpg`} alt={`${this.props.homeTeam.nickname}'s logo'`} className="logo"/>
                </div>

                <div className="card" style={awayTeamStyles}>{this.props.awayTeam.location} {this.props.awayTeam.nickname}
                    <br/> {this.props.game.away_team_score}</div>
                <div className="card" style={homeTeamStyles}>{this.props.homeTeam.location} {this.props.homeTeam.nickname}
                    <br/> {this.props.game.home_team_score}</div>
                <div className="game-time">{gameTime}</div>
                <div className="guide">
                </div>
                {guide}
                <Link to='games'>
                    <div className="back">Back to Games</div>
                </Link>
            </div>
        );
    }
}

export default Match;
