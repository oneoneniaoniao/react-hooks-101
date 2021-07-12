import { ADD_OPERARION_LOG, DELETE_ALL_OPERATIONLOGS } from "../actions";

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERARION_LOG:
    const operationLog = { 
      description: action.description,
      operatedAd: action.operatedAd
    }
      return [operationLog, ...state];
    case DELETE_ALL_OPERATIONLOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
