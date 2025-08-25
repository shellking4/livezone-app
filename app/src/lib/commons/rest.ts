import axios from "axios";
import Pocketbase from "pocketbase"
import { browser } from "$app/environment";
import { base } from "$app/paths";

export let axiosRequestConfig = {
  headers: {
    "content-type": "application/json",
    "accept": "application/json",
  },
}

export const httpClient = axios

export const pocketbaseServerUrl = "https://aftgroup-website-backoffice.pockethost.io";

// export const pocketbaseServerUrl = "http://127.0.0.1:8090/api";


export const pbUrl = browser ? window.location.origin + "/" + base : undefined

const pocketbase = (new Pocketbase(pocketbaseServerUrl)).autoCancellation(false);

export { pocketbase }