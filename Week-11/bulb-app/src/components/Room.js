import React from "react";
import "../index.css";
import { connect } from "react-redux";
import { switchOffBulb, switchOnBulb, toggleSwitch } from "../action";
class Room extends React.Component {
    
    flipLight = () => {
        this.props.toggle();
    };
    
    render() {
      let isLightOn = this.props.isLightOn;
      const lightedness = isLightOn ? "lit" : "dark";
      return (
        <div className={`room ${lightedness}`}>
          the room is {lightedness}
          <br />
          <button onClick={this.flipLight}>flip</button>
        </div>
      );
    }
  }

  function mapStateToProp(state){
    return {
        isLightOn:state?.isLightOn,
    }
  } 
function mapDispatchToProp(dispatch){
    return {
        on:()=>dispatch(switchOnBulb()),
        off:()=>dispatch(switchOffBulb()),
        toggle:()=>dispatch(toggleSwitch())
    }
}
  export default connect(mapStateToProp,mapDispatchToProp)(Room);