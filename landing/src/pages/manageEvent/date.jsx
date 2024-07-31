import React, { Component } from "react";
import {
  DatePicker
} from "react-advance-jalaali-datepicker";

class DatePick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueDate: props.initialValue||"روز/ماه/سال",
    };
  }
  change = (unix, formatted) => {
    //console.log(unix); // returns timestamp of the selected value, for example.
    //console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    this.setState({
      valueDate: formatted
    });
    //console.log(event.id);
  };
  DatePickerInput(props) {
    return <input id="dateInput" className="px-1 popo ring-gray-200 ring-2 focus:ring-sky-600 focus:outline-none focus:border-rose-600 rounded-lg w-full text-gray-600" {...props} />;
  }
  render() {
    return (
      <div className="App float-right w-11/12">
        <div dir="rtl" className="datePicker">
          <DatePicker
            inputComponent={this.DatePickerInput}
            placeholder="انتخاب تاریخ"
            format="jYYYY/jMM/jDD"
            onChange={this.props.onChange}
            cancelOnBackgroundClick={true}
            id="datePicker"
            preSelected={this.props.value}
            controlValue={true}
          />
        </div>
      </div>
    );
  }
}

export default DatePick;