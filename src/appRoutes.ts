import Home from "./component/Home";
import Result from "./component/Result";

export const appRoutes : Array<any> = [
  {
    path: "/",
    element: Home
  },
  {
    path: "/result",
    element: Result
  }
]