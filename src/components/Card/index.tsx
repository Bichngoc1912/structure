import { formatNumber } from '@/helper/numberHelper';
import { CardProps } from "./types";
import Image from "next/image";
function Cart(props: CardProps) {
  const { title, src, remainProduct, price, discount, priceDiscount } = props;

  return (
    <div className="rounded-lg border border-zinc-400 w-full p-2 shadow-white w-44 mr-2 flex flex-col justify-between">
      <div
        style={{ width: '100%', height: 100 }}
        className="relative hover:opacity-70"
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={src}
          alt="img...."
          className="tw-rounded-xl"
        />
      </div>

      <div style={{ height: 110 }}>
        <div  className="truncate">
          <span className='text-sm'>{title}</span>
        </div>
        <div className="block">
          {remainProduct && (
            <><span className="text-amber-500 text-xs">Còn {remainProduct} sản phẩm</span> <br /></>
          )}
          
          <span className="text-red-500 text-xs">{formatNumber(price)} đ</span>
          {discount && (
            <div className="flex items-end">
              <span className="text-sm text-gray-500 mr-2 line-through text-xs"> {formatNumber(priceDiscount)} đ</span>
              <span className="text-red-600 text-xs">{discount} %</span>
            </div>
          )}
        </div>
      </div>

      <div>
         <button className="py-2 px-4 border-red-500 border rounded-md text-red-500 font-medium w-full">Thêm vào giỏ</button>
       </div>
    </div>
  );
}

export default Cart;
