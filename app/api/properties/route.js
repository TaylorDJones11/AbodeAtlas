// route to fetch all the properties
import connectDB from '@/config/database';

export const GET = async (request) => {
  try {
    await connectDB();
    // check the updated code for this
    return Response.json({ message: 'It works' }, { status: 200 });
    // return new Response(JSON.stringify({ message: 'Hello World' }), {
    //   status: 200,
    // });
  } catch (error) {
    console.log(error);
    return new Reponse('Something went wrong', { status: 500 });
  }
};
