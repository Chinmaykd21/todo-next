"use client";
import { Todo } from "@/components/todo";
import { todos } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly w-full items-center h-screen space-x-7">
      {todos.map((todo) => {
        return (
          <div key={todo?.id}>
            <Todo todo={todo} />
          </div>
        );
      })}
    </div>
  );
}
