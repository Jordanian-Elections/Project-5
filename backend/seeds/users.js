exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
      
        {
          "national_id": 1234567890 , 
          "email": "tasnim.aboarqob@gmail.com",
          "name": "أماني محمد",
          "city": "الزرقاء",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "كوتا",
          "gender": "female",
          "isActivate": true,
          "otp": null
        }
      ]);
    });
};
