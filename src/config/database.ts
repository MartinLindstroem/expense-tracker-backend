import { MongoClient, ServerApiVersion } from 'mongodb';


export const dbClient = new MongoClient("mongodb+srv://mongo-expense-user:alFPIJUh4ukztWRX@expense-tracker.bfzknxe.mongodb.net/?retryWrites=true&w=majority&appName=expense-tracker", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });