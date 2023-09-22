import { idExists, todoProps } from "@/lib/utils";
import data from "@/lib/data.json";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const addTodoData: todoProps = await req.json();
  const { id, category, description, title }: todoProps = addTodoData;

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

  const exists = idExists(id);
  if (exists) {
    return NextResponse.json(
      {
        error: "ID already exists",
      },
      {
        status: 500,
      }
    );
  }

  data?.allTodos?.push(addTodoData);

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
