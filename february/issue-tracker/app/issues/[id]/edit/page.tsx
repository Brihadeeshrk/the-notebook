import React from "react";
import prisma from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

type IssueEditPageProps = {
  params: {
    id: string;
  };
};

const IssueEditPage: React.FC<IssueEditPageProps> = async ({
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
    </div>
  );
};
export default IssueEditPage;
