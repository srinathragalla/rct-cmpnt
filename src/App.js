// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{Component} from 'react';
class App extends Component{
  render(){
    var myStyle ={
        fontSize:50,
        fontFamily: 'Charm',
        color: 'green',
    }
    return (
      <div>
        <h1 style ={myStyle}>hlo world</h1>
      </div>
    )
  }
}
export default App;
