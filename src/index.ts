import express, { Application, Request, Response, NextFunction} from 'express';
import { productRoute } from './routes/products.route';
import { shopInfoRoute } from './routes/shop-info.route';
const app: Application = express();

app.use('/products', productRoute);
app.use('/shop-info', shopInfoRoute);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Welcome!');
});


app.listen(5000, ()=> console.log('Server is running at port 5000'));