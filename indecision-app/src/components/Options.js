import React from "react";
import Option from "./Option.js"

const Options = (props) => (
    <div>
        <button
            className="button button--link"
            onClick={props.handleDeleteOptions}
            disabled={!props.hasOptions}
        >
            Remove All
            </button>
        {props.options.length === 0 && <p>Please add an Option to get started!</p>}
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
)

export default Options