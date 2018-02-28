// Require mongoose
const mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstname: {
    type: STRING,
    allowNull: false,
    len: [1]
  },
  lastname: {
    type: STRING,
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
    type: STRING,
    allowNull: false,
    len: [1]
  },
  profilePic: {
    type: STRING,
    allowNull: true,
    len: [1]
  },
  isAdmin: {
    type: BOOLEAN,
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

// Create the Note model using the noteSchema
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;