import { useContext } from 'react';
import { ThemeContext } from '../App';
import light from '../image/light.svg'
import dark from '../image/dark.svg'

function Component(){
    const {theme} = useContext(ThemeContext);

    return(
        <main className={theme}>
            <div>
                <h1>Pongsin Lertchawalit</h1>
                <p>DarkMode React</p>
            </div>
            <img src={theme==="dark"?dark:light} alt="Logo"/>
        </main>
    );
}
export default Component;