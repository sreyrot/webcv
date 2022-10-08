

$(document).ready(function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    db.collection('personaldata').get().then(data => {
        $result = "";
        data.forEach(el => {
            $result += `
            <link rel="stylesheet" href="../css/style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="card mt-5">
                <div class="row">
                    <div class="col-4" id="right-sidebar">
                        <div class="row">
                            <div class="col-4"></div>
                            <div class="col-4 mt-3 mb-3">
                                <img src="../img/picme.jpg" alt="" id="profile">
                            </div>
        

                            <div class="col-4"></div>
                        </div>
                        <div class="row">
                            <div class="col-2"><button​ class="btn btn-primary">Go Detail</button></div>
                            
                            <div class="col-8 mt-3 mb-3 " >
                            
                                <h4 class="text-center" >${el.data().firstName.toUpperCase()} ${el.data().lastName.toUpperCase()}</h4>
                                <p class="text-center">${el.data().major.toUpperCase()}</p>
                                <hr>
                                <i class="fa fa-envelope" style="color: blue" aria-hidden="true"></i>   
                                <span >${el.data().mail}</span> <br>
                                <i class="fa fa-phone" style="color: green" aria-hidden="true"></i>
                                <span >${el.data().contact}</span> <br>
                                <i class="fa fa-flag" style="color: brown" aria-hidden="true"></i>
                                <span >${el.data().national}</span> <br>
                                <hr>
                                <i class="fa fa-transgender" style="color: gold" aria-hidden="true"></i>
                                <span >${el.data().sex}</span> <br>
                                <i class="fa fa-heart" style="color: red" aria-hidden="true"></i>
                                <span >${el.data().maritalStatus}</span> <br>
                                <i class="fa fa-calendar" style="color: purple" aria-hidden="true"></i>
                                <span >${el.data().dateOfBirth}</span> <br>
                                <i class="fa fa-map" style="color: orange" aria-hidden="true"></i>
                                <span >${el.data().placeOfBirth}</span> <br>
                                <hr>
                                    <i class="fa fa-book" style="color: pink" aria-hidden="true"> Reading book</i><br>
                                    <i class="fa fa-search" style="color: #33ccff" aria-hidden="true"> Research</i><br>
                                    <i class="fa fa-soccer-ball-o" style="color: #6633ff" aria-hidden="true"> Football</i><br>
                                <hr>
                                <a href="https://web.facebook.com/?_rdc=1&_rdr"><i class="fa fa-facebook-square"aria-hidden="true"></i></a> <br>
                                <a href="https://web.facebook.com/?_rdc=1&_rdr">Facebook</a> <br>
                                <a class="text-danger" href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a> <br>
                                <a class="text-danger" href="https://www.instagram.com/?hl=en">Instagram</a> <br>
                                </div>
                            <div class="col-2"></div>
                          
                        </div>
                    </div>
                    <div class="col-7" >
                        <h1 class="text-center mt-3 " id="right-text-header ">Personal Data</h1>
                        <p class="text-center ">${el.data().curentJob.toUpperCase()}</p>
                        <hr>
                        <div class="row">
                            <i class="fa fa-graduation-cap ml-3" style="color: #004d99" id="icon"></i>
                            <h4 id="right-text-header" class="ml-2"><strong>Education Backgroun</strong></h4>
                        </div>
                            <p><b>2018 - Present:</b>  Passerelles Numériques Cambodia  </p>
                            <ul> 
                                <li>${el.data().presentJob}</li>
                                <li>Major: ${el.data().major}</li>
                            </ul>
                            <p><b>2016-2018:</b>  Hun Sen Oddarmeanchey High School </p>
                            <ul> 
                                <li>${el.data().pastJob}</li>
                            </ul>
                            <hr>
                        <div class="row">
                            <i class="fa fa-cogs ml-3" style="color: #33ffff" id="icon"></i>
                            <h4 id="right-text-header" class="ml-2"><strong>Skill</strong></h4>
                        </div>
                        <p><b>Hard Skill: </b></p>
                        <ul> 
                            <li>${el.data().technicalSkill}</li>
                        </ul>
                        <p><b>Soft Skill:</b></p>
                        <ul> 
                            <li>${el.data().softSkill}</li>
                        </ul>
                        <hr>
                        <div class="row">
                            <i class="fa fa-tasks ml-3" style="color: #cc33ff" id="icon"></i>
                            <h4 id="right-text-tasks" class="ml-2"><strong>Work Experience</strong></h4>
                        </div>
                        <p><b>Virtual Company I:</b></p>
                        <ul> 
                            <li>${el.data().vertual1}</li>
                        </ul>
                        <p><b>Virtual Company II:</b></p>
                        <ul> 
                            <li>${el.data().vertual2}</li>
                        </ul>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
           
            `;

            console.log(el);
        })
        $('#result').append($result);
    })
});