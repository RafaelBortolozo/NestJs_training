import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { createCourseDTO } from './dto/create-course-dto';
import { updateCourseDTO } from './dto/update-course-dto';

@Controller('courses') //localhost:3000/courses
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {}

    //localhost:3000/courses/list
    @Get('list') 
    findAllCourses() {
        return 'listagem de cursos'
    }

    // podemos usar o decorador @Res para usar código express
    @Get() 
    findAll() {
        return this.courseService.findAll()
    }

    // ':id' é um parâmetro na URL
    // podemos receber esses parametros pelo decorador @param
    // 1 parâmetro
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.courseService.findOne(id)
    }

    // 2 parâmetroS
    @Get(':id/:name')
    findOneWithName(@Param('id') id: string, @Param('name') name: string) {
        return `curso com id ${id} e name ${name}`
    }

    @HttpCode(201)
    @Post()
    create(@Body() createCourseDTO : createCourseDTO) {
        return this.courseService.create(createCourseDTO)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCourseDTO: updateCourseDTO){
        return this.courseService.update(id, updateCourseDTO)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: number){
        return this.courseService.remove(id)
    }
}
