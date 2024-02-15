// declaration of objects


const User={
    id:123,
    email:"user@gmail.com",

    name:{
        userFullName:{
            firstname:"Guru",
            lastName:"Rajput"
        },

        CricketTeam:{
            captain:"Rohit Sharma",
            vice_captain:"virat Kohli",
            coach:"Rahul Dravid"
        }
    }
}



console.log(User.name.CricketTeam);