import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectQAById } from "../../store/qaSlice";
import Button from "../shared/Button/Button";
import Card from "../shared/Card/Card";
import ReplyCard from "./ReplyCard";

export const QADetails = () => {
  const param: { id: string } = useParams();
  const item = useSelector(selectQAById(param.id));

  return (
    <>
      {item && <Card item={item} />}
      <h1 className="font-bold text-2xl px-10">پاسخ ها</h1>
      {item?.replies.map((el) => (
        <ReplyCard
          key={el.id}
          item={el}
          action={
            <>
              <Button
                text="پاسخ خوب نبود"
                color="#F16063"
                onClick={() => console.log()}
              />
              <Button
                text="پاسخ خوب بود"
                color="#27AE60"
                onClick={() => console.log()}
              />
            </>
          }
        />
      ))}
    </>
  );
};
