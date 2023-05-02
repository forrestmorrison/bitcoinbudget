import { Button, Box, MenuItem, TextField } from "@mui/material"

const Calculator = () => {
  return (
    <div>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <TextField 
                id="outlined-basic" 
                label="amount" 
                variant="outlined" 
            />
            <TextField 
                id="outlined-select"
                select
                label="frequency" 
                variant="outlined" 
            />
            <Button>Calculate</Button>
        </Box>
    </div>
  )
}

export default Calculator