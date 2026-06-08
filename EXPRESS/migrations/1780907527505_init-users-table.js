exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "serial",
      primaryKey: true
    },
    username: {
      type: "varchar(50)",
      unique: true,
      notNull: true
    },
    password: {
      type: "text",
      notNull: true
    },
    fullname: {
      type: "text",
      notNull: true
    }
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};