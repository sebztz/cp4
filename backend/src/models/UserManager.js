const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, id_role) values (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.password, 1]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  async readUserByEmail(email) {
    const [[row]] = await this.database.query(
      `select * from ${this.table} where email = ? LIMIT 1`,
      [email]
    );

    return row;
  }

  async readUserById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [[rows]] = await this.database.query(
      `select * from ${this.table} where id = ? LIMIT 1`,
      [id]
    );
    // Return the first row of the result, which represents the item
    return rows;
  }
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  async update(user, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "user" table
    const result = await this.database.query(
      `update ${this.table} set firstname?, lastname=?, email=?, id_role=? where id = ?`,
      [user.firstname, user.lastname, user.email, user.id_role, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = UserManager;
