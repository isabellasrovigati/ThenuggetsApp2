import { SearchBar } from 'react-native-elements';
import React, {Component} from 'react';

export default class App extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Procure por um funcionário..."
        placeholderTextColor='white'
        selectionColor='darkorange'
        underlineColorAndroid='darkorange'
        platform='default'
      round
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}