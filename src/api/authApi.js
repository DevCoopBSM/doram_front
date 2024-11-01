import axios from 'axios';
    
const api = axios.create({
  baseURL: 'https://doram.bsm-aripay.kr',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  withCredentials: false
});

export const login = async (loginData) => {
  try {
    const response = await api.post('/api/auth/login', {
      userId: loginData.userId,
      userPassword: loginData.userPassword
    });
    
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem('token', token);
      if (response.data.userName) {
        localStorage.setItem('userName', response.data.userName);
      }
      api.defaults.headers.common['Authorization'] = token;
    }
    
    return response.data;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};

export const signup = async (signupData) => {
  try {
    const response = await api.post('api/auth/signup', signupData);
    return response.data;
  } catch (error) {
    console.error('회원가입 에러:', error);
    throw error;
  }
}; 