import logo from './logo.svg';
import './App.css';
import Firstfile from './Components/basics/FirstFunction';
import Firstclass from './Components/basics/Firstclass';

import Myform from './Components/basics/Myform';
import RandomNumber from './Components/basics/Game/RandomNumber';
import StopWatch from './Components/basics/Timer/StopWatch';
import Indexrouter from './Components/basics/Router/Indexrouter';
import Apilist from './Components/basics/Apicalls/Apilist';
import Signin  from './Components/basics/Logintest/Signin';
function App() {
  const company = 'ford';
  const all = `im a ${company} company`;
  const info = {item1: "apple" , item2:"mango"};
  const isopen = true;
  //const info = ""
  const checkinfo = (info != ""  && info != undefined);
  let array = [{id:1,name:"apple",price:"200"},
    {id:1,name:"mango",price:"200"},
    {id:1,name:"orange",price:"400"},
    {id:1,name:"pine apple",price:"200"},
    {id:1,name:"red apple",price:"200"}
  ]
  return (
    <div className="App">
 {/* {checkinfo?
   <Firstfile all={all} color='red' info={info} /> : <p>There is no data</p>}
   <Firstclass  info={info}  /> */}
   {/* {isopen ? <h2>Doors opened</h2> : <h5>Doors closed</h5>}
   <ul>
   {array.map((item,index)=> 
   <li key={index}>{item.name}</li>
   )}
   </ul>
   <Myform /> */}
   {/* <RandomNumber /> */}
   {/* <StopWatch /> */}
   {/* <Indexrouter /> */}
   <Signin />
   {/* <Apilist /> */}
    </div>
  );
}

export default App;




// {checkinfo?
//   <Firstfile all={all} color='red' info={info} /> : <p>There is no data</p>}
//   {/* <Firstclass  info={info}  /> */}
//   {isopen ? <h2>Doors opened</h2> : <h5>Doors closed</h5>}
//   <ul>
//   {array.map((item,index)=> 
//   <li key={index}>{item.name}</li>
//   )}
//   </ul>