function mockData(models) {
  models.entity['Professor'].create({
    name: 'Fernando',
    email: 'fernando@gmail.com',
    password: 'senha123'
  })

  models.entity['Discipline'].create({name:'Matemática'})
  models.entity['Discipline'].create({name:'Português'})
  models.entity['Discipline'].create({name:'História'})

  models.entity['DisciplineField'].create({name:'Geometria', discipline: 1})
  models.entity['DisciplineField'].create({name:'Trigonometria', discipline: 1})
  models.entity['DisciplineField'].create({name:'Álgebra', discipline: 1})

  models.entity['Class'].create({name:'1A'})
  models.entity['Class'].create({name:'1B'})
  models.entity['Class'].create({name:'2A'})
  models.entity['Class'].create({name:'2B'})

  models.entity['Student'].create({
    id: 1350153,
    name: 'Felipe Lopes',
    class: 1
  })

  models.entity['QuestionSource'].create({source:'ENEM'})
  models.entity['QuestionSource'].create({source:'FUVEST'})

  for(let i=1; i <= 40; i++) {
    models.entity['Question'].create({
      question: 'Responda ' + i,
      disciplineField: 1,
      year: 2016,
      level: 2,
      source: 1
    });
  }

  let j = 1;
  for(let i=1; i <= 200; i++) {
    if(i%5 == 0) j++;
    models.entity['QuestionOption'].create({
      option: 'Resposta ' + i,
      question: j
    });
  }

  models.entity['Exam'].create({
    class: 1,
    discipline: 1,
    title: 'Avaliação 1',
    professor: 1
  });

  models.entity['Exam'].create({
    class: 2,
    discipline: 1,
    title: 'Avaliação 2',
    professor: 1
  });

  models.entity['Exam'].create({
    class: 3,
    discipline: 1,
    title: 'Avaliação 3',
    professor: 1
  });

  models.entity['Exam'].create({
    class: 4,
    discipline: 1,
    title: 'Avaliação 4',
    professor: 1
  });

  j = 1;
  for(let i=1; i <= 40; i++) {
    if(i%11 == 0) j++;
    models.entity['ExamQuestion'].create({
      exam: j,
      question: i
    });
  }
}

module.exports = mockData;
