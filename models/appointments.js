// module.exports = (sequelize, DataTypes) => {
//   const appointments = sequelize.define("appointments", {
//     patientName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     doctorName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     date: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     time: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     patientId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     doctorId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.STRING,
//       defaultValue: "pending",
//       Enumerator: ["pending", "approved", "rejected", "cancelled"],
//     },
//      isNotified: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//   });

//   return appointments;
// };

const { sequelize } = require("../config/db");
const Sequelize = require("sequelize");

const Appointments = sequelize.define("appointments", {
  patientName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  doctorName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  patientId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  doctorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: "pending",
    Enumerator: ["pending", "approved", "rejected", "cancelled"],
  },
  isNotified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = { Appointments };
