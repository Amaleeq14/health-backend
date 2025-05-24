let bookings = [];

exports.getBookings = (req, res) => {
  res.json(bookings);
};

exports.createBooking = (req, res) => {
  const booking = req.body;
  if (!booking.name || !booking.time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  bookings.push(booking);
  res.status(201).json({ message: 'Booking created', booking });
};
