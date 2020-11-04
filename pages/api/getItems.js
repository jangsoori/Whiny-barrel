import { server } from "../../config/index";
export default async function handler(req, res) {
  const resp = await fetch(`${server}/items.json`);
  const data = await resp.json();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ items: data }));
}
