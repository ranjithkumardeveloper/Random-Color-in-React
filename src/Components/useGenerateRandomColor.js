import { useState } from "react";

const useGenerateRandomColor = () => {
  const [color, setColor] = useState("");
  const generateRandomColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { color, generateRandomColor };
};
export default useGenerateRandomColor;
