const student = {
    firstname: "Jhon",
    lastname: "Snow",
    ielts_scores: {
      speaking: 8,
      listening: 7.5,
      writing: 8.5,
      reading: 7.0
    }
  };
  
  const {
    firstname,
    lastname,
    country,
    ielts_scores: { speaking, listening, writing, reading }
  } = student;
  
  console.log(`${firstname} ${lastname}`); //"Jhon Snow"
  console.log(`
      speaking:${speaking},
      listening:${listening},
      writing:${writing},
      reading:${reading}
  `);