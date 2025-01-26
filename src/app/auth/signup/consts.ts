export const errorMessages: any = {
  name: {
    required: 'Name is required.',
  },
  email: {
    required: 'Email is required.',
    email: 'Please enter a valid email address.',
  },
  username: {
    required: 'Username is required.',
  },
  class: {
    required: 'Class is required.',
    min: 'Class cannot be less than 0.',
    max: 'Class cannot be greater than 12.',
  },
  maths: {
    required: 'Maths score is required.',
    min: 'Score must be at least 0.',
    max: 'Score cannot exceed 100.',
  },
  english: {
    required: 'English score is required.',
    min: 'Score must be at least 0.',
    max: 'Score cannot exceed 100.',
  },
  science: {
    required: 'Science score is required.',
    min: 'Score must be at least 0.',
    max: 'Score cannot exceed 100.',
  },
  password: {
    required: 'Password is required.',
    // minlength: 'Password must be at least 8 characters long.',
    // pattern:
    //   'Password must contain an uppercase letter, a number, and a special character.',
  },
  confirmPassword: {
    required: 'Confirm Password is required.',
    mismatch: 'Passwords do not match.',
  },
};
