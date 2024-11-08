const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Goals = db.goals;

const Rewards = db.rewards;

const ActivitiesData = [
  {
    name: 'Math Homework',

    description: 'Complete the math exercises in the workbook.',

    type: 'offline',

    // type code here for "relation_many" field
  },

  {
    name: 'Reading Time',

    description: 'Read a chapter from the assigned book.',

    type: 'study',

    // type code here for "relation_many" field
  },

  {
    name: 'Outdoor Play',

    description: 'Play outside with friends for an hour.',

    type: 'break',

    // type code here for "relation_many" field
  },

  {
    name: 'Art Project',

    description: 'Create a painting using watercolors.',

    type: 'break',

    // type code here for "relation_many" field
  },

  {
    name: 'Science Experiment',

    description: 'Conduct a simple science experiment at home.',

    type: 'offline',

    // type code here for "relation_many" field
  },
];

const GoalsData = [
  {
    name: 'Complete Math Workbook',

    start_date: new Date('2023-10-01T08:00:00Z'),

    end_date: new Date('2023-10-07T17:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    name: 'Read Two Books',

    start_date: new Date('2023-10-05T09:00:00Z'),

    end_date: new Date('2023-10-20T18:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    name: 'Finish Art Project',

    start_date: new Date('2023-10-10T10:00:00Z'),

    end_date: new Date('2023-10-15T16:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    name: 'Science Fair Preparation',

    start_date: new Date('2023-10-12T11:00:00Z'),

    end_date: new Date('2023-10-25T15:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    name: 'Outdoor Activity Challenge',

    start_date: new Date('2023-10-15T12:00:00Z'),

    end_date: new Date('2023-10-22T14:00:00Z'),

    // type code here for "relation_one" field
  },
];

const RewardsData = [
  {
    title: 'Extra Playtime',

    description: 'Earn an extra 30 minutes of playtime.',

    points: 50,

    // type code here for "relation_many" field
  },

  {
    title: 'Movie Night',

    description: 'Watch a movie of your choice.',

    points: 100,

    // type code here for "relation_many" field
  },

  {
    title: 'New Book',

    description: 'Receive a new book to read.',

    points: 75,

    // type code here for "relation_many" field
  },

  {
    title: 'Art Supplies',

    description: 'Get new art supplies for your projects.',

    points: 60,

    // type code here for "relation_many" field
  },

  {
    title: 'Game Time',

    description: 'Play a video game for an hour.',

    points: 80,

    // type code here for "relation_many" field
  },
];

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateGoalWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Goal0 = await Goals.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Goal0?.setUser) {
    await Goal0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Goal1 = await Goals.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Goal1?.setUser) {
    await Goal1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Goal2 = await Goals.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Goal2?.setUser) {
    await Goal2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Goal3 = await Goals.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Goal3?.setUser) {
    await Goal3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Goal4 = await Goals.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Goal4?.setUser) {
    await Goal4.setUser(relatedUser4);
  }
}

// Similar logic for "relation_many"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Goals.bulkCreate(GoalsData);

    await Rewards.bulkCreate(RewardsData);

    await Promise.all([
      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateGoalWithUser(),

      // Similar logic for "relation_many"
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('goals', null, {});

    await queryInterface.bulkDelete('rewards', null, {});
  },
};
