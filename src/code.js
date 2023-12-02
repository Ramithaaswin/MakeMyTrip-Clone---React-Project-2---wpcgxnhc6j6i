import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';


const MyDatePicker = () => {

const [selectedDate, setSelectedDate] = useState(null);

const handleDateChange = (date) => {

setSelectedDate(date);

console.log(date); // You can use the selected date as needed

};

return (

<div>

<h2>Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}</h2>

<DatePicker

selected={selectedDate}

onChange={handleDateChange}

dateFormat="MM/dd/yyyy"

/>

</div>

);

};