exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('candidates').del()
    .then(function () {
      // Inserts seed entries
      return knex('candidates').insert([
        {
          "name": "نادية زياد المطارنة",
          "city": "الزرقاء",
          "list": "قائمة رؤية",
          "circle": "الدائرة الأولى",
          "party": "حزب الوحدة الشعبية الديمقراطي الأردني",
          "circle_list": "قائمة الدائرة الثالثة",
          "candidate_votes": 1,
          "list_votes": 10,
          "gender": "female",
          "type": "مسيحي",
          "isActivate": true,
          "party_votes" : 0 ,
          "candidate_national_id": 2000000070 

        }
      ]);
    });
};
