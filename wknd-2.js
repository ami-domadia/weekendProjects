const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
  
  const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
  ];
  
  // productId matches up with product in products
  // userId matches up with user in users
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 4,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];
  
  console.log(productsPurchased(orders, products)); // logs foo and bazz products
  
  console.log(topSellingProductByQuantity(orders, products));//logs bazz product
  
  console.log(usersWithOrders(users, orders));//logs info on moe and curly


  function productsPurchased(orders, products){
    return products.filter(val=>(orders.reduce((acc,val)=>{
      if(acc && !acc.includes(val.productId)) acc.push(val.productId);
      return acc;
    },[])).includes(val.id));
  }

  function topSellingProductByQuantity(orders, products){
    let qty=[];
    let unique=[];
    orders.forEach(function(val){
      if(!unique.includes(val.productId)){
        unique.push(val.productId);
        qty[unique.indexOf(val.productId)]=val.quantity;
      }
      else{
        qty[unique.indexOf(val.productId)]+=val.quantity;
      }
    });
    return products.filter((val)=>val.id===unique[qty.indexOf(Math.max(...qty))]);
  }

  function usersWithOrders(users, orders){
    return users.filter(val=>(orders.reduce((acc,val)=>{
      if(acc && !acc.includes(val.userId)) acc.push(val.userId);
      return acc;
    },[])).includes(val.id));
  }