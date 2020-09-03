import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textValue: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleTextChange(event) {
    this.setState({textValue: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  handleTextSubmit(event) {
    alert('Отправленное сочинение: ' + this.state.textValue);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
        <form onSubmit={this.handleTextSubmit}>
          <label>
            Сочинение:
            <input type="text" value={this.state.textValue} onChange={this.handleTextChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </>
    );
  }
}

export default NameForm;