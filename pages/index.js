import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="歡迎來到首頁!" />
        <p className="description">
          作業二完成
        </p>
      </main>

      <Footer />
    </div>
  )
}
