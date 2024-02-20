import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("req = ", req);
    res.status(200).json({ message: "Hello, world!" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
