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
import tempMedia2 from "@src/assets/wallpapers/06.png";
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
        <div className="absolute inset-0 z-10 h-full flex flex-col items-stretch">
          <div className="w-full shrink-0 grow mt-8 flex flex-col items-center justify-end overflow-hidden">
            <ClockDate locale="zh-CN" />
          </div>
          <div className="w-full shrink-0 grow-0 my-4 flex flex-col items-center overflow-hidden">
            <SearchBar />
          </div>
          <div className={`w-full shrink-1 grow-0 ${gridMode ? 'h-full' : 'h-1/2'} 
              transition-(height) duration-300 flex flex-col justify-end relative overflow-hidden`}>
            <div className={`w-full shrink-0 grow flex flex-col items-center ${gridMode ? '' : 'invisible'}`}>
              <AppGrid>
                <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
              </AppGrid>
            </div>
            <div className={`w-full shrink-0 grow-0 flex flex-col items-center
              ${dockMode ? 'absolute bottom-0 *:translate-y-full hover:*:translate-y-0' : ''} `}>
                <AppDock>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                </AppDock>
            </div>
          </div>
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
