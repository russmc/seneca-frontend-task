import React, {useState} from "react";
import Options from '../options';
import Toggle from './Toggle';

interface TogglesProps {
    optionsArray: Array<Options>;
}

export default function Toggles({ optionsArray }: TogglesProps) {
    const [lockedArray, setLockedArray] = useState<Array<boolean>>(Array(optionsArray.length).fill(false));

    function lockToggle(toggleIndex: number) {
        setLockedArray(prevLockedArray => [...prevLockedArray.slice(0, toggleIndex), true, ...prevLockedArray.slice(toggleIndex + 1)]);
    }
    
    return (
        <div className="App">
            {optionsArray?.map((optionsRow, index) => 
                <Toggle
                    key={index}
                    toggleIndex={index}
                    options={optionsRow}
                    lockToggle={lockToggle}
                />
            )}
        </div>
    );
}