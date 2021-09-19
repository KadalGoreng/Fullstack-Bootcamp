        START
        INPUT kata as STRING
        a = 0
        x = leghtofstring (kata) - 1
        DOWHILE x > a
            temp[x] = kata[a]
            x = x + 1
        ENDDO
        IF kata = temp
            DISPLAY TRUE
        ELSE
            DISPLAY FALSE
        END
