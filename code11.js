
//destructing 

 const colors = ["red","green","blue","black","pink"];

 const [firstcolor,secondcolor,thirdcolor,...extracolor] = colors;

 console.log(firstcolor);
 console.log(secondcolor);
 console.log(thirdcolor);
 console.log(extracolor);
