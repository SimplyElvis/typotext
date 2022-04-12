import { useContext, useEffect } from "react";
import MarkdownContext from "../context/MarkdownContext";
import AppContext from "../context/AppContext";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TabLabel from "./TabLabel";
import TogglePreview from "./TogglePreview";

const Preview = () => {
  const { markDown } = useContext(MarkdownContext);
  const { isPreview, switchPreview, setSwitchPreview, mobileLayout } =
    useContext(AppContext);

  useEffect(() => {
    if (mobileLayout) {
      if (isPreview) {
        setSwitchPreview("");
      } else if (!isPreview) {
        setSwitchPreview("hide");
      }
    } else if (!mobileLayout) {
      isPreview ? setSwitchPreview("") : setSwitchPreview("hide");
    }
  }, [mobileLayout, isPreview]);

  return (
    <main className={`preview ${switchPreview}`}>
      <TabLabel>
        <h4>Preview</h4>
        {isPreview && <TogglePreview />}
      </TabLabel>
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="preview_markdown">
        {markDown}
      </ReactMarkdown>
    </main>
  );
};

export default Preview;
