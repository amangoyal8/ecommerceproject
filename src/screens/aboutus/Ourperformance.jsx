import React from "react";
import per1 from "../../images/performace1.png";
function Ourperformance() {
    return (
        <>
            <div className="performance-main">
                <div className="perf-img">
                    <img src={per1} />
                </div>
                <div className="perf-data">
                    <h2>OUR PERFORMANCE</h2>
                    <h1>Your Partner for e-commerce grocery solution</h1>
                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error totam nemo voluptas quae eligendi corporis consequuntur ipsum libero, quod ullam expedita exercitationem deleniti similique sint veniam nesciunt vel. Ducimus, distinctio?</p>

                </div>
            </div>
            <br />
            <div className="perftext-main">
                <div className="perftext-in">
                    <h1>Who we are</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ea aliquam repellat quod, eligendi ipsum facere temporibus fugit, consequuntur necessitatibus libero hic cumque ducimus delectus? Perferendis aperiam dolore aut ex.</p>
                </div>
                <div className="perftext-in">
                    <h1>Our history</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit officia quaerat perferendis sapiente accusantium dolor quos non fugiat excepturi id! Consequuntur, autem iusto quisquam est dolorem inventore fugit aperiam exercitationem?</p>
                </div>
                <div className="perftext-in">
                    <h1>Our mission</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptates reprehenderit fuga autem, ea commodi magnam quod quas deleniti! Eligendi illum quae quo eos dolorum, eius corrupti. Delectus, ipsa omnis.</p>
                </div>
            </div>
        </>
    )
}
export { Ourperformance }