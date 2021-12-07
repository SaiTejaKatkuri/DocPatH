
import React from 'react'
import Footer from '../../pages/footer/Footer'
import Navbar from '../navbar/Navbar'


function PatientDashboard() {
    return (
        <>
        <Navbar />
            <div className="row row-xs">
            <div className="card col-sm-3" style={{ backgroundColor: 'white',   minHeight: '600px' }}>
                <div className="card-heading" >
                <h4 style={{marginTop:'80px',fontFamily: "Roboto",}}>
                <center> Patient Profile </center>
                </h4>
                </div>
                <div className="card-body">
                <table class="table" style={{backgroundColor:'white'}}>
                    <tr><td><b> Name  -   </b>  abc</td></tr>
                    <tr><td><b> Contact No.  -   </b>  abc</td></tr>
                    <tr><td><b> Age  -   </b>  abc</td></tr>
                    <tr><td><b> Gender  -   </b>  abc</td></tr>
                    <tr><td><b> City  -   </b>  abc</td></tr>
                    <tr><td><b> State  -   </b>  abc</td></tr>    
                    <button type='button' className="btn btn-secondary" style={{margin:'100px'}}>Update Profile</button>                
                </table>
                
                </div>

            </div>
            {/* <div className="card2 col-sm-9" style={{ backgroundColor: 'white',   minHeight: '600px' }} >
                <div className="card-heading" >
                <h4 style={{marginTop:'40px',fontFamily: "Roboto",}}>
                <center> First Aid Treatment </center>
                </h4>
                </div>
                <div className="card-body"> */}

                <div class="single-post-content col-lg-7" style={{paddingLeft:'70px'}}>
                    <h1 style={{paddingTop:'30px'}}>5 Basic First-Aid Techniques Every Outdoor Enthusiast Should Know</h1>
                    <p style={{padding:'30px'}}>Has anyone ever referred to you or your comrades as ‘risk takers’? Do you crave adrenaline? Do your favorite recreational activities consistently put you and your friends at risk of injury? If you answered affirmatively to any of these questions a&nbsp; Wilderness First Aid (WFA) class may be well worth your time. A WFA class will provide you with the following basic backcountry first-aid techniques, and many more, that can prevent a bad situation from getting worse.</p>
                    <h5><b>1) Control the Spine</b></h5>
                    <p>One of the first skills you’ll learn in a Wilderness First Aid class is how to stabilize the spine. If someone has taken a big fall, or has been hit in the head or back with a good deal of force, their spine must be stabilized <em>immediately</em>. All it takes is holding the head very still so that the person can’t move their head in any direction.&nbsp; With the injured lying down, you can do this with your hands or your knees. Immobilizing the spine allows the someone with higher training to continue a full body assessment, making sure there aren’t any other injuries. By keeping the head immobile, you prevent the patient from possibly severing their spinal cord and paralyzing themselves.</p>
                      
                   
                    <h5><b>2) RICE</b></h5>
                    <p>Sprains and strains are <em>the</em> most common injury in the backcountry. In a WFA class you’ll learn that the best treatment for a sprain or strain in any joint is <em>rest</em> (don’t use it), <em>ice</em> (20 minutes on, 20 minutes off), <em>compression</em> (a snug wrap with an ACE bandage or wet bandana that won’t cut off blood circulation) and <em>elevation</em> (raising the injury above the heart).&nbsp; With these simple steps you can greatly reduce swelling and prevent further damage to fragile joints.</p>
                    <h5><b>3) Direct Pressure on a Bleed</b></h5>
                    <p>If someone is bleeding badly, the most effective first-aid techniques is simply direct pressure. That means finding the source of the blood, getting to the skin so you can actually <em>see</em> the wound, and (with a gloved hand and some gauze) applying steady, firm pressure to the bleed. Do not release pressure until at least 20 minutes are up, allowing time for the blood to congeal. You keep the patient from bleeding to death and free up the first-aid leader to continue the assessment and treat other wounds.</p>
                    <h5><b>4) Heat Exhaustion</b></h5>
                    <p>A hot day on the river or trail puts everyone at risk for heat-related illness. Hydration is key, as well as getting into the shade and cooling down. Loosening tight clothing and a quick dip in the river or nearby creek, or a bucket of water over the head will cool an irritable companion quickly and avoid escalation to heat stroke.</p>
                    <h5><b>5) Hypothermia</b></h5>
                    <p>On the other hand, if someone’s taken one too many dips in cold water without reheating, or stayed in freezing water too long, mild hypothermia can set in. Simply remove wet clothing and warm the person, <em>slowly</em>, focusing on the head and torso first. A fast reheat can be painful and sometimes referred to as the “screaming barfies.”</p>
                    <p>Your best bet is to be prepared. Get to know the area and invest in a good map with topographic details, identify evacuation routes,&nbsp;, carry a well-stocked First Aid kit, and travel with a cell phone, satellite phone or Personal Locator Beacon. In a life-threatening emergency, it’s always best to&nbsp;call 911 or alert Search and Rescue as soon as possible.</p>
                    <p style={{textAlign: 'center'}}><span style={{fontWeight: '400'}}></span></p>
                    <p>&nbsp;</p>
                   
                                        
                   

                </div>
             </div>
             
        <Footer />
        </>
    )
}

export default PatientDashboard



