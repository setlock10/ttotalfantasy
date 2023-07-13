# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

teams = [
    {
        "id": 1,
        "name": "Kansas City Chiefs",
        "number": 1,
        "code": "KC",
        "pot_4_2023": 1,
        "pot_8_2023": 1,
        "win_total_2023": 11.5,
        "over_juice_2023": -110,
        "under_juice_2023": -110,
        "elo_2022": 1733,
        "playoffs_2022": true,
        "logo": "public/KC.png",
        "logo_large": "public/KC_large.png"
    },
    {
        "id": 2,
        "name": "Cincinnati Bengals",
        "number": 2,
        "code": "CIN",
        "pot_4_2023": 1,
        "pot_8_2023": 1,
        "win_total_2023": 11.5,
        "over_juice_2023": -110,
        "under_juice_2023": -110,
        "elo_2022": 1688,
        "playoffs_2022": true,
        "logo": "public/CIN.png",
        "logo_large": "public/CIN_large.png"
    },
    {
        "id": 3,
        "name": "San Francisco 49ers",
        "number": 3,
        "code": "SF",
        "pot_4_2023": 1,
        "pot_8_2023": 1,
        "win_total_2023": 11.5,
        "over_juice_2023": -105,
        "under_juice_2023": -115,
        "elo_2022": 1644,
        "playoffs_2022": true,
        "logo": "public/SF.png",
        "logo_large": "public/SF_large.png"
    },
    {
        "id": 4,
        "name": "Philadelphia Eagles",
        "number": 4,
        "code": "PHI",
        "pot_4_2023": 1,
        "pot_8_2023": 1,
        "win_total_2023": 10.5,
        "over_juice_2023": -130,
        "under_juice_2023": 110,
        "elo_2022": 1677,
        "playoffs_2022": true,
        "logo": "public/PHI.png",
        "logo_large": "public/PHI_large.png"
    },
    {
        "id": 5,
        "name": "Buffalo Bills",
        "number": 5,
        "code": "BUF",
        "pot_4_2023": 1,
        "pot_8_2023": 2,
        "win_total_2023": 10.5,
        "over_juice_2023": -125,
        "under_juice_2023": 105,
        "elo_2022": 1664,
        "playoffs_2022": true,
        "logo": "public/BUF.png",
        "logo_large": "public/BUF_large.png"
    },
    {
        "id": 6,
        "name": "Jacksonville Jaguars",
        "number": 6,
        "code": "JAX",
        "pot_4_2023": 1,
        "pot_8_2023": 2,
        "win_total_2023": 9.5,
        "over_juice_2023": -140,
        "under_juice_2023": 120,
        "elo_2022": 1531,
        "playoffs_2022": true,
        "logo": "public/JAX.png",
        "logo_large": "public/JAX_large.png"
    },
    {
        "id": 7,
        "name": "New York Jets",
        "number": 7,
        "code": "NYJ",
        "pot_4_2023": 1,
        "pot_8_2023": 2,
        "win_total_2023": 9.5,
        "over_juice_2023": -120,
        "under_juice_2023": 100,
        "elo_2022": 1386,
        "playoffs_2022": false,
        "logo": "public/NYJ.png",
        "logo_large": "public/NYJ_large.png"
    },
    {
        "id": 8,
        "name": "Los Angeles Chargers",
        "number": 8,
        "code": "LAC",
        "pot_4_2023": 1,
        "pot_8_2023": 2,
        "win_total_2023": 9.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1535,
        "playoffs_2022": true,
        "logo": "public/LAC.png",
        "logo_large": "public/LAC_large.png"
    },
    {
        "id": 9,
        "name": "Dallas Cowboys",
        "number": 9,
        "code": "DAL",
        "pot_4_2023": 2,
        "pot_8_2023": 3,
        "win_total_2023": 9.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1631,
        "playoffs_2022": true,
        "logo": "public/DAL.png",
        "logo_large": "public/DAL_large.png"
    },
    {
        "id": 10,
        "name": "New Orleans Saints",
        "number": 10,
        "code": "NO",
        "pot_4_2023": 2,
        "pot_8_2023": 3,
        "win_total_2023": 9.5,
        "over_juice_2023": 110,
        "under_juice_2023": -130,
        "elo_2022": 1485,
        "playoffs_2022": false,
        "logo": "public/NO.png",
        "logo_large": "public/NO_large.png"
    },
    {
        "id": 11,
        "name": "Miami Dolphins",
        "number": 11,
        "code": "MIA",
        "pot_4_2023": 2,
        "pot_8_2023": 3,
        "win_total_2023": 9.5,
        "over_juice_2023": 110,
        "under_juice_2023": -130,
        "elo_2022": 1521,
        "playoffs_2022": true,
        "logo": "public/MIA.png",
        "logo_large": "public/MIA_large.png"
    },
    {
        "id": 12,
        "name": "Detroit Lions",
        "number": 12,
        "code": "DET",
        "pot_4_2023": 2,
        "pot_8_2023": 3,
        "win_total_2023": 9.0,
        "over_juice_2023": -150,
        "under_juice_2023": 125,
        "elo_2022": 1527,
        "playoffs_2022": false,
        "logo": "public/DET.png",
        "logo_large": "public/DET_large.png"
    },
    {
        "id": 13,
        "name": "Cleveland Browns",
        "number": 13,
        "code": "CLE",
        "pot_4_2023": 2,
        "pot_8_2023": 4,
        "win_total_2023": 8.5,
        "over_juice_2023": -140,
        "under_juice_2023": 120,
        "elo_2022": 1485,
        "playoffs_2022": false,
        "logo": "public/CLE.png",
        "logo_large": "public/CLE_large.png"
    },
    {
        "id": 14,
        "name": "Baltimore Ravens",
        "number": 14,
        "code": "BAL",
        "pot_4_2023": 2,
        "pot_8_2023": 4,
        "win_total_2023": 8.5,
        "over_juice_2023": -140,
        "under_juice_2023": 120,
        "elo_2022": 1599,
        "playoffs_2022": true,
        "logo": "public/BAL.png",
        "logo_large": "public/BAL_large.png"
    },
    {
        "id": 15,
        "name": "Seattle Seahawks",
        "number": 15,
        "code": "SEA",
        "pot_4_2023": 2,
        "pot_8_2023": 4,
        "win_total_2023": 8.5,
        "over_juice_2023": -125,
        "under_juice_2023": 105,
        "elo_2022": 1455,
        "playoffs_2022": true,
        "logo": "public/SEA.png",
        "logo_large": "public/SEA_large.png"
    },
    {
        "id": 16,
        "name": "Minnesota Vikings",
        "number": 16,
        "code": "MIN",
        "pot_4_2023": 3,
        "pot_8_2023": 4,
        "win_total_2023": 8.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1534,
        "playoffs_2022": true,
        "logo": "public/MIN.png",
        "logo_large": "public/MIN_large.png"
    },
    {
        "id": 17,
        "name": "Denver Broncos",
        "number": 17,
        "code": "DEN",
        "pot_4_2023": 2,
        "pot_8_2023": 5,
        "win_total_2023": 8.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1379,
        "playoffs_2022": false,
        "logo": "public/DEN.png",
        "logo_large": "public/DEN_large.png"
    },
    {
        "id": 18,
        "name": "Pittsburgh Steelers",
        "number": 18,
        "code": "PIT",
        "pot_4_2023": 3,
        "pot_8_2023": 5,
        "win_total_2023": 8.5,
        "over_juice_2023": -105,
        "under_juice_2023": -115,
        "elo_2022": 1519,
        "playoffs_2022": false,
        "logo": "public/PIT.png",
        "logo_large": "public/PIT_large.png"
    },
    {
        "id": 19,
        "name": "New York Giants",
        "number": 19,
        "code": "NYG",
        "pot_4_2023": 3,
        "pot_8_2023": 5,
        "win_total_2023": 8.5,
        "over_juice_2023": 110,
        "under_juice_2023": -130,
        "elo_2022": 1508,
        "playoffs_2022": true,
        "logo": "public/NYG.png",
        "logo_large": "public/NYG_large.png"
    },
    {
        "id": 20,
        "name": "Los Angeles Rams",
        "number": 20,
        "code": "LAR",
        "pot_4_2023": 3,
        "pot_8_2023": 5,
        "win_total_2023": 7.5,
        "over_juice_2023": -125,
        "under_juice_2023": 105,
        "elo_2022": 1469,
        "playoffs_2022": false,
        "logo": "public/LAR.png",
        "logo_large": "public/LAR_large.png"
    },
    {
        "id": 21,
        "name": "New England Patriots",
        "number": 21,
        "code": "NE",
        "pot_4_2023": 3,
        "pot_8_2023": 6,
        "win_total_2023": 7.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1500,
        "playoffs_2022": false,
        "logo": "public/NE.png",
        "logo_large": "public/NE_large.png"
    },
    {
        "id": 22,
        "name": "Chicago Bears",
        "number": 22,
        "code": "CHI",
        "pot_4_2023": 3,
        "pot_8_2023": 6,
        "win_total_2023": 7.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1332,
        "playoffs_2022": false,
        "logo": "public/CHI.png",
        "logo_large": "public/CHI_large.png"
    },
    {
        "id": 23,
        "name": "Atlanta Falcons",
        "number": 23,
        "code": "ATL",
        "pot_4_2023": 3,
        "pot_8_2023": 6,
        "win_total_2023": 7.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1331,
        "playoffs_2022": false,
        "logo": "public/ATL.png",
        "logo_large": "public/ATL_large.png"
    },
    {
        "id": 24,
        "name": "Carolina Panthers",
        "number": 24,
        "code": "CAR",
        "pot_4_2023": 3,
        "pot_8_2023": 6,
        "win_total_2023": 7.5,
        "over_juice_2023": -110,
        "under_juice_2023": -110,
        "elo_2022": 1485,
        "playoffs_2022": false,
        "logo": "public/CAR.png",
        "logo_large": "public/CAR_large.png"
    },
    {
        "id": 25,
        "name": "Tennessee Titans",
        "number": 25,
        "code": "TEN",
        "pot_4_2023": 4,
        "pot_8_2023": 7,
        "win_total_2023": 7.5,
        "over_juice_2023": -105,
        "under_juice_2023": -115,
        "elo_2022": 1465,
        "playoffs_2022": false,
        "logo": "public/TEN.png",
        "logo_large": "public/TEN_large.png"
    },
    {
        "id": 26,
        "name": "Las Vegas Raiders",
        "number": 26,
        "code": "LV",
        "pot_4_2023": 4,
        "pot_8_2023": 7,
        "win_total_2023": 7.5,
        "over_juice_2023": 110,
        "under_juice_2023": -130,
        "elo_2022": 1406,
        "playoffs_2022": false,
        "logo": "public/VEG.png",
        "logo_large": "public/VEG_large.png"
    },
    {
        "id": 27,
        "name": "Green Bay Packers",
        "number": 27,
        "code": "GB",
        "pot_4_2023": 4,
        "pot_8_2023": 7,
        "win_total_2023": 7.5,
        "over_juice_2023": 110,
        "under_juice_2023": -130,
        "elo_2022": 1515,
        "playoffs_2022": false,
        "logo": "public/GB.png",
        "logo_large": "public/GB_large.png"
    },
    {
        "id": 28,
        "name": "Washington Commanders",
        "number": 28,
        "code": "WSH",
        "pot_4_2023": 4,
        "pot_8_2023": 7,
        "win_total_2023": 7.5,
        "over_juice_2023": 115,
        "under_juice_2023": -135,
        "elo_2022": 1492,
        "playoffs_2022": false,
        "logo": "public/WAS.png",
        "logo_large": "public/WAS_large.png"
    },
    {
        "id": 29,
        "name": "Indianapolis Colts",
        "number": 29,
        "code": "IND",
        "pot_4_2023": 4,
        "pot_8_2023": 8,
        "win_total_2023": 6.5,
        "over_juice_2023": -125,
        "under_juice_2023": 105,
        "elo_2022": 1381,
        "playoffs_2022": false,
        "logo": "public/IND.png",
        "logo_large": "public/IND_large.png"
    },
    {
        "id": 30,
        "name": "Tampa Bay Buccaneers",
        "number": 30,
        "code": "TB",
        "pot_4_2023": 4,
        "pot_8_2023": 8,
        "win_total_2023": 6.5,
        "over_juice_2023": -115,
        "under_juice_2023": -105,
        "elo_2022": 1479,
        "playoffs_2022": true,
        "logo": "public/TB.png",
        "logo_large": "public/TB_large.png"
    },
    {
        "id": 31,
        "name": "Houston Texans",
        "number": 31,
        "code": "HOU",
        "pot_4_2023": 4,
        "pot_8_2023": 8,
        "win_total_2023": 5.5,
        "over_juice_2023": -110,
        "under_juice_2023": -110,
        "elo_2022": 1307,
        "playoffs_2022": false,
        "logo": "public/HOU.png",
        "logo_large": "public/HOU_large.png"
    },
    {
        "id": 32,
        "name": "Arizona Cardinals",
        "number": 32,
        "code": "ARI",
        "pot_4_2023": 4,
        "pot_8_2023": 8,
        "win_total_2023": 5.5,
        "over_juice_2023": 105,
        "under_juice_2023": -125,
        "elo_2022": 1337,
        "playoffs_2022": false,
        "logo": "public/ARI.png",
        "logo_large": "public/ARI_large.png"
    }
]



