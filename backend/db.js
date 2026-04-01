const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://admin:1234@ac-j9bqcus-shard-00-00.lpouraa.mongodb.net:27017,ac-j9bqcus-shard-00-01.lpouraa.mongodb.net:27017,ac-j9bqcus-shard-00-02.lpouraa.mongodb.net:27017/swapDB?ssl=true&replicaSet=atlas-12lk5y-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(() => console.log("✅ DB Connected"))
.catch(err => console.log("❌ DB Error:", err));