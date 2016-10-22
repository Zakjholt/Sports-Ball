import React, {Component} from 'react';

class BaseballGuide extends Component {


    render() {
        return (
            <div>
            <h2>Guide to Baseball</h2>
                    <p>The game is divided into 9 innings, each team has 1 half of the inning played at offense. The defense's goal is to get 3 <em>outs</em> in order to end the opposing team's time at bat. The offense's goal is to score runs.</p>
                    <section>
                        <h3>Basics</h3>
                        <ul>
                          <li>
                            <strong>Strike: </strong>If a pitch is thrown in what the umpire determines is a hittable area, or the batter swings and misses, a strike is tallied. Three strikes results in an out.
                          </li>
                          <li>
                            <strong>Ball: </strong>If a pitch is thrown in an area that the umpire deems unhittable, a ball is tallied. 4 balls results in the batter taking a walk to first base.
                          </li>
                          <li>
                            <strong>Out: </strong>If a ball is hit and caught in mid air, the batter is out. If the defense gets the ball to a base before a runner, the runner is out. If a batter gets 3 strikes, he is out.
                          </li>
                          <li>
                            <strong>Foul: </strong>If a batter hits a ball outside of the baselines, it is considered a dead ball and is tallied as a strike. Batters cannot get their third strike from a foul ball.
                          </li>
                          <li>
                            <strong>Home Runs: </strong>If a ball is hit out of the back fence, it is an automatic score of 1 run for the batter, along with 1 run for any runners currently on bases.
                          </li>
                        </ul>
                        <img src="./images/mlbDiamond.jpg" alt="A diagram of a baseball diamond"/>
                    </section>
            </div>
        );
    }
}

export default BaseballGuide;
