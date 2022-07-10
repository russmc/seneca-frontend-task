import React, {useEffect, useState} from "react";
import './Toggle.css';
import Options from '../options';

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
                { options?.map((option) => <div className="option click-area">{option}</div>) }
            </div>
        </label>
    );
}

interface ToggleSwitchProps {
    options: Options;
}

export default function ToggleSwitch({ options }: ToggleSwitchProps) {
    const [isToggled, setToggle] = useState<boolean>(false);
    const [parsedOptions, setParsedOptions] = useState<Array<string> | null>(null);

    useEffect(() => {
        setParsedOptions(options.shuffle())
    }, [options])

    return (
        <Switch 
            isToggled={isToggled} 
            onToggle={() => {setToggle(!isToggled)}}
            options={parsedOptions}
        />
    );
}
