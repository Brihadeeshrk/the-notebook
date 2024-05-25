import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../test/server";
import HomeRoute from "./HomeRoute";

createServer([
  {
    path: "/api/repositories",
    res: (req, res, ctx) => {
      const language = req.url.searchParams.get("q").split("language:")[1];

      return {
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      };
    },
  },
]);

// jest.mock("", () => {
//     return () => {
//         return <div>hi</div>
//     }
// })

function renderFunction() {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );
}

test("renders 2 links for each language", async () => {
  renderFunction();

  const languages = [
    "javascript",
    "typescript",
    "rust",
    "go",
    "python",
    "java",
  ];

  // loop over every lang
  for (let language of languages) {
    // for every lang, make sure we see 2 links
    const links = await screen.findAllByRole("link", {
      name: new RegExp(`${language}_`),
    });
    expect(links).toHaveLength(2);

    // assert that the links have the appropriate full_name
    expect(links[0]).toHaveTextContent(`${language}_one`);
    expect(links[1]).toHaveTextContent(`${language}_two`);
    expect(links[0]).toHaveAttribute("href", `/repositories/${language}_one`);
    expect(links[1]).toHaveAttribute("href", `/repositories/${language}_two`);
  }
});

const pause = () => new Promise((res) => setTimeout(res, 100));
