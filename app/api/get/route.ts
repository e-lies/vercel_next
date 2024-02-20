import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: Request) => {
  try {
    console.log("req = ", req);
    return new Response("Hello World", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(e.message, { status: 500 });
  }
};
