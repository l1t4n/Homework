import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  hasDiscount: Boolean
});
const Product = mongoose.model('Product', productSchema);

app.use(express.json());

function authenticate(req: Request, res: Response, next: Function) {
  const { username, password } = req.body;

  if (username.length > 3 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
    next();
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
}

app.post('/products', authenticate, async (req: Request, res: Response) => {
  const { title, description, price, hasDiscount } = req.body;

  if (!title || !description || !price) {
    return res.status(400).json({ message: 'Title, description, and price are required' });
  }

  try {
    const product = new Product({ title, description, price, hasDiscount });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
});

app.get('/products', async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  try {
    const products = await Product.find().skip(skip).limit(limit);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
