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

export const pocketbaseServerUrl = "https://aftgroup.hop.sh";

export const pbUrl = browser ? window.location.origin + "/" + base : undefined

const pocketbase = (new Pocketbase(pocketbaseServerUrl)).autoCancellation(false);


export { pocketbase }