let felix = {
  name: "Felix",
  height: "6'2\"",
  hair: {
    shade: "brown",
    cut: "short"
  },
  eyeColor: "brown",
  from: "Bronx, New York",
  livingLocal: "Boise, Idaho",
  age: 30,
  married: true,
  wife: "Rachel Hays",
  hasPets: true,
  pet: {
    name: "Audrey",
    type: "dog",
    breed: "pitbull",
    color: "white",
  },
  hobbies: [
    "making beats",
    "playing guitar",
    "listening to records"
  ],
  favShow: "Dragon Ball",
  underGradSchool: "SUNY New Paltz",
  gradSchool: "CUNY Hunter College",
  familyMembers: [
    {
      member: "Mom",
      name: "Milagros"
    },
    {
      member: "Dad",
      name: "Feliciano"
    },
    {
      member: "Sister",
      name: "Melissa"
    }
  ]
}

function tellStory(object) {
  let is = " ";
  let who = " ";
  let petsYesOrNo = " ";

  if (object.married == true) {
    is = "married";
    who = felix.wife
  } else {
    is = "not married";
    who = "anyone"
  }

  if (object.hasPets == true) {
    petsYesOrNo = "have a " + felix.pet.type + " named " + felix.pet.name + ". She's a " + felix.pet.color + " " + felix.pet.breed;
  } else {
    petsYesOrNo = "do not have a pet. "
  }

  console.log(
    "My name is " + felix.name + ". " + "I'm originally from " + felix.from + ". " +
    "I currently live in " + felix.livingLocal + ". " +
    "I'm " + felix.height + " and I'm " + felix.age + " years old. " +
    "I have " + felix.hair.cut + " " + felix.hair.shade + " hair and " + felix.eyeColor + "eyes. " +
    "I am " + is + " to " + who + ". " +
    "I am from a family of " + (felix.familyMembers.length + 1) + "." +
    " My mother's name is " + felix.familyMembers[0].name + ". My father's name is " + felix.familyMembers[1].name + ". My sister's name is " + felix.familyMembers[2].name + ". " +
    "My hobbies include " + felix.hobbies[0] + ", " + felix.hobbies[1] + ", " + felix.hobbies[2] + ". " +
    "My favorite show is " + felix.favShow + ". " +
    "I " + petsYesOrNo + ". " +
    "I went to college at " + felix.underGradSchool + " and " + felix.gradSchool + "."
  );
}

tellStory(felix)

