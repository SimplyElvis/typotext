import { useContext } from "react";
import TabLabel from "./TabLabel";
import MarkdownContext from "../context/MarkdownContext";

const Editor = () => {
  const { setMarkDown } = useContext(MarkdownContext);
  return (
    <section className="editor">
      <TabLabel>
        <h4>markdown</h4>
      </TabLabel>
      <textarea onChange={(e) => setMarkDown(e.target.value)} />
    </section>
  );
};

export default Editor;
