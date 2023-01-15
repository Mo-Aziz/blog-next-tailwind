import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import Layout from "../layout/Layout";
import Section from "../components/Section";
import LPosts from "../components/LPosts";
import Mviewed from "../components/Mviewed";
import Categories from "../components/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Section />
      <LPosts />
      <Mviewed />
      <Categories />
    </Layout>
  );
}
