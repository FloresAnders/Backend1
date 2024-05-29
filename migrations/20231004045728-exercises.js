'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GrammarExercises', [
      {
        correct: 'She is a talented musician.',
        incorrect: 'She am a talented musician.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The dog barked loudly.',
        incorrect: 'The dog barked loud.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'I have two sisters and one brother.',
        incorrect: 'I have two sister and one brother.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'He always drinks coffee in the morning.',
        incorrect: 'He always drink coffee in the morning.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They are going to the park this afternoon.',
        incorrect: 'They is going to the park this afternoon.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The book was very interesting.',
        incorrect: 'The book was very interest.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'My parents are coming to visit next week.',
        incorrect: 'My parents is coming to visit next week.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'I\'m going to the gym after work.',
        incorrect: 'I\'m going to the gym after works.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She sang beautifully at the concert.',
        incorrect: 'She sang beautiful at the concert.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The movie was too long for my taste.',
        incorrect: 'The movie was too much long for my taste.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'He is a doctor at the local hospital.',
        incorrect: 'He is a doctor on the local hospital.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'We need to buy some milk and bread at the store.',
        incorrect: 'We need to buy some milks and breads at the store.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She loves to read books about history.',
        incorrect: 'She loves to read books about histories.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The restaurant serves delicious food.',
        incorrect: 'The restaurant serves delicious foods.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They watched a scary movie last night.',
        incorrect: 'They watched a scary movie yesterday night.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'My favorite color is blue.',
        incorrect: 'My favorite color are blue.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'He is a great basketball player.',
        incorrect: 'He is a great basketballer.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'I\'m going to the beach this weekend.',
        incorrect: 'I\'m going to the beaches this weekend.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She is a kind and generous person.',
        incorrect: 'She is a kind and generous people.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The train arrived on time.',
        incorrect: 'The train arrived in time.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They are going on vacation to Hawaii next month.',
        incorrect: 'They are going on vacation at Hawaii next month.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She always wears a hat when it\'s sunny outside.',
        incorrect: 'She always wear a hat when it\'s sunny outside.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The concert was amazing!',
        incorrect: 'The concert was amaze!',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'He is an excellent chef.',
        incorrect: 'He is an excellent cooker.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'I prefer to drink water instead of soda.',
        incorrect: 'I prefer to drink waters instead of soda.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They went to the museum yesterday.',
        incorrect: 'They went to the museum last day.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She has a beautiful voice.',
        incorrect: 'She has a beautiful voices.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'We need to clean the house before the guests arrive.',
        incorrect: 'We need to clean the house before the guests arrives.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'He drove his car to work this morning.',
        incorrect: 'He drived his car to work this morning.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The cake tasted delicious.',
        incorrect: 'The cake tasted deliciously.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They are planning to go camping next weekend.',
        incorrect: 'They are planning to go camp next weekend.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She played the piano beautifully at the recital.',
        incorrect: 'She played the piano beautiful at the recital.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'We need to buy some eggs and cheese at the grocery store.',
        incorrect: 'We need to buy some eggs and cheeses at the grocery store.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'He is a talented artist.',
        incorrect: 'He is a talented art.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They watched a funny movie last night.',
        incorrect: 'They watched a funny movie yesterday night.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'My favorite food is pizza.',
        incorrect: 'My favorite food are pizzas.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She is an experienced teacher.',
        incorrect: 'She is an experienced teach.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'I\'m going to the mall this afternoon.',
        incorrect: 'I\'m going to the malls this afternoon.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The concert was very loud.',
        incorrect: 'The concert was very loudly.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They are planning to visit New York City next summer.',
        incorrect: 'They are planning to visit New York City on next summer.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The flowers in the garden are beautiful.',
        incorrect: 'The flowers in the garden is beautiful.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'He is a successful businessman.',
        incorrect: 'He is a successful business.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'We need to buy some apples and oranges at the market.',
        incorrect: 'We need to buy some apples and orange at the market.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She loves to watch movies on Netflix.',
        incorrect: 'She loves to watch movies on Netflixy.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They went skiing in the mountains last winter.',
        incorrect: 'They went skiing in the mountains in last winter.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'My favorite sport is soccer.',
        incorrect: 'My favorite sport are soccer.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'She is a talented dancer.',
        incorrect: 'She is a talented dance.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'I\'m going to the concert tonight.',
        incorrect: 'I\'m going to the concert on tonight.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'The pizza tasted great!',
        incorrect: 'The pizza tasted greatly!',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correct: 'They are planning to go on a road trip next month.',
        incorrect: 'They are planning to go on a road trip in next month.',
        points: 1,
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GrammarExercises', null, {});
  }
};