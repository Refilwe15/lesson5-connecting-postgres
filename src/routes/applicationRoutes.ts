import { Router } from "express"
import { addApplication, deleteApplicationById, getAllApplicationById, getAllApplications, updateApplicationById } from "../controllers/applicationControllers"
import { updateApplication } from "../service/applicationService";

const router = Router();

router.post('/applications',addApplication)
router.get('/applications' , getAllApplications)
router.get('/applications/:id' , getAllApplicationById)
router.put("/applications/:id", updateApplicationById)
router.delete("/applications/:id",deleteApplicationById)


export default router;