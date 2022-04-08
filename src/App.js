import {useContext, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from './context/AuthContext';

// pages
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login"
import {HardwareStore} from "./pages/hardwareStore/HardwareStore";
import { Customers } from './pages/customer/Customers'
import { NewProducts } from "./pages/newProducts/NewProducts";
import {Bill} from './pages/bill/Bill'
import { Map } from "./pages/Map/Map";
import {BillContext} from "./context/bill/BillContext";
import {URL_API} from "./utils/data";
import {GenerateBill} from "./pages/generateBill/GenerateBill";



const App = () => {

  const { darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext)

    const {fillProducts} = useContext(BillContext);

    useEffect(() => {
        fetch(URL_API + "/products", {
            method: "GET"
        })
            .then(response => response.json()
                .then((list) => fillProducts(list)))
    }, [])


  const RequiredAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route index element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>} />

              <Route path="harwareStore">
              <Route index
                element={
                  <RequiredAuth>
                    <HardwareStore />
                  </RequiredAuth>
                }
              />
            </Route>

            <Route path="customers">
            <Route index
                element={
                  <RequiredAuth>
                    <Customers />
                  </RequiredAuth>
                }
              />
            </Route>

            <Route path="products">
            <Route index
                element={
                  <RequiredAuth>
                    <NewProducts />
                  </RequiredAuth>
                }
              />
            </Route>

            <Route path="bill">
              <Route index
                 element={
                     <RequiredAuth>
                         <Bill />
                     </RequiredAuth>
              }
              />
            </Route>

              <Route path="generateBill">
                  <Route index
                         element={
                             <RequiredAuth>
                                 <GenerateBill />
                             </RequiredAuth>
                         }
                  />
              </Route>

            <Route path="map">
            <Route index
                element={
                  <RequiredAuth>
                    <Map />
                  </RequiredAuth>
                }
              />
            </Route>
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export {App};
