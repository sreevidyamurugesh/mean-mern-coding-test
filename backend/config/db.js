const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = "mongodb://vidya:*******@ac-mxoxey1-shard-00-00.srrwn8h.mongodb.net:27017,ac-mxoxey1-shard-00-01.srrwn8h.mongodb.net:27017,ac-mxoxey1-shard-00-02.srrwn8h.mongodb.net:27017/?ssl=true&replicaSet=atlas-eu01qi-shard-0&authSource=admin&appName=Cluster0";
    await mongoose.connect(uri);
    console.log('MongoDB Connected ✅');
  } catch (error) {
    console.error('MongoDB Error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;