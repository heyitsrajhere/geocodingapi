import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { logging } from "src/db/entites/log.entity";
import { DataSource } from "typeorm";

@Injectable()
export class loggerMiddlewear implements NestMiddleware{
    constructor(@Inject('DataSource')private datasource : DataSource){}
    use(req: Request, res: Response, next: NextFunction) {
        // console.log(req);
        const body = req.params.address;
        console.log(body);
        const method = req.method;
        const url = `http://localhost:3000${req.path}`;
        console.log(url);
        const repo = this.datasource.getRepository(logging)
        const data = repo.create({
            body,url,method
        })
        try{
            repo.save(data)
        }
        catch(error){
            console.log(error)
        }
        next()
    }
}