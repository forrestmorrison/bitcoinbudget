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
                sx={{
                    m: 1
                }}
            />
            <TextField 
                id="outlined-select"
                select
                label="frequency" 
                variant="outlined"
                sx={{
                    m: 1
                }}
            />
            <Button>Calculate</Button>
        </Box>
    </div>
  )
}

export default Calculator