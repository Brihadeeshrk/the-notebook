import { screen, render } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";

function renderComponent() {
  const repository = {
    full_name: "briha/project in py",
    language: "js",
    description: "this is a desc",
    owner: "facebook",
    name: "briha",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test("to check if the link is being shown in the list item", async () => {
  renderComponent();

  await screen.findByRole("img", { name: /js/i });
});

const pause = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};
