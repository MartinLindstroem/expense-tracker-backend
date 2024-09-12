"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbClient = void 0;
const mongodb_1 = require("mongodb");
exports.dbClient = new mongodb_1.MongoClient(process.env.DATABASE_URI, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
