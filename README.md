# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in JavaScript related to type coercion with null values and the addition operator (+).

## The Bug
The `foo` function checks for null values using strict equality (`===`). However, the addition operator implicitly coerces types, leading to unexpected results.  The issue stems from how JavaScript handles `null` in arithmetic operations. 

## The Solution
The solution ensures explicit type checking and conversion before performing the addition to avoid unexpected type coercion behaviors. 