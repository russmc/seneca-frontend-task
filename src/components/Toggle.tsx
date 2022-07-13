import React, {useEffect, useState} from "react";
import './Toggle.css';
import Options from '../options';

interface OptionComponentProps {
    key: number;
    toggleIndex: number;
    optionIndex: number;
    isSelected: boolean;
    selectHandler: React.ChangeEventHandler<HTMLInputElement>;
    optionText: string;
}

function OptionComponent({ toggleIndex, optionIndex, isSelected, selectHandler, optionText }: OptionComponentProps) {
    return (
        <label htmlFor={`q${toggleIndex}-checkbox-option${optionIndex}`} className="option">
            <input id={`q${toggleIndex}-checkbox-option${optionIndex}`} type="checkbox" checked={isSelected} onChange={selectHandler} />
            <div className="option-text">{optionText}</div>
        </label>
    );
}

interface ToggleProps {
    key: number;
    toggleIndex: number;
    options: Options;
}

export default function Toggle({ toggleIndex, options }: ToggleProps) {
    const [selectedArray, setSelectedArray] = useState<Array<boolean>>(Array(options?.length).fill(false));
    const [shuffledOptions, setShuffledOptions] = useState<Array<string> | null>(null);
    const [sliderPosition, setSliderPosition] = useState<number>(0);

    useEffect(() => {
        setShuffledOptions(options.shuffle());
    }, [options]);

    function selectHandler(optionIndex: number) {
        const newSelectedArray = Array(selectedArray?.length).fill(false);
        newSelectedArray[optionIndex] = true;
        setSelectedArray(newSelectedArray);
        translateSlider(optionIndex);
    }

    function getSliderWidth() {
        const sliderWidth = window.getComputedStyle(document.querySelector<Element>('.slider')!).width.slice(0, -2);
        return Number(sliderWidth);
    }

    function translateSlider(desiredSliderPosition: number) {
        const slider = document.getElementById(`slider-${toggleIndex}`)!;
        if(slider) {
            slider.style.left = `${getSliderWidth() * desiredSliderPosition}px`;
        }
        setSliderPosition(desiredSliderPosition);
    }

    return (  
        <div className="toggle">
            <div id={`slider-${toggleIndex}`} className='slider rounded'></div>
            <div className="slider-row rounded">
                {shuffledOptions?.map((option, index) => 
                    <OptionComponent 
                        key={index}
                        toggleIndex={toggleIndex}
                        optionIndex={index} 
                        isSelected={selectedArray[index]}
                        selectHandler={() => {
                            selectHandler(index);
                        }}
                        optionText={option}    
                    />
                )}
            </div>
        </div>
    );
}
