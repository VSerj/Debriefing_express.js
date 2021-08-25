import express from 'express';
import mongoose from 'mongoose';
import postsRouter from './routers/postsRouter.js';

const PORT = 5600;
const DB_URL = `mongodb+srv://root:123@cluster0.hf2sq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use('/api', postsRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`server -> port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

startApp();
