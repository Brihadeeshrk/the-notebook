[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import {screen, render} from '@testing-library/react';\n\nconst RoleExample = () => {\n  return (\n    <div>\n    <a href=\"/\">Link</a>\n    <button>Button</button>\n    <footer>ContentInfo</footer>\n    <h1>Heading</h1>\n    <header>Banner</header>\n    <img alt=\"description\" /> Img\n    <input type=\"checkbox\" /> Checkbox\n    <input type=\"number\" /> SpinButton\n    <input type=\"radio\" /> Radio\n    <input type=\"text\" /> Textbox\n    <li>ListItem</li>\n    <ul>ListGroup</ul>\n    </div>\n  )\n}\n\nrender(<RoleExample />)","type":"code","id":"pas7v"},{"content":"test('can find elements by role', () => {\n  render(<RoleExample />)\n\n  const roles = [\n    'link',\n    'button',\n    'contentinfo',\n    'heading',\n    'banner',\n    'img',\n    'checkbox',\n    'spinbutton',\n    'radio',\n    'textbox',\n    'listitem',\n    'list'\n  ]\n\n  for(const role of roles) {\n    const el = screen.getByRole(role)\n\n    expect(el).toBeInTheDocument()\n  }\n})","type":"code","id":"lt8cs"},{"content":"const AccessibleName = () => {\n  return (\n    <div>\n    <button>Submit</button>\n    <button>Cancel</button>\n    </div>\n  )\n}\n\nrender(<AccessibleName />)","type":"code","id":"7bj5y"},{"content":"test('can select by accessibleName', () => {\n  render(<AccessibleName />)\n\n  const button = screen.getByRole('button', {\n    name: /submit/i\n  })\n  const cancel = screen.getByRole('button', {\n    name: /cancel/i\n  })\n\n  expect(button).toBeInTheDocument()\n  expect(cancel).toBeInTheDocument()\n})","type":"code","id":"wplgs"},{"content":"const MoreNames = () => {\n  return (\n    <div>\n      <label htmlFor=\"email\">Email</label>\n      <input id=\"email\" />\n\n      <label htmlFor=\"search\">Search</label>\n      <input id=\"search\" />\n    </div>\n  )\n}\n\nrender(<MoreNames />)","type":"code","id":"2q9cz"},{"content":"test('to make sure 2 ip fields, one for email and one for search are being rendered', () => {\n  render(<MoreNames />)\n\n  const email = screen.getByRole(\"textbox\", {\n    name: /email/i\n  })\n\n  const search = screen.getByRole(\"textbox\", {\n    name: /search/i\n  })\n\n  expect(email).toBeInTheDocument()\n  expect(search).toBeInTheDocument()\n})","type":"code","id":"al7k5"},{"content":"const IconButtons = () => {\n  return (\n    <div>\n      <button aria-label=\"sign in\">\n        <svg />\n      </button>\n\n       <button aria-label=\"sign out\">\n        <svg />\n      </button>\n    </div>\n  )\n}\n\nrender(<IconButtons />)","type":"code","id":"jmke6"},{"content":"test('to find elements based on label', () => {\n  render(<IconButtons />)\n\n  const signInButton = screen.getByRole(\"button\", {\n    name: /sign in/i\n  })\n\n  const signOutButton = screen.getByRole(\"button\", {\n    name: /sign out/i\n  })\n\n  expect(signInButton).toBeInTheDocument()\n  expect(signOutButton).toBeInTheDocument()\n})","type":"code","id":"zfg6l"}]