// 'use strict';

import React from "react";
import bigNumAdd from 'bignum-add-rx'
import  ReactDOM  from "react-dom";
import './search.less'

class Searh extends React.Component {
  constructor(){
    super();
    this.state = {
      Text: null
    }
  }

  handleClick(){
    import('./text.js').then(Text => {
      this.setState({
        Text: Text.default
      })
    })
  }
  render(){
    const { Text } = this.state
    const bigNum = bigNumAdd('999', '1')
    return (<div className="search-text">Search Text
    {Text ? <Text /> : null}
    { bigNum }
    <button onClick={ () => { this.handleClick() } }>click</button>
    </div>);
  }
}

ReactDOM.render(
  <Searh />,
  document.getElementById('root')
)