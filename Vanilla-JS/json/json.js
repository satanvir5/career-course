//Array
let teacher = [];
const student = ["farjana", "Tuli", "Akter", "Farhana", "Tanvir"];

console.log(student);
//alert(student[3])

student[1] = "farha";
console.log(student);

//Object

const Tuli = {
  Name: "Farjana Akter Tuli",
  Gender: "female",
  Study: {
    org: ["IIUC", "SGHS", "Port city"],
    subject: "B.Sc in CSE at IIUC"
  },
  Age: 22
};

console.log(Tuli);
console.log(Tuli.Study.subject);
console.log(Tuli.Study.org[2]);

//LOOP:for Array
//show position by using in
for (let index in student) {
  console.log(index);
  console.log(student[index]);
}
//show position value by using of:
for (let item of student) {
  console.log(item);
}

//LOOP:for Object
//show position by using in:
for (let property in Tuli) {
  console.log(property);
  console.log(Tuli[property]);
}

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

//Mobile Phone

let Address = {
  Home: "Najir Ahmad Master Bari",
  Village: "Norsinghapur",
  Post_Office: "Kabir Hat",
  Thana: "Kabir Hat",
  District: "Noakhali"
};

let mobile = [
  {
    iphone: {
      model: "iPhone 5",
      display: 5,
      price: 30000,
      ram: 2,
      rom: 16
    }
  },
  {
    samsung: [
      {
        A70: {
          model: "Samsang A70",
          display: 6.7,
          price: 38900,
          ram: 6,
          rom: 128
        }
      },
      {
        A50: {
          model: "Samsang A50",
          display: 6.3,
          price: 25000,
          ram: 4,
          rom: 128
        }
      },
      {
        A20: {
          model: "Samsang A20",
          display: 6.3,
          price: 15990,
          ram: 3,
          rom: 64
        }
      }
    ]
  }
];
console.log(mobile[1].samsung[0]);

let room = [
  "bed",
  table = ["computer table", "normal table"],
  "chair",
  "hanger",
  "cloth",
  "mat",
  "window",
  laptop={
    model: "Lenevo ideapad 320",
    "graphics card": "Nvidia GEFORCE",
    ram: "8 GB",
    "Hard disk": "2 TB",
    core: "Core i5",
    generation: "8th"
  }
  
];

console.log(room[1][1]);
console.log(room[7]["graphics card"]);

let cricket_team = [
  {
    Bangladesh: [
      "Tamim Ikbal",
      "Soumya Sarker",
      "Najmul Hossain Shanto",
      "Liton Das",
      "Shakib Al Hasan (c)",
      "Mushfiqur Rahim (wk)",
      "Mahmudullah",
      "Mosaddek Hossain",
      "Afif Hossain",
      "Aminul Islam",
      " Mohammad Saifuddin",
      "Shafiul Islam",
      "Mustafizur Rahman",
      "Sabbir Rahman",
      "Taijul Islam",
      "Rubel Hossain",
      "Mohammad Naim"
    ]
  },
  {
    India: [
      "Rohit Sharma",
      "Shikhar Dhawan",
      "Virat Kohli (c)",
      "Shreyas Iyer",
      "Rishabh Pant (wk)",
      "Hardik Pandya",
      "Krunal Pandya",
      "Ravindra Jadeja",
      "Washington Sundar",
      "Deepak Chahar",
      "Navdeep Saini",
      "Lokesh Rahul",
      "Manish Pandey",
      "Rahul Chahar",
      "K Khaleel Ahmed"
    ]
  },
  {
    "South Africa": [
      "Quinton de Kock (c & wk)",
      "Reeza Hendricks",
      "Temba Bavuma",
      "Rassie van der Dussen",
      "David Miller",
      "Andile Phehlukwayo",
      "Dwaine Pretorius",
      "Bjorn Fortuin",
      "Kagiso Rabada",
      "Anrich Nortje",
      "Tabraiz Shamsi",
      "George Linde",
      "Junior Dala",
      "Beuran Hendricks"
    ]
  }
];
console.log(cricket_team[0]);
console.log(cricket_team[1].India[5]);


