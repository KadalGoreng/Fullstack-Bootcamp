        START
        INPUT nilai as NUMBER
        FOR n <- 1; n < nilai; n++
        IF n mod 5 == 0 && n mod 3 == 0 THEN
            DISPLAY "FizzBuzz"
        ELSE IF n mod 3 == 0 THEN
            DISPLAY "Fizz"
        ELSE IF n mod 5 == 0 THEN
            DISPLAY "Buzz"
        ELSE
            DISPLAY n
        ENDFOR
