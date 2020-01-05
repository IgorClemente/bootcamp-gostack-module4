import React, { Component } from "react";
import ItemList from "./ItemList";

class TechList extends Component {
  state = {
    newTech: "",
    techList: []
  };

  componentDidMount() {
    const techs = localStorage.getItem("techs");
    this.setState({ techList: JSON.parse(techs) });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techList !== this.state.techList) {
      localStorage.setItem("techs", JSON.stringify(this.state.techList));
    }
  }

  textInputSubmit = e => {
    e.preventDefault();

    this.setState({ techList: [...this.state.techList, this.state.newTech] });
    this.setState({ newTech: "" });
  };

  textInputHandler = e => {
    this.setState({ newTech: e.target.value });
  };

  handleDelete = tech => {
    this.setState({
      techList: this.state.techList.filter(t => t !== tech)
    });
  };

  render() {
    return (
      <form onSubmit={this.textInputSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techList.map(tech => (
            <ItemList
              key={tech}
              tech={tech}
              handleDelete={() => {
                this.handleDelete(tech);
              }}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.textInputHandler}
          value={this.state.newTech}
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default TechList;
