const knex = require("../knex-config"); // Import your knex instance
const contact_request = require("../migrations/20240815190812_contact_request");
const users = require("../migrations/20240814133623_users");
const LocalElectionRequest = require("../migrations/20240815190736_local_election_requests");

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

exports.getUserByNationalId = async (req, res) => {
  try {
    const { nationalId } = req.params;
    const user = await knex("users").where({ national_id: nationalId }).first();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user data",
      error: error.message,
    });
  }
};

exports.createLocalElectionRequest = async (req, res) => {
  try {
    const { national_id, local_list_name, members } = req.body;
    const newRequest = await knex("local_election_requests")
      .insert({
        national_id,
        local_list_name,
        members: JSON.stringify(members),
      })
      .returning("id");

    res.status(201).json({
      message: "Local election request created successfully",
      id: newRequest[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating local election request",
      error: error.message,
    });
  }
};
