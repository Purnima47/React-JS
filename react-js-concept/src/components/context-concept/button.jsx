import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponent() {
    // const { setTheme, theme } = useContext(GlobalContext);
    const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);

    // return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
    return <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
}

export default ContextButtonComponent;