'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter , useSearchParams } from 'next/navigation'

import Form from '@components/Form'

function EditPrompt() {
    const router = useRouter();
    const {data:session} = useSession(); 
    const [sumbitting, setsumbitting] = useState(false);
    const [post, setpost] = useState({
        prompt:'',
        tag:'',
    });
    const promptId = useSearchParams().get('id');

    useEffect((()=>{
        const getPromptsDetails = async ()=>{
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setpost({
                prompt:data.prompt,
                tag:data.tag
            })
        }

        if(promptId) getPromptsDetails();
    }),[promptId]);

    

    const updatePrompt = async(e)=>{
        e.preventDefault();
        setsumbitting(true);
        
        if(!promptId)return alert('prompt id not found');

        try {
            const response = await fetch(`/api/prompt/${promptId}`,{
                method:'PATCH',
                body:JSON.stringify({
                    prompt:post.prompt,
                    tag:post.tag
                })
            })
            
            if(response.ok){
                router.push('/');
            }
        }
         catch (error) {
            console.log(error);
        }
        finally{
            setsumbitting(false);
        }
    }

  return (
    <Form
        type = "Update"
        post = {post}
        setpost = {setpost}
        sumbitting = {sumbitting}
        handleSubmit= {updatePrompt}
    />
  )
}

export default EditPrompt