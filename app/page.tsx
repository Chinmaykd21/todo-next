"use client";

import data from "@/lib/data.json";
import Todos from "@/components/todos";

export default function Home() {
  return <Todos allTodos={data?.allTodos} />;
}
