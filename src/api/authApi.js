import axios from 'axios';

const BASE_URL = 'https://doram.bsm-aripay.kr/api/auth/login';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}`, credentials);
    const token = response.data.Authorization;
    
    // 토큰을 로컬 스토리지에 저장
    localStorage.setItem('token', token);
    
    // axios 기본 헤더에 토큰 설정
    axios.defaults.headers.common['Authorization'] = token;
    
    return response.data;
  } catch (error) {
    throw error;
  }
}; 