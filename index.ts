// import figlet from "figlet";

// console.log("Hello via Bun!");

// const server = Bun.serve({
//     port: 3000,
//     fetch(req) {
//         const body = figlet.textSync("Bun!");
//         return new Response(body);
//     },
// });

// console.log(`Listening on http://localhost:${server.port} ...`);

import { Elysia } from "elysia";
import flightRouter from "./src/routes/flight.routes"

const app = new Elysia()
app.use(flightRouter);

app.listen(3000, () => console.log(`Listening on 3000`));