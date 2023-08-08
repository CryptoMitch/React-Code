// Named export
import { useState } from "react"
import { Select } from "./Select"

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
  

]

function App() {
  // Our state variable can either be an option or undefined if we haven't set a value yet
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  // Wrap the JSX elements with a fragment to provide parent element 
  return (
    <>
      <Select options={options} value={value} onChange ={o => setValue (o)} />
    </>
  )
}

export default App
