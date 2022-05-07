import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { amountAdded, incremented } from "./CounterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(incremented());
  }
  const handleAddTen = () => {
    dispatch(amountAdded(10));
  }
  return (
    <>
    <Button
      variant="contained"
      onClick={handleClick}
    >
      count: is {count}
    </Button>
    <Button
      onClick={handleAddTen}
    >
      add 10: is {count}
    </Button>
    </>
  )
}

export default Counter;