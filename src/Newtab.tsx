import { useState } from "react";
import "@src/assets/tailwind.css";
import { HeroUIProvider } from "@heroui/system";
import { Wallpaper } from "@src/components/Wallpaper";
import { ClockDate } from "@src/components/ClockDate";
import { SearchBar } from "@src/components/SearchBar";
import { AppGrid } from "@src/components/AppLayout/AppGrid";
import { AppDock } from "@src/components/AppLayout/AppDock";

const tempMediaUrls = ["/wallpapers/09.mp4", "/wallpapers/06.jpg"];

export default function App() {
  const [apps, setApps] = useState([]);

  return (
    <HeroUIProvider className="flex w-full h-screen relative bg-gray-200">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Wallpaper mediaSource={tempMediaUrls[0]} />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full">
        <ClockDate locale="zh-CN" />
        <SearchBar />
        <AppGrid className="w-full h-2/5 bg-gray-100">
          <span className="bg-white rounded-full">123</span>
        </AppGrid>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-20 flex flex-col items-center justify-center">
        <AppDock className="w-full h-1/5 bg-gray-100">
          <span className="bg-white rounded-full">123</span>
        </AppDock>
      </div>
    </HeroUIProvider>
  );
}
