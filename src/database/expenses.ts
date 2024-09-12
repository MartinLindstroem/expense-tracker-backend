import { dbClient } from "../config/database";

export async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await dbClient.connect();
      // Send a ping to confirm a successful connection
      await dbClient.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the Client will close when you finish/error
      await dbClient.close();
    }
  }
  run().catch(console.dir);

export const getAllExpensesFromDb = async () => {
  try {
    await dbClient.connect();

    const database = dbClient.db("expense-tracker-dev")
    const collection = database.collection("users");

    const cursor = collection.find()
    await cursor.forEach(doc => console.log(doc)
    )
     
  } catch {
    console.log("Error getting expenses");
  } finally {
    await dbClient.close()
  }
}