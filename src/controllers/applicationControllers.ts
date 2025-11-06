import { Request,Response} from 'express';
import * as applicationService from "../service/applicationService"
import { log } from 'console';

export const addApplication = async (req: Request ,res : Response) => {
    try{
       
        
        const NewApplication = await applicationService.createApplication(req.body)
        res.status(201).json(NewApplication)
    }catch(error){
        res.status(500).json({message : "Error in creating application"});
        
    }
}

//from read operations

export const getAllApplications = async (req: Request, res: Response) => {
    try {
        const applications = await applicationService.findAllApplications();
        res.status(200).json(applications);

    }catch(error){
        res.status(500).json({message : "Error retrieving applications"});
    }
};
export const getAllApplicationById = async (req: Request,res : Response) =>{
    try{
        // /api/applications/1
        const id = parseInt(req.params.id)
        const application = await applicationService.findAllApplicationById(id)
        if(!application){
            return res.status(200).json(application)
        }
        res.status(200).json(application);

    }catch(error){
        res.status(500).json({message:"Error retrieving application"})
    }
}

//update operations

export const updateApplicationById = async(req: Request, res : Response) => {
    try{
        const id = parseInt(req.params.id)
        const updateApplication = await applicationService.updateApplication(id,
            req.body
        );

        if(!updateApplication){
            return res.status(404).json({message : "Application not found"})
        }
        res.status(200).json(updateApplication);
    } catch(error){

        res.status(500).json({message:"Error updating application"})
    }
};

//delete operations

export const deleteApplicationById = async (req: Request , res : Response) => {
     try{
        const id = parseInt(req.params.id);
        const deleteApplication = await applicationService.deleteApplication(id);
             if(!deleteApplication){
            return res.status(404).json({message : "Application not found"});
        }
        res.status(200).json({ message : "Application Deleted Succcesfully"});
    
     } catch (error){

        console.log(error);
        
        res.status(500).json({message:"Error deleting  application"})
     }
}