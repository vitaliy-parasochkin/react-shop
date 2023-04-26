import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Main from "./components/Main.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

// import Header from "./components/Header";
// import ProductItem from "./components/ProductItem";

// export default function App() {
//     return (
//         <div className="main-layout">
//             <Header />
//             <main>
//                 <div className="container">
//                     <div className="product-item-list">
//                         <ProductItem />
//                         <ProductItem />
//                         <ProductItem />
//                         <ProductItem />
//                         <ProductItem />
//                         <ProductItem />
//                         <ProductItem />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }
