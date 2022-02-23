import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users= [
    {name : 'John', age : 30},
    {name : 'Bob', age : 25},
]

export default {
    async findAll(req: Request, res: Response) {
        return res.json(users);
    },
    
    async create (req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendEmail({
            to : { 
                name: 'John', 
                email: 'email.example@gmail.com' 
            },
            message: { 
                subject: 'Hello', 
                body: 'Hello there'
            }
        });

        return res.send();
    }
}
