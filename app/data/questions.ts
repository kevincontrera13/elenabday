export interface Question {
  text: string
  answers: string[]
  correctAnswer: string
  photoDescription: string
}

export const questions: Question[] = [
  {
    text: "What is the thingy you steal from me the most?",
    answers: ["bussis", "black leather jacket", "blanket", "nothing, i never steal"],
    correctAnswer: "black leather jacket",
    photoDescription: "eres una maldita ladrona"
  },
  {
    text: "What was the song we danced to for the first time?",
    answers: ["traicionera", "we never dance", "El Tiburón", "Schlaf ein"],
    correctAnswer: "El Tiburón",
    photoDescription: "I am just stepping.."
  },
  {
    text: "What is your favorite Colombian dish from the list?",
    answers: ["your BF's D***", "arepas de queso", "Manguiño", "aguardiente"],
    correctAnswer: "Manguiño",
    photoDescription: "Manguiño"
  },
  {
    text: "what is yours BF favorite Austrian word?",
    answers: ["Genau", "Geh, Komnsinooo!", "Oida", "Reparaturseidl"],
    correctAnswer: "Geh, Komnsinooo!",
    photoDescription: "Enjoying the sun"
  },
  {
    text: "Where were we the drunkest together?",
    answers: ["Machete", "Girona 1st time", "Angela's Weeding", "Berlin"],
    correctAnswer: "Girona 1st time",
    photoDescription: "I wasn't that drunk"
  },
  {
    text: "What is our favorite restaurant?",
    answers: ["Ethiopian", "Honest Greens", "Parking pita", "Baozi bar"],
    correctAnswer: "Ethiopian",
    photoDescription: "its soo fucking good"
  },
  {
    text: "What is the thing you always do but never admit?",
    answers: ["the correct answer is the last one", "the correct answer is the last one", "the correct answer is the last one", "nap watching a series"],
    correctAnswer: "nap watching a series",
    photoDescription: "Dancing to The Strokes"
  },
  {
    text: "What's the coolest thing that happened this year?",
    answers: ["stretching gordo", "living in bcn", "the flat", "the new job"],
    correctAnswer: "stretching gordo",
    photoDescription: "Que Gordooo"
  },
  {
    text: "¿Me amas?",
    answers: ["con todo mi corazon y alma", "un pochito", "asofuckingsinoo un montonsino mi maldita", "Claro"],
    correctAnswer: "asofuckingsinoo un montonsino mi maldita",
    photoDescription: "That much"
  }
]

