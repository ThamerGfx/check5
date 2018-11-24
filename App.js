import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import y from './pics/yahya.PNG';
import a from './pics/amine.PNG';
import ar from './pics/arsslen.PNG';
import s from './pics/sameh.PNG';
import Grp from './grp';


const yahya={pic:y, fname:"Yahya", sname:"Bouhlel", gender:"male",job1:"FOUNDER", job2:"CEO"};
const amine={pic:a, fname:"Amine", sname:"Bouhlel", gender:"male", job1:"FOUNDER", job2:"COO"};
const arsslen={pic:ar, fname:"Arsslen", sname:"Idadi", gender:"male", job1:"SOFTWARE ENGINEER", job2:"PART TIME PRG. MANAGER"};
const sameh={pic:s, fname:"Sameh",  sname:"Ghanmi", gender:"male", job1:"FULL TIME PROGRAM", job2:"MANAGER"};
const group =[yahya, amine, arsslen, sameh];

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render() {
    const titre = {
      textAlign: 'center',
      color: 'dimgray',
      paddingBottom: '1%',
      paddingTop: '2%',
      fontSize: '300%'
    }
    const App = {
      backgroundColor:'whitesmoke'  
    }
    const équipe = {
      display: 'flex',
      justifyContent: 'space-around' 
    }
    return (
      <div style={App}>

          <h1 style = {titre}>Notre équipe</h1>
        
        <div style={équipe}> 
          {group.map((el,i)=>{
            return <Grp pic={el.pic} fname={el.fname} sname={el.sname} job1={el.job1} job2={el.job2}/>})}
        </div>
        
      </div>
    );
  }
}

export default App;
