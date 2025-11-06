// module.exports = {
//   MONGO_IP: 'localhost',
//   MONGO_USER: "admin",
//   MONGO_PWD: "admin",
//   MONGO_PORT: 27017
// };



module.exports = {
  MONGO_IP: process.env.MONGO_IP || 'localhost',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PWD: process.env.MONGO_PWD || 'admin',
  MONGO_PORT: process.env.MONGO_PORT || 27017
};