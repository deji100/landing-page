import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledTextField = styled(TextField)({
    "& label": {
      color: "white"
    },
    "& label.Mui-focused": {
        color: "white"
      },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white"
      },
})


const StandardForm = (props) => {    
    return (
        <div>
            <StyledTextField 
                id="standard-basic" 
                label={props.label} 
                variant="standard" />
        </div>
    )
}

export default StandardForm;