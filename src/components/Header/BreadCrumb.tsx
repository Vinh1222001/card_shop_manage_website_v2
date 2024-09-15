import { Breadcrumbs } from "@mui/material";
import { FC } from "react";
import { useMatches } from "react-router-dom";

const BreadCrumbs:FC =()=>{
    let matches = useMatches();

    let crumbs = matches
        // .filter((match) => Boolean(match.handle?.crumb))
    //     .map((match) => match.handle.crumb(match.pathname, match.data?.name));
    console.log(crumbs);
    
    
    return(
        <Breadcrumbs>
            Something
        </Breadcrumbs>
    )
}

export default BreadCrumbs