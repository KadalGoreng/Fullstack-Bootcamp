        START
        NUMBER nilai, nilai-dibulatkan
        INPUT nilai (0-100)
        IF nilai < 68 THEN
            DISPLAY nilai
        ELSE IF nilai >= 68 && nilai mod 5 == 3 THEN
            DISPLAY nilai-dibulatkan = nilai+2
        ELSE IF nilai > 70 && nilai mod 5 == 4 THEN
            DISPLAY nilai-dibulatkan = nilai+1
        ELSE
            DISPLAY nilai
        END
