import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setReqParams] = useState({});
  const [sohwLoading, setsohwLoading] = useState(false);
  const [didMountData, setDidMountData] = useState('');
  const [historyReq, setHistoryReq] = useState([]);

  //show loading
  function shwLoading() {
    setsohwLoading(true);
    setTimeout(() => {
      setsohwLoading(false);
    }, 1000);
  }
  function callApi(requestParams, response) {
    setData(response);
    setReqParams(requestParams);
  }
  // did mount
  useEffect(() => {
    setDidMountData('Hello from did mount');
  });

  // did update
  useEffect(() => {
    // i have a problem here, i can't use setHistoryReq to update my historyReq

    // setHistoryReq(...historyReq, requestParams);
    historyReq.push(`method : ${requestParams.method}, URL : ${requestParams.url}`);
    // setHistoryReq(...historyReq, `method : ${requestParams.method}, URL : ${requestParams.url}`);
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <h4 style={{ color: 'gray' }}>Welcome Message :{didMountData}</h4>
      <ul style={{ color: 'green' }}>
        <h2 style={{ color: 'green' }}>History Reqeusts :</h2>

        {historyReq.map((req) => {
          return <li style={{ color: 'green' }}>{req}</li>;
        })}
      </ul>
      <Form handleApiCall={callApi} sohwLoading={sohwLoading} shwLoading={shwLoading} />
      {!sohwLoading && <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
