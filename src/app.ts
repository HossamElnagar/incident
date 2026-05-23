import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import helmet from 'helmet';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(compression()); // يضغط البيانات كلها
app.use(morgan('combined'));
app.use(helmet());

// تصليح: res بقا نوعه Response
app.get('/api', (req: Request, res: Response) => {
    const bigData = Array.from({ length: 1000 }, (_, i) => `Data ${i + 1}`);
    res.json(bigData);
});

const Port: number = 3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});