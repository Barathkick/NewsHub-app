import { useState } from "react"
import Navbar from "./components/navBar"
import Newsboard from "./components/newsBoard"

const App = () => {
  const[category,setCategory] = useState("general")
  return (
    <div>
<Navbar setCategory={setCategory}/>
<Newsboard category ={category}/>
    </div>
  )
}

export default App