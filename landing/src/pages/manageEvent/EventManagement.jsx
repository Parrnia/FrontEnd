import React from "react";
import DatePick from "./date";
import xSvg from "./X.svg";
import axios from 'axios'
//import LocationPicke from "./LocationPicker.jsx";

const xhr = new XMLHttpRequest();
const reader = new FileReader();

export default class EventManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          EventName: '',
          Title: '',
          TeacherName:'',
          UploadedImage: null,
          UploadedImageName: null,
          UploadedImageType: null,
          StartDate:'',
          EndDate:'',
          StartHour:'00',
          EndHour:'00',
          StartMin:'00',
          EndMin:'00',
          EventTime:'',
          MeetingLink:'',
          OrgName:'',
          OrgInf:'',
          TicketCount: 0,
          selectedOption: "option2",
          ChildTickets: {},
          tickets: {},
          Address: '',
          Platform: '',
          LocationValue:null
        };
    }

    PostData(){
        if(this.checkEmpty()){
            const apiUrl = 'https://my.pouyanbroker.com/StudentScientificSociety/insert_request';

            const postData = {
                "api_key": "f8f8a66c-62d7-4917-881b-dab4004f0c0c",
                "token": "1af8e50d-c1b5-4773-83bb-4b75d7b36d92",
                "member_id": "09207412300",
                "table": "events",
                "method_type": "insert_event",
                "data":{
                    "image": {
                        "file_content": this.state.UploadedImage,
                        "file_type": this.state.UploadedImageType,
                        "file_titel": this.state.UploadedImageName
                    },
                    "Name": this.state.EventName,
                    "is_active": "TRUE",
                    "external_links": this.state.MeetingLink,
                    "min_participants": 20,
                    "max_participants": 50,
                    "cost": 0,
                    "registration_start_date": this.state.StartDate + " " + this.state.StartHour+":"+this.state.StartMin,
                    "registration_end_date": this.state.EndDate + " " + this.state.EndHour+":"+this.state.EndMin,
                    "start_date": this.state.StartDate + " " + this.state.StartHour+":"+this.state.StartMin,
                    "end_date": this.state.EndDate + " " + this.state.EndHour+":"+this.state.EndMin,
                    "hours": parseInt(this.state.EventTime),
                    "subject": this.state.Title,
                    "teacher_name": this.state.TeacherName,
                    "location": this.state.LocationValue,
                    "platform": this.state.Platform,
                    "explanations": "توضیحاتی موجود نیست "
                }
            };
            

            // Make a POST request using Axios
            axios.post(apiUrl, postData)
            .then(response => {
            console.log('Response:', response.data);
            // Handle the response data here
            })
            .catch(error => {
            console.error('Error:', error);
            // Handle errors here
            });
        }
    }

    GetData(){
        console.log("a");

        const apiUrl = 'https://my.pouyanbroker.com/StudentScientificSociety/insert_request';

        axios.get(apiUrl)
        .then(response => {
            // Handle successful response
            console.log('Response:', response.data);
            const getData = response.data;
            // Do something with the response data
            /*const postData = {
                "api_key": "f8f8a66c-62d7-4917-881b-dab4004f0c0c",
                "token": "1af8e50d-c1b5-4773-83bb-4b75d7b36d92",
                "member_id": "09207412300",
                "table": "events",
                "method_type": "insert_event",
                "data":{
                    "image": {
                        "file_content": this.state.UploadedImage,
                        "file_type": this.state.UploadedImageType,
                        "file_titel": this.state.UploadedImageName
                    },
                    "Name": this.state.EventName,
                    "is_active": "TRUE",
                    "external_links": this.state.MeetingLink,
                    "min_participants": 20,
                    "max_participants": 50,
                    "cost": 0,
                    "registration_start_date": this.state.StartDate + " " + this.state.StartHour+":"+this.state.StartMin,
                    "registration_end_date": this.state.EndDate + " " + this.state.EndHour+":"+this.state.EndMin,
                    "start_date": this.state.StartDate + " " + this.state.StartHour+":"+this.state.StartMin,
                    "end_date": this.state.EndDate + " " + this.state.EndHour+":"+this.state.EndMin,
                    "hours": parseInt(this.state.EventTime),
                    "subject": this.state.Title,
                    "teacher_name": this.state.TeacherName,
                    "location": "",
                    "platform": "skype",
                    "explanations": "توضیحاتی موجود نیست "
                }
            };*/
        })
        .catch(error => {
            // Handle error
            console.error('Error fetching data:', error);
        }); 
    }

    checkEmpty(){
        if(this.state.selectedOption==='option1'){
            if(this.state.Address.length>0 && this.state.EventName.length>0 && this.state.Title.length>0 && this.state.TeacherName.length>0 && this.state.StartDate.length>0 && this.state.EndDate.length>0 && this.state.StartHour.length>0 && this.state.StartMin.length>0 && this.state.EndHour.length>0 && this.state.EndMin.length>0 && parseInt(this.state.EventTime)>0 && this.state.EventTime.length>0 && this.state.MeetingLink.length>0 && this.state.OrgName.length>0){
                return true
            }else{
                return false
            }
        }else{
            if(this.state.Platform.length>0 && this.state.EventName.length>0 && this.state.Title.length>0 && this.state.TeacherName.length>0 && this.state.StartDate.length>0 && this.state.EndDate.length>0 && this.state.StartHour.length>0 && this.state.StartMin.length>0 && this.state.EndHour.length>0 && this.state.EndMin.length>0 && parseInt(this.state.EventTime)>0 && this.state.EventTime.length>0 && this.state.MeetingLink.length>0 && this.state.OrgName.length>0){
                return true;
            }else{
                return false;
            }

        }
    }
    checkTicket(){
        if(Object.keys(this.state.tickets).length>0){
            return true;
        }else{
            return false;
        }
    }
    handleOptionChange(option){
        this.setState({selectedOption:option});
    };
    cal(){
        document.ready(function() {".date-picker".pDatePick();});
        document.ready(function() {".date-picker".pDatePick({
                initialValue: false		
            });
          });
    }
    

    handleDateChange(i, EvId, unix, formatted){
        if(EvId=='events'){
            this.state.StartDate = formatted;
        }else if(EvId=='evente'){
            this.state.EndDate = formatted;
        }else{
            const tcount = EvId.substring(1, EvId.length);
            console.log(tcount);
            if(EvId.charAt(0) == 's'){
                this.state.tickets[tcount][7] = formatted;
            }else{
                this.state.tickets[tcount][8] = formatted;
            }
        }
    };

    CreateTicket(){
        console.log(this.state);
        //this.GetData();
        //const crTicketb = document.getElementById();
        if(Object.keys(this.state.tickets).length < 3){
            var counter = this.state.TicketCount+1;
            this.setState({TicketCount:counter});
            this.state.tickets[this.state.TicketCount] = [];

            const ticket = (<div id={"ticket-box"+this.state.TicketCount} key={this.state.TicketCount} className="flex flex-col mb-10">

                                <div className="flex md:flex-row-reverse flex-col w-full">
                                    <div className="bg-white rounded-lg md:mb-0 mb-6">
                                        <div className="relative bg-inherit">
                                            <input dir="rtl" type="text" onChange={(e) => this.state.tickets[parseInt(e.target.id.substring(5, e.target.id.length))][0] = e.target.value} id={"tName"+this.state.TicketCount} className="text-sm peer bg-transparent py-2 md:w-70 w-5/6 lg:w-80 float-right md:mr-9 mr-1 pr-2 rounded-lg placeholder-transparent ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="عنوان بلیت"/><label for={"tName"+this.state.TicketCount} className="text-right absolute cursor-text right-6 md:right-11 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">عنوان بلیت</label>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg mb-6 md:mb-0">
                                        <div className="relative bg-inherit">
                                            <input type="text" onChange={(e) => this.state.tickets[parseInt(e.target.id.substring(4, e.target.id.length))][1] = e.target.value} id={"tCnt"+this.state.TicketCount} className="text-sm peer bg-transparent py-2 md:w-40 w-5/6 lg:w-40 float-right md:mr-2 lg:mr-3 mr-1 pr-2 rounded-lg placeholder-transparent ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="تعداد"/><label for={"tCnt"+this.state.TicketCount} className="text-right absolute cursor-text right-6 md:right-5 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"><b for={"tCnt"+this.state.TicketCount} className="text-red-500">*</b>تعداد</label>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg mb-6 md:mb-0">
                                        <div className="relative bg-inherit">
                                            <input type="text" onChange={(e) => this.state.tickets[parseInt(e.target.id.substring(6, e.target.id.length))][2] = e.target.value} id={"tPrice"+this.state.TicketCount} className="text-sm peer bg-transparent py-2 md:w-40 w-5/6 float-right md:mr-4 mr-1 lg:mr-3 pr-2 rounded-lg placeholder-transparent ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="(مبلغ(تومان"/><label for={"tPrice"+this.state.TicketCount} className="text-right absolute cursor-text right-6 md:right-5 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">مبلغ(تومان)</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-row-reverse w-1/4">
                                        <button onClick={this.delTicket.bind(this)} id={"delete-ticket"+this.state.TicketCount} type="button" className="hover:bg-gray-200 mr-2 md:mr-12 lg:mr-5 w-10 h-10 rounded-xl text-red-600">
                                        <img id={"delete-ticket"+this.state.TicketCount} alt="delete" className="w-5 h-5 ml-2.5" src={xSvg}></img>
                                        </button>
                                    </div>

                                </div>
                                <div id={"setting-area" + this.state.TicketCount} className="w-full">
                                    <div className="flex md:flex-row-reverse md:gap-5 flex-col w-full sm:w-3/4 ml-4 sm:ml-auto sm:mr-8 mt-10 lg:gap-17">
                                        
                                        <div className="flex flex-col md:mb-0 ml-auto w-full mb-5 md:w-[20rem]">
                                            <div className="mb-2 text-right text-sm"><b className="text-red-500 text-sm">*</b>تاریخ و ساعت شروع</div>
                                            <div className="flex flex-row-reverse gap-1">
                                                
                                            <div className="App float-right sm:mr-1 md:w-1/2 w-5/6 sm:w-[20rem]">
                                                <div dir="rtl" className="DatePick">
                                                <DatePick value={null} onChange={this.handleDateChange.bind(this,"","s"+this.state.TicketCount)}/ >
                                                </div>
                                            </div>

                                                <div className="flex items-center">
                                                    <select
                                                        id={"tshour"+this.state.TicketCount}
                                                        onChange={(e) => this.state.tickets[parseInt(e.target.id.substring(6, e.target.id.length))][3] = e.target.value}
                                                        className="w-13 px-2 border rounded mr-1 text-sm bg-white"
                                                    >
                                                        {[...Array(24).keys()].map((h) => (
                                                        <option key={h} value={String(h).padStart(2, '0')}>
                                                            {String(h).padStart(2, '0')}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <span className="text-lg">:</span>
                                                    <select
                                                        id={"tsmin"+this.state.TicketCount}
                                                        onChange={(e) => this.state.tickets[parseInt(e.target.id.substring(5, e.target.id.length))][4] = e.target.value}
                                                        className="w-13 px-2 border rounded ml-1 text-sm bg-white"
                                                    >
                                                        {[...Array(60).keys()].map((m) => (
                                                        <option key={m} value={String(m).padStart(2, '0')}>
                                                            {String(m).padStart(2, '0')}
                                                        </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
        
                                        <div className="flex flex-col md:mb-0 ml-auto w-full mb-5 md:w-[20rem]">
                                            <div className="mb-2 text-right text-sm"><b className="text-red-500 text-sm">*</b>تاریخ و ساعت پایان</div>
                                            <div className="flex flex-row-reverse gap-1">
                                                
                                            <div className="pp float-right sm:mr-1 md:w-1/2 w-5/6 sm:w-[20rem]">
                                                <div dir="rtl" className="DatePick">
                                                <DatePick value={null} onChange={this.handleDateChange.bind(this,"","e"+this.state.TicketCount)}/ >
                                                </div>
                                            </div>

                                                <div className="flex items-center">
                                                    <select
                                                        id={"tehour"+this.state.TicketCount}
                                                        onChange={(e) => this.state.tickets[parseInt(e.target.id.substring(6, e.target.id.length))][5] = e.target.value}
                                                        className="w-13 px-2 border rounded mr-1 text-sm bg-white"
                                                    >
                                                        {[...Array(24).keys()].map((h) => (
                                                        <option key={h} value={String(h).padStart(2, '0')}>
                                                            {String(h).padStart(2, '0')}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <span className="text-lg">:</span>
                                                    <select
                                                        id={"temin"+this.state.TicketCount}
                                                        onChange={(e) => this.state.tickets[parseInt(e.target.id.substring(5, e.target.id.length))][6] = e.target.value}
                                                        className="w-13 px-2 border rounded ml-1 text-sm bg-white"
                                                    >
                                                        {[...Array(60).keys()].map((m) => (
                                                        <option key={m} value={String(m).padStart(2, '0')}>
                                                            {String(m).padStart(2, '0')}
                                                        </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="h-px border-gray-300 border-1 mb-5 mt-10 w-full ml-4 sm:ml-8 md:ml-3"></hr>
                            </div>);
            this.state.ChildTickets["ticket-box"+this.state.TicketCount] = ticket;
        }else{
            const crTicketb = document.getElementById('cr-ticket-b');
            const crTicketinf = document.getElementById('cr-ticket-inf');
            crTicketb.disabled = true;
            crTicketinf.textContent = "بیشتر از 3 بلیت نمیتوان ایجاد کرد";
            crTicketinf.className = "ring-2 rounded-lg ring-red-800 bg-red-500 duration-500 mb-8 text-white w-80 text-center"
            
        }
    }
    delTicket(event){
        if(Object.keys(this.state.tickets).length == 3){
            const crTicketb = document.getElementById('cr-ticket-b');
            const crTicketinf = document.getElementById('cr-ticket-inf');
            crTicketb.disabled = false;
            crTicketinf.textContent = "برای ساخت بلیت جدید کلیک کنید";
            crTicketinf.className = "mb-3"
        }
        const a = "ticket-box"+ event.target.id.substring(13, event.target.id.length);
        delete this.state.ChildTickets[a];
        delete this.state.tickets[event.target.id.substring(13, event.target.id.length)];
        this.setState({ChildTickets: this.state.ChildTickets})
    }

    delImage(){
        this.state.UploadedImage = null;
        this.state.UploadedImageName = '';
        this.state.UploadedImageType = '';
        xhr.abort();
        if(this.state.UploadedImage==null){

            const uploadInput = document.getElementById('upload');
            const filenameLabel = document.getElementById('filename');
            const imagePreview = document.getElementById('image-preview');
            imagePreview.innerHTML =
                    `<div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">بدون عکس<br></br>برای آپلود کلیک کنید</div>`;
        }
    }


    imagePreview(){
        const uploadInput = document.getElementById('upload');
        const filenameLabel = document.getElementById('filename');
        const imagePreview = document.getElementById('image-preview');

        let isEventListenerAdded = false;

        uploadInput.addEventListener('change', (event) => {
            
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
            xhr.open('POST', './img/X.svg', true);
            xhr.upload.onprogress = e=>{
                if(e.lengthComputable){
                    const percentComplete = (e.loaded/e.total)*100;
                    console.log(percentComplete);
                    if(percentComplete != 100){
                        imagePreview.innerHTML =
                            `<div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">...در حال آپلود</div>`;
                    }
                }
            }
            xhr.send(formData);

            if (file) {
            filenameLabel.textContent = file.name;

            reader.onload = (e) => {
                this.state.UploadedImage = reader.result;
                
                this.state.UploadedImageName = file.name.split("/")[0];
                this.state.UploadedImageType = file.type.split("/")[1];
                //console.log(this.UploadedImage);
                imagePreview.innerHTML =
                `<img id='upl-img' src="${this.state.UploadedImage}" className="max-h-48 rounded-lg mx-auto" alt="Image preview" />`;
                imagePreview.classList.remove('border-dashed', 'border-2', 'border-gray-400');

                if (!isEventListenerAdded) {
                imagePreview.addEventListener('click', () => {
                    uploadInput.click();
                });

                isEventListenerAdded = true;
                }
            };
            reader.readAsDataURL(file);
            } else {
            filenameLabel.textContent = '';
            imagePreview.innerHTML =
                `<div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">بدون عکس</div>`;
            imagePreview.classList.add('border-dashed', 'border-2', 'border-gray-400');

            imagePreview.removeEventListener('click', () => {
                uploadInput.click();
            });

            isEventListenerAdded = false;
            }
        });

        uploadInput.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
    handleLocation(a, b){
        if(a){
            this.state.LocationValue = a.lat+" "+a.lng;
            console.log(this.state.LocationValue);
        }
    }
    render(){
        return(
            <div>
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
    
                <body className="flex flex-col font-IRANSans bg-gray-100 items-center justify-center">
                    <div className="flex flex-col items-center justify-center lg:w-[55rem] md:w-[50rem] sm:w-[37rem] w-full">
                        <div className="w-full text-right text-xl mb-5 mt-12 mr-7 lg:mr-0">ایجاد رویداد</div>

                        <div className="ml-auto mb-10 mr-5 mt-2 lg:mr-0">
                            
                        <div className="flex items-center">
                            <div className="mr-8">
                                <input
                                    type="radio"
                                    id="option1"
                                    value="option1"
                                    checked={this.state.selectedOption === 'option1'}
                                    onChange={() => this.handleOptionChange('option1')}
                                    className="text-sm appearance-none border border-gray-400 rounded-sm h-4 w-4 mr-1 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                                />
                                <label htmlFor="option1">حضوری</label>
                                </div>
                                <div>
                                <input
                                    type="radio"
                                    id="option2"
                                    value="option2"
                                    checked={this.state.selectedOption === 'option2'}
                                    onChange={() => this.handleOptionChange('option2')}
                                    className="text-sm appearance-none border border-gray-400 rounded-sm h-4 w-4 mr-1 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                                />
                                <label htmlFor="option2">آنلاین</label>
                                </div>
                            </div>

                        </div>
    
                        <div className="flex flex-col gap-4 w-full">
    
                            <div className="top-35 bg-white pt-20 sm:pr-16 md:pr-10 pr-8 rounded-lg shadow-lg w-full">
                                <div className="text-right md:pr-9 pr-2">مشخصات رویداد</div>
                                <form className="flex flex-col w-full">
                                    <div className="bg-white rounded-lg mt-10 mb-12">
                                        <div className="text-right w-1/4 sm:w-1/5 sm:ml-2 md:ml-0 md:w-1/6">{"60/"+this.state.EventName.length}</div>
                                        <div className="relative bg-inherit">
                                                <input dir="rtl" type="text" id="event-name" onChange={(e) => this.setState({EventName:e.target.value})} className="text-sm peer bg-transparent py-2 md:mr-9 mr-1 w-5/6 float-right rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right placeholder-text-xs" placeholder="نام رویداد"/><label for="event-name" className="text-right absolute cursor-text right-5 md:right-14 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"><b for={"event-name"} className="text-red-500">*</b>نام رویداد</label>
                                            </div>
                                    </div>
                                    <div className="bg-white rounded-lg mb-12">
                                            <div className="relative bg-inherit">
                                                <input dir="rtl" type="text" id="title-name" onChange={(e) => this.setState({Title:e.target.value})} className="text-sm peer bg-transparent py-2 md:mr-9 mr-1 w-5/6 float-right rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="موضوع رویداد"/><label for="title-name" className="text-right absolute cursor-text right-5 md:right-14 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"><b for={"title-name"} className="text-red-500">*</b>موضوع رویداد</label>
                                            </div>
                                    </div>
                                    <div className="bg-white rounded-lg mb-16">
                                        <div className="relative bg-inherit">
                                            <input dir="rtl" onChange={(e) => this.setState({TeacherName:e.target.value})} type="text" id="teacher-name" maxlength="60" className="text-sm peer bg-transparent py-2 md:mr-9 mr-1 w-10/12 float-right rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="نام مدرس"/><label for="teacher-name" className="text-right absolute cursor-text right-5 md:right-14 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"><b for={"teacher-name"} className="text-red-500">*</b>نام مدرس</label>
                                        </div>
                                    </div>
    
                                    <div className="w-full text-center text-sm ml-4">تصویر رویداد</div>
    
                                    <section id="handler" className="flex py-3 sm:w-auto w-full ml-4 mb-5 sm:ml-10">
                                        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
                                            <div className="px-4 py-6">
                                            <div id="image-preview" className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                                                <input id="upload" onClick={this.imagePreview.bind(this)} type="file" className="hidden" accept="image/*" />
                                                <label for="upload" className="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                </svg>
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">آپلود تصویر</h5>
                                                <p className="font-normal text-sm text-gray-400 md:px-6">عکس انتخاب شده باید کمتر از<br></br><b className="text-gray-600">دو مگابایت باشد</b></p>
                                                <p className="font-normal text-sm text-gray-400 md:px-6">و باید به فرمت های <br></br><b className="text-gray-600">باشد JPG, PNG</b></p>
                                                <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                                                </label>
                                            </div>
                                            </div>
                                            <button onClick={this.delImage.bind(this)} type="button" className="bg-red-500 rounded-lg text-white w-11/12 ml-3 mb-2 h-10 hover:bg-red-600">حذف عکس</button>
                                        </div>
                                    </section>
                                    
    
                                </form>
                            </div>
    
                            <div className="top-35 bg-white pt-16 rounded-lg shadow-lg w-full">
                                <div className="text-right mr-7 sm:mr-12 md:mr-16 lg:mr-23 lg:pr-2">اطلاعات رویداد</div>
                                <div className="flex md:flex-row-reverse flex-col w-full mt-10 lg:gap-17">
                                    
                                    <div className="flex flex-col md:mb-0 ml-auto pr-7 sm:pr-12 w-11/12 mb-5 md:w-[22rem] md:pr-16 lg:pr-15 lg:mr-3">
                                        <div className="mb-2 text-right text-sm"><b className="text-red-500 text-sm">*</b>تاریخ و ساعت شروع</div>
                                        <div className="flex flex-row-reverse gap-1">
                                            
                                        <div className="App float-right md:w-60 w-70 sm:w-[20rem]">
                                                <div dir="rtl" className="DatePick">
                                                    <DatePick value={this.state.StartDate} onChange={this.handleDateChange.bind(this,"",'events')}/ >
                                                </div>
                                            </div>


                                            <div className="flex items-center">
                                                <select
                                                    onChange={(e) => this.state.StartHour = e.target.value}
                                                    className="w-13 px-2 border rounded mr-1 text-sm bg-white"
                                                >
                                                    {[...Array(24).keys()].map((h) => (
                                                    <option key={h} value={String(h).padStart(2, '0')}>
                                                        {String(h).padStart(2, '0')}
                                                    </option>
                                                    ))}
                                                </select>
                                                <span className="text-lg">:</span>
                                                <select
                                                    onChange={(e) => this.state.StartMin = e.target.value}
                                                    className="w-13 px-2 border rounded ml-1 text-sm bg-white"
                                                >
                                                    {[...Array(60).keys()].map((m) => (
                                                    <option key={m} value={String(m).padStart(2, '0')}>
                                                        {String(m).padStart(2, '0')}
                                                    </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
    
                                    <div className="flex flex-col ml-auto pr-7 sm:pr-12 w-11/12 mb-6 md:w-[22rem] md:ml-16 lg:ml-20">
                                        <div className="mb-2 text-right text-sm"><b className="text-red-500 text-sm">*</b>تاریخ و ساعت پایان</div>
                                        <div className="flex flex-row-reverse gap-1">
                                            

                                        <div className="App float-right md:w-60 w-70 sm:w-[20rem]">
                                                <div dir="rtl" className="DatePick">
                                                    <DatePick value={this.state.EndDate} onChange={this.handleDateChange.bind(this,"",'evente')}/ >
                                                </div>
                                            </div>


                                            <div className="flex items-center">
                                                <select
                                                    onChange={(e) => this.state.EndHour = e.target.value}
                                                    className="w-13 px-2 border rounded mr-1 text-sm bg-white"
                                                >
                                                    {[...Array(24).keys()].map((h) => (
                                                    <option key={h} value={String(h).padStart(2, '0')}>
                                                        {String(h).padStart(2, '0')}
                                                    </option>
                                                    ))}
                                                </select>
                                                <span className="text-lg">:</span>
                                                <select
                                                    id={"temin"+this.state.TicketCount}
                                                    onChange={(e) => this.state.EndMin = e.target.value}
                                                    className="w-13 px-2 border rounded ml-1 text-sm bg-white"
                                                >
                                                    {[...Array(60).keys()].map((m) => (
                                                    <option key={m} value={String(m).padStart(2, '0')}>
                                                        {String(m).padStart(2, '0')}
                                                    </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 w-11/12 ml-1">
                                        <div className="mb-2 text-right text-sm"><b className="text-red-500">*</b>مدت زمان رویداد</div>
                                        <div className="flex flex-row-reverse gap-3">
                                            <input onChange={(e) => this.setState({EventTime:e.target.value})} className="text-sm w-11/12 px-2 ring-gray-200 ring-2 focus:ring-sky-600 focus:outline-none focus:border-rose-600 rounded-lg placeholder:text-right text-left" placeholder="تعداد ساعت"></input>
                                        </div>
                                </div>
                                <div className="flex flex-col w-11/12 mb-6 ml-1">
                                        <div className="mb-2 text-right text-sm"><b className="text-red-500">*</b>لینک ورود به رویداد</div>
                                        <div className="flex flex-row-reverse gap-3">
                                            <input onChange={(e) => this.setState({MeetingLink:e.target.value})} className="text-sm w-11/12 px-2 ring-gray-200 ring-2 focus:ring-sky-600 focus:outline-none focus:border-rose-600 rounded-lg placeholder:text-right text-left" placeholder="لینک رویداد"></input>
                                        </div>
                                </div>
                                <div className="flex flex-col w-11/12 mb-10 ml-1">
                                {this.state.selectedOption==="option2"?
                                            <>
                                            <div className="mb-2 text-right text-sm"><b className="text-red-500">*</b>سیستم وبینار</div>
                                            <div className="flex flex-row-reverse gap-3">
                                                <input onChange={(e) => this.setState({Platform:e.target.value})} className="text-sm w-11/12 px-2 ring-gray-200 ring-2 focus:ring-sky-600 focus:outline-none focus:border-rose-600 rounded-lg placeholder:text-right text-left" placeholder="پلتفرم"></input>
                                            </div>
                                            </>
                                        :
                                        <></>
                                    
                                        }
                                </div>
                            </div>
    
                            <div className="top-35 bg-white pt-20 sm:pr-16 md:pr-6 pr-10 rounded-lg shadow-lg w-full">
                                <div className="text-right md:pr-10 pr-2 sm:mb-5 mb-10">کنترل بلیت ها</div>
                                <form className="flex flex-col">
                                    <div id="tickets w-full items-center justify-center">
                                        {Object.values(this.state.ChildTickets)}
                                    </div>
                                    <div className="flex flex-col w-full items-center sm:ml-5 ml-4">
                                        <div id="cr-ticket-inf" className="mb-3 text-sm">برای ساخت بلیت جدید کلیک کنید</div>
                                        <button id="cr-ticket-b" onClick={this.CreateTicket.bind(this)} type="button" className="border w-32 h-10 rounded-md bg-gray-300 mb-5 hover:bg-gray-200 text-sm">ساخت بلیت</button>
                                    </div>
                                </form>
                            </div>
                            <div className="top-35 bg-white pt-20 ot-16 sm:pr-16 md:pr-6 pr-10 rounded-lg shadow-lg w-full">
                                <div className="text-right md:pr-10 pr-2 sm:mb-5 mb-5">اطلاعات تکمیلی</div>
                                <form className="flex flex-col">
                                    <div className="bg-white rounded-lg mt-10 mb-12">
                                        <div className="relative bg-inherit">
                                            <input dir="rtl" onChange={(e) => this.setState({OrgName:e.target.value})} type="text" id="org-name" maxlength="60" className="text-sm peer bg-transparent py-2 md:mr-9 mr-1 w-10/12 float-right rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="نام برگزارکننده"/><label for="org-name" className="text-right absolute cursor-text right-5 md:right-14 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"><b for={"org-name"} className="text-red-500">*</b>نام برگزارکننده</label>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg mb-12">
                                        <div className="relative bg-inherit">
                                            <input dir="rtl" onChange={(e) => this.setState({OrgInf:e.target.value})} type="text" id="org-full-inf" maxlength="60" className="text-sm peer bg-transparent py-2 md:mr-9 mr-1 w-10/12 float-right rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="اطلاعات تکمیلی برگزارکننده"/><label for="org-full-inf" className="text-right absolute cursor-text right-5 md:right-14 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">اطلاعات تکمیلی برگزارکننده</label>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            {(this.state.selectedOption==="option1")?
                                (
                                <>
                                <div className="top-35 bg-white pt-20 ot-16 sm:pr-16 md:pr-6 pr-10 rounded-lg shadow-lg w-full">
                                <div className="text-right md:pr-10 pr-2 mb-3">موقعیت رویداد</div>
                                <form className="flex flex-col">
                                    <div className="bg-white rounded-lg mt-10">
                                        <div className="relative bg-inherit">
                                            <input dir="rtl" onChange={(e) => this.setState({Address:e.target.value})} type="text" id="address" maxlength="60" className="peer bg-transparent py-2 md:mr-9 mr-1 w-10/12 float-right rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 text-right placeholder-right" placeholder="آدرس"/><label for="address" className="text-right absolute cursor-text right-5 md:right-14 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"><b for={"address"} className="text-red-500">*</b>آدرس</label>
                                        </div>
                                    </div>
                                    <p className="text-right md:pr-10 pr-2 mt-10 mb-4 text-sm">موقعیت مکانی</p>
                                    <div className="w-full mb-10 ml-7 sm:ml-9 md:ml-8">
                                   
                                    </div>
                                    
                                    
                                </form>
                                </div>
                            </>)
                            :
                            <></>
                            }
                            <div className="top-35 bg-white pt-8 h-15 w-full sm:pr-16 md:pr-6 pr-10 rounded-lg shadow-lg">
                                <form className="flex flex-col w-full">
                                    <div className="flex flex-col-reverse gap-5 w-full items-center justify-center ml-5 sm:ml-0">
                                        {this.checkEmpty()?
                                            <div className="flex flex-row gap-2">
                                                <button onClick={this.PostData.bind(this)} type="button" className="text-sm border w-60 w-40 h-10 rounded-md bg-blue-500 text-white mb-5 hover:bg-blue-700">ثبت تغییرات</button>
                                                <button type="button" className="text-sm border w-60 w-[5rem] h-10 rounded-md bg-red-500 text-white mb-5 hover:bg-red-600">لغو</button>
                                            </div>
                                            :
                                            <>
                                            <div className="flex flex-row gap-2">
                                                <button type="button" className="text-sm border sm:w-60 w-40 h-10 rounded-md bg-gray-500 text-white mb-5 cursor-not-allowed" disabled>ثبت تغییرات</button>
                                                <button type="button" className="text-sm border sm:w-40 w-[5rem] h-10 rounded-md bg-red-500 text-white mb-5 hover:bg-red-600">لغو</button>
                                            </div>
                                            <p className="text-red-600 text-sm md:w-1/3 h-8 text-center pt-1.5">تمام فیلد های ستاره دار را پر کنید*</p>
                                            </>
                                        }
                                        
                                    </div>
                                </form>
                            </div>
                            <div className="mb-20"></div>
                            
                            
                        </div>
                    </div>
                </body>
            </div>
        );
    }  
}
