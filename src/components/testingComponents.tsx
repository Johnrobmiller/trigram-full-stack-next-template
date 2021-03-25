import React from 'react'
import _ from 'lodash'
import { useRecoilValue, RecoilRoot } from 'recoil'
import { testingRecoilState } from '../states/testingRecoil'

type deleteThisType = 'Making sure Typescript is working.'
const deleteThisString: deleteThisType = 'Making sure Typescript is working.'

export default function TestingComponents() {

  const testingRecoil: string = useRecoilValue(testingRecoilState)

  return (
    <React.Fragment>

      <p className='bg-green-300'>
        Making sure Tailwind is working.  Also, if you ever needing to use your own non-tailwind css styles, Next.js has special requirements on how to do this, and it is slightly counterintuitive (or at least is was for me), so to learn more, go to: 

        <a href='https://nextjs.org/docs/basic-features/built-in-css-support' className='text-blue-700'>
          https://nextjs.org/docs/basic-features/built-in-css-support
        </a>

      </p>
      
      <p className='bg-blue-300'>
        {deleteThisString}
      </p>

      <p className='bg-red-300'>
        Making sure lodash is working: {_.reverse([1, 2, 3, 4])}
      </p>

      <p className=' bg-yellow-300'>
        Making sure recoil is working: "{testingRecoil}"
      </p>

    </React.Fragment>
  )
}