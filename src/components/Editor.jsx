import { useContext, useEffect, useRef } from "react";
import TabLabel from "./TabLabel";
import MarkdownContext from "../context/MarkdownContext";
import AppContext from "../context/AppContext";
import TogglePreview from "./TogglePreview";

const Editor = () => {
  const { setMarkDown } = useContext(MarkdownContext);
  const { isPreview, switchEditor, setSwitchEditor, mobileLayout } =
    useContext(AppContext);
  const markdownRef = useRef("");

  useEffect(() => {
    markdownRef.current.focus();
  }, []);

  useEffect(() => {
    if (mobileLayout) {
      if (isPreview) {
        setSwitchEditor("hide");
      } else if (!isPreview) {
        setSwitchEditor("");
      }
    }
  }, [mobileLayout, isPreview, setSwitchEditor]);

  return (
    <section className={`editor ${switchEditor}`}>
      <TabLabel>
        <h4>markdown</h4>
        {!isPreview && <TogglePreview />}
      </TabLabel>
      <textarea
        onChange={(e) => setMarkDown(e.target.value)}
        ref={markdownRef}
      />
    </section>
  );
};

export default Editor;
