const todo = process.env.PUBLIC_URL + '/images/projectImages/todo.png';
const shoppingCart = process.env.PUBLIC_URL + '/images/shopp.png';
const ecomm = process.env.PUBLIC_URL + '/images/projectImages/mobile.jpeg';
const tictactoe = process.env.PUBLIC_URL + '/images/projectImages/tictac.jpeg';


export const Project=[
  {  
    id:1,
    name:"Todo list Project",
    img:todo,
    gitLink:'https://hkaur108.github.io/todolist/'
  },
    {  
    id:2,
    name:"E-commerce Website",
    img:ecomm,
    gitLink:'https://hkaur108.github.io/e-commerce/'

  },
    
    {  
    id:3,
    name:"Shopping Cart Website",
    img:shoppingCart,
    gitLink:'https://hkaur108.github.io/ShoppingCart/'
},
 {  
    id:4,
    name:"Tic Tac Toe Game",
    img:tictactoe,
    gitLink:'https://hkaur108.github.io/tictactoe/'
},
//  {  
//     id:5,
//     name:"URL Shortner Project",
//     img:"../Images/projectImages/urls.png",
//     gitLink:'https://github.com/hkaur108/shopping-cart.git'
// },
// {  
//     id:6,
//     name:"QR Code Generator",
//     img:"../Images/projectImages/qrCode.png",
//     gitLink:'https://github.com/hkaur108/shopping-cart.git'
// }

]