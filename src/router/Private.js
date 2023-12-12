/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../helpers";
import { USER } from "../utils";

const Private = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const res = getData(USER);

    if (!res) navigate("/", { replace: true });
    else setLoading(false);
  }, []);

  return <Spin spinning={loading}>{children}</Spin>;
};

export default Private;
