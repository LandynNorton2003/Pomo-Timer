import React from "react"

function BreakTimer({handleIncreaseBreakDuration, handleDecreaseBreakDuration, breakDuration, isStop}){
  
  return(
   <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {breakDuration >= 10 ? "" : "0"}{breakDuration}:00
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  onClick = {(event) => handleDecreaseBreakDuration(event)}
                  disabled={!isStop}
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  onClick = {(event)=>handleIncreaseBreakDuration(event)}
                  disabled={!isStop}
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}



export default BreakTimer