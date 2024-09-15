import { Box, Paper } from "@mui/material";
import { FC } from "react";
import ProductList from "../components/Products/ProductList";

const Products:FC = ()=>{

    return(
        <Box padding={1} width={"100%"}>

            <Paper sx={{ width: '100%'}}>
                
                <ProductList/>
            </Paper>

        </Box>
    )
}

export default Products