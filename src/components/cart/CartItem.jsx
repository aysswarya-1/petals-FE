import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQty } from '../../app/cartSlice'
import { Trash2 } from 'lucide-react'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex gap-4 border-2 border-rosy-100 p-4 rounded-md'>
            <img src={item.images?.[0].url} className="w-20 h-20 rounded object-cover" />

            <div className="flex-1">
                <h4 className="font-semibold text-rosy-500">{item.title}</h4>
                <p className="text-base text-browny-50">₹{item.price}</p>


                <div className="flex items-center gap-2 mt-2">
                    <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                            dispatch(
                                updateQty({
                                    id: item._id,
                                    qty: Number(e.target.value) || 1,
                                })
                            )
                        }
                        className="w-16 border border-rosy-100 p-1 rounded outline-rose-200 text-browny-100"
                    />

                    <button
                        onClick={() => dispatch(removeFromCart(item._id))}
                        className="text-rosy-500 text-sm hover:text-red-500 hover:cursor-pointer"
                    >
                        <Trash2 />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
