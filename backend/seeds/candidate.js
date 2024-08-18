exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('candidates').del()
      .then(function () {
        // Inserts seed entries
        return knex('candidates').insert([
        {
          name: "عائشة سالم",
    city: "عمان",
    list: "قائمة الحرية",
    circle: "الدائرة الأولى",
    party: "الحزب الوطني الأردني",
    circle_list: "قائمة الدائرة الأولى",
    candidate_votes: 0,
    list_votes: 0,
    gender: "female",
    type: "كوتا",
    isActivate: true,
    candidate_national_id: 100017 ,
    party_votes : 0 
  } ,

{
    name: "محمد صالح",
    city: "عمان",
    list: "قائمة الحرية",
    circle: "الدائرة الأولى",
    party: "الحزب الوطني الأردني",
    circle_list: "قائمة الدائرة الأولى",
    candidate_votes: 0,
    list_votes: 0,
    gender: "male",
    type: "مسلم",
    isActivate: true,
    candidate_national_id: 100017 ,
    party_votes : 0 
}
        ]);
      });
  };
  