import { createElement, Component } from 'react'

class App extends Component {

  render(){
    const time = this.props.time
    const h1 = createElement('h1', null, `これは一つ目のアプリです。今日は ${time} です`);
    return h1;
  }
}

export default App;