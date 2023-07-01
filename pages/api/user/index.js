import connect from '../../../config/mongo.js';

// }

import connectDB from '../../../config/mongo.js'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;
    console.log('10 data', data);

    try {
      const db = await connectDB();
      const userCollection = db.collection('users');
      const query = { email: data.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exists" });
      }
      // Insert the data into the MongoDB collection
      await userCollection.insertOne({ data });
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error inserting data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}