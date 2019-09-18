// //Array
// let teacher = [];
// const student = ["farjana", "Tuli", "Akter", "Farhana", "Tanvir"];

// console.log(student);
// //alert(student[3])

// student[1] = "farha";
// console.log(student);

// //Object

// const Tuli = {
//     Name: "Farjana Akter Tuli",
//     Gender: "female",
//     Study: {
//         org: ["IIUC", "SGHS", "Port city"],
//         subject: "B.Sc in CSE at IIUC"
//     },
//     Age: 22
// };

// console.log(Tuli);
// console.log(Tuli.Study.subject);
// console.log(Tuli.Study.org[2]);

// //LOOP:for Array
// //show position by using in
// for (let index in student) {

//    console.log(index);
//    console.log(student[index])

// }
//  //show position value by using of:
// for (let item of student) {

//     console.log(item);

// }

// //LOOP:for Object
// //show position by using in:
// for (let property in Tuli) {
//     console.log(property)
//     console.log(Tuli[property]);
// }

let StudentDatabase = [
  {
    student_id: {
      $id: "c164520"
    },
    student_name: "Tanvir Ahmad",
    department: "CSE",
    organization: "IIUC",
    cgpa: "$3.6"
  },

  {
    student_id: {
      $id: "c164521"
    },
    student_name: "Sirajul Islam",
    department: "CSE",
    organization: "IIUC",
    cgpa: "$3.8"
  },

  {
    student_id: {
      $id: "c164510"
    },
    student_name: "Fahim Ahmed",
    department: "CSE",
    organization: "IIUC",
    cgpa: "$3.8"
  },

  {
    student_id: {
      $id: "c164530"
    },
    student_name: "Shakil Ahmed",
    department: "CSE",
    organization: "IIUC",
    cgpa: "$3.9"
  }
];

console.log(StudentDatabase);
console.log(StudentDatabase[0].student_id.$id);

//Postal Code:
let Postal_Code = [
  {
    noakhali: [
      { kabirhat: "3807" },
      { sadar: "3800" },
      { hatiya: "3890" },
      { shenbag: "3860" },
      { begomgonj: "3831" }
    ]
  },

  {
    chadpur: [
      { "Chandpur Sadar": "3600" },
      { Faridganj: "3650" },
      { Hajiganj: "3610" },
      { Matlobganj: "3640" },
      { Shahrasti: "3620" }
    ]
  }
];

console.log(Postal_Code[0].noakhali[2].hatiya);

//Product:

let Product = {
  product_id: {
    id: "025"
  },
  product_item: "chips",
  product_name: "potato crackers",
  price: "10",
  company: "pran"
};
console.log(Product.product_name);

console.log("Hospital Management:");

let Patient = [
  {
    Patient_id: {
      $mobile_Number: "0185555555"
    },
    Patient_name: "Tanvir Ahmad",
    department: "emargency",
    Room_no: "$305"
  },
  {
    Patient_id: {
      $mobile_Number: "018552225"
    },
    Patient_name: "Fahim Ahmad",
    department: "ENT",
    Room_no: "$305"
  },
  {
    Patient_id: {
      $mobile_Number: "015555111"
    },
    Patient_name: "Shakil Ahmad",
    department: "Medicine",
    Room_no: "$309"
  },
  {
    Patient_id: {
      $mobile_Number: "0135548555"
    },
    Patient_name: "Shiraj Ahmad",
    department: "sergery",
    Room_no: "ICU"
  }
];

let Doctor = [
  {
    doctor_id: {
      $mobile_Number: "018885967"
    },
    Patient_name: "Tanvir Ahmad",
    expert: "neorologist",
    education: "MBBS from CMC"
  },

  {
    Patient_id: {
      mobile_Number: [0197545, "0197545", 017821, 0165888]
    },
    Patient_name: "Fahim Ahmad",
    expertt: "ENT",
    education: "MBBS from DMC"
  }
];

console.log(Doctor);
console.log(Doctor[1].Patient_id.mobile_Number[0]);
console.log(Doctor[1].Patient_id.mobile_Number[1]);
