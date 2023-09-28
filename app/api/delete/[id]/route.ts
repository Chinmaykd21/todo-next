import { NextRequest, NextResponse } from "next/server";
import data from "@/lib/data.json";
import fs from "fs";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params?.id;
  console.log("id", id);
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
  const allTodos = data?.allTodos;

  const newData = allTodos.filter((todo) => {
    return todo?.id !== id;
  });

  data.allTodos = newData;

  const serializeTodoData = JSON.stringify(data, null, 2);
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
