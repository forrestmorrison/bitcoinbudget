import { Button, Box, MenuItem, TextField } from "@mui/material"

const frequencies = [
    {
        value: "once per day",
        label: "once per day"
    },
    {
        value: "once per week",
        label: "once per week"
    },
    {
        value: "once per month",
        label: "once per month"
    }
]

const Calculator = () => {
  return (
    <div>
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
            noValidate
            autoComplete="off"
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
                defaultValue=""
                helperText="please select frequency"
                variant="outlined"
                sx={{
                    m: 1
                }}
            >
                {frequencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button>Calculate</Button>
        </Box>
    </div>
  )
}

export default Calculator