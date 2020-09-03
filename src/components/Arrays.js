import React from "react";

class Arrays extends React.Component {
  componentDidMount() {
    const {numbers=[]} = this.props;
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);
  }

  render() {
    const {numbers=[]} = this.props;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return(
      <div>
        {listItems}
      </div>
    )
  }
}

export default Arrays;