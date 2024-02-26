import prisma from "@/prisma/prisma-client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const IssuesPage: React.FC = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div className="">
      <button>
        <Link href="/issues/new">Create a new issue</Link>
      </button>

      <table className="border">
        <tr className="border space-x-5">
          <td>id</td>
          <td>title</td>
          <td>status</td>
        </tr>

        {issues.map((issue) => (
          <tr key={issue.id} className="border">
            <td>{issue.id}</td>
            <Link href={`/issues/${issue.id}`}>
              <td className="border text-blue-500">{issue.title}</td>
            </Link>
            <td>{issue.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default IssuesPage;
