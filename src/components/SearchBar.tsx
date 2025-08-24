// import { useState } from 'react';
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="size-7 -ml-2 p-0.5 z-10
        cursor-pointer rounded-full hover:bg-gray-400/50"
      stroke="currentColor"
      strokeWidth="2.0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

export function SearchBar() {
  return (
    <Form 
      className="w-full max-w-112"
      onSubmit={(e) => {
        e.preventDefault();
        const query = new FormData(e.currentTarget).get("search");
        if (!query) {
          return;
        }
        window.open(
          `https://www.bing.com/search?q=${encodeURIComponent(
            query.toString()
          )}`,
          "_blank"
        );
      }}
    >
      <Input
        isClearable
        classNames={{
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/60 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-sm",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-lg",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "cursor-text!",
          ],
        }}
        radius="full"
        startContent={(
          <SearchIcon />
        )}
        name="search"
        type="text"
        placeholder="搜索 Bing 或输入网址"
      />
      
    </Form>
  );
}
