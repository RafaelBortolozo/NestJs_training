import { IsString } from "class-validator"

export class createCourseDTO {
    @IsString()
    readonly name: string

    @IsString()
    readonly description: string
    
    //cada elemento do array deve ser string
    @IsString({each: true})
    readonly tags: string[]
}