import React from 'react';

// A common pattern in React is for a component to return multiple elements.
// Fragments let you group a list of children without adding extra nodes to the DOM.

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Привет</td>
        <td>Мир</td>
      </React.Fragment>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}

export default Table;