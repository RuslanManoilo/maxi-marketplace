import Ad from "./ad.model.js";
import { ctrlWrapper } from "../../helpers/index.js";

const createAd = async (req, res) => {
  const { id } = req.user;

  const newAd = await Ad.create({ ...req.body, user_id: id });

  res.status(201).json({ newAd });
};

export default {
  createAd: ctrlWrapper(createAd),
};
