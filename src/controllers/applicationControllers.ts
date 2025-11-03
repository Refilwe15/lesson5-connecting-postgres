import { Request,Response} from 'express';
import * as applicationService from "../service/applicationService"

export const addApplication = async (req: Request ,res : Response) => {
    try{
        const NewApplication = await applicationService.createApplication(req.body)
        res.status(201).json(NewApplication)
    }catch(error){
        res.status(500).json({message : "Error in creating application"});
        
    }
}