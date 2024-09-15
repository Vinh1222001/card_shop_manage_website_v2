import { Checkbox, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getAllProducts } from "../../services/axios/products";
import { Link } from "react-router-dom";

interface IProduct{
    id: string,
    name: string,
    description: string,
    video: string,
    color: string,
    colorsys: string,
    sides: string,
    seen: number,
    price: string,
    pritech: string,
    cut: string,
    time: string,
    category: string,
    material: string,
    effect: string,
    size: string,
    createdAt: string,
    updatedAt: string,
    avatarHover:{
        imgSrc: string
    } | null,
    status:{
        value: string
    } | null,
    avatar:{
        imgSrc: string
    } | null,
}

const tableHeaders: string[] = [
    'ID',
    'Name',
    'Description',
    'Video',
    'Color',
    'Color System',
    'Sides',
    'Seen',
    'Price',
    'Pritech',
    'Cut',
    'Time',
    'Category',
    'Material',
    'Effect',
    'Size',
    'Created At',
    'Updated At',
    'Avatar Hover Image',
    'Status',
    'Avatar Image'
  ];

const ProductList:FC = () =>{
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts,
    })

    if (isLoading) {
    return <span>Loading...</span>
    }

    if (isError) {
    return <span>Error: {error.message}</span>
    }
    return(
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead >
                    <TableRow>
                        <TableCell padding="checkbox" key={`table-header-0`}>
                            <Checkbox
                                color="primary"
                                // checked={isItemSelected}
                                // inputProps={{
                                // 'aria-labelledby': labelId,
                                // }}
                            />
                        </TableCell>

                        {
                            tableHeaders.map((header, index)=>(
                                <TableCell 
                                    key={`table-header-${index+1}`} 
                                    align="center" 
                                    variant={"head"} 
                                    sx={{fontWeight: "bold"}}>
                                    {header}
                                </TableCell>
                            ))
                        }

                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        (data as any)?.map((product:IProduct, index:number)=>(
                            <TableRow key={`product-${index}`}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        // checked={isItemSelected}
                                        // inputProps={{
                                        // 'aria-labelledby': labelId,
                                        // }}
                                    />
                                </TableCell>

                                <TableCell>
                                    <Link to={product.id}>
                                    
                                        {product.id}
                                    </Link>

                                </TableCell>

                                {/* Product Name */}
                                <TableCell>{product.name}</TableCell>

                                {/* Description */}
                                <TableCell>{product.description}</TableCell>

                                {/* Video */}
                                <TableCell>{product.video}</TableCell>

                                {/* Color */}
                                <TableCell>{product.color}</TableCell>

                                {/* Colorsys */}
                                <TableCell>{product.colorsys}</TableCell>

                                {/* Sides */}
                                <TableCell>
                                    {product.sides.split(', ').map((item, index)=>(
                                        <Chip key={`sides-${index}`} label={item}/>
                                    ))}
                                </TableCell>

                                {/* Seen Count */}
                                <TableCell>{product.seen}</TableCell>

                                {/* Price */}
                                <TableCell>{product.price}</TableCell>

                                {/* Pritech */}
                                <TableCell>{product.pritech}</TableCell>

                                {/* Cut */}
                                <TableCell>{product.cut}</TableCell>

                                {/* Time */}
                                <TableCell>{product.time}</TableCell>

                                {/* Category */}
                                <TableCell>{product.category}</TableCell>

                                {/* Material */}
                                <TableCell>
                                    {product.material.split(', ').map((item, index)=>(
                                        <Chip key={`material-${index}`} label={item}/>
                                    ))}
                                </TableCell>

                                {/* Effect */}
                                <TableCell>
                                    {product.effect.split(', ').map((item, index)=>(
                                        <Chip key={`effect-${index}`} label={item}/>
                                    ))}

                                </TableCell>

                                {/* Size */}
                                <TableCell>
                                    {product.size.split(', ').map((item, index)=>(
                                        <Chip key={`size-${index}`} label={item}/>
                                    ))}

                                </TableCell>

                                {/* Created At */}
                                <TableCell>{new Date(product.createdAt).toLocaleString()}</TableCell>

                                {/* Updated At */}
                                <TableCell>{new Date(product.updatedAt).toLocaleString()}</TableCell>

                                {/* Avatar Hover */}
                                <TableCell>
                                {product.avatarHover ? (
                                    <img src={product.avatarHover.imgSrc} alt="Avatar Hover" width="50" />
                                ) : "No Avatar Hover"}
                                </TableCell>

                                {/* Status */}
                                <TableCell>
                                    {product.status ? product.status.value : "No Status"}
                                </TableCell>

                                {/* Avatar */}
                                <TableCell>
                                {product.avatar ? (
                                    <img src={product.avatar.imgSrc} alt="Avatar" width="50" />
                                ) : "No Avatar"}
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductList