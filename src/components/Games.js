import React, {Component} from 'react';
import {Link} from 'react-router';

class Games extends Component {
    render() {
        return (
            <div>
                <h1>Games</h1>
                {this.props.gamesArray.map(function(game) {
                    return <div className='card' key={game.id}>{game.scoreline}</div>
                })}
            </div>
        );
    }
}

export default Games;
