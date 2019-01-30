import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.url}
          </td>
          <td>
            {this.props.obj.price}
          </td>
        </tr>
    );
  }
}

export default TableRow;