import React from "react";

function ListItem(props) {
  return <li>{props.value}</li>;
}

class Arrays extends React.Component {
  componentDidMount() {
    const {numbers=[]} = this.props;
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);
  }

  render() {
    const {numbers=[]} = this.props;
    return(
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
            value={number} />
        )}
      </ul>
    )
  }
}

export default Arrays;