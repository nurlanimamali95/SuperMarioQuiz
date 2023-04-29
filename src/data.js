/* Program Data
​
  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
​
  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
export const quizData = {
  currentQuestionIndex: 0,
  score: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'How many continents are there in the world?',
      answers: {
        a: '4',
        b: '5',
        c: '6',
        d: '7',
      },
      correct: 'd',
      selected: null,
      info: 'There are seven continents in the world: Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Each continent has its own unique features, such as geography, climate, and culture.',
    },
    {
      text: 'What is the longest river in the world?',
      answers: {
        a: 'Nile',
        b: 'Amazon',
        c: 'Yangtze',
        d: 'Mississippi',
      },
      correct: 'a',
      selected: null,
      info: 'The Nile River is the longest river in the world, stretching over 4,100 miles through 11 African countries. It is considered to be the lifeline of Egypt and has played a crucial role in the development of civilization in the region.',
    },
    {
      text: 'What is the largest world religion?',
      answers: {
        a: 'Christianity',
        b: 'Islam',
        c: 'Hinduism',
        d: 'Buddhism',
      },
      correct: 'a',
      selected: null,
      info: 'Christianity is the largest world religion, with approximately 2.4 billion followers worldwide. It is a monotheistic religion based on the teachings of Jesus Christ and has had a significant impact on world history and culture.',
    },
    {
      text: 'What is the smallest country in the world with an area of only 0.49 square kilometers?',
      answers: {
        a: 'Monaco',
        b: 'France',
        c: 'Vatican',
        d: 'Netherlands',
      },
      correct: 'c',
      selected: null,
      info: 'The smallest country in the world is Vatican City, with a landmass of just 0.49 square kilometers (0.19 square miles). Vatican City is an independent state surrounded by Rome. Vatican City is not the only small country located inside Italy.',
    },
    {
      text: 'What country does this flag belong to?',
      answers: {
        a: 'Andorra',
        b: 'Azerbaijan',
        c: 'Austria',
        d: 'Armenia',
      },
      correct: 'b',
      image: './src/images/azerbaijan.png',
      selected: null,
      info: "The bright blue represents Azerbaijan's Turkic heritage, the red represents progress, and the green represents Islam, which is Azerbaijan's majority religion.",
    },
    {
      text: 'Who is the current king of the Netherlands?',
      answers: {
        a: 'Michael Jackson',
        b: 'Mark Rutte',
        c: 'Jan Peter',
        d: 'Willem-Alexander',
      },
      correct: 'd',
      selected: null,
      info: 'On 30 April 2013, King Willem-Alexander succeeded his mother as monarch. The King is married to Queen Máxima. The royal couple have three daughters, Princess Catharina-Amalia (the Princess of Orange), Princess Alexia and Princess Ariane.',
    },
    {
      text: 'Which country turned carrots orange?',
      answers: {
        a: 'England',
        b: 'Netherlands',
        c: 'China',
        d: 'Egypt',
      },
      correct: 'b',
      image: './src/images/carrot.png',
      selected: null,
      info: 'The Netherlands is the country that turned carrots orange. In the 17th century, Dutch growers cultivated orange carrots as a tribute to William of Orange who led the struggle for Dutch independence.',
    },
    {
      text: 'Which continent is one of the driest continents on Earth?',
      answers: {
        a: 'Africa',
        b: 'America',
        c: 'Antarctica',
        d: 'Europe',
      },
      correct: 'c',
      selected: null,
      info: 'Antarctica is one of the driest continents on Earth. The average annual rainfall at the South Pole over the past 30 years was just over 10 mm (0.4 in), classifying it as a polar desert.',
    },
    {
      text: 'What is the biggest fish in the ocean?',
      answers: {
        a: 'Whale shark',
        b: 'Barracuda',
        c: 'Blue whale',
        d: 'Killer whale',
      },
      correct: 'a',
      image: './src/images/whale.png',
      selected: null,
      info: 'The biggest fish in the ocean is the whale shark, also known as Rhincodon typus. Despite their tremendous size and intimidating appearance, whale sharks are commonly docile and approachable.',
    },
    {
      text: 'Which country`s flag do you see in the picture?',
      answers: {
        a: 'Bermuda Islands',
        b: 'S.Georgia and S.S.Islands',
        c: 'State of Hawaii',
        d: 'The Cayman Islands',
      },
      correct: 'c',
      image: './src/images/hawaii.png',
      selected: null,
      info: "The flag of Hawaii is the only U.S. state flag to include a foreign country's national flag. It's been used by the kingdom, protectorate, republic, and territory of Hawaii in addition to the current state design.",
    },
  ],
};
