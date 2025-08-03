import { useState, useEffect } from 'react'

export function Clock(props: any) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-8" {...props}>
      <h1 className="text-4xl font-bold text-gray-800 select-none">
        {currentTime.toLocaleTimeString()}
      </h1>
      <p className="text-gray-600 mt-2 select-none">
        {currentTime.toLocaleDateString()}
      </p>
    </div>
  )
}