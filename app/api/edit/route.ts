import { todoProps } from "@/lib/utils";
import data from "@/lib/data.json";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { updateData }: { updateData: todoProps } = await req.json();

  if (!updateData) {
    return NextResponse.json(
      {
        error: "Invalid Data",
      },
      {
        status: 500,
      }
    );
  }

  // Update that specific todo
  data?.allTodos?.map((todo) => {
    if (todo?.id === updateData?.id) {
      (todo.category = updateData?.category),
        (todo.description = updateData?.description),
        (todo.isFinished = updateData?.isFinished),
        (todo.title = updateData?.title);
    }
  });

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
