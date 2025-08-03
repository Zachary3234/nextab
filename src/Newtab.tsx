import { useState } from 'react';
import '@src/assets/tailwind.css'
import { HeroUIProvider } from "@heroui/system";
import { Clock } from "@src/components/Clock";
import { SearchBar } from "@src/components/SearchBar";
import { AppContainer } from '@src/components/AppContainer/AppContainer';
import { Wallpaper } from '@src/components/Wallpaper';

export default function App() {
  const [apps, setApps] = useState([]);

  return (
    <HeroUIProvider className="w-full h-screen bg-gray-200">
      <Clock className="mb-8 text-center" />

      <SearchBar className="mb-8 w-48" />

      <AppContainer />
      
      {/* <Wallpaper /> */}
    </HeroUIProvider>
  )
}