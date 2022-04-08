import { createContext, useState } from "react";

const MarkdownContext = createContext("");

export const MarkdownContextProvider = ({ children }) => {
  const [markDown, setMarkDown] = useState("");
  return (
    <MarkdownContext.Provider value={{ markDown, setMarkDown }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownContext;
