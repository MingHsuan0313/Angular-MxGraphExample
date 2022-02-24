** To move the cursor, press the h,j,k,l keys as indicated. **
    ^
    k		     Hint:  The h key is at the left and moves left.
< h	  l >		 The l key is at the right and moves right.
    j			   The j key looks like a down arrow.
    v

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1.

(1). Move the cursor to the first line below marked --->.

(2). To make the first line the same as the second, move the cursor on top
   of the character BEFORE which the text is to be inserted.

(3). Press  i  and type in the necessary additions.

(4). As each error is fixed press <ESC> to return to Normal mode.
   Repeat steps 2 through 4 to correct the sentence.

---> There is text misng this .
---> There is some text missing from this line.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2.

** Type  d$	to delete to the end of the line. **

(1). Press  <ESC>  to make sure you are in Normal mode.

(2). Move the cursor to the line below marked --->.

(3). Move the cursor to the end of the correct line (AFTER the first . ).

(4). Type    d$    to delete to the end of the line.

---> Somebody typed the end of this line twice. end of this line twice.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3. 

** Press  u	to undo the last commands,   U  to fix a whole line. **

(1). Move the cursor to the line below marked ---> and place it on the
     first error.

(2). Type  x  to delete the first unwanted character.

(3). Now type  u  to undo the last command executed.

(4). This time fix all the errors on the line using the  x  command.

(5). Now type a capital  U  to return the line to its original state.

(6). Now type  u  a few times to undo the  U  and preceding commands.

(7). Now type <C-R> (keeping CTRL key pressed while hitting R) a few times
     to redo the commands (undo the undo).

---> Fiix the errors oon thhis line and reeplace them witth undo.

(8). These are very useful commands.  Now move on to the lesson 2 Summary.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
4.

* Typing a number before a motion repeats it that many times. **

(1). Move the cursor to the start of the line below marked --->.

(2). Type  2w  to move the cursor two words forward.

(3). Type  3e  to move the cursor to the end of the third word forward.

(4). Type  0  (zero) to move to the start of the line.

(5). Repeat steps 2 and 3 with different numbers.

---> This is just a line with words you can move around in.

**********************************************************************************
5.

** Type  %  to find a matching ),], or } . **

(1). Place the cursor on any (, [, or { in the line below marked --->.

(2). Now type the  %  character.

(3). The cursor will move to the matching parenthesis or bracket.

(4). Type  %  to move the cursor to the other matching bracket.

(5). Move the cursor to another (,),[,],{ or } and see what  %  does.

// ---> This ( is a test line with ('s, ['s ] and {'s } in it. ))


**********************************************************************************
6.

** Use the  y  operator to copy text and  p  to paste it **

(1). Move to the line below marked ---> and place the cursor after "a)".

(2). Start Visual mode with  v  and move the cursor to just before "first".

(3). Type  y  to yank (copy) the highlighted text.

(4). Move the cursor to the end of the next line:  j$

(5). Type  p  to put (paste) the text.  Then type:  a second <ESC> .

(6). Use Visual mode to select " item.", yank it with  y , move to the end of
     the next line with  j$  and put the text there with  p .

--->  a) this is the first item.
      b)
      
***************************************************************************************
7. Visual Mode!!!

** To delete part of the file, type  v  motion, select block of words to be deleted **

(1). Move the cursor to this line. select block between ---> and <--- , 

--->
(2). Press  v  and move the cursor to the fifth item below.  Notice that the
     text is highlighted.

(3). Press the  d character.
<---

(4). Press u.
(5). Press <C-r>

NOTE:  Pressing  v  starts Visual selection.  You can move the cursor around
       to make the selection bigger or smaller.  Then you can use an operator
       to do something with the text.  For example,  y  copy the text.