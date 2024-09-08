'use client'
import AuthForm, { PageType } from '@/app/(components)/authform/authform'
import React from 'react'

export default function SignIn() {
  return (
    <AuthForm pageType={PageType.SIGNIN} title='Login Account' key={'signin'}/>

  )
}
