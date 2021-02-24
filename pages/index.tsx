import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import TestingComponents from '../components/testingComponents'

export default function Home() {

  return (
    <RecoilRoot>
      <TestingComponents />
    </RecoilRoot>
  )
}
