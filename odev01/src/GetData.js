import axios from 'axios'
export default async function getValue(valueId,ValueType){
    if (ValueType == 1 ) {

        const  Users = (await axios(`https://jsonplaceholder.typicode.com/users/${valueId}`) )
        console.log("User" ,Users)
          alert(`Id'si ${valueId} olan kullanıcı çektiniz detayları için console bakabilirsiniz`)
    }
    else if (ValueType == 2) {
        const  Posts = (await axios(`https://jsonplaceholder.typicode.com/posts/${valueId}`) )
        console.log("Post" ,Posts)
          alert(`Id'si ${valueId} olan postu çektiniz detayları için console bakabilirsiniz`)
    }
    else{
        alert("Lütfen Geçerli bir Tip Giriniz")
    }
}
