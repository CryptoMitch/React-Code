// Named export
import { Select } from "./Select"

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },

]

function App() {
  // Wrap the JSX elements with a fragment to provide parent element 
  return (
    <>
      <Select options={options} />
    </>
  )
}

export default App
