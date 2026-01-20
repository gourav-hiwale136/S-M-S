import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const seedAdmin = async () => {
  const adminExists = await User.findOne({ role: "admin" });

  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Super Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin seeded");
  } else {
    console.log("ℹ️ Admin already exists");
  }
};

export default seedAdmin;
