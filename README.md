# MongoDB $inc Operator Error with String Field
This example demonstrates an incorrect use of the `$inc` operator in MongoDB when attempting to increment a string field.
The `$inc` operator is designed to increment numeric values.  Attempting to increment a string will result in an error.

**Bug:** Incorrectly using `$inc` on a string field.
**Solution:** Ensure the field you're incrementing is a numeric type and correctly formatted.