import React from "react";
import "./Hospital.css"

// export default function Hospital({doctors}) {
//     return (
//         <div>
        
//         {doctors.map((p)=>(
//            <Doctor doctor={p}/>
//         ))}
//         </div>
//     )
// }

function Hospital(props) {
    return (
<div className="container-fluid">
    <div className="row">
        <div className="col">
            <div className="container">
            <h4>Doctors</h4>
            <table class="table"> 
            <thead> 
                <tr> 
                    <th scope="col">#</th>
                     <th scope="col">Name</th> 
                     <th scope="col">Role</th>
                    <th scope="col">Scheduled-Time</th> 
                </tr> 
            </thead> 
                      <tbody> 
                          <div className="doctors"></div>
                          <tr> 
                              <th scope="row">1</th> 
                              <td>{props.name}</td> 
                              <td>{props.role}</td> 
                              <td>{props.time}</td> 
                            </tr> 
                            <tr> 
                               <th scope="row">2</th>
                               <td>Sumit</td> 
                               <td>Surgeon</td> 
                               <td>9:30am-6:30pm</td> 
                            </tr> 
                            <tr>
                                <th scope="row">3</th> 
                                <td>Rohan</td> 
                                <td>Psychiatric</td> 
                                <td>9:30pm-6:00am</td> 
                            </tr> 
                        </tbody> 
            </table> 
            </div>
            </div>
            

            <div className="col">
            <div className="container">
                <h4>Hospital-info</h4>
                <table class="table"> 
                  <thead> 
                    <tr> 
                        <th scope="col">#</th> 
                        <th scope="col">ward No.</th> 
                        <th scope="col">Type of ward</th> 
                        <th scope="col">Available beds</th>
                    </tr>
                  </thead>
                           <tbody> 
                               <tr> 
                                   <th scope="row">1</th>
                                    <td>234</td> 
                                    <td>Emergency</td>
                                     <td>10</td> 
                                </tr> 
                                     <tr> 
                                         <th scope="row">2</th> 
                                         <td>455</td> 
                                         <td>Men</td> 
                                         <td>7</td> 
                                     </tr> 
                                         <tr> 
                                             <th scope="row">3</th> 
                                             <td>645</td> 
                                             <td>Women</td> 
                                             <td>9</td>
                                         </tr> 
                             </tbody>
                </table> 
             </div>
             </div>

            <div className="col">
            <div className="container">
                <h4>lab-services</h4>
            <div class="alert alert-primary" role="alert"> Hematology     -Ward 234 </div> 
            <div class="alert alert-success" role="alert"> Serology    ward -233 </div> 
            <div class="alert alert-secondary" role="alert"> clinical chemistry   ward  -432 </div>
             <div class="alert alert-danger" role="alert"> Urinalysis   ward-  123 </div> 
             <div class="alert alert-warning" role="alert"> Microbiology  ward   -321</div> 
             <div class="alert alert-info" role="alert"> blood bank   ward  -213</div> </div>
             </div>
             </div>
             </div>
    )
}
export default Hospital;