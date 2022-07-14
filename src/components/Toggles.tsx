import React, {useState} from "react";
import Options from '../options';
import Toggle from './Toggle';

interface TogglesProps {
    optionsArray: Array<Options>;
}

export default function Toggles({ optionsArray }: TogglesProps) {
    const [lockedArray, setLockedArray] = useState<Array<boolean>>(Array(optionsArray.length).fill(false));

    const [ mainHues, mainSats, mainLights ] = generateColorArray(optionsArray.length, 70, 60);
    const [ gradHues, gradSats, gradLights ] = generateColorArray(optionsArray.length, 50, 40);

    function lockToggle(toggleIndex: number) {
        setLockedArray(prevLockedArray => [...prevLockedArray.slice(0, toggleIndex), true, ...prevLockedArray.slice(toggleIndex + 1)]);
        const nCorrect: number = lockedArray.filter(lock => lock === true).length;

        const stylesheet = document.styleSheets[0];
        if (nCorrect > 0) {
            stylesheet.deleteRule(0);
        }
        stylesheet.insertRule(`
            body {
                background-image: linear-gradient(
                    hsl(${mainHues[nCorrect]}, ${mainSats[nCorrect]}%, ${mainLights[nCorrect]}%), 
                    hsl(${gradHues[nCorrect]}, ${gradSats[nCorrect]}%, ${gradLights[nCorrect]}%));
                    background-attachment: fixed;
            }`
        );
    }

    return (
        <div className="toggles">
            {optionsArray?.map((optionsRow, index) => 
                <Toggle
                    key={index}
                    toggleIndex={index}
                    options={optionsRow}
                    lockToggle={lockToggle}
                />
            )}
        </div>
    )
}

function generateColorArray(arraySize: number, saturation: number, lightness: number) {
    const hues = generateHues(10, 100, arraySize);
    const sats = Array(arraySize).fill(saturation);
    const lights = Array(arraySize).fill(lightness);
    return [hues, sats, lights];
}

function generateHues(start: number, end: number, n: number) {
    const step = Math.abs(start - end)/(n - 1);
    const hues = [start];
    for (let i=0; i < n - 1; i++) {
        hues.push(hues[i] + step);
    }
    return hues;
}
