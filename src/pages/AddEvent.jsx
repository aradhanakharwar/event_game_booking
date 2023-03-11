import React, { useEffect, useState } from 'react'


const AddEvent = () => {
    const [location, setLocation] = useState(null)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        let dis = location?.dis * 2
        let amt
        if (dis > 30) {
            amt = (dis - 30) * 50 + 1500
        } else {
            amt = 1500
        };
        setAmount(amt)
        console.log(amt);
    }, [location])

    const arr = [{
        Id: 1,
        name: "Baghajatin, Kolkata, WB",
        Distance: "10km",
        dis: 10
    },
    {
        Id: 2,
        name: "Garia, Kolkata, WB",
        Distance: "20km",
        dis: 20
    }
        ,
    {
        Id: 3,
        Name: "Sealdaha, Kolkata, WB",
        Distance: " 15km",
        dis: 15
    },
    {
        Id: 4,
        name: "Jadavpur, Kolkata, WB",
        Distance: "25km",
        dis: 25
    }
    ]
    return (
        <div style={{ backgroundColor: 'lightblue', margin: '50px 100px 0px 1000px', borderRadius: '20px' }}>
            <form style={{ margin: 'auto', width: '350px' }}>
                <div>
                    <label htmlFor="exampleInputEmail1">Starting date and time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1">Ending date and time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1" required>Setup date and time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>

                <div>
                    <label htmlFor="exampleInputEmail1" required>Location</label>
                    <select className="form-control" name='state' onChange={(e) => setLocation(JSON.parse(e.target.value))}>
                        {
                            arr.map((items) => {
                                return (
                                    <option value={JSON.stringify(items)}>{items.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                {/* <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Payment</label>
                    <input
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Transport charge</label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={amount}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1">Distance</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={amount}
                        required
                    />
                </div>
                <br></br>
                <div>
                    <button type="submit" className="btn btn-primary" style={{ marginBottom: '10px', width: '350px' }}>
                        Add Event
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddEvent
