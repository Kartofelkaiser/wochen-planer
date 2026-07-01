// Proxy zur Claude-API, damit der API-Key nicht im Browser landet.
// Benötigt die Umgebungsvariable ANTHROPIC_API_KEY (Netlify → Site configuration → Environment variables).
export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY ist nicht gesetzt. In Netlify unter Site configuration → Environment variables hinterlegen." }),
      { status: 500, headers: { "content-type": "application/json" } });
  }

  const { messages, system, max_tokens } = await req.json();
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-5",
      max_tokens: Math.min(max_tokens || 1500, 4000),
      messages,
      system,
    }),
  });
  return new Response(await r.text(), { status: r.status, headers: { "content-type": "application/json" } });
};

export const config = { path: "/api/claude" };
