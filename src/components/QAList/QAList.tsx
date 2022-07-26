import { useEffect } from "react";
import { Navbar } from "../Main/Navbar/Navbar";
import QAItem from "./QAItem/QAItem";
import { getQAList, selectData } from "../../store/qaSlice";
import { IQAList } from "../../models/QAModels";
import { useDispatch, useSelector } from "react-redux";

export const QAList = () => {
  const qaListData = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQAList() as any);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative pt-20 items-start flex h-screen bg-[#F7F8F9]">
        {qaListData?.map((item: IQAList) => (
          <QAItem key={item.id} item={item} />
        ))}
      </main>
    </>
  );
};
