import React from "react";
import "./styles/global.css";
import Routes from "./routes";

interface Titleprops {
  title: String;
  color: any;

}
function Title(props: Titleprops) {
 var hstyle = {color: props.color}
return <h1 style = {hstyle}>{props.title}</h1>
}
function App() {
  return(
    <Routes/>
  )
}

export default App;
