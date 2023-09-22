"use client";

import allTodos from "@/lib/todos.json";
import Todos from "@/components/todos";

export default function Home() {
  return <Todos todos={allTodos} />;
}
