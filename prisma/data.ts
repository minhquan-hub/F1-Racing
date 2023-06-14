const teams = [
  {
    team_name: "quan",
    base: "ok",
    team_chief: "ok",
  },
  {
    team_name: "quan1",
    base: "ok1",
    team_chief: "ok1",
  },
];

const drivers = [
  {
    full_name: "quan",
    avatar: "http",
    country: "VietNam",
    date_of_birth: new Date("2000-02-21"),
    place_of_birth: "VietNam",
    rank: 2,
  },
  {
    full_name: "quan",
    avatar: "http",
    country: "VietNam",
    date_of_birth: new Date("2000-02-21"),
    place_of_birth: "VietNam",
    rank: 2,
  },
];

const teamDrivers = [
  {
    team_id: 1,
    driver_id: 1,
  },
  {
    team_id: 1,
    driver_id: 2,
  },
];

const races = [
  {
    grand_prix: "Bahrain",
    race_date: new Date("2023-03-05"),
  },
  {
    grand_prix: "Saudi Arabia",
    race_date: new Date("2023-03-19"),
  },
  {
    grand_prix: "Australia",
    race_date: new Date("2023-04-30"),
  },
  {
    grand_prix: "Azerbaijan",
    race_date: new Date("2023-04-30"),
  },
  {
    grand_prix: "Miami",
    race_date: new Date("2023-05-07"),
  },
  {
    grand_prix: "Monaco",
    race_date: new Date("2023-05-28"),
  },
  {
    grand_prix: "Spain",
    race_date: new Date("2023-06-04"),
  },
  {
    grand_prix: "Monaco",
    race_date: new Date("2023-05-28"),
  },
  {
    grand_prix: "Bahrain",
    race_date: new Date("2022-03-20"),
  },
  {
    grand_prix: "Saudi Arabia",
    race_date: new Date("2022-03-27"),
  },
  {
    grand_prix: "Australia",
    race_date: new Date("2022-04-10"),
  },
  {
    grand_prix: "Emilia Romagna",
    race_date: new Date("2022-04-24"),
  },
  {
    grand_prix: "Miami",
    race_date: new Date("2022-05-08"),
  },
  {
    grand_prix: "Spain",
    race_date: new Date("2022-05-22"),
  },
  {
    grand_prix: "Monaco",
    race_date: new Date("2022-05-29"),
  },
  {
    grand_prix: "Azerbaijan",
    race_date: new Date("2022-06-12"),
  },
  {
    grand_prix: "Canada",
    race_date: new Date("2022-06-19"),
  },
  {
    grand_prix: "Great Britain",
    race_date: new Date("2022-07-03"),
  },
  {
    grand_prix: "Austria",
    race_date: new Date("2022-07-10"),
  },
  {
    grand_prix: "France",
    race_date: new Date("2022-07-24"),
  },
  {
    grand_prix: "Hungary",
    race_date: new Date("2022-07-31"),
  },
  {
    grand_prix: "Belgium",
    race_date: new Date("2022-08-28"),
  },
  {
    grand_prix: "Netherlands",
    race_date: new Date("2022-09-04"),
  },
  {
    grand_prix: "Italy",
    race_date: new Date("2022-09-11"),
  },
  {
    grand_prix: "Singapore",
    race_date: new Date("2022-10-02"),
  },
  {
    grand_prix: "Japan",
    race_date: new Date("2022-10-09"),
  },
  {
    grand_prix: "United States",
    race_date: new Date("2022-10-23"),
  },
  {
    grand_prix: "Mexico",
    race_date: new Date("2022-10-30"),
  },
  {
    grand_prix: "Brazil",
    race_date: new Date("2022-11-13"),
  },
  {
    grand_prix: "Abu Dhabi",
    race_date: new Date("2022-11-20"),
  },
];

