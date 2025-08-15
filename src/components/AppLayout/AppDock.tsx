import { div } from "framer-motion/client";
import { useState } from "react";

export function AppDock({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="transition-all duration-300 self-center w-fit">
      <div className="w-fit m-4 p-3 rounded-3xl flex gap-3 shadow-sm bg-default-200/50 backdrop-blur-lg backdrop-saturate-200">
        {children}
      </div>
    </div>
  );
}
