import axios from 'axios';

const api = axios.create({
  baseURL: 'https://doram.bsm-aripay.kr',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getUserProfile = async (userId) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await api.get(`/api/user/profile/${userId}`, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    console.error('프로필 조회 에러:', error);
    throw error;
  }
}; 