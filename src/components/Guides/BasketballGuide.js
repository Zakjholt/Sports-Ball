import React, {Component} from 'react';

class BasketballGuide extends Component {


    render() {
        return (
            <div>
            <h2>Guide to Basketball</h2>
                          <p></p>
                          <section>
                              <h3>Basics</h3>
                                <p>There are 4 quarters lasting 12 minutes per game. Each team's goal is to score as many points as possible. Shots made from inside the three point arc are worth 2 points.</p>
                              <ul>
                                <li>
                                    <strong>Three Point Arc: </strong>The arc that makes a half circle and touches the free throw circle opposite the basket. Shots made from outside this arc are worth 3 points.
                                </li>
                                <li>
                                    <strong>Free throw lane: </strong>The 15' long rectangle that contains the basket. An offensive player may not stand inside the lane for more than three seconds unless a teammate is shooting the ball (so that they can contend for rebounds). After a shot is taken, the count starts over.
                                </li>
                                <li>
                                    <strong>Free throws/Foul shots: </strong>Some fouls result in the offended player receiving free throws. These shots are taken from the free throw line at the end of the lane (15 feet from the basket). The shots are “free” because a defender does not guard the shooter while they are shooting. The shooting player's feet may not cross the free throw line until the ball hits the rim.
                                </li>
                              </ul>
                              <img src="./images/nbaCourt.jpg" alt="A basketball court diagram"/>
                          </section>
            </div>
        );
    }
}

export default BasketballGuide;
