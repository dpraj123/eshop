import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API api-gateway'});
});

app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});
