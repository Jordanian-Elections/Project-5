exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "national_id": 100017,
          "email": "aisha.salem@example.com",
          "name": "عائشة سالم",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword17",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "كوتا",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100018,
          "email": "ali.rahman@example.com",
          "name": "علي رحمن",
          "city": "إربد",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword18",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسلم",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100019,
          "email": "samiya.ahmed@example.com",
          "name": "سامية أحمد",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword19",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسيحي",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100020,
          "email": "khaled.mohammad@example.com",
          "name": "خالد محمد",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword20",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "شيشاني",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100021,
          "email": "marwa.nabil@example.com",
          "name": "ماروى نبيل",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword21",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "كوتا",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100022,
          "email": "tariq.ali@example.com",
          "name": "طارق علي",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword22",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسلم",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100023,
          "email": "layla.said@example.com",
          "name": "ليلى سعيد",
          "city": "إربد",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword23",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسيحي",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100024,
          "email": "mohamed.hussein@example.com",
          "name": "محمد حسين",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword24",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "شيشاني",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100025,
          "email": "nawal.khaled@example.com",
          "name": "نوال خالد",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword25",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "كوتا",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100026,
          "email": "mohammad.nasser@example.com",
          "name": "محمد ناصر",
          "city": "إربد",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword26",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسلم",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100027,
          "email": "raha.abdallah@example.com",
          "name": "رها عبد الله",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword27",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسيحي",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100028,
          "email": "khalil.ahmed@example.com",
          "name": "خليل أحمد",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword28",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "شيشاني",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100029,
          "email": "ahmed.sadek@example.com",
          "name": "أحمد صادق",
          "city": "إربد",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword29",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "كوتا",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100030,
          "email": "nour.ahmed@example.com",
          "name": "نور أحمد",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword30",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسلم",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100031,
          "email": "fadi.ahmad@example.com",
          "name": "فادي أحمد",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword31",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسيحي",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100032,
          "email": "mariam.jaber@example.com",
          "name": "مريم جابر",
          "city": "إربد",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword32",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "شيشاني",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100033,
          "email": "ibrahim.saleh@example.com",
          "name": "إبراهيم صالح",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword33",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "كوتا",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100034,
          "email": "nadia.mohammed@example.com",
          "name": "ناديا محمد",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword34",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسلم",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100035,
          "email": "walid.abdel@example.com",
          "name": "وليد عبد الله",
          "city": "إربد",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword35",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسيحي",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100036,
          "email": "farah.nabil@example.com",
          "name": "فرح نبيل",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword36",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "شيشاني",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100037,
          "email": "khaled.mohamed@example.com",
          "name": "خالد محمد",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword37",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "كوتا",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100038,
          "email": "sara.ali@example.com",
          "name": "سارة علي",
          "city": "إربد",
          "circle": "الدائرة الثالثة",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword38",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسلم",
          "gender": "female",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100039,
          "email": "mohammed.salem@example.com",
          "name": "محمد سالم",
          "city": "الزرقاء",
          "circle": "الدائرة الأولى",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword39",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "مسيحي",
          "gender": "male",
          "isActivate": true,
          "otp": null
        },
        {
          "national_id": 100040,
          "email": "nour.abdul@example.com",
          "name": "نور عبد الله",
          "city": "عمان",
          "circle": "الدائرة الثانية",
          "isVotedcircle": false,
          "isVotedparty": false,
          "password": "hashedpassword40",
          "role": "voter",
          "isApproved": false,
          "Whitepaper": null,
          "type": "شيشاني",
          "gender": "female",
          "isActivate": true,
          "otp": null
        }
        
      ]);
    });
};
