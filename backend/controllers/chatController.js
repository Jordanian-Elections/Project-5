const knex = require("knex")(require("../knexfile").development);

exports.UserAddMessage = async (req, res) => {
  const { UserMessage } = req.body;
  try {
    await knex("chat").insert({
      national_id: "1001000000",
      Message: UserMessage,
      admin: false,
      Deleted: false,
    });
    res.status(201).json({ message: "تمت إضافة رسالة بنجاح!" });
  } catch (error) {
    res.status(500).json({ error: "حدث خطأ أثناء إرسال الرسالة." });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const Messages = await knex("chat").select("*").where({
      Deleted: false,
    });
    res.status(200).json(Messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الرسائل." });
  }
};