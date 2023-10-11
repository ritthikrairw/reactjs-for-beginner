import { NextRequest } from "next/server";

const STRAPI_API_URI = process.env.STRAPI_API_URI;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

const header = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = searchParams.get("filter");

  let URI = `${STRAPI_API_URI as string}/todos`;

  if (filter === "active") {
    URI = `${STRAPI_API_URI as string}/todos?filters[completed][$eq]=false`;
  }

  if (filter === "completed") {
    URI = `${STRAPI_API_URI as string}/todos?filters[completed][$eq]=true`;
  }

  const res = await fetch(URI, {
    method: "GET",
    headers: header,
  }).then((res) => res.json());

  res.data = res.data.map((todo: any) => {
    return {
      id: todo.id,
      ...todo.attributes,
    };
  });

  return Response.json(res);
}

export async function POST(request: Request) {
  const data = await request.json();

  const res = await fetch(`${STRAPI_API_URI as string}/todos`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      data: data,
    }),
  }).then((res) => res.json());

  res.data = {
    id: res.data.id,
    ...res.data.attributes,
  };

  return Response.json(res);
}
