import { useState, useEffect } from 'react'
import reactLogo from '@src/assets/react.svg'
import viteLogo from '@src/assets/vite.svg'
import { HeroUIProvider } from "@heroui/system";
import { Button } from '@heroui/button'
import '@src/assets/tailwind.css'

function App() {
  const [pageInfo, setPageInfo] = useState<{
    title: string;
    url: string;
  } | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id!, { type: 'GET_DOM_INFO' }, response => {
        setPageInfo(response)
      })
    })
  }, [])

  return (
    <HeroUIProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onPress={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {pageInfo ? (
        <div>
          <p>Title: {pageInfo.title}</p>
          <p>URL: {pageInfo.url}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </HeroUIProvider>
  )
}

export default App
