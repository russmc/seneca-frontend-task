import React, {useEffect, useState} from "react";
import './Toggle.css';
import Options from '../options';

interface OptionComponentProps {
    index: number;
    isSelected: boolean;
    selectHandler: React.ChangeEventHandler<HTMLInputElement>;
    optionText: string;
}

function OptionComponent({ index, isSelected, selectHandler, optionText }: OptionComponentProps) {
    return (
        <label htmlFor={`checkbox-option-${index}`} className="option">
            <input id={`checkbox-option-${index}`} type="checkbox" checked={isSelected} onChange={selectHandler} />
            <div className="option-text">{optionText}</div>
        </label>
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
            <div className="slider rounded">
                {shuffledOptions?.map((option, index) => 
                    <OptionComponent 
                        index={index} 
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
