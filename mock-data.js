function mockData(models) {
  models.entity['Professor'].create({
    name: 'Fernando',
    email: 'fernando@gmail.com',
    password: 'senha123'
  })

  models.entity['Discipline'].create({name:'Matemática'})
  models.entity['Discipline'].create({name:'Português'})
  models.entity['Discipline'].create({name:'História'})

  models.entity['DisciplineField'].create({name:'Geometria Plana', discipline: 1})
  models.entity['DisciplineField'].create({name:'Porcentagem', discipline: 1})
  models.entity['DisciplineField'].create({name:'Regra de Três', discipline: 1})

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

  models.entity['Exam'].create({
    class: 1,
    discipline: 1,
    title: 'Avaliação 1',
    professor: 1
  })

  models.entity['Exam'].create({
    class: 2,
    discipline: 1,
    title: 'Avaliação 2',
    professor: 1
  })

  models.entity['Exam'].create({
    class: 3,
    discipline: 1,
    title: 'Avaliação 3',
    professor: 1
  })

  models.entity['Exam'].create({
    class: 4,
    discipline: 1,
    title: 'Avaliação 4',
    professor: 1
  })

  let questions = [
    {
      disciplineField: 1, question: 'Temos um triângulo equilátero de lado 6cm. Qual é o perímetro deste triângulo?',
      options: [
        {option: '18cm'},
        {option: '20cm'},
        {option: '22cm'},
        {option: '24cm'},
        {option: '25cm'}
      ]
    },
    {
      disciplineField: 1, question: 'Um trapézio tem a base menor igual a 2, a base maior igual a 3 e a altura igual a 10. Qual a área deste trapézio?',
      options: [
        {option: '25cm²'},
        {option: '20cm²'},
        {option: '32cm²'},
        {option: '22cm²'},
        {option: '27cm²'}
      ]
    },
    {
      disciplineField: 1, question: 'Sabendo que a área de um quadrado é 36cm², qual é seu perímetro?',
      options: [
        {option: '24cm'},
        {option: '26cm'},
        {option: '18cm'},
        {option: '30cm'},
        {option: '20cm'}
      ]
    },
    {
      disciplineField: 1, question: 'Qual a área e o perímetro (em metros) de um retângulo sabendo que suas medidas são 25m por 12m?',
      options: [
        {option: '300m² e 74m'},
        {option: '140m² e 48m'},
        {option: '140m² e 58m'},
        {option: '150m² e 74m'},
        {option: '300m² e 70m'}
      ]
    },
    {
      disciplineField: 2, question: 'A quantia de R$ 1143,00 representa qual porcentagem de R$ 2540,00?',
      options: [
        {option: '45%'},
        {option: '50%'},
        {option: '42%'},
        {option: '39%'},
        {option: '47%'}
      ]
    },
    {
      disciplineField: 2, question: 'Sabe-se que 37,5% de uma distância x corresponde a 600 m. Qual a distância x?',
      options: [
        {option: '1600m'},
        {option: '2000m'},
        {option: '1200m'},
        {option: '1400m'},
        {option: '1800m'}
      ]
    },
    {
      disciplineField: 2, question: 'Uma escola tem 25 professores, dos quais 24% ensinam Matemática. Quantos professores ensinam Matemática nessa escola?',
      options: [
        {option: '6 professores'},
        {option: '7 professores'},
        {option: '8 professores'},
        {option: '5 professores'},
        {option: '9 professores'}
      ]
    },
    {
      disciplineField: 2, question: 'Na compra de um aparelho obtive desconto de 15% por ter feito o pagamento à vista. Se paguei R$ 102,00 reais pelo aparelho, qual era seu o preço original?',
      options: [
        {option: '120 reais'},
        {option: '112 reais'},
        {option: '115 reais'},
        {option: '124 reais'},
        {option: '130 reais'}
      ]
    },
    {
      disciplineField: 3, question: 'Três caminhões transportam 200m³ de areia. Para transportar 1600m³ de areia, quantos caminhões iguais a esse seriam necessários?',
      options: [
        {option: '24 caminhões'},
        {option: '20 caminhões'},
        {option: '26 caminhões'},
        {option: '30 caminhões'},
        {option: '28 caminhões'}
      ]
    },
    {
      disciplineField: 3, question: 'A comida que restou para 3 náufragos seria suficiente para alimentá-los por 12 dias. Um deles resolveu saltar e tentar chegar em terra nadando. Com um náufrago a menos, qual será a duração dos alimentos?',
      options: [
        {option: '18 dias'},
        {option: '15 dias'},
        {option: '20 dias'},
        {option: '22 dias'},
        {option: '25 dias'}
      ]
    },
    {
      disciplineField: 3, question: 'Para atender todas as ligações feitas a uma empresa são utilizadas 3 telefonistas, atendendo cada uma delas, em média, a 125 ligações diárias. Aumentando-se para 5 o número de telefonistas, quantas ligações atenderá diariamente cada uma delas em média?',
      options: [
        {option: '75 ligações'},
        {option: '65 ligações'},
        {option: '70 ligações'},
        {option: '80 ligações'},
        {option: '85 ligações'}
      ]
    },
    {
      disciplineField: 3, question: 'Um pintor, trabalhando 8 horas por dia, durante 10 dias, pinta 7.500 telhas. Quantas horas por dia deve trabalhar esse pintor para que ele possa pintar 6.000 telhas em 4 dias?',
      options: [
        {option: '16 horas'},
        {option: '10 horas'},
        {option: '13 horas'},
        {option: '19 horas'},
        {option: '22 horas'}
      ]
    },
    {
      disciplineField: 3, question: 'Em uma disputa de tiro, uma catapulta, operando durante 6 baterias de 15 minutos cada, lança 300 pedras. Quantas pedras lançará em 10 baterias de 12 minutos cada?',
      options: [
        {option: '400 pedras'},
        {option: '300 pedras'},
        {option: '350 pedras'},
        {option: '450 pedras'},
        {option: '500 pedras'}
      ]
    },
    {
      disciplineField: 3, question: 'Dez guindastes móveis carregam 200 caixas num navio em 18 dias de 8 horas de trabalho. Quantas caixas serão carregadas em 15 dias, por 6 guindastes, trabalhando 6 horas por dia?',
      options: [
        {option: '75 caixas'},
        {option: '65 caixas'},
        {option: '70 caixas'},
        {option: '80 caixas'},
        {option: '85 caixas'}
      ]
    },
    {
      disciplineField: 3, question: 'Com a velocidade de 75 Km/h, um ônibus faz um trajeto em 40 min. Devido a um congestionamento, esse ônibus fez o percurso de volta em 50 min. Qual a velocidade média desse ônibus?',
      options: [
        {option: '60km/h'},
        {option: '50km/h'},
        {option: '45km/h'},
        {option: '70km/h'},
        {option: '58km/h'}
      ]
    },
    {
      disciplineField: 3, question: 'Sabendo que os números a, 12 e 15 são diretamente proporcionais aos números 28, b e 20, determine os números a e b.',
      options: [
        {option: '16'},
        {option: '10'},
        {option: '15'},
        {option: '18'},
        {option: '20'}
      ]
    },
    {
      disciplineField: 3, question: 'Uma tábua com 1,5 m de comprimento foi colocada na vertical em relação ao chão e projetou uma sombra de 53 cm. Qual seria a sombra projetada no mesmo instante por um poste que tem 10,5 m de altura?',
      options: [
        {option: '371cm'},
        {option: '352cm'},
        {option: '365cm'},
        {option: '387cm'},
        {option: '390cm'}
      ]
    },
    {
      disciplineField: 3, question: 'Uma certa quantidade de suco foi colocado em latas de 2 litros cada uma, obtendo-se assim 60 latas. Se fossem usadas latas de 3 litros, quantas latas seriam necessárias para colocar a mesma quantidade de suco?',
      options: [
        {option: '40 latas'},
        {option: '35 latas'},
        {option: '30 latas'},
        {option: '20 latas'},
        {option: '50 latas'}
      ]
    }
  ]

  for(let i=0; i < questions.length; i++) {
    let questionId = i + 1

    models.entity['Question'].create({
      question: questions[i].question,
      disciplineField: questions[i].disciplineField,
    })

    models.entity['ExamQuestion'].create({
      exam: 1,
      question: questionId
    })

    for(let j=0; j < 5; j++) {
      models.entity['QuestionOption'].create({
        option: questions[i].options[j].option,
        question: questionId
      })
    }

    let optionId = 1 + i * 5

    models.entity['QuestionAnswer'].create({
      question: questionId,
      option: optionId
    })
  }
}

module.exports = mockData
