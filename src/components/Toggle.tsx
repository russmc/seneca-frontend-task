import React, {useEffect, useState} from "react";
import './Toggle.css';
import Options from '../options';

interface OptionComponentProps {
    key: number;
    isSelected: boolean;
    selectHandler: React.ChangeEventHandler<HTMLInputElement>;
    optionText: string;
}

function OptionComponent({ key, isSelected, selectHandler, optionText }: OptionComponentProps) {
    return (
        <div className="option">
            <label htmlFor={`checkbox-option-${key}`} />
            <input id={`checkbox-option-${key}`} type="checkbox" checked={isSelected} onChange={selectHandler} />
            <div className="option-text">{optionText}</div>
        </div>
    )
}

interface ToggleProps {
    options: Options;
}

export default function Toggle({ options }: ToggleProps) {
    const [selectedArray, setSelectedArray] = useState<Array<boolean>>(Array(options?.length).fill(false));
    const [shuffledOptions, setShuffledOptions] = useState<Array<string> | null>(null);

    useEffect(() => {
        setShuffledOptions(options.shuffle())
    }, [options])

    return (  
        <div className="toggle">
            <div className="slider">
                {shuffledOptions?.map((option, index) => 
                    <OptionComponent 
                        key={index} 
                        isSelected={selectedArray[index]}
                        selectHandler={() => {
                            const newSelectedArray = Array(selectedArray?.length).fill(false)
                            newSelectedArray[index] = true;
                            setSelectedArray(newSelectedArray);
                        }}
                        optionText={option}    
                    />
                )}
            </div>
        </div>
    );
}
