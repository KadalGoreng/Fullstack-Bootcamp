1. Relasi: One-to-one <br>Skema Data:
   ```json
   {
     "_id": "ObjectId('AAA')",
     "fullName": "John Doe",
     "email": "JohnDoe@mail.com",
     "phoneNumber": "08991234551"
   }
   ```
2. Relasi: One-to-few <br> Skema Data:
   ```json
   {
     "_id": "ObjectId('AAA')",
     "fullName": "John Doe",
     "email": "JohnDoe@mail.com",
     "address": ["address 1", "address 2"]
   }
   ```
3. Relasi: One-to-many <br> Skema Data:
   ```json
    {
        "_id": "ObjectId('AA1')",
        "productName": "Kaos Polos",
        "brandName": "SkilShirt",
        "variants": ["ObjectId('AA1')", "ObjectId('AA2')"]
    },
    {
        "_id": "ObjectId('AA2')",
        "nameVariant": "kaos Polos Hitam",
        "color": "Hitam",
        "qty": 12,
        "price": 99000
    },
    {
        "_id": "ObjectId('AA3')",
        "nameVariant": "kaos Polos Navy",
        "color": "Navy",
        "qty": 10,
        "price": 99000
    }
   ```
4. Relasi: One-to-many <br> Skema Data:
   ```json
   {
   "_id": "ObjectId('C1')",
   "cinemaName": "CGF",
   "films": [
       {
           "_id": "ObjectId('F1')",
           "title":"Venom 2"
       },
       {
           "_id": "ObjectId('F2')",
           "title": "Spiderman No Way Home"
       }
   ],
   "location": "Pondok Indah Mall"
   },
   {
       "_id": "ObjectId('C2')",
       "cinemaName": "Cinema31",
       "films": [
           {
               "_id": "ObjectId('F1')",
               "title":"Venom 2"
           },
           {
               "_id": "ObjectId('F2')",
               "title": "Spiderman No Way Home"
           }
       ],
       "location": "Mall Kelapa Gading"
   },
   ```
