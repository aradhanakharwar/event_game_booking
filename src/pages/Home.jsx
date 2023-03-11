// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProducts } from '../store/slice/HomeSlice'
// import { addToCart, removeFromCart } from '../store/slice/CartSlice'

// const Home = () => {

//     const dispatch = useDispatch()
//   const { data, status } = useSelector((state) => state.api)
//   const cart = useSelector((state) => state.cart)

//   useEffect(() => {
//     dispatch(fetchProducts())
//   },[])

//   const add = (item) => {
//     dispatch(addToCart(item))
//     console.log(item)
//   }
// //   const remove = (item) => {
// //     dispatch(removeFromCart(item))

// //   };

//     return (
//         <div>
//             <>
//                 {/* <h3 className='heading_style'>Shopping Store</h3> */}

//                 {/* <div className="container">
//                     <h3 style={{ textAlign: 'center' }}>Games</h3>
//                     <div className="row">
//                         <>
//                             <div className="col-md-3 mb-4">
//                                 <div className="cards">
//                                     <div className="card" style={{ height: '23rem', width: '12rem', padding: '20px', backgroundColor: '#fcf3e6' }}>
//                                         <img alt="" className='card_image card-image-top'></img>
//                                         <div className="card-info" style={{ textAlign: "center" }}>
//                                             <div className='title'><p>Game name</p></div> */}
//                 {/* <div className='price'>₹ {item.price}</div> */}
//                 {/* <div className='button'>
//                                                 {cart.some(data => data.id === item.id) ?
//                                                     <button variant="contained" onClick={() => remove(item.id)} style={{ backgroundColor: '#f50505' }}>Remove</button> :
//                                                     <button variant="contained" onClick={() => add(item)} style={{ backgroundColor: '#14ed11' }}>Add To Cart</button>
//                                                 }
//                                             </div> */}

//                 {/* </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </>

//                     </div>
//                 </div> */}

//                 <h3 className='heading_style'>{status}</h3>

//                 <div class="card" style="width: 18rem;">
//                     <img src="..." class="card-img-top" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">Hi Sticker</h5>
//                         <a onClick={() => add(item)} class="btn btn-primary">Add Game</a>
//                     </div>
//                 </div>
//                 <div class="card" style="width: 18rem;">
//                     <img src="..." class="card-img-top" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">Push Challenge</h5>
//                         <a onClick={() => add(item)} class="btn btn-primary">Add Game</a>
//                     </div>
//                 </div>
//                 <div class="card" style="width: 18rem;">
//                     <img src="..." class="card-img-top" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">Bow and Arrow</h5>
//                         <a onClick={() => add(item)} class="btn btn-primary">Add Game</a>
//                     </div>
//                 </div>
//                 <div class="card" style="width: 18rem;">
//                     <img src="..." class="card-img-top" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">Catch Fish</h5>
//                         <a onClick={() => add(item)} class="btn btn-primary">Add Game</a>
//                     </div>
//                 </div>
//             </>
//         </div>
//     )
// }

// export default Home
