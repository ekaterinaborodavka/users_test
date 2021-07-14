import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { UseFormRegister, DeepMap, FieldError } from "react-hook-form";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { User, zodiacs } from "~src/types";

const useStyles = makeStyles(() =>
  createStyles({
    field: {
      margin: 5,
    },
  })
);

interface SelectFieldProps {
  errors: DeepMap<User, FieldError>;
  register: UseFormRegister<User>;
}

export const SelectField: React.FC<SelectFieldProps> = ({ errors, register }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <FormControl className={classes.field}>
      <InputLabel id="demo-simple-select-label">
        {!Boolean(errors.zodiac) ? t("Zodiac") : errors.zodiac?.message}
      </InputLabel>
      <Select error={Boolean(errors.zodiac)} defaultValue="" labelId="demo-simple-select-label" {...register("zodiac")}>
        {zodiacs.map((zodiac) => (
          <MenuItem key={zodiac.id} value={zodiac.name}>
            {zodiac.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
