import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";
import Image from "next/image";

export default function Home({ articles }) {
  return (
    <>
      <PageLayout />
      <div className={styles.container}>
        <Head>
          <title>News App - Home</title>
        </Head>
        <h1>Aprendiendo Next</h1>

        {articles.length === 0 && <p>No articles</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <article key={index}>
              <Image
                layout='responsive'
                width={450}
                height={300}
                src={
                  "https://www.shutterstock.com/image-vector/news-anchor-on-tv-breaking-600w-442698565.jpg"
                }
                alt={`Image for title ${article.title}`}
                // ES PRIORIDAD SI EL ORDEN ES MENOR A 2, HAY QUE USARLO SOLO EN FUNCIONES MUY IMPORTANTES
                priority={index < 2}
                // BLUR SOLO FUNCIONA CON IMAGENES LOCALES
                // placeholder='blur'
                // blurDataURL= SE PUEDE PONER ALGO EN BASE 64
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </article>
          ))}

        {/* NO TENEMOS QUE USAR BOTONES PARA NAVEGAR ENTRE PAGINAS DENTRO DE LA APP
          EL PUSH LO PODEMOS USAR POR EJEMPLO COMO RESPUESTA A UNA ACCION (SIMIL NAVIGATE DEL ROUTER)
      */}
        {/* NO ! X  */}
        {/* <button onClick={() => router.push("/article/2")}>
        Navegar de forma programatica
      </button> */}
      </div>
    </>
  );
}

// LA MAYOR DIFERENCIA ENTRE STATIC Y SERVER SIDE, ES QUE EL STATIC LO USAMOS CUANDO NO SON NUMEROS ILIMITADOS DE DATOS
// LOS SERVER SON MAS PARA DATOS ILIMITADOS
// --------------------------------------------
// SE EJECUTA UNA VEZ SOLA EN BUILD TIME
// LO USAMOS CUANDO NO SON NUMEROS ILIMITADOS DE DATOS Y DINAMICOS CONTANTEMENTE
// INCREMENTAL STATIC REGENERATION
export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-11-16&sortBy=publishedAt&apiKey=14825efe42994ca68123c3d227445956"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}

// N REQUEST SE EJECUTA N VECES, SON DATOS QUE TIENEN QUE SER MUY EN VIVO O SON MUY DINAMICOS
// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2022-11-08&sortBy=publishedAt&apiKey=14825efe42994ca68123c3d227445956"
//   );
//   const { articles } = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }
