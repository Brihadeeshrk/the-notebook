import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("it displays all the necessary info about the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 12,
    open_issues: 100,
    forks: 21,
  };

  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }
});
