import { screen, render, act } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";

// jest.mock("../tree/FileIcon", () => {
//   return () => {
//     return <div>FileIcon</div>;
//   };
// });

function renderComponent() {
  const repository = {
    full_name: "briha/project in py",
    language: "js",
    description: "this is a desc",
    owner: {
      login: "facebook",
    },
    name: "briha",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return { repository };
}

test("to check if the link is being shown in the list item", async () => {
  const { repository } = renderComponent();

  await screen.findByRole("img", { name: /js/i });
  const link = screen.getByRole("link", { name: /github repository/i });
  expect(link).toHaveAttribute("href", repository.html_url);

  // await act(async () => {
  //   await pause();
  // });
});

test("shows a fileicon with the appropriate icon", async () => {
  const { repository } = renderComponent();

  const icon = await screen.findByRole("img", { name: /js/i });

  expect(icon).toHaveClass("js-icon");
});

test("shows a link to the code editor page", async () => {
  const { repository } = renderComponent();

  await screen.findByRole("img", { name: /js/i });
  const link = await screen.findByRole("link", {
    name: new RegExp(repository.owner.login),
  });

  expect(link).toHaveAttribute("href", `/repositories/${repository.full_name}`);
});

const pause = () => new Promise((res) => setTimeout(res, 100));
