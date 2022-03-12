import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";
function Band({ band }) {
  const dispatch = useDispatch();
  function handleDeleteClick() {
    dispatch(bandRemoved(band.id));
  }
  return (
    <li key={band}>
      {band.name}
      <button onClick={handleDeleteClick}>Delete Band</button>
    </li>
  );
}
export default Band;