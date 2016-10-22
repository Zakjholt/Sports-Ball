import React, {Component} from 'react';


class Layout extends Component {
    render() {
        return (
            <div className="header">
                <h1>SportsBall</h1>
                    {this.props.children}

            </div>
        );
    }
}

export default Layout;
