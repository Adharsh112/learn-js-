let programming = ["cpp","java","js","golang"];

// programming.forEach( function (val){
//     console.log(val);
// })

// programming.forEach((item)=>{
//     console.log(item );
// })

programming.forEach((item ,index , arr)=> {
    // console.log(item,index , arr ); //it has item , index , total array list of the array
})

const myCoding = [
    {
        language : "javaScript",
        languageCode : "JS"
    },
    {
        language : "GoLang",
        languageCode : "Go"
    },
    {
        language : "java",
        languageCode : "java"
    },
    {
        language : "python",
        languageCode : "py"
    }
    
]

myCoding.forEach((item)=>{
    console.log(item.language);
})