import { Button, Box, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Typography} from "@mui/material"

const currencies = [
    {
        value: "BTC",
        label: "BTC"
    },
    {
        value: "USD",
        label: "USD"
    },
]

const frequencies = [
    {
        value: "none",
        label: ""
    },
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

const timePeriods = [
    {
        value: "days",
        label: "days"
    },
    {
        value: "weeks",
        label: "weeks"
    },
    {
        value: "months",
        label: "months"
    },
    {
        value: "years",
        label: "years"
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
            <div>
                <TextField 
                    id="outlined-basic" 
                    label="currency amount" 
                    variant="outlined"
                    sx={{
                        m: 1
                    }}
                />
                <TextField 
                    id="outlined-select"
                    select
                    label="currency"
                    defaultValue=""
                    helperText="select btc or usd"
                    variant="outlined"
                    sx={{
                        m: 1
                    }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
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
            <div>
                <TextField 
                    id="outlined-basic" 
                    label="time amount" 
                    variant="outlined"
                    sx={{
                        m: 1
                    }}
                />
                <TextField 
                    id="outlined-select"
                    select
                    label="time period"
                    defaultValue=""
                    helperText="please select time period"
                    variant="outlined"
                    sx={{
                        m: 1
                    }}
                >
                    {timePeriods.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <Button>Calculate</Button>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">total amount:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="current-btc-price" control={<Radio />} label="current BTC price" />
                    <FormControlLabel value="target-btc-price" control={<Radio />} label="enter target BTC price" />
                </RadioGroup>
            </FormControl>
        </Box>
    </div>
  )
}

export default Calculator