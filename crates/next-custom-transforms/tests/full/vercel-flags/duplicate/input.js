
import {unstable_flag }from '@vercel/flags/next'

export const myFlag = unstable_flag({
    key:'custom-key',
    decide:()=>false,
})