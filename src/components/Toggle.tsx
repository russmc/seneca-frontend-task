import React, {useState} from "react";
import './Toggle.css'

interface SwitchProps {
    isToggled: boolean;
    onToggle: React.ChangeEventHandler<HTMLInputElement>;
}

function Switch({ isToggled, onToggle }: SwitchProps) {
    return (
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="slider rounded" />
        </label>
    );
}

export default function ToggleSwitch() {
    const [isToggled, setToggle] = useState(false);

    return (
        <Switch isToggled={isToggled} onToggle={() => {setToggle(!isToggled)}} />
    );
}
