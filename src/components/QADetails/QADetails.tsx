import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IReply } from "../../models/QAModels";
import agent from "../../services/agent";
import { getQAList, selectQAById } from "../../store/qaSlice";
import Button from "../shared/Button/Button";
import Card from "../shared/Card/Card";
import { AddReply } from "./AddReply/AddReply";
import ReplyCard from "./ReplyCard/ReplyCard";

export const QADetails = () => {
  const param: { id: string } = useParams();
  const item = useSelector(selectQAById(param.id));
  const dispatch = useDispatch();

  const handlePoint = (reply: IReply, like: boolean) => {
    if (item) {
      agent.QA.replyPoint(param.id, {
        ...item,
        replies: [
          ...item.replies.filter((x) => x.id !== reply.id),
          {
            ...reply,
            like: like ? reply.like + 1 : reply.like,
            dislike: !like ? reply.dislike + 1 : reply.dislike,
          },
        ],
      }).then(() => dispatch(getQAList() as any));
    }
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      desc: { value: string };
    };
    const values: IReply = {
      id: new Date().toString(),
      title: target.title.value,
      desc: target.desc.value,
      date: new Date(),
      like: 0,
      dislike: 0,
    };
    if (item) {
      agent.QA.addReply(param.id, {
        ...item,
        replies: [...item.replies, values],
      }).then(() => {
        dispatch(getQAList() as any);
        alert("پاسخ شما با موفقیت اضافه شد");
      });
    }
  };

  useEffect(() => {
    if (!item) {
      dispatch(getQAList() as any);
    }
  }, []);

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
                onClick={() => el.id && handlePoint(el, false)}
              />
              <Button
                text="پاسخ خوب بود"
                color="#27AE60"
                onClick={() => el.id && handlePoint(el, true)}
              />
            </>
          }
        />
      ))}
      <h1 className="font-bold text-3xl px-10">پاسخ خود را ثبت کنید</h1>
      <AddReply onSubmit={submitHandler} />
    </>
  );
};
