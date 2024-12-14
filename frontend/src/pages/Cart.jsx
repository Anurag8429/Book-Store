// import React, { useContext } from 'react'
// import { TbTrash } from 'react-icons/tb'
// import { FaMinus, FaPlus } from 'react-icons/fa6'
// import Title from '../Components/Title'
// import { ShopContext } from '../Context/ShopContext'
// import Footer from '../Components/Footer'
// import CartTotal from '../Components/CartTotal'

// const Cart = () => {
//   const {books, navigate , currency , cartItems, getCartAmount , updateQuantity} = useContext(ShopContext)


  
//   return (
//    <section className='max-padd-container'>
//     <div className='pt-28'>
//        {/* Title */}
//        <Title title1={'Cart '} title2={'List'} title1Styles={'h3'}/>

//        {/* Cart Items */}
//        <div className='mt-6'>
//         {books.map((item)=>{
//           if(cartItems[item._id] > 0){
//             return (
//               <div key={item._id} className='bg-white p-2 mt-3 rounded-lg '>
//                 <div className='flex gap-x-3'>
//                   <div className='flex items-start gap-6'>
//                     <img src={item.image} alt="itemImage" className='w-14 rounded' />
//                   </div>
//                   <div className='flex flex-col w-full'>
//                     <h5 className='h5 !my-0 line-clamp-1'>{item.name}</h5>
//                     <div className='flex items-start justify-between'>
//                       <div>
//                         <p className='mb-1.5'>{item.category}</p>
//                         <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary'>
//                           <button onClick={()=> updateQuantity(item._id, cartItems[item._id] - 1)} className='p-1.5 bg-white rounded-full 
//                           shadow-md '><FaMinus/></button>
//                           <p className='px-2'>{cartItems[item._id]}</p>
//                           <button onClick={()=> updateQuantity(item._id, cartItems[item._id] + 1)} className='p-1.5 bg-white rounded-full shadow-md'><FaPlus className='text-xs'/></button>
//                         </div>
//                       </div>
//                       <h4 className='h4'>{currency}{item.price}</h4>
//                       <TbTrash onClick={()=> updateQuantity(item._id, 0)} className='cursor-pointer text-xl text-secondary'/>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           }

//           return null;
//         })}
//        </div>
//     </div>

//     {/* Cart Summary */}
//     <div className='flex mt-20'>
//       <div className='w-full sm:w-[450px]'>
//         <CartTotal/>
//         <button onClick={()=> navigate('/place-order')}
//           className='btn-secondaryOne mt-7'>
//             Proceed to Checkout
//         </button>
//       </div>
//     </div>

//     <Footer/>


//    </section>
//   )
// }

// export default Cart


import React, { useContext } from 'react'
import { TbTrash } from 'react-icons/tb'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Title from '../Components/Title'
import { ShopContext } from '../Context/ShopContext'
import Footer from '../Components/Footer'
import CartTotal from '../Components/CartTotal'

const Cart = () => {
  const { books, navigate, currency, cartItems, getCartAmount, updateQuantity } = useContext(ShopContext)

  return (
    <section className='max-padd-container'>
      <div className='pt-28'>
        {/* Title */}
        <Title title1={'Cart '} title2={'List'} title1Styles={'h3'} showPara={false} />

        {/* Cart Items */}
        <div className='mt-6'>
          {books.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className='bg-white p-2 mt-3 rounded-lg'>
                  <div className='flex gap-x-3'>
                    <div className='flex items-start gap-6'>
                      <img src={item.image} alt="itemImage" className='w-14 rounded' />
                    </div>
                    <div className='flex flex-col w-full'>
                      <h5 className='h5 !my-0 line-clamp-1'>{item.name}</h5>
                      <div className='flex items-start justify-between'>
                        <div>
                          <p className='mb-1.5'>{item.category}</p>
                          <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary'>
                            <button
                              onClick={() => updateQuantity(item._id, cartItems[item._id] - 1)}
                              className='p-1.5 bg-white rounded-full shadow-md'
                            >
                              <FaMinus />
                            </button>
                            <p className='px-2'>{cartItems[item._id]}</p>
                            <button
                              onClick={() => updateQuantity(item._id, cartItems[item._id] + 1)}
                              className='p-1.5 bg-white rounded-full shadow-md'
                            >
                              <FaPlus className='text-xs' />
                            </button>
                          </div>
                        </div>
                        <h4 className='h4'>{currency}{item.price}</h4>
                        <TbTrash onClick={() => updateQuantity(item._id, 0)} className='cursor-pointer text-xl text-secondary' />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>

      {/* Cart Summary */}
      <div className='flex mt-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <button onClick={() => navigate('/place-order')} className='btn-secondaryOne mt-7'>
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Cart


