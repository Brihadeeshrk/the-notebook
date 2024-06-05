import { setupServer } from "msw/node";
import { rest } from "msw";

/*
FROM 
const handlers = [
  rest.get("/api/repositories", (req, res, ctx) => {
    const language = req.url.searchParams.get("q").split("language:")[1];

    return res(
      ctx.json({
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      })
    );
  }),
];


TO 
createServer([
    {
        path: '',
        method: '',
        res: (req, res, ctx) => {
            return {
                items: [{}, {}]
            }
        }
    }
])
*/

export function createServer(handlerConfig) {
  // map through every ele in this config and create a handler for it
  const handlers = handlerConfig.map((config) => {
    return rest[config.method || "get"](config.path, (req, res, ctx) => {
      return res(ctx.json(config.res(req, res, ctx)));
    });
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.restoreHandlers();
  });

  afterAll(() => {
    server.close();
  });
}
