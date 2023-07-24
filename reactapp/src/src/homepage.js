
import React from "react";
import { Link } from "react-router-dom";

import './homepage.css';
function Home(){
    return(
      <div className="main">
      <div className="top">
      <ul>
      
        <Link to='/about'><li><a href="#about">About</a></li></Link>
        <li><a href="#contact">Contact</a></li>
        <Link to='/products'><a href="#product">Products</a></Link>
        <Link to='/'><li><a href="#home">Sign Out</a></li></Link>
      </ul>

    </div>
      <div className="img">
      <img src="https://optimoroute.com/wp-content/uploads/2021/03/Logistic-Management-Hero.jpg"/>
      </div>
    <div className="details">
      <p>Logistics management is the governance of supply chain management functions that helps organizations plan, manage and implement processes to move and store goods.

Logistics management activities typically include inbound and outbound transportation management, fleet management, warehousing, materials handling, order fulfillment, logistics network design, inventory control, supply/demand planning and management of third-party logistics services providers.
</p><p>
Logistics management functions
To varying degrees, logistics management functions include customer service, sourcing and procurement, production planning and scheduling, packaging, and assembly. Logistics management is part of all the levels of planning and execution, including strategic, operational and tactical.

Further, it coordinates all the logistics activities, and it integrates logistics activities with other functions, including marketing, sales, manufacturing, finance and information technology.
</p>
<p>
Importance of logistics management
Effective logistics management is important to companies for a number of reasons, both positive and negative.

Good logistics management ensures that products are shipped in the most economical, safe, efficient and timely manner. This results in cost savings for the company and more satisfied customers.

In contrast, poor logistics management can result in damaged or delayed shipments, which can then lead to dissatisfied customers, returns and scrapped products. The consequences of these problems include higher costs and customer relation problems.
</p><p>
In order to avoid these results, effective logistics management includes careful planning, proper software system selection, proper vetting and selection of outsourced vendors, and adequate resources to handle the processes.

Logistics management process
Logistics management generally consists of processes for inbound and outbound logistics traffic. Inbound logistics is the process of moving goods from suppliers into a warehouse, then into a production facility to make products. Inbound logistics can include raw materials, tools, component parts, office equipment and supplies. Outbound logistics is the process of moving finished products out of warehouse inventory and shipping them to customers.

</p>
    </div>
    <div className="con">
        <a id="contact" className="anchor-name">warehousemanager123@gmail.com</a><br/>
        <a className="anchor-name">+91 9876543210</a>
      </div>
</div>
    );
}
export default Home;