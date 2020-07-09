# HW
uzlikt git bash uz savas ierīces
https://www.udemy.com/course/git-bash/

Iemācīties no galvas bināro skalu.

| DEC | BIN | HEX |
| --- | --- | --- |
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D | 
| 14 | 1110 | E |
| 15 | 1111 | F | 
  

# Stundas pieraksti

echo A > a.dat //ieraksta failā A kopā ar \\n un tas aizņem 2 bytes  

printf A > b.dat // ierakstas failā tikai A un aizņem 1 byte  

hexdump  a.dat 
hexdump a.dat // ir dažādas atslēgas -c, -b, utt.

echo a | hexdump -C //var palaist pa PIPE, arī citas -key
