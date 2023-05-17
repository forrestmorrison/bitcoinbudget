import { useState } from "react"
import { 
    Button, 
    Box, 
    MenuItem, 
    Radio, 
    RadioGroup, 
    FormControlLabel, 
    FormControl, 
    FormLabel, 
    TextField
} from "@mui/material"


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

    const [total, setTotal] = useState(0)

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
                <p>amount you would like to purchase on a recurring basis:</p>
                <section>
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
                            m: 1,
                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </section>
                <p>frequency rate to make recurring purchase:</p>
                <TextField 
                    id="outlined-select"
                    select
                    label="frequency"
                    defaultValue=""
                    helperText="select frequency"
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
                <p>total amount of time to keep making recurring purchase:</p>
                <section>
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
                        helperText="select time period"
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
                </section>
                <FormControl>
                    <p>at price of:</p>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{
                            display: "flex",
                            flexDirection: "row"
                        }}
                    >
                        <FormControlLabel 
                            value="current-btc-price" 
                            control={<Radio />} 
                            label="current BTC price"
                            sx={{
                                m: 1
                            }}
                        />
                        <FormControlLabel 
                            value="target-btc-price" 
                            control={<Radio />} 
                            label={<TextField label="enter target BTC price" />} 
                            sx={{
                                m: 1
                            }}
                        />
                    </RadioGroup>
                </FormControl>
                <Button
                    sx={{
                        m: 1,
                        backgroundColor: "#F2A900",
                        color: "white",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "#F2A900",
                            },
                            "&.Mui-disabled": {
                                background: "white",
                                color: "grey"
                            }
                    }}
                >Calculate</Button>
            </Box>
        </div>
    )
}

export default Calculator