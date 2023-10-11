const STRAPI_API_URI = process.env.STRAPI_API_URI;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

const header = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
});

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const data = await request.json();

  const res = await fetch(`${STRAPI_API_URI as string}/todos/${id}`, {
    method: "PUT",
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

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  const res = await fetch(`${STRAPI_API_URI as string}/todos/${id}`, {
    method: "DELETE",
    headers: header,
  }).then((res) => res.json());

  return Response.json(res);
}
