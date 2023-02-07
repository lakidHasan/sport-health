import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HealthDescribe from "../components/HealthDescribe";
import StaticBar from "../components/StaticBar";
import FullBodyEx from "../components/FullBodyEx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sport Healthy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <HealthDescribe />
      <StaticBar />
      <FullBodyEx />
    </>
  );
}
