const knex = require("../knex-config"); // Import your knex instance
const contact_request = require("../migrations/20240815190812_contact_request");
const users = require("../migrations/20240814133623_users");
const LocalElectionRequest = require("../migrations/20240815190736_local_election_requests");
const PartyElectionRequest = require("../migrations/20240816161748_party_election_requests"); //do not forget to change

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
    const user = await users.findByNationalId(nationalId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user data", error: error.message });
  }
};

exports.createLocalElectionRequest = async (req, res) => {
  try {
    const { national_id, local_list_name, members } = req.body;
    const newRequest = await LocalElectionRequest.create({
      national_id,
      local_list_name,
      members: JSON.stringify(members),
    });
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

const VALID_PARTY_NAMES = [
  "حزب جبهة العمل الإسلامي",
  "حزب الوسط الإسلامي",
  "الحزب الوطني الأردني",
  "حزب الحياة الأردني",
  "حزب الرسالة",
  "حزب الشعب الديمقراطي الأردني (حشد)",
  "حزب الوحدة الشعبية الديمقراطي الأردني",
  "حزب البعث العربي التقدمي",
  "حزب الجبهة الأردنية الموحدة",
  "حزب المؤتمر الوطني (زمزم)",
];

exports.createPartyElectionRequest = async (req, res) => {
  try {
    const { national_id, party_list_name } = req.body;

    // Validate that the party name is in the list of valid names
    if (!VALID_PARTY_NAMES.includes(party_list_name)) {
      return res.status(400).json({ message: "Invalid party list name" });
    }

    const newRequest = await PartyElectionRequest.create({
      national_id,
      party_list_name,
    });
    res.status(201).json({
      message: "Party election request created successfully",
      id: newRequest[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating party election request",
      error: error.message,
    });
  }
};
