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

  // await act(async () => {
  //   await pause();
  // });
  await screen.findByRole("img", { name: /js/i });
});

const pause = () => new Promise((res) => setTimeout(res, 100));
