// app/api/tasks/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const { title, description } = await req.json();

  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newTask, { status: 201 });
}
