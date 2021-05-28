import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, message } from 'antd';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
import './index.css';

interface CourseItem {
  title: string;
  count: number;
}

interface Data {
  [key: string]: CourseItem[];
}

interface LineData {
  name: string;
  type: string;
  data: number[];
}

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(true);
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        setLoginStatus(false);
      }
    });
    axios.get('/api/showData').then((res) => {
      if (res.data?.data) {
        setData(res.data.data);
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
    const courseNames: string[] = [];
    const times: string[] = [];
    const tempData: {
      [key: string]: number[];
    } = {};
    for (let i in data) {
      const item = data[i];
      times.push(moment(Number(i)).format('MM-DD HH:mm'));
      item.forEach((innerItem) => {
        const { title, count } = innerItem;
        if (courseNames.indexOf(title) === -1) {
          courseNames.push(title);
        }
        tempData[title]
          ? tempData[title].push(count)
          : (tempData[title] = [count]);
      });
    }
    const result: LineData[] = [];
    for (let i in tempData) {
      result.push({
        name: i,
        type: 'line',
        data: tempData[i],
      });
    }
    return {
      title: {
        text: '课程在线学习人数',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: courseNames,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: times,
      },
      yAxis: {
        type: 'value',
      },
      series: result,
    };
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
