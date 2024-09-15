import { Breadcrumbs, Typography } from "@mui/material";
import { FC } from "react";
import { Link, Params, useMatches } from "react-router-dom";

interface IMatches {
    id: string;
    pathname: string;
    params: Params<string>;
    data: unknown;
    handle: unknown;
  }
  
type HandleType={
    crumb : (routeSeg: string, pageName: string) => {routeSegment:string, routeName:string};
}

type PathName = {
    name: string
}

const BreadCrumbs:FC =()=>{
      
    const matches: IMatches[] = useMatches();

    const crumbs = matches
    .filter((match) =>
        Boolean(match.handle && (match.handle as HandleType).crumb)
    )
    .map((match) => (
        match.handle as HandleType).crumb(
            match.pathname, 
            (match.data as PathName).name
        )
    );
    
    return(
        <Breadcrumbs sx={{color: "white"}}>
            {
                crumbs.map((crumb, index)=>(
          
                      <Link to={crumb.routeSegment} key={`crumb-${index}`} style={{textDecoration: "none"}}>
                        <Typography color="white">

                            {crumb.routeName}
                        </Typography>
                      </Link>
                    )
                )
            }
        </Breadcrumbs>
    )
}

export default BreadCrumbs