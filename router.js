import { Router } from "express";
import *as rh from "./requesthandler.js"

const router =Router();
router.route("/").get(rh.Home);
router.route("/get").get(rh.getData);

export default router;