teams.map{|k| Team.create(number: k[:number], name: k[:name], win_total_2023: k[:win_total_2023], over_juice_2023: k[:over_juice_2023], under_juice_2023: k[:under_juice_2023], pot_4_2023: k[:pot_4_2023], elo_2022: k[:elo_2022], playoffs_2022: k[
:playoffs_2022], logo: k[:logo], logo_large: k[:logo_large])}



pots = [
{
"number":"1",
"pot_8":"1",
},
{
"number":"2",
"pot_8":"1",
},
{
"number":"3",
"pot_8":"1",
},
{
"number":"4",
"pot_8":"1",
},
{
"number":"5",
"pot_8":"2",
},
{
"number":"6",
"pot_8":"2",
},
{
"number":"7",
"pot_8":"2",
},
{
"number":"8",
"pot_8":"2",
},
{
"number":"9",
"pot_8":"3",
},
{
"number":"10",
"pot_8":"3",
},
{
"number":"11",
"pot_8":"3",
},
{
"number":"12",
"pot_8":"3",
},
{
"number":"13",
"pot_8":"4",
},
{
"number":"14",
"pot_8":"4",
},
{
"number":"15",
"pot_8":"4",
},
{
"number":"16",
"pot_8":"4",
},
{
"number":"17",
"pot_8":"5",
},
{
"number":"18",
"pot_8":"5",
},
{
"number":"19",
"pot_8":"5",
},
{
"number":"20",
"pot_8":"5",
},
{
"number":"21",
"pot_8":"6",
},
{
"number":"22",
"pot_8":"6",
},
{
"number":"23",
"pot_8":"6",
},
{
"number":"24",
"pot_8":"6",
},
{
"number":"25",
"pot_8":"7",
},
{
"number":"26",
"pot_8":"7",
},
{
"number":"27",
"pot_8":"7",
},
{
"number":"28",
"pot_8":"7",
},
{
"number":"29",
"pot_8":"8",
},
{
"number":"30",
"pot_8":"8",
},
{
"number":"31",
"pot_8":"8",
},
{
"number":"32",
"pot_8":"8",
},
]

