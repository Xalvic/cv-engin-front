// import { useState } from "react";
import InputsSidebar from "./components/InputsSidebar";
import PreviewPage from "./components/PreviewPage";

const Builder = () => {
  return (
    <div className="min-h-screen flex">
      <InputsSidebar />
      <PreviewPage />
    </div>
  );
};
export default Builder;
