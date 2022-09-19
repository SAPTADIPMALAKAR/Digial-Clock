
import React, {useState} from 'react';
import './App.css';

function App() {
  
   let time = new Date().toLocaleTimeString();

   

    const [count, setCount] = useState(time);

    const UpdateTime = () => {

        time = new Date().toLocaleTimeString();

        setCount(time);

    };

    setInterval(UpdateTime,1000)
const [data, setData] = React.useState(null);


async function updateQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const { statusCode, statusMessage, ...data } = await response.json();
    if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
    setData(data);
  } catch (error) {
    console.error(error);
    setData({ content: "Opps... Something went wrong" });
  }
}

console.log(data);
React.useEffect(() => {
  updateQuote();
}, []);



if (!data) return null;



    return(

        <div className='App'>

           <h1> {count}</h1>
           <p>{data.content}</p>
           <h2>{data.author}</h2>

           

        </div> 

    );

}

export default App;
