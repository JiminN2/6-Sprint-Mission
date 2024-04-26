import React, { useEffect, useState} from "react";
import ItemCard "./ItemCard";
import { getProducts } from "../../../api";



function ItemDetailSection() {
    const [itemList, setItemList]= useState([]);
    
    return(
        <div className="itemDetailContainer">
            <div className="itemDetailCard">
                {itemList?.map((item) => (
                    <ItemCard item={item} key={`item-detail-${item.images}`} />
                ))}
            </div>
        </div>
    )
}

export default ItemDetailSection;