let initialState = {
  historyReq: [],
  sohwLoading: false,
  data: null,
  requestParams: {},
};
function reducer(state = initialState, action) {
  let { type, payload } = action;
  let historyReq;
  let sohwLoading;
  let data;
  let requestParams;
  switch (type) {
    case 'HISTORY_REQ':
      historyReq = [...state.historyReq, payload.historyReq];
      sohwLoading = state.sohwLoading;
      data = state.data;
      requestParams = state.requestParams;

      return { historyReq, sohwLoading, data, requestParams };
    case 'HIDE_SHOW_LOADING':
      historyReq = state.historyReq;
      sohwLoading = payload.sohwLoading;
      data = state.data;
      requestParams = state.requestParams;

      return { historyReq, sohwLoading, data, requestParams };
    case 'REQ_DETAILS':
      historyReq = state.historyReq;
      sohwLoading = state.sohwLoading;
      data = state.data;
      requestParams = payload.requestParams;

      return { historyReq, sohwLoading, data, requestParams };
    case 'RESPONSE_RESULTS':
      historyReq = state.historyReq;
      sohwLoading = state.sohwLoading;
      data = payload.data;
      requestParams = state.requestParams;
      return { historyReq, sohwLoading, data, requestParams };
    default:
      return state;
  }
}

module.exports = { reducer, initialState };
