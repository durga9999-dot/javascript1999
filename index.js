// Import stylesheets
import './style.css';

// Write Javascript code!
const employees = [
  { id: 12, empName: 'akash', dept: 'IT', location: 'HYD' },
  { id: 13, empName: 'arun', dept: 'Service desk', location: 'BANGL' },
  { id: 14, empName: 'arjun', dept: 'Support', location: 'PUNE' },
  { id: 15, empName: 'akira', dept: 'Bms', location: 'VZG' },
  { id: 16, empName: 'akhil', dept: 'Ele', location: 'MUMBAI' },
];
employees.sort((e1, e2) => {
  if (e1.dept < e2.dept) return -1;
  if (e1.dept < e2.dept) return 1;
  return 0;
});
for (let emp of employees) {
  console.log(emp.dept);
}
