import React from "react";
import Menu from "./Menu";
import "../style.css"

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div className="container">
        {/* <Menu /> */}
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead font-weight-bold lead p " style={{fontSize:"2.2rem",}}>{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
