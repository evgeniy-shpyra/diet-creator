import { ThemeContext } from "@/store/theme/ThemeContext";
import React from "react";

const CreateDiet = () => {
    const themeCtx = React.useContext(ThemeContext);
    React.useEffect(() => {
        console.log(themeCtx.theme);
    }, [themeCtx.theme]);

    const handleChangeTheme = () => {
        themeCtx.setTheme("dark");
    };

    return (
        <div>
            <button onClick={handleChangeTheme}>Change THeme</button>
            <div>CreateDiet</div>
        </div>
    );
};

export default CreateDiet;
