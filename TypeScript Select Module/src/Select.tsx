// This code is inspired by the Tutorial by Web Dev Simplified - https://www.youtube.com/watch?v=bAJlYgeovlg
import { useState, useEffect } from "react"
import styles from "./select.module.css"


// A type to support the value option
type SelectOption = {
    label: string
    value: string | number
}
type MultipleSelectProps = {
    multiple: true
    value: SelectOption[]
    onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
    multiple?: false
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

// Object type representing properties used to pass data and functions into React component
type SelectProps ={
 options: SelectOption[] // Options is an array of SelectOptions
}

export function Select({ multiple, value, onChange, options }: SelectProps) {
    // State variable to control the dropdown open/close state
    const [isOpen, setIsOpen] = useState(false)
    // State variable for highlighted index
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    function clearOptions() {
        // Clear the dropdown contents
        onChange(undefined)
    }

    function selectOption(option: SelectOption) {
        // if the value is the same as the selected don't call onchange event
        if (option !== value ) onChange(option)
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
                    key={option.value} 
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