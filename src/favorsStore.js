const favors = [
  {
    favor_id: 1,
    title: 'Help with Gardening',
    payment: 30,
    description: 'Looking for someone to help weed and plant flowers in a small garden.',
    posted: 'April 15, 2024',
    first_name: 'Alice',
    last_name: 'Johnson',
  },
  {
    favor_id: 2,
    title: 'Dog Walking',
    payment: 20,
    description: 'Need someone to walk my dog in the evenings.',
    posted: 'April 10, 2024',
    first_name: 'Bob',
    last_name: 'Smith',
  },
  {
    favor_id: 3,
    title: 'Grocery Shopping',
    payment: 15,
    description: 'Looking for someone to do grocery shopping for me.',
    posted: 'April 5, 2024',
    first_name: 'Charlie',
    last_name: 'Brown',
  },
  {
    favor_id: 4,
    title: 'Car Wash',
    payment: 25,
    description: 'Need someone to wash my car.',
    posted: 'April 1, 2024',
    first_name: 'David',
    last_name: 'Williams',
  },
];

export const getFavors = () => favors;

export const addFavor = (title, payment, description, firstName, lastName) => {
  const newFavor = {
    favor_id: favors.length + 1,
    title,
    payment,
    description,
    posted: new Date().toLocaleDateString(),
    first_name: firstName,
    last_name: lastName,
  };
  favors.push(newFavor);
  return newFavor;
};
