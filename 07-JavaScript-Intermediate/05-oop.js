// * Soal 1
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// menampilkan object dari fun1 yang berisi fun1 dan fun2, lalu fun2 kosong hanya keluar fun2 {}
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// beda
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// berbeda karena arrow funtion tidak memiliki this yang mengarah ke dirinya dirinya sendiri (global)
const obj = {
  fun1: function () {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  },
};

obj.fun1();
obj.fun2();

// * Soal 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// kemampuan dari suatu objek untuk memiliki banyak bentuk

// * Soal 3
class Phone {
  constructor(brand, storage, ram) {
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }
  getBrandName() {
    return this.brand;
  }
  setBrandName(name) {
    this.brand = name;
  }
  printSpecification() {
    console.log(`ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
  }
  setSpecification(storage, ram) {
    this.storage = storage;
    this.ram = ram;
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co");
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// * Soal 4
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
  }

  getCourseIndex(course) {
    let indexCourse;
    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (this.courseOfferings[i].course.getSubject() === course.getSubject()) {
        indexCourse = i;
        break;
      }
    }
    return indexCourse;
  }

  takeNewCourse(course) {
    this.courseOfferings.push(new CourseOffering(course));
    course.decreaseQuota();
  }

  takeATest(course) {
    const index = this.getCourseIndex(course);
    if (this.courseOfferings[index].attendance >= course.getAttendance()) {
      this.courseOfferings[index].grade = Math.floor(Math.random() * 100);
    } else {
      console.log("please fill your absent");
    }
  }

  courseAttendance(course) {
    const indexCourse = this.getCourseIndex(course);
    this.courseOfferings[indexCourse].attendance++;
  }
}

class CourseOffering {
  constructor(course) {
    this.course = course;
    this.attendance = 0;
    this.grade = 0;
  }
}

class Course {
  constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }
  getSubject() {
    return this.subject;
  }
  getAttendance() {
    return this.attendance;
  }
  decreaseQuota() {
    this.quota--;
  }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
