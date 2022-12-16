import Head from "next/head";
import Link from "next/link";

export default function PageLayout({ children, title = "News App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='New app generate with next js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div>
          <Link href='/'>News App</Link>
        </div>
        <div>
          <Link href='/about'>About</Link>
        </div>
      </header>
      <main>{children}</main>

      <style jsx>
        {`
          header {
            padding: 20px;
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
}
