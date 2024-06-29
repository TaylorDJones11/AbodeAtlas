# AbodeAtlas

> A web application to help you find your next rental property.

## Features

Here are some of the current features that Property Pulse has:

- User authentication with Google & Next Auth
- User authorization
- Route protection
- User profile with user listings
- Property Listing CRUD
- Property image upload (Multiple)
- Property search
- Internal messages with 'unread' notifications
- Photoswipe image gallery
- Mapbox maps
- Toast notifications
- Property bookmarking / saved properties
- Property sharing to social media
- Loading spinners
- Responsive design (Tailwind)
- Custom 404 page

## Technologies Used

AdobeAtlas uses the following technologies:

- Next.js
- React
- Tailwind CSS
- MongoDB
- Mongoose
- NextAuth.js
- React Icons
- Photoswipe
- Cloudinary
- Mapbox
- React Map GL
- React Geocode
- React Spinners
- React Toastify
- React Share

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- MongoDB Atlas account and a cluster. Sign up and create a cluster at [MongoDB](https://www.mongodb.com/cloud/atlas)
- Cloudinary account. Sign up at [Cloudinary](https://cloudinary.com/)
- Google console account. Sign up at [Google Cloud](https://cloud.google.com/)
- Mapbox account. Sign up at [Mapbox](https://www.mapbox.com/)

### .env File

- Get your MongoDB connection string from your MongoDB Atlas cluster and add it to `MONGODB_URI`.
- Get your Google client ID and secret from your Google console account and add them to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Add a secret to `NEXTAUTH_SECRET`. You can generate one with the following command:
  ```sh
  openssl rand -base64 32
