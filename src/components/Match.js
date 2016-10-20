import React, {Component} from 'react';
import {Link} from 'react-router';

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
        return (
            <div>
            <h1>Match</h1>
            <img src={`./logos/${this.props.awayTeam.slug}.jpg`} alt={`${this.props.awayTeam.nickname}'s logo'`} className="logo"/>
            <div className="spacer">VS</div>
            <img src={`./logos/${this.props.homeTeam.slug}.jpg`} alt={`${this.props.homeTeam.nickname}'s logo'`} className="logo"/>
            <div className="card" style={awayTeamStyles}>{this.props.awayTeam.location} {this.props.awayTeam.nickname} <br/> {this.props.game.away_team_score}</div>
            <div className="card" style={homeTeamStyles}>{this.props.homeTeam.location} {this.props.homeTeam.nickname} <br/> {this.props.game.home_team_score}</div>
            <Link to='games'><div className="back">Back to Games</div></Link>
            </div>
        );
    }
}

export default Match;
