import React, { FC } from "react";
import { IQAList } from "../../../models/QAModels";
import Button from "../../shared/Button/Button";
interface IProps {
  item: IQAList;
}
const QAItem: FC<IProps> = ({ item }) => {
  return (
    <div className="flex flex-col grow m-10 shadow">
      <div className="basis-full flex flex-row bg-white p-2 rounded-lg">
        {item.title}
      </div>
      <div className="basis-full bg-[#F9F9F9] p-3">
        <p>{item.desc}</p>
      </div>
      <div className="basis-full bg-[#F9F9F9] p-5 flex flex-row-reverse">
        <Button
          text="مشاهده جزییات"
          color="#27AE60"
          onClick={() => console.log()}
        />
      </div>
    </div>
  );
};

export default QAItem;
