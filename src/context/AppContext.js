import { useState, createContext } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isPreview, setIsPreview] = useState(true);
  const [mobileLayout, setMobileLayout] = useState(false);
  const [switchPreview, setSwitchPreview] = useState("");
  const [switchEditor, setSwitchEditor] = useState("");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        isPreview,
        mobileLayout,
        setMobileLayout,
        setIsPreview,
        switchPreview,
        setSwitchPreview,
        switchEditor,
        setSwitchEditor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
