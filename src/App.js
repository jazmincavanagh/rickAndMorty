import Tarjetas from './components/Tarjetas'
import Header from './components/Header'
import Footer from './components/Footer'
import { Component } from 'react'

export default class App extends Component {
  render(){
  return (
    <div className="App">
    

    < Header />
    

    < Tarjetas />

   
    < Footer />
   
    </div>
  );
  }
}

