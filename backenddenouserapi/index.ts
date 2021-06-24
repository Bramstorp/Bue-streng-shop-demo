// @ts-nocheck

import {
  opine,
  serveStatic,
  renderFileToString,
  join,
  dirname,
  ensureAuthenticated,
} from "./deps.ts";

const app = opine();
const __dirname = dirname(import.meta.url);

app.engine('.html', renderFileToString);
app.use(serveStatic(join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index', { title: 'Deno Sample' });
});

app.use('/users', ensureAuthenticated, users);
app.use('/auth', auth)

app.listen(3000);
console.log('running on port 3000');
