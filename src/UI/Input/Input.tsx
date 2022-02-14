import React from 'react';
import InputMask from "react-input-mask";
import './input.module.scss';

interface IInput {
    placeholder: string;
    type?: string;
    className?: string;
    pattern?: string;
}

const Input = ({ placeholder, type, className, ...rest }: IInput) => {
    function checkIpValue(value:string) {
        const subips = value.split('.')
        if (subips.length > 4) {
            return false
        }
        const invalidSubips = subips.filter((str:string) => {
            let ip = Number(parseInt(str))
            return ip < 0 || ip > 255
        })
        if (invalidSubips.length !== 0) {
            return false
        }
        let emptyIpCount = 0
        subips.forEach((ip:any) => {
            if (ip === "") {
                emptyIpCount++
            }
        })
        if (emptyIpCount > 1) {
            return false
        }
        return true
    }


    return (
        <>
             <InputMask
                // @ts-ignore
                formatChars={{
                    '9': '[0-9\.]',
                }}
                mask="999999999999999"
                maskChar={null}
                alwaysShowMask={false}
                beforeMaskedValueChange={(newState:any, oldState:any, userInput:any) => {
                    let value = newState.value;
                    const oldValue = oldState.value;
                    let selection = newState.selection;
                    let cursorPosition = selection ? selection.start : null;
                    const result = checkIpValue(value)
                    if (!result) {
                        value = value.trim()
                        // try to add . before the last char to see if it is valid ip address
                        const newValue = value.substring(0, value.length - 1) + "." + value.substring(value.length - 1);
                        if (checkIpValue(newValue)) {
                            cursorPosition++
                            selection = { start: cursorPosition, end: cursorPosition };
                            value = newValue
                        } else {
                            value = oldValue
                        }
                    }

                    return {
                        value,
                        selection
                    };
                }}
                className='input'
                placeholder='xxx.xxx.xxx.xxx'
            />
        </>
    );
};

export default Input;
