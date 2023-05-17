// module.exports = (sequelize, DataTypes) => {
//   const Descdoctors = sequelize.define("descdoctors", {
//     education: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Professional: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Certifications: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Expertise: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Honors_and_Awards: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Publications: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Professional_Memberships: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     mobile: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     doctor_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });

//   return Descdoctors;
// };

const { sequelize } = require("../config/db");
const Sequelize = require("sequelize");

const Descdoctors = sequelize.define("descdoctors", {
  education: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Professional: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Certifications: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Expertise: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Honors_and_Awards: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Publications: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Professional_Memberships: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  doctor_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Descdoctors };


