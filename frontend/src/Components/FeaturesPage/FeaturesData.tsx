import React from 'react'
import "./FeaturesData.css"
import EighthPart from '../Homepage/EighthPart'

const FeaturesData = () => {
    return (
        <div>
            <div className='firstdiv'>
                <h2 className='timetracker'>Time tracker</h2>
                <h3 className='features_page__text_center'>Start and stop timer as you work, or enter hours manually.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-tracker-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div>
                        <h3>Timer</h3>
                        <h4>Track time using a stopwatch.</h4>
                    </div>
                    <div>
                        <h3>Add Time</h3>
                        <h4>Enter and edit hours manually.</h4>
                    </div>
                    <div>
                        <h3>Continue</h3>
                        <h4>Continue tracking with one click.</h4>
                    </div>
                    <div>
                        <h3>Billable</h3>
                        <h4>Mark hours as billable.</h4>
                    </div>
                </div>



            </div>

            {/* TIMESHEET */}
            <div className='firstdiv' >
                <h2 className='timetracker'>Time Sheet</h2>
                <h3 className='features_page__text_center'>Log your weekly activities in less than a minute.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-timesheet-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div>
                        <h3>Activities</h3>
                        <h4>Select activity and enter time.</h4>
                    </div>
                    <div>
                        <h3>Templates</h3>
                        <h4>Select activity and enter time.</h4>
                    </div>
                    <div>
                        <h3>Approval</h3>
                        <h4>Submit and approve timesheets</h4>
                    </div>
                    <div>
                        <h3>Reminders</h3>
                        <h4>Reminder for due timesheets.</h4>
                    </div>
                </div>



            </div>


            {/* KIOSK */}
            <div className='firstdiv'>
                <h2 className='timetracker'>Kiosk</h2>
                <h3 className='features_page__text_center'>Clock in with your PIN code from a shared device.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-kiosk-screenshot.png" alt="" />


                <div className='feattextbox'>
                    <div>
                        <h3>Clock-In</h3>
                        <h4>Punch in from a shared device.</h4>
                    </div>
                    <div>
                        <h3>Breakes</h3>
                        <h4>Track employee breaks.</h4>
                    </div>
                    <div>
                        <h3>PIN</h3>
                        <h4>Sign in with personal code.</h4>
                    </div>
                    <div>
                        <h3>Activity</h3>
                        <h4>See how much you've worked.</h4>
                    </div>
                </div>



            </div>


            {/* CALENDER */}

            <div className='firstdiv'>
                <h2 className='timetracker'>Calendar</h2>
                <h3 className='features_page__text_center'>Visualize your time and block out activities.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-calendar-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div>
                        <h3>Visualize</h3>
                        <h4>See how your day looks like.</h4>
                    </div>
                    <div>
                        <h3>Add</h3>
                        <h4>Block hours with a click.</h4>
                    </div>
                    <div>
                        <h3>Edit</h3>
                        <h4>Edit blocks by resizing.</h4>
                    </div>
                    <div>
                        <h3>Connect</h3>
                        <h4>Edit blocks by resizing.</h4>
                    </div>
                </div>



            </div>


            {/* DASHBOARD */}
            <div className='firstdiv'>
                <h2 className='timetracker'>Dashboard</h2>
                <h3 className='features_page__text_center'>See where you spend time and what your team is working on.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-dashboard-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div >
                        <h3>Activities</h3>
                        <h4>See where you spend most time.</h4>
                    </div>
                    <div>
                        <h3>Charts</h3>
                        <h4>All time and money at a glance.</h4>
                    </div>
                    <div  >
                        <h3>Breakdown</h3>
                        <h4>All time and money at a glance.</h4>
                    </div>
                    <div >
                        <h3>Status</h3>
                        <h4>See who currently works on what.</h4>
                    </div>
                </div>



            </div>

            {/* PROJECTS */}


            <div className='firstdiv'>
                <h2 className='timetracker'>Projects</h2>
                <h3 className='features_page__text_center'>Track time on projects, and keep an eye on progress and budget.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-projects-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div >
                        <h3>Task</h3>
                        <h4>Categorize by job type.</h4>
                    </div>
                    <div>
                        <h3>Rates</h3>
                        <h4>Multiple levels of hourly rates.</h4>
                    </div>
                    <div  >
                        <h3>Budget</h3>
                        <h4>Set budget or time estimate.</h4>
                    </div>
                    <div >
                        <h3>Alerts</h3>
                        <h4>Get notified when close to budget.</h4>
                    </div>
                </div>



            </div>


            {/* TEAM */}

            <div className='firstdiv'>
                <h2 className='timetracker'>Team</h2>
                <h3 className='features_page__text_center'>Invite your team to track time in your account.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-team-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div >
                        <h3>Invite Team</h3>
                        <h4>Unlimited number of users, free.</h4>
                    </div>
                    <div>
                        <h3>Rates</h3>
                        <h4>Set per user hourly rates.</h4>
                    </div>
                    <div  >
                        <h3>Manager</h3>
                        <h4>Give additional permissions.</h4>
                    </div>
                    <div >
                        <h3>Groups</h3>
                        <h4>Manage access using groups.</h4>
                    </div>
                </div>



            </div>

            {/* TIME OFF */}


            <div className='firstdiv'>
                <h2 className='timetracker'>Time off</h2>
                <h3 className='features_page__text_center'>Track your team's holidays and time off requests.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-timeoff-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div >
                        <h3>Policies</h3>
                        <h4>Create time off policies.</h4>
                    </div>
                    <div>
                        <h3>Holidays</h3>
                        <h4>Define holidays for paid leaves.</h4>
                    </div>
                    <div  >
                        <h3>Requests</h3>
                        <h4>Request and approve leaves.</h4>
                    </div>
                    <div >
                        <h3>Balance</h3>
                        <h4>Track available days/hours.</h4>
                    </div>
                </div>



            </div>

            {/* APPROVAL */}
            <div className='firstdiv'>
                <h2 className='timetracker'> Approval</h2>
                <h3 className='features_page__text_center'>Officially approve your team's timesheets and expenses.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-approval-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div >
                        <h3>Submit</h3>
                        <h4>Submit timesheets with one click.</h4>
                    </div>
                    <div>
                        <h3>Reminders</h3>
                        <h4>Send late timesheet reminders.</h4>
                    </div>
                    <div  >
                        <h3>Immutable</h3>
                        <h4>Prevent further changes.</h4>
                    </div>
                    <div >
                        <h3>History</h3>
                        <h4>See all requests in one place.</h4>
                    </div>
                </div>



            </div>

            {/* EXPENSES */}

            <div className='firstdiv'>
                <h2 className='timetracker'> Expenses</h2>
                <h3 className='features_page__text_center'>Record fixed-fees and other project expenses.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-expenses-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div >
                        <h3>Track</h3>
                        <h4>Record by sum or unit.</h4>
                    </div>
                    <div>
                        <h3>Types</h3>
                        <h4>Record by sum or unit.</h4>
                    </div>
                    <div  >
                        <h3>Receipts</h3>
                        <h4>Attach expense receipts.</h4>
                    </div>
                    <div >
                        <h3>Reports</h3>
                        <h4>Analyze and export expenses.</h4>
                    </div>
                </div>



            </div>
            {/* INVOICING */}



            <div className='firstdiv'>
                <h2 className='timetracker'> Invoicing</h2>
                <h3 className='features_page__text_center'>Issue invoices based on tracked time, expenses, and hourly rates.</h3>
                <img className='ttimg' src="https://clockify.me/assets/images/features/features-invoicing-screenshot.svg" alt="" />


                <div className='feattextbox'>
                    <div >
                        <h3>Create</h3>
                        <h4>Import time and edit invoices.</h4>
                    </div>
                    <div>
                        <h3>PDF</h3>
                        <h4>Download and send to client.</h4>
                    </div>
                    <div  >
                        <h3>Customize</h3>
                        <h4>Add company logo and notes.</h4>
                    </div>
                    <div >
                        <h3>Expenses</h3>
                        <h4>Record and invoice fixed fees.</h4>
                    </div>
                </div>





            </div>
            <EighthPart />












        </div>
    )
}

export default FeaturesData