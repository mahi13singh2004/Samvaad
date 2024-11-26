import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "mayank@gmail.com",
    fullName: "Mayank Dhaundiyal",
    password: "mayank123",
    profilePic: "https://i.postimg.cc/2Svf9tHP/Mayank.jpg",
  },
  {
    email: "kartavya@gmail.com",
    fullName: "Kartavya Verma",
    password: "kartavya123",
    profilePic: "https://i.postimg.cc/bJLPH26r/Kartavya.jpg",
  },
  {
    email: "dev@gmail.com",
    fullName: "Dev Lohani",
    password: "dev123",
    profilePic: "https://i.postimg.cc/CxWxzDtV/Dev.jpG",
  },
  {
    email: "prince@gmail.com",
    fullName: "Prince Mishra",
    password: "prince123",
    profilePic: "https://i.postimg.cc/cJSGpc26/Prince.png",
  },
  {
    email: "mahi@gmail.com",
    fullName: "Mahi Singh",
    password: "mahi123",
    profilePic: "https://i.postimg.cc/nVRZXBjw/Mahi.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
seedDatabase();