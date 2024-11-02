import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  min-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  position: relative;
  animation: ${props => {
    if (props.isExiting) return 'slideOut 0.6s ease forwards';
    if (props.isMovingUp) return 'moveUp 0.3s ease forwards';
    return 'slideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
  }};
  margin-bottom: 10px;
  transform: translateX(${props => props.isExiting ? '120%' : '0'});
  
  @keyframes slideIn {
    0% {
      transform: translateX(120%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-${props => props.moveDistance}px);
    }
  }
`;

export const NotificationBar = styled.div`
  width: 6px;
  height: 40px;
  margin-right: 16px;
  background-color: ${props => props.isSuccess ? '#8ee559' : '#ff4d4d'};
  border-radius: 3px;
`;

export const NotificationContent = styled.div`
  flex: 1;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  font-family: "NanumSquareNeoBold";
  line-height: 1.4;
`; 