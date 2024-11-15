import { connect } from "mongoose";

const connectDB = async (URL) => {
  return connect(URL);
};
 
export default connectDB;
