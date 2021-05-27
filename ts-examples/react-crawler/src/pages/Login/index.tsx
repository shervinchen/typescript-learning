import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import qs from 'qs';
import './index.css';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    axios
      .post('/api/login', qs.stringify({ password: values.password }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        if (res.data?.data) {
          setLoginStatus(true);
        } else {
          message.error('login failed!');
        }
      });
  };

  return (
    <>
      {loginStatus ? (
        <Redirect to="/" />
      ) : (
        <div className="login-container">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};

export default Login;
