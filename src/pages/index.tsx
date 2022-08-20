import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Cart from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import data from '@/assets/dataFake/data.json';

const Home: NextPage = () => {
  const merchantList = data;
  const renderMerchantProduct = merchantList.relatedProducts.map((item, idx) => {
    return <Cart title={item.name} src={item.image} price={item.price} discount={item.discountPercent} key={idx} priceDiscount={item.priceDiscount} 
    remainProduct={item.availableQuantity} />
  })
  return (
    <div className={styles.container + 'bg-white'}>
      <Head>
        <title>Nguyen Thi Bich Ngoc</title>
        <meta name="description" content="Nguyen Thi Bich Ngo" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="p-2">
      <div
        style={{ width: '100%', height: 400 }}
        className="relative hover:opacity-70"
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={"https://lh3.googleusercontent.com/OPNIaDml5ZTh9653Gqtxc8BaWFqHZmSjaMs0ou321y3YWNR_68HybgMlVsflBN147gok7WxnsmrB7rKq9Z4a1mhnaS2lSYUPMA=rw-w300"}
          alt="img...."
          className="tw-rounded-xl"
        />
      </div>

      <div className="mb-4">
        <span className="text-red-600 text-2xl font-medium">258.000 đ</span> <br />
        <div>
          <span className="text-sm text-gray-500 mr-2 line-through">
            280.000 đ 
          </span>
          <span className="text-red-600">10%</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="mb-1">Laptop ASUS VivoBook 14 A412FA-EK734T (14\" FHD/i5-10210U/8GB/512GB SSD/Intel UHD)</span> <br />
        <p>By <span className="text-blue-500">XIAOMI</span></p>
      </div>
      
      <div className="flex overflow-x-scroll">
        {renderMerchantProduct}
      </div>
    </div>
      
    </div>
  );
};

export default Home;
