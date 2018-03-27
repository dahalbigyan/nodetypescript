import {JsonController, Get, Post, Param, Delete, Body} from "routing-controllers"; 
import {Service} from "typedi"; 
import {CategoryDummyData} from "../dummyData/CategoryDummyData"; 
import {Category} from "../model/Category";

@Service()
@JsonController()
export class CategoryController{
    private categoryDummyData; 
    constructor(categoryDummyData: CategoryDummyData){
        this.categoryDummyData = CategoryDummyData; 
    }; 

    // this.categoryDummyData = CategoryDummyData;
    
    @Get("/categories")
    all(): Promise<Category[]>{
        return this.categoryDummyData.findAll(); 
    }; 

    @Get("/categories/:id")
    one(@Param("id") id: number): Category{
        return this.categoryDummyData.findOne(id); 
    }; 

    @Post("/categories")
    category(@Body() category: Category): Category {
        return this.categoryDummyData.save(category);
    }; 
    
    @Delete("/categories/:id")
    delete(@Param("id") id: number): Category {
        return this.categoryDummyData.remove(id);
    };
}; 