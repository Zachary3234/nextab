import { div } from "framer-motion/client";
import { useState } from "react";
import { Divider } from "@heroui/divider";
import React from "react";

export function AppDock({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const childrenLength = React.Children.count(children);
  
  return (
    <div className="w-fit transition-all duration-300 self-center">
      <div className="w-fit m-4 p-3 rounded-3xl
      shadow-sm bg-default-200/50 backdrop-blur-lg backdrop-saturate-200
      flex gap-3">
        {children}
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
                  <div className="bg-white rounded-xl h-12 w-12 text-center">123</div>
      </div>
    </div>
  );
}
