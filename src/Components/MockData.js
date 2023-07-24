// frontend/mockData.js

// Generate mock data for users
const users = [
    { id: 1, name: 'Nico J.', location: 'Brooklyn' },
    { id: 2, name: 'Chelsea R.', location: 'Manhattan' },
    { id: 3, name: 'Belcalis A.', location: 'Bronx' },
    // Add more users as needed
  ];
  
  // Generate mock data for posts
  const posts = [
    {
      id: 1,
      userId: 1,
      title: 'Hurricane Alert in NYC',
      content: 'A hurricane of massive proportions is currently brewing and heading towards NYC. Everyone is advised to take necessary precautions.',
      createdAt: '2023-08-01 10:00:00',
    },
    {
      id: 2,
      userId: 2,
      title: 'Major flooding in Downtown Manhattan',
      content: 'The city is experiencing massive floods due to the hurricane. Streets are underwater and evacuation procedures are in place.',
      createdAt: '2023-08-01 12:00:00',
    },
    // Add more posts as needed
  ];
  
  // Generate mock data for comments
  const comments = [
    {
      id: 1,
      userId: 2,
      postId: 1,
      content: 'We are preparing for the worst. The wind is picking up here in Brooklyn.',
      createdAt: '2023-07-21 10:00:00',
    },
    {
      id: 2,
      userId: 3,
      postId: 2,
      content: 'Its a complete disaster. Never seen anything like this before.',
      createdAt: '2023-07-21 10:30:00',
    },
    // Add more comments as needed
  ];
  
  export { users, posts, comments };
  