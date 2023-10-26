import { connect, Schema, Types, model, models } from "mongoose";

dbConn();

async function dbConn() {
  try {
    const { DB_CLUSTER, DB_USER, DB_PASS } = process.env;
    const conn = await connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.nssrlta.mongodb.net/`,
      {
        dbName: "pokedex",
      }
    );
    console.log("Connect successfully!!!");
    return conn;
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

interface Descriptions {
  fr: string;
  en: string;
}

export interface PokemonType {
  id: number;
  name: string;
  imgSrc: string;
  height: number;
  weight: number;
  types: string[];
  strongAgainst: string[];
  weakAgainst: string[];
  isMythical: boolean;
  isLegendary: boolean;
  descriptions: Descriptions;
  organization?: Types.ObjectId;
}

const descriptionsSchema = new Schema<Descriptions>({
  fr: String,
  en: String,
});

const pokemonSchema = new Schema<PokemonType>({
  id: Number,
  name: String,
  imgSrc: String,
  height: Number,
  weight: Number,
  types: [String],
  strongAgainst: [String],
  weakAgainst: [String],
  isMythical: Boolean,
  isLegendary: Boolean,
  descriptions: descriptionsSchema,
});

export const Pokemons = models.pokemon || model("pokemon", pokemonSchema);
