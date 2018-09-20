# node-envchecker
The npm module to check required environment variables but which is lost.

# Example

```javascript
const envChecker = required('requiredenvchecker')

// Set up your required variables
const variables = ['token', 'password', 'db']

// Use it!
try {
  envChecker(variables)
} catch (error) {
  // If something has been lost, they will be show up here.
  console.error(error)
}

```

# Test
```
$ npm run test
```

It will be show `Looks good!`, If success.