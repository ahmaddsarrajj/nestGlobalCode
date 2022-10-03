import { Controller, Get } from "@nestjs/common";

@Controller()
export class appController{

    @Get()
    test(){
        return "hello";
    }

}