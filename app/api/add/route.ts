import { idExists, todoProps } from "@/lib/utils";
import * as todos from "@/lib/todos.json";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data: todoProps = await req.json();
  const { id, category, description, title }: todoProps = data;

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

  todos.push(data);

  const serializeTodos = JSON.stringify(todos);
  fs.writeFile("lib/todos.json", serializeTodos, (err) => {
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
}
