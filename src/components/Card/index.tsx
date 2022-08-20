import { faCalendar, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from './types';

function Cart(props: CardProps) {
  const { title, dateTime } = props;

  return (
    <div className="rounded-sm border border-zinc-400 w-full bg-slate-50 py-2 px-4 shadow-white">
      <div className="mb-2">
        <div className="flex items-center ">
          <FontAwesomeIcon icon={faCalendar} width={12} height={12} color='gray' className="mr-2"/>
          <span className="sm:text-sm text-xs">{dateTime}</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-4/5 font-medium">
          <h4>{title}</h4>
        </div>

        <div className="w-1/5 flex justify-end">
          <FontAwesomeIcon icon={faPenToSquare} height={12} width={12} color='#3B82F6' className="hover:cursor-pointer mr-2" />
          <FontAwesomeIcon icon={faTrashCan} height={12} width={12} color='red' className="hover:cursor-pointer"  />
        </div>
      </div>
    </div>
  )
}

export default Cart;