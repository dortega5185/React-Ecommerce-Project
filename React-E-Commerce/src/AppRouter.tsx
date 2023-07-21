import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.scss";
import TopCategories from "./Components/TopCategories/TopCategories";
import Hero from "./Components/Hero/Hero";
import { useEffect, useState } from "react";

export default function AppRouter() {
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     navigate("/")
  //   }
  // })
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <Routes>
      <Route path={"/top-categories"} element={<TopCategories />} />
      <Route path={"/hero"} element={<Hero />} />
      {/* <Route path={"/deals"} element={Deals} /> */}
      {/* <Route path={"/best-sellers"} element={BestSellers} /> */}
      {/* <Route path={"/new-releases"} element={NewReleases} /> */}
    </Routes>
  );
}

// all props have to be typed when using props in typescript
// ex. make an interface with each prop and it's type then when you pass in
// props to the child, destructure them & pass an interface to affect all props
// ex. export default function ConfirmationModal({
// show, title, message, confirmButtonText, onConfirm, onCancel, variant,
// }: ConfirmationModalProps) {return (hello world)}
// })
// example useState with typescript
// const [comments, setComments] = useState<CommentModel[]>([]);
// between angle brackets you can pass in an interface for the data to follow
// only use this method if the type can't be inferred from the default value
// ex. const [commentsLoading, setCommentsLoading] = useState(false); very clear that this is a boolean so no need
// passing an interface to a useContext works the same
// if you want to pass in a null or undefined value you can use the |
// ex. const ModalsContext = createContext<ModalsContext | null>(null)
// so you can have values not exist yet and just pass in null for now
// handleSubmit fn for submit button functionality, the event can handle a
// FormEvent with the type of HTMLFormElement and out of that you can get the
// current value of the input fields
// ex. async function handleSubmit(e: FormEvent<HTMLFormElement>) {
// e.preventDefault();
// const formData = new FormData(e.currentTarget);
// }
