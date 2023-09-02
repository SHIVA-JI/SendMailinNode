import { MongoClient} from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectToDatabase() {
  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return 1;
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    return 0;
  }
}

const db = client.db('Effizient');
const collect = db.collection('CanadaStudent');

export const createDocument = async (email,data) => {
    try{
      const userData = ({
        Email : email,
        All_Data : data
    })

    await collect.insertOne(userData);
    return true;
  }
  catch(err){
    console.log(err);
    return false;
  }
}
