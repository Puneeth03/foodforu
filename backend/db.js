const mongoose = require("mongoose");
const mongoURI ="MONGO_URL";

export default connectDB;
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    const db = mongoose.connection;

    // Fetch data from "food_item" collection
    const foodItemCollection = db.collection('food_item');
    const data = await foodItemCollection.find({}).toArray();

    // Fetch data from "food_category" collection
    const foodCategoryCollection = db.collection('food_category');
    const catData = await foodCategoryCollection.find({}).toArray();

    global.food_item = data;
    global.food_Category = catData;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports=mongoDB();

