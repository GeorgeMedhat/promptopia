'use client'

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

function UserProfile({params}) {
    const {data:session}=useSession();
    const [posts,setPosts] = useState([]);
    const [creator,setCreator] = useState({});
    const router  = useRouter();

    useEffect(()=>{
        const fetchPosts = async ()=>{
          const response = await fetch(`/api/users/${params.id}/posts`);
          const data = await response.json();
          const user = await fetch(`/api/users/${params.id}`)
          const userdata = await user.json();
          setPosts(data);
          setCreator(userdata)
        }
        if(params.id)
            fetchPosts();
      },[])
    console.log(creator)
  return(
    <Profile
        name = {`${creator[0]?.username}'s`}
        desc = {`here you can view all ${creator[0]?.username} posts`}
        data = {posts}
    />
  )
}

export default UserProfile;