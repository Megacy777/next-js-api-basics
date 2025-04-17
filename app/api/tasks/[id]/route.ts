import { NextRequest, NextResponse } from 'next/server';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

let tasks: Task[] = []; // You may want to share this from a single source in real apps
let currentId = 1;

function findTask(id: number) {
  return tasks.find(t => t.id === id);
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const task = findTask(id);
  if (!task) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(task);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const task = findTask(id);
  if (!task) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const data = await req.json();
  task.title = data.title ?? task.title;
  task.description = data.description ?? task.description;
  task.completed = data.completed ?? task.completed;

  return NextResponse.json(task);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  tasks.splice(index, 1);
  return NextResponse.json({}, { status: 204 });
}
