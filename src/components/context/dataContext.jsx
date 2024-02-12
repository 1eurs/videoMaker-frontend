import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const getImgUrls = async () => {
    // Check if cached images exist
    const cachedImages = localStorage.getItem("catImages");
    if (cachedImages) {
      setImages(JSON.parse(cachedImages));
    } else {
      try {
        const options = {
          method: "GET",
          url: "https://api.thecatapi.com/v1/images/search?limit=10",
          headers: {
            "x-api-key":
              "live_Vm983vukrpoH1EYRfgLou01EzMEpNXF1Gtl5dFv5P52lvLkjZxpOOAEy4vxICKkk",
          },
        };

        const res = await axios.request(options);
        const imageUrls = res.data.map((img) => img.url);

        setImages(imageUrls);
        localStorage.setItem("catImages", JSON.stringify(imageUrls));
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    }
  };

  useEffect(() => {
    getImgUrls();
  }, []);

  return (
    <DataContext.Provider value={{ images }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
