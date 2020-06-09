import React, { Component } from 'react';
import { pattern1 } from './data.js';

export default class Matrix extends Component {

  constructor(props) {
    super()
  }
  static defaultProps = {
    values: pattern1
  }
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}