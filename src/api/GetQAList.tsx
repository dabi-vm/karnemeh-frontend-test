import { useState, useEffect } from "react";
import agent from "../services/agent";

export interface IApiResponse {
  data: any;
  error: any;
  loading: Boolean;
}

export const GetQAList = (limit: number, offset: number): IApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = () => {
    setLoading(true);
    agent.QA.list(limit, offset)
      .then((res) => setData(res))
      .catch((res) => setError(res.error));
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { data, error, loading };
};
