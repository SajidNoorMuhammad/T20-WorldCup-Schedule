var cricket= {
    Match1: {
        MatchNumber: "Group Stage T20 11 of 55",
        Date: "Thu, 6 Jun",
        Team1: "Pakistan",
        score1: "159/7 & 13/1",
        target: "19",
        Team2: "United States",
        score2: "159/3 & 18/1",
        result: "USA won the super over by 5 runs",
    },
    Match2: {
        MatchNumber: "Group Stage T20 12 of 55",
        Date: "Fri, 7 Jun",
        Team1: "Namibia",
        score1: "155/9",
        target: "156",
        Team2: "Scotland",
        score2: "157/5",
        result: "SCO won by 5 wickets (9 balls left)",
    },
    Match3: {
        MatchNumber: "Group Stage T20 13 of 55",
        Date: "Sat, 8 Jun",
        Team1: "Srilanka",
        score1: "124/9 (20)",
        target: "125",
        Team2: "Bangladesh",
        score2: "125/8 (19)",
        result: "BAN won by 2 wickets (6 balls left)",
    },
    Match4: {
        MatchNumber: "Group Stage T20 14 of 55",
        Date: "Sun, 9 Jun",
        Team1: "India",
        score1: "119/10 (19)",
        target: "120",
        Team2: "Pakistan",
        score2: "113/7 (20)",
        result: "IND won by 6 runs",
    },
    Match5: {
        MatchNumber: "Group Stage T20 15 of 55",
        Date: "Mon, 10 Jun",
        Team1: "West Indies",
        score1: "149/9 (20)",
        target: "150",
        Team2: "New Zealand",
        score2: "136/9 (20)",
        result: "WI won by 13 runs",
    },
    Match6: {
        MatchNumber: "Group Stage T20 16 of 55",
        Date: "Tue, 11 Jun",
        Team1: "Oman",
        score1: "47/10 (13.2)",
        target: "48",
        Team2: "England",
        score2: "50/2 (3.1)",
        result: "ENG won by 8 wickets",
    }
}

var column1= document.getElementById("column-1");
var column2= document.getElementById("column-2");
var column3= document.getElementById("column-3");
var column4= document.getElementById("column-4");
var column5= document.getElementById("column-5");
var column6= document.getElementById("column-6");

column1.innerHTML += `<span class="groupstages">${cricket.Match1.MatchNumber}</span>
<span class="date">${cricket.Match1.Date}</span>
`
column2.innerHTML += `<span class="groupstages">${cricket.Match1.MatchNumber}</span>`