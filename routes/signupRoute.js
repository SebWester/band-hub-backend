import express from "express";
// Import bcrypt and jwt

const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  try {
    const { username, email, password, repeatPassword, role } = req.body;
    console.log("username:", username);
    console.log("email:", email);
    console.log("password:", password);
    console.log("repated password:", repeatPassword);
    console.log("role:", role);
    res.status(200).json({ user: username, password: password });
  } catch (err) {
    console.error("PANIC!", err);
    res.status(500).json({ status: err });
  }
});

export default signupRouter;
