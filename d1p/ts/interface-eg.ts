/**
 * Created by abridge on 1/18/2017.
 */
interface IPlayers{
    getTotalPlayers():number;
}

class MyHockeyRoster implements IPlayers{

    getTotalPlayers(): number {
        let np:number = 7;

        return np;
    }
}

class MyTTRoster implements IPlayers{

    getTotalPlayers(): number {
        return 6;
    }
}

let team:IPlayers;
team = new MyHockeyRoster();
console.log("Hockey team pl count: "+team.getTotalPlayers());

team = new MyTTRoster();
console.log("TT team pl count: "+team.getTotalPlayers());
