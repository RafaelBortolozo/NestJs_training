import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1700057337704 } from "src/migrations/1700057337704-CreateCoursesTable";
import { CreateTagsTable1700058581145 } from "src/migrations/1700058581145-CreateTagsTable";
import { CreateCoursesTagsTable1700065967524 } from "src/migrations/1700065967524-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1700066436435 } from "src/migrations/1700066436435-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1700067176232 } from "src/migrations/1700067176232-AddTagsIdToCoursesTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [
        CreateCoursesTable1700057337704, 
        CreateTagsTable1700058581145, 
        CreateCoursesTagsTable1700065967524,
        AddCoursesIdToCoursesTagsTable1700066436435,
        AddTagsIdToCoursesTagsTable1700067176232,
    ]
})