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
  const getScript = async (currentSceneId, scriptText, generate = true) => {
    let response; // Declare response outside to make it accessible throughout the function
    try {
      if (generate) {
        // Generate both script and audio
        response = await axios.post(`${API}/get-script`, {
          script: scriptText,
        });
      } else {
        // Generate audio only
        response = await axios.post(`${API}/get-script-audio-only`, {
          script: scriptText,
        });
      }

      // Destructuring the response data for cleaner access
      const { text, audio } = response.data;

      // Update script state with the new script data
      setScript((prev) => [
        ...prev,
        {
          id: currentSceneId,
          text, // Shorthand for text: text
          audio, // Shorthand for audio: audio
        },
      ]);
    } catch (error) {
      console.error("Failed to fetch script:", error);
      // Handle the error (e.g., display a notification or message to the user)
    }
  };

  useEffect(() => {
    getAvaUrls();
    getImgUrls();
  }, []);

  return (
    <DataContext.Provider
      value={{ avatars, images, getScript, setScript, scripts }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
