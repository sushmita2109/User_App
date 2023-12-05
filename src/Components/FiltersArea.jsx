import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const FiltersArea = () => {
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "8px",
        width: "6opx",
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label">Domain</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Sales" control={<Radio />} label="Sales" />
        <FormControlLabel value="Finance" control={<Radio />} label="Finance" />
        <FormControlLabel
          value="Marketing"
          control={<Radio />}
          label="Marketing"
        />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="gender-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">Avalability</FormLabel>
      <RadioGroup
        aria-labelledby="avalable-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="true" control={<Radio />} label="true" />
        <FormControlLabel value="false" control={<Radio />} label="false" />
      </RadioGroup>
    </FormControl>
  );
};
