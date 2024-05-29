const { Router } = require("express");
const { validNewUser } = require("../validations");
const { createUser, getUserByEmail, updateUserByEmail } = require("../queries");
const { encryptPassword } = require("../helpers");
const userRouter = Router();

userRouter.get("/", (_, res) => res.status(200).json({ message: "Get user" }));

userRouter.get("/email/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await getUserByEmail(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const userData = req.body;
    if (validNewUser(userData)) {
      const existingUser = await getUserByEmail(userData.email);
      if (existingUser) {
        res.status(400).json({ message: "Email provided is already in use" });
      } else {
        const passwordHash = await encryptPassword(userData.password);
        if (passwordHash) {
          const newUser = await createUser({ ...userData, password: passwordHash });
          if (newUser) {
            res.status(201).json(newUser.toJSON());
          } else {
            res.status(400).json({ message: "Cannot create the user provided" });
          }
        } else {
          res.status(400).json({ message: "Cannot encrypt the password provided" });
        }
      }
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("router/user/create error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.put("/email/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, ...data } = req.body;
    if (password && password !== "") {
      data.password = await encryptPassword(password);
    }

    const updatedUser = await updateUserByEmail(email, data);

    if (updatedUser) {
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(500).json({ message: "Failed to update user" });
    }
  } catch (error) {
    console.error("router/user/update error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.delete("/", (_, res) => res.status(200).json({ message: "Delete user" }));

module.exports = userRouter;
