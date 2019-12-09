const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post("/auth/login", {UserLogIn})
POST	/auth/login	username, password	User logged
POST	/auth/signup	username, password, campus, course	User created
POST	/auth/upload	file	User updated
POST	/auth/edit	username, campus, course	User updated
POST	/auth/logout		OK Message
GET	/auth/loggedin		User logged
module.exports = router;
