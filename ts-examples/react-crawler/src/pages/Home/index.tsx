import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, message } from 'antd';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
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

  const handleCrawler = () => {
    axios.get('/api/getData').then((res) => {
      if (res.data?.data) {
        message.success('crawler success!');
      }
    });
  };

  const handleLogout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.data?.data) {
        setLoginStatus(false);
      } else {
        message.error('logout failed!');
      }
    });
  };

  const getOption: () => echarts.EChartOption = () => {
    return {};
  };

  return (
    <>
      {loginStatus ? (
        <div className="home-container">
          <div className="buttons">
            <Button type="primary" onClick={() => handleCrawler()}>
              爬取
            </Button>
            <Button type="primary" onClick={() => handleLogout()}>
              退出
            </Button>
          </div>
          <ReactEcharts option={getOption()} />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Home;
