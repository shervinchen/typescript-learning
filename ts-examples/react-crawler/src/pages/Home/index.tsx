import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, message } from 'antd';
import axios from 'axios';
import './index.css';

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  useEffect(() => {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        setLoginStatus(false);
      }
    });
  }, []);

  const handleLogout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.data?.data) {
        setLoginStatus(false);
      } else {
        message.error('logout failed!');
      }
    });
  };

  return (
    <>
      {loginStatus ? (
        <div className="home-container">
          <Button type="primary">爬取</Button>
          <Button type="primary">展示</Button>
          <Button type="primary" onClick={() => handleLogout()}>
            退出
          </Button>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Home;
