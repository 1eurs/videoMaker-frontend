import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import ScenesContext from "./ScenesContext";

const DataContext = createContext();

const API = "http://172.30.61.5:5000";

export const DataProvider = ({ children }) => {
  const [avatars, setAvatars] = useState([]);
  const [images, setImages] = useState([]);
  const [scripts, setScript] = useState([]);

  const getAvaUrls = async () => {
    const res = await axios.get(`${API}/avatars-list`);
    setAvatars(res.data);
  };

  const getImgUrls = async () => {
    const res = await axios.get(`${API}/images-list`);
    setImages(res.data);
  };

  const GetScript = async (currentSceneId, scriptText) => {
    const res = await axios.post(`${API}/get-script`, { script: scriptText });
    setScript((prev) => [
      ...prev,
      {
        id: currentSceneId,
        text: res.data.text,
        audio: res.data.audio,
      },
    ]);
  };

  useEffect(() => {
    getAvaUrls();
    getImgUrls();
  }, []);

  return (
    <DataContext.Provider
      value={{ avatars, images, GetScript, setScript, scripts }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
