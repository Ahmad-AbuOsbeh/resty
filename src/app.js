import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import React from 'react';
import { useState, useEffect } from 'react';
import { useReducer } from 'react';
import { reducer, initialState } from './components/reducer';

import { historyAction, loadingAction, requestDetailsAction, responseResultsAction } from './components/actions';

function App() {
  // **NOTE** : all commented lines here represents the states for LAB 28 before using "useReducer" for LAB 29.

  // const [data, setData] = useState(null);
  // const [requestParams, setReqParams] = useState({});
  // const [sohwLoading, setsohwLoading] = useState(false);
  const [didMountData, setDidMountData] = useState('');
  // const [historyReq, setHistoryReq] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  //show loading
  function shwLoadingFunction() {
    // setsohwLoading(true);
    dispatch(loadingAction(true));
    setTimeout(() => {
      // setsohwLoading(false);
      dispatch(loadingAction(false));
    }, 1000);
  }
  function callApi(requestParams, response) {
    // setData(response);
    dispatch(responseResultsAction(response));
    // setReqParams(requestParams);
    dispatch(requestDetailsAction(requestParams));

    dispatch(historyAction(state.requestParams));
  }
  // did mount
  useEffect(() => {
    setDidMountData('Hello from did mount');
  });

  // did update
  // useEffect(() => {
  //   // i have a problem here, i can't use setHistoryReq to update my historyReq
  //   answer: setHistoryReq([...historyReq, requestParams]);

  //   // setHistoryReq(...historyReq, requestParams);
  //   // historyReq.push(`method : ${requestParams.method}, URL : ${requestParams.url}`);
  //   // setHistoryReq(...historyReq, `method : ${requestParams.method}, URL : ${requestParams.url}`);
  // }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <h4 style={{ color: 'gray' }}>Welcome Message :{didMountData}</h4>
      <ul style={{ color: 'green' }}>
        <h2 style={{ color: 'green' }}>History Reqeusts :</h2>
        {state.historyReq.map((req) => {
          return (
            <li style={{ color: 'green' }}>
              method: {req.method} || url: {req.url}
            </li>
          );
        })}
      </ul>
      <Form handleApiCall={callApi} sohwLoading={state.sohwLoading} shwLoadingFunction={shwLoadingFunction} />
      {!state.sohwLoading && <Results data={state.data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
