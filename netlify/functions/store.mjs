import { getStore } from "@netlify/blobs";

// Persistenter Speicher für den Wochenplan (Netlify Blobs).
// GET  /api/store?key=plan_v4  -> gespeicherter JSON-Wert oder null
// PUT  /api/store?key=plan_v4  -> Body (JSON) speichern
export default async (req) => {
  const url = new URL(req.url);
  const key = (url.searchParams.get("key") || "").replace(/[^a-zA-Z0-9_-]/g, "");
  if (!key) return new Response('{"error":"key fehlt"}', { status: 400, headers: { "content-type": "application/json" } });

  const store = getStore("wochenkueche");

  if (req.method === "GET") {
    const v = await store.get(key);
    return new Response(v ?? "null", { headers: { "content-type": "application/json" } });
  }
  if (req.method === "PUT" || req.method === "POST") {
    const body = await req.text();
    try { JSON.parse(body); } catch {
      return new Response('{"error":"kein gültiges JSON"}', { status: 400, headers: { "content-type": "application/json" } });
    }
    await store.set(key, body);
    return new Response('{"ok":true}', { headers: { "content-type": "application/json" } });
  }
  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/store" };
