function App() {


  const array1 = [1,2,3]
  const array2 = [4,5,6]

  let ans = [...array1,...array2,7,8,9];
  console.log(ans);


  let objs ={
    name : 'sweetu',
    phone : 112233
  }

  let country ={
    country :'india',
    state : 'gujarat',
    city :'surat',
  }

  let answers = {
    ...objs,
    ...country
  }

  console.log(answers);


  let arr1= [1,2,3]
  let arr2= [4,5,6]
  let arr3= [7,8,9]
  let arr4= [11,12,13]

  let answer = arr1.concat(arr2).concat(arr3).concat(15,16 ,17).concat(arr4)

  console.log(answer);

let obj = [
  {
    name : 'sweetu',
    phone : 1122233
  },
  {
    name : 'ajay',
    phone : 445566
  }
]
 
obj.map((val)=>{
  const {name,phone} = val;
  console.log(name);
  console.log(phone);
})


return (
  <h3>topic - destructure </h3>
)
}

export default App