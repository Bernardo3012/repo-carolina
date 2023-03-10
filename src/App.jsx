import React, { Component } from "react";
import {
  Container,
  ContainerInput,
  List,
  ContainerList,
  Title

} from "./styles"

// carolina

export default class App extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  addTarefa = () => {
    if (this.state.tarefa === "") {
      return;
    }
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random()
      }),
      tarefa: ""
    });
  };

  delete = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  
  render() {
    return (
      <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <Title>
          <h1>Seleção</h1>
          <img 
            src="https://www.jornalcruzeiro.com.br/_midias/jpg/2022/10/06/cbfmarca-1005312.jpg"
            alt="Escudo Seleção"
          />
        </Title>
        <ContainerInput>
          <input type="text" value={this.state.tarefa} onChange={this.handleChange} />
          <button onClick={this.addTarefa}>Adicionar</button>
        </ContainerInput>
        <ContainerList>
          {this.state.lista.map((item) => (
            <>
              <List>
                <strong>{item.tarefa}</strong>
                <button
                  onClick={() => {
                    this.delete(item.id);
                  }}
                >
                  x
                </button>

              </List>
            </>
          ))}
        </ContainerList>
      </form>
      </Container>
    );
  }
}
