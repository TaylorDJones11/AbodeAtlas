import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/:id

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    console.log('Database connected');

    const property = await Property.findById(params.id);

    if (!property) {
      return Response.json({ message: 'Property Not Found' }, { status: 404 });
    }
    console.log(property);

    return Response.json(property);
  } catch (error) {
    return Response.json({ message: "It's an error" }, { status: 500 });
  }
};
