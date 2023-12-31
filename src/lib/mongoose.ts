import mongoose from 'mongoose';

export default function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  const uri = process.env.MONGODB_URI as string;
  return mongoose.connect(uri);
}
