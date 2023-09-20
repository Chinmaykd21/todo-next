export async function POST(req: Request) {
  const todoData = await req.json();

  console.log(todoData);
}
