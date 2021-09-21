1. mkdir eldo <br> cd eldo
2. touch README.md <br> echo -e "Halo perkenalkan aku halaman utama" >> README.md <br> ![gambar](https://user-images.githubusercontent.com/65642638/134184056-0136d79a-1eb9-4100-b10a-b4d3de8e05d6.png)
3. git init <br> git commit -m "Inisialisasi Git Repository"
4. git branch cv
5. git checkout cv <br> touch cv.txt <br> echo -e "Ini adalah file CV" >> cv.txt <br> ![gambar](https://user-images.githubusercontent.com/65642638/134184316-e5348afb-ea24-4413-a2ed-5f57342f4428.png)
6. git add cv.txt <br> git commit -m "Inisialisasi CV"
7. echo -e "Google" >> cv.txt <br>
   ![gambar](https://user-images.githubusercontent.com/65642638/134184615-9d6fc6d7-1294-43e0-aaa7-79cf0388dcd9.png) <br> git add cv.txt <br>
   git commit -m "menambahkan perusahaan 1" <br>
   echo -e "Amazon" >> cv.txt <br> ![gambar](https://user-images.githubusercontent.com/65642638/134185024-f5fc8988-bda1-45e4-b6e3-da7646b9cde6.png) <br>
   git add cv.txt <br>
   git commit -m "menambahkan perusahaan 2" <br>
   echo -e "Shopee" >> cv.txt <br> ![gambar](https://user-images.githubusercontent.com/65642638/134185187-610d72c5-f268-413d-9c19-b5aeefb36fd3.png) <br>
   git add cv.txt <br>
   git commit -m "menambahkan perusahaan 3"
8. git checkout master
9. echo -e "\nIni adalah update pertama pada branch master" >> README.md <br> ![gambar](https://user-images.githubusercontent.com/65642638/134191426-e111e701-b35f-4129-8bb6-d2be9c048b73.png)
   <br> git add <br>
   git commit -m "update master pertama"
10. git merge cv
11. https://github.com/KadalGoreng/eldo
    ![gambar](https://user-images.githubusercontent.com/65642638/134196591-96fafb33-a6cd-498e-89d1-06ebaf14c40a.png)
