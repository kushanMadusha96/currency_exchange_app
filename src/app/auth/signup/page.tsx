'use client'
import AuthForm, { PageType } from '@/app/(components)/authform/authform'
import React from 'react'

export default function SignUp() {
  return (
    <AuthForm pageType={PageType.SIGNUP} title='Create New Account' key={'signup'}/>
  )
}
