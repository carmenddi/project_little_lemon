
export default function Reservation() {
    return (
        <>
          <div className="background">
            <div className="reservation">
              <h2>Online Reservation</h2>
              <form action="/example.html" method="POST">
                <label for="date">Date</label>
                <input type="date" name="your_date" id="date" />
             </form>
              <form action="/example.html" method="POST">
                <label for="timet">Time</label>
                <input type="time" name="your_time" id="time" />
              </form>
              <form action="/example.html" method="POST">
                <label for="guests">Nr. of guests</label>
                <input type="number" name="guests" id="guests" min="1" max="9" />
              </form>
              <button>Find a Table</button>
            </div>
          </div>
        </>
    );
  }
