import React from 'react'



const titlestyle = {
  fontSize: 20,
  color: '#bada55'
};

export default class Test extends React.Component {
  state = {
    list: ['Eggs','Milk','Bread','Butter'],
    counter: 1,
    text: '',
    pokemonName: 'pikachu'
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/2/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          pokemonName: json.name,
          pokemonImageUrl: json.sprites.front_default,
        });
      });
  };

  handleButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1 
    })
  };

  handleinputChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleAddshopping = () => {
    const currentList = this.state.list
    const newList = currentList.concat(this.state.text)
    this.setState({
      list: newList,
      text: '',
      //counter: newList.lenght,
    })
  }

  handleAddEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleAddshopping();
    }
  }

  handleRemove = (key) => {
    const currentList = this.state.list;
    //list.splice(key, 1)
    const newList = currentList.filter ((item, index) => index !== key )
    this.setState({
      list: newList,
      counter: newList.length
    });
  };

  render (){
    return (
      <div>
      Count: {this.state.list.length}<br/>
      <h3 style={titlestyle}>
       {this.props.title}
       </h3>
       <ul>
        {this.state.list.map( (item, key) => (
         <li key={item}>{item}
         <button onClick = {() => this.handleRemove(key)}>x</button>
         </li>
         
       ))}
      </ul>
      <input 
       value={this.state.text}
       onChange={this.handleinputChange}
       onKeyPress={this.handleAddEnter} 
       />
      <button onClick={this.handleAddshopping}>
        ADD
        </button>
        <h1>Pokemon: {this.state.pokemonName}</h1>
        <img src={this.state.pokemonImageUrl} />
      </div>
    )
  }
}