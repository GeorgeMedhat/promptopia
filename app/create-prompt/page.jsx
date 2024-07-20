'use client'

import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

function CreatePrompt() {
    const router = useRouter();
    const {data:session} = useSession(); 
    const [sumbitting, setsumbitting] = useState(false);
    const [post, setpost] = useState({
        prompt:'',
        tag:'',
    });

    const createPrompt = async(e)=>{
        e.preventDefault();
        setsumbitting(true);

        try {
            const response = await fetch('/api/prompt/new',{
                method:'POST',
                body:JSON.stringify({
                    prompt:post.prompt,
                    userId:session?.user.id,
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
        type = "Create"
        post = {post}
        setpost = {setpost}
        sumbitting = {sumbitting}
        handleSubmit= {createPrompt}
    />
  )
}

export default CreatePrompt