import axios from 'axios';

const API_URL = 'https://top-chassis-429718-j8.ts.r.appspot.com/bookings/get'; // Replace with your backend URL

class BookingService {
    getAllBookings() {
        return axios.get(API_URL);
    }
}

export default new BookingService();
