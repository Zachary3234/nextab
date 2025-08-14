import { useState } from "react";

export function AppDock({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="self-center w-fit m-4 p-3 rounded-3xl flex gap-3
    shadow-sm bg-default-200/50 backdrop-blur-lg backdrop-saturate-200"
    >
      {children}
    </div>
  );
}
