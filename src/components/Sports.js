import React, { Component } from 'react';
import { Link } from 'react-router';

class Sports extends Component {

  render() {
    return (
      <div>
          <Link to="games"><button className="card" onClick={() => this.chooseSport('baseball')}>Baseball</button></Link>
          <Link to="games"><button className="card" onClick={() => this.chooseSport('football')}>Football</button></Link>
          <Link to="games"><button className="card" onClick={() => this.chooseSport('basketball')}>Basketball</button></Link>
          <Link to="games"><button className="card" onClick={() => this.chooseSport('hockey')}>Hockey</button></Link>
      </div>
    );
  }
  chooseSport(sport)  {
   this.props.route.store.dispatch({type: 'CHOOSE_SPORT', sport: sport})
 }
}

export default Sports;
