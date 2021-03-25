import { atom, RecoilState } from 'recoil'

export const testingRecoilState: RecoilState<string> = atom({
  key: 'testing',
  default: 'Hello world!'
})