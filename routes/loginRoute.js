import express from "express";
// Import bcrypt and jwt

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ status: "OK" });
  } catch (err) {
    console.error("PANIC!", err);
    res.status(500).json({ status: err });
  }
});

export default loginRouter;
