const user_data = [
  {
      id:1,
      name: "Michael Choi",
      createdAt: "23-01-2013",
      message: "This is my message. This is my message. This is my message. This is my message."
  },
  {
      id:2,
      name: "Jan Lange",
      createdAt: "14-05-2018",
      message: "Hello world! This is Sarah message to everyone out there."
  },
  {
      id:2,
      name: "Jhone Kieeve",
      createdAt: "04-07-2019",
      message: "Greetings! Hope everyone is doing well. This is David’s update."
    },
    {
      id:3,
      name: "Yunilla Worlker",
      createdAt: "27-10-2017",
      message: "Hi all! Excited to share my thoughts with the group today."
    },
    {
      Id:4,       
      name: "Manghoom Smith",
      createdAt: "03-03-2020",
      message: "A quick update from me! Looking forward to connecting."
    },
    {
      id:5,
      name: "Jannet Magadie",
      createdAt: "12-08-2022",
      message: "Just checking in! Happy to be part of this discussion."
    }
          ];



          data.sort((a, b) => {
            const dateA = new Date(a.createdAt.split('-').reverse().join('-'));
            const dateB = new Date (b.createdAt.split('-').reverse().join('-'));
            return dateB - dateA; 
        });
        index.exports = data

//Show all messages, showing the most recent message on the top

    

