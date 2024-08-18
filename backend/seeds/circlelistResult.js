exports.seed = async function(knex) {
   
   // استخدمت هاد الجدول عشان احسب النتائج بالريزلت
    // Get distinct combinations of circle_name, circle_list_name, and list_votes
    const distinctCircleLists = await knex('candidates')
      .distinct('circle', 'circle_list', 'list_votes')
      .select('circle as circle_name', 'list as circle_list_name', 'list_votes');
  
    // Insert the data into the circle_list table
    for (const circleList of distinctCircleLists) {
      await knex('circle_list').insert({
        circle_name: circleList.circle_name,
        circle_list_name: circleList.circle_list_name,
        list_votes: circleList.list_votes,
      });
    }
  };
  