import React, { useState, useEffect } from "react";

const TipChoice = (props) => {
  const [tipSelected, setTipSelected] = useState();
  const [customTip, setCustomTip] = useState("");

  const handleTipSelection = (event) => {
    if (event.target.name === 'tip-custom') {
        setTipSelected('');
        setCustomTip(event.target.value);
    } else {
        setCustomTip('');
        setTipSelected(event.target.value);
    }

    handleChange(event);
  }

  const handleChange = (event) => {
    props.onChange(event);
  }

  useEffect(() => {
    setTipSelected('');
    setCustomTip('');
  }, [props.cleanTipPercentage])

  return (
    <div className={`tip-section ${props.className}`}>
      <span className="section-title">Select Tip %</span>
      <div className="tip-container">
        {props.tips.map((tip, index) =>
          tip === "custom" ? (
            <input
              type="text"
              className="input-text tip-input"
              placeholder="Custom"
              onChange={handleTipSelection}
              key={index}
              name="tip-custom"
              pattern="\d*"
              value={customTip}
            />
          ) : (
            <button
              className={`tip-button ${
                Number.parseInt(tipSelected) === tip ? "selected" : ""
              }`}
              onClick={handleTipSelection}
              value={tip}
              key={index}
            >
              {tip}%
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default TipChoice;