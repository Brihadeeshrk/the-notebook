import React from "react";
import prisma from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface IssueDetailsProps {
  params: {
    id: string;
  };
}

const IssueDetails: React.FC<IssueDetailsProps> = async ({
  params: { id },
}) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue || typeof parseInt(id) !== "number") {
    return notFound();
  }

  return (
    <div>
      <h1>{issue?.title}</h1>
      <div className="flex space-x-5">
        <p>{issue?.status}</p>
        <p>{issue?.createdAt.toDateString()}</p>
      </div>
      <ReactMarkdown className="p-3 border bg-yellow-100 rounded-lg">
        {issue?.description}
      </ReactMarkdown>

      <Link href={`/issues/${id}/edit`}>
        <button className="p-3 border mt-4">edit issue</button>
      </Link>
    </div>
  );
};
export default IssueDetails;
