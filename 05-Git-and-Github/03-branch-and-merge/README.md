1. What does `git clean` do? <br> Perintah `git clean` digunakan untuk menghapus file yang tidak diinginkan dari working directory. `git clean` akan menghapus untracked files dari working tree.
2. What do the `-d` and `-f` flags for `git clean` do? <br> `-d` akan menghapus untracked directory. <br>
   `-f` akan menghapus untracked files dari directory yang sekarang selain untracked folder atau file yang dispesified oleh .gitignore.
3. What git command creates a branch? <br> `git branch <branch name>`
4. What is the difference between a fast-forward and recursive merge? <br> fast-forward dapat dengan mudah bergabung ke cabang lain di cabang linier atau dapat bergabung dari cabang yang berbeda <br>recursive merge terjadi ketika Anda tidak dapat menggabungkan dari cabang saat ini ke cabang lain
5. What git command changes to another branch? <br> `git checkout <nama branch>`
6. How do you remove modified or deleted files from the working directory? <br> `git reset --hard`
7. What git command deletes a branch? <br> `git branch -d <branch name>`
8. What does the `git diff` command do? <br> untuk melihat perbandingan perubahan di revisi.
9. How do you remove files from the staging area? <br> `git reset HEAD <nama-file>`
10. How do merge conflicts happen? <br> ini dapat terjadi jika 2 orang atau lebih melakukan perubahan pada baris code yang sama, dan bisa terjadi juga saat satu orang melakukan delete file sementara ada orang lain yang sedang melakukan modifikasi.
