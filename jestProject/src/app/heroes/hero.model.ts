export interface Hero {
  id: number;
  name: string;
  team: string;
}

const hero0: Hero = {
  id: 0,
  name: 'Spiderman',
  team: 'Avengers'
};
const hero1: Hero = {
  id: 1,
  name: 'Flash',
  team: 'Justice League'
};
const hero2: Hero = {
  id: 2,
  name: 'Ironman',
  team: 'Avengers'
};
const hero3: Hero = {
  id: 3,
  name: 'Superman',
  team: 'Justice League'
};
const hero4: Hero = {
  id: 4,
  name: 'Hulk',
  team: 'Avengers'
};
const hero5: Hero = {
  id: 5,
  name: 'Batman',
  team: 'Justice League'
};

export const heroes: Hero[] = [hero0, hero1, hero2, hero3, hero4, hero5];
