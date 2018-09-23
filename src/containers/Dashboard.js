import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Context = React.createContext({ name: 'sada' });

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('dfsxf', this.refs);
  }

  handleClick = () => {
    console.log('B');
  };

  render() {
    return (
      <div className="main-content">
        <div className="row">
          <h2>Dashboard</h2>
          <Context.Provider>
            <Child1 />
            <input type="text" ref="txt" defaultValue="adsfa" />
            <Child2 _handleB={this.handleClick} />
          </Context.Provider>
        </div>
      </div>
    );
  }
}
