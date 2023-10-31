import { Body, Controller, Get, HttpCode, Param, Post, Res } from '@nestjs/common';

@Controller('courses') //localhost:3000/courses
export class CoursesController {
    //localhost:3000/courses/list
    @Get('list') 
    findAllCourses() {
        return 'listagem de cursos'
    }

    // podemos usar o decorador @Res para manipular o statusCode da resposta baseado em alguma lógica, ao invés de deixar fixo
    @Get() 
    findAll(@Res() response) {
        return response.status(200).json({message:'listagem de cursos'})
    }

    // ':id' é um parâmetro na URL
    // podemos receber esses parametros pelo decorador @param
    // 1 parâmetro
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `curso com id ${id}`
    }

    // 2 parâmetroS
    @Get(':id/:name')
    findOneWithName(@Param('id') id: string, @Param('name') name: string) {
        return `curso com id ${id} e name ${name}`
    }

    @HttpCode(201)
    @Post()
    create(@Body() body) {
        return {...body, message: "funcionou"}
    }
}
