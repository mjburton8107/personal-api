var user = {
  name: 'Michael Burton',
  location: 'Salt Lake City',
  occupations: ['capital projects analyst', 'teacher', 'medical salesman', 'ad salesman', 'visionary', 'millionaire'],
  hobbies: [
    {
      name: 'reading',
      type: 'past'
    },
    {
      name: 'crossfit',
      type: 'current'
    },
    {
      name: 'coding',
      type: 'current'
    }
  ],
  family: [
    {
      name: 'Kris Burton',
      relation: 'Mother',
      gender: 'female'
    },
    {
      name: 'Kirt Burton',
      relation: 'Father',
      gender: 'male'
    },{
      name: 'Heidi Hawkins',
      relation: 'fiance',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'beerhive',
      type: 'bar',
      rating: 10
    },
    {
      name: 'takahashi',
      type: 'sushi',
      rating: 8
    },
    {
      name: 'protein house',
      type: 'healthy',
      rating: 7
    }
  ]
};

module.exports = user;
