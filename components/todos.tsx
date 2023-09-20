import { todoProps } from "@/lib/constants";
import React from "react";
import { Todo } from "./todo";

const Todos = ({ todos }: { todos: todoProps[] }) => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly w-full items-center gap-7 p-4">
      {todos.map((todo) => {
        return (
          <div key={todo?.id}>
            <Todo todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
