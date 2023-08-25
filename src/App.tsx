import React from 'react';
import Button from './components/Button';
import Seclet from './components/Seclet';
import Table from './components/Table';
import Input from './components/Input';
import Card from './components/Card';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';


function App() {
let  option=["karachi","lahore" , "islamabad"];
let option1 = [1,2,3,4,5,6,7]


let TableData = [
  {
    userId:1,
    class:3,
    name:"ali",
    age:18,
  },
  {
    userId:2,
    class:4,
    name:"ahmed",
    age:15,
  },{
    userId:3,
    class:6,
    name:"hammad",
    age:23,
  },{
    userId:4,
    class:8,
    name:"aman",
    age:17,
  },
  {
    userId:5,
    class:10,
    name:"ammar",
    age:15,
  },
]





  return (
    <div>
     <h1>COMPONENTS ASSIGNMENT</h1>
     <h2>BUTTON COMPONENTS</h2>

<Button 
 click={()=>{
  alert("this is loading button");
 }}
 label='loading'
  key={1}
/>
 <Button 
 click={()=>{
  alert("this is  click here button");
 }}
 label='click here'
  key={2}
/> 
<Button 
 click={()=>{
  alert("this is download button");
 }}
 label='download'
  key={3}
/>

<h1>SELECT COMPONENTS</h1>
<Seclet
label='CITY'
option={option}      
/>
<Seclet
label='your lucky number'
option={option1}   
/>



<h1>TABLE COMPONENTS</h1>

<Table 
cols={[
  {
    heading:"USER ID" ,
    key:"userId",
  },
  {
    heading:"CLASS" ,
    key:"class",
  },
  {
    heading:"NAME" ,
    key:"name",
  },
  {
    heading:"AGE" ,
    key:"age",
  },
  
]}

key={4}
data={TableData}
/>

<h1>INPUT COMPONENTS</h1>

<Input 

hold='enter your name'
/>


<h1>CARD COMPONENT</h1>

<Card
dat={TableData}

/>



    </div>
  );
}

export default App;
