import axios from "axios";

const timeoutInSeconds = 10
 
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: timeoutInSeconds*1000,
    headers: {'apikey': process.env.REACT_APP_SUPABASE_KEY as string}
});

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_SUPABASE_KEY}` 
instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(function (config) {
    // Làm gì đó trước khi request dược gửi đi
    return config;
  }, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  });

// Thêm một bộ đón chặn response
instance.interceptors.response.use(function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  }, function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  });

export default instance