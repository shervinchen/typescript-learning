enum Gender {
  Male,
  Female
}

interface Person {
  gender: Gender;
}

function merry(husband: Person, wife: Person): [Person, Person] {
  if (husband.gender !== wife.gender) {
    return [husband, wife];
  } else {
    throw new Error("same gender");
  }
}

const husband = {
  gender: Gender.Male,
};
const wife = {
  gender: Gender.Female,
};
console.log(merry(husband, wife));
