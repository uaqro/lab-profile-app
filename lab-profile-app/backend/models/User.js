const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

username, type String,
password, type String
campus, type String. Possible values: 
course, type String. Possible values: WebDev, UX/UI, Data Analytics.
image, type String.
const userSchema = new Schema(
  {
    email: String,
    username: String,
    name: String,
    campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"]
    },
    course: {
      type:String,
      enum: ["WebDev", "UX/UI", "Data Analytics"]
    },
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
