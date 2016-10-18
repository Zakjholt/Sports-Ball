import React, { Component } from 'react';
import { Link } from 'react-router';

class Sports extends Component {

  render() {
    return (
      <div>
        <button className="card" onClick={() => this.chooseSport('baseball')}>Baseball</button>
        <button className="card" onClick={() => this.chooseSport('football')}>Football</button>
        <button className="card" onClick={() => this.chooseSport('basketball')}>Basketball</button>
        <button className="card" onClick={() => this.chooseSport('hockey')}>Hockey</button>
        <Link to="games"><button>Find games</button></Link>
      </div>
    );
  }
  chooseSport(a)  {
   this.props.route.store.dispatch({type: 'CHOOSE_SPORT', sport: a})
 }
}

export default Sports;
