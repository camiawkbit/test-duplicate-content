import Head from "next/head";
import { Hero } from "@/components/Hero";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Head>
        <title>Child 1</title>
      </Head>
      <Hero
        t1={
          <>
            Before they sold out <br className="hidden lg:inline-block" />{" "}
            readymade gluten
          </>
        }
        t2="Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."
        t3="Button"
        t4="Button"
        t5={
          <Image
            src="/720x600"
            width={720}
            height={600}
            alt="hero"
            className="object-cover object-center rounded"
          />
        }
      />
    </>
  );
}
