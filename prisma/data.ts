const teams = [
    {
        team_name: "quan",
        base: "ok",
        team_chief: "ok",
        chassis: "ok",
        power_unit: "ok",
        first_team_entry: 1,
        world_championships: 2,
        pole_positions: 1,
        fastest_laps: 1,
    },
    {
        team_name: "quan1",
        base: "ok1",
        team_chief: "ok1",
        chassis: "ok1",
        power_unit: "ok1",
        first_team_entry: 2,
        world_championships: 12,
        pole_positions: 11,
        fastest_laps: 11,
    }
];

const drivers = [
    {
        full_name: "quan",
        avatar: "http",
        country: "VietNam",
        date_of_birth: new Date("2000-02-21"),
        place_of_birth: "VietNam",
        rank: 2,
        podiums: 1,
        Points: 3242.8,
        grands_prix_entered: 3,
        world_championships: 4,
        highest_race_finish: "Viet",
        highest_grid_position: 6
    },
    {
        full_name: "quan",
        avatar: "http",
        country: "VietNam",
        date_of_birth: new Date("2000-02-21"),
        place_of_birth: "VietNam",
        rank: 2,
        podiums: 1,
        Points: 3242.8,
        grands_prix_entered: 3,
        world_championships: 4,
        highest_race_finish: "Viet",
        highest_grid_position: 6
    }
]

const teamDrivers = [
    {
        team_id: 1,
        driver_id: 1
    }, 
    {
        team_id: 1,
        driver_id: 2
    }
] 

export { teams, drivers, teamDrivers }