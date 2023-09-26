import { NextResponse } from "next/server";
import data from "@/lib/data.json";
import fs from "fs";

export async function DELETE({ params }: { params: { id: string } }) {
  const id = params?.id;

  if (!id) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }

  const newData = data?.allTodos.filter((todo) => {
    return todo?.id !== id;
  });

  const serializeTodoData = JSON.stringify(newData, null, 2);
  fs.writeFile(`lib/data.json`, serializeTodoData, (err) => {
    if (err) {
      return NextResponse.json(
        {
          error: "Error writing data to file",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        error: "",
      },
      {
        status: 200,
      }
    );
  });

  return NextResponse.json(
    {
      error: "",
    },
    {
      status: 200,
    }
  );
}