const raceResults = [
  {
    race_id: 1,
    pos: 1,
    no: 1,
    driver: "Max Verstappen",
    car: "RED BULL RACING HONDA RBPT",
    laps: 57,
    time: "5636740",
    pts: 25,
  },
  {
    race_id: 1,
    pos: 2,
    no: 11,
    driver: "Sergio Perez",
    car: "RED BULL RACING HONDA RBPT",
    laps: 57,
    time: "5648727",
    pts: 18,
  },
  {
    race_id: 1,
    pos: 3,
    no: 14,
    driver: "Fernando Alonso",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    laps: 57,
    time: "5636740",
    pts: 15,
  },
  {
    race_id: 1,
    pos: 4,
    no: 55,
    driver: "carlos Sainz",
    car: "FERRARI",
    laps: 57,
    time: "5684792",
    pts: 12,
  },
  {
    race_id: 1,
    pos: 5,
    no: 44,
    driver: "Lewis Hamilton",
    car: "MERCEDES",
    laps: 57,
    time: "5687717",
    pts: 10,
  },
  {
    race_id: 1,
    pos: 6,
    no: 18,
    driver: "Lance Stroll",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    laps: 57,
    time: "5691242",
    pts: 8,
  },
  {
    race_id: 1,
    pos: 7,
    no: 63,
    driver: "George Russell",
    car: "MERCEDES",
    laps: 57,
    time: "5692613",
    pts: 6,
  },
  {
    race_id: 1,
    pos: 8,
    no: 77,
    driver: "Valtteri Bottas",
    car: "ALFA ROMEO FERRARI",
    laps: 57,
    time: "5709387",
    pts: 4,
  },
  {
    race_id: 1,
    pos: 9,
    no: 10,
    driver: "Pierre Gasly",
    car: "ALPINE RENAULT",
    laps: 57,
    time: "5710493",
    pts: 2,
  },
  {
    race_id: 1,
    pos: 10,
    no: 23,
    driver: "Alexander Albon",
    car: "WILLIAMS MERCEDES",
    laps: 57,
    time: "5726514",
    pts: 1,
  },
  {
    race_id: 1,
    pos: 11,
    no: 22,
    driver: "Yuki Tsunoda",
    car: "ALPHATAURI HONDA RBPT",
    laps: 57,
    time: "5727610",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 12,
    no: 2,
    driver: "Logan Sargeant",
    car: "WILLIAMS MERCEDES",
    laps: 56,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 13,
    no: 20,
    driver: "Kevin Magnussen",
    car: "HAAS FERRARI",
    laps: 56,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 14,
    no: 21,
    driver: "Nyck De Vries",
    car: "ALPHATAURI HONDA RBPT",
    laps: 56,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 15,
    no: 27,
    driver: "Nico Hulkenberg",
    car: "HAAS FERRARI",
    laps: 56,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 16,
    no: 24,
    driver: "Zhou Guanyu",
    car: "ALFA ROMEO FERRARI",
    laps: 56,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 17,
    no: 4,
    driver: "Lando Norris",
    car: "MCLAREN MERCEDES",
    laps: 55,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 0,
    no: 31,
    driver: "Esteban Ocon",
    car: "ALPINE RENAULT",
    laps: 41,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 0,
    no: 16,
    driver: "Charles Leclerc",
    car: "FERRARI",
    laps: 39,
    time: "0",
    pts: 0,
  },
  {
    race_id: 1,
    pos: 0,
    no: 81,
    driver: "Oscar Piastri",
    car: "MCLAREN MERCEDES",
    laps: 13,
    time: "0",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 1,
    no: 1,
    driver: "Max Verstappen",
    car: "RED BULL RACING HONDA RBPT",
    laps: 57,
    time: "5258240",
    pts: 26,
  },
  {
    race_id: 5,
    pos: 2,
    no: 11,
    driver: "Sergio Perez",
    car: "RED BULL RACING HONDA RBPT",
    laps: 57,
    time: "5263624",
    pts: 18,
  },
  {
    race_id: 5,
    pos: 3,
    no: 14,
    driver: "Fernando Alonso",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    laps: 57,
    time: "5284545",
    pts: 15,
  },
  {
    race_id: 5,
    pos: 4,
    no: 63,
    driver: "George Russell",
    car: "MERCEDES",
    laps: 57,
    time: "5291469",
    pts: 12,
  },
  {
    race_id: 5,
    pos: 5,
    no: 55,
    driver: "Carlos Sainz",
    car: "FERRARI",
    laps: 57,
    time: "5300751",
    pts: 10,
  },
  {
    race_id: 5,
    pos: 6,
    no: 44,
    driver: "Lewis Hamilton",
    car: "MERCEDES",
    laps: 57,
    time: "5309489",
    pts: 8,
  },
  {
    race_id: 5,
    pos: 7,
    no: 16,
    driver: "Charles Leclerc",
    car: "FERRARI",
    laps: 57,
    time: "5311228",
    pts: 6,
  },
  {
    race_id: 5,
    pos: 8,
    no: 10,
    driver: "Pierre Gasly",
    car: "ALPINE RENAULT",
    laps: 57,
    time: "5313910",
    pts: 4,
  },
  {
    race_id: 5,
    pos: 9,
    no: 31,
    driver: "Esteban Ocon",
    car: "ALPINE RENAULT",
    laps: 57,
    time: "5316363",
    pts: 2,
  },
  {
    race_id: 5,
    pos: 10,
    no: 20,
    driver: "Kevin Magnussen",
    car: "HAAS FERRARI",
    laps: 57,
    time: "5321185",
    pts: 1,
  },
  {
    race_id: 5,
    pos: 11,
    no: 22,
    driver: "Yuki Tsunoda",
    car: "ALPHATAURI HONDA RBPT",
    laps: 57,
    time: "5322549",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 12,
    no: 18,
    driver: "Lance Stroll",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    laps: 57,
    time: "5322994",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 13,
    no: 77,
    driver: "Valtteri Bottas",
    car: "ALFA ROMEO FERRARI",
    laps: 57,
    time: "5329877",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 14,
    no: 23,
    driver: "Alexander Albon",
    car: "WILLIAMS MERCEDES",
    laps: 57,
    time: "5331101",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 15,
    no: 27,
    driver: "Nico Hulkenberg",
    car: "HAAS FERRARI",
    laps: 57,
    time: "5333190",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 16,
    no: 24,
    driver: "Zhou Guanyu",
    car: "ALFA ROMEO FERRARI",
    laps: 57,
    time: "5336680",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 17,
    no: 4,
    driver: "Lando Norris",
    car: "MCLAREN MERCEDES",
    laps: 57,
    time: "5345957",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 18,
    no: 21,
    driver: "Nyck De Vries",
    car: "ALPHATAURI HONDA RBPT",
    laps: 57,
    time: "5347189",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 19,
    no: 81,
    driver: "Oscar Piastri",
    car: "MCLAREN MERCEDES",
    laps: 56,
    time: "0",
    pts: 0,
  },
  {
    race_id: 5,
    pos: 20,
    no: 2,
    driver: "Logan Sargeant",
    car: "WILLIAMS MERCEDES",
    laps: 56,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 1,
    no: 1,
    driver: "Max Verstappen",
    car: "RED BULL RACING RBPT",
    laps: 66,
    time: "5840480",
    pts: 25,
  },
  {
    race_id: 14,
    pos: 2,
    no: 11,
    driver: "Sergio Perez",
    car: "RED BULL RACING RBPT",
    laps: 66,
    time: "5853552",
    pts: 19,
  },
  {
    race_id: 14,
    pos: 3,
    no: 63,
    driver: "George Russell",
    car: "MERCEDES",
    laps: 66,
    time: "5873407",
    pts: 15,
  },
  {
    race_id: 14,
    pos: 4,
    no: 55,
    driver: "Carlos Sainz",
    car: "FERRARI",
    laps: 66,
    time: "5885688",
    pts: 12,
  },
  {
    race_id: 14,
    pos: 5,
    no: 44,
    driver: "Lewis Hamilton",
    car: "MERCEDES",
    laps: 66,
    time: "5895014",
    pts: 10,
  },
  {
    race_id: 14,
    pos: 6,
    no: 77,
    driver: "Valtteri Bottas",
    car: "ALFA ROMEO FERRARI",
    laps: 66,
    time: "5900456",
    pts: 8,
  },
  {
    race_id: 14,
    pos: 7,
    no: 31,
    driver: "Esteban Ocon",
    car: "ALPINE RENAULT",
    laps: 66,
    time: "5915877",
    pts: 6,
  },
  {
    race_id: 14,
    pos: 8,
    no: 4,
    driver: "Lando Norris",
    car: "MCLAREN MERCEDES",
    laps: 66,
    time: "592371",
    pts: 4,
  },
  {
    race_id: 14,
    pos: 9,
    no: 14,
    driver: "Fernando Alonso",
    car: "ALPINE RENAULT",
    laps: 65,
    time: "0",
    pts: 2,
  },
  {
    race_id: 14,
    pos: 10,
    no: 22,
    driver: "Yuki Tsunoda",
    car: "ALPHATAURI RBPT",
    laps: 65,
    time: "0",
    pts: 1,
  },
  {
    race_id: 14,
    pos: 11,
    no: 5,
    driver: "Sebastian Vettel",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    laps: 65,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 12,
    no: 3,
    driver: "Daniel Ricciardo",
    car: "MCLAREN MERCEDES",
    laps: 65,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 13,
    no: 10,
    driver: "Pierre Gasly",
    car: "ALPHATAURI RBPT",
    laps: 65,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 14,
    no: 47,
    driver: "Mick Schumacher",
    car: "HAAS FERRARI",
    laps: 65,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 15,
    no: 18,
    driver: "Lance Stroll",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    laps: 65,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 16,
    no: 6,
    driver: "Nicholas Latifi",
    car: "WILLIAMS MERCEDES",
    laps: 64,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 17,
    no: 20,
    driver: "Kevin Magnussen",
    car: "HAAS FERRARI",
    laps: 64,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 18,
    no: 23,
    driver: "Alexander Albon",
    car: "WILLIAMS MERCEDES",
    laps: 64,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 0,
    no: 24,
    driver: "Zhou Guanyu",
    car: "ALFA ROMEO FERRARI",
    laps: 28,
    time: "0",
    pts: 0,
  },
  {
    race_id: 14,
    pos: 0,
    no: 16,
    driver: "Charles Leclerc",
    car: "FERRARI",
    laps: 27,
    time: "0",
    pts: 0,
  },
];

export { teams, drivers, teamDrivers, races, raceResults };
