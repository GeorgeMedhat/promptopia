import { connectToDB } from "@utils/database";
import User from "@models/user";
export const GET = async (request , {params})=>{

    try{
        await connectToDB();
        console.log(params.id)
        const user = await User.find({_id:params.id});
        if(!user)
            return new Response("user not found",{status:404});

        return new Response(JSON.stringify(user),{status:200});
    }
    catch (error){
        return new Response("failed to fetch all users",{status:500});
        
    }
}