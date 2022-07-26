import { useEffect } from "react";
import { getQAList, selectData } from "../../store/qaSlice";
import { IQAList } from "../../models/QAModels";
import { useDispatch, useSelector } from "react-redux";
import Card from "../shared/Card/Card";
import Button from "../shared/Button/Button";
import { useHistory } from "react-router-dom";

export const QAList = () => {
  const history = useHistory();
  const qaListData = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQAList() as any);
  }, []);

  return qaListData?.map((item: IQAList) => (
    <Card
      key={item.id}
      item={item}
      action={
        <Button
          text="مشاهده جزییات"
          color="#27AE60"
          onClick={() => item.id && history.push(item.id)}
        />
      }
    />
  ));
};
