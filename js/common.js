$(document).ready(function(){
   
    // function calculateTotalExperience(experienceArray) {
    //     let totalMonths = 0;

    //     for (let i = 0; i < experienceArray.length; i++) {
    //         const job = experienceArray[i];

    //         const fromDate = new Date(job.from);
    //         const toDate = job.to ? new Date(job.to) : new Date();

    //         const diffInMilliseconds = toDate - fromDate;
    //         const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44); // Average month duration

    //         totalMonths += Math.round(diffInMonths);
    //     }

    //     const totalYears = Math.round(totalMonths / 12);
    //     const remainingMonths = totalMonths % 12;

    //     if (totalYears === 0 && remainingMonths === 0) {
    //         return 'Less than a month';
    //     } else if (totalYears === 1 && remainingMonths === 0) {
    //         return '1 Year';
    //     } else if (totalYears === 0 && remainingMonths === 1) {
    //         return '1 Month';
    //     } else if (totalYears === 1 && remainingMonths === 1) {
    //         return '1 Year 1 Month';
    //     } else if (totalYears > 0 && remainingMonths === 0) {
    //         return `${totalYears} Years`;
    //     } else {
    //         return `${totalYears} Years ${remainingMonths} Months`;
    //     }
    // }

    function calculateTotalExperience(experienceArray) {
        let totalMonths = 0;
    
        for (let i = 0; i < experienceArray.length; i++) {
            const job = experienceArray[i];
    
            const fromDate = new Date(job.from);
            const toDate = job.to ? new Date(job.to) : new Date();
    
            const diffInMilliseconds = toDate - fromDate;
            const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44); // Average month duration
    
            totalMonths += diffInMonths;
        }
    
        const totalYears = Math.floor(totalMonths / 12);
        const remainingMonths = Math.round(totalMonths % 12);
    
        if (totalYears === 0 && remainingMonths === 0) {
            return 'Less than a month';
        } else {
            let output = '';
            if (totalYears > 0) {
                output += `${totalYears} Year${totalYears > 1 ? 's' : ''}`;
            }
            if (remainingMonths > 0) {
                output += `${output.length > 0 ? ' ' : ''}${remainingMonths} Month${remainingMonths > 1 ? 's' : ''}`;
            }
            return output;
        }
    }

    function convertToMonthYear(dateString) {
        if (dateString != null) {
            const date = new Date(dateString);
            const options = { month: 'long', year: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        } else {
            return 'Present'
        }
    }

    function getFormattedMonthAndYearFromDate(dateString) {
        const date = new Date(dateString);

        // Array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const monthIndex = date.getMonth(); // Get month index (0-11)
        const monthName = monthNames[monthIndex]; // Get month name from array
        const year = date.getFullYear(); // Get full year (YYYY)

        return `Year ${monthName} ${year}`;
    }

    function set_data(data) {
        try {
            $('.custom_linked_in').attr('href', data['linked_in']);
            $('.custom_twitter').attr('href', data['twitter']);
            $('.custom_facebook').attr('href', data['facebook']);
            $('.custom_instagram').attr('href', data['instagram']);
            $('.custom_instagram').attr('onclick', "window.open('tel:+" + data['contact'] + "');");
            $('.custom_email').attr('onclick', "window.open('mailto:+" + data['email_id'] + "');");
            $('.custom_email').html('<i class="fa fa-mail-reply"></i>' + data['email_id']);
            $('#experience').html(calculateTotalExperience(data['experience'])+" of <span> Experience. </span>");
            $('.custom_resume').attr('href', data['cv_link']);

            let custom_skills = "";
            data['skills'].forEach(function (i) {
                custom_skills += '<li class="skill-item"> <h5>' + i['title'] + '</h5> <div class="progress"> <div class="progress-bar wow slideInLeft" data-wow-delay="400ms" data-wow-duration="2000ms" role="progressbar" style="width: ' + i['score'] + ';" role="progressbar"> <span>' + i['score'] + '</span> </div> </div> </li>';
            });
            $('.custom_skills').html(custom_skills);

            let custom_experience = "";
            for (let i = data['experience'].length - 1; i >= 0; i--) {
                custom_experience += '<div class="experience-wrap row"><div class="col-lg-2 col-md-4"><div class="experience-date"><h4>' + convertToMonthYear(data['experience'][i]['from']) + '<br>to ' + convertToMonthYear(data['experience'][i]['to']) + '</h4></div></div><div class="col-lg-10 col-md-8"><div class="experience-content"><h2>' + data['experience'][i]['role'] + '<span>' + data['experience'][i]['company'] + '</span></h2><p>' + data['experience'][i]['description'] + '</p></div></div></div>';
            }
            $('.custom_experience').html(custom_experience);

            let custom_education = "";
            data['education'].forEach(function (i) {
                custom_education += '<div class="col-md-6 mt-10"><div class="card text-center padding-15 bg-grey"><h2>'+i['course']+'</h2><h4>'+i['university']+'</h4><h5>'+getFormattedMonthAndYearFromDate(i['completion_year'])+' | '+i['score']+'</h5><p></p></div></div>';
            });
            $('.custom_education').html(custom_education);

            let custom_work_portfolio = "";
            data['work_portfolio'].forEach(function (i) {
                custom_work_portfolio += '<div class="col-md-4 mt-10"><div class="card text-center padding-15"><h2>'+i['project']+'</h2><h4>'+i['company']+' '+i['year']+'</h4><p>'+i['technology']+'</p></div></div>';
            });
            $('.custom_work_portfolio').html(custom_work_portfolio);
            
            let custom_services = "";
            data['services'].forEach(function (i) {
                custom_services += '<div class="col-lg-3 col-sm-6 padding-15"><div class="service-item"><i class="'+i['icon_class']+'"></i><div class="service-content"><h3>'+i['service']+'</h3></div></div></div>';
            });
            $('.custom_services').html(custom_services);

        } catch (error) {
            window.location.href = 'maintainance.html';
        }
    }

    // Make a GET request to the URL
    fetch('./data.json')
        .then(response => {
            // Check if the response is successful (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            set_data(data)
        })
        .catch(error => {
            // Handle errors
            window.location.href = 'maintainance.html';
        });

    $(document).ready(function () {
        
    });
});
