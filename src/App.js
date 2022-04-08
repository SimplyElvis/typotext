import Heading from "./components/Heading";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { MarkdownContextProvider } from "./context/MarkdownContext";

const App = () => {
  return (
    <main className="theme_dark">
      <Heading />
      <section className="layout">
        <MarkdownContextProvider>
          <Editor />
          <Preview />
        </MarkdownContextProvider>
      </section>
    </main>
  );
};

export default App;
