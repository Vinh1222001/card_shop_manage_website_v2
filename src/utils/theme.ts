import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
    
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
                backgroundColor: blueGrey[50],
            }
          }
        }
      },

    palette:{
        primary:{
            main: process.env.REACT_APP_PRIMARY_COLOR as string,
            contrastText: process.env.REACT_APP_CONTRAST_TEXT_COLOR
        },
        secondary:{
            main: process.env.REACT_APP_SECONDARY_COLOR as string,
            contrastText: process.env.REACT_APP_CONTRAST_TEXT_COLOR
        },
        tonalOffset:{
            light: 0.2,
            dark: 0.7
        },
        background:{
            default: process.env.REACT_APP_BACKGROUND_COLOR
        }
      }
})

export default theme