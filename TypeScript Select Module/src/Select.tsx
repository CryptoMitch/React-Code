// This code is inspired by the Tutorial by Web Dev Simplified - https://www.youtube.com/watch?v=bAJlYgeovlg
import { useState, useEffect } from "react"
import styles from "./select.module.css"


// A type to support the value option
type SelectOption = {
    label: string
    value: number;
}

// Object type representing properties used to pass data and functions into React component
type SelectProps ={
 options: SelectOption[] // Options is an array of SelectOptions
 value?: SelectOption // Value is a single SelectOption. The question mark reprents the value as an optional field.
 onChange: (value: SelectOption | undefined) => void // onChange is a function that passes in a value. It can either be an option or undefined.Void function returns nothing
}

export function Select({ value, onChange, options }: SelectProps) {
    // State variable to control the dropdown open/close state
    const [isOpen, setIsOpen] = useState(false)
    // State variable for highlighted index
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    function clearOptions() {
        // Clear the dropdown contents
        onChange(undefined)
    }

    function selectOption(option: SelectOption) {
        onChange(option)
    }

    function isOptionSelected(option: SelectOption) { 
        return option === value
    }

    // everytime we open the dropdown, reset the highlighted index to 0
    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

        // Wrapper for the entire component using styles from select.module.css
    return (
        <div 
        // when item loses focus
        onBlur={() => setIsOpen(false)}
        //toggle the drop down on click
            onClick={() => setIsOpen(prev => !prev)}
            // add keyboard focus for accessibility
            tabIndex={0} 
            // use styles
            className={styles.container}
        >
          <span className={styles.value}>{value?.label}</span>
          <button 
            onClick ={e => {
              // Prevent events bubbling up the DOM
              e.stopPropagation()
              clearOptions()
            }} 
            className={styles["clear-btn"]}
            >
                &times;
            </button>
          <div className={styles.divider}></div>
          <div className={styles.caret}></div>
          <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
            {options.map((option, index) => (
                <li 
                    onClick={e => {
                        e.stopPropagation()
                        selectOption(option)
                        setIsOpen(false)
                    }}
                    onMouseEnter={()=> setHighlightedIndex(index)} 
                    key={option.label} 
                    className={`${styles.option} ${
                        isOptionSelected(option) ? styles.selected : "" 
                    } ${index === highlightedIndex ? styles.highlighted : ""}`}
                >
                    {option.label}
                </li>
            ))}
          </ul>
        </div>
    )
}