#pots.map{|k| Pot8.create(team_id: k[:number], pot_8_2023: k[:pot_8])}
pots.map{|k| Pot8.create(team_id: Team.find_by(number: k[:number]).id, pot_8_2023: k[:pot_8])}

codes= [
{
"number":"1",
"code":"KC",
},
{
"number":"2",
"code":"CIN",
},
{
"number":"3",
"code":"SF",
},
{
"number":"4",
"code":"PHI",
},
{
"number":"5",
"code":"BUF",
},
{
"number":"6",
"code":"JAX",
},
{
"number":"7",
"code":"NYJ",
},
{
"number":"8",
"code":"LAC",
},
{
"number":"9",
"code":"DAL",
},
{
"number":"10",
"code":"NO",
},
{
"number":"11",
"code":"MIA",
},
{
"number":"12",
"code":"DET",
},
{
"number":"13",
"code":"CLE",
},
{
"number":"14",
"code":"BAL",
},
{
"number":"15",
"code":"SEA",
},
{
"number":"16",
"code":"MIN",
},
{
"number":"17",
"code":"DEN",
},
{
"number":"18",
"code":"PIT",
},
{
"number":"19",
"code":"NYG",
},
{
"number":"20",
"code":"LAR",
},
{
"number":"21",
"code":"NE",
},
{
"number":"22",
"code":"CHI",
},
{
"number":"23",
"code":"ATL",
},
{
"number":"24",
"code":"CAR",
},
{
"number":"25",
"code":"TEN",
},
{
"number":"26",
"code":"LV",
},
{
"number":"27",
"code":"GB",
},
{
"number":"28",
"code":"WSH",
},
{
"number":"29",
"code":"IND",
},
{
"number":"30",
"code":"TB",
},
{
"number":"31",
"code":"HOU",
},
{
"number":"32",
"code":"ARI",
}
]

#codes.map{|k| Code.create(team_id: k[:number], pot_8_2023: k[:pot_8])}
codes.map{|k| Code.create(team_id: Team.find_by(number: k[:number]).id, code: k[:code])}
