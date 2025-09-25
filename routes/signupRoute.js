import express from "express";
// Import bcrypt and jwt

const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  try {
    const user = req.body.user;
    console.log(user);
    res.status(200).json({ status: "Ok" });
  } catch (err) {
    console.error("PANIC!", err);
    res.status(500).json({ status: err });
  }
});

export default signupRouter;
