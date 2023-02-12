import React from "react";
import { connect } from "react-redux";
import { addStep, resetStep } from "./action";
class StepCounter extends React.Component
{
    addStep() { 
        
    }
    render() {
        return <div>
                    <h4>You've walked {this.props.steps} steps today!</h4>
                    <div className="btn-group">
                        <button onClick={this.props.add} className="btn add">Add a step</button>
                        <button onClick={this.props.reset} className="btn reset">Reset Steps</button>
                    </div>
            </div>
    }
}

function mapStateToProp(state)
{
    return {
        steps:state.stepCount,
    }
}
function mapDispatchToProp(dispatch)
{
    return {
        add :  ()=>dispatch(addStep()),
        reset : ()=>dispatch(resetStep()),
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(StepCounter);