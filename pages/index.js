import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a highly skilled and experienced Web Developer with a strong focus on WordPress development. With a constant drive to evolve and improve my skillset, I'm committed to crafting high-performing, optimised solutions that adhere to the latest standards. I excel at  transforming a vision into a working solution that not only fulfils the design goals but also supports the business objectives. My passion for conversion optimisation, business metrics, and ROI measurement complement my technical skills, ensuring that the websites I build are both aesthetically pleasing and effective business tools.</p>         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}