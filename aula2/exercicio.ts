interface Player {
    age: number;
    name:string;
    game: string;
}


const jogador: Player = {
    age: 28,
    name: "Ronaldo",
    game: "FIFA"
};

const partialPlayer: Partial<Player> = {
    name: "Ronaldo"
};

const readOnlyPlayer: Readonly<Player> = {
    age: 28,
    name: "Ronaldo",
    game: "FIFA"
};

const pickPlayer: Pick<Player, "name" | "game"> = {
    name: "Ronaldo",
    game: "FIFA"
};

const omitPlayer: Omit<Player, "age"> = {
    name: "Ronaldo",
    game: "FIFA"
};

