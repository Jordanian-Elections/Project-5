const express = require('express');
const router = express.Router();
const knex = require('../knex-config'); // Import your knex instance
const cors = require("cors");


router.get('/cities/circles/voted-count', async (req, res) => {
    try {
      // Query to get the count of unique users who have voted in each circle within a city
      const votedCounts = await knex('users')
        .select('city', 'circle')
        .countDistinct('national_id as voted_count') // Count distinct national_id (unique users) who have voted
        .where('isVotedcircle', true) // Filter to include only users who have voted in the circle
        .groupBy('city', 'circle') // Group by city and circle
        .orderBy(['city', 'circle']); // Order by city and circle
  
      res.json(votedCounts);
    } catch (err) {
      res.status(500).json({ error: 'Error retrieving voted count per city and circle' });
    }
  });
  
  
  
  
  router.get('/candidates/similar', async (req, res) => {
    try {
      // استعلام مباشر لقاعدة البيانات للحصول على بيانات التصويت لكل مدينة ودائرة
      const cityCircleVotes = await knex('users')
      .select('city', 'circle')
      .countDistinct('national_id as voted_count') // Count distinct national_id (unique users) who have voted
      .where('isVotedcircle', true) // Filter to include only users who have voted in the circle
      .groupBy('city', 'circle') // Group by city and circle
      .orderBy(['city', 'circle']);
  
      // إنشاء خريطة للأصوات
      const cityCircleVoteMap = cityCircleVotes.reduce((acc, item) => {
        const key = `${item.city}-${item.circle}`;
        acc[key] = item.voted_count;
        return acc;
      }, {});
  
      // استعلام المرشحين المتشابهين
      const similarCandidates = await knex('candidates')
        .select('list', 'city', 'circle', 'list_votes')
        .whereNotNull('list')
        .groupBy('list', 'city', 'circle', 'list_votes')
        .having(knex.raw('COUNT(*)'), '>', 1)
        .orderBy('list');
  
  
        const districtDivisionRules = {
          ' دائرة أولى': 7,
          'دائرة ثانية': 7,
          'دائرة ثالثة': 10,
        };
  
  
  
      // حساب العتبة بناءً على البيانات المستردة
      const resultsWithThreshold = similarCandidates.map(candidate => {
        const key = `${candidate.city}-${candidate.circle}`;
        const totalVotes = cityCircleVoteMap[key] || 0;
        const threshold = totalVotes * 0.07;
        const divisionRule = districtDivisionRules[candidate.city] || 1; 
        const seatWeight = totalVotes / divisionRule;
        const status = candidate.list_votes > threshold ? 'pass' : 'fail'; 
        const listWeight = seatWeight > 0 ? candidate.list_votes / seatWeight : 0;
  
  
  
  ///  افصل الديسيمال عن الاعداد
     // افصل الديسيمال عن الأعداد
     const wholeNumberSeat = Math.floor(listWeight);
     const decimalPartSeat = listWeight - wholeNumberSeat;
  
  
    
  
  
        return {
          ...candidate,
          threshold,
          totalVotes ,
          status ,
          seatWeight ,
          listWeight ,
          wholeNumberSeat,
          decimalPartSeat
          
        };
      });
   // تجميع المرشحين حسب المدينة والدائرة
   const groupedCandidates = resultsWithThreshold.reduce((acc, candidate) => {
    const key = `${candidate.city}-${candidate.circle}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(candidate);
    return acc;
  }, {});
  
  
   
  
  const finalResults = Object.entries(groupedCandidates).map(([key, candidates]) => {
    const [city, circle] = key.split('-');
    const totalSeats = 7; // Adjust based on your requirements
    let remainingSeats = totalSeats;
  
    // Filter out candidates with 'fail' status
    const passingCandidates = candidates.filter(candidate => candidate.status === 'pass');
    const failingCandidates = candidates.filter(candidate => candidate.status === 'fail');
  
    // Distribute seats to passing candidates based on whole number
    passingCandidates.forEach(candidate => {
      candidate.allocatedSeats = Math.min(candidate.wholeNumberSeat, remainingSeats);
      remainingSeats -= candidate.allocatedSeats;
    });
  
    // Distribute remaining seats to passing candidates based on decimal part
    if (remainingSeats > 0) {
      const sortedByDecimal = [...passingCandidates].sort((a, b) => b.decimalPartSeat - a.decimalPartSeat);
      for (let i = 0; i < remainingSeats; i++) {
        if (sortedByDecimal[i]) {
          sortedByDecimal[i].allocatedSeats += 1;
        }
      }
      remainingSeats = 0; // All seats are now allocated
    }
  
    //  remaining seats to failing candidates 
    if (remainingSeats > 0) {
      const sortedByDecimalFails = [...failingCandidates].sort((a, b) => b.decimalPartSeat - a.decimalPartSeat);
      for (let i = 0; i < remainingSeats; i++) {
        if (sortedByDecimalFails[i]) {
          sortedByDecimalFails[i].allocatedSeats += 1;
        }
      }
    }
  
    return {
      city,
      circle,
      totalSeats,
      passingCandidates: passingCandidates.map(({ list, allocatedSeats, listWeight, wholeNumberSeat, decimalPartSeat, list_votes, threshold, status }) => ({
        list,
        allocatedSeats,
        listWeight,
        wholeNumberSeat,
        decimalPartSeat,
        list_votes,
        threshold,
        status
      })),
      failingCandidates: failingCandidates.map(({ list, allocatedSeats, listWeight, wholeNumberSeat, decimalPartSeat, list_votes, threshold, status }) => ({
        list,
        allocatedSeats,
        listWeight,
        wholeNumberSeat,
        decimalPartSeat,
        list_votes,
        threshold,
        status
      }))
    };
  });
   
  res.json(finalResults);
  
  
  // بصفحة الداشبورد والهوم  بنسترجعهم من هون 
  
  
  // function to retriave data 
  
  function logPassingCandidates(data) {
    data.forEach(entry => {
      console.log(`City: ${entry.city}`);
      if (entry.passingCandidates.length > 0) {
        console.log("Passing Candidates:");
        entry.passingCandidates.forEach(candidate => {
          console.log(`  List: ${candidate.list}`);
          console.log(`  Allocated Seats: ${candidate.allocatedSeats}`);
          console.log(`  List Weight: ${candidate.listWeight}`);
          console.log(`  Whole Number Seat: ${candidate.wholeNumberSeat}`);
          console.log(`  Decimal Part Seat: ${candidate.decimalPartSeat}`);
          console.log(`  List Votes: ${candidate.list_votes}`);
          console.log(`  Threshold: ${candidate.threshold}`);
          console.log(`  Status: ${candidate.status}`);
        });
      } else {
        console.log("No passing candidates.");
      }
      console.log(); 
    });
  }
  // بس استدعي اسم الفنكشن بالداش بجيب الداتا
  logPassingCandidates(finalResults);
  
  function logFallingCandidates(data) {
    data.forEach(entry => {
      console.log(`City: ${entry.city}`);
      if (entry.failingCandidates.length > 0) {
        console.log("Failing Candidates:");
        entry.failingCandidates.forEach(candidate => {
          console.log(`  List: ${candidate.list}`);
          console.log(`  Allocated Seats: ${candidate.allocatedSeats}`);
          console.log(`  List Weight: ${candidate.listWeight}`);
          console.log(`  Whole Number Seat: ${candidate.wholeNumberSeat}`);
          console.log(`  Decimal Part Seat: ${candidate.decimalPartSeat}`);
          console.log(`  List Votes: ${candidate.list_votes}`);
          console.log(`  Threshold: ${candidate.threshold}`);
          console.log(`  Status: ${candidate.status}`);
        });
      } else {
        console.log("No failing candidates.");
      }
      console.log(); // Adds a blank line for readability
    });
  }
  
  // للداش بورد 
  logFallingCandidates(finalResults);
  
  
  // Send the response with the final results
    } catch (err) {
      res.status(500).json({ error: 'Error retrieving similar candidates' });
    }
  });


  module.exports = router;
