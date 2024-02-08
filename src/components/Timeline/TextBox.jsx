import { useContext, useState, useEffect } from "react";
import ScenesContext from "../context/ScenesContext";

const TextBox = ({ GetScript }) => {
  const { currentSceneId } = useContext(ScenesContext);
  const [scriptText, setScriptText] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target.tagName.toLowerCase() === "textarea") {
        event.stopPropagation();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleGenerateClick = () => {
    GetScript(currentSceneId, scriptText);
    setFormVisible(false); // Close the form after generating
  };

  return (
    <div className="">
      <div className="absolute bottom-0 right-0">
        <button
          onClick={toggleFormVisibility}
          className="bg-[#E0CCBE] text-[#3C3633] hover:bg-[#747264] hover:text-[#EEEDEB] font-bold py-2 px-4 rounded-md transition ease-in-out duration-150"
        >
          {formVisible ? "Close Form" : "Open Form"}
        </button>
      </div>
      {formVisible && (
        <div className="w-[900px] p-4 rounded-lg shadow-md bg-[#EEEDEB]">
          <textarea
            value={scriptText}
            onChange={(e) => setScriptText(e.target.value)}
            className="resize-none w-full h-20 p-3 text-base rounded-lg border border-[#E0CCBE] focus:ring-[#747264] focus:border-[#747264] placeholder-[#747264] text-[#3C3633] bg-[#EEEDEB] shadow-inner"
            placeholder="What's this slide about?"
          ></textarea>
          <button
            onClick={handleGenerateClick}
            className="mt-4 w-full bg-[#E0CCBE] text-[#3C3633] hover:bg-[#747264] hover:text-[#EEEDEB] font-bold py-2 rounded-md transition ease-in-out duration-150"
          >
            Generate
          </button>
        </div>
      )}
    </div>
  );
};

export default TextBox;
