import data from "../data";
export default function handler(req, res){
    const {Post} = data;
    if(Post) return res.status(200).json(Post);
    return res.status(404).json({error:"page not found"});
}