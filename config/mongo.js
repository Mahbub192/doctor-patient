import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let connection;

async function connect() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    connection = client.db(process.env.DB_NAME);
  }
  return connection;
}

export default connect;
