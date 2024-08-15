const knex = require("../knex-config"); // Import your knex instance

exports.contactRequest = async (req, res) => {
  // id is a FK from users table
  const { name, phone, subject, message } = req.body;

  try {
    const result = await knex("contact_request")
      .insert({
        name,
        phone,
        subject,
        message,
      })
      .returning("*"); // returning the inserted row(s)

    res.status(201).json(result[0]); // assuming you want to return the first inserted row
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};
