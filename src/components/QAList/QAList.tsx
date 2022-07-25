import React from "react";
import { GetQAList } from "../../api/GetQAList";
import { IQAList } from "../../models/QAModels";
import { Navbar } from "../Main/Navbar/Navbar";
import QAItem from "./QAItem/QAItem";

export const QAList = () => {
  const { data, error, loading } = GetQAList(10, 1);
  return (
    <>
      <Navbar />
      <main className="relative pt-20 items-start flex h-screen bg-[#F7F8F9]">
        {data?.map((item: IQAList) => (
          <QAItem key={item.id} item={item} />
        ))}
      </main>
    </>
  );
};
