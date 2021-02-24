import Head from 'next/head'

type deleteThisType = 'Testing Typescript to make sure it is working.'
const deleteThisString: deleteThisType = 'Testing Typescript to make sure it is working.'

export default function Home() {
  return (
    <div>
      <p className='bg-green-300'>
        Testing Tailwind to make sure it is working.  Also, if you ever needing to use your own non-tailwind css styles, Next.js has special requirements on how to do this, and it is slightly counterintuitive (or at least is was for me), so to learn more, go to: 

        <a href='https://nextjs.org/docs/basic-features/built-in-css-support' className='text-blue-700'>
          https://nextjs.org/docs/basic-features/built-in-css-support
        </a>

      </p>
      
      <p className='bg-blue-300'>
        {deleteThisString}
      </p>

    </div>
  )
}
