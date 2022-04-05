import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
export default function InputTag(props) {
    let {product}=props
   console.log(product);
   
    
    let showTages=()=>{
        let newArray=[]
        for (let i=0; i<product.length ;i++){
            // console.log(product[i]);
newArray.push(product[i].name)
        }
        // setTags(newArray)
         return newArray;
      
    }
  
    const [tags, setTags] = React.useState(showTages())


 console.log(showTages());


    return (
   

      <ReactTagInput 
    
    
      maxTags={10}
      editable={true}
      readOnly={false}
      removeOnBackspace={true}
        tags={showTages()} 
        onChange={(newTags) =>  
           setTags(newTags)
           
        }


      />
   



    )
}

