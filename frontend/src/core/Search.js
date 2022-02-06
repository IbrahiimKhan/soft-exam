import React, { useState, useEffect } from "react";
import { getCategories, list } from "./apiCore";
import Card from "./Card";
import logo from "../static/images/main_logo.png"

import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import Menu from "./Menu";

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false
    });

    const { categories, category, search, results, searched } = data;

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setData({ ...data, categories: data });
            }
        });
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const searchData = () => {
        // console.log(search, category);
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true });
                    }
                }
            );
        }
    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };

    const searchedProducts = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>

                <div className="row">
                    {results.map((product, i) => (
                         <div key={i} className="col-2 mb-3">
                         <Card  product={product}/>
                         </div>
                    ))}
                </div>
            </div>
        );
    };

    const searchForm = () => (
        <>
        <form onSubmit={searchSubmit}>
            <span className="input-group-text">
                <div className="input-group input-group-lg">
                    {/* <div className="input-group-prepend">
                        <select
                            className="btn mr-2 all"
                            onChange={handleChange("category")}
                        >
                            <option value="All">All</option>
                            {categories.map((c, i) => (
                                <option key={i} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div> */}

                    <input 
                        type="search"
                        className="form-control main_search"
                        onChange={handleChange("search")}
                        placeholder="Search Products"
                    />
                </div>
                <div
                    className="btn input-group-append"
                    style={{ border: "none" }}
                >
                    <button className="input-group-text search-1" ><i className="fas fa-search"></i></button>
                </div>
            </span>
        </form>
        
        </>
    );

    return (
        <div className="container-fluid">
        <div className="container-fluid head_top ">
            <div className="container ">
                <div className="row ">
               
               <div className="col-md-6">
                   <h3>+8801792-777660 info@laksura.com</h3>
                  
               </div>
                <div className="col-md-6 d-flex justify-content-end">
                   <h3>Download Our App Now!</h3>
                   
                  
               </div>
               </div>
               </div>
       </div>
       <div className="container">
            <div className="row d-flex align-items-center main_search_div">
                <div className="col-lg-2 col-md-2">
                    <Link to="/"><img src={logo} className="img-fluid" alt="" /></Link>
                </div>
                <div className="col-lg-8 col-md-7">
               {searchForm()}
                </div>
                <div className=" col-lg-2 col-md-3 d-flex justify-content-end">
                <Menu/>
                </div>
            </div>
            </div>

            <div className="container-fluid">
               <div className="container">
               {searchedProducts(results)}
               </div>
            </div>
        
        </div>
    );
};

export default Search;
