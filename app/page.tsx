"use client";

import Todos from "@/components/todos";
import { todos } from "@/lib/constants";

export default function Home() {
  return <Todos todos={todos} />;
}
