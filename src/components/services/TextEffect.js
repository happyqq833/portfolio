import React, { useEffect, useState } from 'react';
import './TextEffect.css'; // CSS cho hiệu ứng

const TextEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = -1;
    let isResetting = false;

    const updateText = () => {
      if (index < text.length - 1 && index != -1) {
        setDisplayedText((prev) => prev + text[index]);
        index += 1;
      } else if (!isResetting) {
        // Khi đã hoàn tất việc hiển thị văn bản, bắt đầu reset
        isResetting = true;
        setIsComplete(true);
        setTimeout(() => {
          setDisplayedText(''); // Reset văn bản đã hiển thị
          index = 0; // Đặt lại chỉ số
          isResetting = false;
          setIsComplete(false);
        }, 1000); // Thời gian nghỉ giữa các lần lặp
      }
    };

    const interval = setInterval(updateText, 60); // Thay đổi tốc độ xuất hiện chữ bằng cách điều chỉnh giá trị này

    return () => clearInterval(interval); // Cleanup interval khi component unmount
  }, [text]);

  return (
    <p className="fade-in-text1">{displayedText}</p>
  );
};

export default TextEffect;
