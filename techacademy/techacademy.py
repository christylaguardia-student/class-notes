Python 2.7.13 (v2.7.13:a06454b1afa1, Dec 17 2016, 12:39:47) 
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "copyright", "credits" or "license()" for more information.
>>> WARNING: The version of Tcl/Tk (8.5.9) in use may be unstable.
Visit http://www.python.org/download/mac/tcltk/ for current information.

>>> print 'Hello world'
Hello world
>>> print Hello world
SyntaxError: invalid syntax
>>> J=50
>>> J
50
>>> print j

Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    print j
NameError: name 'j' is not defined
>>> Print J
SyntaxError: invalid syntax
>>> print J
50
>>> 1+1
2
>>> K=5
>>> K
5
>>> print K
5
>>> pint J+K
SyntaxError: invalid syntax
>>> print J+K
55
>>> print (J*K)
250
>>> A = "John is happy"
>>> A
'John is happy'
>>> B=10.75
>>> type(B)
<type 'float'>
>>> J is 50
True
>>> J is 25
False
>>> J is not 50
False
>>> 25>10
True
>>> 10 == 10
True
>>> 10 == 5
False
>>> 
=== RESTART: /Users/christinelaguardia/class-notes/techacademy/Untitled.py ===
55
>>> #comment
>>> if J>25:
	print 'J is the winner'

	
J is the winner
>>> if B===20:
	
SyntaxError: invalid syntax
>>> if B==20:
	print '20 is equal to B'

	

Traceback (most recent call last):
  File "<pyshell#32>", line 1, in <module>
    if B==20:
NameError: name 'B' is not defined
>>> B=20
>>> if B==20:
	print '20 is equal to B'

	
20 is equal to B
>>> B=20
>>> if B==20:
	print '20 is equal to B'

	
20 is equal to B
>>> 
