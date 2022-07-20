import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function hello(req: VercelRequest, res: VercelResponse) {
    return res.status(200).json({
        hello: "world",
    });
}
