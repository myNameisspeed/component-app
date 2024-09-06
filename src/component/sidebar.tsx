import './sidebar.css';

const Sidebar = () => {

    let data = [{ co: "CO2" }, { co: "CO4" }, { co: "CO5" }, { co: "CO7" }, { co: "CO13" }, { co: "CO15" }];
    let mapCourse = [{ po: "PO1" }, { po: "PO10" }, { po: "PO12" }, { po: "PO8" }];

    return (
        <div className="whole-nav">
            <div className='head'>Course code</div>
            <div className='data'>BA3102</div>
            <hr className='divider' />
            <div className='head'>Course Name</div>
            <div className='data'>Quantitative techniques</div>
            <hr className='divider' />
            <div className='head'>Course Type</div>
            <div className='data'>Program Elective</div>
            <hr className='divider' />
            <div className='head'>Course Period</div>
            <div className='data'>Semester - <span style={{ fontWeight: "500" }}>I</span> </div>
            <hr className='divider' />
            <div className='head'>Credits(4)</div>
            <div className='data'>Lecture   - <span style={{ fontWeight: "500" }}>3</span>  </div>
            <div className='data'>Tutorial  - <span style={{ fontWeight: "500" }}>1</span> </div>
            <div className='data'>Practical - <span style={{ fontWeight: "500" }}>0</span> </div>
            <div className='data'>Project    -<span style={{ fontWeight: "500" }}>3</span> </div>
            <hr className='divider' />
            <div className='head'>Course Outcomes (COs)</div>
            <div className='course'>
                {(data).map((item, ind) => {
                    return (
                        <div key={ind} className='course-outcomes'>{item.co}</div>
                    )
                })}
            </div>
            <hr className='divider' />
            <div className='head'>Mapped to this Course</div>
            <div className='course'>
                {(mapCourse).map((item, ind) => {
                    return (
                        <div key={ind} className='mapped-outcomes'>{item.po}</div>
                    )
                })}
            </div>
        </div >
    )
}

export default Sidebar