import { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import TabLabel from "./TabLabel";

const Preview = () => {
  const { markDown } = useContext(MarkdownContext);
  return (
    <main className="preview">
      <TabLabel>
        <h4>Preview</h4>
      </TabLabel>
      {/* <section className="preview_markdown"> */}
      <ReactMarkdown className="preview_markdown">{markDown}</ReactMarkdown>
      {/* </section> */}
    </main>
  );
};

export default Preview;
