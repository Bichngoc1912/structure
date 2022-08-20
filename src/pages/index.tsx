import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import Cart from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nguyen Thi Bich Ngoc</title>
        <meta name="description" content="Nguyen Thi Bich Ngo" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto my-0 max-w-screen-md bg-slate-100 p-8 mt-8">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-blue-400 rounded-full md:w-9 md:h-9 w-7 h-7 flex justify-center items-center text-slate-50 md:mr-4 mr-2"> 1 </div>
            <span>TODO</span>
          </div>
          <Button startIcon={faPlus} children="New task" />

        </div>

        <Cart dateTime="20/08/2022 14:30:00 PM" title="Task Demo"/>
      </div>
    </div>
  );
};

export default Home;
