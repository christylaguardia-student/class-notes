# Fri Jul 14

## White boarding
* ask can I assume valid input?
* write down test cases: in | out
* double space, so have room to add extra lines between

## Algorithm Analysis
time complexity = runtime performance

### Big O notation
it's vocabulary used to discuss complexity

O(1)
O(n): linear
O(n^2): quadratic
O(2^n): exponential, like nested loops

log: inverse of exponents
dictionary look ups are log(n)

push & pop: O(1)
shift: move items down a index
unshift: move items up an index. if you have 3 items, you have to shift 3 items, so the complexity is linear

be careful of .find and .findIndex
best case, worst case, average case --> think about worst
think about how it will grow

when checking an array for duplicates, you have to go through the array, do a for loop. but use a quadratic function inside.
