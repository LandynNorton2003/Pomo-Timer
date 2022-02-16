import React from "react"

function FocusTimer({focusDuration, handleIncreaseFocusDuration, handleDecreaseFocusDuration,
                    isStop}){
  return (
  <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {focusDuration >= 10 ? "" : "0"}{focusDuration}:00
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                onClick = {(event) => handleDecreaseFocusDuration(event)}
                disabled={!isStop}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration and disable during a focus or break session */}
              <button
                onClick={(event) => handleIncreaseFocusDuration(event)}
                disabled={!isStop}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
  )
}

export default FocusTimer