import Head from "next/head";
import { Basic } from "@/components/Basic";
import { Testimonial } from "@/components/Testimonial";
export default function Page() {
  return (
    <>
      <Head>
        <title>Root 1</title>
      </Head>
      <>
        <Basic t1="Bloque Basico solo una p" />
        <Testimonial
          t1="Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar."
          t2="HOLDEN CAULFIELD"
          t3="Senior Product Designer"
        />
      </>
    </>
  );
}
