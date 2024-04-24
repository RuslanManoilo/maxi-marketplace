import Ad from "./ad/ad.model.js";
import User from "./user/user.model.js";

User.hasMany(Ad, { foreignKey: "user_id" });
Ad.belongsTo(User, { foreignKey: "user_id" });
