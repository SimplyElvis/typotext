import { useRef, useContext, useEffect } from "react";
import Heading from "./components/Heading";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Notification from "./components/Notification";
import AppContext from "./context/AppContext";
import { MarkdownContextProvider } from "./context/MarkdownContext";

const App = () => {
  const themeRef = useRef("");
  const layoutRef = useRef("");
  const { theme, setMobileLayout, setIsPreview } = useContext(AppContext);

  useEffect(() => {
    themeRef.current.className = `theme_${theme}`;
  }, [theme]);

  useEffect(() => {
    if (layoutRef.current.clientWidth < 768) {
      setMobileLayout(true);
      setIsPreview(false);
    } else {
      setMobileLayout(false);
    }
  }, []);

  return (
    <main ref={themeRef}>
      <Heading />
      <section className="layout" ref={layoutRef}>
        <MarkdownContextProvider>
          <Editor />
          <Preview />
        </MarkdownContextProvider>
      </section>
      <Notification />
    </main>
  );
};

export default App;
