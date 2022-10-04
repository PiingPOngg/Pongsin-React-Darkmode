import { useContext } from "react"
import { DataContext, ThemeContext } from "../App"

function Menu(){
    const {theme,setAppState} = useContext(ThemeContext);
    return(
        <div className={theme}>
            <h1>Basic Quiz</h1>
            <button onClick={()=>setAppState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu;