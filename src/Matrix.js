import React, { Component } from 'react';
import Cell from './Cell.js'
import { defaultPattern } from './data';

export default class Matrix extends Component {
  
  constructor(props) {
    super()
  }

  static defaultProps = {
    values: defaultPattern()
  }

  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
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

// Matrix.defaultProps.values = Matrix.createDefaultProps()