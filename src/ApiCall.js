import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: `http://82.64.46.169:8001`
});

export default AxiosInstance;
