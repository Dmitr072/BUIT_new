import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import AuthForm from '../components/AuthForm'
import styled from 'styled-components'

// const Title = styled.h1`
// color: red;
// `

export default function Home() {
  return (
    <div>
      <Head>
        <title>БУИТ - служба поддержки</title>
      </Head>
      {/* 

      <Link href="/blog">
        Blog
      </Link>

      {/* <Navbar /> */}
      <AuthForm />
    </div>
  )
}
