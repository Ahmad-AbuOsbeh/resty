function historyAction(historyReq) {
  return {
    type: 'HISTORY_REQ',
    payload: { historyReq },
  };
}

function loadingAction(sohwLoading) {
  return {
    type: 'HIDE_SHOW_LOADING',
    payload: { sohwLoading },
  };
}

function requestDetailsAction(requestParams) {
  return {
    type: 'REQ_DETAILS',
    payload: { requestParams },
  };
}

function responseResultsAction(data) {
  return {
    type: 'RESPONSE_RESULTS',
    payload: { data },
  };
}

module.exports = { historyAction, loadingAction, requestDetailsAction, responseResultsAction };
