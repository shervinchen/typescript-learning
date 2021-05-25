import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import './index.css';

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    axios.get('/api/isLogin').then((res) => {
      setLoginStatus(!res.data?.data);
    });
  }, []);

  return (
    <>
      {loginStatus ? (
        <div className="home-container">
          <Button type="primary">爬取</Button>
          <Button type="primary">展示</Button>
          <Button type="primary">退出</Button>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Home;
