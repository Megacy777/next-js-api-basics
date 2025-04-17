import { NextResponse } from 'next/server';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

let tasks: Task[] = [];
let currentId = 1;

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, description } = body;

  const newTask: Task = {
    id: currentId++,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}
