import { Router } from "express";
import { Cache } from "../util/cache";
import { checkIsOrganizer } from "../util/user";
import { ScheduleController } from "../controllers";


/**
 * A router for handling the sign in of a user
 */
export const scheduleRouter = (cache: Cache): Router => {
  // Initializing the router
  const router = Router();

  const scheduleController = new ScheduleController(cache);

  /**
   * POST /schedule/create
   */
  router.post("/create", checkIsOrganizer, scheduleController.createEvent);

  /**
   * POST /schedule/delete
   */
  router.delete("/delete", checkIsOrganizer, scheduleController.deleteEvent);

  /**
   * POST /schedule/update
   */
  router.put("/update", checkIsOrganizer, scheduleController.updateEvent);

  /**
   * GET /schedule/
   */
  router.get("/", scheduleController.listEvents.bind(scheduleController));

  return router;
};
