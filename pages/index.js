import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Tommykw's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class={styles.header} id={styles.navHeader}>
        <div class={styles.navHeaderLeft}>
            <a href="">Tommykw's Blog</a>
        </div>
        <nav class={styles.navHeaderRight}>
            <ul class={styles.navigation}>
                <li><a href="https://tommykw.github.io/css-tutorials/">Posts</a></li>
                <li><a href="https://tommykw.github.io/css-tutorials/">Snippets</a></li>
                <li><a href="https://tommykw.github.io/css-tutorials/">About Me</a></li>
            </ul>
        </nav>
      </header>

      <div class={styles.main}>
        <div class={styles.item1}>
            <section>
                <h1>Tutorial 1</h1>
                <p>css backgrounds</p>
            </section>
            <section>
                <h1>Tutorial 2</h1>
                <p>css borders</p>
            </section>
            <section>
                <h1>Tutorial 3</h1>
                <p>css box model</p>
            </section>
            <section>
                <h1>Tutorial 4</h1>
                <p>css colors</p>
            </section>
            <section>
                <h1>Tutorial 5</h1>
                <p>css comments</p>
            </section>
            <section>
                <h1>Tutorial 6</h1>
                <p>css flexbox</p>
            </section>
            <section>
                <h1>Tutorial 7</h1>
                <p>css grid</p>
            </section>
            <section>
                <h1>Tutorial 8</h1>
                <p>css height and width</p>
            </section>
        </div>

        <div class={styles.item2}>
            <section>
                <h1>Studies</h1>
                <p>css study</p>
            </section>
        </div>

        <div class={styles.item3}>
            <section>
                <h1>Post</h1>
                <p>css margin</p>
            </section>
        </div>
      </div>

    {/* <footer></footer> */}

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Tommykw Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
 */}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Tommykw's Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
