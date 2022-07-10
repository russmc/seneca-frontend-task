import React, {useState} from "react";
import './Toggle.css'

interface SwitchProps {
    isToggled: boolean;
    onToggle: React.ChangeEventHandler<HTMLInputElement>;
    options?: Array<string> | null;
}

function Switch({ isToggled, onToggle, options }: SwitchProps) {
    return (
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="slider rounded click-area" />
            <div className="options-container click-area">
                { options && <div className="option click-area">{options[0]}</div> }
                { options && <div className="option click-area">{options[1]}</div> }
            </div>
        </label>
    );
}

export default function ToggleSwitch() {
    const [isToggled, setToggle] = useState(false);

    const parsedOptions = ["option 1", "option 2 much longer text blah blah"]

    return (
        <Switch 
            isToggled={isToggled} 
            onToggle={() => {setToggle(!isToggled)}}
            options={parsedOptions}
        />
    );
}
