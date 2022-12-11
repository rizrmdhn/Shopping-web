import React from "react";
import DropDownMenu from "../Header/DropDownMenu";
import LoadingDropDownData from "./LoadData/LoadingDropDownData";

function LoadingDropDownItem({ lists, isLoading }) {
  return (
    <>
      {isLoading && <LoadingDropDownData cards={20} />}
      {!isLoading && <DropDownMenu lists={lists} />}
    </>
  );
}

export default LoadingDropDownItem;
