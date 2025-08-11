import { useState } from "react";
import "@src/assets/tailwind.css";
import { HeroUIProvider } from "@heroui/system";
import { Button } from "@heroui/button";
import { Wallpaper } from "@src/components/Wallpaper";
import { ClockDate } from "@src/components/ClockDate";
import { SearchBar } from "@src/components/SearchBar";
import { AppGrid } from "@src/components/AppLayout/AppGrid";
import { AppDock } from "@src/components/AppLayout/AppDock";

import tempMedia1 from "@src/assets/wallpapers/09.mp4";
import tempMedia2 from "@src/assets/wallpapers/06.jpg";
const tempMediaUrls = [tempMedia1, tempMedia2];


export default function App() {
  // const [apps, setApps] = useState([]);
  const [wallpaperIndex, setWallpaperIndex] = useState(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [gridMode, setGridMode] = useState<boolean>(false);
  const [dockMode, setDockMode] = useState<boolean>(false);

  return (
    <HeroUIProvider>
      <main
        className={`${darkMode ? 'dark' : ''} text-foreground bg-background flex-col w-full h-screen relative`}
      >
        {/* Wallpaper Wrapper */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Wallpaper mediaSource={tempMediaUrls[wallpaperIndex]} />
        </div>

        {/* Content Wrapper */}
        <div className="absolute inset-0 z-10 h-full grid grid-rows-[auto_auto_1fr_auto]">
          <div className="mt-8 flex items-end justify-center">
            <ClockDate locale="zh-CN" />
          </div>
          <div className={`${gridMode ? 'row-span-1' : 'row-span-2'} mt-4 flex items-center justify-center`}>

            <SearchBar />
          </div>
          <AppGrid className={`bg-gray-800 ${gridMode ? 'row-3' : 'row-none invisible'}`}>
            <span className="bg-white rounded-full">123</span>
          </AppGrid>
          <AppDock className="h-20 bg-gray-600">
            <span className="bg-white rounded-full">1234121</span>
          </AppDock>
        </div>

        {/* Debug Panel */}
        <div className="absolute top-0 right-0 z-50 p-3 flex gap-2">
          <Button
            onPress={() => {
              setWallpaperIndex((prev) => (prev + 1) % tempMediaUrls.length);
            }}
          >
            切换壁纸
          </Button>
          <Button
            onPress={() => {
              setGridMode((prev) => !prev);
            }}
          >
            切换Grid
          </Button>
          <Button
            onPress={() => {
              setDockMode((prev) => !prev);
            }}
          >
            切换Dock
          </Button>
          <Button
            onPress={() => {
              setDarkMode((prev) => !prev);
            }}
          >
            切换主题
          </Button>
        </div>
      </main>
    </HeroUIProvider>
  );
}
