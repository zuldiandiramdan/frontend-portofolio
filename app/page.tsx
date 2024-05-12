"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <Link
        href={"/guide"}
        className="flex-1 flex flex-col justify-center items-center h-full hover:bg-blue-300 rounded-tl-lg rounded-bl-lg cursor-pointer"
      >
        <Icon icon="mdi:help-circle" className="text-[15rem]" />
        <div className="text-2xl font-bold">Guide</div>
      </Link>
      <div className="flex-1 flex flex-col justify-center items-center h-full hover:bg-blue-300 rounded-tr-lg rounded-br-lg cursor-pointer">
        <Icon icon="mdi:circle" className="text-[15rem]" />
        <div className="text-2xl font-bold">Summon</div>
      </div>
    </div>
  );
}
