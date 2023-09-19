"use client";
import { todoProps, todos } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full items-center h-screen space-y-5">
      {todos.map((todo) => {
        return <div key={todo?.id}>{todo?.title}</div>;
      })}
    </div>
  );
}
