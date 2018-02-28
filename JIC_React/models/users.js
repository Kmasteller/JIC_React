module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    profilePic: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      len: [1]
    }
  });

  //there are no assosiations yet so i commented this out

  // Users.associate = function (models) {
  //   // We're saying that a Users should belong to an Author
  //   // A Users can't be created without an Author due to the foreign key constraint
  //   Users.belongsTo(models.<YOUR MODEL NAME>, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Users;
};