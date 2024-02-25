import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type IssuesPageProps = {};

const IssuesPage: React.FC<IssuesPageProps> = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">Create a new issue</Link>
      </Button>
    </div>
  );
};
export default IssuesPage;
