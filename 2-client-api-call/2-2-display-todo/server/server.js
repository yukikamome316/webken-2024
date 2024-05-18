import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const todo = new Hono();

todo.use("*", cors({
  origin: "null",
}));

let todoList = [
  { id: "1", title: "JavaScriptを勉強する", completed: false },
  { id: "2", title: "TODOアプリを自作する", completed: false },
  { id: "3", title: "漫画を読み切る", completed: true },
  { id: "4", title: "ゲームをクリアする", completed: false },
];

todo.get("/", (c) => new Response(JSON.stringify(todoList), { headers: { "Content-Type": "application/json" } }));

const app = new Hono();

app.route("/api/todo", todo);

serve({
  fetch: app.fetch,
  port: 8000,
});