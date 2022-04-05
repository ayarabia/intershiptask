

export default  function ProdUctes(type) {
 let productList=[]
  switch (type) {
      case 'default':
      productList=[]
      break;
        case 'A':
            productList= [{name:"product1",quntity:20,type:'A'},{name:"product2",quntity:40,type:'A'}]
          break;
        case 'B':
            productList= [{name:"product4",quntity:50,type:'B'},{name:"product3",quntity:100,type:'B'}]
          break;
        case 'C':
            productList= [{name:"product7",quntity:200,type:'C'},{name:"product4",quntity:90,type:'C'}]
          break;
        case 'D':
            productList= [{name:"product8",quntity:80,type:'D'},{name:"product2",quntity:90,type:'D'}]
          break;
        case 'E':
            productList= [{name:"product12",quntity:20,type:'E'},{name:"product4",quntity:20,type:'E'}]
          break;
        case 'F':
            productList= [{name:"product9",quntity:20,type:'F'},{name:"product8",quntity:20,type:'F'}]
          break;
        case 'G':
            productList= [{name:"product6",quntity:20,type:'G'},{name:"product11",quntity:20,type:'G'}]
        break;
        case 'H':
            productList= [{name:"product8",quntity:20,type:'H'},{name:"product19",quntity:20,type:'H'}]
          break;
          case 'I':
            productList= [{name:"product3",quntity:20,type:'I'},{name:"product7",quntity:20,type:'I'}]
          break;


      }
    return productList;
    
      
}

