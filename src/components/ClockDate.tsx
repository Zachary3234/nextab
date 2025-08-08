import { useState, useEffect } from 'react'

interface ClockDateProps {
  locale?: string;  // 修正为字符串类型
}

export function ClockDate({ locale = 'zh-CN' }: ClockDateProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-8">
      <div className="text-9xl font-bold text-gray-200 select-none">
        {currentTime.toLocaleTimeString(locale)}
      </div>
      <div className="text-base text-gray-300 select-none">
        {currentTime.toLocaleDateString(locale)}
      </div>
    </div>
  )
}