import { Router } from "express"
import { addApplication, deleteApplicationById, getAllApplicationById, getAllApplications, updateApplicationById } from "../controllers/applicationControllers"
import { createApplication, updateApplication } from "../service/applicationService";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.use("/",createApplication)

router.post('/applications',addApplication)
router.get('/applications' , getAllApplications)
router.get('/applications/:id' , getAllApplicationById)
router.put("/applications/:id", updateApplicationById)
router.delete("/applications/:id",deleteApplicationById)


export default router;