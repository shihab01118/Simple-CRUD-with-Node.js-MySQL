const pool = require("../database/index");

const usersController = {
  getAllUsers: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM users");
      res.status(200).json({ message: "Request successful", data: rows });
    } catch (error) {
      console.log(error);
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "SELECT * FROM users WHERE id = ?",
        [id]
      );
      res.status(200).json({ message: "Request successful", data: rows[0] });
    } catch (error) {
      console.log(error);
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = req.body;
      const sql =
        "INSERT INTO `users`(`name`, `email`, `phone`, `age`, `gender`, `city`, `salary`) VALUES (?,?,?,?,?,?,?)";
      const values = [
        newUser.name,
        newUser.email,
        newUser.phone,
        newUser.age,
        newUser.gender,
        newUser.city,
        newUser.salary,
      ];

      const [rows, fields] = await pool.query(sql, values);
      res.status(201).send({ message: "User Created!", data: rows });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  },
};

module.exports = usersController;
