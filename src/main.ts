import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { InmemoryThingRepository } from "./repository/inmemoryThingRepository";
import { GetThings } from "./domain/usecase/get-things.usecase";

//test

const thingsRepository = new InmemoryThingRepository();
const getThings = new GetThings(thingsRepository);

//

const app = createApp(App);

app.provide("getThingsPort", getThings);

app.use(createPinia());

app.mount("#app");
