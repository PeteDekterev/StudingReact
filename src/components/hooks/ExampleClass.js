import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  componentDidMount() {
    document.title = `Вы нажали ${this.state.count} раз`;
  }
  componentDidUpdate() {
    document.title = `Вы нажали ${this.state.count} раз`;
  }

  onClickBtn() {
    const {count} = this.state;
    const nextCount = count + 1;
    this.setState({count: nextCount});
  }

  render() {
    return (
      <div>
        <p>Вы кликнули {this.state.count} раз(а)</p>
        <button onClick={this.onClickBtn}>
          Нажми на меня
        </button>
      </div>
    );
  }
}

export default Example;