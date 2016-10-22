import React, {Component} from 'react';

class FootballGuide extends Component {

    render() {
        return (
            <div>
                <h2>Guide to Football</h2>
                <p>An offense's goal is to reach the endzone to score a touchdown. A <em>set of downs</em> refers to 4 plays to progress the ball by at least 10 yards; if they fail to do so, they turnover the ball. If they succeed, they get another 4 downs.</p>
                <section>
                    <h3>Ways to score</h3>
                    <ul>
                        <li>
                            <strong>Touchdown:</strong> Achieved by progressing the ball into the endzone. Worth 6 points.
                        </li>
                        <li>
                            <strong>Extra Point:</strong> Can be attempted after a touchdown. The scoring team can elect to go for a field goal worth 1 point, or attempt at 2 point conversion by getting the ball into the endzone again from the 2 yard line.
                        </li>
                        <li>
                            <strong>Field Goal:</strong> Achieved by kicking the ball between the uprights of the endzone. Worth 3 points.
                        </li>
                        <li>
                            <strong>Safety:</strong> On rare occasions, the defense can tackle a ball-carrier in their own end-zone. This results in the defense scoring 2 points and the offense turning over the ball to the opposing team.
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default FootballGuide;
