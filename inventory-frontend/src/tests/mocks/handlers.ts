import { rest } from "msw";

export const handlers = [
    rest.get("http://localhost:8000/employees", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                test: "success",
            })
        );
    }),
];
