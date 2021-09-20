        START
        INPUT temp as NUMBER
        INPUT type as STRING
        IF type == "fahrenheit" THEN
            DISPLAY temp = temp - 32 * (5/9)
        ELSE IF type == "kelvin" THEN
            DISPLAY temp = temp - 273.15
        ELSE IF type == "celcius" THEN
            DISPLAY temp
        END
