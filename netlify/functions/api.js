import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import serverless from "serverless-http";

const app = express();
const router = express.Router();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/app', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.listen(9000,()=>console.log( "server started on port 9000" ));
export const handler = serverless(app);

