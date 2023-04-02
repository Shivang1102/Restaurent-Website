import React, { useRef, useState } from "react";
import classes from "./MealIteamForm.module.css";
import Input from "../../UI/Input";



const MealIteamForm = (props) => {

   const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();
  
  
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const numberEnteredAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      numberEnteredAmount < 1 ||
      numberEnteredAmount > 5
    ) {
         setAmountIsValid(false)
      return;
    }

      props.onAddToCart(numberEnteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealIteamForm;
