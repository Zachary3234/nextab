import { AppDock } from "./AppDock.tsx"
import { AppGrid } from "./AppGrid.tsx"

export function AppContainer() {
  return (
    <div>
      <AppGrid />
      <AppDock />
    </div>
  )
}