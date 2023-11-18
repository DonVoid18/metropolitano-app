import "./index.css"
import "typeface-roboto"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "./App"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import { store } from "./app/store"

document.body.style.fontFamily = "Roboto, sans-serif"
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
