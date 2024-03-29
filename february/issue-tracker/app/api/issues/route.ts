import prisma from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );

  const { title, description } = body;

  const newIssue = await prisma.issue.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
