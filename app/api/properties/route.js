import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties

export const GET = async (request) => {
  try {
    await connectDB();
    console.log('Database connected');

    // Something going on here -  not properly connecting to Mongoose - or not connecting to collection
    const properties = await Property.find({});
    console.log(properties);

    return Response.json(properties);
  } catch (error) {
    return Response.json({ message: "It's an error" }, { status: 500 });
  }
};
