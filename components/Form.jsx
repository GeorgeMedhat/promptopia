import React from 'react'

import Link from 'next/link'

function Form({type,post,setpost,sumbitting,handleSubmit}) {
  return (
    <section className='w-full maw-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p>
      <form onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Your AI prompt
            </span>
            <textarea
            value={post.prompt}
            onChange={(e)=>setpost({...post,prompt:e.target.value})}
            placeholder='Write Your Prompt Here ...'
            required
            className='form_textarea'>

            </textarea>
        </label>
        <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Tag {` `}
                <span className='font-normal'>(#product , #webdevelopment,#idea)</span>
            </span>
            <input
            value={post.tag}
            onChange={(e)=>setpost({...post,tag:e.target.value})}
            placeholder='#Tag'
            required
            className='form_input'>

            </input>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href="/" className='text-gray-500 text-sm rounded-full px-5 py-1.5 hover:bg-slate-400 hover:text-white'>
              Cancel
          </Link>
          <button
          type='submit'
          disabled={sumbitting} 
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white hover:bg-orange-700' >
            {sumbitting?`${type}...`:type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form