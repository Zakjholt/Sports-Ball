import React, {Component} from 'react';

class HockeyGuide extends Component {

    render() {
        return (
            <div>
                <h2>Guide to Hockey</h2>
                <section>
                <p>There are three periods of 20 minutes of play. If the score is tied at the end of the three periods, 5 minutes of overtime are played. If there is no score at the end of overtime, then a shoot out settles the game. During Playoffs, there are no shoot outs.</p>
                    <h3>Somewhat obscure terms/rules:</h3>
                    <ul>
                        <li>
                            <strong>Icing: </strong>
                            When a player shoots the puck across both the centre red line and the opposing team's goal line, and the puck remains untouched.
                        </li>
                        <li>
                            <strong>OffSide: </strong>
                            When a player on the attacking team enters the offensive zone before the puck, unless the puck is sent or carried there by a defending player. When an offside violation occurs, a linesman will stop play. A faceoff is then held at a neutral ice spot closest to the infraction to restart play.
                        </li>
                        <li>
                            <strong>Penalty Box: </strong>
                            Players who commit penalties spend time in the box. The length of time is dependent on the severity of the infraction. Their team must play one man down for the duration of their penalty.
                        </li>
                        <li>
                            <strong>Power Play: </strong>The interval of time during which one team is a man down due to a penalty.
                        </li>
                    </ul>
                    <img src="./images/nhlRink.jpg" alt="A diagram of an NHL rink"/>
                </section>
            </div>
        );
    }
}

export default HockeyGuide;
