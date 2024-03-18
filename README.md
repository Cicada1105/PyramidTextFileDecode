# PyramidTextFileDecode
Function for reading a text file in an encoded format and returning the decoded message.
### Running
`node index.js`
### Input
A file in the following format (# <phrase>):
```
3 love
6 computers
2 dogs
4 cats
1 I
5 you
```

### Output
I love computers

### Explanation
The decode function takes in a path, within the current directory, of the input file. The input file will be decoded according to the layout of a pyramid. The words chosen will be according to the numbers on the right side of the pyramid.

For example, with the above input, the pyramid looks as follows:
```
  1
 2 3
4 5 6
```
Therefore, the decoded message will be 1 (I), 3 (love) and 6 (computers): "I love computers"