export const validationFormInputs = {
  name: {
    required: {
      value: true,
      message: 'Name is required',
    },
    minLength: {
      value: 2,
      message: 'Name should consist of more then 2 characters.',
    },
    maxLength: {
      value: 26,
      message: 'Too many characters in the name! It should be less then 26',
    },
  },
  phone: {
    required: {
      value: true,
      message: 'Phone number is required',
    },
    pattern: {
      value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
      message: 'The phone number must start with + and consist of 14 numbers',
    },
  },
  email: {
    required: {
      value: true,
      message: 'Email is required!',
    },
    pattern: {
      value:
        /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
      message:
        'Email must be at least 3 characters long, must not contain more than 2 subdomains, and must include the @ symbol',
    },
  },
};