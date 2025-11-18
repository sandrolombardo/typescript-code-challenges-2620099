const personDefinition = {
  name: "David",
  age: 2000,
  gender: "male",
};

const personExtension = {
  hobbies: ["Klettern"],
};

type WantedType = Pick<typeof personDefinition, "name"> &
Partial<Pick<typeof personExtension, "hobbies">>;

const newObject: WantedType = {
  name: 'Sandro'
}

export {};
