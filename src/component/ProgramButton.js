import { useContext } from "react";
import { ThemeContext } from '../App';

function ProgramButton(){

    const {theme,setAppState} = useContext(ThemeContext);
    return(
        <div className={theme}>
            <button onClick={()=>setAppState("menu")} className='btn'>Quiz Page</button>
        </div> 
    );
}

export default ProgramButton;