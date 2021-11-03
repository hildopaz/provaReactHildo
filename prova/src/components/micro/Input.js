import React from 'react';

function Input(props) {

    return (
        <div className={"form-group " + props.className}>
            <label for={props.label} class="input__label">{props.text}</label>
            <input type={props.type} class="form-control input-style" id={props.id} placeholder={props.placeholder} />
        </div>
    );

}

export default Input;

