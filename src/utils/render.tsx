import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
export const renderReact = (root: HTMLElement | null, ReactApp: React.FC) => {
  createRoot(root!).render(
    <StrictMode>
      <ReactApp />
    </StrictMode>,
  )
}
