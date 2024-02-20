export const POST = async (req: Request) => {
  try {
    console.log("req = ", req);
    return new Response("Hello World", { status: 201 });
  } catch (e) {
    console.error(e);
    return new Response(e.message, { status: 500 });
  }
};
