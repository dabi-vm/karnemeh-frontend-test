import { FC, memo, ReactNode } from "react";
import { IQAList } from "../../../models/QAModels";
import avatar2 from "../../../assets/img/avatar-2.jpg";
import comments from "../../../assets/svg/comments.svg";
import { getIRDate, getIRTime } from "../../../services/commonFunc";

interface IProps {
  item: IQAList;
  action?: ReactNode;
}
const QAItem: FC<IProps> = ({ item, action }) => {
  return (
    <div className="min-w-full">
      <div className="flex flex-col grow mx-10 my-5 shadow rounded-lg">
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
              {item.replies && (
                <>
                  <img
                    src={comments}
                    alt="comments"
                    className="ml-2 mx-5 w-4 h-4"
                  />
                  <span className="text-gray-400 ml-4">
                    {item.replies.length}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="basis-full bg-[#F9F9F9] p-3 mb-2">
          <p>{item.desc}</p>
        </div>
        {action && (
          <div className="basis-full bg-[#F9F9F9] p-5 flex flex-row-reverse">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(QAItem);
