import { todoProps } from "@/lib/utils";
import React from "react";
import { Todo } from "./todo";

const Todos = ({ allTodos }: { allTodos: todoProps[] }) => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly w-full items-center gap-7 p-4 h-[80vh]">
      {allTodos?.map((todo) => {
        return <Todo key={todo?.id} data={todo} />;
      })}
    </div>
  );
};

export default Todos;
