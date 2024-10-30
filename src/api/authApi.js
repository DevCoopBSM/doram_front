import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const login = async (loginData) => {
  try {
    const response = await axiosInstance.post('/auth/login', loginData);
    const token = response.data.Authorization;
    
    // 토큰을 로컬 스토리지에 저장
    localStorage.setItem('token', token);
    
    // axios 기본 헤더에 토큰 설정
    axiosInstance.defaults.headers.common['Authorization'] = token;
    
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}; 