// @ts-nocheck


import { opine } from "./deps.ts";


const app = opine();

app.get('/', (req, res) => {
  res.send('Deno Sample');
});

app.listen(3000);
console.log('running on port 3000');
