import { Elysia } from "elysia";

// export const flightRoutes = (app: Elysia) => {
//     app.get('/flight', async () => {
//         return {
//             response: "Hello"
//         }
//     })
// }

const flightRoutes = new Elysia()
    .get('/flight', async () => {
        return {
            response: "Hello"
        }
    })

export default flightRoutes