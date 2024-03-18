import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { InmemoryThingRepository } from "./repository/inmemoryThingRepository";
import { GetThings } from "./domain/usecase/get-things.usecase";
import { CreateThing } from "./domain/usecase/create-thing.usecase";
import { UpdateThing } from "./domain/usecase/update-thing.usecase";

const thingsRepository = new InmemoryThingRepository();
const getThings = new GetThings(thingsRepository);
const createThing = new CreateThing(thingsRepository);
const updateThing = new UpdateThing(thingsRepository);

const app = createApp(App);

app.provide("getThingsPort", getThings);
app.provide("createThingPort", createThing);
app.provide("updateThingPort", updateThing);

app.use(createPinia());

app.mount("#app");
