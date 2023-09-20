import { todoProps, todos } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const todoData: todoProps = await req.json();
  const { id, category, description, title }: todoProps = todoData;

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

  if (!category || !description || !title) {
    return NextResponse.json(
      {
        error: "Invalid Data",
      },
      {
        status: 400,
      }
    );
  }

  todos?.map((todo) => {
    if (todo?.id === id) {
      return NextResponse.json(
        {
          error: "ID already exists",
        },
        {
          status: 500,
        }
      );
    }
  });

  // TODO: Write a logic to write new data to constants file
  todos?.push(todoData);
  return NextResponse.json(
    {
      error: "",
      todos: todos,
    },
    {
      status: 200,
    }
  );
}
