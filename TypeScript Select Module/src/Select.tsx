// This code is inspired by the Tutorial by Web Dev Simplified - https://www.youtube.com/watch?v=bAJlYgeovlg

import styles from "./select.module.css"

// A type to support the value option
type SelectOption = {
    label: string
    value: string
}

// Object type representing properties used to pass data and functions into React component
type SelectProps ={
 options: SelectOption[] // Options is an array of SelectOptions
 value?: SelectOption // Value is a single SelectOption. The question mark reprents the value as an optional field.
 onChange: (value: SelectOption | undefined) => void // onChange is a function that passes in a value. It can either be an option or undefined.Void function returns nothing
}

export function Select({ value, onChange, options }: SelectProps) {
    return (
        <>
        // Wrapper for the entire component pulling styles from select.module.css
        <div className={styles.container}>
           Right 
        </div>
        </>
    )
}