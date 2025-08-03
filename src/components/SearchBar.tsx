// import { useState } from 'react';
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";

function SearchIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" className="size-6"
            {...props}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    )
}

export function SearchBar(props: any) {
    return (
        <Form {...props} onSubmit={(e) => {
            e.preventDefault();
            const query = new FormData(e.currentTarget).get('search');
            if (!query) {
                return;
            }
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query.toString())}`, '_blank');
        }}>
            <Input
                name="search"
                type="text"
                placeholder="搜索 Google 或输入网址"
                startContent={<SearchIcon />}
            />
        </Form>
    )
}