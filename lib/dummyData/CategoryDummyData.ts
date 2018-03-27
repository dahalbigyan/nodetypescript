import {Service} from "typedi";
import {Category} from "../model/Category";

@Service()
export class CategoryDummyData{
    private categories = [
        new Category(1, "Finance"), 
        new Category(2, "Security"), 
        new Category(3, "Data Storage"), 
        new Category(4, "Privacy"), 
        new Category(5, "Identity Management"), 
    ]; 
    findAll(){
        // here we can load data from the backend or return a promise
        // we are just simmulating an async action here
        return Promise.resolve(this.categories);
    };
    findOne(id: number){
        
        let foundCategory: Category = undefined;
        this.categories.forEach(category => {
            if (category.id === id)
                foundCategory = category;
        });
        return foundCategory;
    };
    save(category: Category){
        this.categories.push(category);
        return category;
    };
    remove(id: number){
        const category = this.findOne(id);
        if (category)
            this.categories.splice(this.categories.indexOf(category), 1);

        return category;
    };
};