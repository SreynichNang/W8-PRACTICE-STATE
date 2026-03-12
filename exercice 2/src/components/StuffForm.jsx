import { useState } from "react";

export default function StuffForm({onSubmit}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function nameHandler(event) {
    setName(event.target.value);
  }

  function priceHandler(event) {
    setPrice(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    onSubmit(name, price);
  } 

  return (
    <form className="stuff-form" onSubmit={submitHandler}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={nameHandler}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={priceHandler}/>

      <button>Add Stuff</button>
    </form>
  );
}
