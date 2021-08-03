import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getExercicio2 } from "./endpoints/getExercicio2";
import { getExercicio3 } from "./endpoints/getExercicio3";
import { getExercicio4 } from "./endpoints/getExercicio4";
import { getFilteredTypeByParams } from "./endpoints/getFilteredTypeByParams";
import { getFilteredUsersByQuery } from "./endpoints/getFilteredUsersByQuery";

app.get("/recipes", getAllRecipes);

//exercício 1
app.get("/users", getFilteredUsersByQuery);
app.get("/users", getAllUsers);
app.get("/type/:type", getFilteredTypeByParams);

//exercício 2
app.get("/filtered-users", getExercicio2);

//exercício 3
app.get("/paged-users/:page", getExercicio3);

//exercício 4
app.get("/tudao", getExercicio4);
