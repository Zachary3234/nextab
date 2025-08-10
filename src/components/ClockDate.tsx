import { useState, useEffect } from "react";

export function ClockDate({
  locale = "zh-CN",
}: {
  locale?: string;
}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="text-9xl font-bold text-white drop-shadow-xl select-none">
        {currentTime.toLocaleTimeString(locale)}
      </div>
      <div className="text-base text-white drop-shadow-md select-none">
        {currentTime.toLocaleDateString(locale)}
      </div>
    </div>
  );
}
