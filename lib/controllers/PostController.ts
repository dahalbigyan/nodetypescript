import {JsonController, Get, Post as HttpPost, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {PostDummyData} from "../dummyData/PostDummyData";
import {Post} from "../model/Post";

@Service()
@JsonController()
export class PostController {
    constructor(private postDummyData: PostDummyData) {
        
    }; 

    @Get("/posts")
    all(): Promise<Post[]> {
        return this.postDummyData.findAll();
    }

    @Get("/posts/:id")
    one(@Param("id") id: number): Post {
        return this.postDummyData.findOne(id);
    }; 

    @HttpPost("/posts")
    post(@Body() post: Post): Post{
        return this.postDummyData.save(post);
    };

    @Delete("/posts/:id")
    delete(@Param("id") id: number): Post {
        return this.postDummyData.remove(id);
    };
};