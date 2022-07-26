import { FC, memo } from "react";
import { IQAList } from "../../../models/QAModels";
import Button from "../../shared/Button/Button";
import avatar2 from "../../../assets/img/avatar-2.jpg";
import comments from "../../../assets/svg/comments.svg";
import { getIRDate, getIRTime } from "../../../services/commonFunc";
interface IProps {
  item: IQAList;
}
const QAItem: FC<IProps> = ({ item }) => {
  return (
    <div className="flex flex-col grow m-10 shadow">
      <div className="basis-full flex flex-row justify-between bg-white p-2 rounded-lg">
        <div className="flex items-center">
          <img
            src={avatar2}
            alt="avatar"
            className="rounded-xl mx-3 w-[32px] h-[32px]"
          />
          <h3 className="font-semibold">{item.title}</h3>
        </div>
        <div className="flex items-center">
          <div>
            <span className="text-gray-400">ساعت: </span>
            <span>{getIRTime(item.date)}</span>
          </div>
          <div className="border-l-2 mx-3">&nbsp;</div>
          <div>
            <span className="text-gray-400">تاریخ: </span>
            <span>{getIRDate(item.date)}</span>
          </div>
          <div className="flex items-center mr-5">
            <img src={comments} alt="comments" className="ml-2 mx-5 w-4 h-4" />
            <span className="text-gray-400 ml-4">20</span>
          </div>
        </div>
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

export default memo(QAItem);
