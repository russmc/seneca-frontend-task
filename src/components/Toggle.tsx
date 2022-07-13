import React, {useEffect, useState} from "react";
import './Toggle.css';
import Options from '../options';

interface OptionComponentProps {
    key: number;
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
    );
}

interface ToggleProps {
    options: Options;
}

export default function Toggle({ options }: ToggleProps) {
    const [selectedArray, setSelectedArray] = useState<Array<boolean>>(Array(options?.length).fill(false));
    const [shuffledOptions, setShuffledOptions] = useState<Array<string> | null>(null);
    const [sliderPosition, setSliderPosition] = useState<number>(0);

    useEffect(() => {
        setShuffledOptions(options.shuffle())
    }, [options]);

    function selectHandler(index: number) {
        const newSelectedArray = Array(selectedArray?.length).fill(false);
        newSelectedArray[index] = true;
        setSelectedArray(newSelectedArray);
        translateSlider(index);
    }

    function getSliderWidth() {
        const sliderWidth = window.getComputedStyle(document.querySelector<Element>('.slider')!).width.slice(0, -2);
        return Number(sliderWidth);
    }

    function translateSlider(desiredSliderPosition: number) {
        const slider = document.querySelector<HTMLElement>('.slider')!;
        if(slider) {
            slider.style.left = `${getSliderWidth() * desiredSliderPosition}px`;
        }
        setSliderPosition(desiredSliderPosition);
    }

    return (  
        <div className="toggle">
            <div className="slider rounded"></div>
            <div className="slider-row rounded">
                {shuffledOptions?.map((option, index) => 
                    <OptionComponent 
                        key={index}
                        index={index} 
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
