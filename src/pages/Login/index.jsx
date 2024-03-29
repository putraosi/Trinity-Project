/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from "antd";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Separator } from "../../components";
import { getData, storeData } from "../../helpers";
import { Api } from "../../services";
import { ARTITS_PATH, TOKEN, USER, formItemLayout } from "../../utils";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const res = getData(USER);

    if (res) navigate(ARTITS_PATH, { replace: true });
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await Api.post({
        url: "admins/login/",
        body: {
          email: values?.email.trim(),
          password: values?.password.trim(),
        },
      });

      const decode = jwtDecode(res?.token);

      storeData(TOKEN, res?.token);
      storeData(USER, decode);

      navigate(ARTITS_PATH, { replace: true });
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };

  return (
    <div className="container_login">
      <div className="content">
        <h2>{"Trinity Database"}</h2>
        <Separator />

        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          {...formItemLayout}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input onChange={() => setIsError(false)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password onChange={() => setIsError(false)} />
          </Form.Item>

          {isError && <p className="error">{"Email/Password are incorrect"}</p>}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
