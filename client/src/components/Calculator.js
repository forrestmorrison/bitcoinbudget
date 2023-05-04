import { Button, Box, MenuItem, TextField, Typography} from "@mui/material"

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
        </Box>
    </div>
  )
}

export default Calculator