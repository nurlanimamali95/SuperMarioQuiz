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
      text: 'Which is the largest continent in the world?' ,
      answers: {
        a: 'Asia',
        b: 'Africa',
        c: 'North America',
        d: 'Europe'
      },
      correct: 'a',
      selected: null,
      info: "Asia is the largest continent in the world, covering approximately 30% of the Earth's land area. It is home to over 4.5 billion people and contains a diverse range of cultures, languages, and religions."
    },
    {
      text: 'What is the capital of Australia?',
      answers: {
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Canberra',
        d: 'Brisbane',
      },
      correct: 'c',
      selected: null,
      info: 'Canberra is the capital city of Australia. It is located in the Australian Capital Territory and is the seat of the federal government. The city has a population of around 400,000 people and is known for its modern architecture and beautiful parks.'
    },
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
      info: 'There are seven continents in the world: Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Each continent has its own unique features, such as geography, climate, and culture.'
    },{
      text: 'What is the longest river in the world?',
      answers: {
        a: 'Nile',
        b: 'Amazon',
        c: 'Yangtze',
        d: 'Mississippi',
      },
      correct: 'a',
      selected: null,
      info: 'The Nile River is the longest river in the world, stretching over 4,100 miles through 11 African countries. It is considered to be the lifeline of Egypt and has played a crucial role in the development of civilization in the region.'
    },{
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
    },{
      text: 'What is the smallest country in the world with an area of only 0.49 square kilometers?',
      answers: {
        a: 'Monaco',
        b: 'France',
        c: 'Vatican',
        d: 'Netherlands',
      },
      correct: 'c',
      selected: null,
      info: 'The smallest country in the world is Vatican City, with a landmass of just 0.49 square kilometers (0.19 square miles). Vatican City is an independent state surrounded by Rome. Vatican City is not the only small country located inside Italy.'
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
      image: "./src/images/azerbaijan.png",
      selected: null,
      info: "The flag has become the predominant and most recognizable symbol of Azerbaijan. The bright blue represents Azerbaijan's Turkic heritage, the red represents progress, and the green represents Islam, which is Azerbaijan's majority religion."
    },{
      text: 'Which of the following is a landlocked country, meaning it is not bordered by the sea or ocean?',
      answers: {
        a: 'Kazakhstan',
        b: 'Madagascar',
        c: 'Turkey',
        d: 'Russia',
      },
      correct: 'a',
      selected: null,
      info: 'Countries such as Kazakhstan, in Central Asia, that only have access to a landlocked sea such as the Caspian are considered landlocked.'
    },{
      text: 'Which of the following countries is often regarded as the oldest republic in the world?',
      answers: {
        a: 'Spain',
        b: 'Greece',
        c: 'Italy',
        d: 'San Marino',
      },
      correct: 'd',
      selected: null,
      info: 'San Marino claims to be the oldest constitutional republic in the world, founded on 3 September 301, by Marinus of Rab, a Christian stonemason fleeing the religious persecution of Roman Emperor Diocletian.'
    },{
      text: 'Who is the current king of the Netherlands?',
      answers: {
        a: 'Michael Jackson',
        b: 'Mark Rutte',
        c: 'Jan Peter',
        d: 'Willem-Alexander',
      },
      correct: 'd',
      selected: null,
      info: 'On 30 April 2013, King Willem-Alexander succeeded his mother as monarch. The King is married to Queen Máxima. The royal couple have three daughters, Princess Catharina-Amalia (the Princess of Orange), Princess Alexia and Princess Ariane.'
    },{
      text: 'Which country turned carrots orange?',
      answers: {
        a: 'England',
        b: 'Netherlands',
        c: 'China',
        d: 'Egypt',
      },
      correct: 'b',
      image: "./src/images/carrot.png",
      selected: null,
      info: 'The Netherlands is the country that turned carrots orange. In the 17th century, Dutch growers cultivated orange carrots as a tribute to William of Orange who led the struggle for Dutch independence.'
    },{
      text: 'What is the dish made of Rocky Mountain oysters?',
      answers: {
        a: 'Oyster',
        b: 'Fish',
        c: 'Meat balls',
        d: 'Cheese',
      },
      correct: 'c',
      image: "./src/images/oyster.png",
      selected: null,
      info: 'Rocky Mountain oysters, also known as mountain oysters or prairie oysters in Canada (French: animelles), is a dish made of bull testicles. The organs are often deep-fried after being skinned, coated in flour, pepper and salt, and sometimes pounded flat. The dish is most often served as an appetizer.'
    },{
      text: 'Which continent is one of the driest continents on Earth?',
      answers: {
        a: 'Africa',
        b: 'America',
        c: 'Antarctica',
        d: 'Europe',
      },
      correct: 'c',
      selected: null,
      info: 'Antarctica is one of the driest continents on Earth. The average annual rainfall at the South Pole over the past 30 years was just over 10 mm (0.4 in), classifying it as a polar desert.'
    },{
      text: 'What is the biggest fish in the ocean?',
      answers: {
        a: 'Whale shark',
        b: 'Barracuda',
        c: 'Blue whale',
        d: 'Killer whale',
      },
      correct: 'a',
      image: "./src/images/whale.png",
      selected: null,
      info: 'The biggest fish in the ocean is the whale shark, also known as Rhincodon typus. Despite their tremendous size and intimidating appearance, whale sharks are commonly docile and approachable.'
    },{
      text: 'What country does this flag belong to?',
      answers: {
        a: 'Bermuda Islands',
        b: 'South Georgia and South Sandwich Islands',
        c: 'State of Hawaii',
        d: "The Cayman Islands",
      },
      correct: 'c',
      image: "./src/images/hawaii.png",
      selected: null,
      info: "The flag of Hawaii (Hawaiian: Ka Hae Hawaiʻi) is the only U.S. state flag to include a foreign country's national flag. It has been used by the kingdom, protectorate, republic, and territory of Hawaii in addition to the current state design."
    }
  ],
};