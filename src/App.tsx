import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/AsyncActions";

const App = () => {

  const { users, isLoding, error } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();
  console.log(users);


  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      console.log(users);
    </div>
  );
}

export default App;
