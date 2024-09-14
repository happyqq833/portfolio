// SpinningFlower.js
import React from 'react';
import './SpinningFlower.css'; // CSS cho hiệu ứng xoay

const SpinningFlower = () => {
  return (
    <svg
      className="spinning-flower"
      width="150"
      height="150"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="none"
        stroke="hotpink"
        strokeWidth="4"
      />

      {/* Center Circle (smaller) */}
      <circle
        cx="50"
        cy="50"
        r="4" // Giảm bán kính để bông hoa nhỏ hơn
        fill="none"
        stroke="pink" // Đổi màu viền thành vàng
        strokeWidth="2"
      />

      {/* Petals with Pink Outline Only */}
      {[...Array(5)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="30"
          rx="8"
          ry="18"
          fill="none"
          stroke="hotpink"
          strokeWidth="4"
          transform={`rotate(${i * 72} 50 50)`} // 360 độ chia cho 5 cánh (72 độ mỗi cánh)
        />
      ))}
    </svg>
  );
};

export default SpinningFlower;
