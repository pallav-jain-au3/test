import axios from 'axios';
import {message} from 'antd'

export const API_URL = "http://localhost:3000";
export function request(config) {
    return axios.request(config);
  }

  export const handleCatch = err => {
    if (typeof err === "string" && err instanceof String) {
      message.error(err);
    } else if (
      typeof err.response === "string" &&
      err.response instanceof String
    ) {
      message.error(err.response);
    } 
    else if (err.response && err.response.data && err.response.data.error) {
      message.error(err.response.data.error);
    }
    else if (err.response && err.response.data) {
      message.error(err.response.data);
    }
    else {
      message.error("Some error has occured please refresh...");
    }
  };  