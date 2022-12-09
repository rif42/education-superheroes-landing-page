import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function Form() {
  const [childname, setChildname] = useState("");
  const [schoolname, setSchoolname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [parentsname, setParentsname] = useState("");
  const [childrenage, setChildrenage] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");

  function handlename(e) {
    let checkname = e.target.value;
    if (checkname.length < 4) {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Name must be at least 4 characters long");
    } //else if check if all numbers
    else if (checkname.match(/^[0-9]+$/)) {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Name can't contain numbers");
    } else {
      setChildname(checkname);
      e.target.style.border = "2px solid green";
    }
  }

  function handlesch(e) {
    let checksch = e.target.value;
    if (checksch.length == 0) {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Please enter a valid school name");
    } else {
      setSchoolname(checksch);
      e.target.style.border = "2px solid green";
    }
  }

  function handlepnumber(e) {
    let checkpnumber = e.target.value;
    if (checkpnumber.length == 0) {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Please enter a valid number");
    } else {
      setPnumber(checkpnumber);
      e.target.style.border = "2px solid green";
    }
  }

  function handlepname(e) {
    let checkpname = e.target.value;
    if (checkpname.length < 4) {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Name must be at least 4 characters long");
    } //else if check if all numbers
    else if (checkpname.match(/^[0-9]+$/)) {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Name can't contain numbers");
    } else {
      setParentsname(checkpname);
      e.target.style.border = "2px solid green";
    }
  }

  function handleage(e) {
    let checkage = Number(e.target.value);
    if ( checkage < 30) {
      setChildrenage(checkage);
      e.target.style.border = "2px solid green";
    } else if (checkage > 31){
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Please enter a valid number");
    }
  }

  function handlecountry(e) {
    let checkcountry = e.target.value;
    if (checkcountry.length == 0) {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Please enter a valid country");
    } else {
      setCountry(checkcountry);
      e.target.style.border = "2px solid green";
    }
  }

  function handlemail(e) {
    let checkmail = e.target.value;
    if (checkmail.match(/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      setEmail(checkmail);
      e.target.style.border = "2px solid green";
    } else {
      e.target.value = "";
      e.target.style.border = "2px solid red";
      errmsg("Please enter a valid email");
    }
  }

  function errmsg(text) {
    Swal.fire({
      title: "Error!",
      text: text,
      icon: "error",
      confirmButtonText: "OK!",
    });
  }

  function handleSubmit(e) {
    // alert('You`re connected! We will contact you!');
    Swal.fire({
      title: "Success!",
      text: "You`re connected! We will contact you!",
      icon: "success",
      confirmButtonText: "Cool",
    });
    e.preventDefault();
  }

  let url = useLocation().pathname;

  return (
    <>
      <form
        action="https://event.getletsflip.com/api/v1/tnl/postform"
        method="POST"
        onSubmit={() => handleSubmit()}>
        <div className="w-full h-full flex flex-col fixed top-0 z-50 justify-center align-middle bg-black/60">
          <div
            id="registration"
            className="w-[85vw] h-[45vw] place-self-center  flex flex-row justify-center align-middle bg-white">
            <Link
            onClick={console.log(url)}
              to={url.slice(0, -4)}
              className="absolute place-self-start mt-[1vw] ml-[80vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="0.03vw"
                stroke="currentColor"
                className="w-[3vw]">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
            <div className="w-[34%] h-[100%] flex flex-col justify-center align-middle bg-[#FB7135]">
              <p className="text-[4vw] text-white font-extrabold leading-none px-[3vw] text-left">
                HOW CAN I CONNECT WITH THE COACHES?
              </p>
              <p className="text-[1.4vw] text-white pl-[3vw] pr-[5vw] pt-[2vw]  text-left">
                Fill in the form and our coaches will get in touch with you.
              </p>
            </div>
            <div className="w-[33%] h-[100%] flex flex-col justify-center align-middle ">
              <label
                htmlFor="childname"
                className=" text-[0.9vw] visited:text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]">
                Name of Children
              </label>
              <input
                onBlur={(e) => {
                  handlename(e);
                }}
                id="childname"
                name="child_name"
                placeholder="Type your name"
                className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"
                required
              />

              <label
                htmlFor="schoolname"
                className=" text-[0.9vw] visited:text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]">
                School & Grade
              </label>
              <input
                onBlur={(e) => handlesch(e)}
                id="schoolname"
                name="child_school"
                placeholder="Type your School name"
                className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"
                required
              />

              <label
                htmlFor="pnumber"
                className=" text-[0.9vw] visited:text-[0.9vw] text-black text-left place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]">
                Mobile Number of Corresponding Parent
              </label>
              <input
                onBlur={(e) => handlepnumber(e)} // also works for checking numbers
                id="pnumber"
                type="number"
                name="parent_contact"
                placeholder="65XXXXXX"
                className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"
                required
              />
              <label
                htmlFor="parentsname"
                className=" text-[0.9vw] visited:text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]">
                Parents Name
              </label>
              <input
                onBlur={(e) => handlepname(e)}
                id="parentsname"
                name="parent_name"
                placeholder="Type your Parents name"
                className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"
                required
              />
            </div>
            <div className="w-[33%] h-[100%] flex flex-col justify-center align-middle ">
              <label
                htmlFor="childrenage"
                className=" text-[0.9vw] text-black place-self-start pl-[3.1vw] pb-[1vw]">
                Age of Children
              </label>
              <input
                onBlur={(e) => handleage(e)}
                id="childrenage"
                type="number"
                name="child_age"
                placeholder="Type your children's age"
                className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"
                required
              />
              <label
                htmlFor="country"
                className=" text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]">
                Country
              </label>
              <select
                onBlur={(e) => handlecountry(e)}
                className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"
                id="country"
                name="country"
                placeholder="Select Your Country"
                required>
                <option value="" selected disabled>
                  Select Your Country
                </option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">
                  Congo, The Democratic Republic of The
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People's Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and The Grenadines">
                  Saint Vincent and The Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">
                  South Georgia and The South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.S.">
                  Virgin Islands, U.S.
                </option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <label
                htmlFor="email"
                className=" text-[0.9vw] text-black place-self-start pl-[3.1vw] pt-[2vw] pb-[1vw]">
                Email of Corresponding Parent
              </label>
              <input
                onBlur={(e) => handlemail(e)}
                id="email"
                type="email"
                name="parent_email"
                placeholder="Parents@email.com"
                className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"
                required
              />
              <label
                htmlFor="input"
                className=" text-[0.9vw] text-black text-left place-self-start pl-[3.1vw]">
                Any additional information or concerns you have for your
                children and how you feel the next level coaches can help
              </label>
              <textarea
                onBlur={(e) => setInput(e.target.value)}
                id="input"
                type="text"
                name="msg"
                placeholder="Hello, I want to connect with the coaches about..."
                className="flex flex-col justify-center w-[80%] h-[5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left  py-[0.5vw]"></textarea>
            </div>
            <div className="hover:cursor-pointer absolute place-self-center place-items-center rounded-full mt-[37vw] ml-[30vw] px-[5vw] py-[0.5vw] bg-[#05194A] text-white text-[1.1vw]">
              <button type="submit">Register</button>
            </div>

            <Link
              to="/privacy"
              className="absolute place-self-end ml-[31vw] mt-[42.5vw] ">
              <div className=" place-items-center rounded-full w-[20vw] px-[5vw] py-[0.5vw] tracking-tight text-gray-500 text-[0.5vw]">
                By clicking the submit button below, I agree to and accept the{" "}
                <span className="text-gray-700 underline hover:cursor-pointer">
                  following terms and conditions
                </span>
              </div>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
