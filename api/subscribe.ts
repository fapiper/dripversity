import { VercelRequest, VercelResponse } from "@vercel/node";
import Mailchimp from "mailchimp-api-v3";

export default async function subscribe(
    { body }: VercelRequest,
    res: VercelResponse
) {
    const respond = (success: boolean, code: number) => {
        return res.status(code).json({
            success,
            code,
        });
    };

    try {
        const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY || "");

        await mailchimp.post("/lists/1c389ebd08/members", {
            email_address: body.email,
            status: "subscribed",
        });

        console.error("Success subscribe to newsletter");
        return respond(true, 200);
    } catch (err: any) {
        console.error("Error subscribe to newsletter", err);
        return respond(false, 500);
    }
}
