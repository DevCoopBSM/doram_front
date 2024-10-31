import axios from 'axios';

// axios 인스턴스 생성 및 기본 설정
const api = axios.create({
  baseURL: 'https://doram.bsm-aripay.kr', // 백엔드 서버 주소로 수정해주세요
  headers: {
    'Content-Type': 'application/json',
  }
});

export const saveBook = async (bookData) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('인증 토큰이 없습니다. 다시 로그인해주세요.');
  }
  
  try {
    const response = await api.post('/api/book/save', bookData, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}; 