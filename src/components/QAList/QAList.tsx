import React from "react";
import { Navbar } from "../Main/Navbar/Navbar";
import QAItem from "./QAItem/QAItem";

export const QAList = () => {
  return (
    <>
      <Navbar />
      <main className="relative pt-20 items-start flex h-screen bg-[#F7F8F9]">
        {/* {[].map((item) => (
          <QAItem item={item as any} />
        ))} */}
      </main>
    </>
  );
};
