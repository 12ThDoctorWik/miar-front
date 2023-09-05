import { InputLabel, Typography } from '@mui/material';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  formLabel: {
    marginBottom: '0.25rem',
  },
  fieldError: {
    '& .select__control': {
      outline: '1px solid #ff3333!important',
      '&:focus': {
        outline: '1px solid #ff3333',
      },
    },
  },
  errorMessageRoot: {
    color: '#ff3333',
    marginTop: '3px',
    padding: '0px 9px',
  },
  errorMessage: {
    fontSize: '13px',
    fontWeight: 600,
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  selectMenuPortal: {
    zIndex: 1301,
  },
  menu: {
    borderRadius: '4px',
    boxShadow:
      '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    backgroundColor: 'rgba(30, 31, 34, 1)',
    color: '#fff',
  },
  option: {},
  optionFocused: {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  },
  optionSelected: {},
  singleValue: {
    color: 'currentcolor',
  },
  control: {
    font: 'inherit',
    letterSpacing: 'inherit',
    padding: '8px 0',
    boxSizing: 'content-box',
    background: 'none',
    height: '1.4375em',
    margin: 0,
    '-webkit-tap-highlight-color': 'transparent',
    minWidth: 0,
    width: '100%',
    animationName: 'mui-auto-fill-cancel',
    animationDuration: '10ms',
    borderRadius: '4px',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.23)',
  },
  input: {
    color: '#fff',
  },
});

export const SelectField = ({
  label,
  id,
  className = '',
  control,
  name,
  required,
  rules = {},
  options = [],
  onSelect,
  errorMessage,
  isOptional,
  isDisabled,
  placeholder,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div>
      {label && (
        <InputLabel className={classes.formLabel} htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <Controller
        control={control}
        name={name}
        rules={{ required, ...rules }}
        render={({
          field: { onChange, value = props.isMulti ? [] : null },
        }) => (
          <ReactSelect
            className={clsx('select-container', className, {
              [classes.fieldError]: errorMessage,
            })}
            classNames={{
              menuPortal: () => classes.selectMenuPortal,
              control: () => classes.control,
              input: () => classes.input,
              menu: () => classes.menu,
              singleValue: () => classes.singleValue,
              option: ({ isFocused, isSelected }) =>
                clsx(classes.option, {
                  [classes.optionFocused]: isFocused,
                  [classes.optionSelected]: isSelected,
                }),
            }}
            classNamePrefix="select"
            options={options}
            onChange={data => {
              const newValue =
                (props.isMulti
                  ? data.map(option => option.value)
                  : data?.value) ?? null;
              onChange(newValue);
              onSelect && onSelect(newValue);
            }}
            value={
              (props.isMulti
                ? options.filter(option => value?.includes(option.value))
                : options.find(option => option.value === value)) ?? null
            }
            menuPortalTarget={document.body}
            styles={{
              indicatorSeparator: (base, _state) => ({
                ...base,
                display: 'none',
              }),
            }}
            isClearable={isOptional}
            isDisabled={isDisabled}
            placeholder={placeholder}
            {...props}
          />
        )}
      />
      {errorMessage && (
        <Typography
          className={classes.errorMessage}
          classes={{ root: classes.errorMessageRoot }}
          variant="subtitle1"
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
