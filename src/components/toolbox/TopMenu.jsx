import React, { useContext, useRef } from "react";
import { useEditor } from "@layerhub-io/react";
import AddBgColorPaletteButton from "./AddBgColorPaletteButton";
import AddAvatarsButton from "./AddAvatarsButton";
import AddImagesButton from "./AddImagesButton";
import AddTextButton from "./AddTextButton";
import AddSceneButton from "./AddSceneButton";
import DataContext from "../context/dataContext";
import ScenesContext from "../context/ScenesContext";

const TopMenu = () => {
  const editor = useEditor();
  const { scripts } = useContext(DataContext);
  const { currentSceneId } = useContext(ScenesContext);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;

      const json = JSON.parse(content);
      editor.scene.importFromJSON(json);
    };
    reader.readAsText(file);
  };

  const handleClickImport = () => {
    fileInputRef.current.click();
  };

  const export_ = () => {
    const jsonObj = editor.scene.exportToJSON();
    const jsonString = JSON.stringify(jsonObj);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported-data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const SaveIMG = () => {
    editor.renderer.toDataURL(editor.scene.exportToJSON()).then((url) => {
      const a = document.createElement("a");
      a.href = url;
      a.download = "exportedImage.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  const saveVideo = () => {
    const currentScript = scripts.find(
      (script) => String(script.id) === String(currentSceneId)
    );

    editor.renderer.toDataURL(editor.scene.exportToJSON()).then((url) => {
      const a = document.createElement("a");
      a.href = url;
      a.download = "exportedImage.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  return (
    <div className="flex justify-center items-center gap-2 h-full">
      <AddSceneButton />
      <AddAvatarsButton />
      <AddImagesButton />
      <AddTextButton />
      <AddBgColorPaletteButton />
      <div className="flex gap-2">
        <button className="bg-slate-400 rounded-md p-2" onClick={export_}>
          Export JSON
        </button>
        <button
          className="bg-slate-400 rounded-md p-2"
          onClick={handleClickImport}
        >
          Import JSON
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept=".json"
          onChange={handleFileChange}
          style={{ display: "none" }} // Hide the file input
        />
      </div>
      <button className="bg-slate-400 rounded-md p-2" onClick={SaveIMG}>
        Export image
      </button>
      <button className="bg-slate-400 rounded-md p-2" onClick={saveVideo}>
        Export video
      </button>
    </div>
  );
};

export default TopMenu;
