import React , {Component} from 'react'
import axios from 'axios'
import './App.css';

class App extends Component{
  state = {advice : ''}

  componentDidMount(){
    this.fetchAdvice()
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const {advice} = response.data.slip
      // console.log(advice)
      this.setState({advice})
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  render(){
    const {advice} = this.state
    return(
      <>
        <div className="app">
          <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
              <span>Give Me Advice !</span>
            </button>
            <footer style={{color:'black', marginTop:'15px'}}>Made with ❤ by Rohan</footer>
          </div>
        </div>
        
      </>
    )
  }
}

export default App
