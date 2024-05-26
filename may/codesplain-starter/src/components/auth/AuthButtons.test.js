import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import { createServer } from "../../test/server";
import { SWRConfig } from "swr";

async function renderComponent() {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <AuthButtons />
      </MemoryRouter>
    </SWRConfig>
  );

  await screen.findAllByRole("link");
}

describe("when the user is signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: (req, res, ctx) => {
        return { user: { id: 3, email: "22rfef@fn.com" } };
      },
    },
  ]);

  test("sign in and sign up are not visible", async () => {
    await renderComponent();

    const signInButton = screen.queryByRole("link", {
      name: /sign in/i,
    });

    const signUpButton = screen.queryByRole("link", {
      name: /sign up/i,
    });

    expect(signInButton).not.toBeInTheDocument();
    expect(signUpButton).not.toBeInTheDocument();
  });

  test("sign out is visible", async () => {
    await renderComponent();

    const signOutButton = screen.getByRole("link", { name: /sign out/i });

    expect(signOutButton).toBeInTheDocument();
    expect(signOutButton).toHaveAttribute("href", "/signout");
  });
});

describe("when the user is not signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: (req, res, ctx) => {
        return { user: null };
      },
    },
  ]);

  test("sign in and sign up are visible", async () => {
    await renderComponent();

    const signInButton = screen.getByRole("link", { name: /sign in/i });
    const signUpButton = screen.getByRole("link", { name: /sign up/i });

    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveAttribute("href", "/signin");

    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveAttribute("href", "/signup");
  });

  test("sign out is not visible", async () => {
    await renderComponent();

    const signOutButton = screen.queryByRole("link", {
      name: /sign out/i,
    });

    // expect(signOutButton).toBeNull();
    expect(signOutButton).not.toBeInTheDocument();
  });
});

const pause = () => new Promise((res) => setTimeout(res, 100));
