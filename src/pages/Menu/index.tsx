import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Estamos en menu")
  }, [])

  return (
		<div style={{ width: "100px", height: "20px", backgroundColor: "#000"}}>
      menu
    </div>
  );
};