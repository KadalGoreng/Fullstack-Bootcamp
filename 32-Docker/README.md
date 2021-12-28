1. Container merupakan sebuah wadah atau container yang mengangkut atau berisi library dan dependency atau resource code pada tumpukan layer image.
2. Terletaknya terdapat pada resource yang dipakai. Vm banyak menggunakan resource untuk virtualisasi OS yang secara langsung menargetkan hardwarenya dan menyebabkan booting yang lama, sedangkan Container hanya memakan sedikit resource virtualisasi karena berjalan pada host-os.
3. Dockerfile merupakan code file yang berisi perintah yang dapat di run untuk membuat image docker.
4. Docker registry memungkinkan kita menyimpan image pada registry docker hub.
5. Untuk membuat image multi-container kita dapat menggunakan docker compose dengan format file docker-compose.yml yang menggabungkan beberapa dockerfile. dengan ini kita dapat menjalankan image hanya dengan satu localhost.
