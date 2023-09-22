import { todoProps } from "@/lib/utils";
import React from "react";
import { Todo } from "./todo";

const Todos = ({ allTodos }: { allTodos: todoProps[] }) => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly w-full items-center gap-7 p-4">
      {allTodos?.map((todo) => {
        return (
          <div key={todo?.id}>
            <Todo data={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
