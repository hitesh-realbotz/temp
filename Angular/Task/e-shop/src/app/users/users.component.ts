import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count, from } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})



export class UsersComponent implements OnInit {

data = [{
  "id": 101,
  "name": "India",
  "iso3": "IND",
  "iso2": "IN",
  "numeric_code": "356",
  "phone_code": "91",
  "capital": "New Delhi",
  "currency": "INR",
  "currency_name": "Indian rupee",
  "currency_symbol": "₹",
  "tld": ".in",
  "native": "भारत",
  "region": "Asia",
  "region_id": "3",
  "subregion": "Southern Asia",
  "subregion_id": "14",
  "nationality": "Indian",
  "timezones": [
      {
          "zoneName": "Asia\/Kolkata",
          "gmtOffset": 19800,
          "gmtOffsetName": "UTC+05:30",
          "abbreviation": "IST",
          "tzName": "Indian Standard Time"
      }
  ],
  "translations": {
      "kr": "인도",
      "pt-BR": "Índia",
      "pt": "Índia",
      "nl": "India",
      "hr": "Indija",
      "fa": "هند",
      "de": "Indien",
      "es": "India",
      "fr": "Inde",
      "ja": "インド",
      "it": "India",
      "cn": "印度",
      "tr": "Hindistan"
  },
  "latitude": "20.00000000",
  "longitude": "77.00000000",
  "emoji": "🇮🇳",
  "emojiU": "U+1F1EE U+1F1F3",
  "states": [
      {
          "id": 4023,
          "name": "Andaman and Nicobar Islands",
          "state_code": "AN",
          "latitude": "11.74008670",
          "longitude": "92.65864010",
          "type": "Union territory",
          "cities": [
              {
                  "id": 57837,
                  "name": "Bamboo Flat",
                  "latitude": "11.70000000",
                  "longitude": "92.71667000"
              },
              {
                  "id": 133213,
                  "name": "Nicobar",
                  "latitude": "7.03002000",
                  "longitude": "93.79028000"
              },
              {
                  "id": 133482,
                  "name": "Port Blair",
                  "latitude": "11.66613000",
                  "longitude": "92.74635000"
              },
              {
                  "id": 134006,
                  "name": "South Andaman",
                  "latitude": "10.75776000",
                  "longitude": "92.52136000"
              }
          ]
      },
      {
          "id": 4017,
          "name": "Andhra Pradesh",
          "state_code": "AP",
          "latitude": "15.91289980",
          "longitude": "79.73998750",
          "type": "state",
          "cities": [
              {
                  "id": 57593,
                  "name": "Addanki",
                  "latitude": "15.81061000",
                  "longitude": "79.97338000"
              },
              {
                  "id": 134452,
                  "name": "Adoni",
                  "latitude": "15.62788000",
                  "longitude": "77.27495000"
              },
              {
                  "id": 57620,
                  "name": "Akasahebpet",
                  "latitude": "17.50455000",
                  "longitude": "82.56597000"
              },
              {
                  "id": 57623,
                  "name": "Akividu",
                  "latitude": "16.58225000",
                  "longitude": "81.38112000"
              },
              {
                  "id": 57624,
                  "name": "Akkarampalle",
                  "latitude": "13.65000000",
                  "longitude": "79.42000000"
              },
              {
                  "id": 57658,
                  "name": "Amalapuram",
                  "latitude": "16.57868000",
                  "longitude": "82.00609000"
              },
              {
                  "id": 57690,
                  "name": "Amudalavalasa",
                  "latitude": "18.41025000",
                  "longitude": "83.90295000"
              },
              {
                  "id": 57693,
                  "name": "Anakapalle",
                  "latitude": "17.69134000",
                  "longitude": "83.00395000"
              },
              {
                  "id": 57698,
                  "name": "Anantapur",
                  "latitude": "14.55000000",
                  "longitude": "77.41667000"
              },
              {
                  "id": 57758,
                  "name": "Atmakur",
                  "latitude": "15.88109000",
                  "longitude": "78.58704000"
              },
              {
                  "id": 57761,
                  "name": "Attili",
                  "latitude": "16.70000000",
                  "longitude": "81.60000000"
              },
              {
                  "id": 57771,
                  "name": "Avanigadda",
                  "latitude": "16.02148000",
                  "longitude": "80.91808000"
              },
              {
                  "id": 57794,
                  "name": "Badvel",
                  "latitude": "14.74510000",
                  "longitude": "79.06288000"
              },
              {
                  "id": 57849,
                  "name": "Banganapalle",
                  "latitude": "15.31771000",
                  "longitude": "78.22669000"
              },
              {
                  "id": 58137,
                  "name": "Bapatla",
                  "latitude": "15.90422000",
                  "longitude": "80.46743000"
              },
              {
                  "id": 57939,
                  "name": "Betamcherla",
                  "latitude": "15.45144000",
                  "longitude": "78.14797000"
              },
              {
                  "id": 57971,
                  "name": "Bhattiprolu",
                  "latitude": "16.10260000",
                  "longitude": "80.78074000"
              },
              {
                  "id": 58021,
                  "name": "Bhimavaram",
                  "latitude": "16.54078000",
                  "longitude": "81.52322000"
              },
              {
                  "id": 58022,
                  "name": "Bhimunipatnam",
                  "latitude": "17.89017000",
                  "longitude": "83.45203000"
              },
              {
                  "id": 58070,
                  "name": "Bobbili",
                  "latitude": "18.57366000",
                  "longitude": "83.35925000"
              },
              {
                  "id": 58179,
                  "name": "Challapalle",
                  "latitude": "16.11756000",
                  "longitude": "80.93139000"
              },
              {
                  "id": 131514,
                  "name": "Chemmumiahpet",
                  "latitude": "15.89794000",
                  "longitude": "79.32129000"
              },
              {
                  "id": 131556,
                  "name": "Chilakalurupet",
                  "latitude": "16.08987000",
                  "longitude": "80.16705000"
              },
              {
                  "id": 131563,
                  "name": "Chinnachowk",
                  "latitude": "14.47516000",
                  "longitude": "78.83540000"
              },
              {
                  "id": 131611,
                  "name": "Chipurupalle",
                  "latitude": "18.31142000",
                  "longitude": "83.56846000"
              },
              {
                  "id": 131612,
                  "name": "Chirala",
                  "latitude": "15.82385000",
                  "longitude": "80.35219000"
              },
              {
                  "id": 131575,
                  "name": "Chittoor",
                  "latitude": "13.41667000",
                  "longitude": "79.00000000"
              },
              {
                  "id": 131577,
                  "name": "Chodavaram",
                  "latitude": "17.82884000",
                  "longitude": "82.93526000"
              },
              {
                  "id": 131627,
                  "name": "Cuddapah",
                  "latitude": "14.41667000",
                  "longitude": "78.75000000"
              },
              {
                  "id": 131628,
                  "name": "Cumbum",
                  "latitude": "15.58171000",
                  "longitude": "79.11059000"
              },
              {
                  "id": 131658,
                  "name": "Darsi",
                  "latitude": "15.76978000",
                  "longitude": "79.67939000"
              },
              {
                  "id": 131727,
                  "name": "Dharmavaram",
                  "latitude": "14.41435000",
                  "longitude": "77.72035000"
              },
              {
                  "id": 131740,
                  "name": "Dhone",
                  "latitude": "15.39520000",
                  "longitude": "77.87150000"
              },
              {
                  "id": 131769,
                  "name": "Diguvametta",
                  "latitude": "15.39507000",
                  "longitude": "78.82930000"
              },
              {
                  "id": 131823,
                  "name": "East Godavari",
                  "latitude": "17.83333000",
                  "longitude": "81.83333000"
              },
              {
                  "id": 131830,
                  "name": "Elamanchili",
                  "latitude": "17.54907000",
                  "longitude": "82.85749000"
              },
              {
                  "id": 131832,
                  "name": "Ellore",
                  "latitude": "16.71311000",
                  "longitude": "81.10437000"
              },
              {
                  "id": 131836,
                  "name": "Emmiganur",
                  "latitude": "15.77203000",
                  "longitude": "77.48345000"
              },
              {
                  "id": 131842,
                  "name": "Erraguntla",
                  "latitude": "14.63853000",
                  "longitude": "78.53974000"
              },
              {
                  "id": 131846,
                  "name": "Etikoppaka",
                  "latitude": "17.50000000",
                  "longitude": "82.73333000"
              },
              {
                  "id": 131895,
                  "name": "Gajuwaka",
                  "latitude": "17.70000000",
                  "longitude": "83.21667000"
              },
              {
                  "id": 131906,
                  "name": "Ganguvada",
                  "latitude": "18.66667000",
                  "longitude": "84.11667000"
              },
              {
                  "id": 131915,
                  "name": "Gannavaram",
                  "latitude": "16.54092000",
                  "longitude": "80.80213000"
              },
              {
                  "id": 131955,
                  "name": "Giddalur",
                  "latitude": "15.37439000",
                  "longitude": "78.92609000"
              },
              {
                  "id": 131972,
                  "name": "Gokavaram",
                  "latitude": "17.25823000",
                  "longitude": "81.84985000"
              },
              {
                  "id": 131993,
                  "name": "Gorantla",
                  "latitude": "13.98411000",
                  "longitude": "77.77224000"
              },
              {
                  "id": 132001,
                  "name": "GovindapuramChilakaluripetGuntur",
                  "latitude": "16.15477000",
                  "longitude": "80.10279000"
              },
              {
                  "id": 132010,
                  "name": "Gudivada",
                  "latitude": "16.43547000",
                  "longitude": "80.99555000"
              },
              {
                  "id": 132012,
                  "name": "Gudlavalleru",
                  "latitude": "16.35000000",
                  "longitude": "81.05000000"
              },
              {
                  "id": 132051,
                  "name": "Gudur",
                  "latitude": "14.15093000",
                  "longitude": "79.85210000"
              },
              {
                  "id": 132027,
                  "name": "Guntakal Junction",
                  "latitude": "15.17112000",
                  "longitude": "77.36244000"
              },
              {
                  "id": 132028,
                  "name": "Guntur",
                  "latitude": "16.29974000",
                  "longitude": "80.45729000"
              },
              {
                  "id": 132099,
                  "name": "Hindupur",
                  "latitude": "13.82807000",
                  "longitude": "77.49143000"
              },
              {
                  "id": 132151,
                  "name": "Ichchapuram",
                  "latitude": "19.11393000",
                  "longitude": "84.68721000"
              },
              {
                  "id": 132189,
                  "name": "Jaggayyapeta",
                  "latitude": "16.89380000",
                  "longitude": "80.09807000"
              },
              {
                  "id": 132228,
                  "name": "Jammalamadugu",
                  "latitude": "14.84677000",
                  "longitude": "78.38314000"
              },
              {
                  "id": 132328,
                  "name": "Kadiri",
                  "latitude": "14.11168000",
                  "longitude": "78.15982000"
              },
              {
                  "id": 132332,
                  "name": "Kaikalur",
                  "latitude": "16.55154000",
                  "longitude": "81.21400000"
              },
              {
                  "id": 132678,
                  "name": "Kakinada",
                  "latitude": "16.96036000",
                  "longitude": "82.23809000"
              },
              {
                  "id": 132358,
                  "name": "Kalyandurg",
                  "latitude": "14.54519000",
                  "longitude": "77.10552000"
              },
              {
                  "id": 132691,
                  "name": "Kamalapuram",
                  "latitude": "14.59830000",
                  "longitude": "78.66948000"
              },
              {
                  "id": 132372,
                  "name": "Kandukur",
                  "latitude": "15.21542000",
                  "longitude": "79.90390000"
              },
              {
                  "id": 132374,
                  "name": "Kanigiri",
                  "latitude": "15.40555000",
                  "longitude": "79.50694000"
              },
              {
                  "id": 132376,
                  "name": "Kankipadu",
                  "latitude": "16.43530000",
                  "longitude": "80.76715000"
              },
              {
                  "id": 132388,
                  "name": "Kanuru",
                  "latitude": "16.28584000",
                  "longitude": "81.25464000"
              },
              {
                  "id": 132729,
                  "name": "Kavali",
                  "latitude": "14.91630000",
                  "longitude": "79.99449000"
              },
              {
                  "id": 132552,
                  "name": "Kolanukonda",
                  "latitude": "16.45392000",
                  "longitude": "80.61046000"
              },
              {
                  "id": 132567,
                  "name": "Kondapalle",
                  "latitude": "16.61989000",
                  "longitude": "80.54244000"
              },
              {
                  "id": 132584,
                  "name": "Korukollu",
                  "latitude": "16.50000000",
                  "longitude": "81.25000000"
              },
              {
                  "id": 132590,
                  "name": "Kosigi",
                  "latitude": "15.85510000",
                  "longitude": "77.24463000"
              },
              {
                  "id": 132616,
                  "name": "Kovvur",
                  "latitude": "17.01620000",
                  "longitude": "81.72934000"
              },
              {
                  "id": 132621,
                  "name": "Krishna",
                  "latitude": "16.66667000",
                  "longitude": "81.00000000"
              },
              {
                  "id": 132653,
                  "name": "Kuppam",
                  "latitude": "12.74931000",
                  "longitude": "78.34189000"
              },
              {
                  "id": 132660,
                  "name": "Kurnool",
                  "latitude": "15.58333000",
                  "longitude": "78.33333000"
              },
              {
                  "id": 133055,
                  "name": "Macherla",
                  "latitude": "16.47635000",
                  "longitude": "79.43533000"
              },
              {
                  "id": 132806,
                  "name": "Machilipatnam",
                  "latitude": "16.18747000",
                  "longitude": "81.13888000"
              },
              {
                  "id": 132808,
                  "name": "Madanapalle",
                  "latitude": "13.55030000",
                  "longitude": "78.50288000"
              },
              {
                  "id": 133059,
                  "name": "Madugula",
                  "latitude": "17.91589000",
                  "longitude": "82.81578000"
              },
              {
                  "id": 132890,
                  "name": "Mandapeta",
                  "latitude": "16.86254000",
                  "longitude": "81.92921000"
              },
              {
                  "id": 132891,
                  "name": "Mandasa",
                  "latitude": "18.86830000",
                  "longitude": "84.46296000"
              },
              {
                  "id": 132902,
                  "name": "Mangalagiri",
                  "latitude": "16.43083000",
                  "longitude": "80.56815000"
              },
              {
                  "id": 133088,
                  "name": "Markapur",
                  "latitude": "15.73534000",
                  "longitude": "79.26848000"
              },
              {
                  "id": 133114,
                  "name": "Nagari",
                  "latitude": "13.32139000",
                  "longitude": "79.58557000"
              },
              {
                  "id": 133258,
                  "name": "Nagireddipalli",
                  "latitude": "14.27005000",
                  "longitude": "79.10131000"
              },
              {
                  "id": 133143,
                  "name": "Nandigama",
                  "latitude": "16.77170000",
                  "longitude": "80.28596000"
              },
              {
                  "id": 133144,
                  "name": "Nandikotkur",
                  "latitude": "15.85668000",
                  "longitude": "78.26569000"
              },
              {
                  "id": 133146,
                  "name": "Nandyal",
                  "latitude": "15.47799000",
                  "longitude": "78.48360000"
              },
              {
                  "id": 133156,
                  "name": "Narasannapeta",
                  "latitude": "18.41428000",
                  "longitude": "84.04463000"
              },
              {
                  "id": 133157,
                  "name": "Narasapur",
                  "latitude": "16.43425000",
                  "longitude": "81.69845000"
              },
              {
                  "id": 133158,
                  "name": "Narasaraopet",
                  "latitude": "16.23488000",
                  "longitude": "80.04927000"
              },
              {
                  "id": 133160,
                  "name": "Narasingapuram",
                  "latitude": "13.60759000",
                  "longitude": "79.31652000"
              },
              {
                  "id": 133275,
                  "name": "Narayanavanam",
                  "latitude": "13.42565000",
                  "longitude": "79.58881000"
              },
              {
                  "id": 133173,
                  "name": "Narsipatnam",
                  "latitude": "17.66709000",
                  "longitude": "82.61245000"
              },
              {
                  "id": 133283,
                  "name": "Nayudupet",
                  "latitude": "13.90742000",
                  "longitude": "79.89465000"
              },
              {
                  "id": 133206,
                  "name": "Nellore",
                  "latitude": "14.08333000",
                  "longitude": "79.58333000"
              },
              {
                  "id": 133214,
                  "name": "Nidadavole",
                  "latitude": "16.90572000",
                  "longitude": "81.67222000"
              },
              {
                  "id": 133294,
                  "name": "Nuzvid",
                  "latitude": "16.78854000",
                  "longitude": "80.84593000"
              },
              {
                  "id": 133300,
                  "name": "Ongole",
                  "latitude": "15.50357000",
                  "longitude": "80.04454000"
              },
              {
                  "id": 133521,
                  "name": "Pakala",
                  "latitude": "13.44903000",
                  "longitude": "79.11493000"
              },
              {
                  "id": 133523,
                  "name": "Palakollu",
                  "latitude": "16.51670000",
                  "longitude": "81.73000000"
              },
              {
                  "id": 133340,
                  "name": "Palasa",
                  "latitude": "18.77257000",
                  "longitude": "84.41012000"
              },
              {
                  "id": 133534,
                  "name": "Palkonda",
                  "latitude": "18.60374000",
                  "longitude": "83.75568000"
              },
              {
                  "id": 133331,
                  "name": "Pallevada",
                  "latitude": "16.57790000",
                  "longitude": "81.29463000"
              },
              {
                  "id": 133336,
                  "name": "Palmaner",
                  "latitude": "13.20000000",
                  "longitude": "78.74725000"
              },
              {
                  "id": 133361,
                  "name": "Parlakimidi",
                  "latitude": "18.78113000",
                  "longitude": "84.08836000"
              },
              {
                  "id": 133549,
                  "name": "Parvatipuram",
                  "latitude": "18.78392000",
                  "longitude": "83.42569000"
              },
              {
                  "id": 133395,
                  "name": "Pavuluru",
                  "latitude": "15.85292000",
                  "longitude": "80.16468000"
              },
              {
                  "id": 133400,
                  "name": "Pedana",
                  "latitude": "16.25582000",
                  "longitude": "81.14378000"
              },
              {
                  "id": 134447,
                  "name": "pedda nakkalapalem",
                  "latitude": "15.86680000",
                  "longitude": "80.16202000"
              },
              {
                  "id": 133402,
                  "name": "Peddapuram",
                  "latitude": "17.07701000",
                  "longitude": "82.13836000"
              },
              {
                  "id": 133409,
                  "name": "Penugonda",
                  "latitude": "16.65363000",
                  "longitude": "81.74550000"
              },
              {
                  "id": 133410,
                  "name": "Penukonda",
                  "latitude": "14.08286000",
                  "longitude": "77.59473000"
              },
              {
                  "id": 133440,
                  "name": "Phirangipuram",
                  "latitude": "16.29078000",
                  "longitude": "80.26233000"
              },
              {
                  "id": 133455,
                  "name": "Pippara",
                  "latitude": "16.71667000",
                  "longitude": "81.55000000"
              },
              {
                  "id": 133465,
                  "name": "Pithapuram",
                  "latitude": "17.11680000",
                  "longitude": "82.25284000"
              },
              {
                  "id": 133468,
                  "name": "Polavaram",
                  "latitude": "17.24754000",
                  "longitude": "81.64372000"
              },
              {
                  "id": 133476,
                  "name": "Ponnur",
                  "latitude": "16.07114000",
                  "longitude": "80.54944000"
              },
              {
                  "id": 133478,
                  "name": "Ponnuru",
                  "latitude": "16.06547000",
                  "longitude": "80.55203000"
              },
              {
                  "id": 133485,
                  "name": "Prakasam",
                  "latitude": "15.50000000",
                  "longitude": "79.50000000"
              },
              {
                  "id": 133489,
                  "name": "Proddatur",
                  "latitude": "14.75020000",
                  "longitude": "78.54813000"
              },
              {
                  "id": 133497,
                  "name": "Pulivendla",
                  "latitude": "14.42139000",
                  "longitude": "78.22502000"
              },
              {
                  "id": 133506,
                  "name": "Punganuru",
                  "latitude": "13.36672000",
                  "longitude": "78.57186000"
              },
              {
                  "id": 133517,
                  "name": "Puttaparthi",
                  "latitude": "14.16520000",
                  "longitude": "77.81170000"
              },
              {
                  "id": 133519,
                  "name": "Puttur",
                  "latitude": "13.44189000",
                  "longitude": "79.55314000"
              },
              {
                  "id": 133671,
                  "name": "Rajahmundry",
                  "latitude": "17.00517000",
                  "longitude": "81.77784000"
              },
              {
                  "id": 133691,
                  "name": "Ramachandrapuram",
                  "latitude": "16.83636000",
                  "longitude": "82.02871000"
              },
              {
                  "id": 133600,
                  "name": "Ramanayyapeta",
                  "latitude": "16.94516000",
                  "longitude": "82.23850000"
              },
              {
                  "id": 133712,
                  "name": "Ramapuram",
                  "latitude": "15.28749000",
                  "longitude": "77.86722000"
              },
              {
                  "id": 133605,
                  "name": "Rampachodavaram",
                  "latitude": "17.44088000",
                  "longitude": "81.77558000"
              },
              {
                  "id": 133729,
                  "name": "Rayachoti",
                  "latitude": "14.05723000",
                  "longitude": "78.75056000"
              },
              {
                  "id": 133730,
                  "name": "Rayadrug",
                  "latitude": "14.69971000",
                  "longitude": "76.85241000"
              },
              {
                  "id": 133734,
                  "name": "Razam",
                  "latitude": "18.44909000",
                  "longitude": "83.65957000"
              },
              {
                  "id": 133732,
                  "name": "Razampeta",
                  "latitude": "14.19544000",
                  "longitude": "79.15896000"
              },
              {
                  "id": 133733,
                  "name": "Razole",
                  "latitude": "16.47608000",
                  "longitude": "81.83912000"
              },
              {
                  "id": 133627,
                  "name": "Renigunta",
                  "latitude": "13.65143000",
                  "longitude": "79.51256000"
              },
              {
                  "id": 133630,
                  "name": "Repalle",
                  "latitude": "16.01840000",
                  "longitude": "80.82958000"
              },
              {
                  "id": 134065,
                  "name": "Salur",
                  "latitude": "18.51716000",
                  "longitude": "83.20548000"
              },
              {
                  "id": 134066,
                  "name": "Samalkot",
                  "latitude": "17.05675000",
                  "longitude": "82.17639000"
              },
              {
                  "id": 133822,
                  "name": "Sattenapalle",
                  "latitude": "16.39381000",
                  "longitude": "80.15221000"
              },
              {
                  "id": 133946,
                  "name": "Singarayakonda",
                  "latitude": "15.23046000",
                  "longitude": "80.02794000"
              },
              {
                  "id": 133990,
                  "name": "Sompeta",
                  "latitude": "18.94419000",
                  "longitude": "84.58449000"
              },
              {
                  "id": 134019,
                  "name": "Srikakulam",
                  "latitude": "18.29890000",
                  "longitude": "83.89751000"
              },
              {
                  "id": 134032,
                  "name": "Srisailain",
                  "latitude": "16.07217000",
                  "longitude": "78.86816000"
              },
              {
                  "id": 134093,
                  "name": "Suluru",
                  "latitude": "13.70000000",
                  "longitude": "80.01667000"
              },
              {
                  "id": 134226,
                  "name": "Tadepalle",
                  "latitude": "16.48333000",
                  "longitude": "80.60000000"
              },
              {
                  "id": 134227,
                  "name": "Tadepallegudem",
                  "latitude": "16.81467000",
                  "longitude": "81.52717000"
              },
              {
                  "id": 134228,
                  "name": "Tadpatri",
                  "latitude": "14.90832000",
                  "longitude": "78.01031000"
              },
              {
                  "id": 134113,
                  "name": "Tanuku",
                  "latitude": "16.75438000",
                  "longitude": "81.68143000"
              },
              {
                  "id": 134126,
                  "name": "Tekkali",
                  "latitude": "18.60570000",
                  "longitude": "84.23546000"
              },
              {
                  "id": 134183,
                  "name": "Tirumala",
                  "latitude": "13.68333000",
                  "longitude": "79.35000000"
              },
              {
                  "id": 134187,
                  "name": "Tirupati",
                  "latitude": "13.63551000",
                  "longitude": "79.41989000"
              },
              {
                  "id": 134222,
                  "name": "Tuni",
                  "latitude": "17.35905000",
                  "longitude": "82.54607000"
              },
              {
                  "id": 134292,
                  "name": "Uravakonda",
                  "latitude": "14.94348000",
                  "longitude": "77.25494000"
              },
              {
                  "id": 134448,
                  "name": "vadlamuru",
                  "latitude": "17.09545000",
                  "longitude": "82.16565000"
              },
              {
                  "id": 134308,
                  "name": "Vadlapudi",
                  "latitude": "14.31119000",
                  "longitude": "79.80430000"
              },
              {
                  "id": 134347,
                  "name": "Venkatagiri",
                  "latitude": "13.96005000",
                  "longitude": "79.58032000"
              },
              {
                  "id": 134348,
                  "name": "Vepagunta",
                  "latitude": "17.77844000",
                  "longitude": "83.21577000"
              },
              {
                  "id": 134350,
                  "name": "Vetapalem",
                  "latitude": "15.78502000",
                  "longitude": "80.30663000"
              },
              {
                  "id": 134356,
                  "name": "Vijayawada",
                  "latitude": "16.50745000",
                  "longitude": "80.64660000"
              },
              {
                  "id": 134364,
                  "name": "Vinukonda",
                  "latitude": "16.05310000",
                  "longitude": "79.73964000"
              },
              {
                  "id": 134369,
                  "name": "Visakhapatnam",
                  "latitude": "17.68009000",
                  "longitude": "83.20161000"
              },
              {
                  "id": 134373,
                  "name": "Vizianagaram",
                  "latitude": "18.11692000",
                  "longitude": "83.41148000"
              },
              {
                  "id": 134374,
                  "name": "Vizianagaram District",
                  "latitude": "18.41102000",
                  "longitude": "83.37677000"
              },
              {
                  "id": 134377,
                  "name": "Vuyyuru",
                  "latitude": "16.36307000",
                  "longitude": "80.84406000"
              },
              {
                  "id": 134407,
                  "name": "West Godavari",
                  "latitude": "17.00000000",
                  "longitude": "81.16667000"
              },
              {
                  "id": 134424,
                  "name": "Yanam",
                  "latitude": "16.73308000",
                  "longitude": "82.21364000"
              },
              {
                  "id": 134426,
                  "name": "Yanamalakuduru",
                  "latitude": "16.48531000",
                  "longitude": "80.66746000"
              },
              {
                  "id": 134437,
                  "name": "Yarada",
                  "latitude": "17.65872000",
                  "longitude": "83.27419000"
              }
          ]
      },
      {
          "id": 4024,
          "name": "Arunachal Pradesh",
          "state_code": "AR",
          "latitude": "28.21799940",
          "longitude": "94.72775280",
          "type": "state",
          "cities": [
              {
                  "id": 57645,
                  "name": "Along",
                  "latitude": "28.16951000",
                  "longitude": "94.80060000"
              },
              {
                  "id": 57708,
                  "name": "Anjaw",
                  "latitude": "28.06549000",
                  "longitude": "96.82878000"
              },
              {
                  "id": 58151,
                  "name": "Basar",
                  "latitude": "27.99008000",
                  "longitude": "94.69451000"
              },
              {
                  "id": 58080,
                  "name": "Bomdila",
                  "latitude": "27.26475000",
                  "longitude": "92.42472000"
              },
              {
                  "id": 58196,
                  "name": "Changlang",
                  "latitude": "27.36265000",
                  "longitude": "96.34518000"
              },
              {
                  "id": 131763,
                  "name": "Dibang Valley",
                  "latitude": "28.70000000",
                  "longitude": "95.70000000"
              },
              {
                  "id": 131826,
                  "name": "East Kameng",
                  "latitude": "27.30000000",
                  "longitude": "93.05000000"
              },
              {
                  "id": 131828,
                  "name": "East Siang",
                  "latitude": "28.12379000",
                  "longitude": "95.16339000"
              },
              {
                  "id": 132090,
                  "name": "Hayuliang",
                  "latitude": "28.07301000",
                  "longitude": "96.54305000"
              },
              {
                  "id": 132178,
                  "name": "Itanagar",
                  "latitude": "27.08694000",
                  "longitude": "93.60987000"
              },
              {
                  "id": 132499,
                  "name": "Khonsa",
                  "latitude": "27.01667000",
                  "longitude": "95.56667000"
              },
              {
                  "id": 132663,
                  "name": "Kurung Kumey",
                  "latitude": "27.99983000",
                  "longitude": "93.39240000"
              },
              {
                  "id": 132769,
                  "name": "Lohit District",
                  "latitude": "27.84012000",
                  "longitude": "96.19521000"
              },
              {
                  "id": 132779,
                  "name": "Lower Dibang Valley",
                  "latitude": "28.37258000",
                  "longitude": "95.88040000"
              },
              {
                  "id": 132780,
                  "name": "Lower Subansiri",
                  "latitude": "27.62554000",
                  "longitude": "93.93908000"
              },
              {
                  "id": 132934,
                  "name": "Margherita",
                  "latitude": "27.28482000",
                  "longitude": "95.66796000"
              },
              {
                  "id": 133121,
                  "name": "Naharlagun",
                  "latitude": "27.10467000",
                  "longitude": "93.69518000"
              },
              {
                  "id": 133551,
                  "name": "Pasighat",
                  "latitude": "28.06631000",
                  "longitude": "95.32678000"
              },
              {
                  "id": 134120,
                  "name": "Tawang",
                  "latitude": "27.57417000",
                  "longitude": "91.92437000"
              },
              {
                  "id": 134135,
                  "name": "Tezu",
                  "latitude": "27.91256000",
                  "longitude": "96.12882000"
              },
              {
                  "id": 134199,
                  "name": "Tirap",
                  "latitude": "27.01917000",
                  "longitude": "95.51788000"
              },
              {
                  "id": 134288,
                  "name": "Upper Siang",
                  "latitude": "28.83355000",
                  "longitude": "94.91806000"
              },
              {
                  "id": 134289,
                  "name": "Upper Subansiri",
                  "latitude": "28.30000000",
                  "longitude": "94.00000000"
              },
              {
                  "id": 134409,
                  "name": "West Kameng",
                  "latitude": "27.40000000",
                  "longitude": "92.35000000"
              },
              {
                  "id": 134411,
                  "name": "West Siang",
                  "latitude": "28.40000000",
                  "longitude": "94.55000000"
              },
              {
                  "id": 134444,
                  "name": "Ziro",
                  "latitude": "27.59497000",
                  "longitude": "93.83854000"
              }
          ]
      },
      {
          "id": 4027,
          "name": "Assam",
          "state_code": "AS",
          "latitude": "26.20060430",
          "longitude": "92.93757390",
          "type": "state",
          "cities": [
              {
                  "id": 57585,
                  "name": "Abhayapuri",
                  "latitude": "26.32255000",
                  "longitude": "90.68526000"
              },
              {
                  "id": 57679,
                  "name": "Amguri",
                  "latitude": "26.81482000",
                  "longitude": "94.52614000"
              },
              {
                  "id": 57787,
                  "name": "Badarpur",
                  "latitude": "24.86852000",
                  "longitude": "92.59606000"
              },
              {
                  "id": 57820,
                  "name": "Baksa",
                  "latitude": "26.69804000",
                  "longitude": "91.15142000"
              },
              {
                  "id": 57883,
                  "name": "Barpathar",
                  "latitude": "26.28709000",
                  "longitude": "93.88844000"
              },
              {
                  "id": 57884,
                  "name": "Barpeta",
                  "latitude": "26.47104000",
                  "longitude": "91.03080000"
              },
              {
                  "id": 57885,
                  "name": "Barpeta Road",
                  "latitude": "26.50284000",
                  "longitude": "90.96937000"
              },
              {
                  "id": 58150,
                  "name": "Basugaon",
                  "latitude": "26.46742000",
                  "longitude": "90.41951000"
              },
              {
                  "id": 58028,
                  "name": "Bihpuriagaon",
                  "latitude": "27.01718000",
                  "longitude": "93.91673000"
              },
              {
                  "id": 58034,
                  "name": "Bijni",
                  "latitude": "26.49588000",
                  "longitude": "90.70298000"
              },
              {
                  "id": 58053,
                  "name": "Bilasipara",
                  "latitude": "26.23285000",
                  "longitude": "90.23410000"
              },
              {
                  "id": 58075,
                  "name": "Bokajan",
                  "latitude": "26.02131000",
                  "longitude": "93.77945000"
              },
              {
                  "id": 58077,
                  "name": "Bokakhat",
                  "latitude": "26.64018000",
                  "longitude": "93.60052000"
              },
              {
                  "id": 58081,
                  "name": "Bongaigaon",
                  "latitude": "26.46030000",
                  "longitude": "90.64640000"
              },
              {
                  "id": 131634,
                  "name": "Cachar",
                  "latitude": "24.78213000",
                  "longitude": "92.85771000"
              },
              {
                  "id": 131588,
                  "name": "Chabua",
                  "latitude": "27.48253000",
                  "longitude": "95.17451000"
              },
              {
                  "id": 131604,
                  "name": "Chapar",
                  "latitude": "26.27266000",
                  "longitude": "90.44556000"
              },
              {
                  "id": 131568,
                  "name": "Chirang",
                  "latitude": "26.52527000",
                  "longitude": "90.49066000"
              },
              {
                  "id": 131657,
                  "name": "Darrang",
                  "latitude": "26.51195000",
                  "longitude": "92.16843000"
              },
              {
                  "id": 131695,
                  "name": "Dergaon",
                  "latitude": "26.70000000",
                  "longitude": "93.96667000"
              },
              {
                  "id": 131732,
                  "name": "Dhekiajuli",
                  "latitude": "26.70367000",
                  "longitude": "92.47808000"
              },
              {
                  "id": 131733,
                  "name": "Dhemaji",
                  "latitude": "27.60910000",
                  "longitude": "94.79420000"
              },
              {
                  "id": 131737,
                  "name": "Dhing",
                  "latitude": "26.46793000",
                  "longitude": "92.47336000"
              },
              {
                  "id": 131744,
                  "name": "Dhubri",
                  "latitude": "26.06749000",
                  "longitude": "90.02238000"
              },
              {
                  "id": 131762,
                  "name": "Dibrugarh",
                  "latitude": "27.50000000",
                  "longitude": "95.00000000"
              },
              {
                  "id": 131766,
                  "name": "Digboi",
                  "latitude": "27.39321000",
                  "longitude": "95.61839000"
              },
              {
                  "id": 131770,
                  "name": "Dima Hasao District",
                  "latitude": "25.50000000",
                  "longitude": "93.00000000"
              },
              {
                  "id": 131776,
                  "name": "Diphu",
                  "latitude": "25.84341000",
                  "longitude": "93.43116000"
              },
              {
                  "id": 131778,
                  "name": "Dispur",
                  "latitude": "26.13564000",
                  "longitude": "91.80069000"
              },
              {
                  "id": 131795,
                  "name": "Duliagaon",
                  "latitude": "27.37227000",
                  "longitude": "95.30754000"
              },
              {
                  "id": 131796,
                  "name": "Dum Duma",
                  "latitude": "27.56884000",
                  "longitude": "95.55664000"
              },
              {
                  "id": 131928,
                  "name": "Gauripur",
                  "latitude": "26.08334000",
                  "longitude": "89.96118000"
              },
              {
                  "id": 132004,
                  "name": "Goalpara",
                  "latitude": "26.12791000",
                  "longitude": "90.60974000"
              },
              {
                  "id": 131967,
                  "name": "Gohpur",
                  "latitude": "26.88184000",
                  "longitude": "93.61560000"
              },
              {
                  "id": 131976,
                  "name": "Golaghat",
                  "latitude": "26.40920000",
                  "longitude": "93.91193000"
              },
              {
                  "id": 131977,
                  "name": "Golakganj",
                  "latitude": "26.10216000",
                  "longitude": "89.82275000"
              },
              {
                  "id": 131997,
                  "name": "Goshaingaon",
                  "latitude": "26.43946000",
                  "longitude": "89.96307000"
              },
              {
                  "id": 132039,
                  "name": "Guwahati",
                  "latitude": "26.18440000",
                  "longitude": "91.74580000"
              },
              {
                  "id": 132134,
                  "name": "Haflong",
                  "latitude": "25.16478000",
                  "longitude": "93.01744000"
              },
              {
                  "id": 132055,
                  "name": "Hailakandi",
                  "latitude": "24.50170000",
                  "longitude": "92.60069000"
              },
              {
                  "id": 132137,
                  "name": "Hajo",
                  "latitude": "26.24520000",
                  "longitude": "91.52525000"
              },
              {
                  "id": 132110,
                  "name": "Hojai",
                  "latitude": "26.00281000",
                  "longitude": "92.85605000"
              },
              {
                  "id": 132126,
                  "name": "Howli",
                  "latitude": "26.42237000",
                  "longitude": "90.98004000"
              },
              {
                  "id": 132291,
                  "name": "Jogighopa",
                  "latitude": "26.22646000",
                  "longitude": "90.57247000"
              },
              {
                  "id": 132294,
                  "name": "Jorhat",
                  "latitude": "26.80000000",
                  "longitude": "94.26000000"
              },
              {
                  "id": 132693,
                  "name": "Kamrup",
                  "latitude": "26.22322000",
                  "longitude": "91.65344000"
              },
              {
                  "id": 132366,
                  "name": "Kamrup Metropolitan",
                  "latitude": "26.05375000",
                  "longitude": "92.00763000"
              },
              {
                  "id": 132718,
                  "name": "Karbi Anglong",
                  "latitude": "26.00000000",
                  "longitude": "93.50000000"
              },
              {
                  "id": 132402,
                  "name": "Karimganj",
                  "latitude": "24.60000000",
                  "longitude": "92.40000000"
              },
              {
                  "id": 132518,
                  "name": "Kharupatia",
                  "latitude": "26.51839000",
                  "longitude": "92.14722000"
              },
              {
                  "id": 132551,
                  "name": "Kokrajhar",
                  "latitude": "26.60000000",
                  "longitude": "90.20000000"
              },
              {
                  "id": 132742,
                  "name": "Lakhimpur",
                  "latitude": "27.35000000",
                  "longitude": "94.25000000"
              },
              {
                  "id": 132743,
                  "name": "Lakhipur",
                  "latitude": "24.79281000",
                  "longitude": "93.00910000"
              },
              {
                  "id": 132793,
                  "name": "Lala",
                  "latitude": "24.55418000",
                  "longitude": "92.61592000"
              },
              {
                  "id": 132786,
                  "name": "Lumding Railway Colony",
                  "latitude": "25.74903000",
                  "longitude": "93.16998000"
              },
              {
                  "id": 132842,
                  "name": "Mahur",
                  "latitude": "25.18305000",
                  "longitude": "93.11342000"
              },
              {
                  "id": 132853,
                  "name": "Maibong",
                  "latitude": "25.30125000",
                  "longitude": "93.13811000"
              },
              {
                  "id": 133064,
                  "name": "Makum",
                  "latitude": "27.48652000",
                  "longitude": "95.43646000"
              },
              {
                  "id": 132904,
                  "name": "Mangaldai",
                  "latitude": "26.44212000",
                  "longitude": "92.03047000"
              },
              {
                  "id": 132937,
                  "name": "Mariani",
                  "latitude": "26.65725000",
                  "longitude": "94.31529000"
              },
              {
                  "id": 133002,
                  "name": "Moranha",
                  "latitude": "27.18735000",
                  "longitude": "94.91557000"
              },
              {
                  "id": 132995,
                  "name": "Morigaon",
                  "latitude": "26.25213000",
                  "longitude": "92.34238000"
              },
              {
                  "id": 133110,
                  "name": "Nagaon",
                  "latitude": "26.35037000",
                  "longitude": "92.69225000"
              },
              {
                  "id": 133122,
                  "name": "Nahorkatiya",
                  "latitude": "27.28912000",
                  "longitude": "95.34180000"
              },
              {
                  "id": 133130,
                  "name": "Nalbari",
                  "latitude": "26.50000000",
                  "longitude": "91.40000000"
              },
              {
                  "id": 133266,
                  "name": "Namrup",
                  "latitude": "27.19395000",
                  "longitude": "95.31929000"
              },
              {
                  "id": 133284,
                  "name": "Nazira",
                  "latitude": "26.91649000",
                  "longitude": "94.73611000"
              },
              {
                  "id": 133239,
                  "name": "North Guwahati",
                  "latitude": "26.19749000",
                  "longitude": "91.72020000"
              },
              {
                  "id": 133240,
                  "name": "North Lakhimpur",
                  "latitude": "27.23517000",
                  "longitude": "94.10357000"
              },
              {
                  "id": 133248,
                  "name": "Numaligarh",
                  "latitude": "26.62249000",
                  "longitude": "93.72225000"
              },
              {
                  "id": 133341,
                  "name": "Palasbari",
                  "latitude": "26.12388000",
                  "longitude": "91.53974000"
              },
              {
                  "id": 133584,
                  "name": "Raha",
                  "latitude": "26.23333000",
                  "longitude": "92.51667000"
              },
              {
                  "id": 133610,
                  "name": "Rangapara",
                  "latitude": "26.83772000",
                  "longitude": "92.66876000"
              },
              {
                  "id": 133608,
                  "name": "Rangia",
                  "latitude": "26.44931000",
                  "longitude": "91.61356000"
              },
              {
                  "id": 133798,
                  "name": "Sapatgram",
                  "latitude": "26.33732000",
                  "longitude": "90.12360000"
              },
              {
                  "id": 133809,
                  "name": "Sarupathar",
                  "latitude": "26.20600000",
                  "longitude": "96.81000000"
              },
              {
                  "id": 133916,
                  "name": "Sibsagar",
                  "latitude": "26.98427000",
                  "longitude": "94.63784000"
              },
              {
                  "id": 133934,
                  "name": "Silapathar",
                  "latitude": "27.59441000",
                  "longitude": "94.72402000"
              },
              {
                  "id": 133935,
                  "name": "Silchar",
                  "latitude": "24.82733000",
                  "longitude": "92.79787000"
              },
              {
                  "id": 133979,
                  "name": "Soalkuchi",
                  "latitude": "26.16806000",
                  "longitude": "91.57111000"
              },
              {
                  "id": 133998,
                  "name": "Sonari",
                  "latitude": "27.02462000",
                  "longitude": "95.01629000"
              },
              {
                  "id": 133996,
                  "name": "Sonitpur",
                  "latitude": "26.76748000",
                  "longitude": "92.96425000"
              },
              {
                  "id": 134003,
                  "name": "Sorbhog",
                  "latitude": "26.48612000",
                  "longitude": "90.88590000"
              },
              {
                  "id": 134134,
                  "name": "Tezpur",
                  "latitude": "26.63333000",
                  "longitude": "92.80000000"
              },
              {
                  "id": 134175,
                  "name": "Tinsukia",
                  "latitude": "27.60000000",
                  "longitude": "95.60000000"
              },
              {
                  "id": 134203,
                  "name": "Titabar",
                  "latitude": "26.60140000",
                  "longitude": "94.20386000"
              },
              {
                  "id": 134252,
                  "name": "Udalguri",
                  "latitude": "26.75367000",
                  "longitude": "92.10215000"
              }
          ]
      },
      {
          "id": 4037,
          "name": "Bihar",
          "state_code": "BR",
          "latitude": "25.09607420",
          "longitude": "85.31311940",
          "type": "state",
          "cities": [
              {
                  "id": 57661,
                  "name": "Amarpur",
                  "latitude": "25.03967000",
                  "longitude": "86.90247000"
              },
              {
                  "id": 57730,
                  "name": "Araria",
                  "latitude": "26.20000000",
                  "longitude": "87.40000000"
              },
              {
                  "id": 57739,
                  "name": "Arrah",
                  "latitude": "25.55629000",
                  "longitude": "84.66335000"
              },
              {
                  "id": 57747,
                  "name": "Arwal",
                  "latitude": "25.16158000",
                  "longitude": "84.69040000"
              },
              {
                  "id": 57749,
                  "name": "Asarganj",
                  "latitude": "25.15046000",
                  "longitude": "86.68639000"
              },
              {
                  "id": 57766,
                  "name": "Aurangabad",
                  "latitude": "24.75204000",
                  "longitude": "84.37420000"
              },
              {
                  "id": 57796,
                  "name": "Bagaha",
                  "latitude": "27.09918000",
                  "longitude": "84.09003000"
              },
              {
                  "id": 57809,
                  "name": "Bahadurganj",
                  "latitude": "26.26172000",
                  "longitude": "87.82443000"
              },
              {
                  "id": 57815,
                  "name": "Bairagnia",
                  "latitude": "26.74063000",
                  "longitude": "85.27323000"
              },
              {
                  "id": 57816,
                  "name": "Baisi",
                  "latitude": "25.86302000",
                  "longitude": "87.74487000"
              },
              {
                  "id": 57818,
                  "name": "Bakhtiyarpur",
                  "latitude": "25.46179000",
                  "longitude": "85.53179000"
              },
              {
                  "id": 57850,
                  "name": "Bangaon",
                  "latitude": "25.86728000",
                  "longitude": "86.51152000"
              },
              {
                  "id": 57854,
                  "name": "Banka",
                  "latitude": "24.89214000",
                  "longitude": "86.98425000"
              },
              {
                  "id": 57855,
                  "name": "Banmankhi",
                  "latitude": "25.88857000",
                  "longitude": "87.19421000"
              },
              {
                  "id": 57860,
                  "name": "Bar Bigha",
                  "latitude": "25.21855000",
                  "longitude": "85.73320000"
              },
              {
                  "id": 57864,
                  "name": "Barauli",
                  "latitude": "26.38109000",
                  "longitude": "84.58648000"
              },
              {
                  "id": 58141,
                  "name": "Barh",
                  "latitude": "25.48339000",
                  "longitude": "85.70928000"
              },
              {
                  "id": 57873,
                  "name": "Barhiya",
                  "latitude": "25.28814000",
                  "longitude": "86.02055000"
              },
              {
                  "id": 57875,
                  "name": "Bariarpur",
                  "latitude": "25.28791000",
                  "longitude": "86.57643000"
              },
              {
                  "id": 58145,
                  "name": "Baruni",
                  "latitude": "25.47509000",
                  "longitude": "85.96813000"
              },
              {
                  "id": 57915,
                  "name": "Begusarai",
                  "latitude": "25.41853000",
                  "longitude": "86.13389000"
              },
              {
                  "id": 57927,
                  "name": "Belsand",
                  "latitude": "26.44365000",
                  "longitude": "85.40076000"
              },
              {
                  "id": 57941,
                  "name": "Bettiah",
                  "latitude": "26.80229000",
                  "longitude": "84.50311000"
              },
              {
                  "id": 57947,
                  "name": "Bhabhua",
                  "latitude": "25.04049000",
                  "longitude": "83.60749000"
              },
              {
                  "id": 58009,
                  "name": "Bhagalpur",
                  "latitude": "25.29023000",
                  "longitude": "87.06665000"
              },
              {
                  "id": 57957,
                  "name": "Bhagirathpur",
                  "latitude": "26.26950000",
                  "longitude": "86.06346000"
              },
              {
                  "id": 57974,
                  "name": "Bhawanipur",
                  "latitude": "26.45352000",
                  "longitude": "87.02744000"
              },
              {
                  "id": 57991,
                  "name": "Bhojpur",
                  "latitude": "25.30886000",
                  "longitude": "84.44504000"
              },
              {
                  "id": 58029,
                  "name": "Bihar Sharif",
                  "latitude": "25.20084000",
                  "longitude": "85.52389000"
              },
              {
                  "id": 58030,
                  "name": "Bihariganj",
                  "latitude": "25.73415000",
                  "longitude": "86.98837000"
              },
              {
                  "id": 58039,
                  "name": "Bikramganj",
                  "latitude": "25.21073000",
                  "longitude": "84.25508000"
              },
              {
                  "id": 58160,
                  "name": "Birpur",
                  "latitude": "26.50823000",
                  "longitude": "87.01194000"
              },
              {
                  "id": 58089,
                  "name": "Buddh Gaya",
                  "latitude": "24.69808000",
                  "longitude": "84.98690000"
              },
              {
                  "id": 58100,
                  "name": "Buxar",
                  "latitude": "25.50000000",
                  "longitude": "84.10000000"
              },
              {
                  "id": 131590,
                  "name": "Chakia",
                  "latitude": "26.41598000",
                  "longitude": "85.04665000"
              },
              {
                  "id": 131605,
                  "name": "Chapra",
                  "latitude": "25.78031000",
                  "longitude": "84.74709000"
              },
              {
                  "id": 131541,
                  "name": "Chhatapur",
                  "latitude": "26.21965000",
                  "longitude": "87.00479000"
              },
              {
                  "id": 131620,
                  "name": "Colgong",
                  "latitude": "25.26328000",
                  "longitude": "87.23264000"
              },
              {
                  "id": 131647,
                  "name": "Dalsingh Sarai",
                  "latitude": "25.66795000",
                  "longitude": "85.83636000"
              },
              {
                  "id": 131654,
                  "name": "Darbhanga",
                  "latitude": "26.00000000",
                  "longitude": "86.00000000"
              },
              {
                  "id": 131664,
                  "name": "Daudnagar",
                  "latitude": "25.03473000",
                  "longitude": "84.40095000"
              },
              {
                  "id": 131677,
                  "name": "Dehri",
                  "latitude": "24.90247000",
                  "longitude": "84.18217000"
              },
              {
                  "id": 131748,
                  "name": "Dhaka",
                  "latitude": "26.67479000",
                  "longitude": "85.16698000"
              },
              {
                  "id": 131767,
                  "name": "Dighwara",
                  "latitude": "25.74434000",
                  "longitude": "85.01003000"
              },
              {
                  "id": 131773,
                  "name": "Dinapore",
                  "latitude": "25.63705000",
                  "longitude": "85.04794000"
              },
              {
                  "id": 131798,
                  "name": "Dumra",
                  "latitude": "26.56708000",
                  "longitude": "85.52040000"
              },
              {
                  "id": 131799,
                  "name": "Dumraon",
                  "latitude": "25.55265000",
                  "longitude": "84.15149000"
              },
              {
                  "id": 131873,
                  "name": "Fatwa",
                  "latitude": "25.50958000",
                  "longitude": "85.30504000"
              },
              {
                  "id": 131878,
                  "name": "Forbesganj",
                  "latitude": "26.30253000",
                  "longitude": "87.26556000"
              },
              {
                  "id": 131932,
                  "name": "Gaya",
                  "latitude": "24.79686000",
                  "longitude": "85.00385000"
              },
              {
                  "id": 131943,
                  "name": "Ghoga",
                  "latitude": "25.21738000",
                  "longitude": "87.15710000"
              },
              {
                  "id": 131987,
                  "name": "Gopalganj",
                  "latitude": "26.50000000",
                  "longitude": "84.33333000"
              },
              {
                  "id": 132138,
                  "name": "Hajipur",
                  "latitude": "25.68544000",
                  "longitude": "85.20981000"
              },
              {
                  "id": 132095,
                  "name": "Hilsa",
                  "latitude": "25.31642000",
                  "longitude": "85.28234000"
              },
              {
                  "id": 132107,
                  "name": "Hisua",
                  "latitude": "24.83360000",
                  "longitude": "85.41729000"
              },
              {
                  "id": 132174,
                  "name": "Islampur",
                  "latitude": "25.14075000",
                  "longitude": "85.20587000"
              },
              {
                  "id": 132188,
                  "name": "Jagdispur",
                  "latitude": "25.46811000",
                  "longitude": "84.41939000"
              },
              {
                  "id": 132198,
                  "name": "Jahanabad",
                  "latitude": "25.21368000",
                  "longitude": "84.98710000"
              },
              {
                  "id": 132234,
                  "name": "Jamalpur",
                  "latitude": "25.31258000",
                  "longitude": "86.48888000"
              },
              {
                  "id": 132233,
                  "name": "Jamui",
                  "latitude": "24.92082000",
                  "longitude": "86.17538000"
              },
              {
                  "id": 132258,
                  "name": "Jaynagar",
                  "latitude": "26.59048000",
                  "longitude": "86.13791000"
              },
              {
                  "id": 132259,
                  "name": "Jehanabad",
                  "latitude": "25.20701000",
                  "longitude": "84.99573000"
              },
              {
                  "id": 132274,
                  "name": "Jha-Jha",
                  "latitude": "24.77107000",
                  "longitude": "86.37888000"
              },
              {
                  "id": 132267,
                  "name": "Jhanjharpur",
                  "latitude": "26.26467000",
                  "longitude": "86.27993000"
              },
              {
                  "id": 132288,
                  "name": "Jogbani",
                  "latitude": "26.39905000",
                  "longitude": "87.26525000"
              },
              {
                  "id": 132337,
                  "name": "Kaimur District",
                  "latitude": "25.05077000",
                  "longitude": "83.58261000"
              },
              {
                  "id": 132417,
                  "name": "Kasba",
                  "latitude": "25.85643000",
                  "longitude": "87.53836000"
              },
              {
                  "id": 132423,
                  "name": "Katihar",
                  "latitude": "25.50000000",
                  "longitude": "87.60000000"
              },
              {
                  "id": 132451,
                  "name": "Khagaria",
                  "latitude": "25.50220000",
                  "longitude": "86.46708000"
              },
              {
                  "id": 132452,
                  "name": "Khagaul",
                  "latitude": "25.57898000",
                  "longitude": "85.04564000"
              },
              {
                  "id": 132470,
                  "name": "Kharagpur",
                  "latitude": "25.12446000",
                  "longitude": "86.55578000"
              },
              {
                  "id": 132510,
                  "name": "Khusropur",
                  "latitude": "25.48174000",
                  "longitude": "85.38492000"
              },
              {
                  "id": 132529,
                  "name": "Kishanganj",
                  "latitude": "26.30000000",
                  "longitude": "88.00000000"
              },
              {
                  "id": 132620,
                  "name": "Koath",
                  "latitude": "25.32643000",
                  "longitude": "84.25983000"
              },
              {
                  "id": 132548,
                  "name": "Koelwar",
                  "latitude": "25.58055000",
                  "longitude": "84.79751000"
              },
              {
                  "id": 132744,
                  "name": "Lakhisarai",
                  "latitude": "25.20000000",
                  "longitude": "86.20000000"
              },
              {
                  "id": 132795,
                  "name": "Lalganj",
                  "latitude": "25.86894000",
                  "longitude": "85.17394000"
              },
              {
                  "id": 132781,
                  "name": "Luckeesarai",
                  "latitude": "25.17650000",
                  "longitude": "86.09470000"
              },
              {
                  "id": 132812,
                  "name": "Madhepura",
                  "latitude": "25.80000000",
                  "longitude": "87.00000000"
              },
              {
                  "id": 132815,
                  "name": "Madhubani",
                  "latitude": "26.35367000",
                  "longitude": "86.07169000"
              },
              {
                  "id": 132849,
                  "name": "Maharajgani",
                  "latitude": "26.11017000",
                  "longitude": "84.50365000"
              },
              {
                  "id": 132859,
                  "name": "Mairwa",
                  "latitude": "26.23218000",
                  "longitude": "84.16349000"
              },
              {
                  "id": 132901,
                  "name": "Maner",
                  "latitude": "25.64602000",
                  "longitude": "84.87291000"
              },
              {
                  "id": 132911,
                  "name": "Manihari",
                  "latitude": "25.33891000",
                  "longitude": "87.61998000"
              },
              {
                  "id": 132935,
                  "name": "Marhaura",
                  "latitude": "25.97349000",
                  "longitude": "84.86796000"
              },
              {
                  "id": 132938,
                  "name": "Masaurhi Buzurg",
                  "latitude": "25.35417000",
                  "longitude": "85.03195000"
              },
              {
                  "id": 132984,
                  "name": "Mohiuddi nagar",
                  "latitude": "25.57374000",
                  "longitude": "85.66944000"
              },
              {
                  "id": 132988,
                  "name": "Mokameh",
                  "latitude": "25.39662000",
                  "longitude": "85.92190000"
              },
              {
                  "id": 132991,
                  "name": "Monghyr",
                  "latitude": "25.37459000",
                  "longitude": "86.47455000"
              },
              {
                  "id": 133005,
                  "name": "Mothihari",
                  "latitude": "26.64862000",
                  "longitude": "84.91656000"
              },
              {
                  "id": 133032,
                  "name": "Munger",
                  "latitude": "25.36099000",
                  "longitude": "86.46515000"
              },
              {
                  "id": 133037,
                  "name": "Murliganj",
                  "latitude": "25.89690000",
                  "longitude": "86.99577000"
              },
              {
                  "id": 133052,
                  "name": "Muzaffarpur",
                  "latitude": "26.16667000",
                  "longitude": "85.41667000"
              },
              {
                  "id": 133105,
                  "name": "Nabinagar",
                  "latitude": "24.60681000",
                  "longitude": "84.12624000"
              },
              {
                  "id": 133262,
                  "name": "Nalanda",
                  "latitude": "25.25000000",
                  "longitude": "85.58333000"
              },
              {
                  "id": 133279,
                  "name": "Nasriganj",
                  "latitude": "25.05140000",
                  "longitude": "84.32839000"
              },
              {
                  "id": 133182,
                  "name": "Naugachhia",
                  "latitude": "25.38807000",
                  "longitude": "87.09906000"
              },
              {
                  "id": 133192,
                  "name": "Nawada",
                  "latitude": "24.75000000",
                  "longitude": "85.50000000"
              },
              {
                  "id": 133222,
                  "name": "Nirmali",
                  "latitude": "26.31397000",
                  "longitude": "86.58537000"
              },
              {
                  "id": 133373,
                  "name": "Pashchim Champaran",
                  "latitude": "27.00000000",
                  "longitude": "84.50000000"
              },
              {
                  "id": 133386,
                  "name": "Patna",
                  "latitude": "25.41667000",
                  "longitude": "85.16667000"
              },
              {
                  "id": 133459,
                  "name": "Piro",
                  "latitude": "25.33218000",
                  "longitude": "84.40454000"
              },
              {
                  "id": 133509,
                  "name": "Pupri",
                  "latitude": "26.47079000",
                  "longitude": "85.70311000"
              },
              {
                  "id": 133570,
                  "name": "Purba Champaran",
                  "latitude": "26.58333000",
                  "longitude": "84.83333000"
              },
              {
                  "id": 133512,
                  "name": "Purnia",
                  "latitude": "25.81614000",
                  "longitude": "87.40708000"
              },
              {
                  "id": 133581,
                  "name": "Rafiganj",
                  "latitude": "24.81757000",
                  "longitude": "84.63445000"
              },
              {
                  "id": 133582,
                  "name": "Raghunathpur",
                  "latitude": "25.64492000",
                  "longitude": "87.91762000"
              },
              {
                  "id": 133678,
                  "name": "Rajgir",
                  "latitude": "25.02828000",
                  "longitude": "85.42079000"
              },
              {
                  "id": 133701,
                  "name": "Ramnagar",
                  "latitude": "27.16371000",
                  "longitude": "84.32342000"
              },
              {
                  "id": 133621,
                  "name": "Raxaul",
                  "latitude": "26.97982000",
                  "longitude": "84.85065000"
              },
              {
                  "id": 133632,
                  "name": "Revelganj",
                  "latitude": "25.78976000",
                  "longitude": "84.63596000"
              },
              {
                  "id": 133648,
                  "name": "Rohtas",
                  "latitude": "24.97941000",
                  "longitude": "84.02774000"
              },
              {
                  "id": 133656,
                  "name": "Rusera",
                  "latitude": "25.75355000",
                  "longitude": "86.02597000"
              },
              {
                  "id": 133748,
                  "name": "Sagauli",
                  "latitude": "26.76390000",
                  "longitude": "84.74341000"
              },
              {
                  "id": 133749,
                  "name": "Saharsa",
                  "latitude": "25.87498000",
                  "longitude": "86.59611000"
              },
              {
                  "id": 133767,
                  "name": "Samastipur",
                  "latitude": "25.75000000",
                  "longitude": "85.91667000"
              },
              {
                  "id": 134076,
                  "name": "Saran",
                  "latitude": "25.91667000",
                  "longitude": "84.75000000"
              },
              {
                  "id": 133852,
                  "name": "Shahbazpur",
                  "latitude": "26.30511000",
                  "longitude": "87.28865000"
              },
              {
                  "id": 133902,
                  "name": "Shahpur",
                  "latitude": "25.60293000",
                  "longitude": "84.40412000"
              },
              {
                  "id": 133858,
                  "name": "Sheikhpura",
                  "latitude": "25.13073000",
                  "longitude": "85.78176000"
              },
              {
                  "id": 133860,
                  "name": "Sheohar",
                  "latitude": "26.50000000",
                  "longitude": "85.30000000"
              },
              {
                  "id": 133863,
                  "name": "Sherghati",
                  "latitude": "24.55950000",
                  "longitude": "84.79162000"
              },
              {
                  "id": 133933,
                  "name": "Silao",
                  "latitude": "25.08358000",
                  "longitude": "85.42804000"
              },
              {
                  "id": 134089,
                  "name": "Sitamarhi",
                  "latitude": "26.66667000",
                  "longitude": "85.50000000"
              },
              {
                  "id": 133977,
                  "name": "Siwan",
                  "latitude": "26.22096000",
                  "longitude": "84.35609000"
              },
              {
                  "id": 134049,
                  "name": "Supaul",
                  "latitude": "26.25000000",
                  "longitude": "86.80000000"
              },
              {
                  "id": 134121,
                  "name": "Teghra",
                  "latitude": "25.49043000",
                  "longitude": "85.94001000"
              },
              {
                  "id": 134127,
                  "name": "Tekari",
                  "latitude": "24.94253000",
                  "longitude": "84.84265000"
              },
              {
                  "id": 134163,
                  "name": "Thakurganj",
                  "latitude": "26.42742000",
                  "longitude": "88.13112000"
              },
              {
                  "id": 134314,
                  "name": "Vaishali",
                  "latitude": "25.75000000",
                  "longitude": "85.41667000"
              },
              {
                  "id": 134417,
                  "name": "Waris Aliganj",
                  "latitude": "25.01720000",
                  "longitude": "85.64047000"
              }
          ]
      },
      {
          "id": 4031,
          "name": "Chandigarh",
          "state_code": "CH",
          "latitude": "30.73331480",
          "longitude": "76.77941790",
          "type": "Union territory",
          "cities": [
              {
                  "id": 58190,
                  "name": "Chandigarh",
                  "latitude": "30.73629000",
                  "longitude": "76.78840000"
              }
          ]
      },
      {
          "id": 4040,
          "name": "Chhattisgarh",
          "state_code": "CT",
          "latitude": "21.27865670",
          "longitude": "81.86614420",
          "type": "state",
          "cities": [
              {
                  "id": 57619,
                  "name": "Akaltara",
                  "latitude": "22.02463000",
                  "longitude": "82.42641000"
              },
              {
                  "id": 57672,
                  "name": "Ambagarh Chauki",
                  "latitude": "20.77644000",
                  "longitude": "80.74608000"
              },
              {
                  "id": 57670,
                  "name": "Ambikapur",
                  "latitude": "23.11892000",
                  "longitude": "83.19537000"
              },
              {
                  "id": 57728,
                  "name": "Arang",
                  "latitude": "21.19639000",
                  "longitude": "81.96912000"
              },
              {
                  "id": 57812,
                  "name": "Baikunthpur",
                  "latitude": "23.26206000",
                  "longitude": "82.56051000"
              },
              {
                  "id": 57830,
                  "name": "Balod",
                  "latitude": "20.73081000",
                  "longitude": "81.20578000"
              },
              {
                  "id": 57831,
                  "name": "Baloda",
                  "latitude": "22.13890000",
                  "longitude": "82.48171000"
              },
              {
                  "id": 57832,
                  "name": "Baloda Bazar",
                  "latitude": "21.65678000",
                  "longitude": "82.16062000"
              },
              {
                  "id": 57898,
                  "name": "Basna",
                  "latitude": "21.27885000",
                  "longitude": "82.82670000"
              },
              {
                  "id": 57900,
                  "name": "Bastar",
                  "latitude": "19.26794000",
                  "longitude": "81.73828000"
              },
              {
                  "id": 57931,
                  "name": "Bemetara",
                  "latitude": "21.71556000",
                  "longitude": "81.53423000"
              },
              {
                  "id": 58013,
                  "name": "Bhanpuri",
                  "latitude": "21.09190000",
                  "longitude": "80.93218000"
              },
              {
                  "id": 58015,
                  "name": "Bhatapara",
                  "latitude": "21.73500000",
                  "longitude": "81.94711000"
              },
              {
                  "id": 57969,
                  "name": "Bhatgaon",
                  "latitude": "21.15000000",
                  "longitude": "81.70000000"
              },
              {
                  "id": 57981,
                  "name": "Bhilai",
                  "latitude": "21.20919000",
                  "longitude": "81.42850000"
              },
              {
                  "id": 58032,
                  "name": "Bijapur",
                  "latitude": "18.84322000",
                  "longitude": "80.77610000"
              },
              {
                  "id": 58055,
                  "name": "Bilaspur",
                  "latitude": "22.38333000",
                  "longitude": "82.13333000"
              },
              {
                  "id": 131593,
                  "name": "Champa",
                  "latitude": "22.03532000",
                  "longitude": "82.64234000"
              },
              {
                  "id": 131538,
                  "name": "Chhuikhadan",
                  "latitude": "21.52316000",
                  "longitude": "80.99788000"
              },
              {
                  "id": 153519,
                  "name": "Dantewada",
                  "latitude": "18.89984800",
                  "longitude": "81.33867520"
              },
              {
                  "id": 131690,
                  "name": "Deori",
                  "latitude": "21.45000000",
                  "longitude": "82.61667000"
              },
              {
                  "id": 131712,
                  "name": "Dhamtari",
                  "latitude": "20.70718000",
                  "longitude": "81.54874000"
              },
              {
                  "id": 131787,
                  "name": "Dongargaon",
                  "latitude": "20.97172000",
                  "longitude": "80.85077000"
              },
              {
                  "id": 131788,
                  "name": "Dongargarh",
                  "latitude": "21.18893000",
                  "longitude": "80.75459000"
              },
              {
                  "id": 131801,
                  "name": "Durg",
                  "latitude": "21.15000000",
                  "longitude": "81.40000000"
              },
              {
                  "id": 131897,
                  "name": "Gandai",
                  "latitude": "21.66667000",
                  "longitude": "81.10013000"
              },
              {
                  "id": 131926,
                  "name": "Gariaband",
                  "latitude": "20.63323000",
                  "longitude": "82.06221000"
              },
              {
                  "id": 131927,
                  "name": "Gaurela",
                  "latitude": "22.75449000",
                  "longitude": "81.90107000"
              },
              {
                  "id": 131938,
                  "name": "Gharghoda",
                  "latitude": "22.17427000",
                  "longitude": "83.35170000"
              },
              {
                  "id": 132048,
                  "name": "Gidam",
                  "latitude": "18.97431000",
                  "longitude": "81.39894000"
              },
              {
                  "id": 132186,
                  "name": "Jagdalpur",
                  "latitude": "19.08136000",
                  "longitude": "82.02131000"
              },
              {
                  "id": 132312,
                  "name": "Janjgir",
                  "latitude": "22.00922000",
                  "longitude": "82.57780000"
              },
              {
                  "id": 132240,
                  "name": "Janjgir-Champa",
                  "latitude": "21.90000000",
                  "longitude": "82.70000000"
              },
              {
                  "id": 132244,
                  "name": "Jashpur",
                  "latitude": "22.78495000",
                  "longitude": "83.84573000"
              },
              {
                  "id": 132245,
                  "name": "Jashpurnagar",
                  "latitude": "22.88783000",
                  "longitude": "84.13864000"
              },
              {
                  "id": 132318,
                  "name": "Junagarh",
                  "latitude": "19.85993000",
                  "longitude": "82.93385000"
              },
              {
                  "id": 132319,
                  "name": "Kabeerdham",
                  "latitude": "22.10000000",
                  "longitude": "81.20000000"
              },
              {
                  "id": 132704,
                  "name": "Kanker",
                  "latitude": "20.27193000",
                  "longitude": "81.49177000"
              },
              {
                  "id": 132421,
                  "name": "Katghora",
                  "latitude": "22.50247000",
                  "longitude": "82.54279000"
              },
              {
                  "id": 132433,
                  "name": "Kawardha",
                  "latitude": "22.00853000",
                  "longitude": "81.23148000"
              },
              {
                  "id": 132456,
                  "name": "Khairagarh",
                  "latitude": "21.41859000",
                  "longitude": "80.97942000"
              },
              {
                  "id": 132463,
                  "name": "Khamharia",
                  "latitude": "20.97600000",
                  "longitude": "82.25116000"
              },
              {
                  "id": 132480,
                  "name": "Kharod",
                  "latitude": "21.74420000",
                  "longitude": "82.57880000"
              },
              {
                  "id": 132481,
                  "name": "Kharsia",
                  "latitude": "21.98953000",
                  "longitude": "83.10476000"
              },
              {
                  "id": 132525,
                  "name": "Kirandul",
                  "latitude": "18.63649000",
                  "longitude": "81.25827000"
              },
              {
                  "id": 132565,
                  "name": "Kondagaon",
                  "latitude": "19.59083000",
                  "longitude": "81.66400000"
              },
              {
                  "id": 132581,
                  "name": "Korba",
                  "latitude": "22.50000000",
                  "longitude": "82.60000000"
              },
              {
                  "id": 132583,
                  "name": "Koria",
                  "latitude": "23.48326000",
                  "longitude": "82.15037000"
              },
              {
                  "id": 132612,
                  "name": "Kota",
                  "latitude": "22.29507000",
                  "longitude": "82.02366000"
              },
              {
                  "id": 132596,
                  "name": "Kotaparh",
                  "latitude": "19.14256000",
                  "longitude": "82.32536000"
              },
              {
                  "id": 132641,
                  "name": "Kumhari",
                  "latitude": "21.26667000",
                  "longitude": "81.51667000"
              },
              {
                  "id": 132661,
                  "name": "Kurud",
                  "latitude": "20.83073000",
                  "longitude": "81.72212000"
              },
              {
                  "id": 132777,
                  "name": "Lormi",
                  "latitude": "22.27434000",
                  "longitude": "81.70181000"
              },
              {
                  "id": 132827,
                  "name": "Mahasamund",
                  "latitude": "21.20000000",
                  "longitude": "82.50000000"
              },
              {
                  "id": 133031,
                  "name": "Mungeli",
                  "latitude": "22.06566000",
                  "longitude": "81.68543000"
              },
              {
                  "id": 133163,
                  "name": "Narayanpur",
                  "latitude": "19.60426000",
                  "longitude": "81.08119000"
              },
              {
                  "id": 133168,
                  "name": "Narharpur",
                  "latitude": "20.44892000",
                  "longitude": "81.62004000"
              },
              {
                  "id": 133346,
                  "name": "Pandaria",
                  "latitude": "22.22495000",
                  "longitude": "81.40994000"
              },
              {
                  "id": 133540,
                  "name": "Pandatarai",
                  "latitude": "22.18714000",
                  "longitude": "81.32815000"
              },
              {
                  "id": 133375,
                  "name": "Pasan",
                  "latitude": "22.84412000",
                  "longitude": "82.19823000"
              },
              {
                  "id": 133552,
                  "name": "Patan",
                  "latitude": "21.03333000",
                  "longitude": "81.53333000"
              },
              {
                  "id": 133379,
                  "name": "Pathalgaon",
                  "latitude": "22.55656000",
                  "longitude": "83.46355000"
              },
              {
                  "id": 133405,
                  "name": "Pendra",
                  "latitude": "22.77548000",
                  "longitude": "81.95968000"
              },
              {
                  "id": 133463,
                  "name": "Pithora",
                  "latitude": "21.25021000",
                  "longitude": "82.51707000"
              },
              {
                  "id": 133587,
                  "name": "Raigarh",
                  "latitude": "22.08582000",
                  "longitude": "83.30603000"
              },
              {
                  "id": 133590,
                  "name": "Raipur",
                  "latitude": "21.25621000",
                  "longitude": "81.69022000"
              },
              {
                  "id": 133668,
                  "name": "Raj Nandgaon",
                  "latitude": "21.16667000",
                  "longitude": "81.00000000"
              },
              {
                  "id": 133711,
                  "name": "Ramanuj Ganj",
                  "latitude": "23.80637000",
                  "longitude": "83.69981000"
              },
              {
                  "id": 133616,
                  "name": "Ratanpur",
                  "latitude": "22.28660000",
                  "longitude": "82.16823000"
              },
              {
                  "id": 133761,
                  "name": "Sakti",
                  "latitude": "22.02662000",
                  "longitude": "82.96091000"
              },
              {
                  "id": 133801,
                  "name": "Saraipali",
                  "latitude": "21.31530000",
                  "longitude": "83.00629000"
              },
              {
                  "id": 134077,
                  "name": "Sarangarh",
                  "latitude": "21.58614000",
                  "longitude": "83.07850000"
              },
              {
                  "id": 133845,
                  "name": "Seorinarayan",
                  "latitude": "21.72055000",
                  "longitude": "82.59344000"
              },
              {
                  "id": 133940,
                  "name": "Simga",
                  "latitude": "21.62810000",
                  "longitude": "81.70376000"
              },
              {
                  "id": 134051,
                  "name": "Surguja",
                  "latitude": "22.89624000",
                  "longitude": "83.09631000"
              },
              {
                  "id": 134099,
                  "name": "Takhatpur",
                  "latitude": "22.12915000",
                  "longitude": "81.86959000"
              },
              {
                  "id": 134273,
                  "name": "Umarkot",
                  "latitude": "19.66529000",
                  "longitude": "82.20629000"
              },
              {
                  "id": 134299,
                  "name": "Uttar Bastar Kanker",
                  "latitude": "20.20000000",
                  "longitude": "81.10000000"
              }
          ]
      },
      {
          "id": 4033,
          "name": "Dadra and Nagar Haveli and Daman and Diu",
          "state_code": "DH",
          "latitude": "20.39737360",
          "longitude": "72.83279910",
          "type": "Union territory",
          "cities": [
              {
                  "id": 134459,
                  "name": "Amli",
                  "latitude": "20.28333000",
                  "longitude": "73.01667000"
              },
              {
                  "id": 131639,
                  "name": "Dadra",
                  "latitude": "20.32504000",
                  "longitude": "72.96618000"
              },
              {
                  "id": 131640,
                  "name": "Dadra & Nagar Haveli",
                  "latitude": "20.20651000",
                  "longitude": "73.00811000"
              },
              {
                  "id": 131649,
                  "name": "Daman",
                  "latitude": "20.41431000",
                  "longitude": "72.83236000"
              },
              {
                  "id": 131779,
                  "name": "Diu",
                  "latitude": "20.72081000",
                  "longitude": "70.93989000"
              },
              {
                  "id": 133937,
                  "name": "Silvassa",
                  "latitude": "20.27386000",
                  "longitude": "72.99673000"
              }
          ]
      },
      {
          "id": 4021,
          "name": "Delhi",
          "state_code": "DL",
          "latitude": "28.70405920",
          "longitude": "77.10249020",
          "type": "Union territory",
          "cities": [
              {
                  "id": 57655,
                  "name": "Alipur",
                  "latitude": "28.79862000",
                  "longitude": "77.13314000"
              },
              {
                  "id": 57909,
                  "name": "Bawana",
                  "latitude": "28.79820000",
                  "longitude": "77.03431000"
              },
              {
                  "id": 58171,
                  "name": "Central Delhi",
                  "latitude": "28.64857000",
                  "longitude": "77.21895000"
              },
              {
                  "id": 131679,
                  "name": "Delhi",
                  "latitude": "28.65195000",
                  "longitude": "77.23149000"
              },
              {
                  "id": 131687,
                  "name": "Deoli",
                  "latitude": "28.50254000",
                  "longitude": "77.23117000"
              },
              {
                  "id": 131821,
                  "name": "East Delhi",
                  "latitude": "28.66242000",
                  "longitude": "77.29122000"
              },
              {
                  "id": 132406,
                  "name": "Karol Bagh",
                  "latitude": "28.65136000",
                  "longitude": "77.19072000"
              },
              {
                  "id": 133126,
                  "name": "Najafgarh",
                  "latitude": "28.60922000",
                  "longitude": "76.97982000"
              },
              {
                  "id": 133269,
                  "name": "Nangloi Jat",
                  "latitude": "28.67957000",
                  "longitude": "77.06799000"
              },
              {
                  "id": 133165,
                  "name": "Narela",
                  "latitude": "28.85267000",
                  "longitude": "77.09288000"
              },
              {
                  "id": 133210,
                  "name": "New Delhi",
                  "latitude": "28.63576000",
                  "longitude": "77.22445000"
              },
              {
                  "id": 133234,
                  "name": "North Delhi",
                  "latitude": "28.66920000",
                  "longitude": "77.22273000"
              },
              {
                  "id": 133236,
                  "name": "North East Delhi",
                  "latitude": "28.68690000",
                  "longitude": "77.30195000"
              },
              {
                  "id": 133243,
                  "name": "North West Delhi",
                  "latitude": "28.70113000",
                  "longitude": "77.10154000"
              },
              {
                  "id": 133461,
                  "name": "Pitampura",
                  "latitude": "28.68964000",
                  "longitude": "77.13126000"
              },
              {
                  "id": 133645,
                  "name": "Rohini",
                  "latitude": "28.74322000",
                  "longitude": "77.06778000"
              },
              {
                  "id": 134007,
                  "name": "South Delhi",
                  "latitude": "28.53009000",
                  "longitude": "77.25174000"
              },
              {
                  "id": 134012,
                  "name": "South West Delhi",
                  "latitude": "28.58060000",
                  "longitude": "77.06720000"
              },
              {
                  "id": 134404,
                  "name": "West Delhi",
                  "latitude": "28.65655000",
                  "longitude": "77.10068000"
              }
          ]
      },
      {
          "id": 4009,
          "name": "Goa",
          "state_code": "GA",
          "latitude": "15.29932650",
          "longitude": "74.12399600",
          "type": "state",
          "cities": [
              {
                  "id": 57638,
                  "name": "Aldona",
                  "latitude": "15.59337000",
                  "longitude": "73.87482000"
              },
              {
                  "id": 57727,
                  "name": "Arambol",
                  "latitude": "15.68681000",
                  "longitude": "73.70449000"
              },
              {
                  "id": 57795,
                  "name": "Baga",
                  "latitude": "15.56517000",
                  "longitude": "73.75517000"
              },
              {
                  "id": 57836,
                  "name": "Bambolim",
                  "latitude": "15.46361000",
                  "longitude": "73.85310000"
              },
              {
                  "id": 57845,
                  "name": "Bandora",
                  "latitude": "15.40823000",
                  "longitude": "73.98129000"
              },
              {
                  "id": 57932,
                  "name": "Benaulim",
                  "latitude": "15.26435000",
                  "longitude": "73.92812000"
              },
              {
                  "id": 58165,
                  "name": "Calangute",
                  "latitude": "15.54390000",
                  "longitude": "73.75530000"
              },
              {
                  "id": 58167,
                  "name": "Candolim",
                  "latitude": "15.51807000",
                  "longitude": "73.76259000"
              },
              {
                  "id": 58169,
                  "name": "Carapur",
                  "latitude": "15.56588000",
                  "longitude": "73.98713000"
              },
              {
                  "id": 58170,
                  "name": "Cavelossim",
                  "latitude": "15.17255000",
                  "longitude": "73.94194000"
              },
              {
                  "id": 131542,
                  "name": "Chicalim",
                  "latitude": "15.39835000",
                  "longitude": "73.84216000"
              },
              {
                  "id": 131559,
                  "name": "Chinchinim",
                  "latitude": "15.21447000",
                  "longitude": "73.97555000"
              },
              {
                  "id": 131622,
                  "name": "Colovale",
                  "latitude": "15.63522000",
                  "longitude": "73.82426000"
              },
              {
                  "id": 131623,
                  "name": "Colva",
                  "latitude": "15.27976000",
                  "longitude": "73.92285000"
              },
              {
                  "id": 131625,
                  "name": "Cortalim",
                  "latitude": "15.40247000",
                  "longitude": "73.90881000"
              },
              {
                  "id": 131630,
                  "name": "Cuncolim",
                  "latitude": "15.17730000",
                  "longitude": "73.99392000"
              },
              {
                  "id": 131631,
                  "name": "Curchorem",
                  "latitude": "15.26349000",
                  "longitude": "74.10875000"
              },
              {
                  "id": 131632,
                  "name": "Curti",
                  "latitude": "15.41667000",
                  "longitude": "74.01667000"
              },
              {
                  "id": 131672,
                  "name": "Davorlim",
                  "latitude": "15.27221000",
                  "longitude": "73.99242000"
              },
              {
                  "id": 131764,
                  "name": "Dicholi",
                  "latitude": "15.59319000",
                  "longitude": "73.94571000"
              },
              {
                  "id": 131960,
                  "name": "Goa Velha",
                  "latitude": "15.44384000",
                  "longitude": "73.88572000"
              },
              {
                  "id": 132015,
                  "name": "Guirim",
                  "latitude": "15.57552000",
                  "longitude": "73.80722000"
              },
              {
                  "id": 132297,
                  "name": "Jua",
                  "latitude": "15.53070000",
                  "longitude": "73.95047000"
              },
              {
                  "id": 132705,
                  "name": "Kankon",
                  "latitude": "15.02698000",
                  "longitude": "74.04617000"
              },
              {
                  "id": 132811,
                  "name": "Madgaon",
                  "latitude": "15.27501000",
                  "longitude": "73.95786000"
              },
              {
                  "id": 133086,
                  "name": "Mapuca",
                  "latitude": "15.59154000",
                  "longitude": "73.80898000"
              },
              {
                  "id": 132997,
                  "name": "Morjim",
                  "latitude": "15.63097000",
                  "longitude": "73.73903000"
              },
              {
                  "id": 132998,
                  "name": "Mormugao",
                  "latitude": "15.38914000",
                  "longitude": "73.81491000"
              },
              {
                  "id": 133185,
                  "name": "Navelim",
                  "latitude": "15.53333000",
                  "longitude": "73.98333000"
              },
              {
                  "id": 133238,
                  "name": "North Goa",
                  "latitude": "15.53397000",
                  "longitude": "73.96408000"
              },
              {
                  "id": 133330,
                  "name": "Palle",
                  "latitude": "15.46667000",
                  "longitude": "74.08333000"
              },
              {
                  "id": 133342,
                  "name": "Panaji",
                  "latitude": "15.49574000",
                  "longitude": "73.82624000"
              },
              {
                  "id": 133422,
                  "name": "Pernem",
                  "latitude": "15.72300000",
                  "longitude": "73.79511000"
              },
              {
                  "id": 133471,
                  "name": "Ponda",
                  "latitude": "15.40341000",
                  "longitude": "74.01519000"
              },
              {
                  "id": 133572,
                  "name": "Quepem",
                  "latitude": "15.21280000",
                  "longitude": "74.07720000"
              },
              {
                  "id": 133573,
                  "name": "Queula",
                  "latitude": "15.39011000",
                  "longitude": "73.98557000"
              },
              {
                  "id": 133585,
                  "name": "Raia",
                  "latitude": "15.30499000",
                  "longitude": "73.97096000"
              },
              {
                  "id": 133764,
                  "name": "Saligao",
                  "latitude": "15.55359000",
                  "longitude": "73.79036000"
              },
              {
                  "id": 133777,
                  "name": "Sancoale",
                  "latitude": "15.37794000",
                  "longitude": "73.90352000"
              },
              {
                  "id": 133786,
                  "name": "Sanguem",
                  "latitude": "15.22901000",
                  "longitude": "74.15149000"
              },
              {
                  "id": 133791,
                  "name": "Sanquelim",
                  "latitude": "15.56422000",
                  "longitude": "74.00799000"
              },
              {
                  "id": 133795,
                  "name": "Sanvordem",
                  "latitude": "15.26269000",
                  "longitude": "74.11965000"
              },
              {
                  "id": 133850,
                  "name": "Serula",
                  "latitude": "15.54774000",
                  "longitude": "73.84329000"
              },
              {
                  "id": 133987,
                  "name": "Solim",
                  "latitude": "15.61521000",
                  "longitude": "73.76740000"
              },
              {
                  "id": 134010,
                  "name": "South Goa",
                  "latitude": "15.20425000",
                  "longitude": "74.16733000"
              },
              {
                  "id": 134101,
                  "name": "Taleigao",
                  "latitude": "15.46915000",
                  "longitude": "73.83285000"
              },
              {
                  "id": 134311,
                  "name": "Vagator",
                  "latitude": "15.59766000",
                  "longitude": "73.74496000"
              },
              {
                  "id": 134321,
                  "name": "Valpoy",
                  "latitude": "15.53239000",
                  "longitude": "74.13671000"
              },
              {
                  "id": 134329,
                  "name": "Varca",
                  "latitude": "15.23237000",
                  "longitude": "73.94311000"
              },
              {
                  "id": 134333,
                  "name": "Vasco da Gama",
                  "latitude": "15.39585000",
                  "longitude": "73.81568000"
              }
          ]
      },
      {
          "id": 4030,
          "name": "Gujarat",
          "state_code": "GJ",
          "latitude": "22.25865200",
          "longitude": "71.19238050",
          "type": "state",
          "cities": [
              {
                  "id": 57588,
                  "name": "Abrama",
                  "latitude": "20.85865000",
                  "longitude": "72.90648000"
              },
              {
                  "id": 57591,
                  "name": "Adalaj",
                  "latitude": "23.16453000",
                  "longitude": "72.58107000"
              },
              {
                  "id": 147572,
                  "name": "Agol",
                  "latitude": "23.15000000",
                  "longitude": "72.26666667"
              },
              {
                  "id": 57606,
                  "name": "Ahmedabad",
                  "latitude": "23.02579000",
                  "longitude": "72.58727000"
              },
              {
                  "id": 57608,
                  "name": "Ahwa",
                  "latitude": "20.75718000",
                  "longitude": "73.68626000"
              },
              {
                  "id": 147573,
                  "name": "Akrund",
                  "latitude": "23.28333333",
                  "longitude": "73.11666667"
              },
              {
                  "id": 57683,
                  "name": "Amod",
                  "latitude": "21.99317000",
                  "longitude": "72.87047000"
              },
              {
                  "id": 147574,
                  "name": "Amod",
                  "latitude": "21.99100000",
                  "longitude": "72.87100000"
              },
              {
                  "id": 57685,
                  "name": "Amreli",
                  "latitude": "21.50789000",
                  "longitude": "71.18323000"
              },
              {
                  "id": 57688,
                  "name": "Amroli",
                  "latitude": "21.25084000",
                  "longitude": "72.83878000"
              },
              {
                  "id": 57695,
                  "name": "Anand",
                  "latitude": "22.40000000",
                  "longitude": "72.75000000"
              },
              {
                  "id": 57709,
                  "name": "Anjar",
                  "latitude": "23.11316000",
                  "longitude": "70.02671000"
              },
              {
                  "id": 57710,
                  "name": "Ankleshwar",
                  "latitude": "21.63236000",
                  "longitude": "72.99001000"
              },
              {
                  "id": 58104,
                  "name": "Babra",
                  "latitude": "21.84577000",
                  "longitude": "71.30544000"
              },
              {
                  "id": 142125,
                  "name": "Bagasara",
                  "latitude": "21.48333333",
                  "longitude": "70.95000000"
              },
              {
                  "id": 57799,
                  "name": "Bagasra",
                  "latitude": "21.48719000",
                  "longitude": "70.95516000"
              },
              {
                  "id": 147575,
                  "name": "Bakharla",
                  "latitude": "21.73151700",
                  "longitude": "69.63529600"
              },
              {
                  "id": 147576,
                  "name": "Balagam",
                  "latitude": "21.36666667",
                  "longitude": "70.10000000"
              },
              {
                  "id": 147577,
                  "name": "Balasinor",
                  "latitude": "22.95589100",
                  "longitude": "73.33649900"
              },
              {
                  "id": 147578,
                  "name": "Balisana",
                  "latitude": "23.81643600",
                  "longitude": "72.25753600"
              },
              {
                  "id": 147579,
                  "name": "Bamanbore",
                  "latitude": "22.41666667",
                  "longitude": "71.01666667"
              },
              {
                  "id": 57858,
                  "name": "Banas Kantha",
                  "latitude": "24.25000000",
                  "longitude": "72.50000000"
              },
              {
                  "id": 147580,
                  "name": "Bandia",
                  "latitude": "23.39604000",
                  "longitude": "69.01155000"
              },
              {
                  "id": 58135,
                  "name": "Bantva",
                  "latitude": "21.48815000",
                  "longitude": "70.07576000"
              },
              {
                  "id": 58140,
                  "name": "Bardoli",
                  "latitude": "21.12297000",
                  "longitude": "73.11151000"
              },
              {
                  "id": 57911,
                  "name": "Bedi",
                  "latitude": "22.50143000",
                  "longitude": "70.04363000"
              },
              {
                  "id": 57948,
                  "name": "Bhachau",
                  "latitude": "23.29858000",
                  "longitude": "70.34279000"
              },
              {
                  "id": 147581,
                  "name": "Bhadran",
                  "latitude": "22.35930000",
                  "longitude": "72.90050000"
              },
              {
                  "id": 147582,
                  "name": "Bhandu",
                  "latitude": "23.70000000",
                  "longitude": "72.36666667"
              },
              {
                  "id": 58014,
                  "name": "Bhanvad",
                  "latitude": "21.93053000",
                  "longitude": "69.78081000"
              },
              {
                  "id": 57967,
                  "name": "Bharuch",
                  "latitude": "21.69482000",
                  "longitude": "72.98050000"
              },
              {
                  "id": 147583,
                  "name": "Bhatha",
                  "latitude": "21.18333333",
                  "longitude": "72.76666667"
              },
              {
                  "id": 57972,
                  "name": "Bhavnagar",
                  "latitude": "21.76287000",
                  "longitude": "72.15331000"
              },
              {
                  "id": 58017,
                  "name": "Bhayavadar",
                  "latitude": "21.85523000",
                  "longitude": "70.24791000"
              },
              {
                  "id": 147584,
                  "name": "Bhildi",
                  "latitude": "24.18333333",
                  "longitude": "72.03333333"
              },
              {
                  "id": 147585,
                  "name": "Bhojpur Dharampur",
                  "latitude": "23.25000000",
                  "longitude": "69.67000000"
              },
              {
                  "id": 58002,
                  "name": "Bhuj",
                  "latitude": "23.25397000",
                  "longitude": "69.66928000"
              },
              {
                  "id": 58045,
                  "name": "Bilimora",
                  "latitude": "20.76957000",
                  "longitude": "72.96134000"
              },
              {
                  "id": 58046,
                  "name": "Bilkha",
                  "latitude": "21.44150000",
                  "longitude": "70.60063000"
              },
              {
                  "id": 58084,
                  "name": "Borsad",
                  "latitude": "22.40788000",
                  "longitude": "72.89817000"
              },
              {
                  "id": 58085,
                  "name": "Botad",
                  "latitude": "22.16917000",
                  "longitude": "71.66671000"
              },
              {
                  "id": 58174,
                  "name": "Chaklasi",
                  "latitude": "22.65320000",
                  "longitude": "72.94497000"
              },
              {
                  "id": 58180,
                  "name": "Chalala",
                  "latitude": "21.41073000",
                  "longitude": "71.16621000"
              },
              {
                  "id": 147586,
                  "name": "Chaloda",
                  "latitude": "22.80000000",
                  "longitude": "72.45000000"
              },
              {
                  "id": 147587,
                  "name": "Champaner",
                  "latitude": "22.48590000",
                  "longitude": "73.53710000"
              },
              {
                  "id": 131595,
                  "name": "Chanasma",
                  "latitude": "23.71472000",
                  "longitude": "72.11279000"
              },
              {
                  "id": 131529,
                  "name": "Chhala",
                  "latitude": "23.30779000",
                  "longitude": "72.77404000"
              },
              {
                  "id": 131535,
                  "name": "Chhota Udepur",
                  "latitude": "22.30401000",
                  "longitude": "74.01580000"
              },
              {
                  "id": 131548,
                  "name": "Chikhli",
                  "latitude": "20.75751000",
                  "longitude": "73.06268000"
              },
              {
                  "id": 131582,
                  "name": "Chotila",
                  "latitude": "22.42347000",
                  "longitude": "71.19641000"
              },
              {
                  "id": 147588,
                  "name": "Chuda",
                  "latitude": "22.48333333",
                  "longitude": "71.68333333"
              },
              {
                  "id": 147589,
                  "name": "Dabhoda",
                  "latitude": "23.16666667",
                  "longitude": "72.73333333"
              },
              {
                  "id": 131635,
                  "name": "Dabhoi",
                  "latitude": "22.18333000",
                  "longitude": "73.43333000"
              },
              {
                  "id": 131642,
                  "name": "Dahegam",
                  "latitude": "23.16903000",
                  "longitude": "72.82161000"
              },
              {
                  "id": 142126,
                  "name": "Dahod",
                  "latitude": "22.52000000",
                  "longitude": "74.15000000"
              },
              {
                  "id": 131808,
                  "name": "Dakor",
                  "latitude": "22.75268000",
                  "longitude": "73.14967000"
              },
              {
                  "id": 131809,
                  "name": "Damnagar",
                  "latitude": "21.69232000",
                  "longitude": "71.51747000"
              },
              {
                  "id": 147590,
                  "name": "Dandi",
                  "latitude": "21.32988000",
                  "longitude": "72.62484000"
              },
              {
                  "id": 142127,
                  "name": "Dangs (India)",
                  "latitude": "20.75000000",
                  "longitude": "73.75000000"
              },
              {
                  "id": 147591,
                  "name": "Danta",
                  "latitude": "24.18861111",
                  "longitude": "72.76583333"
              },
              {
                  "id": 131673,
                  "name": "Dayapar",
                  "latitude": "23.63371000",
                  "longitude": "68.90192000"
              },
              {
                  "id": 131680,
                  "name": "Delvada",
                  "latitude": "20.77544000",
                  "longitude": "71.04646000"
              },
              {
                  "id": 142128,
                  "name": "Delwada",
                  "latitude": "20.78330000",
                  "longitude": "71.05000000"
              },
              {
                  "id": 147592,
                  "name": "Detroj",
                  "latitude": "23.33333333",
                  "longitude": "72.18333333"
              },
              {
                  "id": 131704,
                  "name": "Devbhumi Dwarka",
                  "latitude": "22.20253000",
                  "longitude": "69.65498000"
              },
              {
                  "id": 131705,
                  "name": "Devgadh Bariya",
                  "latitude": "22.70517000",
                  "longitude": "73.90882000"
              },
              {
                  "id": 131716,
                  "name": "Dhandhuka",
                  "latitude": "22.38185000",
                  "longitude": "71.98664000"
              },
              {
                  "id": 131717,
                  "name": "Dhanera",
                  "latitude": "24.50967000",
                  "longitude": "72.02343000"
              },
              {
                  "id": 147593,
                  "name": "Dhansura",
                  "latitude": "23.35000000",
                  "longitude": "73.20000000"
              },
              {
                  "id": 131719,
                  "name": "Dharampur",
                  "latitude": "20.53693000",
                  "longitude": "73.17368000"
              },
              {
                  "id": 147594,
                  "name": "Dharasana",
                  "latitude": "20.68333333",
                  "longitude": "72.91666667"
              },
              {
                  "id": 131755,
                  "name": "Dhari",
                  "latitude": "21.32855000",
                  "longitude": "71.02645000"
              },
              {
                  "id": 147595,
                  "name": "Dhasa",
                  "latitude": "21.80000000",
                  "longitude": "71.51666667"
              },
              {
                  "id": 131738,
                  "name": "Dhola",
                  "latitude": "21.88129000",
                  "longitude": "71.77269000"
              },
              {
                  "id": 147596,
                  "name": "Dholera",
                  "latitude": "22.24800000",
                  "longitude": "72.19500000"
              },
              {
                  "id": 131739,
                  "name": "Dholka",
                  "latitude": "22.72732000",
                  "longitude": "72.44128000"
              },
              {
                  "id": 131741,
                  "name": "Dhoraji",
                  "latitude": "21.73359000",
                  "longitude": "70.45004000"
              },
              {
                  "id": 131743,
                  "name": "Dhrangadhra",
                  "latitude": "22.99167000",
                  "longitude": "71.46793000"
              },
              {
                  "id": 131742,
                  "name": "Dhrol",
                  "latitude": "22.56700000",
                  "longitude": "70.41769000"
              },
              {
                  "id": 131747,
                  "name": "Dhuwaran",
                  "latitude": "22.23779000",
                  "longitude": "72.75910000"
              },
              {
                  "id": 131817,
                  "name": "Disa",
                  "latitude": "24.25612000",
                  "longitude": "72.17928000"
              },
              {
                  "id": 131782,
                  "name": "Dohad",
                  "latitude": "22.90000000",
                  "longitude": "74.00000000"
              },
              {
                  "id": 147597,
                  "name": "Dumkhal",
                  "latitude": "21.73960000",
                  "longitude": "73.84490000"
              },
              {
                  "id": 131800,
                  "name": "Dungarpur",
                  "latitude": "21.28777000",
                  "longitude": "71.75560000"
              },
              {
                  "id": 131803,
                  "name": "Dwarka",
                  "latitude": "22.23944000",
                  "longitude": "68.96778000"
              },
              {
                  "id": 131888,
                  "name": "Gadhada",
                  "latitude": "21.96957000",
                  "longitude": "71.57828000"
              },
              {
                  "id": 131899,
                  "name": "Gandevi",
                  "latitude": "20.81214000",
                  "longitude": "72.99811000"
              },
              {
                  "id": 132046,
                  "name": "Gandhidham",
                  "latitude": "23.08333000",
                  "longitude": "70.13333000"
              },
              {
                  "id": 131900,
                  "name": "Gandhinagar",
                  "latitude": "23.21667000",
                  "longitude": "72.68333000"
              },
              {
                  "id": 131925,
                  "name": "Gariadhar",
                  "latitude": "21.53889000",
                  "longitude": "71.57737000"
              },
              {
                  "id": 147598,
                  "name": "Ghodasar",
                  "latitude": "24.45000000",
                  "longitude": "71.85000000"
              },
              {
                  "id": 131944,
                  "name": "Ghogha",
                  "latitude": "21.68813000",
                  "longitude": "72.27630000"
              },
              {
                  "id": 131958,
                  "name": "Gir Somnath",
                  "latitude": "20.91287000",
                  "longitude": "70.36710000"
              },
              {
                  "id": 131964,
                  "name": "Godhra",
                  "latitude": "22.77547000",
                  "longitude": "73.61488000"
              },
              {
                  "id": 131982,
                  "name": "Gondal",
                  "latitude": "21.96074000",
                  "longitude": "70.80255000"
              },
              {
                  "id": 147599,
                  "name": "Gorwa",
                  "latitude": "22.33010000",
                  "longitude": "73.16110000"
              },
              {
                  "id": 147600,
                  "name": "Halenda",
                  "latitude": "22.08818500",
                  "longitude": "71.05171000"
              },
              {
                  "id": 132139,
                  "name": "Halol",
                  "latitude": "22.50321000",
                  "longitude": "73.47242000"
              },
              {
                  "id": 132060,
                  "name": "Halvad",
                  "latitude": "23.01516000",
                  "longitude": "71.18029000"
              },
              {
                  "id": 132065,
                  "name": "Hansot",
                  "latitude": "21.58496000",
                  "longitude": "72.80764000"
              },
              {
                  "id": 132143,
                  "name": "Harij",
                  "latitude": "23.69356000",
                  "longitude": "71.90700000"
              },
              {
                  "id": 147601,
                  "name": "Harsol",
                  "latitude": "23.36000000",
                  "longitude": "73.02000000"
              },
              {
                  "id": 147602,
                  "name": "Hathuran",
                  "latitude": "21.50000000",
                  "longitude": "72.97000000"
              },
              {
                  "id": 132096,
                  "name": "Himatnagar",
                  "latitude": "23.59893000",
                  "longitude": "72.96602000"
              },
              {
                  "id": 147603,
                  "name": "Idar",
                  "latitude": "23.83000000",
                  "longitude": "73.00000000"
              },
              {
                  "id": 147604,
                  "name": "Jakhau",
                  "latitude": "23.21861111",
                  "longitude": "68.71694444"
              },
              {
                  "id": 142129,
                  "name": "Jalalpore",
                  "latitude": "20.94910000",
                  "longitude": "72.91360000"
              },
              {
                  "id": 132219,
                  "name": "Jalalpur",
                  "latitude": "20.94896000",
                  "longitude": "72.89829000"
              },
              {
                  "id": 147605,
                  "name": "Jalia",
                  "latitude": "21.80000000",
                  "longitude": "70.25000000"
              },
              {
                  "id": 147606,
                  "name": "Jambuda",
                  "latitude": "22.51666667",
                  "longitude": "70.21666667"
              },
              {
                  "id": 132226,
                  "name": "Jambusar",
                  "latitude": "22.05236000",
                  "longitude": "72.80074000"
              },
              {
                  "id": 132230,
                  "name": "Jamnagar",
                  "latitude": "22.47292000",
                  "longitude": "70.06673000"
              },
              {
                  "id": 147607,
                  "name": "Jarod",
                  "latitude": "22.43300000",
                  "longitude": "73.33300000"
              },
              {
                  "id": 132243,
                  "name": "Jasdan",
                  "latitude": "22.03709000",
                  "longitude": "71.20794000"
              },
              {
                  "id": 147608,
                  "name": "Jetalpur",
                  "latitude": "22.88333333",
                  "longitude": "72.60000000"
              },
              {
                  "id": 132261,
                  "name": "Jetalsar",
                  "latitude": "21.70891000",
                  "longitude": "70.57695000"
              },
              {
                  "id": 132262,
                  "name": "Jetpur",
                  "latitude": "21.75482000",
                  "longitude": "70.62347000"
              },
              {
                  "id": 147609,
                  "name": "Jetpur (Navagadh)",
                  "latitude": "21.75482000",
                  "longitude": "70.62347000"
              },
              {
                  "id": 147610,
                  "name": "Jhalod",
                  "latitude": "23.10027778",
                  "longitude": "74.15611111"
              },
              {
                  "id": 132272,
                  "name": "Jhulasan",
                  "latitude": "23.32860000",
                  "longitude": "72.47314000"
              },
              {
                  "id": 132285,
                  "name": "Jodhpur",
                  "latitude": "21.90174000",
                  "longitude": "70.03270000"
              },
              {
                  "id": 147611,
                  "name": "Jodhpur (Ahmedabad)",
                  "latitude": "21.88000000",
                  "longitude": "70.03000000"
              },
              {
                  "id": 142130,
                  "name": "Jodia",
                  "latitude": "22.71667000",
                  "longitude": "70.28333000"
              },
              {
                  "id": 132287,
                  "name": "Jodiya Bandar",
                  "latitude": "22.71667000",
                  "longitude": "70.28333000"
              },
              {
                  "id": 132317,
                  "name": "Junagadh",
                  "latitude": "21.25000000",
                  "longitude": "70.33333000"
              },
              {
                  "id": 132321,
                  "name": "Kachchh",
                  "latitude": "23.58333000",
                  "longitude": "70.00000000"
              },
              {
                  "id": 147612,
                  "name": "Kachholi",
                  "latitude": "20.83333333",
                  "longitude": "72.96666667"
              },
              {
                  "id": 132327,
                  "name": "Kadi",
                  "latitude": "23.29908000",
                  "longitude": "72.33362000"
              },
              {
                  "id": 132329,
                  "name": "Kadod",
                  "latitude": "21.21717000",
                  "longitude": "73.21972000"
              },
              {
                  "id": 132689,
                  "name": "Kalavad",
                  "latitude": "22.20789000",
                  "longitude": "70.38343000"
              },
              {
                  "id": 132682,
                  "name": "Kalol",
                  "latitude": "22.60777000",
                  "longitude": "73.46272000"
              },
              {
                  "id": 132698,
                  "name": "Kandla",
                  "latitude": "23.03333000",
                  "longitude": "70.21667000"
              },
              {
                  "id": 147613,
                  "name": "Kandla port",
                  "latitude": "23.03000000",
                  "longitude": "70.22000000"
              },
              {
                  "id": 132708,
                  "name": "Kanodar",
                  "latitude": "24.08932000",
                  "longitude": "72.39354000"
              },
              {
                  "id": 132390,
                  "name": "Kapadvanj",
                  "latitude": "23.02302000",
                  "longitude": "73.07113000"
              },
              {
                  "id": 132394,
                  "name": "Karamsad",
                  "latitude": "22.54243000",
                  "longitude": "72.90392000"
              },
              {
                  "id": 147614,
                  "name": "Kariana",
                  "latitude": "21.88333333",
                  "longitude": "71.35000000"
              },
              {
                  "id": 147615,
                  "name": "Karjan",
                  "latitude": "22.05304167",
                  "longitude": "73.12351389"
              },
              {
                  "id": 132723,
                  "name": "Kathor",
                  "latitude": "21.28854000",
                  "longitude": "72.94070000"
              },
              {
                  "id": 132425,
                  "name": "Katpur",
                  "latitude": "21.05869000",
                  "longitude": "71.79457000"
              },
              {
                  "id": 132434,
                  "name": "Kawant",
                  "latitude": "22.09282000",
                  "longitude": "74.05078000"
              },
              {
                  "id": 147616,
                  "name": "Kayavarohan",
                  "latitude": "22.06700000",
                  "longitude": "73.25000000"
              },
              {
                  "id": 147617,
                  "name": "Kerwada",
                  "latitude": "21.90000000",
                  "longitude": "72.85000000"
              },
              {
                  "id": 132446,
                  "name": "Keshod",
                  "latitude": "21.30328000",
                  "longitude": "70.24861000"
              },
              {
                  "id": 142132,
                  "name": "Khambhalia",
                  "latitude": "22.20000000",
                  "longitude": "69.65000000"
              },
              {
                  "id": 132462,
                  "name": "Khambhat",
                  "latitude": "22.31744000",
                  "longitude": "72.61916000"
              },
              {
                  "id": 147618,
                  "name": "Khavda",
                  "latitude": "23.85000000",
                  "longitude": "69.72000000"
              },
              {
                  "id": 132488,
                  "name": "Kheda",
                  "latitude": "22.75000000",
                  "longitude": "72.83333000"
              },
              {
                  "id": 132489,
                  "name": "Khedbrahma",
                  "latitude": "24.02990000",
                  "longitude": "73.04632000"
              },
              {
                  "id": 147619,
                  "name": "Khedoi",
                  "latitude": "23.05927778",
                  "longitude": "69.91895556"
              },
              {
                  "id": 147620,
                  "name": "Kherali",
                  "latitude": "22.68333333",
                  "longitude": "71.60000000"
              },
              {
                  "id": 132494,
                  "name": "Kheralu",
                  "latitude": "23.88534000",
                  "longitude": "72.61869000"
              },
              {
                  "id": 132547,
                  "name": "Kodinar",
                  "latitude": "20.79393000",
                  "longitude": "70.70216000"
              },
              {
                  "id": 132588,
                  "name": "Kosamba",
                  "latitude": "21.46202000",
                  "longitude": "72.95842000"
              },
              {
                  "id": 147621,
                  "name": "Kothara",
                  "latitude": "23.13300000",
                  "longitude": "68.93200000"
              },
              {
                  "id": 147622,
                  "name": "Kotharia",
                  "latitude": "22.23000000",
                  "longitude": "70.81000000"
              },
              {
                  "id": 147623,
                  "name": "Kukarmunda",
                  "latitude": "21.51666667",
                  "longitude": "74.13333333"
              },
              {
                  "id": 147624,
                  "name": "Kukma",
                  "latitude": "23.21782200",
                  "longitude": "69.77792200"
              },
              {
                  "id": 132647,
                  "name": "Kundla",
                  "latitude": "21.34222000",
                  "longitude": "71.30633000"
              },
              {
                  "id": 142133,
                  "name": "Kutch district",
                  "latitude": "23.91500000",
                  "longitude": "70.36700000"
              },
              {
                  "id": 132670,
                  "name": "Kutiyana",
                  "latitude": "21.62410000",
                  "longitude": "69.98494000"
              },
              {
                  "id": 147628,
                  "name": "Ladol",
                  "latitude": "23.61666667",
                  "longitude": "72.73333333"
              },
              {
                  "id": 147625,
                  "name": "Lakhpat",
                  "latitude": "23.82611111",
                  "longitude": "68.77694444"
              },
              {
                  "id": 132747,
                  "name": "Lakhtar",
                  "latitude": "22.85683000",
                  "longitude": "71.78844000"
              },
              {
                  "id": 132797,
                  "name": "Lalpur",
                  "latitude": "22.19073000",
                  "longitude": "69.96351000"
              },
              {
                  "id": 147626,
                  "name": "Langhnaj",
                  "latitude": "23.45000000",
                  "longitude": "72.48333333"
              },
              {
                  "id": 132802,
                  "name": "Lathi",
                  "latitude": "21.72310000",
                  "longitude": "71.38843000"
              },
              {
                  "id": 132764,
                  "name": "Limbdi",
                  "latitude": "22.56507000",
                  "longitude": "71.81076000"
              },
              {
                  "id": 147627,
                  "name": "Limkheda",
                  "latitude": "22.81666667",
                  "longitude": "73.98333333"
              },
              {
                  "id": 132804,
                  "name": "Lunavada",
                  "latitude": "23.12841000",
                  "longitude": "73.61043000"
              },
              {
                  "id": 147629,
                  "name": "Madhavpur Ghed",
                  "latitude": "21.29929167",
                  "longitude": "70.02513889"
              },
              {
                  "id": 147630,
                  "name": "Madhi",
                  "latitude": "22.10000000",
                  "longitude": "69.10000000"
              },
              {
                  "id": 132831,
                  "name": "Mahemdavad",
                  "latitude": "22.82359000",
                  "longitude": "72.75551000"
              },
              {
                  "id": 132834,
                  "name": "Mahesana",
                  "latitude": "23.66667000",
                  "longitude": "72.50000000"
              },
              {
                  "id": 147631,
                  "name": "Mahisa",
                  "latitude": "22.85000000",
                  "longitude": "73.05000000"
              },
              {
                  "id": 132841,
                  "name": "Mahudha",
                  "latitude": "22.82082000",
                  "longitude": "72.94032000"
              },
              {
                  "id": 147632,
                  "name": "Mahuva",
                  "latitude": "21.08330000",
                  "longitude": "71.80000000"
              },
              {
                  "id": 147633,
                  "name": "Mahuva (Surat)",
                  "latitude": "21.02000000",
                  "longitude": "73.15000000"
              },
              {
                  "id": 133068,
                  "name": "Malpur",
                  "latitude": "23.36035000",
                  "longitude": "73.46595000"
              },
              {
                  "id": 133085,
                  "name": "Manavadar",
                  "latitude": "21.49813000",
                  "longitude": "70.13775000"
              },
              {
                  "id": 133073,
                  "name": "Mandal",
                  "latitude": "23.28865000",
                  "longitude": "71.91854000"
              },
              {
                  "id": 133076,
                  "name": "Mandvi",
                  "latitude": "22.83282000",
                  "longitude": "69.35237000"
              },
              {
                  "id": 142134,
                  "name": "Mandvi (Surat)",
                  "latitude": "21.25526000",
                  "longitude": "73.30412000"
              },
              {
                  "id": 133077,
                  "name": "Mangrol",
                  "latitude": "21.12268000",
                  "longitude": "70.11484000"
              },
              {
                  "id": 147634,
                  "name": "Mangrol (Junagadh)",
                  "latitude": "21.12000000",
                  "longitude": "70.12000000"
              },
              {
                  "id": 133081,
                  "name": "Mansa",
                  "latitude": "23.42564000",
                  "longitude": "72.65739000"
              },
              {
                  "id": 132960,
                  "name": "Meghraj",
                  "latitude": "23.49805000",
                  "longitude": "73.51352000"
              },
              {
                  "id": 142135,
                  "name": "Mehsana",
                  "latitude": "23.60000000",
                  "longitude": "72.40000000"
              },
              {
                  "id": 132966,
                  "name": "Mendarda",
                  "latitude": "21.32112000",
                  "longitude": "70.44078000"
              },
              {
                  "id": 147635,
                  "name": "Mithapur",
                  "latitude": "22.41000000",
                  "longitude": "69.00000000"
              },
              {
                  "id": 132978,
                  "name": "Modasa",
                  "latitude": "23.46253000",
                  "longitude": "73.29857000"
              },
              {
                  "id": 132993,
                  "name": "Morbi",
                  "latitude": "22.81731000",
                  "longitude": "70.83770000"
              },
              {
                  "id": 142136,
                  "name": "Morva (Hadaf)",
                  "latitude": "22.90469000",
                  "longitude": "73.83912000"
              },
              {
                  "id": 133000,
                  "name": "Morwa",
                  "latitude": "22.90469000",
                  "longitude": "73.83912000"
              },
              {
                  "id": 133029,
                  "name": "Mundra",
                  "latitude": "22.83918000",
                  "longitude": "69.72190000"
              },
              {
                  "id": 133106,
                  "name": "Nadiad",
                  "latitude": "22.69385000",
                  "longitude": "72.86157000"
              },
              {
                  "id": 147636,
                  "name": "Nadiad",
                  "latitude": "22.70000000",
                  "longitude": "72.87000000"
              },
              {
                  "id": 147637,
                  "name": "Nagwa",
                  "latitude": "25.69621000",
                  "longitude": "84.23590000"
              },
              {
                  "id": 147638,
                  "name": "Naldhara",
                  "latitude": "20.96666667",
                  "longitude": "73.16666667"
              },
              {
                  "id": 133133,
                  "name": "Naliya",
                  "latitude": "23.26058000",
                  "longitude": "68.82655000"
              },
              {
                  "id": 147639,
                  "name": "Nargol",
                  "latitude": "20.23300000",
                  "longitude": "72.75000000"
              },
              {
                  "id": 133169,
                  "name": "Narmada",
                  "latitude": "21.87377000",
                  "longitude": "73.49527000"
              },
              {
                  "id": 133170,
                  "name": "Naroda",
                  "latitude": "23.07041000",
                  "longitude": "72.65702000"
              },
              {
                  "id": 133187,
                  "name": "Navsari",
                  "latitude": "20.95000000",
                  "longitude": "72.92000000"
              },
              {
                  "id": 147640,
                  "name": "Nikora",
                  "latitude": "21.78586000",
                  "longitude": "73.13968000"
              },
              {
                  "id": 147641,
                  "name": "Nizar",
                  "latitude": "21.47727000",
                  "longitude": "74.19595000"
              },
              {
                  "id": 147642,
                  "name": "Odadar",
                  "latitude": "21.56666667",
                  "longitude": "69.66666667"
              },
              {
                  "id": 133297,
                  "name": "Okha",
                  "latitude": "22.46756000",
                  "longitude": "69.07002000"
              },
              {
                  "id": 133298,
                  "name": "Olpad",
                  "latitude": "21.33649000",
                  "longitude": "72.75161000"
              },
              {
                  "id": 133313,
                  "name": "Paddhari",
                  "latitude": "22.43654000",
                  "longitude": "70.60162000"
              },
              {
                  "id": 133315,
                  "name": "Padra",
                  "latitude": "22.23980000",
                  "longitude": "73.08451000"
              },
              {
                  "id": 133526,
                  "name": "Palanpur",
                  "latitude": "24.17128000",
                  "longitude": "72.43827000"
              },
              {
                  "id": 147643,
                  "name": "Palanswa",
                  "latitude": "23.46666667",
                  "longitude": "70.93333333"
              },
              {
                  "id": 133532,
                  "name": "Palitana",
                  "latitude": "21.52519000",
                  "longitude": "71.82309000"
              },
              {
                  "id": 133533,
                  "name": "Paliyad",
                  "latitude": "22.25757000",
                  "longitude": "71.56024000"
              },
              {
                  "id": 147645,
                  "name": "Palsana",
                  "latitude": "21.08000000",
                  "longitude": "72.98000000"
              },
              {
                  "id": 133536,
                  "name": "Panch Mahals",
                  "latitude": "22.75000000",
                  "longitude": "73.60000000"
              },
              {
                  "id": 142137,
                  "name": "Panchmahal district",
                  "latitude": "22.75000000",
                  "longitude": "73.60000000"
              },
              {
                  "id": 133548,
                  "name": "Pardi",
                  "latitude": "20.50870000",
                  "longitude": "72.94569000"
              },
              {
                  "id": 133362,
                  "name": "Parnera",
                  "latitude": "20.56101000",
                  "longitude": "72.94846000"
              },
              {
                  "id": 133376,
                  "name": "Patan",
                  "latitude": "23.70000000",
                  "longitude": "71.80000000"
              },
              {
                  "id": 142138,
                  "name": "Pavi Jetpur",
                  "latitude": "22.34472000",
                  "longitude": "73.84093000"
              },
              {
                  "id": 133429,
                  "name": "Petlad",
                  "latitude": "22.47681000",
                  "longitude": "72.79995000"
              },
              {
                  "id": 147646,
                  "name": "Pipavav",
                  "latitude": "20.96666667",
                  "longitude": "71.56666667"
              },
              {
                  "id": 147647,
                  "name": "Piplod",
                  "latitude": "22.81666667",
                  "longitude": "73.90000000"
              },
              {
                  "id": 133480,
                  "name": "Porbandar",
                  "latitude": "21.64219000",
                  "longitude": "69.60929000"
              },
              {
                  "id": 147648,
                  "name": "Prabhas Patan",
                  "latitude": "20.88808000",
                  "longitude": "70.40129000"
              },
              {
                  "id": 147649,
                  "name": "Prantij",
                  "latitude": "23.43841944",
                  "longitude": "72.85718056"
              },
              {
                  "id": 133657,
                  "name": "Radhanpur",
                  "latitude": "23.83238000",
                  "longitude": "71.60470000"
              },
              {
                  "id": 133679,
                  "name": "Rajkot",
                  "latitude": "22.33333000",
                  "longitude": "70.83333000"
              },
              {
                  "id": 133682,
                  "name": "Rajpipla",
                  "latitude": "21.86667000",
                  "longitude": "73.50000000"
              },
              {
                  "id": 133684,
                  "name": "Rajula",
                  "latitude": "21.03854000",
                  "longitude": "71.44345000"
              },
              {
                  "id": 133718,
                  "name": "Ranavav",
                  "latitude": "21.68734000",
                  "longitude": "69.74485000"
              },
              {
                  "id": 147650,
                  "name": "Ranpur",
                  "latitude": "22.36670000",
                  "longitude": "71.75000000"
              },
              {
                  "id": 133722,
                  "name": "Rapar",
                  "latitude": "23.57267000",
                  "longitude": "70.64718000"
              },
              {
                  "id": 147651,
                  "name": "Reha",
                  "latitude": "23.15172500",
                  "longitude": "69.75008600"
              },
              {
                  "id": 133643,
                  "name": "Roha",
                  "latitude": "23.19646000",
                  "longitude": "69.27076000"
              },
              {
                  "id": 133739,
                  "name": "Sabar Kantha",
                  "latitude": "23.62974000",
                  "longitude": "73.00197000"
              },
              {
                  "id": 133742,
                  "name": "Sachin",
                  "latitude": "21.08718000",
                  "longitude": "72.88153000"
              },
              {
                  "id": 133766,
                  "name": "Salaya",
                  "latitude": "22.31038000",
                  "longitude": "69.60376000"
              },
              {
                  "id": 147652,
                  "name": "Samakhiali",
                  "latitude": "23.30340000",
                  "longitude": "70.50688000"
              },
              {
                  "id": 134069,
                  "name": "Sanand",
                  "latitude": "22.99227000",
                  "longitude": "72.38177000"
              },
              {
                  "id": 133790,
                  "name": "Sankheda",
                  "latitude": "22.17021000",
                  "longitude": "73.57820000"
              },
              {
                  "id": 147653,
                  "name": "Sarbhon",
                  "latitude": "21.05000000",
                  "longitude": "73.08330000"
              },
              {
                  "id": 147654,
                  "name": "Sardoi",
                  "latitude": "23.56670000",
                  "longitude": "73.26670000"
              },
              {
                  "id": 133808,
                  "name": "Sarkhej",
                  "latitude": "22.98297000",
                  "longitude": "72.50196000"
              },
              {
                  "id": 147655,
                  "name": "Sathamba",
                  "latitude": "23.16912500",
                  "longitude": "73.32661667"
              },
              {
                  "id": 133831,
                  "name": "Savarkundla",
                  "latitude": "21.33726000",
                  "longitude": "71.30350000"
              },
              {
                  "id": 147656,
                  "name": "Savli",
                  "latitude": "22.56666667",
                  "longitude": "73.21666667"
              },
              {
                  "id": 134085,
                  "name": "Sayla",
                  "latitude": "22.54925000",
                  "longitude": "71.48324000"
              },
              {
                  "id": 133900,
                  "name": "Shahpur",
                  "latitude": "22.15611000",
                  "longitude": "70.77068000"
              },
              {
                  "id": 133882,
                  "name": "Shivrajpur",
                  "latitude": "22.42319000",
                  "longitude": "73.60865000"
              },
              {
                  "id": 142139,
                  "name": "Siddhpur",
                  "latitude": "23.91670000",
                  "longitude": "72.38330000"
              },
              {
                  "id": 133925,
                  "name": "Sihor",
                  "latitude": "21.71134000",
                  "longitude": "71.96179000"
              },
              {
                  "id": 133932,
                  "name": "Sikka",
                  "latitude": "22.43218000",
                  "longitude": "69.84158000"
              },
              {
                  "id": 133954,
                  "name": "Sinor",
                  "latitude": "21.91117000",
                  "longitude": "73.33974000"
              },
              {
                  "id": 133984,
                  "name": "Sojitra",
                  "latitude": "22.53884000",
                  "longitude": "72.71984000"
              },
              {
                  "id": 133995,
                  "name": "Songadh",
                  "latitude": "21.16966000",
                  "longitude": "73.56357000"
              },
              {
                  "id": 147657,
                  "name": "Supedi",
                  "latitude": "21.76200000",
                  "longitude": "70.37800000"
              },
              {
                  "id": 134096,
                  "name": "Surat",
                  "latitude": "21.17801000",
                  "longitude": "72.81189000"
              },
              {
                  "id": 134050,
                  "name": "Surendranagar",
                  "latitude": "22.72706000",
                  "longitude": "71.64856000"
              },
              {
                  "id": 147658,
                  "name": "Sutrapada",
                  "latitude": "20.89280000",
                  "longitude": "70.46500000"
              },
              {
                  "id": 134107,
                  "name": "Talaja",
                  "latitude": "21.35270000",
                  "longitude": "72.03524000"
              },
              {
                  "id": 134112,
                  "name": "Tankara",
                  "latitude": "22.65622000",
                  "longitude": "70.74945000"
              },
              {
                  "id": 134114,
                  "name": "Tapi",
                  "latitude": "21.12000000",
                  "longitude": "73.40000000"
              },
              {
                  "id": 134164,
                  "name": "Than",
                  "latitude": "22.57422000",
                  "longitude": "71.19942000"
              },
              {
                  "id": 142140,
                  "name": "Thangadh",
                  "latitude": "22.56666667",
                  "longitude": "71.18333333"
              },
              {
                  "id": 134144,
                  "name": "Tharad",
                  "latitude": "24.39597000",
                  "longitude": "71.62577000"
              },
              {
                  "id": 134168,
                  "name": "Thasra",
                  "latitude": "22.79831000",
                  "longitude": "73.21174000"
              },
              {
                  "id": 134145,
                  "name": "The Dangs",
                  "latitude": "20.75000000",
                  "longitude": "73.75000000"
              },
              {
                  "id": 147659,
                  "name": "Umarpada",
                  "latitude": "21.45000000",
                  "longitude": "73.50000000"
              },
              {
                  "id": 134277,
                  "name": "Umrala",
                  "latitude": "21.84353000",
                  "longitude": "71.80305000"
              },
              {
                  "id": 134275,
                  "name": "Umreth",
                  "latitude": "22.69881000",
                  "longitude": "73.11561000"
              },
              {
                  "id": 134278,
                  "name": "Un",
                  "latitude": "23.88745000",
                  "longitude": "71.76975000"
              },
              {
                  "id": 134280,
                  "name": "Una",
                  "latitude": "20.82318000",
                  "longitude": "71.03795000"
              },
              {
                  "id": 134284,
                  "name": "Unjha",
                  "latitude": "23.80366000",
                  "longitude": "72.39101000"
              },
              {
                  "id": 134286,
                  "name": "Upleta",
                  "latitude": "21.74015000",
                  "longitude": "70.28256000"
              },
              {
                  "id": 134297,
                  "name": "Utran",
                  "latitude": "21.23333000",
                  "longitude": "72.86667000"
              },
              {
                  "id": 147660,
                  "name": "Vadgam",
                  "latitude": "24.08333333",
                  "longitude": "72.48333333"
              },
              {
                  "id": 134309,
                  "name": "Vadnagar",
                  "latitude": "23.78593000",
                  "longitude": "72.63893000"
              },
              {
                  "id": 134310,
                  "name": "Vadodara",
                  "latitude": "22.29941000",
                  "longitude": "73.20812000"
              },
              {
                  "id": 134381,
                  "name": "Vaghodia",
                  "latitude": "22.30505000",
                  "longitude": "73.40016000"
              },
              {
                  "id": 147661,
                  "name": "Vaghodia INA",
                  "latitude": "22.30000000",
                  "longitude": "73.38330000"
              },
              {
                  "id": 134318,
                  "name": "Vallabh Vidyanagar",
                  "latitude": "22.53333000",
                  "longitude": "72.90000000"
              },
              {
                  "id": 142141,
                  "name": "Vallabhipur",
                  "latitude": "21.88780000",
                  "longitude": "71.87950000"
              },
              {
                  "id": 134322,
                  "name": "Valsad",
                  "latitude": "20.50000000",
                  "longitude": "73.08333000"
              },
              {
                  "id": 147662,
                  "name": "Vanala",
                  "latitude": "22.45000000",
                  "longitude": "71.98333333"
              },
              {
                  "id": 142142,
                  "name": "Vansda",
                  "latitude": "20.45000000",
                  "longitude": "73.22000000"
              },
              {
                  "id": 147663,
                  "name": "Vanthli",
                  "latitude": "21.48330000",
                  "longitude": "70.33330000"
              },
              {
                  "id": 134326,
                  "name": "Vapi",
                  "latitude": "20.37175000",
                  "longitude": "72.90493000"
              },
              {
                  "id": 134331,
                  "name": "Vartej",
                  "latitude": "21.73947000",
                  "longitude": "72.06553000"
              },
              {
                  "id": 134332,
                  "name": "Vasa",
                  "latitude": "22.66079000",
                  "longitude": "72.75519000"
              },
              {
                  "id": 147664,
                  "name": "Vasavad",
                  "latitude": "21.82657000",
                  "longitude": "71.02436000"
              },
              {
                  "id": 142143,
                  "name": "Vaso",
                  "latitude": "22.66079000",
                  "longitude": "72.75519000"
              },
              {
                  "id": 147665,
                  "name": "Vataman",
                  "latitude": "22.53000000",
                  "longitude": "72.42000000"
              },
              {
                  "id": 134339,
                  "name": "Vejalpur",
                  "latitude": "22.69021000",
                  "longitude": "73.56299000"
              },
              {
                  "id": 134349,
                  "name": "Veraval",
                  "latitude": "20.90770000",
                  "longitude": "70.36786000"
              },
              {
                  "id": 134357,
                  "name": "Vijapur",
                  "latitude": "23.56230000",
                  "longitude": "72.74848000"
              },
              {
                  "id": 142144,
                  "name": "Vinchhiya",
                  "latitude": "22.21027000",
                  "longitude": "71.37967000"
              },
              {
                  "id": 147666,
                  "name": "Viramgam",
                  "latitude": "23.12000000",
                  "longitude": "72.03000000"
              },
              {
                  "id": 134365,
                  "name": "Virpur",
                  "latitude": "23.18920000",
                  "longitude": "73.47987000"
              },
              {
                  "id": 134387,
                  "name": "Visavadar",
                  "latitude": "21.33954000",
                  "longitude": "70.74966000"
              },
              {
                  "id": 134371,
                  "name": "Visnagar",
                  "latitude": "23.69855000",
                  "longitude": "72.55210000"
              },
              {
                  "id": 134378,
                  "name": "Vyara",
                  "latitude": "21.11079000",
                  "longitude": "73.39365000"
              },
              {
                  "id": 142145,
                  "name": "Wadhai",
                  "latitude": "20.76666667",
                  "longitude": "73.48333333"
              },
              {
                  "id": 142146,
                  "name": "Wadhwan",
                  "latitude": "22.70000000",
                  "longitude": "71.68333333"
              },
              {
                  "id": 134389,
                  "name": "Waghai",
                  "latitude": "20.77048000",
                  "longitude": "73.50074000"
              },
              {
                  "id": 134416,
                  "name": "Wankaner",
                  "latitude": "22.61198000",
                  "longitude": "70.94379000"
              }
          ]
      },
      {
          "id": 4007,
          "name": "Haryana",
          "state_code": "HR",
          "latitude": "29.05877570",
          "longitude": "76.08560100",
          "type": "state",
          "cities": [
              {
                  "id": 57675,
                  "name": "Ambala",
                  "latitude": "30.32854000",
                  "longitude": "76.94220000"
              },
              {
                  "id": 134464,
                  "name": "Asandh",
                  "latitude": "29.52119000",
                  "longitude": "76.60552000"
              },
              {
                  "id": 57756,
                  "name": "Ateli Mandi",
                  "latitude": "28.10080000",
                  "longitude": "76.25980000"
              },
              {
                  "id": 57810,
                  "name": "Bahadurgarh",
                  "latitude": "28.69287000",
                  "longitude": "76.93555000"
              },
              {
                  "id": 57861,
                  "name": "Bara Uchana",
                  "latitude": "29.46747000",
                  "longitude": "76.17798000"
              },
              {
                  "id": 57890,
                  "name": "Barwala",
                  "latitude": "29.36747000",
                  "longitude": "75.90809000"
              },
              {
                  "id": 58152,
                  "name": "Bawal",
                  "latitude": "28.07184000",
                  "longitude": "76.58312000"
              },
              {
                  "id": 57937,
                  "name": "Beri Khas",
                  "latitude": "28.70146000",
                  "longitude": "76.57708000"
              },
              {
                  "id": 57988,
                  "name": "Bhiwani",
                  "latitude": "28.75000000",
                  "longitude": "76.16667000"
              },
              {
                  "id": 58054,
                  "name": "Bilaspur",
                  "latitude": "30.30450000",
                  "longitude": "77.30424000"
              },
              {
                  "id": 58164,
                  "name": "Buriya",
                  "latitude": "30.15911000",
                  "longitude": "77.35814000"
              },
              {
                  "id": 58200,
                  "name": "Charkhi Dadri",
                  "latitude": "28.59166000",
                  "longitude": "76.27161000"
              },
              {
                  "id": 131528,
                  "name": "Chhachhrauli",
                  "latitude": "30.24492000",
                  "longitude": "77.36027000"
              },
              {
                  "id": 131638,
                  "name": "Dabwali",
                  "latitude": "29.94906000",
                  "longitude": "74.73832000"
              },
              {
                  "id": 131757,
                  "name": "Dharuhera",
                  "latitude": "28.20553000",
                  "longitude": "76.79691000"
              },
              {
                  "id": 131831,
                  "name": "Ellenabad",
                  "latitude": "29.45282000",
                  "longitude": "74.66122000"
              },
              {
                  "id": 131853,
                  "name": "Faridabad",
                  "latitude": "28.41124000",
                  "longitude": "77.31316000"
              },
              {
                  "id": 131856,
                  "name": "Farrukhnagar",
                  "latitude": "28.44745000",
                  "longitude": "76.82391000"
              },
              {
                  "id": 131872,
                  "name": "Fatehabad",
                  "latitude": "29.51525000",
                  "longitude": "75.45554000"
              },
              {
                  "id": 131882,
                  "name": "Firozpur Jhirka",
                  "latitude": "27.78853000",
                  "longitude": "76.94496000"
              },
              {
                  "id": 131937,
                  "name": "Gharaunda",
                  "latitude": "29.53692000",
                  "longitude": "76.97142000"
              },
              {
                  "id": 131968,
                  "name": "Gohana",
                  "latitude": "29.13777000",
                  "longitude": "76.70247000"
              },
              {
                  "id": 131991,
                  "name": "Gorakhpur",
                  "latitude": "29.44768000",
                  "longitude": "75.67206000"
              },
              {
                  "id": 132032,
                  "name": "Gurgaon",
                  "latitude": "28.43891000",
                  "longitude": "77.00592000"
              },
              {
                  "id": 132141,
                  "name": "Hansi",
                  "latitude": "29.10239000",
                  "longitude": "75.96253000"
              },
              {
                  "id": 132084,
                  "name": "Hasanpur",
                  "latitude": "27.96944000",
                  "longitude": "77.49544000"
              },
              {
                  "id": 132106,
                  "name": "Hisar",
                  "latitude": "29.15394000",
                  "longitude": "75.72294000"
              },
              {
                  "id": 132109,
                  "name": "Hodal",
                  "latitude": "27.89196000",
                  "longitude": "77.36744000"
              },
              {
                  "id": 132163,
                  "name": "Inda Chhoi",
                  "latitude": "29.64042000",
                  "longitude": "75.79041000"
              },
              {
                  "id": 132167,
                  "name": "Indri",
                  "latitude": "29.87999000",
                  "longitude": "77.05972000"
              },
              {
                  "id": 132194,
                  "name": "Jagadhri",
                  "latitude": "30.16719000",
                  "longitude": "77.30367000"
              },
              {
                  "id": 132305,
                  "name": "Jakhal",
                  "latitude": "29.79627000",
                  "longitude": "75.82392000"
              },
              {
                  "id": 132266,
                  "name": "Jhajjar",
                  "latitude": "28.60630000",
                  "longitude": "76.65650000"
              },
              {
                  "id": 132315,
                  "name": "Jind",
                  "latitude": "29.31577000",
                  "longitude": "76.31502000"
              },
              {
                  "id": 132340,
                  "name": "Kaithal",
                  "latitude": "29.80153000",
                  "longitude": "76.39959000"
              },
              {
                  "id": 132360,
                  "name": "Kalanaur",
                  "latitude": "28.82823000",
                  "longitude": "76.39550000"
              },
              {
                  "id": 132688,
                  "name": "Kalanwali",
                  "latitude": "29.83573000",
                  "longitude": "74.97170000"
              },
              {
                  "id": 132389,
                  "name": "Kanina Khas",
                  "latitude": "28.33093000",
                  "longitude": "76.31099000"
              },
              {
                  "id": 132405,
                  "name": "Karnal",
                  "latitude": "29.66667000",
                  "longitude": "76.83333000"
              },
              {
                  "id": 132478,
                  "name": "Kharkhauda",
                  "latitude": "28.87870000",
                  "longitude": "76.91069000"
              },
              {
                  "id": 132493,
                  "name": "Kheri Sampla",
                  "latitude": "28.77810000",
                  "longitude": "76.77560000"
              },
              {
                  "id": 132662,
                  "name": "Kurukshetra",
                  "latitude": "30.00000000",
                  "longitude": "76.75000000"
              },
              {
                  "id": 132789,
                  "name": "Ladwa",
                  "latitude": "29.99350000",
                  "longitude": "77.04563000"
              },
              {
                  "id": 132772,
                  "name": "Loharu",
                  "latitude": "28.42993000",
                  "longitude": "75.80779000"
              },
              {
                  "id": 132825,
                  "name": "Maham",
                  "latitude": "28.96912000",
                  "longitude": "76.29495000"
              },
              {
                  "id": 132832,
                  "name": "Mahendragarh",
                  "latitude": "28.25000000",
                  "longitude": "76.16667000"
              },
              {
                  "id": 132892,
                  "name": "Mandholi Kalan",
                  "latitude": "28.70850000",
                  "longitude": "75.68296000"
              },
              {
                  "id": 133047,
                  "name": "Mustafabad",
                  "latitude": "30.20220000",
                  "longitude": "77.14873000"
              },
              {
                  "id": 133176,
                  "name": "Narayangarh",
                  "latitude": "30.47798000",
                  "longitude": "77.12804000"
              },
              {
                  "id": 133272,
                  "name": "Narnaul",
                  "latitude": "28.04444000",
                  "longitude": "76.10833000"
              },
              {
                  "id": 133273,
                  "name": "Narnaund",
                  "latitude": "29.22047000",
                  "longitude": "76.14278000"
              },
              {
                  "id": 133175,
                  "name": "Narwana",
                  "latitude": "29.59903000",
                  "longitude": "76.11927000"
              },
              {
                  "id": 133286,
                  "name": "Nilokheri",
                  "latitude": "29.83671000",
                  "longitude": "76.93191000"
              },
              {
                  "id": 133290,
                  "name": "Nuh",
                  "latitude": "28.10296000",
                  "longitude": "77.00144000"
              },
              {
                  "id": 133337,
                  "name": "Palwal",
                  "latitude": "28.14469000",
                  "longitude": "77.32546000"
              },
              {
                  "id": 133345,
                  "name": "Panchkula",
                  "latitude": "30.72883000",
                  "longitude": "76.94716000"
              },
              {
                  "id": 133350,
                  "name": "Panipat",
                  "latitude": "29.33259000",
                  "longitude": "76.92634000"
              },
              {
                  "id": 133378,
                  "name": "Pataudi",
                  "latitude": "28.32547000",
                  "longitude": "76.77858000"
              },
              {
                  "id": 133403,
                  "name": "Pehowa",
                  "latitude": "29.97897000",
                  "longitude": "76.58249000"
              },
              {
                  "id": 133451,
                  "name": "Pinjaur",
                  "latitude": "30.79873000",
                  "longitude": "76.91822000"
              },
              {
                  "id": 133568,
                  "name": "Punahana",
                  "latitude": "27.86371000",
                  "longitude": "77.20432000"
              },
              {
                  "id": 133567,
                  "name": "Pundri",
                  "latitude": "29.76096000",
                  "longitude": "76.56034000"
              },
              {
                  "id": 133579,
                  "name": "Radaur",
                  "latitude": "30.02706000",
                  "longitude": "77.15177000"
              },
              {
                  "id": 133715,
                  "name": "Rania",
                  "latitude": "29.52454000",
                  "longitude": "74.83689000"
              },
              {
                  "id": 133617,
                  "name": "Ratia",
                  "latitude": "29.69029000",
                  "longitude": "75.57688000"
              },
              {
                  "id": 133635,
                  "name": "Rewari",
                  "latitude": "28.19900000",
                  "longitude": "76.61830000"
              },
              {
                  "id": 133647,
                  "name": "Rohtak",
                  "latitude": "28.83333000",
                  "longitude": "76.66667000"
              },
              {
                  "id": 133746,
                  "name": "Safidon",
                  "latitude": "29.40596000",
                  "longitude": "76.67042000"
              },
              {
                  "id": 133774,
                  "name": "Samalkha",
                  "latitude": "29.23552000",
                  "longitude": "77.01273000"
              },
              {
                  "id": 133891,
                  "name": "Shadipur Julana",
                  "latitude": "29.12368000",
                  "longitude": "76.40516000"
              },
              {
                  "id": 133906,
                  "name": "Shahabad",
                  "latitude": "30.16776000",
                  "longitude": "76.87046000"
              },
              {
                  "id": 133961,
                  "name": "Sirsa",
                  "latitude": "29.53489000",
                  "longitude": "75.02898000"
              },
              {
                  "id": 133980,
                  "name": "Sohna",
                  "latitude": "28.24737000",
                  "longitude": "77.06544000"
              },
              {
                  "id": 133999,
                  "name": "Sonipat",
                  "latitude": "29.00000000",
                  "longitude": "76.91667000"
              },
              {
                  "id": 134238,
                  "name": "Taoru",
                  "latitude": "28.21173000",
                  "longitude": "76.94984000"
              },
              {
                  "id": 134167,
                  "name": "Thanesar",
                  "latitude": "29.97323000",
                  "longitude": "76.83214000"
              },
              {
                  "id": 134206,
                  "name": "Tohana",
                  "latitude": "29.71332000",
                  "longitude": "75.90441000"
              },
              {
                  "id": 134211,
                  "name": "Tosham",
                  "latitude": "28.86993000",
                  "longitude": "75.91650000"
              },
              {
                  "id": 134265,
                  "name": "Uklana",
                  "latitude": "29.51124000",
                  "longitude": "75.87823000"
              },
              {
                  "id": 134422,
                  "name": "Yamunanagar",
                  "latitude": "30.23644000",
                  "longitude": "77.30498000"
              }
          ]
      },
      {
          "id": 4020,
          "name": "Himachal Pradesh",
          "state_code": "HP",
          "latitude": "31.10482940",
          "longitude": "77.17339010",
          "type": "state",
          "cities": [
              {
                  "id": 57736,
                  "name": "Arki",
                  "latitude": "31.15196000",
                  "longitude": "76.96675000"
              },
              {
                  "id": 57789,
                  "name": "Baddi",
                  "latitude": "30.95783000",
                  "longitude": "76.79136000"
              },
              {
                  "id": 57853,
                  "name": "Banjar",
                  "latitude": "31.63900000",
                  "longitude": "77.34055000"
              },
              {
                  "id": 58041,
                  "name": "Bilaspur",
                  "latitude": "31.33027000",
                  "longitude": "76.75663000"
              },
              {
                  "id": 58181,
                  "name": "Chamba",
                  "latitude": "32.57147000",
                  "longitude": "76.10229000"
              },
              {
                  "id": 131512,
                  "name": "Chaupal",
                  "latitude": "30.94647000",
                  "longitude": "77.58840000"
              },
              {
                  "id": 131583,
                  "name": "Chowari",
                  "latitude": "32.43190000",
                  "longitude": "76.01200000"
              },
              {
                  "id": 131587,
                  "name": "Chuari Khas",
                  "latitude": "32.43058000",
                  "longitude": "76.01428000"
              },
              {
                  "id": 131641,
                  "name": "Dagshai",
                  "latitude": "30.88431000",
                  "longitude": "77.05228000"
              },
              {
                  "id": 131645,
                  "name": "Dalhousie",
                  "latitude": "32.55219000",
                  "longitude": "75.94663000"
              },
              {
                  "id": 131665,
                  "name": "Daulatpur",
                  "latitude": "31.78871000",
                  "longitude": "75.99154000"
              },
              {
                  "id": 131694,
                  "name": "Dera Gopipur",
                  "latitude": "31.87919000",
                  "longitude": "76.21871000"
              },
              {
                  "id": 131721,
                  "name": "Dharamsala",
                  "latitude": "32.22006000",
                  "longitude": "76.32013000"
              },
              {
                  "id": 131891,
                  "name": "Gagret",
                  "latitude": "31.65846000",
                  "longitude": "76.06144000"
              },
              {
                  "id": 131949,
                  "name": "Ghumarwin",
                  "latitude": "31.44166000",
                  "longitude": "76.71509000"
              },
              {
                  "id": 132063,
                  "name": "Hamirpur",
                  "latitude": "31.75000000",
                  "longitude": "76.50000000"
              },
              {
                  "id": 132255,
                  "name": "Jawala Mukhi",
                  "latitude": "31.87456000",
                  "longitude": "76.32013000"
              },
              {
                  "id": 132289,
                  "name": "Jogindarnagar",
                  "latitude": "31.98727000",
                  "longitude": "76.78906000"
              },
              {
                  "id": 132298,
                  "name": "Jubbal",
                  "latitude": "31.10923000",
                  "longitude": "77.65085000"
              },
              {
                  "id": 132302,
                  "name": "Jutogh",
                  "latitude": "31.10000000",
                  "longitude": "77.11667000"
              },
              {
                  "id": 132681,
                  "name": "Kalka",
                  "latitude": "30.83982000",
                  "longitude": "76.94065000"
              },
              {
                  "id": 132701,
                  "name": "Kangar",
                  "latitude": "32.09135000",
                  "longitude": "76.26267000"
              },
              {
                  "id": 132702,
                  "name": "Kangra",
                  "latitude": "32.16667000",
                  "longitude": "76.25000000"
              },
              {
                  "id": 132416,
                  "name": "Kasauli",
                  "latitude": "30.89856000",
                  "longitude": "76.96587000"
              },
              {
                  "id": 132523,
                  "name": "Kinnaur",
                  "latitude": "31.58333000",
                  "longitude": "78.41667000"
              },
              {
                  "id": 132601,
                  "name": "Kotkhai",
                  "latitude": "31.11728000",
                  "longitude": "77.53936000"
              },
              {
                  "id": 132602,
                  "name": "Kotla",
                  "latitude": "32.25000000",
                  "longitude": "76.03333000"
              },
              {
                  "id": 132636,
                  "name": "Kulu",
                  "latitude": "32.00000000",
                  "longitude": "77.25000000"
              },
              {
                  "id": 132675,
                  "name": "Kyelang",
                  "latitude": "32.57170000",
                  "longitude": "77.02448000"
              },
              {
                  "id": 132791,
                  "name": "Lahul and Spiti",
                  "latitude": "32.50000000",
                  "longitude": "77.83333000"
              },
              {
                  "id": 132929,
                  "name": "Manali",
                  "latitude": "32.25740000",
                  "longitude": "77.17481000"
              },
              {
                  "id": 132893,
                  "name": "Mandi",
                  "latitude": "31.71194000",
                  "longitude": "76.93273000"
              },
              {
                  "id": 133251,
                  "name": "Nadaun",
                  "latitude": "31.78303000",
                  "longitude": "76.34310000"
              },
              {
                  "id": 133113,
                  "name": "Nagar",
                  "latitude": "32.13808000",
                  "longitude": "77.17393000"
              },
              {
                  "id": 133118,
                  "name": "Nagrota",
                  "latitude": "32.05710000",
                  "longitude": "76.09139000"
              },
              {
                  "id": 133261,
                  "name": "Nahan",
                  "latitude": "30.56029000",
                  "longitude": "77.29426000"
              },
              {
                  "id": 133263,
                  "name": "Nalagarh",
                  "latitude": "31.04168000",
                  "longitude": "76.72285000"
              },
              {
                  "id": 133525,
                  "name": "Palampur",
                  "latitude": "32.11453000",
                  "longitude": "76.55681000"
              },
              {
                  "id": 133539,
                  "name": "Pandoh",
                  "latitude": "31.66902000",
                  "longitude": "77.05359000"
              },
              {
                  "id": 133544,
                  "name": "Paonta Sahib",
                  "latitude": "30.43666000",
                  "longitude": "77.62462000"
              },
              {
                  "id": 133369,
                  "name": "Parwanoo",
                  "latitude": "30.83716000",
                  "longitude": "76.96143000"
              },
              {
                  "id": 133676,
                  "name": "Rajgarh",
                  "latitude": "30.85142000",
                  "longitude": "77.30066000"
              },
              {
                  "id": 133706,
                  "name": "Rampur",
                  "latitude": "31.44943000",
                  "longitude": "77.63087000"
              },
              {
                  "id": 133646,
                  "name": "Rohru",
                  "latitude": "31.20269000",
                  "longitude": "77.75484000"
              },
              {
                  "id": 133741,
                  "name": "Sabathu",
                  "latitude": "30.97494000",
                  "longitude": "76.99137000"
              },
              {
                  "id": 133794,
                  "name": "Santokhgarh",
                  "latitude": "31.35205000",
                  "longitude": "76.31775000"
              },
              {
                  "id": 133811,
                  "name": "Sarahan",
                  "latitude": "31.50988000",
                  "longitude": "77.79395000"
              },
              {
                  "id": 133807,
                  "name": "Sarka Ghat",
                  "latitude": "31.69887000",
                  "longitude": "76.73529000"
              },
              {
                  "id": 133841,
                  "name": "Seoni",
                  "latitude": "31.24188000",
                  "longitude": "77.12362000"
              },
              {
                  "id": 133871,
                  "name": "Shimla",
                  "latitude": "31.16667000",
                  "longitude": "77.58333000"
              },
              {
                  "id": 133957,
                  "name": "Sirmaur",
                  "latitude": "30.75000000",
                  "longitude": "77.50000000"
              },
              {
                  "id": 133985,
                  "name": "Solan",
                  "latitude": "31.08333000",
                  "longitude": "76.83333000"
              },
              {
                  "id": 134045,
                  "name": "Sundarnagar",
                  "latitude": "31.53523000",
                  "longitude": "76.90500000"
              },
              {
                  "id": 134149,
                  "name": "Theog",
                  "latitude": "31.12155000",
                  "longitude": "77.35838000"
              },
              {
                  "id": 134246,
                  "name": "Tira Sujanpur",
                  "latitude": "31.83364000",
                  "longitude": "76.50539000"
              },
              {
                  "id": 134279,
                  "name": "Una",
                  "latitude": "31.46493000",
                  "longitude": "76.26914000"
              },
              {
                  "id": 134435,
                  "name": "Yol",
                  "latitude": "32.16423000",
                  "longitude": "76.19622000"
              }
          ]
      },
      {
          "id": 4029,
          "name": "Jammu and Kashmir",
          "state_code": "JK",
          "latitude": "33.27783900",
          "longitude": "75.34121790",
          "type": "Union territory",
          "cities": [
              {
                  "id": 57622,
                  "name": "Akhnur",
                  "latitude": "32.86667000",
                  "longitude": "74.73333000"
              },
              {
                  "id": 57699,
                  "name": "Anantnag",
                  "latitude": "33.73068000",
                  "longitude": "75.15418000"
              },
              {
                  "id": 57774,
                  "name": "Awantipur",
                  "latitude": "33.91978000",
                  "longitude": "75.01515000"
              },
              {
                  "id": 57790,
                  "name": "Badgam",
                  "latitude": "33.89001000",
                  "longitude": "74.66297000"
              },
              {
                  "id": 57843,
                  "name": "Bandipore",
                  "latitude": "34.50404000",
                  "longitude": "74.82832000"
              },
              {
                  "id": 57852,
                  "name": "Banihal",
                  "latitude": "33.43647000",
                  "longitude": "75.19684000"
              },
              {
                  "id": 58139,
                  "name": "Baramula",
                  "latitude": "34.19287000",
                  "longitude": "74.36920000"
              },
              {
                  "id": 57905,
                  "name": "Batoti",
                  "latitude": "33.11826000",
                  "longitude": "75.30889000"
              },
              {
                  "id": 57949,
                  "name": "Bhadarwah",
                  "latitude": "32.97941000",
                  "longitude": "75.71723000"
              },
              {
                  "id": 58033,
                  "name": "Bijbehara",
                  "latitude": "33.79378000",
                  "longitude": "75.10700000"
              },
              {
                  "id": 58065,
                  "name": "Bishnah",
                  "latitude": "32.61060000",
                  "longitude": "74.85557000"
              },
              {
                  "id": 131781,
                  "name": "Doda",
                  "latitude": "33.14916000",
                  "longitude": "75.54746000"
              },
              {
                  "id": 131898,
                  "name": "Ganderbal",
                  "latitude": "34.29467000",
                  "longitude": "75.19996000"
              },
              {
                  "id": 131942,
                  "name": "Gho Brahmanan de",
                  "latitude": "32.55590000",
                  "longitude": "74.95390000"
              },
              {
                  "id": 132135,
                  "name": "Hajan",
                  "latitude": "34.29895000",
                  "longitude": "74.61681000"
              },
              {
                  "id": 132105,
                  "name": "Hiranagar",
                  "latitude": "32.45493000",
                  "longitude": "75.27187000"
              },
              {
                  "id": 132229,
                  "name": "Jammu",
                  "latitude": "32.75000000",
                  "longitude": "74.83333000"
              },
              {
                  "id": 132253,
                  "name": "Jaurian",
                  "latitude": "32.83255000",
                  "longitude": "74.57612000"
              },
              {
                  "id": 132422,
                  "name": "Kathua",
                  "latitude": "32.58333000",
                  "longitude": "75.50000000"
              },
              {
                  "id": 132427,
                  "name": "Katra",
                  "latitude": "32.99167000",
                  "longitude": "74.93195000"
              },
              {
                  "id": 132485,
                  "name": "Khaur",
                  "latitude": "32.60270000",
                  "longitude": "74.80918000"
              },
              {
                  "id": 132533,
                  "name": "Kishtwar",
                  "latitude": "33.52958000",
                  "longitude": "76.01462000"
              },
              {
                  "id": 132735,
                  "name": "Kud",
                  "latitude": "33.07246000",
                  "longitude": "75.28727000"
              },
              {
                  "id": 132633,
                  "name": "Kulgam",
                  "latitude": "33.64456000",
                  "longitude": "75.01923000"
              },
              {
                  "id": 132654,
                  "name": "Kupwara",
                  "latitude": "34.53193000",
                  "longitude": "74.26605000"
              },
              {
                  "id": 132740,
                  "name": "Ladakh",
                  "latitude": "34.33333000",
                  "longitude": "77.41667000"
              },
              {
                  "id": 133061,
                  "name": "Magam",
                  "latitude": "34.09256000",
                  "longitude": "74.59016000"
              },
              {
                  "id": 133193,
                  "name": "Nawanshahr",
                  "latitude": "32.76505000",
                  "longitude": "74.52772000"
              },
              {
                  "id": 133244,
                  "name": "Noria",
                  "latitude": "32.52095000",
                  "longitude": "74.79845000"
              },
              {
                  "id": 133310,
                  "name": "Padam",
                  "latitude": "33.46659000",
                  "longitude": "76.88488000"
              },
              {
                  "id": 133317,
                  "name": "Pahlgam",
                  "latitude": "34.01592000",
                  "longitude": "75.31899000"
              },
              {
                  "id": 133363,
                  "name": "Parol",
                  "latitude": "32.34598000",
                  "longitude": "75.43441000"
              },
              {
                  "id": 133388,
                  "name": "Pattan",
                  "latitude": "34.16125000",
                  "longitude": "74.55634000"
              },
              {
                  "id": 133501,
                  "name": "Pulwama",
                  "latitude": "33.87405000",
                  "longitude": "74.89955000"
              },
              {
                  "id": 133503,
                  "name": "Punch",
                  "latitude": "33.70178000",
                  "longitude": "74.19916000"
              },
              {
                  "id": 133576,
                  "name": "Qazigund",
                  "latitude": "33.63828000",
                  "longitude": "75.14261000"
              },
              {
                  "id": 133593,
                  "name": "Rajaori",
                  "latitude": "33.37526000",
                  "longitude": "74.30920000"
              },
              {
                  "id": 133673,
                  "name": "Rajauri",
                  "latitude": "33.25000000",
                  "longitude": "74.25000000"
              },
              {
                  "id": 133601,
                  "name": "Ramban",
                  "latitude": "33.32301000",
                  "longitude": "75.18610000"
              },
              {
                  "id": 133698,
                  "name": "Ramgarh",
                  "latitude": "33.40379000",
                  "longitude": "74.22388000"
              },
              {
                  "id": 133702,
                  "name": "Ramnagar",
                  "latitude": "32.80728000",
                  "longitude": "75.31119000"
              },
              {
                  "id": 133640,
                  "name": "Riasi",
                  "latitude": "33.08115000",
                  "longitude": "74.83242000"
              },
              {
                  "id": 133768,
                  "name": "Samba",
                  "latitude": "32.57523000",
                  "longitude": "75.10929000"
              },
              {
                  "id": 133889,
                  "name": "Shupiyan",
                  "latitude": "33.73067000",
                  "longitude": "74.81869000"
              },
              {
                  "id": 134000,
                  "name": "Sopur",
                  "latitude": "34.28671000",
                  "longitude": "74.47228000"
              },
              {
                  "id": 134016,
                  "name": "Soyibug",
                  "latitude": "34.07677000",
                  "longitude": "74.70570000"
              },
              {
                  "id": 134020,
                  "name": "Srinagar",
                  "latitude": "34.08565000",
                  "longitude": "74.80555000"
              },
              {
                  "id": 134043,
                  "name": "Sumbal",
                  "latitude": "34.23072000",
                  "longitude": "74.64720000"
              },
              {
                  "id": 134139,
                  "name": "Thang",
                  "latitude": "34.92740000",
                  "longitude": "76.79336000"
              },
              {
                  "id": 134141,
                  "name": "Thanna Mandi",
                  "latitude": "33.54204000",
                  "longitude": "74.38100000"
              },
              {
                  "id": 134213,
                  "name": "Tral",
                  "latitude": "33.92708000",
                  "longitude": "75.11585000"
              },
              {
                  "id": 134214,
                  "name": "Tsrar Sharif",
                  "latitude": "33.86319000",
                  "longitude": "74.76524000"
              },
              {
                  "id": 134257,
                  "name": "Udhampur",
                  "latitude": "33.00000000",
                  "longitude": "75.16667000"
              },
              {
                  "id": 134293,
                  "name": "Uri",
                  "latitude": "34.08064000",
                  "longitude": "74.05088000"
              }
          ]
      },
      {
          "id": 4025,
          "name": "Jharkhand",
          "state_code": "JH",
          "latitude": "23.61018080",
          "longitude": "85.27993540",
          "type": "state",
          "cities": [
              {
                  "id": 57802,
                  "name": "Bagra",
                  "latitude": "23.73333000",
                  "longitude": "86.31667000"
              },
              {
                  "id": 57880,
                  "name": "Barka Kana",
                  "latitude": "23.62118000",
                  "longitude": "85.46748000"
              },
              {
                  "id": 57878,
                  "name": "Barki Saria",
                  "latitude": "24.17594000",
                  "longitude": "85.88938000"
              },
              {
                  "id": 57889,
                  "name": "Barwadih",
                  "latitude": "23.84780000",
                  "longitude": "84.11049000"
              },
              {
                  "id": 57992,
                  "name": "Bhojudih",
                  "latitude": "23.63962000",
                  "longitude": "86.44105000"
              },
              {
                  "id": 58076,
                  "name": "Bokaro",
                  "latitude": "23.68562000",
                  "longitude": "85.99026000"
              },
              {
                  "id": 58163,
                  "name": "Bundu",
                  "latitude": "23.16095000",
                  "longitude": "85.59007000"
              },
              {
                  "id": 131608,
                  "name": "Chaibasa",
                  "latitude": "22.55038000",
                  "longitude": "85.80249000"
              },
              {
                  "id": 58175,
                  "name": "Chakradharpur",
                  "latitude": "22.67611000",
                  "longitude": "85.62892000"
              },
              {
                  "id": 131591,
                  "name": "Chakulia",
                  "latitude": "22.48301000",
                  "longitude": "86.71793000"
              },
              {
                  "id": 131598,
                  "name": "Chandil",
                  "latitude": "22.95745000",
                  "longitude": "86.05331000"
              },
              {
                  "id": 131606,
                  "name": "Chas",
                  "latitude": "23.63556000",
                  "longitude": "86.16712000"
              },
              {
                  "id": 131511,
                  "name": "Chatra",
                  "latitude": "24.20645000",
                  "longitude": "84.87085000"
              },
              {
                  "id": 131570,
                  "name": "Chiria",
                  "latitude": "22.31093000",
                  "longitude": "85.27601000"
              },
              {
                  "id": 131648,
                  "name": "Daltonganj",
                  "latitude": "24.03971000",
                  "longitude": "84.06580000"
              },
              {
                  "id": 131684,
                  "name": "Deogarh",
                  "latitude": "24.44382000",
                  "longitude": "86.72607000"
              },
              {
                  "id": 131715,
                  "name": "Dhanbad",
                  "latitude": "23.80199000",
                  "longitude": "86.44324000"
              },
              {
                  "id": 131718,
                  "name": "Dhanwar",
                  "latitude": "24.41074000",
                  "longitude": "85.98183000"
              },
              {
                  "id": 131794,
                  "name": "Dugda",
                  "latitude": "23.74516000",
                  "longitude": "86.17175000"
              },
              {
                  "id": 131797,
                  "name": "Dumka",
                  "latitude": "24.30000000",
                  "longitude": "87.25000000"
              },
              {
                  "id": 131922,
                  "name": "Garhwa",
                  "latitude": "24.07494000",
                  "longitude": "83.71023000"
              },
              {
                  "id": 131952,
                  "name": "Ghatsila",
                  "latitude": "22.58531000",
                  "longitude": "86.47682000"
              },
              {
                  "id": 131959,
                  "name": "Giridih",
                  "latitude": "24.25000000",
                  "longitude": "85.91667000"
              },
              {
                  "id": 131962,
                  "name": "Gobindpur",
                  "latitude": "22.63393000",
                  "longitude": "86.07162000"
              },
              {
                  "id": 131963,
                  "name": "Godda",
                  "latitude": "24.83333000",
                  "longitude": "87.21667000"
              },
              {
                  "id": 131980,
                  "name": "Gomoh",
                  "latitude": "23.87355000",
                  "longitude": "86.15160000"
              },
              {
                  "id": 131986,
                  "name": "Gopinathpur",
                  "latitude": "22.66301000",
                  "longitude": "86.07500000"
              },
              {
                  "id": 132006,
                  "name": "Gua",
                  "latitude": "22.21361000",
                  "longitude": "85.38774000"
              },
              {
                  "id": 132020,
                  "name": "Gumia",
                  "latitude": "23.79750000",
                  "longitude": "85.82523000"
              },
              {
                  "id": 132021,
                  "name": "Gumla",
                  "latitude": "23.08055000",
                  "longitude": "84.53834000"
              },
              {
                  "id": 132092,
                  "name": "Hazaribag",
                  "latitude": "24.00000000",
                  "longitude": "85.25000000"
              },
              {
                  "id": 132091,
                  "name": "Hazaribagh",
                  "latitude": "23.99241000",
                  "longitude": "85.36162000"
              },
              {
                  "id": 132094,
                  "name": "Hesla",
                  "latitude": "24.06313000",
                  "longitude": "85.87905000"
              },
              {
                  "id": 132131,
                  "name": "Husainabad",
                  "latitude": "24.52849000",
                  "longitude": "84.00000000"
              },
              {
                  "id": 132183,
                  "name": "Jagannathpur",
                  "latitude": "22.22115000",
                  "longitude": "85.63917000"
              },
              {
                  "id": 132308,
                  "name": "Jamadoba",
                  "latitude": "23.71667000",
                  "longitude": "86.40000000"
              },
              {
                  "id": 132231,
                  "name": "Jamshedpur",
                  "latitude": "22.80278000",
                  "longitude": "86.18545000"
              },
              {
                  "id": 132232,
                  "name": "Jamtara",
                  "latitude": "24.00000000",
                  "longitude": "86.85000000"
              },
              {
                  "id": 132246,
                  "name": "Jasidih",
                  "latitude": "24.51379000",
                  "longitude": "86.64576000"
              },
              {
                  "id": 132268,
                  "name": "Jharia",
                  "latitude": "23.74079000",
                  "longitude": "86.41456000"
              },
              {
                  "id": 132299,
                  "name": "Jugsalai",
                  "latitude": "22.77668000",
                  "longitude": "86.18351000"
              },
              {
                  "id": 132300,
                  "name": "Jumri Tilaiya",
                  "latitude": "24.43490000",
                  "longitude": "85.52951000"
              },
              {
                  "id": 132680,
                  "name": "Kalikapur",
                  "latitude": "22.61662000",
                  "longitude": "86.28810000"
              },
              {
                  "id": 132699,
                  "name": "Kandra",
                  "latitude": "22.85170000",
                  "longitude": "86.05192000"
              },
              {
                  "id": 132703,
                  "name": "Kanke",
                  "latitude": "23.43478000",
                  "longitude": "85.32059000"
              },
              {
                  "id": 132727,
                  "name": "Katras",
                  "latitude": "23.79752000",
                  "longitude": "86.29834000"
              },
              {
                  "id": 132443,
                  "name": "Kenduadih",
                  "latitude": "23.77574000",
                  "longitude": "86.37609000"
              },
              {
                  "id": 132482,
                  "name": "Kharsawan",
                  "latitude": "22.79093000",
                  "longitude": "85.83102000"
              },
              {
                  "id": 132506,
                  "name": "Khunti",
                  "latitude": "23.07602000",
                  "longitude": "85.27818000"
              },
              {
                  "id": 132540,
                  "name": "Kodarma",
                  "latitude": "24.46753000",
                  "longitude": "85.59397000"
              },
              {
                  "id": 132630,
                  "name": "Kuju",
                  "latitude": "23.72536000",
                  "longitude": "85.51023000"
              },
              {
                  "id": 132758,
                  "name": "Latehar",
                  "latitude": "23.75000000",
                  "longitude": "84.40000000"
              },
              {
                  "id": 132768,
                  "name": "Lohardaga",
                  "latitude": "23.50000000",
                  "longitude": "84.60000000"
              },
              {
                  "id": 132816,
                  "name": "Madhupur",
                  "latitude": "24.27419000",
                  "longitude": "86.63929000"
              },
              {
                  "id": 132873,
                  "name": "Malkera",
                  "latitude": "23.78213000",
                  "longitude": "86.28767000"
              },
              {
                  "id": 132923,
                  "name": "Manoharpur",
                  "latitude": "22.37456000",
                  "longitude": "85.19234000"
              },
              {
                  "id": 133015,
                  "name": "Mugma",
                  "latitude": "23.77015000",
                  "longitude": "86.72746000"
              },
              {
                  "id": 133044,
                  "name": "Mushabani",
                  "latitude": "22.51135000",
                  "longitude": "86.45713000"
              },
              {
                  "id": 133209,
                  "name": "Neturhat",
                  "latitude": "23.47457000",
                  "longitude": "84.26780000"
              },
              {
                  "id": 133223,
                  "name": "Nirsa",
                  "latitude": "23.78438000",
                  "longitude": "86.70692000"
              },
              {
                  "id": 133246,
                  "name": "Noamundi",
                  "latitude": "22.16094000",
                  "longitude": "85.50416000"
              },
              {
                  "id": 133320,
                  "name": "Pakur",
                  "latitude": "24.63925000",
                  "longitude": "87.84239000"
              },
              {
                  "id": 133339,
                  "name": "Palamu",
                  "latitude": "23.91667000",
                  "longitude": "84.08333000"
              },
              {
                  "id": 133374,
                  "name": "Pashchim Singhbhum",
                  "latitude": "22.50000000",
                  "longitude": "85.50000000"
              },
              {
                  "id": 134446,
                  "name": "patamda",
                  "latitude": "24.30000000",
                  "longitude": "85.41667000"
              },
              {
                  "id": 133557,
                  "name": "Pathardih",
                  "latitude": "23.66580000",
                  "longitude": "86.43166000"
              },
              {
                  "id": 133510,
                  "name": "Purba Singhbhum",
                  "latitude": "22.59238000",
                  "longitude": "86.48341000"
              },
              {
                  "id": 133604,
                  "name": "Ramgarh",
                  "latitude": "23.63073000",
                  "longitude": "85.56057000"
              },
              {
                  "id": 133606,
                  "name": "Ranchi",
                  "latitude": "23.34316000",
                  "longitude": "85.30940000"
              },
              {
                  "id": 133727,
                  "name": "Ray",
                  "latitude": "23.68430000",
                  "longitude": "85.05457000"
              },
              {
                  "id": 133752,
                  "name": "Sahibganj",
                  "latitude": "24.99354000",
                  "longitude": "87.67333000"
              },
              {
                  "id": 133800,
                  "name": "Saraikela",
                  "latitude": "22.69963000",
                  "longitude": "85.93126000"
              },
              {
                  "id": 134079,
                  "name": "Sarubera",
                  "latitude": "23.81813000",
                  "longitude": "85.99628000"
              },
              {
                  "id": 133927,
                  "name": "Sijua",
                  "latitude": "23.77617000",
                  "longitude": "86.33028000"
              },
              {
                  "id": 133939,
                  "name": "Simdega",
                  "latitude": "22.61523000",
                  "longitude": "84.50208000"
              },
              {
                  "id": 133952,
                  "name": "Sini",
                  "latitude": "22.79325000",
                  "longitude": "85.94543000"
              },
              {
                  "id": 134209,
                  "name": "Topchanchi",
                  "latitude": "23.90381000",
                  "longitude": "86.19792000"
              }
          ]
      },
      {
          "id": 4026,
          "name": "Karnataka",
          "state_code": "KA",
          "latitude": "15.31727750",
          "longitude": "75.71388840",
          "type": "state",
          "cities": [
              {
                  "id": 57598,
                  "name": "Afzalpur",
                  "latitude": "17.19986000",
                  "longitude": "76.36018000"
              },
              {
                  "id": 57613,
                  "name": "Ajjampur",
                  "latitude": "13.72794000",
                  "longitude": "76.00680000"
              },
              {
                  "id": 57632,
                  "name": "Aland",
                  "latitude": "17.56425000",
                  "longitude": "76.56854000"
              },
              {
                  "id": 57644,
                  "name": "Alnavar",
                  "latitude": "15.42727000",
                  "longitude": "74.74111000"
              },
              {
                  "id": 57656,
                  "name": "Alur",
                  "latitude": "12.97805000",
                  "longitude": "75.99094000"
              },
              {
                  "id": 57702,
                  "name": "Anekal",
                  "latitude": "12.71110000",
                  "longitude": "77.69557000"
              },
              {
                  "id": 57711,
                  "name": "Ankola",
                  "latitude": "14.66049000",
                  "longitude": "74.30470000"
              },
              {
                  "id": 57713,
                  "name": "Annigeri",
                  "latitude": "15.42513000",
                  "longitude": "75.43350000"
              },
              {
                  "id": 57735,
                  "name": "Arkalgud",
                  "latitude": "12.76171000",
                  "longitude": "76.06035000"
              },
              {
                  "id": 57740,
                  "name": "Arsikere",
                  "latitude": "13.31446000",
                  "longitude": "76.25704000"
              },
              {
                  "id": 57757,
                  "name": "Athni",
                  "latitude": "16.72613000",
                  "longitude": "75.06421000"
              },
              {
                  "id": 57768,
                  "name": "Aurad",
                  "latitude": "18.25397000",
                  "longitude": "77.41761000"
              },
              {
                  "id": 58105,
                  "name": "Badami",
                  "latitude": "15.91495000",
                  "longitude": "75.67683000"
              },
              {
                  "id": 57797,
                  "name": "Bagalkot",
                  "latitude": "16.18000000",
                  "longitude": "75.69000000"
              },
              {
                  "id": 58107,
                  "name": "Bagepalli",
                  "latitude": "13.78338000",
                  "longitude": "77.79667000"
              },
              {
                  "id": 57814,
                  "name": "Bail-Hongal",
                  "latitude": "15.81370000",
                  "longitude": "74.85895000"
              },
              {
                  "id": 57827,
                  "name": "Ballari",
                  "latitude": "15.15000000",
                  "longitude": "76.55000000"
              },
              {
                  "id": 58136,
                  "name": "Banavar",
                  "latitude": "13.41029000",
                  "longitude": "76.16314000"
              },
              {
                  "id": 57847,
                  "name": "Bangalore Rural",
                  "latitude": "13.22567000",
                  "longitude": "77.57501000"
              },
              {
                  "id": 57848,
                  "name": "Bangalore Urban",
                  "latitude": "13.00000000",
                  "longitude": "77.58333000"
              },
              {
                  "id": 57851,
                  "name": "Bangarapet",
                  "latitude": "12.99116000",
                  "longitude": "78.17804000"
              },
              {
                  "id": 57856,
                  "name": "Bannur",
                  "latitude": "12.33295000",
                  "longitude": "76.86201000"
              },
              {
                  "id": 57857,
                  "name": "Bantval",
                  "latitude": "12.89050000",
                  "longitude": "75.03489000"
              },
              {
                  "id": 57893,
                  "name": "Basavakalyan",
                  "latitude": "17.87445000",
                  "longitude": "76.94972000"
              },
              {
                  "id": 57894,
                  "name": "Basavana Bagevadi",
                  "latitude": "16.57278000",
                  "longitude": "75.97252000"
              },
              {
                  "id": 57922,
                  "name": "Belagavi",
                  "latitude": "16.33333000",
                  "longitude": "74.75000000"
              },
              {
                  "id": 57925,
                  "name": "Belluru",
                  "latitude": "12.98140000",
                  "longitude": "76.73308000"
              },
              {
                  "id": 57928,
                  "name": "Beltangadi",
                  "latitude": "13.98333000",
                  "longitude": "75.30000000"
              },
              {
                  "id": 57930,
                  "name": "Belur",
                  "latitude": "13.16558000",
                  "longitude": "75.86519000"
              },
              {
                  "id": 57933,
                  "name": "Bengaluru",
                  "latitude": "12.97194000",
                  "longitude": "77.59369000"
              },
              {
                  "id": 57956,
                  "name": "Bhadravati",
                  "latitude": "13.84846000",
                  "longitude": "75.70502000"
              },
              {
                  "id": 58010,
                  "name": "Bhalki",
                  "latitude": "18.04348000",
                  "longitude": "77.20600000"
              },
              {
                  "id": 57970,
                  "name": "Bhatkal",
                  "latitude": "13.98534000",
                  "longitude": "74.55531000"
              },
              {
                  "id": 58154,
                  "name": "Bidar",
                  "latitude": "18.08333000",
                  "longitude": "77.33333000"
              },
              {
                  "id": 58042,
                  "name": "Bilgi",
                  "latitude": "16.34714000",
                  "longitude": "75.61804000"
              },
              {
                  "id": 58061,
                  "name": "Birur",
                  "latitude": "13.59723000",
                  "longitude": "75.97167000"
              },
              {
                  "id": 58102,
                  "name": "Byadgi",
                  "latitude": "14.67325000",
                  "longitude": "75.48680000"
              },
              {
                  "id": 58101,
                  "name": "Byndoor",
                  "latitude": "13.86667000",
                  "longitude": "74.63333000"
              },
              {
                  "id": 58166,
                  "name": "Canacona",
                  "latitude": "14.99590000",
                  "longitude": "74.05056000"
              },
              {
                  "id": 58178,
                  "name": "Challakere",
                  "latitude": "14.31800000",
                  "longitude": "76.65165000"
              },
              {
                  "id": 58185,
                  "name": "Chamrajnagar",
                  "latitude": "11.96000000",
                  "longitude": "77.09000000"
              },
              {
                  "id": 58197,
                  "name": "Channagiri",
                  "latitude": "14.02399000",
                  "longitude": "75.92577000"
              },
              {
                  "id": 58198,
                  "name": "Channapatna",
                  "latitude": "12.65143000",
                  "longitude": "77.20672000"
              },
              {
                  "id": 58199,
                  "name": "Channarayapatna",
                  "latitude": "12.90642000",
                  "longitude": "76.38775000"
              },
              {
                  "id": 131547,
                  "name": "Chik Ballapur",
                  "latitude": "13.43512000",
                  "longitude": "77.72787000"
              },
              {
                  "id": 131551,
                  "name": "Chikkaballapur",
                  "latitude": "13.55000000",
                  "longitude": "77.87000000"
              },
              {
                  "id": 131552,
                  "name": "Chikkamagaluru",
                  "latitude": "13.49000000",
                  "longitude": "75.73000000"
              },
              {
                  "id": 131554,
                  "name": "Chiknayakanhalli",
                  "latitude": "13.41609000",
                  "longitude": "76.62063000"
              },
              {
                  "id": 131555,
                  "name": "Chikodi",
                  "latitude": "16.42898000",
                  "longitude": "74.58591000"
              },
              {
                  "id": 131560,
                  "name": "Chincholi",
                  "latitude": "17.46508000",
                  "longitude": "77.41874000"
              },
              {
                  "id": 131566,
                  "name": "Chintamani",
                  "latitude": "13.40051000",
                  "longitude": "78.05172000"
              },
              {
                  "id": 131613,
                  "name": "Chitapur",
                  "latitude": "17.12357000",
                  "longitude": "77.08240000"
              },
              {
                  "id": 131571,
                  "name": "Chitradurga",
                  "latitude": "14.20000000",
                  "longitude": "76.50000000"
              },
              {
                  "id": 131616,
                  "name": "Closepet",
                  "latitude": "12.72181000",
                  "longitude": "77.28149000"
              },
              {
                  "id": 131624,
                  "name": "Coondapoor",
                  "latitude": "13.63126000",
                  "longitude": "74.69020000"
              },
              {
                  "id": 131644,
                  "name": "Dakshina Kannada",
                  "latitude": "12.84000000",
                  "longitude": "75.29000000"
              },
              {
                  "id": 131652,
                  "name": "Dandeli",
                  "latitude": "15.26667000",
                  "longitude": "74.61667000"
              },
              {
                  "id": 131670,
                  "name": "Davanagere",
                  "latitude": "14.43000000",
                  "longitude": "75.90000000"
              },
              {
                  "id": 131701,
                  "name": "Devanhalli",
                  "latitude": "13.24655000",
                  "longitude": "77.71183000"
              },
              {
                  "id": 131729,
                  "name": "Dharwad",
                  "latitude": "15.37000000",
                  "longitude": "75.14000000"
              },
              {
                  "id": 131780,
                  "name": "Dod Ballapur",
                  "latitude": "13.29452000",
                  "longitude": "77.53777000"
              },
              {
                  "id": 131879,
                  "name": "French Rocks",
                  "latitude": "12.50094000",
                  "longitude": "76.67416000"
              },
              {
                  "id": 131884,
                  "name": "Gadag",
                  "latitude": "15.49835000",
                  "longitude": "75.65187000"
              },
              {
                  "id": 131885,
                  "name": "Gadag-Betageri",
                  "latitude": "15.41670000",
                  "longitude": "75.61670000"
              },
              {
                  "id": 131893,
                  "name": "Gajendragarh",
                  "latitude": "15.73628000",
                  "longitude": "75.96976000"
              },
              {
                  "id": 131911,
                  "name": "Gangawati",
                  "latitude": "15.43130000",
                  "longitude": "76.52933000"
              },
              {
                  "id": 131904,
                  "name": "Gangolli",
                  "latitude": "13.65024000",
                  "longitude": "74.67072000"
              },
              {
                  "id": 131970,
                  "name": "Gokak",
                  "latitude": "16.16901000",
                  "longitude": "74.82393000"
              },
              {
                  "id": 131971,
                  "name": "Gokarna",
                  "latitude": "14.55000000",
                  "longitude": "74.31667000"
              },
              {
                  "id": 131995,
                  "name": "Goribidnur",
                  "latitude": "13.61072000",
                  "longitude": "77.51738000"
              },
              {
                  "id": 131996,
                  "name": "Gorur",
                  "latitude": "12.82297000",
                  "longitude": "76.06463000"
              },
              {
                  "id": 132007,
                  "name": "Gubbi",
                  "latitude": "13.31216000",
                  "longitude": "76.94102000"
              },
              {
                  "id": 132009,
                  "name": "Gudibanda",
                  "latitude": "13.67099000",
                  "longitude": "77.70414000"
              },
              {
                  "id": 132017,
                  "name": "Guledagudda",
                  "latitude": "16.05025000",
                  "longitude": "75.78997000"
              },
              {
                  "id": 132025,
                  "name": "Gundlupet",
                  "latitude": "11.81004000",
                  "longitude": "76.69027000"
              },
              {
                  "id": 132034,
                  "name": "Gurmatkal",
                  "latitude": "16.86773000",
                  "longitude": "77.39088000"
              },
              {
                  "id": 132053,
                  "name": "Hadagalli",
                  "latitude": "15.02048000",
                  "longitude": "75.93185000"
              },
              {
                  "id": 132059,
                  "name": "Haliyal",
                  "latitude": "15.32864000",
                  "longitude": "74.75638000"
              },
              {
                  "id": 132061,
                  "name": "Hampi",
                  "latitude": "15.33520000",
                  "longitude": "76.46030000"
              },
              {
                  "id": 132140,
                  "name": "Hangal",
                  "latitude": "14.76465000",
                  "longitude": "75.12460000"
              },
              {
                  "id": 132076,
                  "name": "Harihar",
                  "latitude": "14.51288000",
                  "longitude": "75.80716000"
              },
              {
                  "id": 132079,
                  "name": "Harpanahalli",
                  "latitude": "14.78766000",
                  "longitude": "75.98863000"
              },
              {
                  "id": 132086,
                  "name": "Hassan",
                  "latitude": "12.95000000",
                  "longitude": "76.08333000"
              },
              {
                  "id": 132089,
                  "name": "Haveri",
                  "latitude": "14.73732000",
                  "longitude": "75.41062000"
              },
              {
                  "id": 132093,
                  "name": "Heggadadevankote",
                  "latitude": "12.08809000",
                  "longitude": "76.32957000"
              },
              {
                  "id": 132103,
                  "name": "Hirekerur",
                  "latitude": "14.45506000",
                  "longitude": "75.39520000"
              },
              {
                  "id": 132104,
                  "name": "Hiriyur",
                  "latitude": "13.94455000",
                  "longitude": "76.61723000"
              },
              {
                  "id": 132111,
                  "name": "Holalkere",
                  "latitude": "14.04295000",
                  "longitude": "76.18496000"
              },
              {
                  "id": 132112,
                  "name": "Hole Narsipur",
                  "latitude": "12.78635000",
                  "longitude": "76.24331000"
              },
              {
                  "id": 132113,
                  "name": "Homnabad",
                  "latitude": "17.77074000",
                  "longitude": "77.12519000"
              },
              {
                  "id": 132115,
                  "name": "Honavar",
                  "latitude": "14.28088000",
                  "longitude": "74.44497000"
              },
              {
                  "id": 132114,
                  "name": "Honnali",
                  "latitude": "14.23976000",
                  "longitude": "75.64507000"
              },
              {
                  "id": 132117,
                  "name": "Hosanagara",
                  "latitude": "13.91387000",
                  "longitude": "75.06503000"
              },
              {
                  "id": 132118,
                  "name": "Hosangadi",
                  "latitude": "13.69756000",
                  "longitude": "74.95427000"
              },
              {
                  "id": 132119,
                  "name": "Hosdurga",
                  "latitude": "13.79631000",
                  "longitude": "76.28408000"
              },
              {
                  "id": 132123,
                  "name": "Hoskote",
                  "latitude": "13.07070000",
                  "longitude": "77.79814000"
              },
              {
                  "id": 132124,
                  "name": "Hospet",
                  "latitude": "15.26954000",
                  "longitude": "76.38710000"
              },
              {
                  "id": 132127,
                  "name": "Hubballi",
                  "latitude": "15.34776000",
                  "longitude": "75.13378000"
              },
              {
                  "id": 132128,
                  "name": "Hukeri",
                  "latitude": "16.23082000",
                  "longitude": "74.60244000"
              },
              {
                  "id": 132129,
                  "name": "Hungund",
                  "latitude": "16.06213000",
                  "longitude": "76.05860000"
              },
              {
                  "id": 132130,
                  "name": "Hunsur",
                  "latitude": "12.30359000",
                  "longitude": "76.29275000"
              },
              {
                  "id": 132160,
                  "name": "Ilkal",
                  "latitude": "15.95923000",
                  "longitude": "76.11351000"
              },
              {
                  "id": 132165,
                  "name": "Indi",
                  "latitude": "17.17735000",
                  "longitude": "75.95260000"
              },
              {
                  "id": 132182,
                  "name": "Jagalur",
                  "latitude": "14.51957000",
                  "longitude": "76.33915000"
              },
              {
                  "id": 132227,
                  "name": "Jamkhandi",
                  "latitude": "16.50461000",
                  "longitude": "75.29146000"
              },
              {
                  "id": 132263,
                  "name": "Jevargi",
                  "latitude": "17.01394000",
                  "longitude": "76.77317000"
              },
              {
                  "id": 132330,
                  "name": "Kadur",
                  "latitude": "13.55285000",
                  "longitude": "76.01164000"
              },
              {
                  "id": 132016,
                  "name": "Kalaburgi",
                  "latitude": "17.16667000",
                  "longitude": "77.08333000"
              },
              {
                  "id": 132351,
                  "name": "Kalghatgi",
                  "latitude": "15.18315000",
                  "longitude": "74.97099000"
              },
              {
                  "id": 132365,
                  "name": "Kampli",
                  "latitude": "15.40626000",
                  "longitude": "76.60013000"
              },
              {
                  "id": 132706,
                  "name": "Kankanhalli",
                  "latitude": "12.54654000",
                  "longitude": "77.42005000"
              },
              {
                  "id": 132719,
                  "name": "Karkala",
                  "latitude": "13.21428000",
                  "longitude": "74.99234000"
              },
              {
                  "id": 132411,
                  "name": "Karwar",
                  "latitude": "14.81361000",
                  "longitude": "74.12972000"
              },
              {
                  "id": 132431,
                  "name": "Kavalur",
                  "latitude": "15.28829000",
                  "longitude": "75.94330000"
              },
              {
                  "id": 132445,
                  "name": "Kerur",
                  "latitude": "16.01384000",
                  "longitude": "75.54631000"
              },
              {
                  "id": 132516,
                  "name": "Khanapur",
                  "latitude": "15.63969000",
                  "longitude": "74.50847000"
              },
              {
                  "id": 132537,
                  "name": "Kodagu",
                  "latitude": "12.41667000",
                  "longitude": "75.75000000"
              },
              {
                  "id": 132541,
                  "name": "Kodigenahalli",
                  "latitude": "13.72136000",
                  "longitude": "77.38629000"
              },
              {
                  "id": 132542,
                  "name": "Kodlipet",
                  "latitude": "12.80087000",
                  "longitude": "75.88662000"
              },
              {
                  "id": 132553,
                  "name": "Kolar",
                  "latitude": "13.13000000",
                  "longitude": "78.23000000"
              },
              {
                  "id": 132559,
                  "name": "Kollegal",
                  "latitude": "12.15449000",
                  "longitude": "77.11051000"
              },
              {
                  "id": 132563,
                  "name": "Konanur",
                  "latitude": "12.63016000",
                  "longitude": "76.05037000"
              },
              {
                  "id": 132569,
                  "name": "Konnur",
                  "latitude": "16.20138000",
                  "longitude": "74.74886000"
              },
              {
                  "id": 132573,
                  "name": "Koppa",
                  "latitude": "13.53044000",
                  "longitude": "75.36329000"
              },
              {
                  "id": 132574,
                  "name": "Koppal",
                  "latitude": "15.50000000",
                  "longitude": "76.20000000"
              },
              {
                  "id": 132579,
                  "name": "Koratagere",
                  "latitude": "13.52200000",
                  "longitude": "77.23730000"
              },
              {
                  "id": 132610,
                  "name": "Kotturu",
                  "latitude": "14.82442000",
                  "longitude": "76.22005000"
              },
              {
                  "id": 132623,
                  "name": "Krishnarajpet",
                  "latitude": "12.66621000",
                  "longitude": "76.48770000"
              },
              {
                  "id": 132628,
                  "name": "Kudachi",
                  "latitude": "16.62784000",
                  "longitude": "74.85408000"
              },
              {
                  "id": 132736,
                  "name": "Kudligi",
                  "latitude": "14.90500000",
                  "longitude": "76.38527000"
              },
              {
                  "id": 132642,
                  "name": "Kumsi",
                  "latitude": "14.05455000",
                  "longitude": "75.39992000"
              },
              {
                  "id": 132643,
                  "name": "Kumta",
                  "latitude": "14.42853000",
                  "longitude": "74.41890000"
              },
              {
                  "id": 132646,
                  "name": "Kundgol",
                  "latitude": "15.25612000",
                  "longitude": "75.24735000"
              },
              {
                  "id": 132648,
                  "name": "Kunigal",
                  "latitude": "13.02319000",
                  "longitude": "77.02518000"
              },
              {
                  "id": 132658,
                  "name": "Kurgunta",
                  "latitude": "17.19321000",
                  "longitude": "77.35772000"
              },
              {
                  "id": 132668,
                  "name": "Kushalnagar",
                  "latitude": "12.45795000",
                  "longitude": "75.95904000"
              },
              {
                  "id": 132666,
                  "name": "Kushtagi",
                  "latitude": "15.75623000",
                  "longitude": "76.19112000"
              },
              {
                  "id": 132752,
                  "name": "Lakshmeshwar",
                  "latitude": "15.12689000",
                  "longitude": "75.46935000"
              },
              {
                  "id": 132765,
                  "name": "Lingsugur",
                  "latitude": "16.15876000",
                  "longitude": "76.52174000"
              },
              {
                  "id": 132774,
                  "name": "Londa",
                  "latitude": "15.46907000",
                  "longitude": "74.51906000"
              },
              {
                  "id": 132809,
                  "name": "Maddagiri",
                  "latitude": "13.66035000",
                  "longitude": "77.21239000"
              },
              {
                  "id": 132810,
                  "name": "Maddur",
                  "latitude": "12.58283000",
                  "longitude": "77.04294000"
              },
              {
                  "id": 132817,
                  "name": "Madikeri",
                  "latitude": "12.42602000",
                  "longitude": "75.73820000"
              },
              {
                  "id": 133060,
                  "name": "Magadi",
                  "latitude": "12.95706000",
                  "longitude": "77.22374000"
              },
              {
                  "id": 132847,
                  "name": "Mahalingpur",
                  "latitude": "16.38880000",
                  "longitude": "75.10873000"
              },
              {
                  "id": 132868,
                  "name": "Malavalli",
                  "latitude": "12.38556000",
                  "longitude": "77.06045000"
              },
              {
                  "id": 132877,
                  "name": "Malpe",
                  "latitude": "13.34962000",
                  "longitude": "74.70394000"
              },
              {
                  "id": 133071,
                  "name": "Malur",
                  "latitude": "13.00322000",
                  "longitude": "77.93798000"
              },
              {
                  "id": 132898,
                  "name": "Mandya",
                  "latitude": "12.52230000",
                  "longitude": "76.89746000"
              },
              {
                  "id": 132905,
                  "name": "Mangaluru",
                  "latitude": "12.91723000",
                  "longitude": "74.85603000"
              },
              {
                  "id": 132912,
                  "name": "Manipal",
                  "latitude": "13.35000000",
                  "longitude": "74.78333000"
              },
              {
                  "id": 133083,
                  "name": "Manvi",
                  "latitude": "15.99126000",
                  "longitude": "77.05034000"
              },
              {
                  "id": 133093,
                  "name": "Mayakonda",
                  "latitude": "14.28894000",
                  "longitude": "76.08305000"
              },
              {
                  "id": 132964,
                  "name": "Melukote",
                  "latitude": "12.66258000",
                  "longitude": "76.64861000"
              },
              {
                  "id": 133098,
                  "name": "Mudbidri",
                  "latitude": "13.06653000",
                  "longitude": "74.99525000"
              },
              {
                  "id": 133008,
                  "name": "Muddebihal",
                  "latitude": "16.33782000",
                  "longitude": "76.13173000"
              },
              {
                  "id": 133009,
                  "name": "Mudgal",
                  "latitude": "16.01191000",
                  "longitude": "76.44203000"
              },
              {
                  "id": 133010,
                  "name": "Mudgere",
                  "latitude": "13.13353000",
                  "longitude": "75.64160000"
              },
              {
                  "id": 133011,
                  "name": "Mudhol",
                  "latitude": "16.33354000",
                  "longitude": "75.28305000"
              },
              {
                  "id": 133020,
                  "name": "Mulbagal",
                  "latitude": "13.16352000",
                  "longitude": "78.39346000"
              },
              {
                  "id": 133021,
                  "name": "Mulgund",
                  "latitude": "15.28070000",
                  "longitude": "75.52132000"
              },
              {
                  "id": 133101,
                  "name": "Mulki",
                  "latitude": "13.09101000",
                  "longitude": "74.79353000"
              },
              {
                  "id": 133026,
                  "name": "Mundargi",
                  "latitude": "15.20677000",
                  "longitude": "75.88390000"
              },
              {
                  "id": 133027,
                  "name": "Mundgod",
                  "latitude": "14.97144000",
                  "longitude": "75.03658000"
              },
              {
                  "id": 133033,
                  "name": "Munirabad",
                  "latitude": "15.30928000",
                  "longitude": "76.33830000"
              },
              {
                  "id": 133041,
                  "name": "Murudeshwara",
                  "latitude": "14.09430000",
                  "longitude": "74.48450000"
              },
              {
                  "id": 133053,
                  "name": "Mysuru",
                  "latitude": "12.23000000",
                  "longitude": "76.42000000"
              },
              {
                  "id": 133254,
                  "name": "Nagamangala",
                  "latitude": "12.81939000",
                  "longitude": "76.75456000"
              },
              {
                  "id": 133151,
                  "name": "Nanjangud",
                  "latitude": "12.11764000",
                  "longitude": "76.68397000"
              },
              {
                  "id": 133159,
                  "name": "Narasimharajapura",
                  "latitude": "13.61075000",
                  "longitude": "75.51200000"
              },
              {
                  "id": 133164,
                  "name": "Naregal",
                  "latitude": "15.57316000",
                  "longitude": "75.80805000"
              },
              {
                  "id": 133167,
                  "name": "Nargund",
                  "latitude": "15.72299000",
                  "longitude": "75.38666000"
              },
              {
                  "id": 133184,
                  "name": "Navalgund",
                  "latitude": "15.55877000",
                  "longitude": "75.35305000"
              },
              {
                  "id": 133204,
                  "name": "Nelamangala",
                  "latitude": "13.09978000",
                  "longitude": "77.39364000"
              },
              {
                  "id": 133249,
                  "name": "Nyamti",
                  "latitude": "14.14869000",
                  "longitude": "75.57641000"
              },
              {
                  "id": 133541,
                  "name": "Pangala",
                  "latitude": "13.25000000",
                  "longitude": "74.75000000"
              },
              {
                  "id": 133560,
                  "name": "Pavugada",
                  "latitude": "14.09953000",
                  "longitude": "77.28018000"
              },
              {
                  "id": 133458,
                  "name": "Piriyapatna",
                  "latitude": "12.33497000",
                  "longitude": "76.10073000"
              },
              {
                  "id": 133474,
                  "name": "Ponnampet",
                  "latitude": "12.14473000",
                  "longitude": "75.94514000"
              },
              {
                  "id": 133518,
                  "name": "Puttur",
                  "latitude": "12.75975000",
                  "longitude": "75.20169000"
              },
              {
                  "id": 133577,
                  "name": "Rabkavi",
                  "latitude": "16.47567000",
                  "longitude": "75.11060000"
              },
              {
                  "id": 133586,
                  "name": "Raichur",
                  "latitude": "16.16000000",
                  "longitude": "76.91000000"
              },
              {
                  "id": 133598,
                  "name": "Ramanagara",
                  "latitude": "12.65000000",
                  "longitude": "77.35000000"
              },
              {
                  "id": 133719,
                  "name": "Ranibennur",
                  "latitude": "14.62239000",
                  "longitude": "75.62951000"
              },
              {
                  "id": 133731,
                  "name": "Raybag",
                  "latitude": "16.49178000",
                  "longitude": "74.77391000"
              },
              {
                  "id": 133642,
                  "name": "Robertsonpet",
                  "latitude": "12.95629000",
                  "longitude": "78.27539000"
              },
              {
                  "id": 133649,
                  "name": "Ron",
                  "latitude": "15.69935000",
                  "longitude": "75.73408000"
              },
              {
                  "id": 133743,
                  "name": "Sadalgi",
                  "latitude": "16.55870000",
                  "longitude": "74.53211000"
              },
              {
                  "id": 134060,
                  "name": "Sagar",
                  "latitude": "14.16498000",
                  "longitude": "75.02901000"
              },
              {
                  "id": 133760,
                  "name": "Sakleshpur",
                  "latitude": "12.94119000",
                  "longitude": "75.78467000"
              },
              {
                  "id": 133779,
                  "name": "Sandur",
                  "latitude": "15.08613000",
                  "longitude": "76.54692000"
              },
              {
                  "id": 133788,
                  "name": "Sanivarsante",
                  "latitude": "12.72824000",
                  "longitude": "75.88669000"
              },
              {
                  "id": 133789,
                  "name": "Sankeshwar",
                  "latitude": "16.25649000",
                  "longitude": "74.48195000"
              },
              {
                  "id": 133806,
                  "name": "Sargur",
                  "latitude": "11.99971000",
                  "longitude": "76.39611000"
              },
              {
                  "id": 133827,
                  "name": "Saundatti",
                  "latitude": "15.76615000",
                  "longitude": "75.11778000"
              },
              {
                  "id": 133830,
                  "name": "Savanur",
                  "latitude": "14.97335000",
                  "longitude": "75.33724000"
              },
              {
                  "id": 133846,
                  "name": "Seram",
                  "latitude": "17.17859000",
                  "longitude": "77.28998000"
              },
              {
                  "id": 133907,
                  "name": "Shahabad",
                  "latitude": "17.13070000",
                  "longitude": "76.94361000"
              },
              {
                  "id": 133898,
                  "name": "Shahpur",
                  "latitude": "16.69605000",
                  "longitude": "76.84220000"
              },
              {
                  "id": 133866,
                  "name": "Shiggaon",
                  "latitude": "14.99053000",
                  "longitude": "75.22499000"
              },
              {
                  "id": 133868,
                  "name": "Shikarpur",
                  "latitude": "14.26980000",
                  "longitude": "75.35643000"
              },
              {
                  "id": 133872,
                  "name": "Shimoga",
                  "latitude": "14.05000000",
                  "longitude": "75.16000000"
              },
              {
                  "id": 133876,
                  "name": "Shirhatti",
                  "latitude": "15.23352000",
                  "longitude": "75.57996000"
              },
              {
                  "id": 133884,
                  "name": "Shorapur",
                  "latitude": "16.52100000",
                  "longitude": "76.75738000"
              },
              {
                  "id": 133887,
                  "name": "Shrirangapattana",
                  "latitude": "12.42264000",
                  "longitude": "76.68439000"
              },
              {
                  "id": 133920,
                  "name": "Siddapur",
                  "latitude": "14.34322000",
                  "longitude": "74.89400000"
              },
              {
                  "id": 133924,
                  "name": "Sidlaghatta",
                  "latitude": "13.38896000",
                  "longitude": "77.86444000"
              },
              {
                  "id": 133941,
                  "name": "Sindgi",
                  "latitude": "16.91883000",
                  "longitude": "76.23368000"
              },
              {
                  "id": 133942,
                  "name": "Sindhnur",
                  "latitude": "15.76983000",
                  "longitude": "76.75581000"
              },
              {
                  "id": 134087,
                  "name": "Sira",
                  "latitude": "13.74155000",
                  "longitude": "76.90430000"
              },
              {
                  "id": 133962,
                  "name": "Sirsi",
                  "latitude": "14.62072000",
                  "longitude": "74.83554000"
              },
              {
                  "id": 133967,
                  "name": "Siruguppa",
                  "latitude": "15.63000000",
                  "longitude": "76.89217000"
              },
              {
                  "id": 133989,
                  "name": "Someshwar",
                  "latitude": "13.49112000",
                  "longitude": "75.06646000"
              },
              {
                  "id": 133991,
                  "name": "Somvarpet",
                  "latitude": "12.59698000",
                  "longitude": "75.84957000"
              },
              {
                  "id": 134001,
                  "name": "Sorab",
                  "latitude": "14.38144000",
                  "longitude": "75.09183000"
              },
              {
                  "id": 134024,
                  "name": "Sravana Belgola",
                  "latitude": "12.85737000",
                  "longitude": "76.48886000"
              },
              {
                  "id": 134021,
                  "name": "Sringeri",
                  "latitude": "13.41698000",
                  "longitude": "75.25271000"
              },
              {
                  "id": 134029,
                  "name": "Srinivaspur",
                  "latitude": "13.33914000",
                  "longitude": "78.21175000"
              },
              {
                  "id": 134042,
                  "name": "Sulya",
                  "latitude": "12.56100000",
                  "longitude": "75.38741000"
              },
              {
                  "id": 134047,
                  "name": "Suntikoppa",
                  "latitude": "12.45594000",
                  "longitude": "75.82970000"
              },
              {
                  "id": 134234,
                  "name": "Talikota",
                  "latitude": "16.47311000",
                  "longitude": "76.31085000"
              },
              {
                  "id": 134116,
                  "name": "Tarikere",
                  "latitude": "13.70954000",
                  "longitude": "75.81382000"
              },
              {
                  "id": 134125,
                  "name": "Tekkalakote",
                  "latitude": "15.53444000",
                  "longitude": "76.87703000"
              },
              {
                  "id": 134133,
                  "name": "Terdal",
                  "latitude": "16.49379000",
                  "longitude": "75.04667000"
              },
              {
                  "id": 134176,
                  "name": "Tiptur",
                  "latitude": "13.25630000",
                  "longitude": "76.47768000"
              },
              {
                  "id": 134247,
                  "name": "Tirthahalli",
                  "latitude": "13.68835000",
                  "longitude": "75.24548000"
              },
              {
                  "id": 134182,
                  "name": "Tirumakudal Narsipur",
                  "latitude": "12.21207000",
                  "longitude": "76.90180000"
              },
              {
                  "id": 134219,
                  "name": "Tumakuru",
                  "latitude": "13.50000000",
                  "longitude": "77.00000000"
              },
              {
                  "id": 134225,
                  "name": "Turuvekere",
                  "latitude": "13.16374000",
                  "longitude": "76.66641000"
              },
              {
                  "id": 134260,
                  "name": "Udupi",
                  "latitude": "13.50000000",
                  "longitude": "74.87000000"
              },
              {
                  "id": 134268,
                  "name": "Ullal",
                  "latitude": "12.80569000",
                  "longitude": "74.86058000"
              },
              {
                  "id": 134300,
                  "name": "Uttar Kannada",
                  "latitude": "14.88333000",
                  "longitude": "74.58333000"
              },
              {
                  "id": 134307,
                  "name": "Vadigenhalli",
                  "latitude": "13.29724000",
                  "longitude": "77.80184000"
              },
              {
                  "id": 58031,
                  "name": "Vijayapura",
                  "latitude": "16.82442000",
                  "longitude": "75.71537000"
              },
              {
                  "id": 134386,
                  "name": "Virarajendrapet",
                  "latitude": "12.19644000",
                  "longitude": "75.80512000"
              },
              {
                  "id": 134414,
                  "name": "Wadi",
                  "latitude": "17.05183000",
                  "longitude": "76.99048000"
              },
              {
                  "id": 134420,
                  "name": "Yadgir",
                  "latitude": "16.73000000",
                  "longitude": "76.94000000"
              },
              {
                  "id": 134429,
                  "name": "Yelahanka",
                  "latitude": "13.10073000",
                  "longitude": "77.59632000"
              },
              {
                  "id": 134430,
                  "name": "Yelandur",
                  "latitude": "12.04629000",
                  "longitude": "77.03034000"
              },
              {
                  "id": 134431,
                  "name": "Yelbarga",
                  "latitude": "15.61545000",
                  "longitude": "76.01184000"
              },
              {
                  "id": 134433,
                  "name": "Yellapur",
                  "latitude": "14.96370000",
                  "longitude": "74.70929000"
              }
          ]
      },
      {
          "id": 4028,
          "name": "Kerala",
          "state_code": "KL",
          "latitude": "10.85051590",
          "longitude": "76.27108330",
          "type": "state",
          "cities": [
              {
                  "id": 57596,
                  "name": "Adur",
                  "latitude": "9.15595000",
                  "longitude": "76.73192000"
              },
              {
                  "id": 57637,
                  "name": "Alappuzha",
                  "latitude": "9.49004000",
                  "longitude": "76.32640000"
              },
              {
                  "id": 57647,
                  "name": "Aluva",
                  "latitude": "10.10764000",
                  "longitude": "76.35158000"
              },
              {
                  "id": 57650,
                  "name": "Alwaye",
                  "latitude": "10.10649000",
                  "longitude": "76.35484000"
              },
              {
                  "id": 57703,
                  "name": "Angamali",
                  "latitude": "10.19055000",
                  "longitude": "76.38789000"
              },
              {
                  "id": 57738,
                  "name": "Aroor",
                  "latitude": "9.86940000",
                  "longitude": "76.30498000"
              },
              {
                  "id": 57742,
                  "name": "Arukutti",
                  "latitude": "9.86667000",
                  "longitude": "76.35000000"
              },
              {
                  "id": 57762,
                  "name": "Attingal",
                  "latitude": "8.69609000",
                  "longitude": "76.81507000"
              },
              {
                  "id": 57772,
                  "name": "Avanoor",
                  "latitude": "10.60826000",
                  "longitude": "76.17620000"
              },
              {
                  "id": 57778,
                  "name": "Azhikkal",
                  "latitude": "11.91524000",
                  "longitude": "75.34761000"
              },
              {
                  "id": 57786,
                  "name": "Badagara",
                  "latitude": "11.59776000",
                  "longitude": "75.58142000"
              },
              {
                  "id": 57945,
                  "name": "Beypore",
                  "latitude": "11.17151000",
                  "longitude": "75.80611000"
              },
              {
                  "id": 58195,
                  "name": "Changanacheri",
                  "latitude": "9.44203000",
                  "longitude": "76.53604000"
              },
              {
                  "id": 131609,
                  "name": "Chelakara",
                  "latitude": "10.69289000",
                  "longitude": "76.34387000"
              },
              {
                  "id": 131516,
                  "name": "Chengannur",
                  "latitude": "9.31575000",
                  "longitude": "76.61513000"
              },
              {
                  "id": 131519,
                  "name": "Cherpulassery",
                  "latitude": "10.87655000",
                  "longitude": "76.30932000"
              },
              {
                  "id": 131521,
                  "name": "Cherthala",
                  "latitude": "9.68444000",
                  "longitude": "76.33558000"
              },
              {
                  "id": 131524,
                  "name": "Chetwayi",
                  "latitude": "10.52885000",
                  "longitude": "76.04793000"
              },
              {
                  "id": 131576,
                  "name": "Chittur",
                  "latitude": "10.69967000",
                  "longitude": "76.74710000"
              },
              {
                  "id": 131617,
                  "name": "Cochin",
                  "latitude": "9.93988000",
                  "longitude": "76.26022000"
              },
              {
                  "id": 131724,
                  "name": "Dharmadam",
                  "latitude": "11.77538000",
                  "longitude": "75.46459000"
              },
              {
                  "id": 131829,
                  "name": "Edakkulam",
                  "latitude": "10.61020000",
                  "longitude": "76.18352000"
              },
              {
                  "id": 131835,
                  "name": "Elur",
                  "latitude": "10.06667000",
                  "longitude": "76.28333000"
              },
              {
                  "id": 131844,
                  "name": "Erattupetta",
                  "latitude": "9.68747000",
                  "longitude": "76.77891000"
              },
              {
                  "id": 131840,
                  "name": "Ernakulam",
                  "latitude": "10.00000000",
                  "longitude": "76.50000000"
              },
              {
                  "id": 131874,
                  "name": "Ferokh",
                  "latitude": "11.17989000",
                  "longitude": "75.84141000"
              },
              {
                  "id": 132038,
                  "name": "Guruvayur",
                  "latitude": "10.59430000",
                  "longitude": "76.04110000"
              },
              {
                  "id": 132154,
                  "name": "Idukki",
                  "latitude": "10.00000000",
                  "longitude": "77.00000000"
              },
              {
                  "id": 132170,
                  "name": "Iringal",
                  "latitude": "11.55929000",
                  "longitude": "75.61663000"
              },
              {
                  "id": 132171,
                  "name": "Irinjalakuda",
                  "latitude": "10.34238000",
                  "longitude": "76.21124000"
              },
              {
                  "id": 132323,
                  "name": "Kadakkavoor",
                  "latitude": "8.67921000",
                  "longitude": "76.76714000"
              },
              {
                  "id": 132344,
                  "name": "Kalamassery",
                  "latitude": "10.06140000",
                  "longitude": "76.32631000"
              },
              {
                  "id": 132350,
                  "name": "Kalavoor",
                  "latitude": "9.57046000",
                  "longitude": "76.32756000"
              },
              {
                  "id": 132356,
                  "name": "Kalpatta",
                  "latitude": "11.60871000",
                  "longitude": "76.08343000"
              },
              {
                  "id": 132707,
                  "name": "Kannangad",
                  "latitude": "12.30814000",
                  "longitude": "75.10632000"
              },
              {
                  "id": 132379,
                  "name": "Kannavam",
                  "latitude": "11.84450000",
                  "longitude": "75.66266000"
              },
              {
                  "id": 132383,
                  "name": "Kannur",
                  "latitude": "12.16667000",
                  "longitude": "75.33333000"
              },
              {
                  "id": 132720,
                  "name": "Kasaragod",
                  "latitude": "12.49838000",
                  "longitude": "74.98959000"
              },
              {
                  "id": 132721,
                  "name": "Kasaragod District",
                  "latitude": "12.49246000",
                  "longitude": "74.99062000"
              },
              {
                  "id": 132428,
                  "name": "Kattanam",
                  "latitude": "9.17614000",
                  "longitude": "76.56325000"
              },
              {
                  "id": 132731,
                  "name": "Kayankulam",
                  "latitude": "9.18173000",
                  "longitude": "76.50093000"
              },
              {
                  "id": 132536,
                  "name": "Kizhake Chalakudi",
                  "latitude": "10.30067000",
                  "longitude": "76.33763000"
              },
              {
                  "id": 132545,
                  "name": "Kodungallur",
                  "latitude": "10.23263000",
                  "longitude": "76.19513000"
              },
              {
                  "id": 132558,
                  "name": "Kollam",
                  "latitude": "8.88113000",
                  "longitude": "76.58469000"
              },
              {
                  "id": 132595,
                  "name": "Kotamangalam",
                  "latitude": "10.06435000",
                  "longitude": "76.62843000"
              },
              {
                  "id": 132609,
                  "name": "Kottayam",
                  "latitude": "9.66667000",
                  "longitude": "76.66667000"
              },
              {
                  "id": 132614,
                  "name": "Kovalam",
                  "latitude": "8.36667000",
                  "longitude": "76.99667000"
              },
              {
                  "id": 132619,
                  "name": "Kozhikode",
                  "latitude": "11.50000000",
                  "longitude": "76.00000000"
              },
              {
                  "id": 132639,
                  "name": "Kumbalam",
                  "latitude": "9.90630000",
                  "longitude": "76.31127000"
              },
              {
                  "id": 132649,
                  "name": "Kunnamangalam",
                  "latitude": "11.30459000",
                  "longitude": "75.87772000"
              },
              {
                  "id": 132650,
                  "name": "Kunnamkulam",
                  "latitude": "10.64667000",
                  "longitude": "76.06695000"
              },
              {
                  "id": 132652,
                  "name": "Kunnumma",
                  "latitude": "9.35672000",
                  "longitude": "76.41343000"
              },
              {
                  "id": 132669,
                  "name": "Kutiatodu",
                  "latitude": "9.80000000",
                  "longitude": "76.33333000"
              },
              {
                  "id": 132671,
                  "name": "Kuttampuzha",
                  "latitude": "10.15033000",
                  "longitude": "76.73544000"
              },
              {
                  "id": 132794,
                  "name": "Lalam",
                  "latitude": "9.71667000",
                  "longitude": "76.70000000"
              },
              {
                  "id": 132852,
                  "name": "Mahe",
                  "latitude": "11.70172000",
                  "longitude": "75.53474000"
              },
              {
                  "id": 132866,
                  "name": "Malappuram",
                  "latitude": "11.00000000",
                  "longitude": "76.16667000"
              },
              {
                  "id": 132913,
                  "name": "Manjeri",
                  "latitude": "11.12018000",
                  "longitude": "76.11996000"
              },
              {
                  "id": 132915,
                  "name": "Manjeshvar",
                  "latitude": "12.71287000",
                  "longitude": "74.88857000"
              },
              {
                  "id": 132920,
                  "name": "Mannarakkat",
                  "latitude": "10.99223000",
                  "longitude": "76.46418000"
              },
              {
                  "id": 132933,
                  "name": "Marayur",
                  "latitude": "10.27641000",
                  "longitude": "77.16205000"
              },
              {
                  "id": 132942,
                  "name": "Mattanur",
                  "latitude": "11.93018000",
                  "longitude": "75.57152000"
              },
              {
                  "id": 133092,
                  "name": "Mavelikara",
                  "latitude": "9.25929000",
                  "longitude": "76.55642000"
              },
              {
                  "id": 132950,
                  "name": "Mavoor",
                  "latitude": "11.26667000",
                  "longitude": "75.91667000"
              },
              {
                  "id": 133023,
                  "name": "Muluppilagadu",
                  "latitude": "11.79788000",
                  "longitude": "75.45111000"
              },
              {
                  "id": 133034,
                  "name": "Munnar",
                  "latitude": "10.08818000",
                  "longitude": "77.06239000"
              },
              {
                  "id": 133103,
                  "name": "Muvattupula",
                  "latitude": "9.98493000",
                  "longitude": "76.57728000"
              },
              {
                  "id": 133050,
                  "name": "Muvattupuzha",
                  "latitude": "9.97985000",
                  "longitude": "76.57381000"
              },
              {
                  "id": 133253,
                  "name": "Nadapuram",
                  "latitude": "11.68465000",
                  "longitude": "75.65493000"
              },
              {
                  "id": 133107,
                  "name": "Naduvannur",
                  "latitude": "11.48772000",
                  "longitude": "75.77511000"
              },
              {
                  "id": 133198,
                  "name": "Nedumangad",
                  "latitude": "8.60267000",
                  "longitude": "77.00139000"
              },
              {
                  "id": 133211,
                  "name": "Neyyattinkara",
                  "latitude": "8.39854000",
                  "longitude": "77.08586000"
              },
              {
                  "id": 133287,
                  "name": "Nileshwar",
                  "latitude": "12.25953000",
                  "longitude": "75.13520000"
              },
              {
                  "id": 133306,
                  "name": "Ottappalam",
                  "latitude": "10.77350000",
                  "longitude": "76.37758000"
              },
              {
                  "id": 133321,
                  "name": "Palackattumala",
                  "latitude": "9.74356000",
                  "longitude": "76.62940000"
              },
              {
                  "id": 133322,
                  "name": "Palakkad district",
                  "latitude": "10.77500000",
                  "longitude": "76.65100000"
              },
              {
                  "id": 133528,
                  "name": "Palghat",
                  "latitude": "10.77319000",
                  "longitude": "76.65366000"
              },
              {
                  "id": 133343,
                  "name": "Panamaram",
                  "latitude": "11.74014000",
                  "longitude": "76.07369000"
              },
              {
                  "id": 133546,
                  "name": "Pappinissheri",
                  "latitude": "11.95655000",
                  "longitude": "75.34034000"
              },
              {
                  "id": 133357,
                  "name": "Paravur Tekkumbhagam",
                  "latitude": "8.79470000",
                  "longitude": "76.66798000"
              },
              {
                  "id": 133359,
                  "name": "Pariyapuram",
                  "latitude": "11.01667000",
                  "longitude": "75.86667000"
              },
              {
                  "id": 133380,
                  "name": "Pathanamthitta",
                  "latitude": "9.26667000",
                  "longitude": "76.78333000"
              },
              {
                  "id": 133389,
                  "name": "Pattanamtitta",
                  "latitude": "9.28068000",
                  "longitude": "76.86967000"
              },
              {
                  "id": 133399,
                  "name": "Payyannur",
                  "latitude": "12.09350000",
                  "longitude": "75.20249000"
              },
              {
                  "id": 153628,
                  "name": "Perinthalmanna",
                  "latitude": "10.97768000",
                  "longitude": "76.22850800"
              },
              {
                  "id": 133423,
                  "name": "Perumbavoor",
                  "latitude": "10.10695000",
                  "longitude": "76.47366000"
              },
              {
                  "id": 133424,
                  "name": "Perumpavur",
                  "latitude": "10.11544000",
                  "longitude": "76.47611000"
              },
              {
                  "id": 133427,
                  "name": "Perya",
                  "latitude": "11.83334000",
                  "longitude": "75.85408000"
              },
              {
                  "id": 133457,
                  "name": "Piravam",
                  "latitude": "9.86667000",
                  "longitude": "76.50000000"
              },
              {
                  "id": 133472,
                  "name": "Ponmana",
                  "latitude": "9.00798000",
                  "longitude": "76.52023000"
              },
              {
                  "id": 133477,
                  "name": "Ponnani",
                  "latitude": "10.76695000",
                  "longitude": "75.92523000"
              },
              {
                  "id": 133502,
                  "name": "Punalur",
                  "latitude": "9.01956000",
                  "longitude": "76.92261000"
              },
              {
                  "id": 133692,
                  "name": "Ramamangalam",
                  "latitude": "9.93333000",
                  "longitude": "76.50000000"
              },
              {
                  "id": 133915,
                  "name": "Sharanur",
                  "latitude": "10.76181000",
                  "longitude": "76.27078000"
              },
              {
                  "id": 133865,
                  "name": "Shertallai",
                  "latitude": "9.68581000",
                  "longitude": "76.33996000"
              },
              {
                  "id": 134103,
                  "name": "Talipparamba",
                  "latitude": "12.04161000",
                  "longitude": "75.35927000"
              },
              {
                  "id": 134129,
                  "name": "Tellicherry",
                  "latitude": "11.74811000",
                  "longitude": "75.49290000"
              },
              {
                  "id": 134142,
                  "name": "Thanniyam",
                  "latitude": "10.41667000",
                  "longitude": "76.13333000"
              },
              {
                  "id": 134154,
                  "name": "Thiruvananthapuram",
                  "latitude": "8.60399000",
                  "longitude": "76.98574000"
              },
              {
                  "id": 134161,
                  "name": "Thrissur",
                  "latitude": "10.51667000",
                  "longitude": "76.21667000"
              },
              {
                  "id": 134192,
                  "name": "Tirur",
                  "latitude": "10.91368000",
                  "longitude": "75.92118000"
              },
              {
                  "id": 134194,
                  "name": "Tiruvalla",
                  "latitude": "9.38160000",
                  "longitude": "76.57489000"
              },
              {
                  "id": 134313,
                  "name": "Vaikam",
                  "latitude": "9.74858000",
                  "longitude": "76.39637000"
              },
              {
                  "id": 134330,
                  "name": "Varkala",
                  "latitude": "8.73330000",
                  "longitude": "76.71670000"
              },
              {
                  "id": 134336,
                  "name": "Vayalar",
                  "latitude": "9.71158000",
                  "longitude": "76.33888000"
              },
              {
                  "id": 134353,
                  "name": "Vettur",
                  "latitude": "8.71742000",
                  "longitude": "76.72582000"
              },
              {
                  "id": 134400,
                  "name": "Wayanad",
                  "latitude": "11.60500000",
                  "longitude": "76.08300000"
              }
          ]
      },
      {
          "id": 4852,
          "name": "Ladakh",
          "state_code": "LA",
          "latitude": "34.22684750",
          "longitude": "77.56194190",
          "type": "Union territory",
          "cities": [
              {
                  "id": 132399,
                  "name": "Kargil",
                  "latitude": "34.55765000",
                  "longitude": "76.12622000"
              },
              {
                  "id": 132762,
                  "name": "Leh",
                  "latitude": "34.16504000",
                  "longitude": "77.58402000"
              }
          ]
      },
      {
          "id": 4019,
          "name": "Lakshadweep",
          "state_code": "LD",
          "latitude": "10.32802650",
          "longitude": "72.78463360",
          "type": "Union territory",
          "cities": [
              {
                  "id": 132432,
                  "name": "Kavaratti",
                  "latitude": "10.56688000",
                  "longitude": "72.64203000"
              },
              {
                  "id": 132750,
                  "name": "Lakshadweep",
                  "latitude": "11.27333000",
                  "longitude": "74.04582000"
              }
          ]
      },
      {
          "id": 4039,
          "name": "Madhya Pradesh",
          "state_code": "MP",
          "latitude": "22.97342290",
          "longitude": "78.65689420",
          "type": "state",
          "cities": [
              {
                  "id": 57599,
                  "name": "Agar",
                  "latitude": "23.71177000",
                  "longitude": "76.01571000"
              },
              {
                  "id": 57611,
                  "name": "Ajaigarh",
                  "latitude": "24.89879000",
                  "longitude": "80.25921000"
              },
              {
                  "id": 57626,
                  "name": "Akodia",
                  "latitude": "23.38027000",
                  "longitude": "76.59875000"
              },
              {
                  "id": 57631,
                  "name": "Alampur",
                  "latitude": "26.02514000",
                  "longitude": "78.79697000"
              },
              {
                  "id": 57639,
                  "name": "Alirajpur",
                  "latitude": "22.31384000",
                  "longitude": "74.36452000"
              },
              {
                  "id": 57646,
                  "name": "Alot",
                  "latitude": "23.76336000",
                  "longitude": "75.55662000"
              },
              {
                  "id": 57691,
                  "name": "Amanganj",
                  "latitude": "24.42664000",
                  "longitude": "80.03579000"
              },
              {
                  "id": 57659,
                  "name": "Amarkantak",
                  "latitude": "22.67486000",
                  "longitude": "81.75908000"
              },
              {
                  "id": 57663,
                  "name": "Amarpatan",
                  "latitude": "24.31371000",
                  "longitude": "80.97703000"
              },
              {
                  "id": 57664,
                  "name": "Amarwara",
                  "latitude": "22.29780000",
                  "longitude": "79.16943000"
              },
              {
                  "id": 57673,
                  "name": "Ambah",
                  "latitude": "26.70423000",
                  "longitude": "78.22678000"
              },
              {
                  "id": 57680,
                  "name": "Amla",
                  "latitude": "21.92485000",
                  "longitude": "78.12786000"
              },
              {
                  "id": 57706,
                  "name": "Anjad",
                  "latitude": "22.04171000",
                  "longitude": "75.05519000"
              },
              {
                  "id": 57719,
                  "name": "Antri",
                  "latitude": "26.05804000",
                  "longitude": "78.21027000"
              },
              {
                  "id": 57721,
                  "name": "Anuppur",
                  "latitude": "23.05674000",
                  "longitude": "81.68399000"
              },
              {
                  "id": 134462,
                  "name": "Aron",
                  "latitude": "24.38109000",
                  "longitude": "77.41739000"
              },
              {
                  "id": 57750,
                  "name": "Ashoknagar",
                  "latitude": "24.58000000",
                  "longitude": "77.73000000"
              },
              {
                  "id": 57752,
                  "name": "Ashta",
                  "latitude": "23.01754000",
                  "longitude": "76.72208000"
              },
              {
                  "id": 58103,
                  "name": "Babai",
                  "latitude": "22.70256000",
                  "longitude": "77.93494000"
              },
              {
                  "id": 57788,
                  "name": "Badarwas",
                  "latitude": "24.97516000",
                  "longitude": "77.56490000"
              },
              {
                  "id": 57793,
                  "name": "Badnawar",
                  "latitude": "23.02181000",
                  "longitude": "75.23268000"
              },
              {
                  "id": 58106,
                  "name": "Bagh",
                  "latitude": "22.35905000",
                  "longitude": "74.79052000"
              },
              {
                  "id": 58111,
                  "name": "Bagli",
                  "latitude": "22.64124000",
                  "longitude": "76.34877000"
              },
              {
                  "id": 57811,
                  "name": "Baihar",
                  "latitude": "22.10133000",
                  "longitude": "80.54967000"
              },
              {
                  "id": 57813,
                  "name": "Baikunthpur",
                  "latitude": "24.72768000",
                  "longitude": "81.40975000"
              },
              {
                  "id": 57821,
                  "name": "Bakshwaha",
                  "latitude": "24.25106000",
                  "longitude": "79.28618000"
              },
              {
                  "id": 58119,
                  "name": "Balaghat",
                  "latitude": "21.96667000",
                  "longitude": "80.33333000"
              },
              {
                  "id": 57824,
                  "name": "Baldeogarh",
                  "latitude": "24.75619000",
                  "longitude": "79.06715000"
              },
              {
                  "id": 57838,
                  "name": "Bamna",
                  "latitude": "23.09454000",
                  "longitude": "74.76164000"
              },
              {
                  "id": 58122,
                  "name": "Bamor Kalan",
                  "latitude": "24.89298000",
                  "longitude": "78.15105000"
              },
              {
                  "id": 57839,
                  "name": "Bamora",
                  "latitude": "24.05539000",
                  "longitude": "78.08925000"
              },
              {
                  "id": 57842,
                  "name": "Banda",
                  "latitude": "24.04488000",
                  "longitude": "78.96094000"
              },
              {
                  "id": 57868,
                  "name": "Barela",
                  "latitude": "23.09678000",
                  "longitude": "80.05084000"
              },
              {
                  "id": 57870,
                  "name": "Barghat",
                  "latitude": "22.03065000",
                  "longitude": "79.73280000"
              },
              {
                  "id": 57871,
                  "name": "Bargi",
                  "latitude": "22.99138000",
                  "longitude": "79.87550000"
              },
              {
                  "id": 57872,
                  "name": "Barhi",
                  "latitude": "23.90326000",
                  "longitude": "80.81516000"
              },
              {
                  "id": 57888,
                  "name": "Barwani",
                  "latitude": "22.02485000",
                  "longitude": "74.91805000"
              },
              {
                  "id": 58148,
                  "name": "Basoda",
                  "latitude": "23.85153000",
                  "longitude": "77.93652000"
              },
              {
                  "id": 57913,
                  "name": "Begamganj",
                  "latitude": "23.59917000",
                  "longitude": "78.34064000"
              },
              {
                  "id": 57935,
                  "name": "Beohari",
                  "latitude": "24.02423000",
                  "longitude": "81.37831000"
              },
              {
                  "id": 57936,
                  "name": "Berasia",
                  "latitude": "23.63134000",
                  "longitude": "77.43351000"
              },
              {
                  "id": 57940,
                  "name": "Betma",
                  "latitude": "22.68653000",
                  "longitude": "75.61456000"
              },
              {
                  "id": 57942,
                  "name": "Betul",
                  "latitude": "21.83333000",
                  "longitude": "77.83333000"
              },
              {
                  "id": 57943,
                  "name": "Betul Bazar",
                  "latitude": "21.85572000",
                  "longitude": "77.92913000"
              },
              {
                  "id": 58006,
                  "name": "Bhabhra",
                  "latitude": "22.53048000",
                  "longitude": "74.32846000"
              },
              {
                  "id": 57959,
                  "name": "Bhainsdehi",
                  "latitude": "21.64491000",
                  "longitude": "77.63023000"
              },
              {
                  "id": 58011,
                  "name": "Bhander",
                  "latitude": "25.73581000",
                  "longitude": "78.74555000"
              },
              {
                  "id": 58012,
                  "name": "Bhanpura",
                  "latitude": "24.51300000",
                  "longitude": "75.74690000"
              },
              {
                  "id": 57975,
                  "name": "Bhawaniganj",
                  "latitude": "24.41582000",
                  "longitude": "75.83552000"
              },
              {
                  "id": 57980,
                  "name": "Bhikangaon",
                  "latitude": "21.86764000",
                  "longitude": "75.96391000"
              },
              {
                  "id": 57982,
                  "name": "Bhind",
                  "latitude": "26.50000000",
                  "longitude": "78.75000000"
              },
              {
                  "id": 57985,
                  "name": "Bhitarwar",
                  "latitude": "25.79216000",
                  "longitude": "78.11085000"
              },
              {
                  "id": 57995,
                  "name": "Bhopal",
                  "latitude": "23.25469000",
                  "longitude": "77.40289000"
              },
              {
                  "id": 58025,
                  "name": "Biaora",
                  "latitude": "23.92050000",
                  "longitude": "76.91074000"
              },
              {
                  "id": 58038,
                  "name": "Bijawar",
                  "latitude": "24.62351000",
                  "longitude": "79.48994000"
              },
              {
                  "id": 58036,
                  "name": "Bijrauni",
                  "latitude": "24.93296000",
                  "longitude": "77.64352000"
              },
              {
                  "id": 58073,
                  "name": "Bodri",
                  "latitude": "23.16524000",
                  "longitude": "81.43262000"
              },
              {
                  "id": 58096,
                  "name": "Burhanpur",
                  "latitude": "21.31000000",
                  "longitude": "76.23000000"
              },
              {
                  "id": 58097,
                  "name": "Burhar",
                  "latitude": "23.21494000",
                  "longitude": "81.53204000"
              },
              {
                  "id": 58188,
                  "name": "Chanderi",
                  "latitude": "24.71312000",
                  "longitude": "78.13809000"
              },
              {
                  "id": 58189,
                  "name": "Chandia",
                  "latitude": "23.65647000",
                  "longitude": "80.70911000"
              },
              {
                  "id": 58191,
                  "name": "Chandla",
                  "latitude": "25.07148000",
                  "longitude": "80.19294000"
              },
              {
                  "id": 131532,
                  "name": "Chhatarpur",
                  "latitude": "24.75000000",
                  "longitude": "79.75000000"
              },
              {
                  "id": 131534,
                  "name": "Chhindwara",
                  "latitude": "22.05697000",
                  "longitude": "78.93958000"
              },
              {
                  "id": 131543,
                  "name": "Chichli",
                  "latitude": "22.83363000",
                  "longitude": "78.82611000"
              },
              {
                  "id": 131581,
                  "name": "Chorhat",
                  "latitude": "24.42743000",
                  "longitude": "81.66948000"
              },
              {
                  "id": 131636,
                  "name": "Daboh",
                  "latitude": "26.00239000",
                  "longitude": "78.87658000"
              },
              {
                  "id": 131637,
                  "name": "Dabra",
                  "latitude": "25.88572000",
                  "longitude": "78.33221000"
              },
              {
                  "id": 131651,
                  "name": "Damoh",
                  "latitude": "23.75000000",
                  "longitude": "79.58333000"
              },
              {
                  "id": 131662,
                  "name": "Datia",
                  "latitude": "25.75000000",
                  "longitude": "78.50000000"
              },
              {
                  "id": 131691,
                  "name": "Deori Khas",
                  "latitude": "23.39017000",
                  "longitude": "79.01630000"
              },
              {
                  "id": 131693,
                  "name": "Depalpur",
                  "latitude": "22.85095000",
                  "longitude": "75.54224000"
              },
              {
                  "id": 131707,
                  "name": "Dewas",
                  "latitude": "23.00000000",
                  "longitude": "76.16667000"
              },
              {
                  "id": 131749,
                  "name": "Dhamnod",
                  "latitude": "22.20928000",
                  "longitude": "75.47057000"
              },
              {
                  "id": 131751,
                  "name": "Dhana",
                  "latitude": "23.74697000",
                  "longitude": "78.86234000"
              },
              {
                  "id": 131753,
                  "name": "Dhar",
                  "latitude": "22.59373000",
                  "longitude": "75.29774000"
              },
              {
                  "id": 131720,
                  "name": "Dharampuri",
                  "latitude": "22.14951000",
                  "longitude": "75.34439000"
              },
              {
                  "id": 131775,
                  "name": "Dindori",
                  "latitude": "22.80000000",
                  "longitude": "81.10000000"
              },
              {
                  "id": 131848,
                  "name": "Etawa",
                  "latitude": "24.18351000",
                  "longitude": "78.20289000"
              },
              {
                  "id": 132043,
                  "name": "Gadarwara",
                  "latitude": "22.92350000",
                  "longitude": "78.78490000"
              },
              {
                  "id": 131917,
                  "name": "Garha Brahman",
                  "latitude": "23.86873000",
                  "longitude": "77.35731000"
              },
              {
                  "id": 131924,
                  "name": "Garhakota",
                  "latitude": "23.77910000",
                  "longitude": "79.14321000"
              },
              {
                  "id": 131930,
                  "name": "Gautampura",
                  "latitude": "22.98664000",
                  "longitude": "75.51921000"
              },
              {
                  "id": 131936,
                  "name": "Ghansor",
                  "latitude": "22.65976000",
                  "longitude": "79.95013000"
              },
              {
                  "id": 131965,
                  "name": "Gogapur",
                  "latitude": "23.55746000",
                  "longitude": "75.51665000"
              },
              {
                  "id": 131966,
                  "name": "Gohadi",
                  "latitude": "26.43278000",
                  "longitude": "78.44205000"
              },
              {
                  "id": 132002,
                  "name": "Govindgarh",
                  "latitude": "24.37845000",
                  "longitude": "81.29644000"
              },
              {
                  "id": 132024,
                  "name": "Guna",
                  "latitude": "24.55464000",
                  "longitude": "77.20082000"
              },
              {
                  "id": 132033,
                  "name": "Gurh",
                  "latitude": "24.50265000",
                  "longitude": "81.50037000"
              },
              {
                  "id": 132040,
                  "name": "Gwalior",
                  "latitude": "26.22983000",
                  "longitude": "78.17337000"
              },
              {
                  "id": 132070,
                  "name": "Harda",
                  "latitude": "22.23406000",
                  "longitude": "76.96431000"
              },
              {
                  "id": 132071,
                  "name": "Harda Khas",
                  "latitude": "22.34414000",
                  "longitude": "77.09536000"
              },
              {
                  "id": 132080,
                  "name": "Harpalpur",
                  "latitude": "25.28773000",
                  "longitude": "79.33279000"
              },
              {
                  "id": 132081,
                  "name": "Harrai",
                  "latitude": "22.61428000",
                  "longitude": "79.22207000"
              },
              {
                  "id": 132082,
                  "name": "Harsud",
                  "latitude": "22.09947000",
                  "longitude": "76.73423000"
              },
              {
                  "id": 132145,
                  "name": "Hatod",
                  "latitude": "22.79378000",
                  "longitude": "75.73928000"
              },
              {
                  "id": 132088,
                  "name": "Hatta",
                  "latitude": "24.13406000",
                  "longitude": "79.60119000"
              },
              {
                  "id": 132098,
                  "name": "Hindoria",
                  "latitude": "23.90345000",
                  "longitude": "79.56861000"
              },
              {
                  "id": 132120,
                  "name": "Hoshangabad",
                  "latitude": "22.58827000",
                  "longitude": "77.98887000"
              },
              {
                  "id": 132180,
                  "name": "Iawar",
                  "latitude": "23.00943000",
                  "longitude": "76.50070000"
              },
              {
                  "id": 132152,
                  "name": "Ichhawar",
                  "latitude": "23.02816000",
                  "longitude": "77.01729000"
              },
              {
                  "id": 132158,
                  "name": "Iklehra",
                  "latitude": "23.14667000",
                  "longitude": "76.39044000"
              },
              {
                  "id": 132166,
                  "name": "Indore",
                  "latitude": "22.66667000",
                  "longitude": "75.75000000"
              },
              {
                  "id": 132175,
                  "name": "Isagarh",
                  "latitude": "24.83906000",
                  "longitude": "77.88274000"
              },
              {
                  "id": 132179,
                  "name": "Itarsi",
                  "latitude": "22.61477000",
                  "longitude": "77.76222000"
              },
              {
                  "id": 132181,
                  "name": "Jabalpur",
                  "latitude": "23.16000000",
                  "longitude": "79.95000000"
              },
              {
                  "id": 132204,
                  "name": "Jaisinghnagar",
                  "latitude": "23.68582000",
                  "longitude": "81.39085000"
              },
              {
                  "id": 132206,
                  "name": "Jaithari",
                  "latitude": "23.20856000",
                  "longitude": "78.61487000"
              },
              {
                  "id": 132309,
                  "name": "Jamai",
                  "latitude": "22.19644000",
                  "longitude": "78.59191000"
              },
              {
                  "id": 132241,
                  "name": "Jaora",
                  "latitude": "23.63783000",
                  "longitude": "75.12711000"
              },
              {
                  "id": 132251,
                  "name": "Jatara",
                  "latitude": "25.00964000",
                  "longitude": "79.04869000"
              },
              {
                  "id": 132314,
                  "name": "Jawad",
                  "latitude": "24.59916000",
                  "longitude": "74.86261000"
              },
              {
                  "id": 132275,
                  "name": "Jhabua",
                  "latitude": "22.76772000",
                  "longitude": "74.59087000"
              },
              {
                  "id": 132316,
                  "name": "Jiran",
                  "latitude": "24.30871000",
                  "longitude": "74.89087000"
              },
              {
                  "id": 132283,
                  "name": "Jobat",
                  "latitude": "22.41599000",
                  "longitude": "74.56828000"
              },
              {
                  "id": 132333,
                  "name": "Kailaras",
                  "latitude": "26.30498000",
                  "longitude": "77.61600000"
              },
              {
                  "id": 132336,
                  "name": "Kaimori",
                  "latitude": "23.38465000",
                  "longitude": "79.74420000"
              },
              {
                  "id": 132382,
                  "name": "Kannod",
                  "latitude": "22.66764000",
                  "longitude": "76.74286000"
              },
              {
                  "id": 132397,
                  "name": "Kareli",
                  "latitude": "22.91533000",
                  "longitude": "79.06378000"
              },
              {
                  "id": 132398,
                  "name": "Karera",
                  "latitude": "25.45815000",
                  "longitude": "78.13583000"
              },
              {
                  "id": 132407,
                  "name": "Karrapur",
                  "latitude": "23.94891000",
                  "longitude": "78.86584000"
              },
              {
                  "id": 132419,
                  "name": "Kasrawad",
                  "latitude": "22.12745000",
                  "longitude": "75.61101000"
              },
              {
                  "id": 132420,
                  "name": "Katangi",
                  "latitude": "21.77369000",
                  "longitude": "79.80513000"
              },
              {
                  "id": 132424,
                  "name": "Katni",
                  "latitude": "23.83555000",
                  "longitude": "80.39417000"
              },
              {
                  "id": 132511,
                  "name": "Khachrod",
                  "latitude": "23.42322000",
                  "longitude": "75.28185000"
              },
              {
                  "id": 132453,
                  "name": "Khailar",
                  "latitude": "25.34127000",
                  "longitude": "78.53133000"
              },
              {
                  "id": 132457,
                  "name": "Khajuraho Group of Monuments",
                  "latitude": "24.84809000",
                  "longitude": "79.93351000"
              },
              {
                  "id": 132460,
                  "name": "Khamaria",
                  "latitude": "23.22558000",
                  "longitude": "79.88007000"
              },
              {
                  "id": 132467,
                  "name": "Khandwa",
                  "latitude": "21.82427000",
                  "longitude": "76.35086000"
              },
              {
                  "id": 132476,
                  "name": "Khargapur",
                  "latitude": "24.82300000",
                  "longitude": "79.14400000"
              },
              {
                  "id": 132474,
                  "name": "Khargone",
                  "latitude": "21.82306000",
                  "longitude": "75.61028000"
              },
              {
                  "id": 132519,
                  "name": "Khategaon",
                  "latitude": "22.59573000",
                  "longitude": "76.91330000"
              },
              {
                  "id": 132497,
                  "name": "Khilchipur",
                  "latitude": "24.03943000",
                  "longitude": "76.57800000"
              },
              {
                  "id": 132498,
                  "name": "Khirkiyan",
                  "latitude": "22.16732000",
                  "longitude": "76.86137000"
              },
              {
                  "id": 132504,
                  "name": "Khujner",
                  "latitude": "23.78597000",
                  "longitude": "76.61773000"
              },
              {
                  "id": 132507,
                  "name": "Khurai",
                  "latitude": "24.04372000",
                  "longitude": "78.33014000"
              },
              {
                  "id": 132561,
                  "name": "Kolaras",
                  "latitude": "25.21928000",
                  "longitude": "77.61167000"
              },
              {
                  "id": 132585,
                  "name": "Korwai",
                  "latitude": "24.11774000",
                  "longitude": "78.04007000"
              },
              {
                  "id": 132613,
                  "name": "Kotar",
                  "latitude": "24.69802000",
                  "longitude": "80.98073000"
              },
              {
                  "id": 132598,
                  "name": "Kothi",
                  "latitude": "24.75260000",
                  "longitude": "80.77751000"
              },
              {
                  "id": 132603,
                  "name": "Kotma",
                  "latitude": "23.20383000",
                  "longitude": "81.97904000"
              },
              {
                  "id": 132611,
                  "name": "Kotwa",
                  "latitude": "25.03080000",
                  "longitude": "81.31908000"
              },
              {
                  "id": 132631,
                  "name": "Kukshi",
                  "latitude": "22.20677000",
                  "longitude": "74.75788000"
              },
              {
                  "id": 132640,
                  "name": "Kumbhraj",
                  "latitude": "24.37338000",
                  "longitude": "77.04841000"
              },
              {
                  "id": 132741,
                  "name": "Lahar",
                  "latitude": "26.19401000",
                  "longitude": "78.94137000"
              },
              {
                  "id": 132746,
                  "name": "Lakhnadon",
                  "latitude": "22.60049000",
                  "longitude": "79.60094000"
              },
              {
                  "id": 132763,
                  "name": "Leteri",
                  "latitude": "24.05979000",
                  "longitude": "77.40858000"
              },
              {
                  "id": 132766,
                  "name": "Lodhikheda",
                  "latitude": "21.58235000",
                  "longitude": "78.85911000"
              },
              {
                  "id": 133054,
                  "name": "Machalpur",
                  "latitude": "24.12767000",
                  "longitude": "76.31672000"
              },
              {
                  "id": 132814,
                  "name": "Madhogarh",
                  "latitude": "24.56401000",
                  "longitude": "80.91126000"
              },
              {
                  "id": 132833,
                  "name": "Maheshwar",
                  "latitude": "22.17592000",
                  "longitude": "75.58715000"
              },
              {
                  "id": 132835,
                  "name": "Mahgawan",
                  "latitude": "26.49471000",
                  "longitude": "78.61593000"
              },
              {
                  "id": 132854,
                  "name": "Maihar",
                  "latitude": "24.26594000",
                  "longitude": "80.76063000"
              },
              {
                  "id": 132860,
                  "name": "Majholi",
                  "latitude": "23.50114000",
                  "longitude": "79.92396000"
              },
              {
                  "id": 132864,
                  "name": "Maksi",
                  "latitude": "23.25999000",
                  "longitude": "76.14567000"
              },
              {
                  "id": 132869,
                  "name": "Malhargarh",
                  "latitude": "24.28286000",
                  "longitude": "74.99024000"
              },
              {
                  "id": 132930,
                  "name": "Manasa",
                  "latitude": "24.47764000",
                  "longitude": "75.14095000"
              },
              {
                  "id": 132931,
                  "name": "Manawar",
                  "latitude": "22.23566000",
                  "longitude": "75.08917000"
              },
              {
                  "id": 132894,
                  "name": "Mandideep",
                  "latitude": "23.08166000",
                  "longitude": "77.53328000"
              },
              {
                  "id": 132895,
                  "name": "Mandla",
                  "latitude": "22.64041000",
                  "longitude": "80.51344000"
              },
              {
                  "id": 133075,
                  "name": "Mandleshwar",
                  "latitude": "22.17598000",
                  "longitude": "75.65995000"
              },
              {
                  "id": 132897,
                  "name": "Mandsaur",
                  "latitude": "24.33333000",
                  "longitude": "75.25000000"
              },
              {
                  "id": 132907,
                  "name": "Mangawan",
                  "latitude": "24.66754000",
                  "longitude": "81.54644000"
              },
              {
                  "id": 133080,
                  "name": "Manpur",
                  "latitude": "22.43151000",
                  "longitude": "75.62107000"
              },
              {
                  "id": 132943,
                  "name": "Mau",
                  "latitude": "26.26584000",
                  "longitude": "78.67108000"
              },
              {
                  "id": 132947,
                  "name": "Mauganj",
                  "latitude": "24.66721000",
                  "longitude": "81.87339000"
              },
              {
                  "id": 132973,
                  "name": "Mihona",
                  "latitude": "26.28373000",
                  "longitude": "78.98048000"
              },
              {
                  "id": 132983,
                  "name": "Mohgaon",
                  "latitude": "21.63941000",
                  "longitude": "78.73638000"
              },
              {
                  "id": 133003,
                  "name": "Morar",
                  "latitude": "26.22640000",
                  "longitude": "78.22482000"
              },
              {
                  "id": 132994,
                  "name": "Morena",
                  "latitude": "26.16667000",
                  "longitude": "77.50000000"
              },
              {
                  "id": 133022,
                  "name": "Multai",
                  "latitude": "21.77463000",
                  "longitude": "78.25756000"
              },
              {
                  "id": 133028,
                  "name": "Mundi",
                  "latitude": "22.06693000",
                  "longitude": "76.49326000"
              },
              {
                  "id": 133030,
                  "name": "Mungaoli",
                  "latitude": "24.40837000",
                  "longitude": "78.09588000"
              },
              {
                  "id": 133042,
                  "name": "Murwara",
                  "latitude": "23.83776000",
                  "longitude": "80.39405000"
              },
              {
                  "id": 133115,
                  "name": "Nagda",
                  "latitude": "23.45834000",
                  "longitude": "75.41759000"
              },
              {
                  "id": 133259,
                  "name": "Nagod",
                  "latitude": "24.56924000",
                  "longitude": "80.58809000"
              },
              {
                  "id": 133197,
                  "name": "Naigarhi",
                  "latitude": "24.78686000",
                  "longitude": "81.77868000"
              },
              {
                  "id": 133124,
                  "name": "Nainpur",
                  "latitude": "22.42996000",
                  "longitude": "80.10561000"
              },
              {
                  "id": 133138,
                  "name": "Namli",
                  "latitude": "23.46115000",
                  "longitude": "75.06036000"
              },
              {
                  "id": 133155,
                  "name": "Naraini",
                  "latitude": "25.19033000",
                  "longitude": "80.47500000"
              },
              {
                  "id": 133276,
                  "name": "Narayangarh",
                  "latitude": "24.27083000",
                  "longitude": "75.05007000"
              },
              {
                  "id": 133171,
                  "name": "Narsimhapur",
                  "latitude": "22.91667000",
                  "longitude": "79.16667000"
              },
              {
                  "id": 133172,
                  "name": "Narsinghgarh",
                  "latitude": "23.70758000",
                  "longitude": "77.09319000"
              },
              {
                  "id": 133174,
                  "name": "Narwar",
                  "latitude": "25.64390000",
                  "longitude": "77.91290000"
              },
              {
                  "id": 133179,
                  "name": "Nasrullahganj",
                  "latitude": "22.68370000",
                  "longitude": "77.27069000"
              },
              {
                  "id": 133202,
                  "name": "Neemuch",
                  "latitude": "24.47000000",
                  "longitude": "74.87000000"
              },
              {
                  "id": 133207,
                  "name": "Nepanagar",
                  "latitude": "21.45380000",
                  "longitude": "76.39335000"
              },
              {
                  "id": 133304,
                  "name": "Orchha",
                  "latitude": "25.35192000",
                  "longitude": "78.64033000"
              },
              {
                  "id": 133308,
                  "name": "Pachmarhi",
                  "latitude": "22.46791000",
                  "longitude": "78.43312000"
              },
              {
                  "id": 133325,
                  "name": "Palera",
                  "latitude": "25.02013000",
                  "longitude": "79.22818000"
              },
              {
                  "id": 133530,
                  "name": "Pali",
                  "latitude": "23.36453000",
                  "longitude": "81.04374000"
              },
              {
                  "id": 133354,
                  "name": "Panagar",
                  "latitude": "23.28539000",
                  "longitude": "79.99509000"
              },
              {
                  "id": 133344,
                  "name": "Panara",
                  "latitude": "22.20568000",
                  "longitude": "78.55093000"
              },
              {
                  "id": 133348,
                  "name": "Pandhana",
                  "latitude": "21.69816000",
                  "longitude": "76.22487000"
              },
              {
                  "id": 133538,
                  "name": "Pandhurna",
                  "latitude": "21.59556000",
                  "longitude": "78.52628000"
              },
              {
                  "id": 133351,
                  "name": "Panna",
                  "latitude": "24.50000000",
                  "longitude": "80.25000000"
              },
              {
                  "id": 133542,
                  "name": "Pansemal",
                  "latitude": "21.65981000",
                  "longitude": "74.69937000"
              },
              {
                  "id": 133371,
                  "name": "Parasia",
                  "latitude": "22.19130000",
                  "longitude": "78.75904000"
              },
              {
                  "id": 133555,
                  "name": "Patan",
                  "latitude": "23.28636000",
                  "longitude": "79.68962000"
              },
              {
                  "id": 133381,
                  "name": "Patharia",
                  "latitude": "23.89921000",
                  "longitude": "79.19393000"
              },
              {
                  "id": 133396,
                  "name": "Pawai",
                  "latitude": "24.26635000",
                  "longitude": "80.16196000"
              },
              {
                  "id": 133430,
                  "name": "Petlawad",
                  "latitude": "23.01102000",
                  "longitude": "74.79772000"
              },
              {
                  "id": 133454,
                  "name": "Piploda",
                  "latitude": "23.35000000",
                  "longitude": "75.43333000"
              },
              {
                  "id": 133462,
                  "name": "Pithampur",
                  "latitude": "22.60197000",
                  "longitude": "75.69649000"
              },
              {
                  "id": 133481,
                  "name": "Porsa",
                  "latitude": "26.67444000",
                  "longitude": "78.37081000"
              },
              {
                  "id": 133508,
                  "name": "Punasa",
                  "latitude": "22.23507000",
                  "longitude": "76.39335000"
              },
              {
                  "id": 133660,
                  "name": "Raghogarh",
                  "latitude": "24.44318000",
                  "longitude": "77.19768000"
              },
              {
                  "id": 133661,
                  "name": "Rahatgarh",
                  "latitude": "23.78968000",
                  "longitude": "78.39473000"
              },
              {
                  "id": 133591,
                  "name": "Raisen",
                  "latitude": "23.25000000",
                  "longitude": "78.08333000"
              },
              {
                  "id": 133675,
                  "name": "Rajgarh",
                  "latitude": "22.67821000",
                  "longitude": "74.94483000"
              },
              {
                  "id": 133680,
                  "name": "Rajnagar",
                  "latitude": "24.88929000",
                  "longitude": "79.91178000"
              },
              {
                  "id": 133595,
                  "name": "Rajpur",
                  "latitude": "22.30393000",
                  "longitude": "74.35568000"
              },
              {
                  "id": 133709,
                  "name": "Rampura",
                  "latitude": "24.46700000",
                  "longitude": "75.43996000"
              },
              {
                  "id": 133717,
                  "name": "Ranapur",
                  "latitude": "22.64704000",
                  "longitude": "74.52118000"
              },
              {
                  "id": 133615,
                  "name": "Ratangarh",
                  "latitude": "24.81667000",
                  "longitude": "75.11667000"
              },
              {
                  "id": 133618,
                  "name": "Ratlam",
                  "latitude": "23.33033000",
                  "longitude": "75.04032000"
              },
              {
                  "id": 133623,
                  "name": "Rehli",
                  "latitude": "23.63722000",
                  "longitude": "79.06275000"
              },
              {
                  "id": 133624,
                  "name": "Rehti",
                  "latitude": "22.73781000",
                  "longitude": "77.43399000"
              },
              {
                  "id": 133633,
                  "name": "Rewa",
                  "latitude": "24.53256000",
                  "longitude": "81.29234000"
              },
              {
                  "id": 133738,
                  "name": "Sabalgarh",
                  "latitude": "26.24918000",
                  "longitude": "77.40786000"
              },
              {
                  "id": 134061,
                  "name": "Sagar",
                  "latitude": "23.75000000",
                  "longitude": "78.75000000"
              },
              {
                  "id": 133757,
                  "name": "Sailana",
                  "latitude": "23.46219000",
                  "longitude": "74.92318000"
              },
              {
                  "id": 133796,
                  "name": "Sanawad",
                  "latitude": "22.17391000",
                  "longitude": "76.06993000"
              },
              {
                  "id": 134070,
                  "name": "Sanchi",
                  "latitude": "23.48646000",
                  "longitude": "77.73780000"
              },
              {
                  "id": 134075,
                  "name": "Sanwer",
                  "latitude": "22.97415000",
                  "longitude": "75.82710000"
              },
              {
                  "id": 134078,
                  "name": "Sarangpur",
                  "latitude": "23.56651000",
                  "longitude": "76.47306000"
              },
              {
                  "id": 133820,
                  "name": "Satna",
                  "latitude": "24.50000000",
                  "longitude": "81.00000000"
              },
              {
                  "id": 133824,
                  "name": "Satwas",
                  "latitude": "22.53628000",
                  "longitude": "76.68452000"
              },
              {
                  "id": 133826,
                  "name": "Saugor",
                  "latitude": "23.83877000",
                  "longitude": "78.73874000"
              },
              {
                  "id": 133829,
                  "name": "Sausar",
                  "latitude": "21.65576000",
                  "longitude": "78.79669000"
              },
              {
                  "id": 133835,
                  "name": "Sehore",
                  "latitude": "23.20000000",
                  "longitude": "77.08333000"
              },
              {
                  "id": 133838,
                  "name": "Sendhwa",
                  "latitude": "21.68562000",
                  "longitude": "75.09622000"
              },
              {
                  "id": 133840,
                  "name": "Seondha",
                  "latitude": "26.15422000",
                  "longitude": "78.78120000"
              },
              {
                  "id": 133842,
                  "name": "Seoni",
                  "latitude": "22.08503000",
                  "longitude": "79.55037000"
              },
              {
                  "id": 133843,
                  "name": "Seoni Malwa",
                  "latitude": "22.45046000",
                  "longitude": "77.46650000"
              },
              {
                  "id": 133853,
                  "name": "Shahdol",
                  "latitude": "23.50000000",
                  "longitude": "81.50000000"
              },
              {
                  "id": 133893,
                  "name": "Shahgarh",
                  "latitude": "24.31365000",
                  "longitude": "79.11806000"
              },
              {
                  "id": 133899,
                  "name": "Shahpur",
                  "latitude": "21.23742000",
                  "longitude": "76.22558000"
              },
              {
                  "id": 133904,
                  "name": "Shahpura",
                  "latitude": "23.13663000",
                  "longitude": "79.66402000"
              },
              {
                  "id": 133910,
                  "name": "Shajapur",
                  "latitude": "23.50000000",
                  "longitude": "76.25000000"
              },
              {
                  "id": 133912,
                  "name": "Shamgarh",
                  "latitude": "24.18817000",
                  "longitude": "75.63903000"
              },
              {
                  "id": 133861,
                  "name": "Sheopur",
                  "latitude": "25.80000000",
                  "longitude": "77.00000000"
              },
              {
                  "id": 133880,
                  "name": "Shivpuri",
                  "latitude": "25.42378000",
                  "longitude": "77.66223000"
              },
              {
                  "id": 133888,
                  "name": "Shujalpur",
                  "latitude": "23.40673000",
                  "longitude": "76.70980000"
              },
              {
                  "id": 133922,
                  "name": "Sidhi",
                  "latitude": "24.25000000",
                  "longitude": "82.00000000"
              },
              {
                  "id": 133926,
                  "name": "Sihora",
                  "latitude": "23.48710000",
                  "longitude": "80.10404000"
              },
              {
                  "id": 133938,
                  "name": "Simaria",
                  "latitude": "24.79497000",
                  "longitude": "81.15200000"
              },
              {
                  "id": 133947,
                  "name": "Singoli",
                  "latitude": "24.96667000",
                  "longitude": "75.30000000"
              },
              {
                  "id": 133948,
                  "name": "Singrauli",
                  "latitude": "24.19973000",
                  "longitude": "82.67535000"
              },
              {
                  "id": 133956,
                  "name": "Sirmaur",
                  "latitude": "24.83648000",
                  "longitude": "81.36448000"
              },
              {
                  "id": 133959,
                  "name": "Sironj",
                  "latitude": "24.10313000",
                  "longitude": "77.69055000"
              },
              {
                  "id": 134090,
                  "name": "Sitamau",
                  "latitude": "24.01473000",
                  "longitude": "75.35324000"
              },
              {
                  "id": 133981,
                  "name": "Sohagi",
                  "latitude": "24.98181000",
                  "longitude": "81.69558000"
              },
              {
                  "id": 133982,
                  "name": "Sohagpur",
                  "latitude": "22.70055000",
                  "longitude": "78.19522000"
              },
              {
                  "id": 134039,
                  "name": "Sultanpur",
                  "latitude": "23.13812000",
                  "longitude": "77.93404000"
              },
              {
                  "id": 134055,
                  "name": "Susner",
                  "latitude": "23.94667000",
                  "longitude": "76.08825000"
              },
              {
                  "id": 134230,
                  "name": "Tal",
                  "latitude": "23.71979000",
                  "longitude": "75.38514000"
              },
              {
                  "id": 134102,
                  "name": "Talen",
                  "latitude": "23.56949000",
                  "longitude": "76.72821000"
              },
              {
                  "id": 134119,
                  "name": "Tarana",
                  "latitude": "23.33383000",
                  "longitude": "76.04253000"
              },
              {
                  "id": 134124,
                  "name": "Tekanpur",
                  "latitude": "25.99401000",
                  "longitude": "78.28322000"
              },
              {
                  "id": 134130,
                  "name": "Tendukheda",
                  "latitude": "23.39620000",
                  "longitude": "79.53947000"
              },
              {
                  "id": 134132,
                  "name": "Teonthar",
                  "latitude": "24.98207000",
                  "longitude": "81.64194000"
              },
              {
                  "id": 134137,
                  "name": "Thandla",
                  "latitude": "23.00959000",
                  "longitude": "74.57747000"
              },
              {
                  "id": 134244,
                  "name": "Tikamgarh",
                  "latitude": "24.74327000",
                  "longitude": "78.83061000"
              },
              {
                  "id": 134177,
                  "name": "Tirodi",
                  "latitude": "21.68522000",
                  "longitude": "79.71906000"
              },
              {
                  "id": 134251,
                  "name": "Udaipura",
                  "latitude": "23.07434000",
                  "longitude": "78.51108000"
              },
              {
                  "id": 134263,
                  "name": "Ujjain",
                  "latitude": "23.41667000",
                  "longitude": "75.50000000"
              },
              {
                  "id": 134266,
                  "name": "Ukwa",
                  "latitude": "21.97102000",
                  "longitude": "80.46625000"
              },
              {
                  "id": 134270,
                  "name": "Umaria",
                  "latitude": "23.52473000",
                  "longitude": "80.83716000"
              },
              {
                  "id": 134276,
                  "name": "Umri",
                  "latitude": "26.51056000",
                  "longitude": "78.93667000"
              },
              {
                  "id": 134282,
                  "name": "Unhel",
                  "latitude": "23.33794000",
                  "longitude": "75.55931000"
              },
              {
                  "id": 134354,
                  "name": "Vidisha",
                  "latitude": "23.91667000",
                  "longitude": "78.00000000"
              },
              {
                  "id": 134418,
                  "name": "Waraseoni",
                  "latitude": "21.76184000",
                  "longitude": "80.04301000"
              }
          ]
      },
      {
          "id": 4008,
          "name": "Maharashtra",
          "state_code": "MH",
          "latitude": "19.75147980",
          "longitude": "75.71388840",
          "type": "state",
          "cities": [
              {
                  "id": 57589,
                  "name": "Achalpur",
                  "latitude": "21.25665000",
                  "longitude": "77.51006000"
              },
              {
                  "id": 147667,
                  "name": "Adawad",
                  "latitude": "21.21666667",
                  "longitude": "75.45000000"
              },
              {
                  "id": 147668,
                  "name": "Agar Panchaitan",
                  "latitude": "18.17369200",
                  "longitude": "72.98853300"
              },
              {
                  "id": 147669,
                  "name": "Aheri",
                  "latitude": "19.41166667",
                  "longitude": "80.00388889"
              },
              {
                  "id": 57604,
                  "name": "Ahmadpur",
                  "latitude": "18.70622000",
                  "longitude": "76.93731000"
              },
              {
                  "id": 147670,
                  "name": "Ahmednagar",
                  "latitude": "19.08333333",
                  "longitude": "74.73333333"
              },
              {
                  "id": 57609,
                  "name": "Airoli",
                  "latitude": "19.15096000",
                  "longitude": "72.99625000"
              },
              {
                  "id": 57617,
                  "name": "Ajara",
                  "latitude": "16.11601000",
                  "longitude": "74.21097000"
              },
              {
                  "id": 57618,
                  "name": "Akalkot",
                  "latitude": "17.52532000",
                  "longitude": "76.20611000"
              },
              {
                  "id": 147672,
                  "name": "Akluj",
                  "latitude": "17.88333333",
                  "longitude": "75.01666667"
              },
              {
                  "id": 57627,
                  "name": "Akola",
                  "latitude": "20.50000000",
                  "longitude": "77.16667000"
              },
              {
                  "id": 147673,
                  "name": "Akolner",
                  "latitude": "18.98333333",
                  "longitude": "74.66666667"
              },
              {
                  "id": 57628,
                  "name": "Akot",
                  "latitude": "21.09630000",
                  "longitude": "77.05880000"
              },
              {
                  "id": 147674,
                  "name": "Akrani",
                  "latitude": "21.82423611",
                  "longitude": "74.21687222"
              },
              {
                  "id": 57633,
                  "name": "Alandi",
                  "latitude": "18.67756000",
                  "longitude": "73.89868000"
              },
              {
                  "id": 147675,
                  "name": "Ale",
                  "latitude": "19.17000000",
                  "longitude": "74.12000000"
              },
              {
                  "id": 57652,
                  "name": "Alibag",
                  "latitude": "18.64813000",
                  "longitude": "72.87579000"
              },
              {
                  "id": 147676,
                  "name": "Alkuti",
                  "latitude": "19.05000000",
                  "longitude": "74.23000000"
              },
              {
                  "id": 57642,
                  "name": "Allapalli",
                  "latitude": "19.43172000",
                  "longitude": "80.06377000"
              },
              {
                  "id": 57657,
                  "name": "Amalner",
                  "latitude": "21.03983000",
                  "longitude": "75.05887000"
              },
              {
                  "id": 57660,
                  "name": "Amarnath",
                  "latitude": "19.20000000",
                  "longitude": "73.16667000"
              },
              {
                  "id": 57665,
                  "name": "Ambad",
                  "latitude": "19.61301000",
                  "longitude": "75.78906000"
              },
              {
                  "id": 57674,
                  "name": "Ambajogai",
                  "latitude": "18.73312000",
                  "longitude": "76.38616000"
              },
              {
                  "id": 147678,
                  "name": "Ambegaon",
                  "latitude": "19.11666667",
                  "longitude": "73.73333333"
              },
              {
                  "id": 147677,
                  "name": "Ambernath",
                  "latitude": "19.20900000",
                  "longitude": "73.18600000"
              },
              {
                  "id": 147679,
                  "name": "Amgaon",
                  "latitude": "20.65000000",
                  "longitude": "79.95000000"
              },
              {
                  "id": 57689,
                  "name": "Amravati",
                  "latitude": "20.93333000",
                  "longitude": "77.75000000"
              },
              {
                  "id": 147680,
                  "name": "Andheri",
                  "latitude": "19.11916667",
                  "longitude": "72.84694444"
              },
              {
                  "id": 147681,
                  "name": "Andura",
                  "latitude": "20.88333333",
                  "longitude": "76.86666667"
              },
              {
                  "id": 57707,
                  "name": "Anjangaon",
                  "latitude": "21.16516000",
                  "longitude": "77.30910000"
              },
              {
                  "id": 147682,
                  "name": "Anjarle",
                  "latitude": "17.85000000",
                  "longitude": "73.09000000"
              },
              {
                  "id": 57716,
                  "name": "Anshing",
                  "latitude": "20.04090000",
                  "longitude": "77.31501000"
              },
              {
                  "id": 147683,
                  "name": "Arag",
                  "latitude": "16.78000000",
                  "longitude": "74.80000000"
              },
              {
                  "id": 134461,
                  "name": "Arangaon",
                  "latitude": "19.02681000",
                  "longitude": "74.71487000"
              },
              {
                  "id": 147684,
                  "name": "Ardhapur",
                  "latitude": "19.28333333",
                  "longitude": "77.38333333"
              },
              {
                  "id": 147685,
                  "name": "Argaon",
                  "latitude": "16.77899900",
                  "longitude": "73.64553000"
              },
              {
                  "id": 57741,
                  "name": "Artist Village",
                  "latitude": "19.03227000",
                  "longitude": "73.04276000"
              },
              {
                  "id": 134463,
                  "name": "Arvi",
                  "latitude": "20.99585000",
                  "longitude": "78.22914000"
              },
              {
                  "id": 57751,
                  "name": "Ashta",
                  "latitude": "16.94943000",
                  "longitude": "74.40936000"
              },
              {
                  "id": 57753,
                  "name": "Ashti",
                  "latitude": "19.37671000",
                  "longitude": "76.22520000"
              },
              {
                  "id": 147686,
                  "name": "Asoda",
                  "latitude": "21.03333333",
                  "longitude": "75.60000000"
              },
              {
                  "id": 147687,
                  "name": "Assaye",
                  "latitude": "20.24512778",
                  "longitude": "75.88739722"
              },
              {
                  "id": 147688,
                  "name": "Astagaon",
                  "latitude": "19.66666667",
                  "longitude": "74.50000000"
              },
              {
                  "id": 147689,
                  "name": "Aundh Satara",
                  "latitude": "17.54583333",
                  "longitude": "74.37500000"
              },
              {
                  "id": 57765,
                  "name": "Aurangabad",
                  "latitude": "19.88467000",
                  "longitude": "75.33986000"
              },
              {
                  "id": 57770,
                  "name": "Ausa",
                  "latitude": "18.24728000",
                  "longitude": "76.49930000"
              },
              {
                  "id": 57792,
                  "name": "Badlapur",
                  "latitude": "19.15516000",
                  "longitude": "73.26553000"
              },
              {
                  "id": 147690,
                  "name": "Badnapur",
                  "latitude": "19.86666667",
                  "longitude": "75.73333333"
              },
              {
                  "id": 147691,
                  "name": "Badnera",
                  "latitude": "20.85463056",
                  "longitude": "77.72931111"
              },
              {
                  "id": 147692,
                  "name": "Bagewadi",
                  "latitude": "16.29000000",
                  "longitude": "74.60000000"
              },
              {
                  "id": 58121,
                  "name": "Balapur",
                  "latitude": "20.66612000",
                  "longitude": "76.77386000"
              },
              {
                  "id": 147693,
                  "name": "Balapur Akola district",
                  "latitude": "20.66612000",
                  "longitude": "76.77386000"
              },
              {
                  "id": 57829,
                  "name": "Ballalpur",
                  "latitude": "19.84696000",
                  "longitude": "79.34578000"
              },
              {
                  "id": 147694,
                  "name": "Ballard Estate",
                  "latitude": "18.95000000",
                  "longitude": "72.84000000"
              },
              {
                  "id": 147695,
                  "name": "Ballarpur",
                  "latitude": "19.83333333",
                  "longitude": "79.35000000"
              },
              {
                  "id": 147696,
                  "name": "Banda Maharashtra",
                  "latitude": "15.81273611",
                  "longitude": "73.86132778"
              },
              {
                  "id": 147697,
                  "name": "Bandra",
                  "latitude": "19.05444444",
                  "longitude": "72.84055556"
              },
              {
                  "id": 147698,
                  "name": "Baner",
                  "latitude": "18.56000000",
                  "longitude": "73.79027778"
              },
              {
                  "id": 147699,
                  "name": "Bankot",
                  "latitude": "17.98333333",
                  "longitude": "73.05000000"
              },
              {
                  "id": 58146,
                  "name": "Baramati",
                  "latitude": "18.15174000",
                  "longitude": "74.57767000"
              },
              {
                  "id": 58144,
                  "name": "Barsi",
                  "latitude": "18.23454000",
                  "longitude": "75.69275000"
              },
              {
                  "id": 57897,
                  "name": "Basmat",
                  "latitude": "19.32872000",
                  "longitude": "77.15746000"
              },
              {
                  "id": 147701,
                  "name": "Bavdhan",
                  "latitude": "18.53527778",
                  "longitude": "73.78277778"
              },
              {
                  "id": 147702,
                  "name": "Bawanbir",
                  "latitude": "21.08333333",
                  "longitude": "76.71666667"
              },
              {
                  "id": 57912,
                  "name": "Beed",
                  "latitude": "18.98921000",
                  "longitude": "75.75634000"
              },
              {
                  "id": 58026,
                  "name": "Beed",
                  "latitude": "18.83333000",
                  "longitude": "75.75000000"
              },
              {
                  "id": 147703,
                  "name": "Bhadgaon Maharashtra",
                  "latitude": "20.16666667",
                  "longitude": "75.23333333"
              },
              {
                  "id": 57961,
                  "name": "Bhandara",
                  "latitude": "21.18333000",
                  "longitude": "80.00000000"
              },
              {
                  "id": 147704,
                  "name": "Bhandardara",
                  "latitude": "19.52916667",
                  "longitude": "73.75138889"
              },
              {
                  "id": 147705,
                  "name": "Bhandup",
                  "latitude": "19.14000000",
                  "longitude": "72.93000000"
              },
              {
                  "id": 57978,
                  "name": "Bhayandar",
                  "latitude": "19.30157000",
                  "longitude": "72.85107000"
              },
              {
                  "id": 57979,
                  "name": "Bhigvan",
                  "latitude": "18.30070000",
                  "longitude": "74.76701000"
              },
              {
                  "id": 57987,
                  "name": "Bhiwandi",
                  "latitude": "19.30023000",
                  "longitude": "73.05881000"
              },
              {
                  "id": 147706,
                  "name": "Bhiwapur",
                  "latitude": "20.83555556",
                  "longitude": "79.50111111"
              },
              {
                  "id": 147707,
                  "name": "Bhokar",
                  "latitude": "19.21780300",
                  "longitude": "77.66939200"
              },
              {
                  "id": 147708,
                  "name": "Bhokardan",
                  "latitude": "20.27000000",
                  "longitude": "75.77000000"
              },
              {
                  "id": 147709,
                  "name": "Bhoom",
                  "latitude": "18.45972222",
                  "longitude": "75.66083333"
              },
              {
                  "id": 58024,
                  "name": "Bhoom",
                  "latitude": "18.45908000",
                  "longitude": "75.65877000"
              },
              {
                  "id": 57997,
                  "name": "Bhor",
                  "latitude": "18.14861000",
                  "longitude": "73.84336000"
              },
              {
                  "id": 58001,
                  "name": "Bhudgaon",
                  "latitude": "16.90742000",
                  "longitude": "74.59954000"
              },
              {
                  "id": 147710,
                  "name": "Bhugaon",
                  "latitude": "18.50128400",
                  "longitude": "73.75016100"
              },
              {
                  "id": 58005,
                  "name": "Bhusaval",
                  "latitude": "21.04365000",
                  "longitude": "75.78506000"
              },
              {
                  "id": 147712,
                  "name": "Bijur",
                  "latitude": "13.84388889",
                  "longitude": "74.63972222"
              },
              {
                  "id": 147713,
                  "name": "Bilashi",
                  "latitude": "16.98333000",
                  "longitude": "74.03333000"
              },
              {
                  "id": 58047,
                  "name": "Biloli",
                  "latitude": "18.77385000",
                  "longitude": "77.72463000"
              },
              {
                  "id": 58074,
                  "name": "Boisar",
                  "latitude": "19.80362000",
                  "longitude": "72.75598000"
              },
              {
                  "id": 147714,
                  "name": "Borgaon Manju",
                  "latitude": "20.71944444",
                  "longitude": "77.15277778"
              },
              {
                  "id": 147715,
                  "name": "Borivali",
                  "latitude": "19.23000000",
                  "longitude": "72.86000000"
              },
              {
                  "id": 147716,
                  "name": "Brahmapuri",
                  "latitude": "20.60840000",
                  "longitude": "79.85590000"
              },
              {
                  "id": 147717,
                  "name": "Breach Candy",
                  "latitude": "18.96700000",
                  "longitude": "72.80500000"
              },
              {
                  "id": 58094,
                  "name": "Buldana",
                  "latitude": "20.58333000",
                  "longitude": "76.41667000"
              },
              {
                  "id": 147719,
                  "name": "Byculla",
                  "latitude": "18.98000000",
                  "longitude": "72.83500000"
              },
              {
                  "id": 131589,
                  "name": "Chakan",
                  "latitude": "18.76059000",
                  "longitude": "73.86351000"
              },
              {
                  "id": 147720,
                  "name": "Chakur",
                  "latitude": "18.51305556",
                  "longitude": "76.87527778"
              },
              {
                  "id": 131592,
                  "name": "Chalisgaon",
                  "latitude": "20.45781000",
                  "longitude": "75.01596000"
              },
              {
                  "id": 131596,
                  "name": "Chanda",
                  "latitude": "19.95076000",
                  "longitude": "79.29523000"
              },
              {
                  "id": 147721,
                  "name": "Chandgad",
                  "latitude": "15.00000000",
                  "longitude": "74.00000000"
              },
              {
                  "id": 131599,
                  "name": "Chandor",
                  "latitude": "20.33060000",
                  "longitude": "74.24467000"
              },
              {
                  "id": 58192,
                  "name": "Chandrapur",
                  "latitude": "20.11793000",
                  "longitude": "79.44377000"
              },
              {
                  "id": 131601,
                  "name": "Chandur",
                  "latitude": "19.73444000",
                  "longitude": "79.17167000"
              },
              {
                  "id": 131603,
                  "name": "Chandur Bazar",
                  "latitude": "21.23853000",
                  "longitude": "77.74713000"
              },
              {
                  "id": 147722,
                  "name": "Chausala",
                  "latitude": "18.70869200",
                  "longitude": "75.69159500"
              },
              {
                  "id": 147723,
                  "name": "Chembur",
                  "latitude": "19.05871111",
                  "longitude": "72.89969444"
              },
              {
                  "id": 131544,
                  "name": "Chicholi",
                  "latitude": "21.46926000",
                  "longitude": "79.70151000"
              },
              {
                  "id": 147724,
                  "name": "Chichondi Patil",
                  "latitude": "19.00000000",
                  "longitude": "74.91666667"
              },
              {
                  "id": 131549,
                  "name": "Chikhli (Buldhana)",
                  "latitude": "20.35046000",
                  "longitude": "76.25774000"
              },
              {
                  "id": 147725,
                  "name": "Chikhli (Jalna)",
                  "latitude": "20.02193000",
                  "longitude": "75.78544000"
              },
              {
                  "id": 147726,
                  "name": "Chimur",
                  "latitude": "20.49694444",
                  "longitude": "79.37666667"
              },
              {
                  "id": 131558,
                  "name": "Chinchani",
                  "latitude": "19.87458000",
                  "longitude": "72.68510000"
              },
              {
                  "id": 147727,
                  "name": "Chinchpokli",
                  "latitude": "18.98333333",
                  "longitude": "72.83333333"
              },
              {
                  "id": 131567,
                  "name": "Chiplun",
                  "latitude": "17.53339000",
                  "longitude": "73.50935000"
              },
              {
                  "id": 131580,
                  "name": "Chopda",
                  "latitude": "21.24578000",
                  "longitude": "75.29946000"
              },
              {
                  "id": 147728,
                  "name": "Colaba",
                  "latitude": "18.91000000",
                  "longitude": "72.81000000"
              },
              {
                  "id": 131805,
                  "name": "Dabhol",
                  "latitude": "17.58971000",
                  "longitude": "73.18001000"
              },
              {
                  "id": 147729,
                  "name": "Daddi",
                  "latitude": "16.06666667",
                  "longitude": "74.43333333"
              },
              {
                  "id": 131807,
                  "name": "Dahanu",
                  "latitude": "19.96778000",
                  "longitude": "72.71263000"
              },
              {
                  "id": 147730,
                  "name": "Dahivel",
                  "latitude": "21.06666667",
                  "longitude": "74.16666667"
              },
              {
                  "id": 147731,
                  "name": "Dapoli",
                  "latitude": "17.75888889",
                  "longitude": "73.18555556"
              },
              {
                  "id": 131810,
                  "name": "Darwha",
                  "latitude": "20.31017000",
                  "longitude": "77.77257000"
              },
              {
                  "id": 131659,
                  "name": "Daryapur",
                  "latitude": "20.92489000",
                  "longitude": "77.32644000"
              },
              {
                  "id": 131663,
                  "name": "Dattapur",
                  "latitude": "20.78075000",
                  "longitude": "78.14070000"
              },
              {
                  "id": 131666,
                  "name": "Daulatabad",
                  "latitude": "19.93611000",
                  "longitude": "75.22148000"
              },
              {
                  "id": 131667,
                  "name": "Daund",
                  "latitude": "18.46515000",
                  "longitude": "74.58375000"
              },
              {
                  "id": 147732,
                  "name": "Deccan Gymkhana",
                  "latitude": "18.51840000",
                  "longitude": "73.84060000"
              },
              {
                  "id": 147733,
                  "name": "Deglur",
                  "latitude": "18.54777778",
                  "longitude": "77.57722222"
              },
              {
                  "id": 131678,
                  "name": "Dehu",
                  "latitude": "18.71851000",
                  "longitude": "73.76635000"
              },
              {
                  "id": 131688,
                  "name": "Deolali",
                  "latitude": "19.94404000",
                  "longitude": "73.83441000"
              },
              {
                  "id": 147734,
                  "name": "Deolapar",
                  "latitude": "21.58611111",
                  "longitude": "79.36944444"
              },
              {
                  "id": 131686,
                  "name": "Deoli",
                  "latitude": "20.64920000",
                  "longitude": "78.48023000"
              },
              {
                  "id": 147735,
                  "name": "Deoni",
                  "latitude": "18.26388889",
                  "longitude": "77.08222222"
              },
              {
                  "id": 131709,
                  "name": "Deulgaon Raja",
                  "latitude": "20.01757000",
                  "longitude": "76.03755000"
              },
              {
                  "id": 147736,
                  "name": "Devrukh",
                  "latitude": "17.06500000",
                  "longitude": "73.61583333"
              },
              {
                  "id": 131722,
                  "name": "Dharangaon",
                  "latitude": "21.01187000",
                  "longitude": "75.27407000"
              },
              {
                  "id": 147737,
                  "name": "Dharavi",
                  "latitude": "19.05000000",
                  "longitude": "72.86667000"
              },
              {
                  "id": 131728,
                  "name": "Dharmabad",
                  "latitude": "18.89116000",
                  "longitude": "77.84940000"
              },
              {
                  "id": 131758,
                  "name": "Dharur",
                  "latitude": "18.82017000",
                  "longitude": "76.10937000"
              },
              {
                  "id": 147738,
                  "name": "Dhawalpuri",
                  "latitude": "19.16666667",
                  "longitude": "74.51666667"
              },
              {
                  "id": 131746,
                  "name": "Dhule",
                  "latitude": "21.06852000",
                  "longitude": "74.58837000"
              },
              {
                  "id": 131759,
                  "name": "Dhulia",
                  "latitude": "20.90130000",
                  "longitude": "74.77737000"
              },
              {
                  "id": 147739,
                  "name": "Dighori",
                  "latitude": "20.88620000",
                  "longitude": "79.93420000"
              },
              {
                  "id": 131815,
                  "name": "Diglur",
                  "latitude": "18.54829000",
                  "longitude": "77.57695000"
              },
              {
                  "id": 131768,
                  "name": "Digras",
                  "latitude": "20.10350000",
                  "longitude": "77.71846000"
              },
              {
                  "id": 147740,
                  "name": "Dindori Maharashtra",
                  "latitude": "20.20000000",
                  "longitude": "73.83305556"
              },
              {
                  "id": 147741,
                  "name": "Diveagar",
                  "latitude": "18.17333333",
                  "longitude": "72.99166667"
              },
              {
                  "id": 131785,
                  "name": "Dombivli",
                  "latitude": "19.21667000",
                  "longitude": "73.08333000"
              },
              {
                  "id": 131786,
                  "name": "Dondaicha",
                  "latitude": "21.32360000",
                  "longitude": "74.56804000"
              },
              {
                  "id": 147742,
                  "name": "Dongri",
                  "latitude": "19.28333333",
                  "longitude": "72.78333333"
              },
              {
                  "id": 131792,
                  "name": "Dudhani",
                  "latitude": "17.35792000",
                  "longitude": "76.36688000"
              },
              {
                  "id": 131802,
                  "name": "Durgapur",
                  "latitude": "20.00540000",
                  "longitude": "79.30273000"
              },
              {
                  "id": 147743,
                  "name": "Durgapur Chandrapur",
                  "latitude": "20.00000000",
                  "longitude": "79.30000000"
              },
              {
                  "id": 131838,
                  "name": "Erandol",
                  "latitude": "20.92206000",
                  "longitude": "75.32641000"
              },
              {
                  "id": 131850,
                  "name": "Faizpur",
                  "latitude": "21.16766000",
                  "longitude": "75.86006000"
              },
              {
                  "id": 147744,
                  "name": "Fort",
                  "latitude": "18.93500000",
                  "longitude": "72.83590000"
              },
              {
                  "id": 131886,
                  "name": "Gadchiroli",
                  "latitude": "19.80000000",
                  "longitude": "80.20000000"
              },
              {
                  "id": 131889,
                  "name": "Gadhinglaj",
                  "latitude": "16.22291000",
                  "longitude": "74.35010000"
              },
              {
                  "id": 131907,
                  "name": "Gangakher",
                  "latitude": "18.96962000",
                  "longitude": "76.74946000"
              },
              {
                  "id": 131910,
                  "name": "Gangapur",
                  "latitude": "19.69718000",
                  "longitude": "75.01045000"
              },
              {
                  "id": 147745,
                  "name": "Ganpatipule",
                  "latitude": "17.14480000",
                  "longitude": "73.26660000"
              },
              {
                  "id": 131934,
                  "name": "Gevrai",
                  "latitude": "19.26372000",
                  "longitude": "75.75007000"
              },
              {
                  "id": 147746,
                  "name": "Ghargaon",
                  "latitude": "18.74868400",
                  "longitude": "74.63673400"
              },
              {
                  "id": 131951,
                  "name": "Ghatanji",
                  "latitude": "20.14183000",
                  "longitude": "78.31333000"
              },
              {
                  "id": 147747,
                  "name": "Ghatkopar",
                  "latitude": "19.08000000",
                  "longitude": "72.91000000"
              },
              {
                  "id": 131947,
                  "name": "Ghoti Budrukh",
                  "latitude": "19.71641000",
                  "longitude": "73.62821000"
              },
              {
                  "id": 131948,
                  "name": "Ghugus",
                  "latitude": "19.93810000",
                  "longitude": "79.11192000"
              },
              {
                  "id": 147748,
                  "name": "Girgaon",
                  "latitude": "18.95300000",
                  "longitude": "72.81300000"
              },
              {
                  "id": 147749,
                  "name": "Gondia",
                  "latitude": "21.45000000",
                  "longitude": "80.20000000"
              },
              {
                  "id": 147750,
                  "name": "Gorai",
                  "latitude": "19.25005700",
                  "longitude": "72.78202100"
              },
              {
                  "id": 131994,
                  "name": "Goregaon",
                  "latitude": "18.15483000",
                  "longitude": "73.29147000"
              },
              {
                  "id": 132014,
                  "name": "Guhagar",
                  "latitude": "17.48415000",
                  "longitude": "73.19289000"
              },
              {
                  "id": 147751,
                  "name": "Hadapsar Pune",
                  "latitude": "18.49666667",
                  "longitude": "73.94166667"
              },
              {
                  "id": 132054,
                  "name": "Hadgaon",
                  "latitude": "19.49552000",
                  "longitude": "77.65863000"
              },
              {
                  "id": 147752,
                  "name": "Halkarni",
                  "latitude": "16.16666667",
                  "longitude": "74.46666667"
              },
              {
                  "id": 147753,
                  "name": "Harangul",
                  "latitude": "18.90000000",
                  "longitude": "76.66666667"
              },
              {
                  "id": 132078,
                  "name": "Harnai",
                  "latitude": "17.81340000",
                  "longitude": "73.09668000"
              },
              {
                  "id": 147754,
                  "name": "Helwak",
                  "latitude": "17.38500000",
                  "longitude": "73.73500000"
              },
              {
                  "id": 132100,
                  "name": "Hinganghat",
                  "latitude": "20.54875000",
                  "longitude": "78.83978000"
              },
              {
                  "id": 132101,
                  "name": "Hingoli",
                  "latitude": "19.70000000",
                  "longitude": "77.15000000"
              },
              {
                  "id": 147755,
                  "name": "Hirapur",
                  "latitude": "21.53000000",
                  "longitude": "79.77000000"
              },
              {
                  "id": 132149,
                  "name": "Hirapur Hamesha",
                  "latitude": "21.55546000",
                  "longitude": "79.78581000"
              },
              {
                  "id": 147756,
                  "name": "Hotgi",
                  "latitude": "17.58333333",
                  "longitude": "75.98333333"
              },
              {
                  "id": 132150,
                  "name": "Ichalkaranji",
                  "latitude": "16.69117000",
                  "longitude": "74.46054000"
              },
              {
                  "id": 132155,
                  "name": "Igatpuri",
                  "latitude": "19.69522000",
                  "longitude": "73.56260000"
              },
              {
                  "id": 132168,
                  "name": "Indapur",
                  "latitude": "18.30000000",
                  "longitude": "73.25000000"
              },
              {
                  "id": 132205,
                  "name": "Jaisingpur",
                  "latitude": "16.77639000",
                  "longitude": "74.55361000"
              },
              {
                  "id": 147757,
                  "name": "Jaitapur",
                  "latitude": "16.59000000",
                  "longitude": "73.35000000"
              },
              {
                  "id": 147758,
                  "name": "Jakhangaon",
                  "latitude": "17.64639000",
                  "longitude": "74.32111000"
              },
              {
                  "id": 132214,
                  "name": "Jalgaon",
                  "latitude": "21.00292000",
                  "longitude": "75.56602000"
              },
              {
                  "id": 132215,
                  "name": "Jalgaon Jamod",
                  "latitude": "21.05194000",
                  "longitude": "76.53464000"
              },
              {
                  "id": 147759,
                  "name": "Jalkot",
                  "latitude": "18.62916667",
                  "longitude": "77.18111111"
              },
              {
                  "id": 132216,
                  "name": "Jalna",
                  "latitude": "19.80000000",
                  "longitude": "75.90000000"
              },
              {
                  "id": 147760,
                  "name": "Jamkhed",
                  "latitude": "18.72000000",
                  "longitude": "75.32000000"
              },
              {
                  "id": 147761,
                  "name": "Jamod",
                  "latitude": "21.10000000",
                  "longitude": "76.60000000"
              },
              {
                  "id": 147762,
                  "name": "Janephal",
                  "latitude": "20.29361111",
                  "longitude": "76.57583333"
              },
              {
                  "id": 147763,
                  "name": "Jaoli",
                  "latitude": "17.90000000",
                  "longitude": "76.40000000"
              },
              {
                  "id": 147764,
                  "name": "Jat Sangli",
                  "latitude": "17.05000000",
                  "longitude": "75.21666667"
              },
              {
                  "id": 147765,
                  "name": "Jategaon",
                  "latitude": "19.91666667",
                  "longitude": "73.65000000"
              },
              {
                  "id": 132254,
                  "name": "Jawhar",
                  "latitude": "19.91213000",
                  "longitude": "73.22679000"
              },
              {
                  "id": 147766,
                  "name": "Jaysingpur",
                  "latitude": "16.78350556",
                  "longitude": "74.56644167"
              },
              {
                  "id": 132260,
                  "name": "Jejuri",
                  "latitude": "18.27658000",
                  "longitude": "74.16008000"
              },
              {
                  "id": 132282,
                  "name": "Jintur",
                  "latitude": "19.61186000",
                  "longitude": "76.68740000"
              },
              {
                  "id": 147767,
                  "name": "Jogeshwari",
                  "latitude": "19.12000000",
                  "longitude": "72.85000000"
              },
              {
                  "id": 147768,
                  "name": "Juhu",
                  "latitude": "19.10000000",
                  "longitude": "72.83000000"
              },
              {
                  "id": 132301,
                  "name": "Junnar",
                  "latitude": "19.20815000",
                  "longitude": "73.87520000"
              },
              {
                  "id": 147769,
                  "name": "Kachurwahi",
                  "latitude": "21.33330000",
                  "longitude": "79.38330000"
              },
              {
                  "id": 147770,
                  "name": "Kadegaon",
                  "latitude": "17.30000000",
                  "longitude": "74.35000000"
              },
              {
                  "id": 147771,
                  "name": "Kadus",
                  "latitude": "18.88333333",
                  "longitude": "73.81666667"
              },
              {
                  "id": 132677,
                  "name": "Kagal",
                  "latitude": "16.57702000",
                  "longitude": "74.31544000"
              },
              {
                  "id": 147772,
                  "name": "Kaij",
                  "latitude": "18.70000000",
                  "longitude": "76.08333333"
              },
              {
                  "id": 132345,
                  "name": "Kalamb",
                  "latitude": "19.04437000",
                  "longitude": "73.95554000"
              },
              {
                  "id": 147773,
                  "name": "Kalamb Osmanabad",
                  "latitude": "18.57416667",
                  "longitude": "76.02166667"
              },
              {
                  "id": 147774,
                  "name": "Kalamboli",
                  "latitude": "19.03333000",
                  "longitude": "73.10000000"
              },
              {
                  "id": 132346,
                  "name": "Kalamnuri",
                  "latitude": "19.67386000",
                  "longitude": "77.31149000"
              },
              {
                  "id": 132348,
                  "name": "Kalas",
                  "latitude": "18.17241000",
                  "longitude": "74.79045000"
              },
              {
                  "id": 147775,
                  "name": "Kali(DK)",
                  "latitude": "19.93877800",
                  "longitude": "77.73285700"
              },
              {
                  "id": 132355,
                  "name": "Kalmeshwar",
                  "latitude": "21.23219000",
                  "longitude": "78.91988000"
              },
              {
                  "id": 132684,
                  "name": "Kalundri",
                  "latitude": "18.98020000",
                  "longitude": "73.12708000"
              },
              {
                  "id": 132359,
                  "name": "Kalyan",
                  "latitude": "19.24370000",
                  "longitude": "73.13554000"
              },
              {
                  "id": 147776,
                  "name": "Kalyani Nagar",
                  "latitude": "18.54810000",
                  "longitude": "73.90330000"
              },
              {
                  "id": 147777,
                  "name": "Kamargaon",
                  "latitude": "20.61666667",
                  "longitude": "77.50000000"
              },
              {
                  "id": 147778,
                  "name": "Kamatgi",
                  "latitude": "16.11900000",
                  "longitude": "75.84820000"
              },
              {
                  "id": 147779,
                  "name": "Kamptee",
                  "latitude": "21.23330000",
                  "longitude": "79.20000000"
              },
              {
                  "id": 132700,
                  "name": "Kandri",
                  "latitude": "21.42030000",
                  "longitude": "79.27663000"
              },
              {
                  "id": 132375,
                  "name": "Kankauli",
                  "latitude": "16.26609000",
                  "longitude": "73.71217000"
              },
              {
                  "id": 147780,
                  "name": "Kankavli",
                  "latitude": "16.28551111",
                  "longitude": "73.68446111"
              },
              {
                  "id": 132377,
                  "name": "Kannad",
                  "latitude": "20.25684000",
                  "longitude": "75.13786000"
              },
              {
                  "id": 132412,
                  "name": "Karad",
                  "latitude": "17.28937000",
                  "longitude": "74.18183000"
              },
              {
                  "id": 147781,
                  "name": "Karajagi",
                  "latitude": "17.11666667",
                  "longitude": "75.58333333"
              },
              {
                  "id": 132717,
                  "name": "Karanja",
                  "latitude": "20.48273000",
                  "longitude": "77.48857000"
              },
              {
                  "id": 147782,
                  "name": "Karanja Lad",
                  "latitude": "20.48330000",
                  "longitude": "77.48330000"
              },
              {
                  "id": 132403,
                  "name": "Karjat",
                  "latitude": "18.91070000",
                  "longitude": "73.32354000"
              },
              {
                  "id": 147783,
                  "name": "Karkamb",
                  "latitude": "17.86530000",
                  "longitude": "75.29640000"
              },
              {
                  "id": 132404,
                  "name": "Karmala",
                  "latitude": "18.40770000",
                  "longitude": "75.19386000"
              },
              {
                  "id": 147784,
                  "name": "Kasara",
                  "latitude": "19.63330000",
                  "longitude": "73.48330000"
              },
              {
                  "id": 147785,
                  "name": "Kasoda",
                  "latitude": "20.81666667",
                  "longitude": "75.30000000"
              },
              {
                  "id": 132724,
                  "name": "Kati",
                  "latitude": "17.96137000",
                  "longitude": "75.88895000"
              },
              {
                  "id": 132725,
                  "name": "Katol",
                  "latitude": "21.27388000",
                  "longitude": "78.58580000"
              },
              {
                  "id": 147786,
                  "name": "Katral",
                  "latitude": "17.16666667",
                  "longitude": "75.63333333"
              },
              {
                  "id": 132450,
                  "name": "Khadki",
                  "latitude": "18.56350000",
                  "longitude": "73.85205000"
              },
              {
                  "id": 147787,
                  "name": "Khalapur",
                  "latitude": "18.81666667",
                  "longitude": "73.26666667"
              },
              {
                  "id": 147788,
                  "name": "Khallar",
                  "latitude": "21.04028690",
                  "longitude": "77.46562960"
              },
              {
                  "id": 132513,
                  "name": "Khamgaon",
                  "latitude": "20.70738000",
                  "longitude": "76.56827000"
              },
              {
                  "id": 147789,
                  "name": "Khanapur",
                  "latitude": "17.26111111",
                  "longitude": "74.70166667"
              },
              {
                  "id": 147790,
                  "name": "Khandala",
                  "latitude": "18.05918056",
                  "longitude": "74.01262778"
              },
              {
                  "id": 147791,
                  "name": "Khangaon",
                  "latitude": "20.50000000",
                  "longitude": "78.61666667"
              },
              {
                  "id": 132517,
                  "name": "Khapa",
                  "latitude": "21.42243000",
                  "longitude": "78.98168000"
              },
              {
                  "id": 132471,
                  "name": "Kharakvasla",
                  "latitude": "18.43997000",
                  "longitude": "73.77545000"
              },
              {
                  "id": 147792,
                  "name": "Kharda",
                  "latitude": "18.63753000",
                  "longitude": "75.47513000"
              },
              {
                  "id": 147793,
                  "name": "Kharghar",
                  "latitude": "19.03614722",
                  "longitude": "73.06172222"
              },
              {
                  "id": 147794,
                  "name": "Kharsundi",
                  "latitude": "17.34158500",
                  "longitude": "74.77599600"
              },
              {
                  "id": 132487,
                  "name": "Khed",
                  "latitude": "17.71888000",
                  "longitude": "73.39693000"
              },
              {
                  "id": 132495,
                  "name": "Khetia",
                  "latitude": "21.67124000",
                  "longitude": "74.58535000"
              },
              {
                  "id": 147796,
                  "name": "Khoni",
                  "latitude": "19.31130000",
                  "longitude": "73.05440000"
              },
              {
                  "id": 132500,
                  "name": "Khopoli",
                  "latitude": "18.78562000",
                  "longitude": "73.34589000"
              },
              {
                  "id": 132505,
                  "name": "Khuldabad",
                  "latitude": "20.00671000",
                  "longitude": "75.19245000"
              },
              {
                  "id": 132524,
                  "name": "Kinwat",
                  "latitude": "19.62557000",
                  "longitude": "78.19870000"
              },
              {
                  "id": 132543,
                  "name": "Kodoli",
                  "latitude": "16.87639000",
                  "longitude": "74.19090000"
              },
              {
                  "id": 132556,
                  "name": "Kolhapur",
                  "latitude": "16.69013000",
                  "longitude": "74.22981000"
              },
              {
                  "id": 132566,
                  "name": "Kondalwadi",
                  "latitude": "18.80727000",
                  "longitude": "77.77031000"
              },
              {
                  "id": 147797,
                  "name": "Kondhali",
                  "latitude": "21.15000000",
                  "longitude": "78.61666667"
              },
              {
                  "id": 147798,
                  "name": "Kopar Khairane",
                  "latitude": "19.10305556",
                  "longitude": "73.01055556"
              },
              {
                  "id": 132572,
                  "name": "Kopargaon",
                  "latitude": "19.88239000",
                  "longitude": "74.47605000"
              },
              {
                  "id": 147799,
                  "name": "Kopela",
                  "latitude": "18.83000000",
                  "longitude": "80.23000000"
              },
              {
                  "id": 132586,
                  "name": "Koradi",
                  "latitude": "21.24758000",
                  "longitude": "79.10575000"
              },
              {
                  "id": 132582,
                  "name": "Koregaon",
                  "latitude": "18.64573000",
                  "longitude": "74.05909000"
              },
              {
                  "id": 132618,
                  "name": "Koynanagar",
                  "latitude": "17.40000000",
                  "longitude": "73.76667000"
              },
              {
                  "id": 132629,
                  "name": "Kudal",
                  "latitude": "16.01148000",
                  "longitude": "73.68867000"
              },
              {
                  "id": 147800,
                  "name": "Kuhi",
                  "latitude": "21.01082222",
                  "longitude": "79.35242222"
              },
              {
                  "id": 132656,
                  "name": "Kurandvad",
                  "latitude": "16.68317000",
                  "longitude": "74.58892000"
              },
              {
                  "id": 147801,
                  "name": "Kurankhed",
                  "latitude": "20.70194444",
                  "longitude": "77.24972222"
              },
              {
                  "id": 132657,
                  "name": "Kurduvadi",
                  "latitude": "18.09339000",
                  "longitude": "75.41567000"
              },
              {
                  "id": 147802,
                  "name": "Kusumba",
                  "latitude": "20.91666667",
                  "longitude": "74.65000000"
              },
              {
                  "id": 147803,
                  "name": "Lakhandur",
                  "latitude": "20.75000000",
                  "longitude": "79.88333333"
              },
              {
                  "id": 132799,
                  "name": "Lanja",
                  "latitude": "16.86086000",
                  "longitude": "73.54993000"
              },
              {
                  "id": 132800,
                  "name": "Lasalgaon",
                  "latitude": "20.14270000",
                  "longitude": "74.23946000"
              },
              {
                  "id": 132759,
                  "name": "Latur",
                  "latitude": "18.40000000",
                  "longitude": "76.80000000"
              },
              {
                  "id": 147804,
                  "name": "Lavasa",
                  "latitude": "18.40528056",
                  "longitude": "73.50626944"
              },
              {
                  "id": 132770,
                  "name": "Lohogaon",
                  "latitude": "18.59921000",
                  "longitude": "73.92701000"
              },
              {
                  "id": 132776,
                  "name": "Lonar",
                  "latitude": "19.98533000",
                  "longitude": "76.52046000"
              },
              {
                  "id": 132773,
                  "name": "Lonavla",
                  "latitude": "18.75275000",
                  "longitude": "73.40575000"
              },
              {
                  "id": 132844,
                  "name": "Mahabaleshwar",
                  "latitude": "17.56000000",
                  "longitude": "73.40000000"
              },
              {
                  "id": 132846,
                  "name": "Mahad",
                  "latitude": "18.08333000",
                  "longitude": "73.41667000"
              },
              {
                  "id": 147805,
                  "name": "Mahape",
                  "latitude": "19.11776000",
                  "longitude": "73.02693800"
              },
              {
                  "id": 147806,
                  "name": "Mahim",
                  "latitude": "19.03500000",
                  "longitude": "72.84000000"
              },
              {
                  "id": 132856,
                  "name": "Maindargi",
                  "latitude": "17.45739000",
                  "longitude": "76.29320000"
              },
              {
                  "id": 133062,
                  "name": "Majalgaon",
                  "latitude": "19.15988000",
                  "longitude": "76.20832000"
              },
              {
                  "id": 133063,
                  "name": "Makhjan",
                  "latitude": "17.26980000",
                  "longitude": "73.50031000"
              },
              {
                  "id": 147807,
                  "name": "Malabar Hill",
                  "latitude": "18.95000000",
                  "longitude": "72.79500000"
              },
              {
                  "id": 147808,
                  "name": "Malad",
                  "latitude": "19.18611111",
                  "longitude": "72.84861111"
              },
              {
                  "id": 133065,
                  "name": "Malegaon",
                  "latitude": "20.54966000",
                  "longitude": "74.53462000"
              },
              {
                  "id": 132872,
                  "name": "Malkapur",
                  "latitude": "17.26214000",
                  "longitude": "74.17574000"
              },
              {
                  "id": 133070,
                  "name": "Malvan",
                  "latitude": "16.05981000",
                  "longitude": "73.46290000"
              },
              {
                  "id": 132886,
                  "name": "Manchar",
                  "latitude": "19.00436000",
                  "longitude": "73.94346000"
              },
              {
                  "id": 147809,
                  "name": "Mandangad",
                  "latitude": "17.98333333",
                  "longitude": "73.25000000"
              },
              {
                  "id": 147810,
                  "name": "Mandhal",
                  "latitude": "20.95000000",
                  "longitude": "79.46666667"
              },
              {
                  "id": 147811,
                  "name": "Mandwa",
                  "latitude": "18.80300000",
                  "longitude": "72.88200000"
              },
              {
                  "id": 147812,
                  "name": "Mangaon",
                  "latitude": "18.23333333",
                  "longitude": "73.28333333"
              },
              {
                  "id": 132909,
                  "name": "Mangrul Pir",
                  "latitude": "20.31379000",
                  "longitude": "77.34178000"
              },
              {
                  "id": 147813,
                  "name": "Manjlegaon",
                  "latitude": "19.15000000",
                  "longitude": "76.23000000"
              },
              {
                  "id": 147814,
                  "name": "Mankeshwar",
                  "latitude": "18.35416667",
                  "longitude": "75.63916667"
              },
              {
                  "id": 147815,
                  "name": "Mankhurd",
                  "latitude": "19.05000000",
                  "longitude": "72.93000000"
              },
              {
                  "id": 132918,
                  "name": "Manmad",
                  "latitude": "20.25334000",
                  "longitude": "74.43755000"
              },
              {
                  "id": 132924,
                  "name": "Manor",
                  "latitude": "19.72440000",
                  "longitude": "72.90966000"
              },
              {
                  "id": 132926,
                  "name": "Mansar",
                  "latitude": "21.39602000",
                  "longitude": "79.26350000"
              },
              {
                  "id": 133084,
                  "name": "Manwat",
                  "latitude": "19.30133000",
                  "longitude": "76.49735000"
              },
              {
                  "id": 147817,
                  "name": "Maregaon",
                  "latitude": "20.10000000",
                  "longitude": "78.81666667"
              },
              {
                  "id": 147818,
                  "name": "Mastiholi",
                  "latitude": "16.08333333",
                  "longitude": "74.55000000"
              },
              {
                  "id": 147819,
                  "name": "Masur India",
                  "latitude": "17.40000000",
                  "longitude": "74.15000000"
              },
              {
                  "id": 133090,
                  "name": "Matheran",
                  "latitude": "18.98281000",
                  "longitude": "73.26520000"
              },
              {
                  "id": 147820,
                  "name": "Matunga",
                  "latitude": "19.01798056",
                  "longitude": "72.84476389"
              },
              {
                  "id": 147821,
                  "name": "Mazagaon",
                  "latitude": "18.97000000",
                  "longitude": "72.85000000"
              },
              {
                  "id": 132961,
                  "name": "Mehekar",
                  "latitude": "20.15050000",
                  "longitude": "76.56841000"
              },
              {
                  "id": 147822,
                  "name": "Mehergaon",
                  "latitude": "20.96666667",
                  "longitude": "74.63333333"
              },
              {
                  "id": 147823,
                  "name": "Mehkar",
                  "latitude": "20.15000000",
                  "longitude": "76.57500000"
              },
              {
                  "id": 132971,
                  "name": "Mhasla",
                  "latitude": "18.13340000",
                  "longitude": "73.11162000"
              },
              {
                  "id": 132972,
                  "name": "Mhasvad",
                  "latitude": "17.63359000",
                  "longitude": "74.78773000"
              },
              {
                  "id": 147824,
                  "name": "Miraj",
                  "latitude": "16.83000000",
                  "longitude": "74.63000000"
              },
              {
                  "id": 147825,
                  "name": "Mohadi",
                  "latitude": "21.30833333",
                  "longitude": "79.67500000"
              },
              {
                  "id": 147826,
                  "name": "Mohol",
                  "latitude": "17.81670000",
                  "longitude": "75.66670000"
              },
              {
                  "id": 132985,
                  "name": "Mohpa",
                  "latitude": "21.31012000",
                  "longitude": "78.82969000"
              },
              {
                  "id": 147827,
                  "name": "Mokhada taluka",
                  "latitude": "19.93333333",
                  "longitude": "73.33333333"
              },
              {
                  "id": 147828,
                  "name": "Mora Maharashtra",
                  "latitude": "18.88900000",
                  "longitude": "72.93400000"
              },
              {
                  "id": 132992,
                  "name": "Moram",
                  "latitude": "17.78812000",
                  "longitude": "76.47077000"
              },
              {
                  "id": 132999,
                  "name": "Morsi",
                  "latitude": "21.34030000",
                  "longitude": "78.01258000"
              },
              {
                  "id": 133006,
                  "name": "Mowad",
                  "latitude": "21.46475000",
                  "longitude": "78.45103000"
              },
              {
                  "id": 133012,
                  "name": "Mudkhed",
                  "latitude": "19.15657000",
                  "longitude": "77.50304000"
              },
              {
                  "id": 133018,
                  "name": "Mukher",
                  "latitude": "18.70636000",
                  "longitude": "77.36795000"
              },
              {
                  "id": 133099,
                  "name": "Mul",
                  "latitude": "20.06987000",
                  "longitude": "79.67826000"
              },
              {
                  "id": 147829,
                  "name": "Mulher",
                  "latitude": "20.78138889",
                  "longitude": "74.06388889"
              },
              {
                  "id": 147830,
                  "name": "Mulund",
                  "latitude": "19.17168056",
                  "longitude": "72.95600000"
              },
              {
                  "id": 133024,
                  "name": "Mumbai",
                  "latitude": "19.07283000",
                  "longitude": "72.88261000"
              },
              {
                  "id": 133025,
                  "name": "Mumbai Suburban",
                  "latitude": "19.12636000",
                  "longitude": "72.84897000"
              },
              {
                  "id": 133035,
                  "name": "Murbad",
                  "latitude": "19.25395000",
                  "longitude": "73.38993000"
              },
              {
                  "id": 133036,
                  "name": "Murgud",
                  "latitude": "16.39604000",
                  "longitude": "74.19142000"
              },
              {
                  "id": 133039,
                  "name": "Murtajapur",
                  "latitude": "20.73299000",
                  "longitude": "77.36694000"
              },
              {
                  "id": 133040,
                  "name": "Murud (Raigad)",
                  "latitude": "18.32817000",
                  "longitude": "72.96210000"
              },
              {
                  "id": 147831,
                  "name": "Murud (Ratnagiri)",
                  "latitude": "17.77494444",
                  "longitude": "73.11815000"
              },
              {
                  "id": 147832,
                  "name": "Murum",
                  "latitude": "17.78777778",
                  "longitude": "76.47000000"
              },
              {
                  "id": 147833,
                  "name": "Nadgaon",
                  "latitude": "20.90101389",
                  "longitude": "76.01396389"
              },
              {
                  "id": 147834,
                  "name": "Nagapur",
                  "latitude": "18.87000000",
                  "longitude": "76.43000000"
              },
              {
                  "id": 133260,
                  "name": "Nagothana",
                  "latitude": "18.54225000",
                  "longitude": "73.13493000"
              },
              {
                  "id": 133116,
                  "name": "Nagpur",
                  "latitude": "21.14631000",
                  "longitude": "79.08491000"
              },
              {
                  "id": 133117,
                  "name": "Nagpur Division",
                  "latitude": "21.14911000",
                  "longitude": "79.10748000"
              },
              {
                  "id": 147835,
                  "name": "Nala Sopara",
                  "latitude": "19.41540000",
                  "longitude": "72.86130000"
              },
              {
                  "id": 133131,
                  "name": "Naldurg",
                  "latitude": "17.81667000",
                  "longitude": "76.28182000"
              },
              {
                  "id": 147836,
                  "name": "Nalegaon",
                  "latitude": "18.41666667",
                  "longitude": "76.81666667"
              },
              {
                  "id": 147837,
                  "name": "Nampur",
                  "latitude": "20.72861111",
                  "longitude": "74.31083333"
              },
              {
                  "id": 133141,
                  "name": "Nanded",
                  "latitude": "18.91667000",
                  "longitude": "77.50000000"
              },
              {
                  "id": 133267,
                  "name": "Nandgaon",
                  "latitude": "20.30680000",
                  "longitude": "74.65501000"
              },
              {
                  "id": 147838,
                  "name": "Nandnee",
                  "latitude": "17.45500000",
                  "longitude": "75.84555556"
              },
              {
                  "id": 147839,
                  "name": "Nandura",
                  "latitude": "20.83333333",
                  "longitude": "76.45972222"
              },
              {
                  "id": 133268,
                  "name": "Nandura Buzurg",
                  "latitude": "20.83417000",
                  "longitude": "76.45924000"
              },
              {
                  "id": 133145,
                  "name": "Nandurbar",
                  "latitude": "21.37000000",
                  "longitude": "74.20000000"
              },
              {
                  "id": 147840,
                  "name": "Narayangaon",
                  "latitude": "19.07000000",
                  "longitude": "73.97000000"
              },
              {
                  "id": 147841,
                  "name": "Nardana",
                  "latitude": "21.20000000",
                  "longitude": "74.81666667"
              },
              {
                  "id": 147842,
                  "name": "Nariman Point",
                  "latitude": "18.92000000",
                  "longitude": "72.83000000"
              },
              {
                  "id": 147843,
                  "name": "Narkhed",
                  "latitude": "21.47000000",
                  "longitude": "78.53000000"
              },
              {
                  "id": 133177,
                  "name": "Nashik",
                  "latitude": "19.99727000",
                  "longitude": "73.79096000"
              },
              {
                  "id": 133178,
                  "name": "Nashik Division",
                  "latitude": "19.98295000",
                  "longitude": "73.78942000"
              },
              {
                  "id": 147844,
                  "name": "Navapur",
                  "latitude": "21.17000000",
                  "longitude": "73.78000000"
              },
              {
                  "id": 133186,
                  "name": "Navi Mumbai",
                  "latitude": "19.03681000",
                  "longitude": "73.01582000"
              },
              {
                  "id": 133208,
                  "name": "Neral",
                  "latitude": "19.02475000",
                  "longitude": "73.31688000"
              },
              {
                  "id": 147845,
                  "name": "Nerur",
                  "latitude": "15.98333333",
                  "longitude": "73.65000000"
              },
              {
                  "id": 147846,
                  "name": "Nevasa",
                  "latitude": "19.53333333",
                  "longitude": "74.93333333"
              },
              {
                  "id": 147847,
                  "name": "Nighoj",
                  "latitude": "18.95972222",
                  "longitude": "74.27694444"
              },
              {
                  "id": 133217,
                  "name": "Nilanga",
                  "latitude": "18.11675000",
                  "longitude": "76.75279000"
              },
              {
                  "id": 133220,
                  "name": "Nipani",
                  "latitude": "16.39900000",
                  "longitude": "74.38285000"
              },
              {
                  "id": 147848,
                  "name": "Niphad",
                  "latitude": "20.08330000",
                  "longitude": "73.80000000"
              },
              {
                  "id": 147849,
                  "name": "Nira Narsingpur",
                  "latitude": "17.98350000",
                  "longitude": "75.12396000"
              },
              {
                  "id": 133305,
                  "name": "Osmanabad",
                  "latitude": "18.25000000",
                  "longitude": "76.16667000"
              },
              {
                  "id": 133307,
                  "name": "Ozar",
                  "latitude": "20.09473000",
                  "longitude": "73.92816000"
              },
              {
                  "id": 147850,
                  "name": "Pabal",
                  "latitude": "18.83083333",
                  "longitude": "74.05277778"
              },
              {
                  "id": 133520,
                  "name": "Pachora",
                  "latitude": "20.66727000",
                  "longitude": "75.35305000"
              },
              {
                  "id": 147851,
                  "name": "Pahur Maharashtra",
                  "latitude": "20.70000000",
                  "longitude": "75.68333333"
              },
              {
                  "id": 133319,
                  "name": "Paithan",
                  "latitude": "19.47506000",
                  "longitude": "75.38558000"
              },
              {
                  "id": 133527,
                  "name": "Palghar",
                  "latitude": "19.69693000",
                  "longitude": "72.76543000"
              },
              {
                  "id": 147852,
                  "name": "Pali Raigad",
                  "latitude": "18.54138400",
                  "longitude": "73.21996500"
              },
              {
                  "id": 147853,
                  "name": "Palso",
                  "latitude": "20.76666667",
                  "longitude": "77.23333333"
              },
              {
                  "id": 133537,
                  "name": "Panchgani",
                  "latitude": "17.92449000",
                  "longitude": "73.80080000"
              },
              {
                  "id": 133347,
                  "name": "Pandharpur",
                  "latitude": "17.67924000",
                  "longitude": "75.33098000"
              },
              {
                  "id": 147854,
                  "name": "Pandhurli",
                  "latitude": "19.82905200",
                  "longitude": "73.85474500"
              },
              {
                  "id": 133349,
                  "name": "Panhala",
                  "latitude": "16.81210000",
                  "longitude": "74.11007000"
              },
              {
                  "id": 133353,
                  "name": "Panvel",
                  "latitude": "18.98878000",
                  "longitude": "73.11013000"
              },
              {
                  "id": 133358,
                  "name": "Parbhani",
                  "latitude": "19.50000000",
                  "longitude": "76.75000000"
              },
              {
                  "id": 147855,
                  "name": "Parel",
                  "latitude": "18.99000000",
                  "longitude": "72.84000000"
              },
              {
                  "id": 133360,
                  "name": "Parli Vaijnath",
                  "latitude": "18.85057000",
                  "longitude": "76.53163000"
              },
              {
                  "id": 147856,
                  "name": "Parner",
                  "latitude": "19.00300000",
                  "longitude": "74.43800000"
              },
              {
                  "id": 133364,
                  "name": "Parola",
                  "latitude": "20.88098000",
                  "longitude": "75.11937000"
              },
              {
                  "id": 147857,
                  "name": "Parseoni",
                  "latitude": "21.38333333",
                  "longitude": "79.15000000"
              },
              {
                  "id": 133367,
                  "name": "Partur",
                  "latitude": "19.59925000",
                  "longitude": "76.21541000"
              },
              {
                  "id": 133554,
                  "name": "Patan",
                  "latitude": "17.37513000",
                  "longitude": "73.90143000"
              },
              {
                  "id": 133556,
                  "name": "Pathardi",
                  "latitude": "19.17279000",
                  "longitude": "75.17425000"
              },
              {
                  "id": 133558,
                  "name": "Pathri",
                  "latitude": "19.25880000",
                  "longitude": "76.43412000"
              },
              {
                  "id": 133559,
                  "name": "Patur",
                  "latitude": "20.46093000",
                  "longitude": "76.93725000"
              },
              {
                  "id": 147858,
                  "name": "Paturda",
                  "latitude": "20.95000000",
                  "longitude": "76.71666667"
              },
              {
                  "id": 147859,
                  "name": "Paud",
                  "latitude": "18.52416667",
                  "longitude": "73.61583333"
              },
              {
                  "id": 147860,
                  "name": "Pauni",
                  "latitude": "20.78000000",
                  "longitude": "79.63000000"
              },
              {
                  "id": 133397,
                  "name": "Pawni",
                  "latitude": "20.79229000",
                  "longitude": "79.63644000"
              },
              {
                  "id": 147861,
                  "name": "Pedgaon",
                  "latitude": "18.51166667",
                  "longitude": "74.70750000"
              },
              {
                  "id": 147862,
                  "name": "Peint",
                  "latitude": "20.25844722",
                  "longitude": "73.50305278"
              },
              {
                  "id": 133404,
                  "name": "Pen",
                  "latitude": "18.73734000",
                  "longitude": "73.09603000"
              },
              {
                  "id": 133434,
                  "name": "Phaltan",
                  "latitude": "17.99113000",
                  "longitude": "74.43177000"
              },
              {
                  "id": 147863,
                  "name": "Phulambri",
                  "latitude": "20.10000000",
                  "longitude": "75.41666667"
              },
              {
                  "id": 147864,
                  "name": "Piliv",
                  "latitude": "17.67884200",
                  "longitude": "74.96641200"
              },
              {
                  "id": 147865,
                  "name": "Pimpalgaon Baswant",
                  "latitude": "20.16666667",
                  "longitude": "73.98333333"
              },
              {
                  "id": 147866,
                  "name": "Pimpalgaon Raja",
                  "latitude": "20.71666667",
                  "longitude": "76.43333333"
              },
              {
                  "id": 133449,
                  "name": "Pimpri",
                  "latitude": "18.62292000",
                  "longitude": "73.80696000"
              },
              {
                  "id": 147867,
                  "name": "Pimpri-Chinchwad",
                  "latitude": "18.62777778",
                  "longitude": "73.81305556"
              },
              {
                  "id": 133564,
                  "name": "Pipri",
                  "latitude": "19.79371000",
                  "longitude": "75.53519000"
              },
              {
                  "id": 133484,
                  "name": "Powai",
                  "latitude": "19.11640000",
                  "longitude": "72.90471000"
              },
              {
                  "id": 147868,
                  "name": "Prabhadevi",
                  "latitude": "19.01690500",
                  "longitude": "72.82864900"
              },
              {
                  "id": 147869,
                  "name": "Prakasha",
                  "latitude": "21.51666667",
                  "longitude": "74.31666667"
              },
              {
                  "id": 133496,
                  "name": "Pulgaon",
                  "latitude": "20.72204000",
                  "longitude": "78.32056000"
              },
              {
                  "id": 133504,
                  "name": "Pune",
                  "latitude": "18.51957000",
                  "longitude": "73.85535000"
              },
              {
                  "id": 133505,
                  "name": "Pune Division",
                  "latitude": "18.74673000",
                  "longitude": "73.75465000"
              },
              {
                  "id": 147870,
                  "name": "Puntamba",
                  "latitude": "19.75000000",
                  "longitude": "74.63333333"
              },
              {
                  "id": 147871,
                  "name": "Pural",
                  "latitude": "16.45000000",
                  "longitude": "73.36666667"
              },
              {
                  "id": 133571,
                  "name": "Purna",
                  "latitude": "19.18170000",
                  "longitude": "77.02566000"
              },
              {
                  "id": 133515,
                  "name": "Pusad",
                  "latitude": "19.91274000",
                  "longitude": "77.57838000"
              },
              {
                  "id": 147872,
                  "name": "Radhanagari",
                  "latitude": "16.41388889",
                  "longitude": "73.99777778"
              },
              {
                  "id": 147873,
                  "name": "Rahata",
                  "latitude": "19.71666667",
                  "longitude": "74.48333333"
              },
              {
                  "id": 133583,
                  "name": "Rahimatpur",
                  "latitude": "17.59210000",
                  "longitude": "74.19966000"
              },
              {
                  "id": 133663,
                  "name": "Rahuri",
                  "latitude": "19.39069000",
                  "longitude": "74.64979000"
              },
              {
                  "id": 133588,
                  "name": "Raigarh",
                  "latitude": "18.57000000",
                  "longitude": "73.13000000"
              },
              {
                  "id": 147874,
                  "name": "Raireshwar",
                  "latitude": "18.05000000",
                  "longitude": "73.73333333"
              },
              {
                  "id": 133687,
                  "name": "Rajapur",
                  "latitude": "16.65679000",
                  "longitude": "73.51701000"
              },
              {
                  "id": 133677,
                  "name": "Rajgurunagar",
                  "latitude": "18.86667000",
                  "longitude": "73.90000000"
              },
              {
                  "id": 133685,
                  "name": "Rajur",
                  "latitude": "20.11087000",
                  "longitude": "78.89311000"
              },
              {
                  "id": 133689,
                  "name": "Rajura",
                  "latitude": "19.77947000",
                  "longitude": "79.36459000"
              },
              {
                  "id": 147875,
                  "name": "Ralegaon",
                  "latitude": "20.25000000",
                  "longitude": "79.81000000"
              },
              {
                  "id": 147876,
                  "name": "Ramewadi",
                  "latitude": "16.03333333",
                  "longitude": "74.35000000"
              },
              {
                  "id": 133710,
                  "name": "Ramtek",
                  "latitude": "21.39562000",
                  "longitude": "79.32725000"
              },
              {
                  "id": 133619,
                  "name": "Ratnagiri",
                  "latitude": "17.00000000",
                  "longitude": "73.50000000"
              },
              {
                  "id": 133724,
                  "name": "Raver",
                  "latitude": "21.24757000",
                  "longitude": "76.03509000"
              },
              {
                  "id": 147877,
                  "name": "Renapur",
                  "latitude": "18.51666667",
                  "longitude": "76.60000000"
              },
              {
                  "id": 147878,
                  "name": "Renavi",
                  "latitude": "17.26972222",
                  "longitude": "74.61055556"
              },
              {
                  "id": 133631,
                  "name": "Revadanda",
                  "latitude": "18.55363000",
                  "longitude": "72.92559000"
              },
              {
                  "id": 147879,
                  "name": "Revdanda",
                  "latitude": "18.55000000",
                  "longitude": "72.93333333"
              },
              {
                  "id": 133639,
                  "name": "Risod",
                  "latitude": "19.97671000",
                  "longitude": "76.78799000"
              },
              {
                  "id": 133644,
                  "name": "Roha",
                  "latitude": "18.43687000",
                  "longitude": "73.11964000"
              },
              {
                  "id": 147880,
                  "name": "Sailu",
                  "latitude": "19.47000000",
                  "longitude": "76.47000000"
              },
              {
                  "id": 147881,
                  "name": "Sakol",
                  "latitude": "18.28250000",
                  "longitude": "76.88444444"
              },
              {
                  "id": 147882,
                  "name": "Sakoli",
                  "latitude": "21.08000000",
                  "longitude": "79.98000000"
              },
              {
                  "id": 147883,
                  "name": "Sakri",
                  "latitude": "20.99027778",
                  "longitude": "74.31444444"
              },
              {
                  "id": 147884,
                  "name": "Samudrapur",
                  "latitude": "20.65000000",
                  "longitude": "78.96666667"
              },
              {
                  "id": 147885,
                  "name": "Sangameshwar",
                  "latitude": "17.18694444",
                  "longitude": "73.55305556"
              },
              {
                  "id": 133780,
                  "name": "Sangamner",
                  "latitude": "19.56784000",
                  "longitude": "74.21154000"
              },
              {
                  "id": 133782,
                  "name": "Sangli",
                  "latitude": "17.11202000",
                  "longitude": "74.76990000"
              },
              {
                  "id": 134074,
                  "name": "Sangola",
                  "latitude": "17.43948000",
                  "longitude": "75.19379000"
              },
              {
                  "id": 147887,
                  "name": "Sangrampur Maharashtra",
                  "latitude": "21.03000000",
                  "longitude": "76.68000000"
              },
              {
                  "id": 147888,
                  "name": "Saoli",
                  "latitude": "20.08133056",
                  "longitude": "79.78286111"
              },
              {
                  "id": 133797,
                  "name": "Saoner",
                  "latitude": "21.38510000",
                  "longitude": "78.92155000"
              },
              {
                  "id": 147889,
                  "name": "Sarangkheda",
                  "latitude": "21.43327300",
                  "longitude": "74.52642100"
              },
              {
                  "id": 147890,
                  "name": "Saswad",
                  "latitude": "18.55000000",
                  "longitude": "74.00000000"
              },
              {
                  "id": 133825,
                  "name": "Satana",
                  "latitude": "20.59483000",
                  "longitude": "74.20301000"
              },
              {
                  "id": 133815,
                  "name": "Satara",
                  "latitude": "17.68589000",
                  "longitude": "73.99333000"
              },
              {
                  "id": 133816,
                  "name": "Satara Division",
                  "latitude": "17.72601000",
                  "longitude": "74.06433000"
              },
              {
                  "id": 147891,
                  "name": "Satpati",
                  "latitude": "19.71666667",
                  "longitude": "72.70000000"
              },
              {
                  "id": 134082,
                  "name": "Savantvadi",
                  "latitude": "15.90413000",
                  "longitude": "73.82191000"
              },
              {
                  "id": 134083,
                  "name": "Savda",
                  "latitude": "21.15054000",
                  "longitude": "75.88938000"
              },
              {
                  "id": 147892,
                  "name": "Savlaj",
                  "latitude": "17.10000000",
                  "longitude": "74.78000000"
              },
              {
                  "id": 147893,
                  "name": "Sawantvadi",
                  "latitude": "16.00000000",
                  "longitude": "73.75000000"
              },
              {
                  "id": 133836,
                  "name": "Selu",
                  "latitude": "19.45512000",
                  "longitude": "76.44073000"
              },
              {
                  "id": 147894,
                  "name": "Sevagram",
                  "latitude": "20.73499167",
                  "longitude": "78.66256944"
              },
              {
                  "id": 147895,
                  "name": "Sewri",
                  "latitude": "19.00000000",
                  "longitude": "72.86000000"
              },
              {
                  "id": 133908,
                  "name": "Shahada",
                  "latitude": "21.54538000",
                  "longitude": "74.47106000"
              },
              {
                  "id": 133909,
                  "name": "Shahapur",
                  "latitude": "19.45231000",
                  "longitude": "73.32572000"
              },
              {
                  "id": 147896,
                  "name": "Shedbal",
                  "latitude": "16.68916667",
                  "longitude": "74.75425556"
              },
              {
                  "id": 133857,
                  "name": "Shegaon",
                  "latitude": "20.79320000",
                  "longitude": "76.69921000"
              },
              {
                  "id": 147897,
                  "name": "Shevgaon",
                  "latitude": "19.35000000",
                  "longitude": "75.23333333"
              },
              {
                  "id": 147898,
                  "name": "Shikrapur",
                  "latitude": "18.69361111",
                  "longitude": "74.13805556"
              },
              {
                  "id": 133873,
                  "name": "Shiraguppi",
                  "latitude": "16.61875000",
                  "longitude": "74.70907000"
              },
              {
                  "id": 147899,
                  "name": "Shirala",
                  "latitude": "16.98401111",
                  "longitude": "74.12415278"
              },
              {
                  "id": 133874,
                  "name": "Shirdi",
                  "latitude": "19.76616000",
                  "longitude": "74.47738000"
              },
              {
                  "id": 133875,
                  "name": "Shirgaon",
                  "latitude": "19.69589000",
                  "longitude": "72.71527000"
              },
              {
                  "id": 147900,
                  "name": "Shirol",
                  "latitude": "16.73333333",
                  "longitude": "74.60000000"
              },
              {
                  "id": 133877,
                  "name": "Shirpur",
                  "latitude": "21.34821000",
                  "longitude": "74.88035000"
              },
              {
                  "id": 147901,
                  "name": "Shirud",
                  "latitude": "20.71666667",
                  "longitude": "74.90000000"
              },
              {
                  "id": 133878,
                  "name": "Shirwal",
                  "latitude": "18.15059000",
                  "longitude": "73.97788000"
              },
              {
                  "id": 133879,
                  "name": "Shivaji Nagar",
                  "latitude": "18.53017000",
                  "longitude": "73.85263000"
              },
              {
                  "id": 133886,
                  "name": "Shrigonda",
                  "latitude": "18.61527000",
                  "longitude": "74.69895000"
              },
              {
                  "id": 133936,
                  "name": "Sillod",
                  "latitude": "20.30303000",
                  "longitude": "75.65284000"
              },
              {
                  "id": 147902,
                  "name": "Sindewahi",
                  "latitude": "20.28333333",
                  "longitude": "79.65000000"
              },
              {
                  "id": 133943,
                  "name": "Sindhudurg",
                  "latitude": "16.17000000",
                  "longitude": "73.70000000"
              },
              {
                  "id": 133944,
                  "name": "Sindi",
                  "latitude": "20.80509000",
                  "longitude": "78.88752000"
              },
              {
                  "id": 147903,
                  "name": "Sindkheda",
                  "latitude": "21.26666667",
                  "longitude": "74.73333333"
              },
              {
                  "id": 133953,
                  "name": "Sinnar",
                  "latitude": "19.84505000",
                  "longitude": "73.99866000"
              },
              {
                  "id": 147904,
                  "name": "Sion Mumbai",
                  "latitude": "19.04000000",
                  "longitude": "72.86000000"
              },
              {
                  "id": 147905,
                  "name": "Sironcha",
                  "latitude": "18.83000000",
                  "longitude": "79.96000000"
              },
              {
                  "id": 133970,
                  "name": "Sirur",
                  "latitude": "18.82760000",
                  "longitude": "74.37475000"
              },
              {
                  "id": 147906,
                  "name": "Sivala East Godavari district",
                  "latitude": "16.75722222",
                  "longitude": "82.08861111"
              },
              {
                  "id": 133986,
                  "name": "Solapur",
                  "latitude": "17.75000000",
                  "longitude": "75.50000000"
              },
              {
                  "id": 147907,
                  "name": "Sonala",
                  "latitude": "21.11666667",
                  "longitude": "76.73333333"
              },
              {
                  "id": 133993,
                  "name": "Sonegaon",
                  "latitude": "20.62915000",
                  "longitude": "78.69207000"
              },
              {
                  "id": 147908,
                  "name": "Songir",
                  "latitude": "21.08333333",
                  "longitude": "74.78333333"
              },
              {
                  "id": 147909,
                  "name": "Sonvad",
                  "latitude": "21.08333333",
                  "longitude": "75.35000000"
              },
              {
                  "id": 134015,
                  "name": "Soygaon",
                  "latitude": "20.59606000",
                  "longitude": "75.61765000"
              },
              {
                  "id": 134033,
                  "name": "Srivardhan",
                  "latitude": "18.04592000",
                  "longitude": "73.01552000"
              },
              {
                  "id": 134052,
                  "name": "Surgana",
                  "latitude": "20.55956000",
                  "longitude": "73.63747000"
              },
              {
                  "id": 147910,
                  "name": "Taklibhan",
                  "latitude": "19.61670000",
                  "longitude": "74.80000000"
              },
              {
                  "id": 147911,
                  "name": "Talbid",
                  "latitude": "17.35000000",
                  "longitude": "74.13000000"
              },
              {
                  "id": 134100,
                  "name": "Talegaon Dabhade",
                  "latitude": "18.73502000",
                  "longitude": "73.67561000"
              },
              {
                  "id": 147912,
                  "name": "Talegaon Dhamdhere",
                  "latitude": "18.66780000",
                  "longitude": "74.15360000"
              },
              {
                  "id": 134104,
                  "name": "Taloda",
                  "latitude": "21.56128000",
                  "longitude": "74.21238000"
              },
              {
                  "id": 147913,
                  "name": "Talode",
                  "latitude": "21.56074167",
                  "longitude": "74.83000000"
              },
              {
                  "id": 134241,
                  "name": "Tarapur",
                  "latitude": "19.86499000",
                  "longitude": "72.68426000"
              },
              {
                  "id": 147914,
                  "name": "Tardeo",
                  "latitude": "18.97000000",
                  "longitude": "72.81000000"
              },
              {
                  "id": 134242,
                  "name": "Tasgaon",
                  "latitude": "17.03700000",
                  "longitude": "74.60171000"
              },
              {
                  "id": 134128,
                  "name": "Telhara",
                  "latitude": "21.02694000",
                  "longitude": "76.83889000"
              },
              {
                  "id": 147915,
                  "name": "Thalner",
                  "latitude": "21.25000000",
                  "longitude": "74.96670000"
              },
              {
                  "id": 134138,
                  "name": "Thane",
                  "latitude": "19.33333000",
                  "longitude": "73.25000000"
              },
              {
                  "id": 134212,
                  "name": "Trimbak",
                  "latitude": "19.93268000",
                  "longitude": "73.52907000"
              },
              {
                  "id": 147916,
                  "name": "Trombay",
                  "latitude": "19.00000000",
                  "longitude": "72.90000000"
              },
              {
                  "id": 134217,
                  "name": "Tuljapur",
                  "latitude": "18.00804000",
                  "longitude": "76.07011000"
              },
              {
                  "id": 134221,
                  "name": "Tumsar",
                  "latitude": "21.38333000",
                  "longitude": "79.73333000"
              },
              {
                  "id": 134255,
                  "name": "Udgir",
                  "latitude": "18.39258000",
                  "longitude": "77.11756000"
              },
              {
                  "id": 134267,
                  "name": "Ulhasnagar",
                  "latitude": "19.21667000",
                  "longitude": "73.15000000"
              },
              {
                  "id": 134269,
                  "name": "Umarga",
                  "latitude": "17.83841000",
                  "longitude": "76.62331000"
              },
              {
                  "id": 134272,
                  "name": "Umarkhed",
                  "latitude": "19.60144000",
                  "longitude": "77.68878000"
              },
              {
                  "id": 134274,
                  "name": "Umred",
                  "latitude": "20.85396000",
                  "longitude": "79.32466000"
              },
              {
                  "id": 134291,
                  "name": "Uran",
                  "latitude": "18.87813000",
                  "longitude": "72.93924000"
              },
              {
                  "id": 147917,
                  "name": "Uruli Kanchan",
                  "latitude": "18.48333333",
                  "longitude": "74.13333333"
              },
              {
                  "id": 134379,
                  "name": "Vada",
                  "latitude": "19.65347000",
                  "longitude": "73.14811000"
              },
              {
                  "id": 147918,
                  "name": "Vadgaon",
                  "latitude": "18.74860000",
                  "longitude": "73.64100000"
              },
              {
                  "id": 147919,
                  "name": "Vadner",
                  "latitude": "20.25000000",
                  "longitude": "74.03330000"
              },
              {
                  "id": 134312,
                  "name": "Vaijapur",
                  "latitude": "19.92672000",
                  "longitude": "74.72750000"
              },
              {
                  "id": 147920,
                  "name": "Vairag",
                  "latitude": "18.05000000",
                  "longitude": "75.80000000"
              },
              {
                  "id": 147921,
                  "name": "Valsang",
                  "latitude": "17.60000000",
                  "longitude": "76.08330000"
              },
              {
                  "id": 147922,
                  "name": "Vangaon",
                  "latitude": "19.86666667",
                  "longitude": "72.75000000"
              },
              {
                  "id": 134328,
                  "name": "Varangaon",
                  "latitude": "21.01767000",
                  "longitude": "75.91042000"
              },
              {
                  "id": 147923,
                  "name": "Vashi",
                  "latitude": "19.08000000",
                  "longitude": "73.01000000"
              },
              {
                  "id": 134334,
                  "name": "Vasind",
                  "latitude": "19.40844000",
                  "longitude": "73.26285000"
              },
              {
                  "id": 147924,
                  "name": "Vatul",
                  "latitude": "16.75000000",
                  "longitude": "73.60000000"
              },
              {
                  "id": 147925,
                  "name": "Velas Maharashtra",
                  "latitude": "17.95850000",
                  "longitude": "73.04980000"
              },
              {
                  "id": 147926,
                  "name": "Velneshwar",
                  "latitude": "17.38330000",
                  "longitude": "73.20000000"
              },
              {
                  "id": 134346,
                  "name": "Vengurla",
                  "latitude": "15.86125000",
                  "longitude": "73.63182000"
              },
              {
                  "id": 147927,
                  "name": "Vijaydurg",
                  "latitude": "16.56670000",
                  "longitude": "73.33330000"
              },
              {
                  "id": 147928,
                  "name": "Vikhroli",
                  "latitude": "19.11000000",
                  "longitude": "72.94000000"
              },
              {
                  "id": 147929,
                  "name": "Vile Parle",
                  "latitude": "19.10000000",
                  "longitude": "72.83000000"
              },
              {
                  "id": 147930,
                  "name": "Vinchur",
                  "latitude": "20.11666667",
                  "longitude": "74.28333333"
              },
              {
                  "id": 134368,
                  "name": "Virar",
                  "latitude": "19.45591000",
                  "longitude": "72.81136000"
              },
              {
                  "id": 147931,
                  "name": "Vita Maharashtra",
                  "latitude": "17.27110000",
                  "longitude": "74.53780000"
              },
              {
                  "id": 134372,
                  "name": "Vite",
                  "latitude": "17.27343000",
                  "longitude": "74.53792000"
              },
              {
                  "id": 147932,
                  "name": "Wadala",
                  "latitude": "19.02163056",
                  "longitude": "72.86458889"
              },
              {
                  "id": 134388,
                  "name": "Wadgaon",
                  "latitude": "18.73920000",
                  "longitude": "73.63945000"
              },
              {
                  "id": 147933,
                  "name": "Wadner",
                  "latitude": "20.84972222",
                  "longitude": "76.33333333"
              },
              {
                  "id": 147934,
                  "name": "Wadwani",
                  "latitude": "18.98333333",
                  "longitude": "76.05000000"
              },
              {
                  "id": 147935,
                  "name": "Wagholi",
                  "latitude": "17.90000000",
                  "longitude": "74.08300000"
              },
              {
                  "id": 134390,
                  "name": "Wai",
                  "latitude": "17.95276000",
                  "longitude": "73.89058000"
              },
              {
                  "id": 147936,
                  "name": "Wakad",
                  "latitude": "18.59930000",
                  "longitude": "73.76250000"
              },
              {
                  "id": 147937,
                  "name": "Walgaon",
                  "latitude": "20.99890000",
                  "longitude": "77.70640000"
              },
              {
                  "id": 147938,
                  "name": "Walki",
                  "latitude": "18.95000000",
                  "longitude": "74.75000000"
              },
              {
                  "id": 134393,
                  "name": "Wani",
                  "latitude": "20.05507000",
                  "longitude": "78.95313000"
              },
              {
                  "id": 134396,
                  "name": "Wardha",
                  "latitude": "20.73933000",
                  "longitude": "78.59784000"
              },
              {
                  "id": 134397,
                  "name": "Warora",
                  "latitude": "20.22885000",
                  "longitude": "79.00277000"
              },
              {
                  "id": 134398,
                  "name": "Warud",
                  "latitude": "21.47101000",
                  "longitude": "78.26965000"
              },
              {
                  "id": 134399,
                  "name": "Washim",
                  "latitude": "20.20000000",
                  "longitude": "77.20000000"
              },
              {
                  "id": 147939,
                  "name": "Worli",
                  "latitude": "19.00000000",
                  "longitude": "72.81500000"
              },
              {
                  "id": 134438,
                  "name": "Yaval",
                  "latitude": "21.16772000",
                  "longitude": "75.69762000"
              },
              {
                  "id": 134427,
                  "name": "Yavatmal",
                  "latitude": "20.15000000",
                  "longitude": "78.35000000"
              },
              {
                  "id": 134434,
                  "name": "Yeola",
                  "latitude": "20.04240000",
                  "longitude": "74.48944000"
              }
          ]
      },
      {
          "id": 4010,
          "name": "Manipur",
          "state_code": "MN",
          "latitude": "24.66371730",
          "longitude": "93.90626880",
          "type": "state",
          "cities": [
              {
                  "id": 58064,
                  "name": "Bishnupur",
                  "latitude": "24.60769000",
                  "longitude": "93.77998000"
              },
              {
                  "id": 153522,
                  "name": "Chandel",
                  "latitude": "24.57390000",
                  "longitude": "94.29130000"
              },
              {
                  "id": 131585,
                  "name": "Churachandpur",
                  "latitude": "24.33333000",
                  "longitude": "93.68333000"
              },
              {
                  "id": 132162,
                  "name": "Imphal East",
                  "latitude": "24.79110000",
                  "longitude": "93.93480000"
              },
              {
                  "id": 132953,
                  "name": "Imphal West",
                  "latitude": "24.60998000",
                  "longitude": "93.88873000"
              },
              {
                  "id": 153527,
                  "name": "Jiribam",
                  "latitude": "24.79410040",
                  "longitude": "93.11709860"
              },
              {
                  "id": 132341,
                  "name": "Kakching",
                  "latitude": "24.49820000",
                  "longitude": "93.98126000"
              },
              {
                  "id": 153526,
                  "name": "Kamjong",
                  "latitude": "24.85996860",
                  "longitude": "94.50586430"
              },
              {
                  "id": 153523,
                  "name": "Kangpokpi",
                  "latitude": "24.08950000",
                  "longitude": "93.99010000"
              },
              {
                  "id": 153528,
                  "name": "Noney",
                  "latitude": "24.84911310",
                  "longitude": "93.59673660"
              },
              {
                  "id": 153525,
                  "name": "Pherzawl",
                  "latitude": "24.14370000",
                  "longitude": "93.52700000"
              },
              {
                  "id": 133837,
                  "name": "Senapati",
                  "latitude": "25.26705000",
                  "longitude": "94.02237000"
              },
              {
                  "id": 134109,
                  "name": "Tamenglong",
                  "latitude": "24.97548000",
                  "longitude": "93.51563000"
              },
              {
                  "id": 153524,
                  "name": "Tengnoupal",
                  "latitude": "24.39450000",
                  "longitude": "94.10530000"
              },
              {
                  "id": 134159,
                  "name": "Thoubal",
                  "latitude": "24.62205000",
                  "longitude": "94.01001000"
              },
              {
                  "id": 134264,
                  "name": "Ukhrul",
                  "latitude": "25.04828000",
                  "longitude": "94.35883000"
              }
          ]
      },
      {
          "id": 4006,
          "name": "Meghalaya",
          "state_code": "ML",
          "latitude": "25.46703080",
          "longitude": "91.36621600",
          "type": "state",
          "cities": [
              {
                  "id": 131520,
                  "name": "Cherrapunji",
                  "latitude": "25.30089000",
                  "longitude": "91.69619000"
              },
              {
                  "id": 131824,
                  "name": "East Garo Hills",
                  "latitude": "25.61372000",
                  "longitude": "90.62426000"
              },
              {
                  "id": 131825,
                  "name": "East Jaintia Hills",
                  "latitude": "25.35976000",
                  "longitude": "92.36680000"
              },
              {
                  "id": 131827,
                  "name": "East Khasi Hills",
                  "latitude": "25.38050000",
                  "longitude": "91.78905000"
              },
              {
                  "id": 132858,
                  "name": "Mairang",
                  "latitude": "25.56165000",
                  "longitude": "91.63602000"
              },
              {
                  "id": 132916,
                  "name": "Mankachar",
                  "latitude": "25.53347000",
                  "longitude": "89.86373000"
              },
              {
                  "id": 133232,
                  "name": "Nongpoh",
                  "latitude": "25.90230000",
                  "longitude": "91.87694000"
              },
              {
                  "id": 133233,
                  "name": "Nongstoin",
                  "latitude": "25.51704000",
                  "longitude": "91.26484000"
              },
              {
                  "id": 133237,
                  "name": "North Garo Hills",
                  "latitude": "25.89682000",
                  "longitude": "90.61602000"
              },
              {
                  "id": 133636,
                  "name": "Ri-Bhoi",
                  "latitude": "25.88997000",
                  "longitude": "91.82707000"
              },
              {
                  "id": 133870,
                  "name": "Shillong",
                  "latitude": "25.56892000",
                  "longitude": "91.88313000"
              },
              {
                  "id": 134009,
                  "name": "South Garo Hills",
                  "latitude": "25.30162000",
                  "longitude": "90.58530000"
              },
              {
                  "id": 134013,
                  "name": "South West Garo Hills",
                  "latitude": "25.47245000",
                  "longitude": "89.93399000"
              },
              {
                  "id": 134014,
                  "name": "South West Khasi Hills",
                  "latitude": "25.32155000",
                  "longitude": "91.29462000"
              },
              {
                  "id": 134223,
                  "name": "Tura",
                  "latitude": "25.51421000",
                  "longitude": "90.20239000"
              },
              {
                  "id": 134406,
                  "name": "West Garo Hills",
                  "latitude": "25.56794000",
                  "longitude": "90.22447000"
              },
              {
                  "id": 134408,
                  "name": "West Jaintia Hills",
                  "latitude": "25.50000000",
                  "longitude": "92.25000000"
              },
              {
                  "id": 134410,
                  "name": "West Khasi Hills",
                  "latitude": "25.54776000",
                  "longitude": "91.26957000"
              }
          ]
      },
      {
          "id": 4036,
          "name": "Mizoram",
          "state_code": "MZ",
          "latitude": "23.16454300",
          "longitude": "92.93757390",
          "type": "state",
          "cities": [
              {
                  "id": 57610,
                  "name": "Aizawl",
                  "latitude": "23.80000000",
                  "longitude": "92.90000000"
              },
              {
                  "id": 58184,
                  "name": "Champhai",
                  "latitude": "23.47444000",
                  "longitude": "93.32556000"
              },
              {
                  "id": 131656,
                  "name": "Darlawn",
                  "latitude": "24.01336000",
                  "longitude": "92.92439000"
              },
              {
                  "id": 132486,
                  "name": "Khawhai",
                  "latitude": "23.37807000",
                  "longitude": "93.12797000"
              },
              {
                  "id": 132554,
                  "name": "Kolasib",
                  "latitude": "24.22388000",
                  "longitude": "92.67869000"
              },
              {
                  "id": 132761,
                  "name": "Lawngtlai",
                  "latitude": "22.53000000",
                  "longitude": "92.90000000"
              },
              {
                  "id": 132787,
                  "name": "Lunglei",
                  "latitude": "22.90000000",
                  "longitude": "92.75000000"
              },
              {
                  "id": 132879,
                  "name": "Mamit",
                  "latitude": "23.78492000",
                  "longitude": "92.46939000"
              },
              {
                  "id": 133242,
                  "name": "North Vanlaiphai",
                  "latitude": "23.13227000",
                  "longitude": "93.06532000"
              },
              {
                  "id": 133756,
                  "name": "Saiha",
                  "latitude": "22.49183000",
                  "longitude": "92.98143000"
              },
              {
                  "id": 133759,
                  "name": "Sairang",
                  "latitude": "23.81034000",
                  "longitude": "92.65226000"
              },
              {
                  "id": 134063,
                  "name": "Saitlaw",
                  "latitude": "23.97187000",
                  "longitude": "92.57454000"
              },
              {
                  "id": 133847,
                  "name": "Serchhip",
                  "latitude": "23.28172000",
                  "longitude": "92.90039000"
              },
              {
                  "id": 134148,
                  "name": "Thenzawl",
                  "latitude": "23.31667000",
                  "longitude": "92.75000000"
              }
          ]
      },
      {
          "id": 4018,
          "name": "Nagaland",
          "state_code": "NL",
          "latitude": "26.15843540",
          "longitude": "94.56244260",
          "type": "state",
          "cities": [
              {
                  "id": 131771,
                  "name": "Dimapur",
                  "latitude": "25.77852000",
                  "longitude": "93.78508000"
              },
              {
                  "id": 132549,
                  "name": "Kohima",
                  "latitude": "25.67467000",
                  "longitude": "94.11099000"
              },
              {
                  "id": 132989,
                  "name": "Mokokchung",
                  "latitude": "26.31393000",
                  "longitude": "94.51675000"
              },
              {
                  "id": 132990,
                  "name": "Mon",
                  "latitude": "26.75000000",
                  "longitude": "94.83333000"
              },
              {
                  "id": 133416,
                  "name": "Peren",
                  "latitude": "25.51276000",
                  "longitude": "93.73716000"
              },
              {
                  "id": 133438,
                  "name": "Phek",
                  "latitude": "25.75000000",
                  "longitude": "94.50000000"
              },
              {
                  "id": 134215,
                  "name": "Tuensang",
                  "latitude": "26.26704000",
                  "longitude": "94.82415000"
              },
              {
                  "id": 134216,
                  "name": "Tuensang District",
                  "latitude": "26.25000000",
                  "longitude": "94.75000000"
              },
              {
                  "id": 134413,
                  "name": "Wokha",
                  "latitude": "26.16667000",
                  "longitude": "94.25000000"
              },
              {
                  "id": 134445,
                  "name": "Zunheboto",
                  "latitude": "26.00000000",
                  "longitude": "94.50000000"
              }
          ]
      },
      {
          "id": 4013,
          "name": "Odisha",
          "state_code": "OR",
          "latitude": "20.95166580",
          "longitude": "85.09852360",
          "type": "state",
          "cities": [
              {
                  "id": 57704,
                  "name": "Angul",
                  "latitude": "20.84089000",
                  "longitude": "85.10192000"
              },
              {
                  "id": 57705,
                  "name": "Angul District",
                  "latitude": "20.84903000",
                  "longitude": "85.06079000"
              },
              {
                  "id": 134465,
                  "name": "Asika",
                  "latitude": "19.61114000",
                  "longitude": "84.65998000"
              },
              {
                  "id": 134467,
                  "name": "Athagarh",
                  "latitude": "20.51999000",
                  "longitude": "85.62965000"
              },
              {
                  "id": 57785,
                  "name": "Bada Barabil",
                  "latitude": "22.11186000",
                  "longitude": "85.38684000"
              },
              {
                  "id": 57835,
                  "name": "Balangir",
                  "latitude": "20.75000000",
                  "longitude": "83.25000000"
              },
              {
                  "id": 57823,
                  "name": "Balasore",
                  "latitude": "21.49266000",
                  "longitude": "86.93348000"
              },
              {
                  "id": 58114,
                  "name": "Baleshwar",
                  "latitude": "21.50000000",
                  "longitude": "86.75000000"
              },
              {
                  "id": 57826,
                  "name": "Balimila",
                  "latitude": "18.25167000",
                  "longitude": "82.10659000"
              },
              {
                  "id": 58117,
                  "name": "Balugaon",
                  "latitude": "20.17838000",
                  "longitude": "85.11327000"
              },
              {
                  "id": 58123,
                  "name": "Banapur",
                  "latitude": "19.77889000",
                  "longitude": "85.17033000"
              },
              {
                  "id": 58128,
                  "name": "Banki",
                  "latitude": "20.37912000",
                  "longitude": "85.52953000"
              },
              {
                  "id": 58129,
                  "name": "Banposh",
                  "latitude": "22.24834000",
                  "longitude": "84.81044000"
              },
              {
                  "id": 57862,
                  "name": "Baragarh",
                  "latitude": "21.33333000",
                  "longitude": "83.61667000"
              },
              {
                  "id": 57866,
                  "name": "Barbil",
                  "latitude": "22.10194000",
                  "longitude": "85.37752000"
              },
              {
                  "id": 57869,
                  "name": "Bargarh",
                  "latitude": "21.33348000",
                  "longitude": "83.61905000"
              },
              {
                  "id": 57886,
                  "name": "Barpali",
                  "latitude": "21.19005000",
                  "longitude": "83.58721000"
              },
              {
                  "id": 58149,
                  "name": "Basudebpur",
                  "latitude": "21.11974000",
                  "longitude": "86.72896000"
              },
              {
                  "id": 57907,
                  "name": "Baud",
                  "latitude": "20.83773000",
                  "longitude": "84.32618000"
              },
              {
                  "id": 57908,
                  "name": "Baudh",
                  "latitude": "20.83300000",
                  "longitude": "84.33300000"
              },
              {
                  "id": 57921,
                  "name": "Belaguntha",
                  "latitude": "19.88249000",
                  "longitude": "84.63801000"
              },
              {
                  "id": 57953,
                  "name": "Bhadrak",
                  "latitude": "21.00000000",
                  "longitude": "86.60000000"
              },
              {
                  "id": 57954,
                  "name": "Bhadrakh",
                  "latitude": "21.05447000",
                  "longitude": "86.51560000"
              },
              {
                  "id": 57963,
                  "name": "Bhanjanagar",
                  "latitude": "19.92719000",
                  "longitude": "84.58201000"
              },
              {
                  "id": 57976,
                  "name": "Bhawanipatna",
                  "latitude": "19.90717000",
                  "longitude": "83.16697000"
              },
              {
                  "id": 57999,
                  "name": "Bhuban",
                  "latitude": "20.88197000",
                  "longitude": "85.83334000"
              },
              {
                  "id": 58000,
                  "name": "Bhubaneswar",
                  "latitude": "20.27241000",
                  "longitude": "85.83385000"
              },
              {
                  "id": 58058,
                  "name": "Binka",
                  "latitude": "21.02626000",
                  "longitude": "83.81197000"
              },
              {
                  "id": 58060,
                  "name": "Birmitrapur",
                  "latitude": "22.40000000",
                  "longitude": "84.76667000"
              },
              {
                  "id": 58079,
                  "name": "Bolanikhodan",
                  "latitude": "22.11312000",
                  "longitude": "85.33645000"
              },
              {
                  "id": 58086,
                  "name": "Brahmapur",
                  "latitude": "19.31151000",
                  "longitude": "84.79290000"
              },
              {
                  "id": 58087,
                  "name": "Brajarajnagar",
                  "latitude": "21.81667000",
                  "longitude": "83.91667000"
              },
              {
                  "id": 58092,
                  "name": "Buguda",
                  "latitude": "19.80806000",
                  "longitude": "84.79084000"
              },
              {
                  "id": 58099,
                  "name": "Burla",
                  "latitude": "21.50976000",
                  "longitude": "83.87259000"
              },
              {
                  "id": 131594,
                  "name": "Champua",
                  "latitude": "22.06734000",
                  "longitude": "85.66463000"
              },
              {
                  "id": 131597,
                  "name": "Chandbali",
                  "latitude": "20.77519000",
                  "longitude": "86.74139000"
              },
              {
                  "id": 131510,
                  "name": "Chatrapur",
                  "latitude": "19.35574000",
                  "longitude": "84.98359000"
              },
              {
                  "id": 131550,
                  "name": "Chikitigarh",
                  "latitude": "19.20233000",
                  "longitude": "84.61450000"
              },
              {
                  "id": 131573,
                  "name": "Chittarkonda",
                  "latitude": "18.12533000",
                  "longitude": "82.10890000"
              },
              {
                  "id": 131633,
                  "name": "Cuttack",
                  "latitude": "20.50000000",
                  "longitude": "86.25000000"
              },
              {
                  "id": 131643,
                  "name": "Daitari",
                  "latitude": "21.10000000",
                  "longitude": "85.75000000"
              },
              {
                  "id": 131683,
                  "name": "Deogarh",
                  "latitude": "21.53827000",
                  "longitude": "84.73337000"
              },
              {
                  "id": 131735,
                  "name": "Dhenkanal",
                  "latitude": "20.75000000",
                  "longitude": "85.50000000"
              },
              {
                  "id": 131765,
                  "name": "Digapahandi",
                  "latitude": "19.37275000",
                  "longitude": "84.57184000"
              },
              {
                  "id": 131892,
                  "name": "Gajapati",
                  "latitude": "18.91000000",
                  "longitude": "84.20000000"
              },
              {
                  "id": 131914,
                  "name": "Ganjam",
                  "latitude": "19.38705000",
                  "longitude": "85.05079000"
              },
              {
                  "id": 131988,
                  "name": "Gopalpur",
                  "latitude": "19.25861000",
                  "longitude": "84.90517000"
              },
              {
                  "id": 132013,
                  "name": "Gudari",
                  "latitude": "19.34762000",
                  "longitude": "83.78128000"
              },
              {
                  "id": 132030,
                  "name": "Gunupur",
                  "latitude": "19.08040000",
                  "longitude": "83.80879000"
              },
              {
                  "id": 132102,
                  "name": "Hinjilikatu",
                  "latitude": "19.48166000",
                  "longitude": "84.74489000"
              },
              {
                  "id": 132148,
                  "name": "Hirakud",
                  "latitude": "21.52502000",
                  "longitude": "83.87275000"
              },
              {
                  "id": 132185,
                  "name": "Jagatsinghpur",
                  "latitude": "20.20000000",
                  "longitude": "86.30000000"
              },
              {
                  "id": 132209,
                  "name": "Jajpur",
                  "latitude": "20.84149000",
                  "longitude": "86.31237000"
              },
              {
                  "id": 132213,
                  "name": "Jaleshwar",
                  "latitude": "21.80176000",
                  "longitude": "87.22250000"
              },
              {
                  "id": 132250,
                  "name": "Jatani",
                  "latitude": "20.15975000",
                  "longitude": "85.70742000"
              },
              {
                  "id": 132265,
                  "name": "Jeypore",
                  "latitude": "18.85630000",
                  "longitude": "82.57160000"
              },
              {
                  "id": 132269,
                  "name": "Jharsuguda",
                  "latitude": "21.85531000",
                  "longitude": "84.00698000"
              },
              {
                  "id": 132270,
                  "name": "Jharsuguda District",
                  "latitude": "21.85000000",
                  "longitude": "84.00000000"
              },
              {
                  "id": 132338,
                  "name": "Kaintragarh",
                  "latitude": "20.72115000",
                  "longitude": "84.53514000"
              },
              {
                  "id": 132687,
                  "name": "Kalahandi",
                  "latitude": "19.75000000",
                  "longitude": "83.00000000"
              },
              {
                  "id": 132695,
                  "name": "Kamakhyanagar",
                  "latitude": "20.93385000",
                  "longitude": "85.54489000"
              },
              {
                  "id": 132371,
                  "name": "Kandhamal",
                  "latitude": "20.30000000",
                  "longitude": "84.00000000"
              },
              {
                  "id": 132387,
                  "name": "Kantabanji",
                  "latitude": "20.46709000",
                  "longitude": "82.92042000"
              },
              {
                  "id": 132386,
                  "name": "Kantilo",
                  "latitude": "20.36152000",
                  "longitude": "85.19212000"
              },
              {
                  "id": 132441,
                  "name": "Kendrapara",
                  "latitude": "20.50000000",
                  "longitude": "86.50000000"
              },
              {
                  "id": 132444,
                  "name": "Kendujhar",
                  "latitude": "21.50000000",
                  "longitude": "85.50000000"
              },
              {
                  "id": 132448,
                  "name": "Kesinga",
                  "latitude": "20.18778000",
                  "longitude": "83.21949000"
              },
              {
                  "id": 132458,
                  "name": "Khallikot",
                  "latitude": "19.60908000",
                  "longitude": "85.08609000"
              },
              {
                  "id": 132477,
                  "name": "Kharhial",
                  "latitude": "20.28845000",
                  "longitude": "82.76060000"
              },
              {
                  "id": 132501,
                  "name": "Khordha",
                  "latitude": "20.20000000",
                  "longitude": "85.60000000"
              },
              {
                  "id": 132508,
                  "name": "Khurda",
                  "latitude": "20.18268000",
                  "longitude": "85.61629000"
              },
              {
                  "id": 132527,
                  "name": "Kiri Buru",
                  "latitude": "22.08333000",
                  "longitude": "85.35000000"
              },
              {
                  "id": 132539,
                  "name": "Kodala",
                  "latitude": "19.62425000",
                  "longitude": "84.94075000"
              },
              {
                  "id": 132570,
                  "name": "Konarka",
                  "latitude": "19.89758000",
                  "longitude": "86.11413000"
              },
              {
                  "id": 132578,
                  "name": "Koraput",
                  "latitude": "19.00000000",
                  "longitude": "83.00000000"
              },
              {
                  "id": 132624,
                  "name": "Kuchaiburi",
                  "latitude": "22.26675000",
                  "longitude": "86.17385000"
              },
              {
                  "id": 132626,
                  "name": "Kuchinda",
                  "latitude": "21.74356000",
                  "longitude": "84.34848000"
              },
              {
                  "id": 132871,
                  "name": "Malkangiri",
                  "latitude": "18.25000000",
                  "longitude": "81.95000000"
              },
              {
                  "id": 132954,
                  "name": "Mayurbhanj",
                  "latitude": "21.75000000",
                  "longitude": "86.50000000"
              },
              {
                  "id": 133104,
                  "name": "Nabarangpur",
                  "latitude": "19.23330000",
                  "longitude": "82.55000000"
              },
              {
                  "id": 133196,
                  "name": "Nayagarh",
                  "latitude": "20.12882000",
                  "longitude": "85.09626000"
              },
              {
                  "id": 133195,
                  "name": "Nayagarh District",
                  "latitude": "20.13000000",
                  "longitude": "85.10000000"
              },
              {
                  "id": 133285,
                  "name": "Nilgiri",
                  "latitude": "21.46235000",
                  "longitude": "86.76794000"
              },
              {
                  "id": 133219,
                  "name": "Nimaparha",
                  "latitude": "20.05756000",
                  "longitude": "86.00436000"
              },
              {
                  "id": 133245,
                  "name": "Nowrangapur",
                  "latitude": "19.23114000",
                  "longitude": "82.54826000"
              },
              {
                  "id": 133247,
                  "name": "Nuapada",
                  "latitude": "20.60000000",
                  "longitude": "82.50000000"
              },
              {
                  "id": 133312,
                  "name": "Padampur",
                  "latitude": "20.99932000",
                  "longitude": "83.06325000"
              },
              {
                  "id": 133370,
                  "name": "Paradip Garh",
                  "latitude": "20.31641000",
                  "longitude": "86.60850000"
              },
              {
                  "id": 133393,
                  "name": "Patamundai",
                  "latitude": "20.57806000",
                  "longitude": "86.56063000"
              },
              {
                  "id": 133387,
                  "name": "Patnagarh",
                  "latitude": "20.70833000",
                  "longitude": "83.13263000"
              },
              {
                  "id": 133441,
                  "name": "Phulbani",
                  "latitude": "20.48101000",
                  "longitude": "84.23063000"
              },
              {
                  "id": 133453,
                  "name": "Pipili",
                  "latitude": "20.11357000",
                  "longitude": "85.83147000"
              },
              {
                  "id": 133467,
                  "name": "Polasara",
                  "latitude": "19.69386000",
                  "longitude": "84.81401000"
              },
              {
                  "id": 133511,
                  "name": "Puri",
                  "latitude": "19.90000000",
                  "longitude": "85.60000000"
              },
              {
                  "id": 133513,
                  "name": "Purushottampur",
                  "latitude": "19.52024000",
                  "longitude": "84.88514000"
              },
              {
                  "id": 133602,
                  "name": "Rambha",
                  "latitude": "19.51667000",
                  "longitude": "85.10000000"
              },
              {
                  "id": 133620,
                  "name": "Raurkela",
                  "latitude": "22.22496000",
                  "longitude": "84.86414000"
              },
              {
                  "id": 133622,
                  "name": "Rayagada",
                  "latitude": "19.40000000",
                  "longitude": "83.50000000"
              },
              {
                  "id": 133625,
                  "name": "Remuna",
                  "latitude": "21.52798000",
                  "longitude": "86.87156000"
              },
              {
                  "id": 133626,
                  "name": "Rengali",
                  "latitude": "21.64602000",
                  "longitude": "84.05311000"
              },
              {
                  "id": 133769,
                  "name": "Sambalpur",
                  "latitude": "21.40000000",
                  "longitude": "83.88333000"
              },
              {
                  "id": 133994,
                  "name": "Sonepur",
                  "latitude": "20.83333000",
                  "longitude": "83.91667000"
              },
              {
                  "id": 134002,
                  "name": "Sorada",
                  "latitude": "19.76082000",
                  "longitude": "84.42997000"
              },
              {
                  "id": 134004,
                  "name": "Soro",
                  "latitude": "21.27851000",
                  "longitude": "86.68833000"
              },
              {
                  "id": 134034,
                  "name": "Subarnapur",
                  "latitude": "20.93154000",
                  "longitude": "83.82486000"
              },
              {
                  "id": 134044,
                  "name": "Sundargarh",
                  "latitude": "22.25000000",
                  "longitude": "84.50000000"
              },
              {
                  "id": 134232,
                  "name": "Talcher",
                  "latitude": "20.94927000",
                  "longitude": "85.23354000"
              },
              {
                  "id": 134115,
                  "name": "Tarabha",
                  "latitude": "20.73252000",
                  "longitude": "83.67443000"
              },
              {
                  "id": 134201,
                  "name": "Titlagarh",
                  "latitude": "20.28961000",
                  "longitude": "83.15233000"
              },
              {
                  "id": 134254,
                  "name": "Udayagiri",
                  "latitude": "20.12416000",
                  "longitude": "84.36869000"
              }
          ]
      },
      {
          "id": 4011,
          "name": "Puducherry",
          "state_code": "PY",
          "latitude": "11.94159150",
          "longitude": "79.80831330",
          "type": "Union territory",
          "cities": [
              {
                  "id": 132715,
                  "name": "Karaikal",
                  "latitude": "10.92209000",
                  "longitude": "79.83353000"
              },
              {
                  "id": 132830,
                  "name": "Mahe",
                  "latitude": "11.70000000",
                  "longitude": "75.53333000"
              },
              {
                  "id": 133490,
                  "name": "Puducherry",
                  "latitude": "11.93381000",
                  "longitude": "79.82979000"
              },
              {
                  "id": 134425,
                  "name": "Yanam",
                  "latitude": "16.73463000",
                  "longitude": "82.21773000"
              }
          ]
      },
      {
          "id": 4015,
          "name": "Punjab",
          "state_code": "PB",
          "latitude": "31.14713050",
          "longitude": "75.34121790",
          "type": "state",
          "cities": [
              {
                  "id": 57587,
                  "name": "Abohar",
                  "latitude": "30.14453000",
                  "longitude": "74.19552000"
              },
              {
                  "id": 57592,
                  "name": "Adampur",
                  "latitude": "31.43224000",
                  "longitude": "75.71484000"
              },
              {
                  "id": 57612,
                  "name": "Ajitgarh",
                  "latitude": "30.65000000",
                  "longitude": "76.70000000"
              },
              {
                  "id": 57615,
                  "name": "Ajnala",
                  "latitude": "31.84473000",
                  "longitude": "74.76295000"
              },
              {
                  "id": 57629,
                  "name": "Akalgarh",
                  "latitude": "29.82074000",
                  "longitude": "75.89078000"
              },
              {
                  "id": 57651,
                  "name": "Alawalpur",
                  "latitude": "31.43161000",
                  "longitude": "75.65614000"
              },
              {
                  "id": 57681,
                  "name": "Amloh",
                  "latitude": "30.60837000",
                  "longitude": "76.23199000"
              },
              {
                  "id": 57686,
                  "name": "Amritsar",
                  "latitude": "31.67000000",
                  "longitude": "74.84000000"
              },
              {
                  "id": 57697,
                  "name": "Anandpur Sahib",
                  "latitude": "31.23926000",
                  "longitude": "76.50253000"
              },
              {
                  "id": 57791,
                  "name": "Badhni Kalan",
                  "latitude": "30.68130000",
                  "longitude": "75.29087000"
              },
              {
                  "id": 58109,
                  "name": "Bagha Purana",
                  "latitude": "30.68809000",
                  "longitude": "75.09838000"
              },
              {
                  "id": 57819,
                  "name": "Bakloh",
                  "latitude": "32.47939000",
                  "longitude": "75.91874000"
              },
              {
                  "id": 58118,
                  "name": "Balachor",
                  "latitude": "31.06062000",
                  "longitude": "76.30166000"
              },
              {
                  "id": 57846,
                  "name": "Banga",
                  "latitude": "31.18874000",
                  "longitude": "75.99495000"
              },
              {
                  "id": 57859,
                  "name": "Banur",
                  "latitude": "30.55407000",
                  "longitude": "76.71948000"
              },
              {
                  "id": 57882,
                  "name": "Barnala",
                  "latitude": "30.37451000",
                  "longitude": "75.54870000"
              },
              {
                  "id": 57906,
                  "name": "Batala",
                  "latitude": "31.80921000",
                  "longitude": "75.20294000"
              },
              {
                  "id": 57914,
                  "name": "Begowal",
                  "latitude": "31.61152000",
                  "longitude": "75.52135000"
              },
              {
                  "id": 57950,
                  "name": "Bhadaur",
                  "latitude": "30.47651000",
                  "longitude": "75.33049000"
              },
              {
                  "id": 57904,
                  "name": "Bhatinda",
                  "latitude": "30.20747000",
                  "longitude": "74.93893000"
              },
              {
                  "id": 57977,
                  "name": "Bhawanigarh",
                  "latitude": "30.26685000",
                  "longitude": "76.03854000"
              },
              {
                  "id": 58018,
                  "name": "Bhikhi",
                  "latitude": "30.05918000",
                  "longitude": "75.53500000"
              },
              {
                  "id": 57990,
                  "name": "Bhogpur",
                  "latitude": "31.55442000",
                  "longitude": "75.64271000"
              },
              {
                  "id": 143761,
                  "name": "Bholath",
                  "latitude": "31.54277778",
                  "longitude": "75.50750000"
              },
              {
                  "id": 58090,
                  "name": "Budhlada",
                  "latitude": "29.92799000",
                  "longitude": "75.56205000"
              },
              {
                  "id": 131610,
                  "name": "Chima",
                  "latitude": "30.68540000",
                  "longitude": "76.08643000"
              },
              {
                  "id": 131661,
                  "name": "Dasuya",
                  "latitude": "31.81679000",
                  "longitude": "75.65310000"
              },
              {
                  "id": 131696,
                  "name": "Dera Baba Nanak",
                  "latitude": "32.03733000",
                  "longitude": "75.02787000"
              },
              {
                  "id": 143763,
                  "name": "Dera Bassi",
                  "latitude": "30.58720000",
                  "longitude": "76.84280000"
              },
              {
                  "id": 131713,
                  "name": "Dhanaula",
                  "latitude": "30.28216000",
                  "longitude": "75.57341000"
              },
              {
                  "id": 131756,
                  "name": "Dhariwal",
                  "latitude": "31.95616000",
                  "longitude": "75.32386000"
              },
              {
                  "id": 131736,
                  "name": "Dhilwan",
                  "latitude": "31.51432000",
                  "longitude": "75.34574000"
              },
              {
                  "id": 143762,
                  "name": "Dhudi",
                  "latitude": "30.69636000",
                  "longitude": "74.85246000"
              },
              {
                  "id": 131760,
                  "name": "Dhuri",
                  "latitude": "30.36846000",
                  "longitude": "75.86791000"
              },
              {
                  "id": 131816,
                  "name": "Dina Nagar",
                  "latitude": "32.13664000",
                  "longitude": "75.47291000"
              },
              {
                  "id": 131777,
                  "name": "Dirba",
                  "latitude": "30.07222000",
                  "longitude": "75.99607000"
              },
              {
                  "id": 131790,
                  "name": "Doraha",
                  "latitude": "30.79953000",
                  "longitude": "76.02355000"
              },
              {
                  "id": 131859,
                  "name": "Faridkot",
                  "latitude": "30.67399000",
                  "longitude": "74.75579000"
              },
              {
                  "id": 131865,
                  "name": "Fatehgarh Churian",
                  "latitude": "31.86431000",
                  "longitude": "74.95665000"
              },
              {
                  "id": 131866,
                  "name": "Fatehgarh Sahib",
                  "latitude": "30.64379000",
                  "longitude": "76.34787000"
              },
              {
                  "id": 131881,
                  "name": "Fazilka",
                  "latitude": "30.40207000",
                  "longitude": "74.02836000"
              },
              {
                  "id": 131875,
                  "name": "Firozpur",
                  "latitude": "30.92574000",
                  "longitude": "74.61311000"
              },
              {
                  "id": 131877,
                  "name": "Firozpur District",
                  "latitude": "30.89000000",
                  "longitude": "74.56000000"
              },
              {
                  "id": 131918,
                  "name": "Gardhiwala",
                  "latitude": "31.74147000",
                  "longitude": "75.75567000"
              },
              {
                  "id": 131921,
                  "name": "Garhshankar",
                  "latitude": "31.21537000",
                  "longitude": "76.14149000"
              },
              {
                  "id": 131935,
                  "name": "Ghanaur",
                  "latitude": "30.33092000",
                  "longitude": "76.61203000"
              },
              {
                  "id": 131956,
                  "name": "Giddarbaha",
                  "latitude": "30.19953000",
                  "longitude": "74.66627000"
              },
              {
                  "id": 132031,
                  "name": "Gurdaspur",
                  "latitude": "31.92000000",
                  "longitude": "75.27000000"
              },
              {
                  "id": 132037,
                  "name": "Guru Har Sahai",
                  "latitude": "30.70862000",
                  "longitude": "74.40407000"
              },
              {
                  "id": 132136,
                  "name": "Hajipur",
                  "latitude": "31.97714000",
                  "longitude": "75.75438000"
              },
              {
                  "id": 132077,
                  "name": "Hariana",
                  "latitude": "31.63512000",
                  "longitude": "75.83887000"
              },
              {
                  "id": 132122,
                  "name": "Hoshiarpur",
                  "latitude": "31.53723000",
                  "longitude": "75.91269000"
              },
              {
                  "id": 143764,
                  "name": "Ishanpur",
                  "latitude": "30.63929000",
                  "longitude": "76.11761000"
              },
              {
                  "id": 132192,
                  "name": "Jagraon",
                  "latitude": "30.78783000",
                  "longitude": "75.47391000"
              },
              {
                  "id": 132207,
                  "name": "Jaito",
                  "latitude": "30.45126000",
                  "longitude": "74.89189000"
              },
              {
                  "id": 132223,
                  "name": "Jalalabad",
                  "latitude": "30.60622000",
                  "longitude": "74.25727000"
              },
              {
                  "id": 132211,
                  "name": "Jalandhar",
                  "latitude": "31.41667000",
                  "longitude": "75.61667000"
              },
              {
                  "id": 132236,
                  "name": "Jandiala",
                  "latitude": "31.15930000",
                  "longitude": "75.61755000"
              },
              {
                  "id": 132237,
                  "name": "Jandiala Guru",
                  "latitude": "31.56198000",
                  "longitude": "75.02770000"
              },
              {
                  "id": 132347,
                  "name": "Kalanaur",
                  "latitude": "32.01227000",
                  "longitude": "75.15063000"
              },
              {
                  "id": 132392,
                  "name": "Kapurthala",
                  "latitude": "31.38011000",
                  "longitude": "75.38105000"
              },
              {
                  "id": 132408,
                  "name": "Kartarpur",
                  "latitude": "31.44268000",
                  "longitude": "75.49847000"
              },
              {
                  "id": 132465,
                  "name": "Khamanon",
                  "latitude": "30.81725000",
                  "longitude": "76.35478000"
              },
              {
                  "id": 132469,
                  "name": "Khanna",
                  "latitude": "30.70547000",
                  "longitude": "76.22196000"
              },
              {
                  "id": 132472,
                  "name": "Kharar",
                  "latitude": "30.74632000",
                  "longitude": "76.64689000"
              },
              {
                  "id": 132491,
                  "name": "Khemkaran",
                  "latitude": "31.14443000",
                  "longitude": "74.55938000"
              },
              {
                  "id": 132591,
                  "name": "Kot Isa Khan",
                  "latitude": "30.94659000",
                  "longitude": "75.13780000"
              },
              {
                  "id": 132600,
                  "name": "Kotkapura",
                  "latitude": "30.58190000",
                  "longitude": "74.83298000"
              },
              {
                  "id": 132760,
                  "name": "Laungowal",
                  "latitude": "30.19393000",
                  "longitude": "75.68089000"
              },
              {
                  "id": 132785,
                  "name": "Ludhiana",
                  "latitude": "30.91204000",
                  "longitude": "75.85379000"
              },
              {
                  "id": 133056,
                  "name": "Machhiwara",
                  "latitude": "30.91557000",
                  "longitude": "76.20016000"
              },
              {
                  "id": 132861,
                  "name": "Majitha",
                  "latitude": "31.75711000",
                  "longitude": "74.95891000"
              },
              {
                  "id": 132862,
                  "name": "Makhu",
                  "latitude": "31.10335000",
                  "longitude": "74.99631000"
              },
              {
                  "id": 132867,
                  "name": "Malaut",
                  "latitude": "30.21121000",
                  "longitude": "74.48180000"
              },
              {
                  "id": 133066,
                  "name": "Malerkotla",
                  "latitude": "30.53090000",
                  "longitude": "75.87949000"
              },
              {
                  "id": 133082,
                  "name": "Mansa",
                  "latitude": "29.98844000",
                  "longitude": "75.40167000"
              },
              {
                  "id": 132948,
                  "name": "Maur Mandi",
                  "latitude": "30.08333000",
                  "longitude": "75.25000000"
              },
              {
                  "id": 132979,
                  "name": "Moga",
                  "latitude": "30.80376000",
                  "longitude": "75.14938000"
              },
              {
                  "id": 132980,
                  "name": "Mohali",
                  "latitude": "30.67995000",
                  "longitude": "76.72211000"
              },
              {
                  "id": 132996,
                  "name": "Morinda",
                  "latitude": "30.79014000",
                  "longitude": "76.49883000"
              },
              {
                  "id": 133017,
                  "name": "Mukerian",
                  "latitude": "31.95394000",
                  "longitude": "75.61716000"
              },
              {
                  "id": 133250,
                  "name": "Nabha",
                  "latitude": "30.37577000",
                  "longitude": "76.15292000"
              },
              {
                  "id": 133128,
                  "name": "Nakodar",
                  "latitude": "31.12586000",
                  "longitude": "75.47508000"
              },
              {
                  "id": 133147,
                  "name": "Nangal",
                  "latitude": "31.38966000",
                  "longitude": "76.37574000"
              },
              {
                  "id": 133190,
                  "name": "Nawanshahr",
                  "latitude": "31.12450000",
                  "longitude": "76.11613000"
              },
              {
                  "id": 133291,
                  "name": "Nurmahal",
                  "latitude": "31.09662000",
                  "longitude": "75.59386000"
              },
              {
                  "id": 133293,
                  "name": "Nurpur Kalan",
                  "latitude": "31.16667000",
                  "longitude": "76.48333000"
              },
              {
                  "id": 133382,
                  "name": "Pathankot",
                  "latitude": "32.27484000",
                  "longitude": "75.65287000"
              },
              {
                  "id": 133384,
                  "name": "Patiala",
                  "latitude": "30.33625000",
                  "longitude": "76.39220000"
              },
              {
                  "id": 133390,
                  "name": "Patti",
                  "latitude": "31.28092000",
                  "longitude": "74.85849000"
              },
              {
                  "id": 133431,
                  "name": "Phagwara",
                  "latitude": "31.22452000",
                  "longitude": "75.77387000"
              },
              {
                  "id": 133439,
                  "name": "Phillaur",
                  "latitude": "31.01887000",
                  "longitude": "75.79111000"
              },
              {
                  "id": 133575,
                  "name": "Qadian",
                  "latitude": "31.82198000",
                  "longitude": "75.37663000"
              },
              {
                  "id": 133662,
                  "name": "Rahon",
                  "latitude": "31.05275000",
                  "longitude": "76.11907000"
              },
              {
                  "id": 133665,
                  "name": "Raikot",
                  "latitude": "30.65000000",
                  "longitude": "75.60000000"
              },
              {
                  "id": 133670,
                  "name": "Rajasansi",
                  "latitude": "31.72021000",
                  "longitude": "74.80080000"
              },
              {
                  "id": 133681,
                  "name": "Rajpura",
                  "latitude": "30.47856000",
                  "longitude": "76.59284000"
              },
              {
                  "id": 133690,
                  "name": "Ram Das",
                  "latitude": "31.96739000",
                  "longitude": "74.90870000"
              },
              {
                  "id": 133708,
                  "name": "Rampura",
                  "latitude": "30.25600000",
                  "longitude": "75.24116000"
              },
              {
                  "id": 133654,
                  "name": "Rupnagar",
                  "latitude": "31.04000000",
                  "longitude": "76.52000000"
              },
              {
                  "id": 133772,
                  "name": "Samrala",
                  "latitude": "30.83601000",
                  "longitude": "76.19324000"
              },
              {
                  "id": 133776,
                  "name": "Sanaur",
                  "latitude": "30.30182000",
                  "longitude": "76.45786000"
              },
              {
                  "id": 133785,
                  "name": "Sangrur",
                  "latitude": "30.24506000",
                  "longitude": "75.84488000"
              },
              {
                  "id": 133804,
                  "name": "Sardulgarh",
                  "latitude": "29.69224000",
                  "longitude": "75.23608000"
              },
              {
                  "id": 133854,
                  "name": "Shahid Bhagat Singh Nagar",
                  "latitude": "31.13183000",
                  "longitude": "76.13328000"
              },
              {
                  "id": 133897,
                  "name": "Shahkot",
                  "latitude": "31.08173000",
                  "longitude": "75.33708000"
              },
              {
                  "id": 133911,
                  "name": "Sham Churasi",
                  "latitude": "31.50028000",
                  "longitude": "75.74917000"
              },
              {
                  "id": 133955,
                  "name": "Sirhind-Fategarh",
                  "latitude": "30.64321000",
                  "longitude": "76.38421000"
              },
              {
                  "id": 133019,
                  "name": "Sri Muktsar Sahib",
                  "latitude": "30.47426000",
                  "longitude": "74.51660000"
              },
              {
                  "id": 134037,
                  "name": "Sultanpur Lodhi",
                  "latitude": "31.21468000",
                  "longitude": "75.19602000"
              },
              {
                  "id": 134048,
                  "name": "Sunam",
                  "latitude": "30.12883000",
                  "longitude": "75.79943000"
              },
              {
                  "id": 134105,
                  "name": "Talwandi Bhai",
                  "latitude": "30.85584000",
                  "longitude": "74.92979000"
              },
              {
                  "id": 134106,
                  "name": "Talwara",
                  "latitude": "31.93760000",
                  "longitude": "75.88657000"
              },
              {
                  "id": 134118,
                  "name": "Tarn Taran Sahib",
                  "latitude": "31.45191000",
                  "longitude": "74.92777000"
              },
              {
                  "id": 134443,
                  "name": "Zira",
                  "latitude": "30.96853000",
                  "longitude": "74.99106000"
              }
          ]
      },
      {
          "id": 4014,
          "name": "Rajasthan",
          "state_code": "RJ",
          "latitude": "27.02380360",
          "longitude": "74.21793260",
          "type": "state",
          "cities": [
              {
                  "id": 57584,
                  "name": "Abhaneri",
                  "latitude": "27.00743000",
                  "longitude": "76.60760000"
              },
              {
                  "id": 134449,
                  "name": "Abu",
                  "latitude": "24.59365000",
                  "longitude": "72.71756000"
              },
              {
                  "id": 134450,
                  "name": "Abu Road",
                  "latitude": "24.48012000",
                  "longitude": "72.78186000"
              },
              {
                  "id": 57614,
                  "name": "Ajmer",
                  "latitude": "26.25000000",
                  "longitude": "74.66667000"
              },
              {
                  "id": 57625,
                  "name": "Aklera",
                  "latitude": "24.41288000",
                  "longitude": "76.56719000"
              },
              {
                  "id": 57649,
                  "name": "Alwar",
                  "latitude": "27.50000000",
                  "longitude": "76.50000000"
              },
              {
                  "id": 57676,
                  "name": "Amet",
                  "latitude": "25.30609000",
                  "longitude": "73.92580000"
              },
              {
                  "id": 57717,
                  "name": "Anta",
                  "latitude": "25.15000000",
                  "longitude": "76.30000000"
              },
              {
                  "id": 57722,
                  "name": "Anupgarh",
                  "latitude": "29.19111000",
                  "longitude": "73.20861000"
              },
              {
                  "id": 134466,
                  "name": "Asind",
                  "latitude": "25.73420000",
                  "longitude": "74.33278000"
              },
              {
                  "id": 57798,
                  "name": "Bagar",
                  "latitude": "28.18784000",
                  "longitude": "75.50012000"
              },
              {
                  "id": 57822,
                  "name": "Bakani",
                  "latitude": "24.28624000",
                  "longitude": "76.23709000"
              },
              {
                  "id": 58115,
                  "name": "Bali",
                  "latitude": "25.19725000",
                  "longitude": "73.29117000"
              },
              {
                  "id": 58116,
                  "name": "Balotra",
                  "latitude": "25.83242000",
                  "longitude": "72.24000000"
              },
              {
                  "id": 58125,
                  "name": "Bandikui",
                  "latitude": "27.05087000",
                  "longitude": "76.57325000"
              },
              {
                  "id": 58134,
                  "name": "Banswara",
                  "latitude": "23.54109000",
                  "longitude": "74.44250000"
              },
              {
                  "id": 57863,
                  "name": "Baran",
                  "latitude": "25.09000000",
                  "longitude": "76.66000000"
              },
              {
                  "id": 58142,
                  "name": "Bari",
                  "latitude": "26.64661000",
                  "longitude": "77.61634000"
              },
              {
                  "id": 57874,
                  "name": "Bari Sadri",
                  "latitude": "24.41339000",
                  "longitude": "74.47331000"
              },
              {
                  "id": 58143,
                  "name": "Barmer",
                  "latitude": "25.75000000",
                  "longitude": "71.50000000"
              },
              {
                  "id": 57895,
                  "name": "Basi",
                  "latitude": "26.83150000",
                  "longitude": "76.04856000"
              },
              {
                  "id": 57899,
                  "name": "Basni",
                  "latitude": "27.17232000",
                  "longitude": "73.64519000"
              },
              {
                  "id": 57903,
                  "name": "Baswa",
                  "latitude": "27.14955000",
                  "longitude": "76.58345000"
              },
              {
                  "id": 57910,
                  "name": "Bayana",
                  "latitude": "26.90791000",
                  "longitude": "77.28985000"
              },
              {
                  "id": 57946,
                  "name": "Beawar",
                  "latitude": "26.10119000",
                  "longitude": "74.32028000"
              },
              {
                  "id": 57917,
                  "name": "Begun",
                  "latitude": "24.98333000",
                  "longitude": "75.00000000"
              },
              {
                  "id": 57919,
                  "name": "Behror",
                  "latitude": "27.88832000",
                  "longitude": "76.28108000"
              },
              {
                  "id": 58008,
                  "name": "Bhadasar",
                  "latitude": "28.31457000",
                  "longitude": "74.28952000"
              },
              {
                  "id": 58007,
                  "name": "Bhadra",
                  "latitude": "29.10298000",
                  "longitude": "75.17138000"
              },
              {
                  "id": 57964,
                  "name": "Bharatpur",
                  "latitude": "27.21000000",
                  "longitude": "77.29000000"
              },
              {
                  "id": 57968,
                  "name": "Bhasawar",
                  "latitude": "27.03895000",
                  "longitude": "77.04849000"
              },
              {
                  "id": 58019,
                  "name": "Bhilwara",
                  "latitude": "25.50000000",
                  "longitude": "74.75000000"
              },
              {
                  "id": 57983,
                  "name": "Bhindar",
                  "latitude": "24.50235000",
                  "longitude": "74.18551000"
              },
              {
                  "id": 58023,
                  "name": "Bhinmal",
                  "latitude": "24.99944000",
                  "longitude": "72.27141000"
              },
              {
                  "id": 57986,
                  "name": "Bhiwadi",
                  "latitude": "28.21024000",
                  "longitude": "76.86056000"
              },
              {
                  "id": 58004,
                  "name": "Bhuma",
                  "latitude": "27.78333000",
                  "longitude": "74.93333000"
              },
              {
                  "id": 58156,
                  "name": "Bikaner",
                  "latitude": "28.01762000",
                  "longitude": "73.31495000"
              },
              {
                  "id": 58051,
                  "name": "Bilara",
                  "latitude": "26.18067000",
                  "longitude": "73.70550000"
              },
              {
                  "id": 58067,
                  "name": "Bissau",
                  "latitude": "28.24737000",
                  "longitude": "75.07666000"
              },
              {
                  "id": 58083,
                  "name": "Borkhera",
                  "latitude": "25.52115000",
                  "longitude": "75.64028000"
              },
              {
                  "id": 58162,
                  "name": "Bundi",
                  "latitude": "25.43855000",
                  "longitude": "75.63735000"
              },
              {
                  "id": 58177,
                  "name": "Chaksu",
                  "latitude": "26.60510000",
                  "longitude": "75.94814000"
              },
              {
                  "id": 131513,
                  "name": "Chechat",
                  "latitude": "24.76667000",
                  "longitude": "75.88333000"
              },
              {
                  "id": 131527,
                  "name": "Chhabra",
                  "latitude": "24.66472000",
                  "longitude": "76.84379000"
              },
              {
                  "id": 131539,
                  "name": "Chhapar",
                  "latitude": "27.81900000",
                  "longitude": "74.43936000"
              },
              {
                  "id": 131536,
                  "name": "Chhoti Sadri",
                  "latitude": "24.38145000",
                  "longitude": "74.70120000"
              },
              {
                  "id": 131546,
                  "name": "Chidawa",
                  "latitude": "28.23937000",
                  "longitude": "75.64035000"
              },
              {
                  "id": 131574,
                  "name": "Chittaurgarh",
                  "latitude": "24.50000000",
                  "longitude": "74.50000000"
              },
              {
                  "id": 131614,
                  "name": "Churu",
                  "latitude": "28.30415000",
                  "longitude": "74.96718000"
              },
              {
                  "id": 131655,
                  "name": "Dariba",
                  "latitude": "24.94865000",
                  "longitude": "74.13420000"
              },
              {
                  "id": 131669,
                  "name": "Dausa",
                  "latitude": "26.88269000",
                  "longitude": "76.57053000"
              },
              {
                  "id": 131685,
                  "name": "Deoli",
                  "latitude": "25.75728000",
                  "longitude": "75.37991000"
              },
              {
                  "id": 131697,
                  "name": "Deshnoke",
                  "latitude": "27.79836000",
                  "longitude": "73.34297000"
              },
              {
                  "id": 131706,
                  "name": "Devgarh",
                  "latitude": "25.52533000",
                  "longitude": "73.90812000"
              },
              {
                  "id": 131730,
                  "name": "Dhaulpur",
                  "latitude": "26.71183000",
                  "longitude": "77.73956000"
              },
              {
                  "id": 131813,
                  "name": "Didwana",
                  "latitude": "27.40096000",
                  "longitude": "74.57537000"
              },
              {
                  "id": 131814,
                  "name": "Dig",
                  "latitude": "27.47188000",
                  "longitude": "77.32564000"
              },
              {
                  "id": 131819,
                  "name": "Dungarpur",
                  "latitude": "23.84306000",
                  "longitude": "73.71466000"
              },
              {
                  "id": 131867,
                  "name": "Fatehpur",
                  "latitude": "27.99486000",
                  "longitude": "74.95628000"
              },
              {
                  "id": 131896,
                  "name": "Galiakot",
                  "latitude": "23.51995000",
                  "longitude": "74.02028000"
              },
              {
                  "id": 131908,
                  "name": "Ganganagar",
                  "latitude": "29.92009000",
                  "longitude": "73.87496000"
              },
              {
                  "id": 131909,
                  "name": "Gangapur",
                  "latitude": "26.47249000",
                  "longitude": "76.71744000"
              },
              {
                  "id": 132003,
                  "name": "Govindgarh",
                  "latitude": "27.50423000",
                  "longitude": "76.99938000"
              },
              {
                  "id": 132018,
                  "name": "Gulabpura",
                  "latitude": "25.90448000",
                  "longitude": "74.66025000"
              },
              {
                  "id": 132066,
                  "name": "Hanumangarh",
                  "latitude": "29.11000000",
                  "longitude": "74.60000000"
              },
              {
                  "id": 132097,
                  "name": "Hindaun",
                  "latitude": "26.73411000",
                  "longitude": "77.03519000"
              },
              {
                  "id": 132199,
                  "name": "Jahazpur",
                  "latitude": "25.61994000",
                  "longitude": "75.27609000"
              },
              {
                  "id": 132201,
                  "name": "Jaipur",
                  "latitude": "27.00000000",
                  "longitude": "76.00000000"
              },
              {
                  "id": 132203,
                  "name": "Jaisalmer",
                  "latitude": "26.99382000",
                  "longitude": "71.00889000"
              },
              {
                  "id": 132208,
                  "name": "Jaitaran",
                  "latitude": "26.20446000",
                  "longitude": "73.93676000"
              },
              {
                  "id": 132217,
                  "name": "Jalor",
                  "latitude": "25.34558000",
                  "longitude": "72.61559000"
              },
              {
                  "id": 132218,
                  "name": "Jalore",
                  "latitude": "25.08000000",
                  "longitude": "72.29000000"
              },
              {
                  "id": 132278,
                  "name": "Jhalawar",
                  "latitude": "24.59633000",
                  "longitude": "76.16499000"
              },
              {
                  "id": 132276,
                  "name": "Jhalrapatan",
                  "latitude": "24.54205000",
                  "longitude": "76.17242000"
              },
              {
                  "id": 132273,
                  "name": "Jhunjhunun",
                  "latitude": "28.12559000",
                  "longitude": "75.39797000"
              },
              {
                  "id": 132284,
                  "name": "Jobner",
                  "latitude": "26.97257000",
                  "longitude": "75.38752000"
              },
              {
                  "id": 132286,
                  "name": "Jodhpur",
                  "latitude": "26.75000000",
                  "longitude": "72.75000000"
              },
              {
                  "id": 132692,
                  "name": "Kaman",
                  "latitude": "27.65791000",
                  "longitude": "77.26908000"
              },
              {
                  "id": 132709,
                  "name": "Kanor",
                  "latitude": "24.43437000",
                  "longitude": "74.26546000"
              },
              {
                  "id": 132713,
                  "name": "Kapren",
                  "latitude": "25.40529000",
                  "longitude": "76.07431000"
              },
              {
                  "id": 132395,
                  "name": "Karanpur",
                  "latitude": "29.84042000",
                  "longitude": "73.45519000"
              },
              {
                  "id": 132396,
                  "name": "Karauli",
                  "latitude": "26.58000000",
                  "longitude": "77.10000000"
              },
              {
                  "id": 132438,
                  "name": "Kekri",
                  "latitude": "25.97132000",
                  "longitude": "75.14992000"
              },
              {
                  "id": 132447,
                  "name": "Keshorai Patan",
                  "latitude": "25.29275000",
                  "longitude": "75.93948000"
              },
              {
                  "id": 132466,
                  "name": "Khandela",
                  "latitude": "27.60499000",
                  "longitude": "75.50200000"
              },
              {
                  "id": 132515,
                  "name": "Khanpur",
                  "latitude": "24.73241000",
                  "longitude": "76.39601000"
              },
              {
                  "id": 132496,
                  "name": "Khetri",
                  "latitude": "28.00069000",
                  "longitude": "75.78644000"
              },
              {
                  "id": 132530,
                  "name": "Kishangarh",
                  "latitude": "26.59006000",
                  "longitude": "74.85397000"
              },
              {
                  "id": 132593,
                  "name": "Kota",
                  "latitude": "25.17512000",
                  "longitude": "75.84412000"
              },
              {
                  "id": 132604,
                  "name": "Kotputli",
                  "latitude": "27.70207000",
                  "longitude": "76.19911000"
              },
              {
                  "id": 132627,
                  "name": "Kuchaman",
                  "latitude": "27.14745000",
                  "longitude": "74.85655000"
              },
              {
                  "id": 132625,
                  "name": "Kuchera",
                  "latitude": "26.98747000",
                  "longitude": "73.97108000"
              },
              {
                  "id": 132738,
                  "name": "Kumher",
                  "latitude": "27.31657000",
                  "longitude": "77.37079000"
              },
              {
                  "id": 132667,
                  "name": "Kushalgarh",
                  "latitude": "23.19899000",
                  "longitude": "74.45074000"
              },
              {
                  "id": 132739,
                  "name": "Lachhmangarh Sikar",
                  "latitude": "27.82294000",
                  "longitude": "75.02754000"
              },
              {
                  "id": 132788,
                  "name": "Ladnun",
                  "latitude": "27.65312000",
                  "longitude": "74.39993000"
              },
              {
                  "id": 132792,
                  "name": "Lakheri",
                  "latitude": "25.67237000",
                  "longitude": "76.17692000"
              },
              {
                  "id": 132798,
                  "name": "Lalsot",
                  "latitude": "26.55951000",
                  "longitude": "76.32915000"
              },
              {
                  "id": 132778,
                  "name": "Losal",
                  "latitude": "27.40000000",
                  "longitude": "74.91667000"
              },
              {
                  "id": 132843,
                  "name": "Mahwah",
                  "latitude": "27.04594000",
                  "longitude": "76.93152000"
              },
              {
                  "id": 132863,
                  "name": "Makrana",
                  "latitude": "27.04361000",
                  "longitude": "74.72445000"
              },
              {
                  "id": 133069,
                  "name": "Malpura",
                  "latitude": "26.28380000",
                  "longitude": "75.36458000"
              },
              {
                  "id": 133072,
                  "name": "Mandal",
                  "latitude": "25.44126000",
                  "longitude": "74.56979000"
              },
              {
                  "id": 133074,
                  "name": "Mandalgarh",
                  "latitude": "25.19407000",
                  "longitude": "75.07215000"
              },
              {
                  "id": 132900,
                  "name": "Mandawar",
                  "latitude": "27.86374000",
                  "longitude": "76.54999000"
              },
              {
                  "id": 133078,
                  "name": "Mangrol",
                  "latitude": "25.33061000",
                  "longitude": "76.50973000"
              },
              {
                  "id": 132921,
                  "name": "Manohar Thana",
                  "latitude": "24.24000000",
                  "longitude": "76.80182000"
              },
              {
                  "id": 132922,
                  "name": "Manoharpur",
                  "latitude": "27.29769000",
                  "longitude": "75.94950000"
              },
              {
                  "id": 132959,
                  "name": "Meethari Marwar",
                  "latitude": "27.57615000",
                  "longitude": "74.68661000"
              },
              {
                  "id": 132967,
                  "name": "Merta",
                  "latitude": "26.64859000",
                  "longitude": "74.03414000"
              },
              {
                  "id": 133102,
                  "name": "Mundwa",
                  "latitude": "27.06310000",
                  "longitude": "73.82304000"
              },
              {
                  "id": 133252,
                  "name": "Nadbai",
                  "latitude": "27.22288000",
                  "longitude": "77.19569000"
              },
              {
                  "id": 133112,
                  "name": "Nagar",
                  "latitude": "27.42397000",
                  "longitude": "77.09922000"
              },
              {
                  "id": 133256,
                  "name": "Nagaur",
                  "latitude": "27.20201000",
                  "longitude": "73.73394000"
              },
              {
                  "id": 133125,
                  "name": "Nainwa",
                  "latitude": "25.77145000",
                  "longitude": "75.84978000"
              },
              {
                  "id": 133153,
                  "name": "Napasar",
                  "latitude": "27.96059000",
                  "longitude": "73.55913000"
              },
              {
                  "id": 133154,
                  "name": "Naraina",
                  "latitude": "26.79069000",
                  "longitude": "75.20608000"
              },
              {
                  "id": 133180,
                  "name": "Nasirabad",
                  "latitude": "26.30473000",
                  "longitude": "74.73364000"
              },
              {
                  "id": 133280,
                  "name": "Nathdwara",
                  "latitude": "24.93805000",
                  "longitude": "73.82392000"
              },
              {
                  "id": 133282,
                  "name": "Nawa",
                  "latitude": "27.01950000",
                  "longitude": "75.00226000"
              },
              {
                  "id": 133189,
                  "name": "Nawalgarh",
                  "latitude": "27.85161000",
                  "longitude": "75.27384000"
              },
              {
                  "id": 133201,
                  "name": "Neem ka Thana",
                  "latitude": "27.73976000",
                  "longitude": "75.78652000"
              },
              {
                  "id": 133289,
                  "name": "Nimaj",
                  "latitude": "26.14995000",
                  "longitude": "74.00094000"
              },
              {
                  "id": 133288,
                  "name": "Nimbahera",
                  "latitude": "24.62166000",
                  "longitude": "74.67999000"
              },
              {
                  "id": 133224,
                  "name": "Niwai",
                  "latitude": "26.36073000",
                  "longitude": "75.91836000"
              },
              {
                  "id": 133229,
                  "name": "Nohar",
                  "latitude": "29.18292000",
                  "longitude": "74.77064000"
              },
              {
                  "id": 133231,
                  "name": "Nokha",
                  "latitude": "27.56155000",
                  "longitude": "73.47141000"
              },
              {
                  "id": 133311,
                  "name": "Padampur",
                  "latitude": "29.70885000",
                  "longitude": "73.62539000"
              },
              {
                  "id": 133529,
                  "name": "Pali",
                  "latitude": "25.77276000",
                  "longitude": "73.32335000"
              },
              {
                  "id": 133366,
                  "name": "Partapur",
                  "latitude": "23.59276000",
                  "longitude": "74.17396000"
              },
              {
                  "id": 133368,
                  "name": "Parvatsar",
                  "latitude": "26.88604000",
                  "longitude": "74.76602000"
              },
              {
                  "id": 133433,
                  "name": "Phalodi",
                  "latitude": "27.13102000",
                  "longitude": "72.36826000"
              },
              {
                  "id": 133442,
                  "name": "Phulera",
                  "latitude": "26.87401000",
                  "longitude": "75.24171000"
              },
              {
                  "id": 133448,
                  "name": "Pilani",
                  "latitude": "28.36725000",
                  "longitude": "75.60352000"
              },
              {
                  "id": 133446,
                  "name": "Pilibangan",
                  "latitude": "29.44964000",
                  "longitude": "74.10093000"
              },
              {
                  "id": 133450,
                  "name": "Pindwara",
                  "latitude": "24.79749000",
                  "longitude": "73.05505000"
              },
              {
                  "id": 133565,
                  "name": "Pipar",
                  "latitude": "26.38441000",
                  "longitude": "73.54394000"
              },
              {
                  "id": 133460,
                  "name": "Pirawa",
                  "latitude": "24.15506000",
                  "longitude": "76.02728000"
              },
              {
                  "id": 133466,
                  "name": "Pokaran",
                  "latitude": "26.92007000",
                  "longitude": "71.91631000"
              },
              {
                  "id": 133486,
                  "name": "Pratapgarh",
                  "latitude": "24.03000000",
                  "longitude": "74.78000000"
              },
              {
                  "id": 133516,
                  "name": "Pushkar",
                  "latitude": "26.49022000",
                  "longitude": "74.55211000"
              },
              {
                  "id": 133589,
                  "name": "Raipur",
                  "latitude": "26.04259000",
                  "longitude": "74.02373000"
              },
              {
                  "id": 133667,
                  "name": "Raisinghnagar",
                  "latitude": "29.53583000",
                  "longitude": "73.44917000"
              },
              {
                  "id": 133686,
                  "name": "Rajakhera",
                  "latitude": "26.89802000",
                  "longitude": "78.17100000"
              },
              {
                  "id": 133672,
                  "name": "Rajaldesar",
                  "latitude": "28.02849000",
                  "longitude": "74.47442000"
              },
              {
                  "id": 133674,
                  "name": "Rajgarh",
                  "latitude": "27.23731000",
                  "longitude": "76.62243000"
              },
              {
                  "id": 133596,
                  "name": "Rajsamand",
                  "latitude": "25.23822000",
                  "longitude": "73.93503000"
              },
              {
                  "id": 133695,
                  "name": "Ramganj Mandi",
                  "latitude": "24.64648000",
                  "longitude": "75.94325000"
              },
              {
                  "id": 133696,
                  "name": "Ramgarh",
                  "latitude": "27.25097000",
                  "longitude": "75.17893000"
              },
              {
                  "id": 133714,
                  "name": "Rani",
                  "latitude": "25.35031000",
                  "longitude": "73.30885000"
              },
              {
                  "id": 133614,
                  "name": "Ratangarh",
                  "latitude": "28.08137000",
                  "longitude": "74.61854000"
              },
              {
                  "id": 133725,
                  "name": "Rawatbhata",
                  "latitude": "24.92981000",
                  "longitude": "75.59209000"
              },
              {
                  "id": 133726,
                  "name": "Rawatsar",
                  "latitude": "29.26724000",
                  "longitude": "74.40288000"
              },
              {
                  "id": 133736,
                  "name": "Ringas",
                  "latitude": "27.36360000",
                  "longitude": "75.56838000"
              },
              {
                  "id": 134058,
                  "name": "Sadri",
                  "latitude": "25.18555000",
                  "longitude": "73.45288000"
              },
              {
                  "id": 134064,
                  "name": "Salumbar",
                  "latitude": "24.13524000",
                  "longitude": "74.04442000"
              },
              {
                  "id": 134068,
                  "name": "Sambhar",
                  "latitude": "26.90806000",
                  "longitude": "75.19137000"
              },
              {
                  "id": 133771,
                  "name": "Samdari",
                  "latitude": "25.81299000",
                  "longitude": "72.57879000"
              },
              {
                  "id": 134071,
                  "name": "Sanchor",
                  "latitude": "24.75361000",
                  "longitude": "71.77280000"
              },
              {
                  "id": 133781,
                  "name": "Sangaria",
                  "latitude": "29.79886000",
                  "longitude": "74.46683000"
              },
              {
                  "id": 133783,
                  "name": "Sangod",
                  "latitude": "24.92707000",
                  "longitude": "76.28649000"
              },
              {
                  "id": 133805,
                  "name": "Sardarshahr",
                  "latitude": "28.44062000",
                  "longitude": "74.49100000"
              },
              {
                  "id": 133810,
                  "name": "Sarwar",
                  "latitude": "26.06272000",
                  "longitude": "75.01104000"
              },
              {
                  "id": 133832,
                  "name": "Sawai Madhopur",
                  "latitude": "26.02301000",
                  "longitude": "76.34408000"
              },
              {
                  "id": 133903,
                  "name": "Shahpura",
                  "latitude": "25.62094000",
                  "longitude": "74.92487000"
              },
              {
                  "id": 133859,
                  "name": "Sheoganj",
                  "latitude": "25.13915000",
                  "longitude": "73.06784000"
              },
              {
                  "id": 134086,
                  "name": "Sikar",
                  "latitude": "27.61206000",
                  "longitude": "75.13996000"
              },
              {
                  "id": 133958,
                  "name": "Sirohi",
                  "latitude": "24.83333000",
                  "longitude": "72.75000000"
              },
              {
                  "id": 133978,
                  "name": "Siwana",
                  "latitude": "25.65154000",
                  "longitude": "72.42243000"
              },
              {
                  "id": 133983,
                  "name": "Sojat",
                  "latitude": "25.92493000",
                  "longitude": "73.66633000"
              },
              {
                  "id": 134017,
                  "name": "Sri Dungargarh",
                  "latitude": "28.09617000",
                  "longitude": "74.00868000"
              },
              {
                  "id": 134018,
                  "name": "Sri Madhopur",
                  "latitude": "27.46599000",
                  "longitude": "75.59736000"
              },
              {
                  "id": 134092,
                  "name": "Sujangarh",
                  "latitude": "27.70000000",
                  "longitude": "74.46667000"
              },
              {
                  "id": 134036,
                  "name": "Suket",
                  "latitude": "24.64609000",
                  "longitude": "76.04170000"
              },
              {
                  "id": 134046,
                  "name": "Sunel",
                  "latitude": "24.37065000",
                  "longitude": "75.95708000"
              },
              {
                  "id": 134094,
                  "name": "Surajgarh",
                  "latitude": "28.31005000",
                  "longitude": "75.73271000"
              },
              {
                  "id": 134097,
                  "name": "Suratgarh",
                  "latitude": "29.32150000",
                  "longitude": "73.89979000"
              },
              {
                  "id": 134098,
                  "name": "Takhatgarh",
                  "latitude": "25.32235000",
                  "longitude": "73.00487000"
              },
              {
                  "id": 134240,
                  "name": "Taranagar",
                  "latitude": "28.66860000",
                  "longitude": "75.03207000"
              },
              {
                  "id": 134169,
                  "name": "Tijara",
                  "latitude": "27.93411000",
                  "longitude": "76.85541000"
              },
              {
                  "id": 134204,
                  "name": "Todabhim",
                  "latitude": "26.91667000",
                  "longitude": "76.81667000"
              },
              {
                  "id": 134205,
                  "name": "Todaraisingh",
                  "latitude": "26.02401000",
                  "longitude": "75.48182000"
              },
              {
                  "id": 134208,
                  "name": "Tonk",
                  "latitude": "26.16667000",
                  "longitude": "75.58333000"
              },
              {
                  "id": 134250,
                  "name": "Udaipur",
                  "latitude": "24.33000000",
                  "longitude": "73.77000000"
              },
              {
                  "id": 134258,
                  "name": "Udpura",
                  "latitude": "24.73355000",
                  "longitude": "75.97514000"
              },
              {
                  "id": 134283,
                  "name": "Uniara",
                  "latitude": "26.15336000",
                  "longitude": "75.21523000"
              },
              {
                  "id": 134403,
                  "name": "Wer",
                  "latitude": "27.01860000",
                  "longitude": "77.17636000"
              }
          ]
      },
      {
          "id": 4034,
          "name": "Sikkim",
          "state_code": "SK",
          "latitude": "27.53297180",
          "longitude": "88.51221780",
          "type": "state",
          "cities": [
              {
                  "id": 131822,
                  "name": "East District",
                  "latitude": "27.33333000",
                  "longitude": "88.66667000"
              },
              {
                  "id": 131905,
                  "name": "Gangtok",
                  "latitude": "27.32574000",
                  "longitude": "88.61216000"
              },
              {
                  "id": 132041,
                  "name": "Gyalshing",
                  "latitude": "27.28952000",
                  "longitude": "88.25764000"
              },
              {
                  "id": 132293,
                  "name": "Jorethang",
                  "latitude": "27.10696000",
                  "longitude": "88.32332000"
              },
              {
                  "id": 132906,
                  "name": "Mangan",
                  "latitude": "27.50965000",
                  "longitude": "88.52206000"
              },
              {
                  "id": 133137,
                  "name": "Namchi",
                  "latitude": "27.16494000",
                  "longitude": "88.36380000"
              },
              {
                  "id": 133194,
                  "name": "Naya Bazar",
                  "latitude": "27.13082000",
                  "longitude": "88.23972000"
              },
              {
                  "id": 133235,
                  "name": "North District",
                  "latitude": "27.66667000",
                  "longitude": "88.50000000"
              },
              {
                  "id": 133609,
                  "name": "Rangpo",
                  "latitude": "27.17733000",
                  "longitude": "88.53358000"
              },
              {
                  "id": 133949,
                  "name": "Singtam",
                  "latitude": "27.23467000",
                  "longitude": "88.50168000"
              },
              {
                  "id": 134008,
                  "name": "South District",
                  "latitude": "27.33333000",
                  "longitude": "88.41667000"
              },
              {
                  "id": 134405,
                  "name": "West District",
                  "latitude": "27.33333000",
                  "longitude": "88.25000000"
              }
          ]
      },
      {
          "id": 4035,
          "name": "Tamil Nadu",
          "state_code": "TN",
          "latitude": "11.12712250",
          "longitude": "78.65689420",
          "type": "state",
          "cities": [
              {
                  "id": 57586,
                  "name": "Abiramam",
                  "latitude": "9.44230000",
                  "longitude": "78.43990000"
              },
              {
                  "id": 57594,
                  "name": "Adirampattinam",
                  "latitude": "10.34059000",
                  "longitude": "79.37905000"
              },
              {
                  "id": 57595,
                  "name": "Aduthurai",
                  "latitude": "11.01542000",
                  "longitude": "79.48093000"
              },
              {
                  "id": 57630,
                  "name": "Alagapuram",
                  "latitude": "11.88705000",
                  "longitude": "78.91758000"
              },
              {
                  "id": 57634,
                  "name": "Alandur",
                  "latitude": "13.00250000",
                  "longitude": "80.20611000"
              },
              {
                  "id": 57635,
                  "name": "Alanganallur",
                  "latitude": "10.04697000",
                  "longitude": "78.09033000"
              },
              {
                  "id": 57636,
                  "name": "Alangayam",
                  "latitude": "12.62235000",
                  "longitude": "78.75207000"
              },
              {
                  "id": 134455,
                  "name": "Alangudi",
                  "latitude": "10.36060000",
                  "longitude": "78.98492000"
              },
              {
                  "id": 134456,
                  "name": "Alangulam",
                  "latitude": "8.86404000",
                  "longitude": "77.49937000"
              },
              {
                  "id": 134457,
                  "name": "Alappakkam",
                  "latitude": "11.59895000",
                  "longitude": "79.71893000"
              },
              {
                  "id": 57648,
                  "name": "Alwa Tirunagari",
                  "latitude": "8.60635000",
                  "longitude": "77.93983000"
              },
              {
                  "id": 57667,
                  "name": "Ambasamudram",
                  "latitude": "8.71068000",
                  "longitude": "77.45190000"
              },
              {
                  "id": 57668,
                  "name": "Ambattur",
                  "latitude": "13.09818000",
                  "longitude": "80.16152000"
              },
              {
                  "id": 57671,
                  "name": "Ambur",
                  "latitude": "12.79163000",
                  "longitude": "78.71644000"
              },
              {
                  "id": 57682,
                  "name": "Ammapettai",
                  "latitude": "10.79476000",
                  "longitude": "79.31986000"
              },
              {
                  "id": 57694,
                  "name": "Anamalais",
                  "latitude": "10.58303000",
                  "longitude": "76.93441000"
              },
              {
                  "id": 134460,
                  "name": "Andippatti",
                  "latitude": "9.99797000",
                  "longitude": "77.62097000"
              },
              {
                  "id": 57715,
                  "name": "Annamalainagar",
                  "latitude": "11.40000000",
                  "longitude": "79.73333000"
              },
              {
                  "id": 57712,
                  "name": "Annavasal",
                  "latitude": "10.46060000",
                  "longitude": "78.70029000"
              },
              {
                  "id": 57714,
                  "name": "Annur",
                  "latitude": "11.23616000",
                  "longitude": "77.10514000"
              },
              {
                  "id": 57718,
                  "name": "Anthiyur",
                  "latitude": "11.57506000",
                  "longitude": "77.59043000"
              },
              {
                  "id": 57726,
                  "name": "Arakkonam",
                  "latitude": "13.08449000",
                  "longitude": "79.67053000"
              },
              {
                  "id": 57729,
                  "name": "Arantangi",
                  "latitude": "10.17235000",
                  "longitude": "78.99118000"
              },
              {
                  "id": 57731,
                  "name": "Arcot",
                  "latitude": "12.90569000",
                  "longitude": "79.31897000"
              },
              {
                  "id": 57732,
                  "name": "Arimalam",
                  "latitude": "10.25498000",
                  "longitude": "78.88403000"
              },
              {
                  "id": 57733,
                  "name": "Ariyalur",
                  "latitude": "11.15000000",
                  "longitude": "79.25000000"
              },
              {
                  "id": 57737,
                  "name": "Arni",
                  "latitude": "12.66771000",
                  "longitude": "79.28529000"
              },
              {
                  "id": 57743,
                  "name": "Arumbavur",
                  "latitude": "11.38096000",
                  "longitude": "78.72965000"
              },
              {
                  "id": 57744,
                  "name": "Arumuganeri",
                  "latitude": "8.56880000",
                  "longitude": "78.09091000"
              },
              {
                  "id": 57745,
                  "name": "Aruppukkottai",
                  "latitude": "9.50960000",
                  "longitude": "78.09588000"
              },
              {
                  "id": 57746,
                  "name": "Aruvankad",
                  "latitude": "11.36315000",
                  "longitude": "76.75790000"
              },
              {
                  "id": 134468,
                  "name": "Attayyampatti",
                  "latitude": "11.53272000",
                  "longitude": "78.05363000"
              },
              {
                  "id": 57763,
                  "name": "Attur",
                  "latitude": "11.59414000",
                  "longitude": "78.60143000"
              },
              {
                  "id": 57767,
                  "name": "Auroville",
                  "latitude": "12.00549000",
                  "longitude": "79.80885000"
              },
              {
                  "id": 134469,
                  "name": "Avadi",
                  "latitude": "13.11470000",
                  "longitude": "80.10981000"
              },
              {
                  "id": 57773,
                  "name": "Avinashi",
                  "latitude": "11.19297000",
                  "longitude": "77.26865000"
              },
              {
                  "id": 57775,
                  "name": "Ayakudi",
                  "latitude": "10.44992000",
                  "longitude": "77.55198000"
              },
              {
                  "id": 57776,
                  "name": "Ayyampettai",
                  "latitude": "10.90141000",
                  "longitude": "79.17984000"
              },
              {
                  "id": 57929,
                  "name": "Belur",
                  "latitude": "11.70752000",
                  "longitude": "78.41437000"
              },
              {
                  "id": 57973,
                  "name": "Bhavani",
                  "latitude": "11.44553000",
                  "longitude": "77.68215000"
              },
              {
                  "id": 58072,
                  "name": "Bodinayakkanur",
                  "latitude": "10.01171000",
                  "longitude": "77.34976000"
              },
              {
                  "id": 131515,
                  "name": "Chengam",
                  "latitude": "12.30889000",
                  "longitude": "78.79137000"
              },
              {
                  "id": 131517,
                  "name": "Chennai",
                  "latitude": "13.08784000",
                  "longitude": "80.27847000"
              },
              {
                  "id": 131518,
                  "name": "Chennimalai",
                  "latitude": "11.16378000",
                  "longitude": "77.60388000"
              },
              {
                  "id": 131522,
                  "name": "Chetput",
                  "latitude": "13.07000000",
                  "longitude": "80.24083000"
              },
              {
                  "id": 131523,
                  "name": "Chettipalaiyam",
                  "latitude": "10.91248000",
                  "longitude": "77.03699000"
              },
              {
                  "id": 131525,
                  "name": "Cheyyar",
                  "latitude": "12.66052000",
                  "longitude": "79.54308000"
              },
              {
                  "id": 131526,
                  "name": "Cheyyur",
                  "latitude": "12.34948000",
                  "longitude": "80.00304000"
              },
              {
                  "id": 131545,
                  "name": "Chidambaram",
                  "latitude": "11.39933000",
                  "longitude": "79.69144000"
              },
              {
                  "id": 131561,
                  "name": "Chingleput",
                  "latitude": "12.69184000",
                  "longitude": "79.97661000"
              },
              {
                  "id": 131562,
                  "name": "Chinna Salem",
                  "latitude": "11.63422000",
                  "longitude": "78.87412000"
              },
              {
                  "id": 131564,
                  "name": "Chinnamanur",
                  "latitude": "9.83999000",
                  "longitude": "77.38109000"
              },
              {
                  "id": 131565,
                  "name": "Chinnasekkadu",
                  "latitude": "13.16089000",
                  "longitude": "80.25727000"
              },
              {
                  "id": 131578,
                  "name": "Cholapuram",
                  "latitude": "9.35193000",
                  "longitude": "77.56839000"
              },
              {
                  "id": 131618,
                  "name": "Coimbatore",
                  "latitude": "10.80000000",
                  "longitude": "77.09000000"
              },
              {
                  "id": 131619,
                  "name": "Colachel",
                  "latitude": "8.17938000",
                  "longitude": "77.25818000"
              },
              {
                  "id": 131626,
                  "name": "Cuddalore",
                  "latitude": "11.52000000",
                  "longitude": "79.51000000"
              },
              {
                  "id": 131629,
                  "name": "Cumbum",
                  "latitude": "9.73647000",
                  "longitude": "77.28470000"
              },
              {
                  "id": 131681,
                  "name": "Denkanikota",
                  "latitude": "12.53010000",
                  "longitude": "77.78887000"
              },
              {
                  "id": 131698,
                  "name": "Desur",
                  "latitude": "12.43727000",
                  "longitude": "79.48145000"
              },
              {
                  "id": 131699,
                  "name": "Devadanappatti",
                  "latitude": "10.14673000",
                  "longitude": "77.64390000"
              },
              {
                  "id": 131700,
                  "name": "Devakottai",
                  "latitude": "9.94704000",
                  "longitude": "78.82330000"
              },
              {
                  "id": 131711,
                  "name": "Dhali",
                  "latitude": "10.51049000",
                  "longitude": "77.18806000"
              },
              {
                  "id": 131723,
                  "name": "Dharapuram",
                  "latitude": "10.73828000",
                  "longitude": "77.53223000"
              },
              {
                  "id": 131726,
                  "name": "Dharmapuri",
                  "latitude": "12.12770000",
                  "longitude": "78.15794000"
              },
              {
                  "id": 131774,
                  "name": "Dindigul",
                  "latitude": "10.40000000",
                  "longitude": "77.80000000"
              },
              {
                  "id": 131820,
                  "name": "Dusi",
                  "latitude": "12.77574000",
                  "longitude": "79.67892000"
              },
              {
                  "id": 131834,
                  "name": "Elayirampannai",
                  "latitude": "9.27033000",
                  "longitude": "77.82494000"
              },
              {
                  "id": 131833,
                  "name": "Elumalai",
                  "latitude": "9.86501000",
                  "longitude": "77.69923000"
              },
              {
                  "id": 131837,
                  "name": "Eral",
                  "latitude": "8.62584000",
                  "longitude": "78.02282000"
              },
              {
                  "id": 131839,
                  "name": "Eraniel",
                  "latitude": "8.20589000",
                  "longitude": "77.31726000"
              },
              {
                  "id": 131841,
                  "name": "Erode",
                  "latitude": "11.34000000",
                  "longitude": "77.55000000"
              },
              {
                  "id": 131843,
                  "name": "Erumaippatti",
                  "latitude": "11.14671000",
                  "longitude": "78.28996000"
              },
              {
                  "id": 131847,
                  "name": "Ettaiyapuram",
                  "latitude": "9.14405000",
                  "longitude": "77.99066000"
              },
              {
                  "id": 132045,
                  "name": "Gandhi Nagar",
                  "latitude": "13.00639000",
                  "longitude": "80.25417000"
              },
              {
                  "id": 131901,
                  "name": "Gangaikondan",
                  "latitude": "8.85785000",
                  "longitude": "77.78019000"
              },
              {
                  "id": 131902,
                  "name": "Gangavalli",
                  "latitude": "11.49828000",
                  "longitude": "78.64966000"
              },
              {
                  "id": 131957,
                  "name": "Gingee",
                  "latitude": "12.25282000",
                  "longitude": "79.41727000"
              },
              {
                  "id": 131961,
                  "name": "Gobichettipalayam",
                  "latitude": "11.45496000",
                  "longitude": "77.44220000"
              },
              {
                  "id": 132008,
                  "name": "Gudalur",
                  "latitude": "9.67826000",
                  "longitude": "77.24951000"
              },
              {
                  "id": 132011,
                  "name": "Gudiyatham",
                  "latitude": "12.94601000",
                  "longitude": "78.87377000"
              },
              {
                  "id": 132050,
                  "name": "Guduvancheri",
                  "latitude": "12.84519000",
                  "longitude": "80.06055000"
              },
              {
                  "id": 132023,
                  "name": "Gummidipundi",
                  "latitude": "13.40765000",
                  "longitude": "80.10879000"
              },
              {
                  "id": 132083,
                  "name": "Harur",
                  "latitude": "12.05267000",
                  "longitude": "78.48023000"
              },
              {
                  "id": 132125,
                  "name": "Hosur",
                  "latitude": "12.73647000",
                  "longitude": "77.83264000"
              },
              {
                  "id": 132153,
                  "name": "Idappadi",
                  "latitude": "11.58624000",
                  "longitude": "77.83891000"
              },
              {
                  "id": 132159,
                  "name": "Ilampillai",
                  "latitude": "11.60659000",
                  "longitude": "78.00676000"
              },
              {
                  "id": 132161,
                  "name": "Iluppur",
                  "latitude": "10.51347000",
                  "longitude": "78.62357000"
              },
              {
                  "id": 132169,
                  "name": "Injambakkam",
                  "latitude": "12.91620000",
                  "longitude": "80.24880000"
              },
              {
                  "id": 132172,
                  "name": "Irugur",
                  "latitude": "11.01782000",
                  "longitude": "77.06285000"
              },
              {
                  "id": 132210,
                  "name": "Jalakandapuram",
                  "latitude": "11.69779000",
                  "longitude": "77.87298000"
              },
              {
                  "id": 132225,
                  "name": "Jalarpet",
                  "latitude": "12.57025000",
                  "longitude": "78.57318000"
              },
              {
                  "id": 132256,
                  "name": "Jayamkondacholapuram",
                  "latitude": "11.21266000",
                  "longitude": "79.36369000"
              },
              {
                  "id": 132324,
                  "name": "Kadambur",
                  "latitude": "8.99739000",
                  "longitude": "77.86191000"
              },
              {
                  "id": 132326,
                  "name": "Kadayanallur",
                  "latitude": "9.07277000",
                  "longitude": "77.34152000"
              },
              {
                  "id": 132343,
                  "name": "Kalakkadu",
                  "latitude": "8.51380000",
                  "longitude": "77.54944000"
              },
              {
                  "id": 132349,
                  "name": "Kalavai",
                  "latitude": "12.77029000",
                  "longitude": "79.41999000"
              },
              {
                  "id": 132352,
                  "name": "Kallakkurichchi",
                  "latitude": "11.74040000",
                  "longitude": "78.95900000"
              },
              {
                  "id": 132353,
                  "name": "Kallidaikurichi",
                  "latitude": "8.68591000",
                  "longitude": "77.46592000"
              },
              {
                  "id": 132354,
                  "name": "Kallupatti",
                  "latitude": "9.71667000",
                  "longitude": "77.86667000"
              },
              {
                  "id": 132357,
                  "name": "Kalugumalai",
                  "latitude": "9.14941000",
                  "longitude": "77.70569000"
              },
              {
                  "id": 132367,
                  "name": "Kamuthi",
                  "latitude": "9.40732000",
                  "longitude": "78.37337000"
              },
              {
                  "id": 132368,
                  "name": "Kanadukattan",
                  "latitude": "10.17209000",
                  "longitude": "78.77935000"
              },
              {
                  "id": 132369,
                  "name": "Kancheepuram",
                  "latitude": "12.67000000",
                  "longitude": "79.99000000"
              },
              {
                  "id": 132370,
                  "name": "Kanchipuram",
                  "latitude": "12.83515000",
                  "longitude": "79.70006000"
              },
              {
                  "id": 132373,
                  "name": "Kangayam",
                  "latitude": "11.00599000",
                  "longitude": "77.56090000"
              },
              {
                  "id": 132380,
                  "name": "Kanniyakumari",
                  "latitude": "8.32000000",
                  "longitude": "77.34000000"
              },
              {
                  "id": 132714,
                  "name": "Karaikkudi",
                  "latitude": "10.06615000",
                  "longitude": "78.76784000"
              },
              {
                  "id": 132716,
                  "name": "Karamadai",
                  "latitude": "11.24058000",
                  "longitude": "76.96009000"
              },
              {
                  "id": 132393,
                  "name": "Karambakkudi",
                  "latitude": "10.45866000",
                  "longitude": "79.14101000"
              },
              {
                  "id": 132401,
                  "name": "Kariapatti",
                  "latitude": "9.67505000",
                  "longitude": "78.09992000"
              },
              {
                  "id": 132409,
                  "name": "Karumbakkam",
                  "latitude": "12.70203000",
                  "longitude": "80.09110000"
              },
              {
                  "id": 132410,
                  "name": "Karur",
                  "latitude": "10.95771000",
                  "longitude": "78.08095000"
              },
              {
                  "id": 132726,
                  "name": "Katpadi",
                  "latitude": "12.96951000",
                  "longitude": "79.14552000"
              },
              {
                  "id": 132429,
                  "name": "Kattivakkam",
                  "latitude": "13.21667000",
                  "longitude": "80.31667000"
              },
              {
                  "id": 132728,
                  "name": "Kattupputtur",
                  "latitude": "10.99385000",
                  "longitude": "78.21929000"
              },
              {
                  "id": 132730,
                  "name": "Kaveripatnam",
                  "latitude": "12.42186000",
                  "longitude": "78.21880000"
              },
              {
                  "id": 132435,
                  "name": "Kayalpattinam",
                  "latitude": "8.57143000",
                  "longitude": "78.11992000"
              },
              {
                  "id": 132436,
                  "name": "Kayattar",
                  "latitude": "8.94834000",
                  "longitude": "77.77424000"
              },
              {
                  "id": 132437,
                  "name": "Keelakarai",
                  "latitude": "9.23183000",
                  "longitude": "78.78545000"
              },
              {
                  "id": 132439,
                  "name": "Kelamangalam",
                  "latitude": "12.60307000",
                  "longitude": "77.85193000"
              },
              {
                  "id": 132732,
                  "name": "Kil Bhuvanagiri",
                  "latitude": "11.44216000",
                  "longitude": "79.64763000"
              },
              {
                  "id": 132522,
                  "name": "Kilvelur",
                  "latitude": "10.76721000",
                  "longitude": "79.74186000"
              },
              {
                  "id": 132733,
                  "name": "Kiranur",
                  "latitude": "10.56988000",
                  "longitude": "78.78682000"
              },
              {
                  "id": 132538,
                  "name": "Kodaikanal",
                  "latitude": "10.23925000",
                  "longitude": "77.48932000"
              },
              {
                  "id": 132544,
                  "name": "Kodumudi",
                  "latitude": "11.07751000",
                  "longitude": "77.88363000"
              },
              {
                  "id": 132562,
                  "name": "Kombai",
                  "latitude": "9.84745000",
                  "longitude": "77.29603000"
              },
              {
                  "id": 132568,
                  "name": "Konganapuram",
                  "latitude": "11.57105000",
                  "longitude": "77.90040000"
              },
              {
                  "id": 132571,
                  "name": "Koothanallur",
                  "latitude": "10.71990000",
                  "longitude": "79.51570000"
              },
              {
                  "id": 132576,
                  "name": "Koradachcheri",
                  "latitude": "10.77019000",
                  "longitude": "79.49158000"
              },
              {
                  "id": 132577,
                  "name": "Korampallam",
                  "latitude": "8.77506000",
                  "longitude": "78.09158000"
              },
              {
                  "id": 132594,
                  "name": "Kotagiri",
                  "latitude": "11.42072000",
                  "longitude": "76.86035000"
              },
              {
                  "id": 132607,
                  "name": "Kottaiyur",
                  "latitude": "10.10956000",
                  "longitude": "78.79560000"
              },
              {
                  "id": 132615,
                  "name": "Kovilpatti",
                  "latitude": "9.17167000",
                  "longitude": "77.86989000"
              },
              {
                  "id": 132622,
                  "name": "Krishnagiri",
                  "latitude": "12.58000000",
                  "longitude": "77.96000000"
              },
              {
                  "id": 132632,
                  "name": "Kulattur",
                  "latitude": "9.00320000",
                  "longitude": "78.19280000"
              },
              {
                  "id": 132634,
                  "name": "Kulittalai",
                  "latitude": "10.93487000",
                  "longitude": "78.41251000"
              },
              {
                  "id": 132637,
                  "name": "Kumaralingam",
                  "latitude": "10.48936000",
                  "longitude": "77.34990000"
              },
              {
                  "id": 132638,
                  "name": "Kumbakonam",
                  "latitude": "10.96209000",
                  "longitude": "79.39124000"
              },
              {
                  "id": 132651,
                  "name": "Kunnattur",
                  "latitude": "12.34782000",
                  "longitude": "78.51046000"
              },
              {
                  "id": 132659,
                  "name": "Kurinjippadi",
                  "latitude": "11.55028000",
                  "longitude": "79.59066000"
              },
              {
                  "id": 132672,
                  "name": "Kuttalam",
                  "latitude": "8.93030000",
                  "longitude": "77.26951000"
              },
              {
                  "id": 132673,
                  "name": "Kuzhithurai",
                  "latitude": "8.31792000",
                  "longitude": "77.19192000"
              },
              {
                  "id": 132754,
                  "name": "Lalgudi",
                  "latitude": "10.87419000",
                  "longitude": "78.81935000"
              },
              {
                  "id": 132807,
                  "name": "Madambakkam",
                  "latitude": "12.85250000",
                  "longitude": "80.04667000"
              },
              {
                  "id": 132818,
                  "name": "Madipakkam",
                  "latitude": "12.96226000",
                  "longitude": "80.19864000"
              },
              {
                  "id": 132819,
                  "name": "Madukkarai",
                  "latitude": "10.90568000",
                  "longitude": "76.96344000"
              },
              {
                  "id": 132820,
                  "name": "Madukkur",
                  "latitude": "10.48098000",
                  "longitude": "79.39939000"
              },
              {
                  "id": 132821,
                  "name": "Madurai",
                  "latitude": "9.89000000",
                  "longitude": "78.03000000"
              },
              {
                  "id": 132822,
                  "name": "Madurantakam",
                  "latitude": "12.51167000",
                  "longitude": "79.88485000"
              },
              {
                  "id": 132876,
                  "name": "Mallapuram",
                  "latitude": "11.98231000",
                  "longitude": "78.24796000"
              },
              {
                  "id": 132875,
                  "name": "Mallasamudram",
                  "latitude": "11.49333000",
                  "longitude": "78.03119000"
              },
              {
                  "id": 133067,
                  "name": "Mallur",
                  "latitude": "11.54424000",
                  "longitude": "78.14078000"
              },
              {
                  "id": 132880,
                  "name": "Manali",
                  "latitude": "13.16667000",
                  "longitude": "80.26667000"
              },
              {
                  "id": 132881,
                  "name": "Manalurpettai",
                  "latitude": "12.00788000",
                  "longitude": "79.09184000"
              },
              {
                  "id": 132882,
                  "name": "Manamadurai",
                  "latitude": "9.67318000",
                  "longitude": "78.47096000"
              },
              {
                  "id": 132883,
                  "name": "Manappakkam",
                  "latitude": "13.01083000",
                  "longitude": "80.16861000"
              },
              {
                  "id": 132884,
                  "name": "Manapparai",
                  "latitude": "10.60772000",
                  "longitude": "78.42582000"
              },
              {
                  "id": 132885,
                  "name": "Manavalakurichi",
                  "latitude": "8.14776000",
                  "longitude": "77.30552000"
              },
              {
                  "id": 132889,
                  "name": "Mandapam",
                  "latitude": "9.27571000",
                  "longitude": "79.12362000"
              },
              {
                  "id": 132903,
                  "name": "Mangalam",
                  "latitude": "9.76473000",
                  "longitude": "78.64037000"
              },
              {
                  "id": 132919,
                  "name": "Mannargudi",
                  "latitude": "10.66626000",
                  "longitude": "79.45064000"
              },
              {
                  "id": 132932,
                  "name": "Marakkanam",
                  "latitude": "12.19214000",
                  "longitude": "79.94193000"
              },
              {
                  "id": 133089,
                  "name": "Marandahalli",
                  "latitude": "12.38826000",
                  "longitude": "78.00316000"
              },
              {
                  "id": 132939,
                  "name": "Masinigudi",
                  "latitude": "11.56831000",
                  "longitude": "76.64087000"
              },
              {
                  "id": 133091,
                  "name": "Mattur",
                  "latitude": "11.32147000",
                  "longitude": "79.20245000"
              },
              {
                  "id": 132952,
                  "name": "Mayiladuthurai",
                  "latitude": "11.10354000",
                  "longitude": "79.65500000"
              },
              {
                  "id": 132965,
                  "name": "Melur",
                  "latitude": "10.03241000",
                  "longitude": "78.33930000"
              },
              {
                  "id": 132969,
                  "name": "Mettuppalaiyam",
                  "latitude": "11.16806000",
                  "longitude": "78.44944000"
              },
              {
                  "id": 132970,
                  "name": "Mettur",
                  "latitude": "11.78796000",
                  "longitude": "77.80080000"
              },
              {
                  "id": 133094,
                  "name": "Minjur",
                  "latitude": "13.27951000",
                  "longitude": "80.25815000"
              },
              {
                  "id": 132982,
                  "name": "Mohanur",
                  "latitude": "11.05936000",
                  "longitude": "78.13965000"
              },
              {
                  "id": 133013,
                  "name": "Mudukulattur",
                  "latitude": "9.34169000",
                  "longitude": "78.51388000"
              },
              {
                  "id": 133100,
                  "name": "Mulanur",
                  "latitude": "10.79426000",
                  "longitude": "77.71150000"
              },
              {
                  "id": 133045,
                  "name": "Musiri",
                  "latitude": "10.95299000",
                  "longitude": "78.44427000"
              },
              {
                  "id": 133049,
                  "name": "Muttupet",
                  "latitude": "10.39505000",
                  "longitude": "79.49353000"
              },
              {
                  "id": 133108,
                  "name": "Naduvattam",
                  "latitude": "11.48075000",
                  "longitude": "76.54365000"
              },
              {
                  "id": 133111,
                  "name": "Nagapattinam",
                  "latitude": "10.85000000",
                  "longitude": "79.74000000"
              },
              {
                  "id": 133257,
                  "name": "Nagercoil",
                  "latitude": "8.17899000",
                  "longitude": "77.43227000"
              },
              {
                  "id": 133264,
                  "name": "Namagiripettai",
                  "latitude": "11.45513000",
                  "longitude": "78.26818000"
              },
              {
                  "id": 133134,
                  "name": "Namakkal",
                  "latitude": "11.30000000",
                  "longitude": "78.13000000"
              },
              {
                  "id": 133135,
                  "name": "Nambiyur",
                  "latitude": "11.35811000",
                  "longitude": "77.32115000"
              },
              {
                  "id": 133136,
                  "name": "Nambutalai",
                  "latitude": "9.72766000",
                  "longitude": "79.00707000"
              },
              {
                  "id": 133140,
                  "name": "Nandambakkam",
                  "latitude": "12.97795000",
                  "longitude": "80.06781000"
              },
              {
                  "id": 133148,
                  "name": "Nangavalli",
                  "latitude": "11.76189000",
                  "longitude": "77.89093000"
              },
              {
                  "id": 133149,
                  "name": "Nangilickondan",
                  "latitude": "12.25539000",
                  "longitude": "79.47508000"
              },
              {
                  "id": 133150,
                  "name": "Nanguneri",
                  "latitude": "8.49326000",
                  "longitude": "77.65806000"
              },
              {
                  "id": 133152,
                  "name": "Nannilam",
                  "latitude": "10.87933000",
                  "longitude": "79.61062000"
              },
              {
                  "id": 133271,
                  "name": "Naravarikuppam",
                  "latitude": "13.19133000",
                  "longitude": "80.18473000"
              },
              {
                  "id": 133181,
                  "name": "Nattam",
                  "latitude": "10.22776000",
                  "longitude": "78.22969000"
              },
              {
                  "id": 133281,
                  "name": "Nattarasankottai",
                  "latitude": "9.86905000",
                  "longitude": "78.55305000"
              },
              {
                  "id": 133199,
                  "name": "Needamangalam",
                  "latitude": "10.77378000",
                  "longitude": "79.41875000"
              },
              {
                  "id": 133200,
                  "name": "Neelankarai",
                  "latitude": "12.94950000",
                  "longitude": "80.25920000"
              },
              {
                  "id": 133203,
                  "name": "Negapatam",
                  "latitude": "10.76377000",
                  "longitude": "79.84313000"
              },
              {
                  "id": 133205,
                  "name": "Nellikkuppam",
                  "latitude": "11.77554000",
                  "longitude": "79.67016000"
              },
              {
                  "id": 133216,
                  "name": "Nilakottai",
                  "latitude": "10.16500000",
                  "longitude": "77.85024000"
              },
              {
                  "id": 133218,
                  "name": "Nilgiris",
                  "latitude": "11.46000000",
                  "longitude": "76.64000000"
              },
              {
                  "id": 133296,
                  "name": "Odugattur",
                  "latitude": "12.76793000",
                  "longitude": "78.88304000"
              },
              {
                  "id": 133299,
                  "name": "Omalur",
                  "latitude": "11.74099000",
                  "longitude": "78.04559000"
              },
              {
                  "id": 133301,
                  "name": "Ooty",
                  "latitude": "11.41340000",
                  "longitude": "76.69521000"
              },
              {
                  "id": 133314,
                  "name": "Padmanabhapuram",
                  "latitude": "8.24462000",
                  "longitude": "77.32581000"
              },
              {
                  "id": 133522,
                  "name": "Palakkodu",
                  "latitude": "12.30696000",
                  "longitude": "78.07022000"
              },
              {
                  "id": 133524,
                  "name": "Palamedu",
                  "latitude": "10.10501000",
                  "longitude": "78.11336000"
              },
              {
                  "id": 133323,
                  "name": "Palani",
                  "latitude": "10.45034000",
                  "longitude": "77.52090000"
              },
              {
                  "id": 133324,
                  "name": "Palavakkam",
                  "latitude": "12.95350000",
                  "longitude": "80.25720000"
              },
              {
                  "id": 133327,
                  "name": "Palladam",
                  "latitude": "10.99175000",
                  "longitude": "77.28633000"
              },
              {
                  "id": 133328,
                  "name": "Pallappatti",
                  "latitude": "10.72057000",
                  "longitude": "77.87951000"
              },
              {
                  "id": 133329,
                  "name": "Pallattur",
                  "latitude": "10.14609000",
                  "longitude": "78.80309000"
              },
              {
                  "id": 133335,
                  "name": "Pallavaram",
                  "latitude": "12.96796000",
                  "longitude": "80.15025000"
              },
              {
                  "id": 133332,
                  "name": "Pallikondai",
                  "latitude": "12.90518000",
                  "longitude": "78.94270000"
              },
              {
                  "id": 133333,
                  "name": "Pallipattu",
                  "latitude": "13.33860000",
                  "longitude": "79.44489000"
              },
              {
                  "id": 133334,
                  "name": "Pallippatti",
                  "latitude": "11.93990000",
                  "longitude": "78.40161000"
              },
              {
                  "id": 133352,
                  "name": "Panruti",
                  "latitude": "11.77662000",
                  "longitude": "79.55269000"
              },
              {
                  "id": 133355,
                  "name": "Papanasam",
                  "latitude": "10.92687000",
                  "longitude": "79.27056000"
              },
              {
                  "id": 133545,
                  "name": "Papireddippatti",
                  "latitude": "11.91774000",
                  "longitude": "78.36865000"
              },
              {
                  "id": 133547,
                  "name": "Papparappatti",
                  "latitude": "12.22086000",
                  "longitude": "78.05920000"
              },
              {
                  "id": 133356,
                  "name": "Paramagudi",
                  "latitude": "9.54633000",
                  "longitude": "78.59070000"
              },
              {
                  "id": 133392,
                  "name": "Pattukkottai",
                  "latitude": "10.42358000",
                  "longitude": "79.31949000"
              },
              {
                  "id": 133406,
                  "name": "Pennadam",
                  "latitude": "11.40389000",
                  "longitude": "79.24156000"
              },
              {
                  "id": 133407,
                  "name": "Pennagaram",
                  "latitude": "12.13433000",
                  "longitude": "77.89525000"
              },
              {
                  "id": 133408,
                  "name": "Pennathur",
                  "latitude": "12.24681000",
                  "longitude": "79.22592000"
              },
              {
                  "id": 133411,
                  "name": "Peraiyur",
                  "latitude": "9.73579000",
                  "longitude": "77.78955000"
              },
              {
                  "id": 133412,
                  "name": "Perambalur",
                  "latitude": "11.27200000",
                  "longitude": "78.87380000"
              },
              {
                  "id": 133413,
                  "name": "Peranamallur",
                  "latitude": "12.57052000",
                  "longitude": "79.43332000"
              },
              {
                  "id": 133414,
                  "name": "Peranampattu",
                  "latitude": "12.93430000",
                  "longitude": "78.71890000"
              },
              {
                  "id": 133415,
                  "name": "Peravurani",
                  "latitude": "10.29035000",
                  "longitude": "79.20156000"
              },
              {
                  "id": 133417,
                  "name": "Periyakulam",
                  "latitude": "10.12268000",
                  "longitude": "77.54372000"
              },
              {
                  "id": 133418,
                  "name": "Periyanayakkanpalaiyam",
                  "latitude": "11.15255000",
                  "longitude": "76.95159000"
              },
              {
                  "id": 133419,
                  "name": "Periyanegamam",
                  "latitude": "10.74317000",
                  "longitude": "77.10296000"
              },
              {
                  "id": 133420,
                  "name": "Periyapatti",
                  "latitude": "10.75812000",
                  "longitude": "77.27087000"
              },
              {
                  "id": 133421,
                  "name": "Periyapattinam",
                  "latitude": "9.27263000",
                  "longitude": "78.90232000"
              },
              {
                  "id": 133425,
                  "name": "Perundurai",
                  "latitude": "11.27564000",
                  "longitude": "77.58794000"
              },
              {
                  "id": 133426,
                  "name": "Perungudi",
                  "latitude": "12.96095000",
                  "longitude": "80.24094000"
              },
              {
                  "id": 133428,
                  "name": "Perur",
                  "latitude": "10.97519000",
                  "longitude": "76.91292000"
              },
              {
                  "id": 133469,
                  "name": "Pollachi",
                  "latitude": "10.65825000",
                  "longitude": "77.00850000"
              },
              {
                  "id": 133470,
                  "name": "Polur",
                  "latitude": "12.51217000",
                  "longitude": "79.12405000"
              },
              {
                  "id": 133473,
                  "name": "Ponnamaravati",
                  "latitude": "10.28032000",
                  "longitude": "78.53601000"
              },
              {
                  "id": 133475,
                  "name": "Ponneri",
                  "latitude": "13.33868000",
                  "longitude": "80.19487000"
              },
              {
                  "id": 133479,
                  "name": "Poonamalle",
                  "latitude": "13.04888000",
                  "longitude": "80.11488000"
              },
              {
                  "id": 133483,
                  "name": "Porur",
                  "latitude": "13.03565000",
                  "longitude": "80.15821000"
              },
              {
                  "id": 133491,
                  "name": "Pudukkottai",
                  "latitude": "10.35000000",
                  "longitude": "78.90000000"
              },
              {
                  "id": 133492,
                  "name": "Puduppatti",
                  "latitude": "11.15217000",
                  "longitude": "78.21205000"
              },
              {
                  "id": 133494,
                  "name": "Pudur",
                  "latitude": "12.99801000",
                  "longitude": "79.14352000"
              },
              {
                  "id": 133493,
                  "name": "Puduvayal",
                  "latitude": "13.33015000",
                  "longitude": "80.14577000"
              },
              {
                  "id": 133498,
                  "name": "Puliyangudi",
                  "latitude": "9.17489000",
                  "longitude": "77.39799000"
              },
              {
                  "id": 133499,
                  "name": "Puliyur",
                  "latitude": "10.63375000",
                  "longitude": "78.84139000"
              },
              {
                  "id": 133500,
                  "name": "Pullambadi",
                  "latitude": "10.94110000",
                  "longitude": "78.91041000"
              },
              {
                  "id": 133507,
                  "name": "Punjai Puliyampatti",
                  "latitude": "11.35163000",
                  "longitude": "77.16671000"
              },
              {
                  "id": 133594,
                  "name": "Rajapalaiyam",
                  "latitude": "9.45296000",
                  "longitude": "77.55335000"
              },
              {
                  "id": 133599,
                  "name": "Ramanathapuram",
                  "latitude": "9.37158000",
                  "longitude": "78.83077000"
              },
              {
                  "id": 133603,
                  "name": "Rameswaram",
                  "latitude": "9.28850000",
                  "longitude": "79.31271000"
              },
              {
                  "id": 149548,
                  "name": "Ranipet",
                  "latitude": "12.95347490",
                  "longitude": "79.28159160"
              },
              {
                  "id": 133611,
                  "name": "Rasipuram",
                  "latitude": "11.46009000",
                  "longitude": "78.18635000"
              },
              {
                  "id": 133758,
                  "name": "Saint Thomas Mount",
                  "latitude": "13.00334000",
                  "longitude": "80.19614000"
              },
              {
                  "id": 133763,
                  "name": "Salem",
                  "latitude": "11.65370120",
                  "longitude": "77.99821060"
              },
              {
                  "id": 133817,
                  "name": "Sathankulam",
                  "latitude": "8.44164000",
                  "longitude": "77.91349000"
              },
              {
                  "id": 133819,
                  "name": "Sathyamangalam",
                  "latitude": "11.50526000",
                  "longitude": "77.23826000"
              },
              {
                  "id": 133823,
                  "name": "Sattur",
                  "latitude": "9.35592000",
                  "longitude": "77.92457000"
              },
              {
                  "id": 134084,
                  "name": "Sayalkudi",
                  "latitude": "9.16925000",
                  "longitude": "78.44702000"
              },
              {
                  "id": 133851,
                  "name": "Seven Pagodas",
                  "latitude": "12.62091000",
                  "longitude": "80.19331000"
              },
              {
                  "id": 133883,
                  "name": "Sholinghur",
                  "latitude": "13.11810000",
                  "longitude": "79.42025000"
              },
              {
                  "id": 133950,
                  "name": "Singanallur",
                  "latitude": "10.99898000",
                  "longitude": "77.03238000"
              },
              {
                  "id": 133945,
                  "name": "Singapperumalkovil",
                  "latitude": "12.75947000",
                  "longitude": "80.00750000"
              },
              {
                  "id": 134088,
                  "name": "Sirkazhi",
                  "latitude": "11.23725000",
                  "longitude": "79.73585000"
              },
              {
                  "id": 133968,
                  "name": "Sirumugai",
                  "latitude": "11.32137000",
                  "longitude": "77.00521000"
              },
              {
                  "id": 133974,
                  "name": "Sivaganga",
                  "latitude": "9.92762000",
                  "longitude": "78.53763000"
              },
              {
                  "id": 133975,
                  "name": "Sivagiri",
                  "latitude": "9.34461000",
                  "longitude": "77.42911000"
              },
              {
                  "id": 133976,
                  "name": "Sivakasi",
                  "latitude": "9.44999000",
                  "longitude": "77.79797000"
              },
              {
                  "id": 134026,
                  "name": "Srimushnam",
                  "latitude": "11.40118000",
                  "longitude": "79.40384000"
              },
              {
                  "id": 134030,
                  "name": "Sriperumbudur",
                  "latitude": "12.96763000",
                  "longitude": "79.94197000"
              },
              {
                  "id": 134022,
                  "name": "Srivaikuntam",
                  "latitude": "8.62931000",
                  "longitude": "77.91281000"
              },
              {
                  "id": 134023,
                  "name": "Srivilliputhur",
                  "latitude": "9.51272000",
                  "longitude": "77.63369000"
              },
              {
                  "id": 134035,
                  "name": "Suchindram",
                  "latitude": "8.15442000",
                  "longitude": "77.46704000"
              },
              {
                  "id": 134041,
                  "name": "Sulur",
                  "latitude": "11.02427000",
                  "longitude": "77.12565000"
              },
              {
                  "id": 134095,
                  "name": "Surandai",
                  "latitude": "8.97574000",
                  "longitude": "77.41923000"
              },
              {
                  "id": 134057,
                  "name": "Swamimalai",
                  "latitude": "10.95747000",
                  "longitude": "79.32931000"
              },
              {
                  "id": 134108,
                  "name": "Tambaram",
                  "latitude": "12.92460000",
                  "longitude": "80.12707000"
              },
              {
                  "id": 134111,
                  "name": "Tanjore",
                  "latitude": "10.78523000",
                  "longitude": "79.13909000"
              },
              {
                  "id": 134239,
                  "name": "Taramangalam",
                  "latitude": "11.69403000",
                  "longitude": "77.97035000"
              },
              {
                  "id": 134243,
                  "name": "Tattayyangarpettai",
                  "latitude": "11.12417000",
                  "longitude": "78.44916000"
              },
              {
                  "id": 134140,
                  "name": "Thanjavur",
                  "latitude": "10.64000000",
                  "longitude": "79.22000000"
              },
              {
                  "id": 134143,
                  "name": "Tharangambadi",
                  "latitude": "11.02764000",
                  "longitude": "79.85425000"
              },
              {
                  "id": 134146,
                  "name": "Theni",
                  "latitude": "9.85000000",
                  "longitude": "77.42000000"
              },
              {
                  "id": 134147,
                  "name": "Thenkasi",
                  "latitude": "8.96003000",
                  "longitude": "77.31525000"
              },
              {
                  "id": 134150,
                  "name": "Thirukattupalli",
                  "latitude": "10.84431000",
                  "longitude": "78.95647000"
              },
              {
                  "id": 134151,
                  "name": "Thiruthani",
                  "latitude": "13.17594000",
                  "longitude": "79.61637000"
              },
              {
                  "id": 134152,
                  "name": "Thiruvaiyaru",
                  "latitude": "10.88405000",
                  "longitude": "79.10362000"
              },
              {
                  "id": 134153,
                  "name": "Thiruvallur",
                  "latitude": "13.25000000",
                  "longitude": "80.00000000"
              },
              {
                  "id": 134155,
                  "name": "Thiruvarur",
                  "latitude": "10.77269000",
                  "longitude": "79.63680000"
              },
              {
                  "id": 134156,
                  "name": "Thiruvidaimaruthur",
                  "latitude": "10.99857000",
                  "longitude": "79.45227000"
              },
              {
                  "id": 134158,
                  "name": "Thoothukudi",
                  "latitude": "8.76735000",
                  "longitude": "78.13425000"
              },
              {
                  "id": 134172,
                  "name": "Tindivanam",
                  "latitude": "12.23400000",
                  "longitude": "79.65551000"
              },
              {
                  "id": 134174,
                  "name": "Tinnanur",
                  "latitude": "13.11448000",
                  "longitude": "80.02713000"
              },
              {
                  "id": 134178,
                  "name": "Tiruchchendur",
                  "latitude": "8.49725000",
                  "longitude": "78.11906000"
              },
              {
                  "id": 134179,
                  "name": "Tiruchengode",
                  "latitude": "11.38016000",
                  "longitude": "77.89444000"
              },
              {
                  "id": 134180,
                  "name": "Tiruchirappalli",
                  "latitude": "10.97000000",
                  "longitude": "78.65000000"
              },
              {
                  "id": 134181,
                  "name": "Tirukkoyilur",
                  "latitude": "11.96620000",
                  "longitude": "79.20259000"
              },
              {
                  "id": 134184,
                  "name": "Tirumullaivasal",
                  "latitude": "11.23996000",
                  "longitude": "79.83705000"
              },
              {
                  "id": 134185,
                  "name": "Tirunelveli",
                  "latitude": "8.72742000",
                  "longitude": "77.68380000"
              },
              {
                  "id": 134186,
                  "name": "Tirunelveli Kattabo",
                  "latitude": "8.79270000",
                  "longitude": "77.57409000"
              },
              {
                  "id": 134191,
                  "name": "Tiruppalaikudi",
                  "latitude": "9.54606000",
                  "longitude": "78.91721000"
              },
              {
                  "id": 134188,
                  "name": "Tirupparangunram",
                  "latitude": "9.88151000",
                  "longitude": "78.07306000"
              },
              {
                  "id": 134189,
                  "name": "Tiruppur",
                  "latitude": "11.11541000",
                  "longitude": "77.35456000"
              },
              {
                  "id": 134190,
                  "name": "Tiruppuvanam",
                  "latitude": "9.82564000",
                  "longitude": "78.25795000"
              },
              {
                  "id": 134193,
                  "name": "Tiruttangal",
                  "latitude": "9.48333000",
                  "longitude": "77.83333000"
              },
              {
                  "id": 134196,
                  "name": "Tiruvannamalai",
                  "latitude": "12.51000000",
                  "longitude": "79.09000000"
              },
              {
                  "id": 134198,
                  "name": "Tiruvottiyur",
                  "latitude": "13.15823000",
                  "longitude": "80.30181000"
              },
              {
                  "id": 134200,
                  "name": "Tisaiyanvilai",
                  "latitude": "8.33702000",
                  "longitude": "77.86776000"
              },
              {
                  "id": 134207,
                  "name": "Tondi",
                  "latitude": "9.74173000",
                  "longitude": "79.01774000"
              },
              {
                  "id": 134224,
                  "name": "Turaiyur",
                  "latitude": "11.14968000",
                  "longitude": "78.59870000"
              },
              {
                  "id": 134253,
                  "name": "Udangudi",
                  "latitude": "8.42918000",
                  "longitude": "78.02968000"
              },
              {
                  "id": 134259,
                  "name": "Udumalaippettai",
                  "latitude": "10.58806000",
                  "longitude": "77.24779000"
              },
              {
                  "id": 134290,
                  "name": "Uppiliyapuram",
                  "latitude": "11.26356000",
                  "longitude": "78.51390000"
              },
              {
                  "id": 134295,
                  "name": "Usilampatti",
                  "latitude": "9.96936000",
                  "longitude": "77.78621000"
              },
              {
                  "id": 134298,
                  "name": "Uttamapalaiyam",
                  "latitude": "9.80701000",
                  "longitude": "77.32718000"
              },
              {
                  "id": 134302,
                  "name": "Uttiramerur",
                  "latitude": "12.61433000",
                  "longitude": "79.75748000"
              },
              {
                  "id": 134472,
                  "name": "Uttukkuli",
                  "latitude": "11.16892000",
                  "longitude": "77.45431000"
              },
              {
                  "id": 134303,
                  "name": "V.S.K.Valasai (Dindigul-Dist.)",
                  "latitude": "10.31549000",
                  "longitude": "78.15141000"
              },
              {
                  "id": 134304,
                  "name": "Vadakku Valliyur",
                  "latitude": "8.38286000",
                  "longitude": "77.61221000"
              },
              {
                  "id": 134305,
                  "name": "Vadakku Viravanallur",
                  "latitude": "8.69786000",
                  "longitude": "77.51916000"
              },
              {
                  "id": 134306,
                  "name": "Vadamadurai",
                  "latitude": "10.44081000",
                  "longitude": "78.09784000"
              },
              {
                  "id": 134380,
                  "name": "Vadippatti",
                  "latitude": "10.08481000",
                  "longitude": "77.96113000"
              },
              {
                  "id": 134316,
                  "name": "Valangaiman",
                  "latitude": "10.89012000",
                  "longitude": "79.39322000"
              },
              {
                  "id": 134317,
                  "name": "Valavanur",
                  "latitude": "11.92094000",
                  "longitude": "79.58239000"
              },
              {
                  "id": 134319,
                  "name": "Vallam",
                  "latitude": "10.71988000",
                  "longitude": "79.05981000"
              },
              {
                  "id": 134320,
                  "name": "Valparai",
                  "latitude": "10.32691000",
                  "longitude": "76.95116000"
              },
              {
                  "id": 134323,
                  "name": "Vandalur",
                  "latitude": "12.89240000",
                  "longitude": "80.08079000"
              },
              {
                  "id": 134324,
                  "name": "Vandavasi",
                  "latitude": "12.50429000",
                  "longitude": "79.60556000"
              },
              {
                  "id": 134325,
                  "name": "Vaniyambadi",
                  "latitude": "12.68162000",
                  "longitude": "78.62014000"
              },
              {
                  "id": 134384,
                  "name": "Vasudevanallur",
                  "latitude": "9.24171000",
                  "longitude": "77.41177000"
              },
              {
                  "id": 134335,
                  "name": "Vattalkundu",
                  "latitude": "10.16069000",
                  "longitude": "77.75883000"
              },
              {
                  "id": 134337,
                  "name": "Vedaraniyam",
                  "latitude": "10.37208000",
                  "longitude": "79.85095000"
              },
              {
                  "id": 134338,
                  "name": "Vedasandur",
                  "latitude": "10.53102000",
                  "longitude": "77.95019000"
              },
              {
                  "id": 134340,
                  "name": "Velankanni",
                  "latitude": "10.68333000",
                  "longitude": "79.83333000"
              },
              {
                  "id": 134342,
                  "name": "Vellanur",
                  "latitude": "13.15804000",
                  "longitude": "80.10634000"
              },
              {
                  "id": 134341,
                  "name": "Vellore",
                  "latitude": "12.86000000",
                  "longitude": "79.03500000"
              },
              {
                  "id": 134343,
                  "name": "Velur",
                  "latitude": "11.10825000",
                  "longitude": "78.00113000"
              },
              {
                  "id": 134345,
                  "name": "Vengavasal",
                  "latitude": "12.89911000",
                  "longitude": "80.16900000"
              },
              {
                  "id": 134351,
                  "name": "Vettaikkaranpudur",
                  "latitude": "10.56207000",
                  "longitude": "76.91305000"
              },
              {
                  "id": 134352,
                  "name": "Vettavalam",
                  "latitude": "12.10769000",
                  "longitude": "79.24516000"
              },
              {
                  "id": 134355,
                  "name": "Vijayapuri",
                  "latitude": "11.24530000",
                  "longitude": "77.50066000"
              },
              {
                  "id": 134358,
                  "name": "Vikravandi",
                  "latitude": "12.03690000",
                  "longitude": "79.54595000"
              },
              {
                  "id": 134361,
                  "name": "Vilattikulam",
                  "latitude": "9.13227000",
                  "longitude": "78.16635000"
              },
              {
                  "id": 134362,
                  "name": "Villupuram",
                  "latitude": "11.99000000",
                  "longitude": "79.37000000"
              },
              {
                  "id": 134385,
                  "name": "Viraganur",
                  "latitude": "11.47613000",
                  "longitude": "78.73553000"
              },
              {
                  "id": 134366,
                  "name": "Virudhunagar",
                  "latitude": "9.45000000",
                  "longitude": "77.92000000"
              },
              {
                  "id": 134375,
                  "name": "Vriddhachalam",
                  "latitude": "11.51830000",
                  "longitude": "79.32411000"
              },
              {
                  "id": 134391,
                  "name": "Walajapet",
                  "latitude": "12.92510000",
                  "longitude": "79.36626000"
              },
              {
                  "id": 134392,
                  "name": "Wallajahbad",
                  "latitude": "12.79041000",
                  "longitude": "79.82358000"
              },
              {
                  "id": 134402,
                  "name": "Wellington",
                  "latitude": "11.36552000",
                  "longitude": "76.78442000"
              }
          ]
      },
      {
          "id": 4012,
          "name": "Telangana",
          "state_code": "TG",
          "latitude": "18.11243720",
          "longitude": "79.01929970",
          "type": "state",
          "cities": [
              {
                  "id": 134451,
                  "name": "Adilabad",
                  "latitude": "19.50000000",
                  "longitude": "78.50000000"
              },
              {
                  "id": 134454,
                  "name": "Alampur",
                  "latitude": "15.87987000",
                  "longitude": "78.13352000"
              },
              {
                  "id": 57701,
                  "name": "Andol",
                  "latitude": "17.81458000",
                  "longitude": "78.07713000"
              },
              {
                  "id": 57754,
                  "name": "Asifabad",
                  "latitude": "19.35851000",
                  "longitude": "79.28415000"
              },
              {
                  "id": 58120,
                  "name": "Balapur",
                  "latitude": "17.31018000",
                  "longitude": "78.49969000"
              },
              {
                  "id": 58133,
                  "name": "Banswada",
                  "latitude": "18.37725000",
                  "longitude": "77.88007000"
              },
              {
                  "id": 57923,
                  "name": "Bellampalli",
                  "latitude": "19.05577000",
                  "longitude": "79.49300000"
              },
              {
                  "id": 57955,
                  "name": "Bhadrachalam",
                  "latitude": "17.66846000",
                  "longitude": "80.88887000"
              },
              {
                  "id": 57952,
                  "name": "Bhadradri Kothagudem",
                  "latitude": "17.55460000",
                  "longitude": "80.61976000"
              },
              {
                  "id": 57960,
                  "name": "Bhaisa",
                  "latitude": "19.11285000",
                  "longitude": "77.96336000"
              },
              {
                  "id": 57994,
                  "name": "Bhongir",
                  "latitude": "17.51544000",
                  "longitude": "78.88563000"
              },
              {
                  "id": 58071,
                  "name": "Bodhan",
                  "latitude": "18.66208000",
                  "longitude": "77.88581000"
              },
              {
                  "id": 58194,
                  "name": "Chandur",
                  "latitude": "17.87455000",
                  "longitude": "78.10017000"
              },
              {
                  "id": 131607,
                  "name": "Chatakonda",
                  "latitude": "17.55303000",
                  "longitude": "80.64770000"
              },
              {
                  "id": 131660,
                  "name": "Dasnapur",
                  "latitude": "19.65399000",
                  "longitude": "78.51213000"
              },
              {
                  "id": 131703,
                  "name": "Devarkonda",
                  "latitude": "16.69186000",
                  "longitude": "78.92073000"
              },
              {
                  "id": 131789,
                  "name": "Dornakal",
                  "latitude": "17.44475000",
                  "longitude": "80.14905000"
              },
              {
                  "id": 131857,
                  "name": "Farrukhnagar",
                  "latitude": "17.07787000",
                  "longitude": "78.20339000"
              },
              {
                  "id": 131887,
                  "name": "Gaddi Annaram",
                  "latitude": "17.36687000",
                  "longitude": "78.52420000"
              },
              {
                  "id": 131890,
                  "name": "Gadwal",
                  "latitude": "16.23504000",
                  "longitude": "77.79556000"
              },
              {
                  "id": 131939,
                  "name": "Ghatkesar",
                  "latitude": "17.45081000",
                  "longitude": "78.68366000"
              },
              {
                  "id": 131989,
                  "name": "Gopalur",
                  "latitude": "16.61220000",
                  "longitude": "77.80728000"
              },
              {
                  "id": 132052,
                  "name": "Gudur",
                  "latitude": "17.49174000",
                  "longitude": "78.82302000"
              },
              {
                  "id": 132132,
                  "name": "Hyderabad",
                  "latitude": "17.38405000",
                  "longitude": "78.45636000"
              },
              {
                  "id": 132193,
                  "name": "Jagtial",
                  "latitude": "18.79473000",
                  "longitude": "78.91661000"
              },
              {
                  "id": 132238,
                  "name": "Jangaon",
                  "latitude": "17.72602000",
                  "longitude": "79.15236000"
              },
              {
                  "id": 132257,
                  "name": "Jayashankar Bhupalapally",
                  "latitude": "18.19678000",
                  "longitude": "79.93976000"
              },
              {
                  "id": 132290,
                  "name": "Jogulamba Gadwal",
                  "latitude": "16.23401000",
                  "longitude": "77.80564000"
              },
              {
                  "id": 132331,
                  "name": "Kagaznagar",
                  "latitude": "19.33159000",
                  "longitude": "79.46605000"
              },
              {
                  "id": 132696,
                  "name": "Kamareddi",
                  "latitude": "18.32001000",
                  "longitude": "78.34177000"
              },
              {
                  "id": 132363,
                  "name": "Kamareddy",
                  "latitude": "18.32567000",
                  "longitude": "78.33416000"
              },
              {
                  "id": 132415,
                  "name": "Karimnagar",
                  "latitude": "18.33844000",
                  "longitude": "79.22938000"
              },
              {
                  "id": 132464,
                  "name": "Khammam",
                  "latitude": "17.50000000",
                  "longitude": "80.33333000"
              },
              {
                  "id": 132546,
                  "name": "Kodar",
                  "latitude": "16.99850000",
                  "longitude": "79.96560000"
              },
              {
                  "id": 132580,
                  "name": "Koratla",
                  "latitude": "18.82154000",
                  "longitude": "78.71186000"
              },
              {
                  "id": 132599,
                  "name": "Kothapet",
                  "latitude": "19.35176000",
                  "longitude": "79.48323000"
              },
              {
                  "id": 132606,
                  "name": "Kottagudem",
                  "latitude": "17.55106000",
                  "longitude": "80.61779000"
              },
              {
                  "id": 132608,
                  "name": "Kottapalli",
                  "latitude": "18.49543000",
                  "longitude": "79.09430000"
              },
              {
                  "id": 132737,
                  "name": "Kukatpally",
                  "latitude": "17.48486000",
                  "longitude": "78.41376000"
              },
              {
                  "id": 132674,
                  "name": "Kyathampalle",
                  "latitude": "19.66781000",
                  "longitude": "78.52890000"
              },
              {
                  "id": 132751,
                  "name": "Lakshettipet",
                  "latitude": "18.86667000",
                  "longitude": "79.21667000"
              },
              {
                  "id": 132753,
                  "name": "Lal Bahadur Nagar",
                  "latitude": "17.34769000",
                  "longitude": "78.55757000"
              },
              {
                  "id": 132824,
                  "name": "Mahabubabad",
                  "latitude": "17.60040000",
                  "longitude": "80.00543000"
              },
              {
                  "id": 132828,
                  "name": "Mahbubnagar",
                  "latitude": "16.63171000",
                  "longitude": "77.75556000"
              },
              {
                  "id": 132870,
                  "name": "Malkajgiri",
                  "latitude": "17.44781000",
                  "longitude": "78.52633000"
              },
              {
                  "id": 132887,
                  "name": "Mancheral",
                  "latitude": "18.87074000",
                  "longitude": "79.42863000"
              },
              {
                  "id": 132888,
                  "name": "Mandamarri",
                  "latitude": "18.96506000",
                  "longitude": "79.47475000"
              },
              {
                  "id": 132927,
                  "name": "Manthani",
                  "latitude": "18.65087000",
                  "longitude": "79.66501000"
              },
              {
                  "id": 132928,
                  "name": "Manuguru",
                  "latitude": "17.98102000",
                  "longitude": "80.75470000"
              },
              {
                  "id": 132955,
                  "name": "Medak",
                  "latitude": "17.75000000",
                  "longitude": "78.25000000"
              },
              {
                  "id": 132956,
                  "name": "Medchal",
                  "latitude": "17.62972000",
                  "longitude": "78.48139000"
              },
              {
                  "id": 132957,
                  "name": "Medchal Malkajgiri",
                  "latitude": "17.60644000",
                  "longitude": "78.54007000"
              },
              {
                  "id": 132975,
                  "name": "Mirialguda",
                  "latitude": "16.87220000",
                  "longitude": "79.56247000"
              },
              {
                  "id": 133255,
                  "name": "Nagar Karnul",
                  "latitude": "16.48210000",
                  "longitude": "78.32471000"
              },
              {
                  "id": 133132,
                  "name": "Nalgonda",
                  "latitude": "17.16667000",
                  "longitude": "79.50000000"
              },
              {
                  "id": 133277,
                  "name": "Narayanpet",
                  "latitude": "16.74799000",
                  "longitude": "77.49540000"
              },
              {
                  "id": 133274,
                  "name": "Narsingi",
                  "latitude": "18.04468000",
                  "longitude": "78.42516000"
              },
              {
                  "id": 133278,
                  "name": "Naspur",
                  "latitude": "18.84577000",
                  "longitude": "79.46165000"
              },
              {
                  "id": 133221,
                  "name": "Nirmal",
                  "latitude": "19.09685000",
                  "longitude": "78.34407000"
              },
              {
                  "id": 133226,
                  "name": "Nizamabad",
                  "latitude": "18.75000000",
                  "longitude": "78.25000000"
              },
              {
                  "id": 133535,
                  "name": "Paloncha",
                  "latitude": "17.60184000",
                  "longitude": "80.70509000"
              },
              {
                  "id": 133338,
                  "name": "Palwancha",
                  "latitude": "17.58152000",
                  "longitude": "80.67651000"
              },
              {
                  "id": 133377,
                  "name": "Patancheru",
                  "latitude": "17.53334000",
                  "longitude": "78.26450000"
              },
              {
                  "id": 133401,
                  "name": "Peddapalli",
                  "latitude": "18.61357000",
                  "longitude": "79.37442000"
              },
              {
                  "id": 133574,
                  "name": "Quthbullapur",
                  "latitude": "17.50107000",
                  "longitude": "78.45818000"
              },
              {
                  "id": 133592,
                  "name": "Rajanna Sircilla",
                  "latitude": "18.38629000",
                  "longitude": "78.81560000"
              },
              {
                  "id": 133597,
                  "name": "Ramagundam",
                  "latitude": "18.75500000",
                  "longitude": "79.47400000"
              },
              {
                  "id": 133699,
                  "name": "Ramgundam",
                  "latitude": "18.80084000",
                  "longitude": "79.45206000"
              },
              {
                  "id": 133607,
                  "name": "Rangareddi",
                  "latitude": "17.27883000",
                  "longitude": "78.16844000"
              },
              {
                  "id": 133745,
                  "name": "Sadaseopet",
                  "latitude": "17.61925000",
                  "longitude": "77.95263000"
              },
              {
                  "id": 133787,
                  "name": "Sangareddi",
                  "latitude": "17.62477000",
                  "longitude": "78.08669000"
              },
              {
                  "id": 133818,
                  "name": "Sathupalli",
                  "latitude": "17.24968000",
                  "longitude": "80.86899000"
              },
              {
                  "id": 133834,
                  "name": "Secunderabad",
                  "latitude": "17.50427000",
                  "longitude": "78.54263000"
              },
              {
                  "id": 133849,
                  "name": "Serilingampalle",
                  "latitude": "17.49313000",
                  "longitude": "78.30196000"
              },
              {
                  "id": 133919,
                  "name": "Siddipet",
                  "latitude": "18.10483000",
                  "longitude": "78.84858000"
              },
              {
                  "id": 133951,
                  "name": "Singapur",
                  "latitude": "17.46982000",
                  "longitude": "78.12574000"
              },
              {
                  "id": 133960,
                  "name": "Sirpur",
                  "latitude": "19.47953000",
                  "longitude": "79.57558000"
              },
              {
                  "id": 133964,
                  "name": "Sirsilla",
                  "latitude": "18.38865000",
                  "longitude": "78.81048000"
              },
              {
                  "id": 134031,
                  "name": "Sriramnagar",
                  "latitude": "17.26652000",
                  "longitude": "78.25544000"
              },
              {
                  "id": 134054,
                  "name": "Suriapet",
                  "latitude": "17.14054000",
                  "longitude": "79.62045000"
              },
              {
                  "id": 134237,
                  "name": "Tandur",
                  "latitude": "17.24849000",
                  "longitude": "77.57698000"
              },
              {
                  "id": 134287,
                  "name": "Uppal Kalan",
                  "latitude": "17.40577000",
                  "longitude": "78.55911000"
              },
              {
                  "id": 134344,
                  "name": "Vemalwada",
                  "latitude": "18.46523000",
                  "longitude": "78.86894000"
              },
              {
                  "id": 134359,
                  "name": "Vikarabad",
                  "latitude": "17.33810000",
                  "longitude": "77.90441000"
              },
              {
                  "id": 134394,
                  "name": "Wanparti",
                  "latitude": "16.36738000",
                  "longitude": "78.06889000"
              },
              {
                  "id": 134395,
                  "name": "Warangal",
                  "latitude": "18.00000000",
                  "longitude": "79.83333000"
              },
              {
                  "id": 134432,
                  "name": "Yellandu",
                  "latitude": "17.59064000",
                  "longitude": "80.32146000"
              },
              {
                  "id": 134440,
                  "name": "Zahirabad",
                  "latitude": "17.68138000",
                  "longitude": "77.60743000"
              }
          ]
      },
      {
          "id": 4038,
          "name": "Tripura",
          "state_code": "TR",
          "latitude": "23.94084820",
          "longitude": "91.98815270",
          "type": "state",
          "cities": [
              {
                  "id": 57600,
                  "name": "Agartala",
                  "latitude": "23.83605000",
                  "longitude": "91.27939000"
              },
              {
                  "id": 57662,
                  "name": "Amarpur",
                  "latitude": "23.52570000",
                  "longitude": "91.65879000"
              },
              {
                  "id": 134458,
                  "name": "Ambasa",
                  "latitude": "23.93600000",
                  "longitude": "91.85436000"
              },
              {
                  "id": 57876,
                  "name": "Barjala",
                  "latitude": "23.61820000",
                  "longitude": "91.35596000"
              },
              {
                  "id": 57926,
                  "name": "Belonia",
                  "latitude": "23.25178000",
                  "longitude": "91.45407000"
              },
              {
                  "id": 131710,
                  "name": "Dhalai",
                  "latitude": "23.84307000",
                  "longitude": "91.92591000"
              },
              {
                  "id": 131725,
                  "name": "Dharmanagar",
                  "latitude": "24.36667000",
                  "longitude": "92.16667000"
              },
              {
                  "id": 131979,
                  "name": "Gomati",
                  "latitude": "23.53399000",
                  "longitude": "91.48122000"
              },
              {
                  "id": 132334,
                  "name": "Kailashahar",
                  "latitude": "24.33199000",
                  "longitude": "92.00391000"
              },
              {
                  "id": 132362,
                  "name": "Kamalpur",
                  "latitude": "24.19593000",
                  "longitude": "91.83438000"
              },
              {
                  "id": 132502,
                  "name": "Khowai",
                  "latitude": "24.07964000",
                  "longitude": "91.59972000"
              },
              {
                  "id": 133241,
                  "name": "North Tripura",
                  "latitude": "24.13050000",
                  "longitude": "92.15552000"
              },
              {
                  "id": 133721,
                  "name": "Ranir Bazar",
                  "latitude": "23.83463000",
                  "longitude": "91.36614000"
              },
              {
                  "id": 133740,
                  "name": "Sabrum",
                  "latitude": "23.00153000",
                  "longitude": "91.72427000"
              },
              {
                  "id": 133997,
                  "name": "Sonamura",
                  "latitude": "23.47547000",
                  "longitude": "91.26590000"
              },
              {
                  "id": 134011,
                  "name": "South Tripura",
                  "latitude": "23.16710000",
                  "longitude": "91.60953000"
              },
              {
                  "id": 134249,
                  "name": "Udaipur",
                  "latitude": "23.53333000",
                  "longitude": "91.48333000"
              },
              {
                  "id": 134281,
                  "name": "Unakoti",
                  "latitude": "24.32781000",
                  "longitude": "92.00377000"
              },
              {
                  "id": 134412,
                  "name": "West Tripura",
                  "latitude": "23.91667000",
                  "longitude": "91.50000000"
              }
          ]
      },
      {
          "id": 4022,
          "name": "Uttar Pradesh",
          "state_code": "UP",
          "latitude": "26.84670880",
          "longitude": "80.94615920",
          "type": "state",
          "cities": [
              {
                  "id": 57590,
                  "name": "Achhnera",
                  "latitude": "27.17826000",
                  "longitude": "77.75674000"
              },
              {
                  "id": 57597,
                  "name": "Afzalgarh",
                  "latitude": "29.39370000",
                  "longitude": "78.67393000"
              },
              {
                  "id": 57601,
                  "name": "Agra",
                  "latitude": "27.18333000",
                  "longitude": "78.01667000"
              },
              {
                  "id": 57607,
                  "name": "Ahraura",
                  "latitude": "25.01579000",
                  "longitude": "83.03294000"
              },
              {
                  "id": 147426,
                  "name": "Aidalpur",
                  "latitude": "26.13333333",
                  "longitude": "79.45000000"
              },
              {
                  "id": 147427,
                  "name": "Airwa",
                  "latitude": "26.90000000",
                  "longitude": "79.43333333"
              },
              {
                  "id": 57621,
                  "name": "Akbarpur",
                  "latitude": "26.42953000",
                  "longitude": "82.53431000"
              },
              {
                  "id": 147428,
                  "name": "Akola",
                  "latitude": "27.06547000",
                  "longitude": "77.88084000"
              },
              {
                  "id": 57653,
                  "name": "Aliganj",
                  "latitude": "27.49358000",
                  "longitude": "79.17127000"
              },
              {
                  "id": 57654,
                  "name": "Aligarh",
                  "latitude": "27.83333000",
                  "longitude": "78.16667000"
              },
              {
                  "id": 147429,
                  "name": "Allahabad",
                  "latitude": "25.45000000",
                  "longitude": "81.85000000"
              },
              {
                  "id": 57641,
                  "name": "Allahganj",
                  "latitude": "27.54540000",
                  "longitude": "79.68715000"
              },
              {
                  "id": 57692,
                  "name": "Amanpur",
                  "latitude": "27.71222000",
                  "longitude": "78.73788000"
              },
              {
                  "id": 147430,
                  "name": "Amauli",
                  "latitude": "26.01666667",
                  "longitude": "80.30000000"
              },
              {
                  "id": 57666,
                  "name": "Ambahta",
                  "latitude": "29.85706000",
                  "longitude": "77.33583000"
              },
              {
                  "id": 57669,
                  "name": "Ambedkar Nagar",
                  "latitude": "26.40544000",
                  "longitude": "82.69762000"
              },
              {
                  "id": 57677,
                  "name": "Amethi",
                  "latitude": "28.01667000",
                  "longitude": "81.05000000"
              },
              {
                  "id": 57687,
                  "name": "Amroha",
                  "latitude": "28.90314000",
                  "longitude": "78.46984000"
              },
              {
                  "id": 57696,
                  "name": "Anandnagar",
                  "latitude": "27.10062000",
                  "longitude": "83.27156000"
              },
              {
                  "id": 57720,
                  "name": "Antu",
                  "latitude": "26.05654000",
                  "longitude": "81.90267000"
              },
              {
                  "id": 57724,
                  "name": "Anupshahr",
                  "latitude": "28.35748000",
                  "longitude": "78.26914000"
              },
              {
                  "id": 57725,
                  "name": "Aonla",
                  "latitude": "28.27402000",
                  "longitude": "79.16521000"
              },
              {
                  "id": 147431,
                  "name": "Araul",
                  "latitude": "26.91700000",
                  "longitude": "80.03300000"
              },
              {
                  "id": 147432,
                  "name": "Asalatganj",
                  "latitude": "26.68333333",
                  "longitude": "79.85000000"
              },
              {
                  "id": 57755,
                  "name": "Atarra",
                  "latitude": "25.28618000",
                  "longitude": "80.57155000"
              },
              {
                  "id": 57760,
                  "name": "Atrauli",
                  "latitude": "28.02964000",
                  "longitude": "78.28571000"
              },
              {
                  "id": 57759,
                  "name": "Atraulia",
                  "latitude": "26.33330000",
                  "longitude": "82.94727000"
              },
              {
                  "id": 57764,
                  "name": "Auraiya",
                  "latitude": "26.64692000",
                  "longitude": "79.42858000"
              },
              {
                  "id": 57769,
                  "name": "Auras",
                  "latitude": "26.91414000",
                  "longitude": "80.50792000"
              },
              {
                  "id": 57616,
                  "name": "Ayodhya",
                  "latitude": "26.79909000",
                  "longitude": "82.20470000"
              },
              {
                  "id": 57777,
                  "name": "Azamgarh",
                  "latitude": "26.06832000",
                  "longitude": "83.18358000"
              },
              {
                  "id": 147433,
                  "name": "Azizpur",
                  "latitude": "26.97638889",
                  "longitude": "79.22138889"
              },
              {
                  "id": 57779,
                  "name": "Baberu",
                  "latitude": "25.54711000",
                  "longitude": "80.70443000"
              },
              {
                  "id": 57782,
                  "name": "Babina",
                  "latitude": "25.23947000",
                  "longitude": "78.47028000"
              },
              {
                  "id": 57780,
                  "name": "Babrala",
                  "latitude": "28.26419000",
                  "longitude": "78.40560000"
              },
              {
                  "id": 57781,
                  "name": "Babugarh",
                  "latitude": "28.72353000",
                  "longitude": "77.84677000"
              },
              {
                  "id": 57783,
                  "name": "Bachhraon",
                  "latitude": "28.92694000",
                  "longitude": "78.23456000"
              },
              {
                  "id": 57784,
                  "name": "Bachhrawan",
                  "latitude": "26.47090000",
                  "longitude": "81.11580000"
              },
              {
                  "id": 57801,
                  "name": "Baghpat",
                  "latitude": "28.95000000",
                  "longitude": "77.21670000"
              },
              {
                  "id": 147434,
                  "name": "Baghra",
                  "latitude": "29.46666667",
                  "longitude": "77.58333333"
              },
              {
                  "id": 58112,
                  "name": "Bah",
                  "latitude": "26.86912000",
                  "longitude": "78.59385000"
              },
              {
                  "id": 57803,
                  "name": "Baheri",
                  "latitude": "28.77416000",
                  "longitude": "79.49740000"
              },
              {
                  "id": 57804,
                  "name": "Bahjoi",
                  "latitude": "28.39502000",
                  "longitude": "78.62659000"
              },
              {
                  "id": 57805,
                  "name": "Bahraich",
                  "latitude": "27.80021000",
                  "longitude": "81.51855000"
              },
              {
                  "id": 57806,
                  "name": "Bahraigh",
                  "latitude": "27.57429000",
                  "longitude": "81.59474000"
              },
              {
                  "id": 57807,
                  "name": "Bahsuma",
                  "latitude": "29.20063000",
                  "longitude": "77.97221000"
              },
              {
                  "id": 57808,
                  "name": "Bahua",
                  "latitude": "25.83942000",
                  "longitude": "80.62255000"
              },
              {
                  "id": 58113,
                  "name": "Bajna",
                  "latitude": "27.89793000",
                  "longitude": "77.67836000"
              },
              {
                  "id": 57817,
                  "name": "Bakewar",
                  "latitude": "26.66226000",
                  "longitude": "79.17625000"
              },
              {
                  "id": 147435,
                  "name": "Baksar",
                  "latitude": "28.76666667",
                  "longitude": "78.01666667"
              },
              {
                  "id": 147436,
                  "name": "Balamau",
                  "latitude": "27.16666667",
                  "longitude": "80.35000000"
              },
              {
                  "id": 147437,
                  "name": "Baldeo",
                  "latitude": "27.41666667",
                  "longitude": "77.81666667"
              },
              {
                  "id": 57825,
                  "name": "Baldev",
                  "latitude": "27.40684000",
                  "longitude": "77.82214000"
              },
              {
                  "id": 57828,
                  "name": "Ballia",
                  "latitude": "25.83333000",
                  "longitude": "84.16667000"
              },
              {
                  "id": 57833,
                  "name": "Balrampur",
                  "latitude": "27.43449000",
                  "longitude": "82.40281000"
              },
              {
                  "id": 57840,
                  "name": "Banat",
                  "latitude": "29.46355000",
                  "longitude": "77.35478000"
              },
              {
                  "id": 57841,
                  "name": "Banbasa",
                  "latitude": "28.99132000",
                  "longitude": "80.07608000"
              },
              {
                  "id": 58124,
                  "name": "Banda",
                  "latitude": "25.50000000",
                  "longitude": "80.50000000"
              },
              {
                  "id": 58126,
                  "name": "Bangarmau",
                  "latitude": "26.89120000",
                  "longitude": "80.21149000"
              },
              {
                  "id": 58130,
                  "name": "Bansdih",
                  "latitude": "25.88377000",
                  "longitude": "84.21827000"
              },
              {
                  "id": 58131,
                  "name": "Bansgaon",
                  "latitude": "26.55032000",
                  "longitude": "83.34503000"
              },
              {
                  "id": 58132,
                  "name": "Bansi",
                  "latitude": "27.17749000",
                  "longitude": "82.93442000"
              },
              {
                  "id": 147438,
                  "name": "Banthra",
                  "latitude": "27.91720000",
                  "longitude": "79.81740000"
              },
              {
                  "id": 58138,
                  "name": "Bara Banki",
                  "latitude": "26.93864000",
                  "longitude": "81.32740000"
              },
              {
                  "id": 57892,
                  "name": "Baragaon",
                  "latitude": "25.47554000",
                  "longitude": "78.71224000"
              },
              {
                  "id": 57865,
                  "name": "Baraut",
                  "latitude": "29.10199000",
                  "longitude": "77.26334000"
              },
              {
                  "id": 57867,
                  "name": "Bareilly",
                  "latitude": "28.41667000",
                  "longitude": "79.38333000"
              },
              {
                  "id": 147439,
                  "name": "Barhalganj",
                  "latitude": "26.28333333",
                  "longitude": "83.50000000"
              },
              {
                  "id": 147440,
                  "name": "Barkhera",
                  "latitude": "28.45000000",
                  "longitude": "79.80000000"
              },
              {
                  "id": 57877,
                  "name": "Barkhera Kalan",
                  "latitude": "28.45209000",
                  "longitude": "79.80655000"
              },
              {
                  "id": 147441,
                  "name": "Barokhar",
                  "latitude": "24.91666667",
                  "longitude": "81.96666667"
              },
              {
                  "id": 57887,
                  "name": "Barsana",
                  "latitude": "27.64802000",
                  "longitude": "77.37640000"
              },
              {
                  "id": 147442,
                  "name": "Barwar (Lakhimpur Kheri)",
                  "latitude": "25.50583333",
                  "longitude": "79.13972222"
              },
              {
                  "id": 57901,
                  "name": "Basti",
                  "latitude": "26.82816000",
                  "longitude": "82.77924000"
              },
              {
                  "id": 57918,
                  "name": "Behat",
                  "latitude": "30.17180000",
                  "longitude": "77.61390000"
              },
              {
                  "id": 57920,
                  "name": "Bela",
                  "latitude": "25.92058000",
                  "longitude": "81.99629000"
              },
              {
                  "id": 147443,
                  "name": "Belthara",
                  "latitude": "26.12694444",
                  "longitude": "83.89138889"
              },
              {
                  "id": 57934,
                  "name": "Beniganj",
                  "latitude": "27.29293000",
                  "longitude": "80.44364000"
              },
              {
                  "id": 57938,
                  "name": "Beswan",
                  "latitude": "27.63792000",
                  "longitude": "77.88019000"
              },
              {
                  "id": 57944,
                  "name": "Bewar",
                  "latitude": "27.21869000",
                  "longitude": "79.29761000"
              },
              {
                  "id": 147444,
                  "name": "Bhadarsa",
                  "latitude": "26.66027778",
                  "longitude": "82.12416667"
              },
              {
                  "id": 57951,
                  "name": "Bhadohi",
                  "latitude": "25.39526000",
                  "longitude": "82.57030000"
              },
              {
                  "id": 57958,
                  "name": "Bhagwantnagar",
                  "latitude": "26.22383000",
                  "longitude": "80.75750000"
              },
              {
                  "id": 147445,
                  "name": "Bharatpura",
                  "latitude": "25.23333333",
                  "longitude": "78.96666667"
              },
              {
                  "id": 147446,
                  "name": "Bhargain",
                  "latitude": "27.61500000",
                  "longitude": "79.14416667"
              },
              {
                  "id": 57965,
                  "name": "Bharthana",
                  "latitude": "26.75231000",
                  "longitude": "79.22180000"
              },
              {
                  "id": 57966,
                  "name": "Bharwari",
                  "latitude": "25.56078000",
                  "longitude": "81.49164000"
              },
              {
                  "id": 147447,
                  "name": "Bhaupur",
                  "latitude": "26.91666667",
                  "longitude": "79.21666667"
              },
              {
                  "id": 147448,
                  "name": "Bhimtal",
                  "latitude": "29.34444444",
                  "longitude": "79.56305556"
              },
              {
                  "id": 57984,
                  "name": "Bhinga",
                  "latitude": "27.70283000",
                  "longitude": "81.93430000"
              },
              {
                  "id": 147449,
                  "name": "Bhognipur",
                  "latitude": "26.24000000",
                  "longitude": "79.80000000"
              },
              {
                  "id": 57993,
                  "name": "Bhongaon",
                  "latitude": "27.25515000",
                  "longitude": "79.18118000"
              },
              {
                  "id": 147450,
                  "name": "Bidhnu",
                  "latitude": "26.33333333",
                  "longitude": "80.28333333"
              },
              {
                  "id": 58027,
                  "name": "Bidhuna",
                  "latitude": "26.80172000",
                  "longitude": "79.50829000"
              },
              {
                  "id": 147451,
                  "name": "Bighapur",
                  "latitude": "26.35000000",
                  "longitude": "80.68000000"
              },
              {
                  "id": 58155,
                  "name": "Bighapur Khurd",
                  "latitude": "26.34734000",
                  "longitude": "80.65698000"
              },
              {
                  "id": 58035,
                  "name": "Bijnor",
                  "latitude": "29.41667000",
                  "longitude": "78.51667000"
              },
              {
                  "id": 58158,
                  "name": "Bikapur",
                  "latitude": "26.59534000",
                  "longitude": "82.13272000"
              },
              {
                  "id": 58052,
                  "name": "Bilari",
                  "latitude": "28.62146000",
                  "longitude": "78.80361000"
              },
              {
                  "id": 58040,
                  "name": "Bilariaganj",
                  "latitude": "26.19593000",
                  "longitude": "83.22690000"
              },
              {
                  "id": 58159,
                  "name": "Bilaspur",
                  "latitude": "28.88655000",
                  "longitude": "79.27030000"
              },
              {
                  "id": 58043,
                  "name": "Bilgram",
                  "latitude": "27.17509000",
                  "longitude": "80.03201000"
              },
              {
                  "id": 58044,
                  "name": "Bilhaur",
                  "latitude": "26.84345000",
                  "longitude": "80.06388000"
              },
              {
                  "id": 58048,
                  "name": "Bilsanda",
                  "latitude": "28.24341000",
                  "longitude": "79.95135000"
              },
              {
                  "id": 58049,
                  "name": "Bilsi",
                  "latitude": "28.12941000",
                  "longitude": "78.91090000"
              },
              {
                  "id": 58050,
                  "name": "Bilthra",
                  "latitude": "26.12705000",
                  "longitude": "83.89148000"
              },
              {
                  "id": 147452,
                  "name": "Binauli",
                  "latitude": "29.09416667",
                  "longitude": "77.40083333"
              },
              {
                  "id": 147453,
                  "name": "Binaur",
                  "latitude": "26.38333333",
                  "longitude": "80.16666667"
              },
              {
                  "id": 58057,
                  "name": "Bindki",
                  "latitude": "26.03613000",
                  "longitude": "80.57617000"
              },
              {
                  "id": 147454,
                  "name": "Birdpur",
                  "latitude": "27.38330000",
                  "longitude": "83.11670000"
              },
              {
                  "id": 147455,
                  "name": "Birpur",
                  "latitude": "26.53000000",
                  "longitude": "86.25000000"
              },
              {
                  "id": 58161,
                  "name": "Bisalpur",
                  "latitude": "28.29253000",
                  "longitude": "79.80472000"
              },
              {
                  "id": 147456,
                  "name": "Bisanda Buzurg",
                  "latitude": "25.41666667",
                  "longitude": "80.61666667"
              },
              {
                  "id": 58062,
                  "name": "Bisauli",
                  "latitude": "28.30772000",
                  "longitude": "78.93678000"
              },
              {
                  "id": 58063,
                  "name": "Bisenda Buzurg",
                  "latitude": "25.40350000",
                  "longitude": "80.61889000"
              },
              {
                  "id": 58066,
                  "name": "Bishunpur Urf Maharajganj",
                  "latitude": "26.25914000",
                  "longitude": "83.11643000"
              },
              {
                  "id": 58068,
                  "name": "Biswan",
                  "latitude": "27.49581000",
                  "longitude": "80.99618000"
              },
              {
                  "id": 58069,
                  "name": "Bithur",
                  "latitude": "26.60664000",
                  "longitude": "80.27098000"
              },
              {
                  "id": 58088,
                  "name": "Budaun",
                  "latitude": "28.11667000",
                  "longitude": "78.98333000"
              },
              {
                  "id": 58091,
                  "name": "Budhana",
                  "latitude": "29.28805000",
                  "longitude": "77.47534000"
              },
              {
                  "id": 58093,
                  "name": "Bulandshahr",
                  "latitude": "28.41667000",
                  "longitude": "77.83333000"
              },
              {
                  "id": 58168,
                  "name": "Captainganj",
                  "latitude": "26.92640000",
                  "longitude": "83.71334000"
              },
              {
                  "id": 58172,
                  "name": "Chail",
                  "latitude": "25.42654000",
                  "longitude": "81.63198000"
              },
              {
                  "id": 58173,
                  "name": "Chakia",
                  "latitude": "25.04891000",
                  "longitude": "83.22155000"
              },
              {
                  "id": 58186,
                  "name": "Chandauli",
                  "latitude": "25.25803000",
                  "longitude": "83.26825000"
              },
              {
                  "id": 58187,
                  "name": "Chandauli District",
                  "latitude": "25.26134000",
                  "longitude": "83.26408000"
              },
              {
                  "id": 147457,
                  "name": "Chandausi",
                  "latitude": "28.45000000",
                  "longitude": "78.77000000"
              },
              {
                  "id": 131600,
                  "name": "Chandpur",
                  "latitude": "29.13489000",
                  "longitude": "78.27187000"
              },
              {
                  "id": 58193,
                  "name": "Chanduasi",
                  "latitude": "28.45178000",
                  "longitude": "78.78277000"
              },
              {
                  "id": 58201,
                  "name": "Charkhari",
                  "latitude": "25.40304000",
                  "longitude": "79.74877000"
              },
              {
                  "id": 131509,
                  "name": "Charthawal",
                  "latitude": "29.54687000",
                  "longitude": "77.59438000"
              },
              {
                  "id": 131530,
                  "name": "Chhaprauli",
                  "latitude": "29.20989000",
                  "longitude": "77.17454000"
              },
              {
                  "id": 131531,
                  "name": "Chharra",
                  "latitude": "27.92470000",
                  "longitude": "78.40102000"
              },
              {
                  "id": 131540,
                  "name": "Chhata",
                  "latitude": "27.72374000",
                  "longitude": "77.50810000"
              },
              {
                  "id": 131533,
                  "name": "Chhibramau",
                  "latitude": "27.14872000",
                  "longitude": "79.50078000"
              },
              {
                  "id": 147458,
                  "name": "Chhitauni",
                  "latitude": "27.11666667",
                  "longitude": "83.98333333"
              },
              {
                  "id": 131537,
                  "name": "Chhutmalpur",
                  "latitude": "30.03209000",
                  "longitude": "77.75329000"
              },
              {
                  "id": 131557,
                  "name": "Chillupar",
                  "latitude": "26.28221000",
                  "longitude": "83.50640000"
              },
              {
                  "id": 131569,
                  "name": "Chirgaon",
                  "latitude": "25.57198000",
                  "longitude": "78.81432000"
              },
              {
                  "id": 131572,
                  "name": "Chitrakoot",
                  "latitude": "25.20511000",
                  "longitude": "81.08962000"
              },
              {
                  "id": 147459,
                  "name": "Chitrakoot Dham",
                  "latitude": "25.20000000",
                  "longitude": "80.90000000"
              },
              {
                  "id": 131579,
                  "name": "Chopan",
                  "latitude": "24.51954000",
                  "longitude": "83.02287000"
              },
              {
                  "id": 131584,
                  "name": "Chunar",
                  "latitude": "25.12776000",
                  "longitude": "82.88210000"
              },
              {
                  "id": 147460,
                  "name": "Churk",
                  "latitude": "24.65000000",
                  "longitude": "83.10000000"
              },
              {
                  "id": 131621,
                  "name": "Colonelganj",
                  "latitude": "27.13432000",
                  "longitude": "81.69868000"
              },
              {
                  "id": 131806,
                  "name": "Dadri",
                  "latitude": "28.55257000",
                  "longitude": "77.55403000"
              },
              {
                  "id": 131646,
                  "name": "Dalmau",
                  "latitude": "26.06477000",
                  "longitude": "81.02980000"
              },
              {
                  "id": 131653,
                  "name": "Dankaur",
                  "latitude": "28.35121000",
                  "longitude": "77.55508000"
              },
              {
                  "id": 147461,
                  "name": "Daraganj",
                  "latitude": "25.43333333",
                  "longitude": "81.88333333"
              },
              {
                  "id": 147462,
                  "name": "Daranagar",
                  "latitude": "25.68162080",
                  "longitude": "81.34975790"
              },
              {
                  "id": 131811,
                  "name": "Dasna",
                  "latitude": "28.67736000",
                  "longitude": "77.52252000"
              },
              {
                  "id": 131812,
                  "name": "Dataganj",
                  "latitude": "28.02530000",
                  "longitude": "79.40819000"
              },
              {
                  "id": 131668,
                  "name": "Daurala",
                  "latitude": "29.11344000",
                  "longitude": "77.70467000"
              },
              {
                  "id": 131674,
                  "name": "Dayal Bagh",
                  "latitude": "27.22122000",
                  "longitude": "78.01095000"
              },
              {
                  "id": 131682,
                  "name": "Deoband",
                  "latitude": "29.69505000",
                  "longitude": "77.67964000"
              },
              {
                  "id": 147463,
                  "name": "Deogarh",
                  "latitude": "24.52600000",
                  "longitude": "78.23800000"
              },
              {
                  "id": 131689,
                  "name": "Deoranian",
                  "latitude": "28.62989000",
                  "longitude": "79.47648000"
              },
              {
                  "id": 131692,
                  "name": "Deoria",
                  "latitude": "26.66667000",
                  "longitude": "83.75000000"
              },
              {
                  "id": 147464,
                  "name": "Derapur",
                  "latitude": "26.41666667",
                  "longitude": "79.80000000"
              },
              {
                  "id": 131708,
                  "name": "Dewa",
                  "latitude": "27.03621000",
                  "longitude": "81.16692000"
              },
              {
                  "id": 131750,
                  "name": "Dhampur",
                  "latitude": "29.30883000",
                  "longitude": "78.51083000"
              },
              {
                  "id": 131714,
                  "name": "Dhanaura",
                  "latitude": "28.95912000",
                  "longitude": "78.25629000"
              },
              {
                  "id": 147465,
                  "name": "Dhanghata",
                  "latitude": "26.55419444",
                  "longitude": "83.00806111"
              },
              {
                  "id": 147466,
                  "name": "Dharau",
                  "latitude": "26.38333333",
                  "longitude": "79.96666667"
              },
              {
                  "id": 131731,
                  "name": "Dhaurahra",
                  "latitude": "27.99814000",
                  "longitude": "81.08975000"
              },
              {
                  "id": 131761,
                  "name": "Dibai",
                  "latitude": "28.20849000",
                  "longitude": "78.26173000"
              },
              {
                  "id": 147467,
                  "name": "Divrasai",
                  "latitude": "26.81900000",
                  "longitude": "79.14900000"
              },
              {
                  "id": 131783,
                  "name": "Dohrighat",
                  "latitude": "26.27217000",
                  "longitude": "83.50916000"
              },
              {
                  "id": 147468,
                  "name": "Domariaganj",
                  "latitude": "27.22000000",
                  "longitude": "82.67000000"
              },
              {
                  "id": 131791,
                  "name": "Dostpur",
                  "latitude": "26.27486000",
                  "longitude": "82.47091000"
              },
              {
                  "id": 131818,
                  "name": "Dudhi",
                  "latitude": "24.21357000",
                  "longitude": "83.24067000"
              },
              {
                  "id": 131845,
                  "name": "Etah",
                  "latitude": "27.50000000",
                  "longitude": "78.75000000"
              },
              {
                  "id": 131849,
                  "name": "Etawah",
                  "latitude": "26.75000000",
                  "longitude": "79.25000000"
              },
              {
                  "id": 147469,
                  "name": "Etmadpur",
                  "latitude": "27.23971944",
                  "longitude": "78.20000000"
              },
              {
                  "id": 131851,
                  "name": "Faizabad",
                  "latitude": "26.75000000",
                  "longitude": "82.00000000"
              },
              {
                  "id": 131852,
                  "name": "Farah",
                  "latitude": "27.32081000",
                  "longitude": "77.76185000"
              },
              {
                  "id": 131860,
                  "name": "Faridnagar",
                  "latitude": "28.76923000",
                  "longitude": "77.62934000"
              },
              {
                  "id": 131861,
                  "name": "Faridpur",
                  "latitude": "28.20997000",
                  "longitude": "79.54149000"
              },
              {
                  "id": 131858,
                  "name": "Farrukhabad",
                  "latitude": "27.50000000",
                  "longitude": "79.50000000"
              },
              {
                  "id": 131871,
                  "name": "Fatehabad",
                  "latitude": "27.02645000",
                  "longitude": "78.30270000"
              },
              {
                  "id": 131863,
                  "name": "Fatehganj West",
                  "latitude": "28.46620000",
                  "longitude": "79.30657000"
              },
              {
                  "id": 131864,
                  "name": "Fatehgarh",
                  "latitude": "27.36409000",
                  "longitude": "79.63111000"
              },
              {
                  "id": 131868,
                  "name": "Fatehpur",
                  "latitude": "25.75000000",
                  "longitude": "80.75000000"
              },
              {
                  "id": 147470,
                  "name": "Fatehpur (Barabanki)",
                  "latitude": "27.17000000",
                  "longitude": "81.22000000"
              },
              {
                  "id": 131869,
                  "name": "Fatehpur Chaurasi",
                  "latitude": "26.78925000",
                  "longitude": "80.26547000"
              },
              {
                  "id": 131870,
                  "name": "Fatehpur Sikri",
                  "latitude": "27.09370000",
                  "longitude": "77.66003000"
              },
              {
                  "id": 131876,
                  "name": "Firozabad",
                  "latitude": "27.20072000",
                  "longitude": "78.42867000"
              },
              {
                  "id": 131880,
                  "name": "Fyzabad",
                  "latitude": "26.77549000",
                  "longitude": "82.15018000"
              },
              {
                  "id": 147471,
                  "name": "Gahlon",
                  "latitude": "26.53333333",
                  "longitude": "79.96666667"
              },
              {
                  "id": 147472,
                  "name": "Gahmar",
                  "latitude": "25.49700000",
                  "longitude": "83.82200000"
              },
              {
                  "id": 147473,
                  "name": "Gaini",
                  "latitude": "28.21000000",
                  "longitude": "79.16000000"
              },
              {
                  "id": 131894,
                  "name": "Gajraula",
                  "latitude": "28.84570000",
                  "longitude": "78.23960000"
              },
              {
                  "id": 131903,
                  "name": "Gangoh",
                  "latitude": "29.78004000",
                  "longitude": "77.26346000"
              },
              {
                  "id": 147474,
                  "name": "Ganj Dundawara",
                  "latitude": "27.73277778",
                  "longitude": "78.94166667"
              },
              {
                  "id": 131912,
                  "name": "Ganj Dundwara",
                  "latitude": "27.73308000",
                  "longitude": "78.94119000"
              },
              {
                  "id": 131913,
                  "name": "Ganj Muradabad",
                  "latitude": "26.95733000",
                  "longitude": "80.18400000"
              },
              {
                  "id": 131916,
                  "name": "Garautha",
                  "latitude": "25.57190000",
                  "longitude": "79.29764000"
              },
              {
                  "id": 131919,
                  "name": "Garhi Pukhta",
                  "latitude": "29.54980000",
                  "longitude": "77.30881000"
              },
              {
                  "id": 131920,
                  "name": "Garhmuktesar",
                  "latitude": "28.78732000",
                  "longitude": "78.10214000"
              },
              {
                  "id": 147475,
                  "name": "Garhwa",
                  "latitude": "24.18000000",
                  "longitude": "83.82000000"
              },
              {
                  "id": 147476,
                  "name": "Gauriganj",
                  "latitude": "26.20600000",
                  "longitude": "81.69000000"
              },
              {
                  "id": 131929,
                  "name": "Gautam Buddha Nagar",
                  "latitude": "28.35898000",
                  "longitude": "77.55076000"
              },
              {
                  "id": 131931,
                  "name": "Gawan",
                  "latitude": "28.41969000",
                  "longitude": "78.35186000"
              },
              {
                  "id": 131950,
                  "name": "Ghatampur",
                  "latitude": "26.15272000",
                  "longitude": "80.16803000"
              },
              {
                  "id": 131953,
                  "name": "Ghaziabad",
                  "latitude": "28.66535000",
                  "longitude": "77.43915000"
              },
              {
                  "id": 131940,
                  "name": "Ghazipur",
                  "latitude": "25.58333000",
                  "longitude": "83.58526000"
              },
              {
                  "id": 131941,
                  "name": "Ghiror",
                  "latitude": "27.18912000",
                  "longitude": "78.79312000"
              },
              {
                  "id": 131945,
                  "name": "Ghorawal",
                  "latitude": "24.75459000",
                  "longitude": "82.77965000"
              },
              {
                  "id": 131946,
                  "name": "Ghosi",
                  "latitude": "26.10587000",
                  "longitude": "83.53930000"
              },
              {
                  "id": 131969,
                  "name": "Gohand",
                  "latitude": "25.69871000",
                  "longitude": "79.54567000"
              },
              {
                  "id": 131973,
                  "name": "Gokul",
                  "latitude": "27.43926000",
                  "longitude": "77.72019000"
              },
              {
                  "id": 131974,
                  "name": "Gola Bazar",
                  "latitude": "26.34460000",
                  "longitude": "83.35303000"
              },
              {
                  "id": 131975,
                  "name": "Gola Gokarannath",
                  "latitude": "28.07837000",
                  "longitude": "80.47054000"
              },
              {
                  "id": 131981,
                  "name": "Gonda",
                  "latitude": "27.18581000",
                  "longitude": "81.96693000"
              },
              {
                  "id": 131990,
                  "name": "Gopamau",
                  "latitude": "27.53468000",
                  "longitude": "80.28507000"
              },
              {
                  "id": 131992,
                  "name": "Gorakhpur",
                  "latitude": "26.91667000",
                  "longitude": "83.25000000"
              },
              {
                  "id": 147478,
                  "name": "Gosainganj",
                  "latitude": "26.77000000",
                  "longitude": "81.12000000"
              },
              {
                  "id": 131998,
                  "name": "Goshainganj",
                  "latitude": "26.57115000",
                  "longitude": "82.38091000"
              },
              {
                  "id": 132000,
                  "name": "Govardhan",
                  "latitude": "27.49658000",
                  "longitude": "77.46263000"
              },
              {
                  "id": 132005,
                  "name": "Greater Noida",
                  "latitude": "28.49615000",
                  "longitude": "77.53601000"
              },
              {
                  "id": 132019,
                  "name": "Gulaothi",
                  "latitude": "28.58938000",
                  "longitude": "77.79318000"
              },
              {
                  "id": 132026,
                  "name": "Gunnaur",
                  "latitude": "28.23995000",
                  "longitude": "78.43994000"
              },
              {
                  "id": 132035,
                  "name": "Gursahaiganj",
                  "latitude": "27.11518000",
                  "longitude": "79.73174000"
              },
              {
                  "id": 132036,
                  "name": "Gursarai",
                  "latitude": "25.61677000",
                  "longitude": "79.18053000"
              },
              {
                  "id": 132042,
                  "name": "Gyanpur",
                  "latitude": "25.33268000",
                  "longitude": "82.46637000"
              },
              {
                  "id": 132057,
                  "name": "Haldaur",
                  "latitude": "29.28988000",
                  "longitude": "78.28437000"
              },
              {
                  "id": 132062,
                  "name": "Hamirpur",
                  "latitude": "25.75000000",
                  "longitude": "80.00000000"
              },
              {
                  "id": 132064,
                  "name": "Handia",
                  "latitude": "25.36379000",
                  "longitude": "82.18655000"
              },
              {
                  "id": 132142,
                  "name": "Hapur",
                  "latitude": "28.72985000",
                  "longitude": "77.78068000"
              },
              {
                  "id": 147479,
                  "name": "Haraipur",
                  "latitude": "26.90000000",
                  "longitude": "79.70000000"
              },
              {
                  "id": 132068,
                  "name": "Haraiya",
                  "latitude": "26.79477000",
                  "longitude": "82.46436000"
              },
              {
                  "id": 147480,
                  "name": "Harchandpur",
                  "latitude": "26.36000000",
                  "longitude": "81.17000000"
              },
              {
                  "id": 132072,
                  "name": "Hardoi",
                  "latitude": "27.41667000",
                  "longitude": "80.25000000"
              },
              {
                  "id": 132074,
                  "name": "Harduaganj",
                  "latitude": "27.94361000",
                  "longitude": "78.15789000"
              },
              {
                  "id": 132085,
                  "name": "Hasanpur",
                  "latitude": "28.72249000",
                  "longitude": "78.28436000"
              },
              {
                  "id": 132087,
                  "name": "Hastinapur",
                  "latitude": "29.16042000",
                  "longitude": "78.00762000"
              },
              {
                  "id": 132146,
                  "name": "Hata",
                  "latitude": "26.74120000",
                  "longitude": "83.74526000"
              },
              {
                  "id": 147481,
                  "name": "Hata (India)",
                  "latitude": "26.75000000",
                  "longitude": "83.74000000"
              },
              {
                  "id": 132144,
                  "name": "Hathras",
                  "latitude": "27.59551000",
                  "longitude": "78.05201000"
              },
              {
                  "id": 147482,
                  "name": "Hulas",
                  "latitude": "29.69027778",
                  "longitude": "77.36027778"
              },
              {
                  "id": 147483,
                  "name": "Ibrahimpur",
                  "latitude": "26.01027778",
                  "longitude": "83.16861111"
              },
              {
                  "id": 132156,
                  "name": "Iglas",
                  "latitude": "27.71100000",
                  "longitude": "77.93967000"
              },
              {
                  "id": 132157,
                  "name": "Ikauna",
                  "latitude": "27.53097000",
                  "longitude": "81.96917000"
              },
              {
                  "id": 132164,
                  "name": "Indergarh",
                  "latitude": "26.93521000",
                  "longitude": "79.67120000"
              },
              {
                  "id": 147484,
                  "name": "Indragarh",
                  "latitude": "29.91299444",
                  "longitude": "74.32284167"
              },
              {
                  "id": 132173,
                  "name": "Islamnagar",
                  "latitude": "28.32896000",
                  "longitude": "78.72524000"
              },
              {
                  "id": 147485,
                  "name": "Islamnagar (Badaun)",
                  "latitude": "28.33000000",
                  "longitude": "78.72000000"
              },
              {
                  "id": 132176,
                  "name": "Itaunja",
                  "latitude": "27.08347000",
                  "longitude": "80.89672000"
              },
              {
                  "id": 132177,
                  "name": "Itimadpur",
                  "latitude": "27.23541000",
                  "longitude": "78.19829000"
              },
              {
                  "id": 132187,
                  "name": "Jagdishpur",
                  "latitude": "26.74967000",
                  "longitude": "80.54510000"
              },
              {
                  "id": 132191,
                  "name": "Jagnair",
                  "latitude": "26.86360000",
                  "longitude": "77.60231000"
              },
              {
                  "id": 132197,
                  "name": "Jahanabad",
                  "latitude": "28.63025000",
                  "longitude": "79.71818000"
              },
              {
                  "id": 147486,
                  "name": "Jahanabad (Pilibhit)",
                  "latitude": "28.63330000",
                  "longitude": "79.80000000"
              },
              {
                  "id": 132196,
                  "name": "Jahangirabad",
                  "latitude": "28.40549000",
                  "longitude": "78.10588000"
              },
              {
                  "id": 132195,
                  "name": "Jahangirpur",
                  "latitude": "28.17919000",
                  "longitude": "77.70501000"
              },
              {
                  "id": 132200,
                  "name": "Jainpur",
                  "latitude": "26.15389000",
                  "longitude": "83.33505000"
              },
              {
                  "id": 132202,
                  "name": "Jais",
                  "latitude": "26.26490000",
                  "longitude": "81.54855000"
              },
              {
                  "id": 132221,
                  "name": "Jalalabad",
                  "latitude": "29.61853000",
                  "longitude": "77.43908000"
              },
              {
                  "id": 132224,
                  "name": "Jalali",
                  "latitude": "27.86680000",
                  "longitude": "78.25267000"
              },
              {
                  "id": 132220,
                  "name": "Jalalpur",
                  "latitude": "26.31162000",
                  "longitude": "82.73859000"
              },
              {
                  "id": 132306,
                  "name": "Jalaun",
                  "latitude": "26.00000000",
                  "longitude": "79.50000000"
              },
              {
                  "id": 132212,
                  "name": "Jalesar",
                  "latitude": "27.47315000",
                  "longitude": "78.30310000"
              },
              {
                  "id": 147487,
                  "name": "Janghai",
                  "latitude": "25.55000000",
                  "longitude": "82.31666667"
              },
              {
                  "id": 132313,
                  "name": "Jansath",
                  "latitude": "29.32502000",
                  "longitude": "77.85044000"
              },
              {
                  "id": 147488,
                  "name": "Jarwa",
                  "latitude": "27.65000000",
                  "longitude": "82.51666667"
              },
              {
                  "id": 132242,
                  "name": "Jarwal",
                  "latitude": "27.16290000",
                  "longitude": "81.54179000"
              },
              {
                  "id": 132248,
                  "name": "Jasrana",
                  "latitude": "27.23587000",
                  "longitude": "78.65244000"
              },
              {
                  "id": 132249,
                  "name": "Jaswantnagar",
                  "latitude": "26.88271000",
                  "longitude": "78.90256000"
              },
              {
                  "id": 132252,
                  "name": "Jaunpur",
                  "latitude": "25.75000000",
                  "longitude": "82.75000000"
              },
              {
                  "id": 132264,
                  "name": "Jewar",
                  "latitude": "28.12200000",
                  "longitude": "77.55734000"
              },
              {
                  "id": 147489,
                  "name": "Jhajhar",
                  "latitude": "27.86000000",
                  "longitude": "75.28000000"
              },
              {
                  "id": 132277,
                  "name": "Jhalu",
                  "latitude": "29.33609000",
                  "longitude": "78.22608000"
              },
              {
                  "id": 132279,
                  "name": "Jhansi",
                  "latitude": "25.50000000",
                  "longitude": "78.50000000"
              },
              {
                  "id": 132280,
                  "name": "Jhinjhak",
                  "latitude": "26.56093000",
                  "longitude": "79.73423000"
              },
              {
                  "id": 132271,
                  "name": "Jhinjhana",
                  "latitude": "29.52118000",
                  "longitude": "77.22470000"
              },
              {
                  "id": 132281,
                  "name": "Jhusi",
                  "latitude": "25.43745000",
                  "longitude": "81.90550000"
              },
              {
                  "id": 147490,
                  "name": "Jiyanpur",
                  "latitude": "26.15000000",
                  "longitude": "83.33000000"
              },
              {
                  "id": 132303,
                  "name": "Jyotiba Phule Nagar",
                  "latitude": "28.77160000",
                  "longitude": "78.33871000"
              },
              {
                  "id": 132320,
                  "name": "Kabrai",
                  "latitude": "25.40281000",
                  "longitude": "79.99970000"
              },
              {
                  "id": 132322,
                  "name": "Kachhwa",
                  "latitude": "25.20615000",
                  "longitude": "82.71442000"
              },
              {
                  "id": 132325,
                  "name": "Kadaura",
                  "latitude": "25.98537000",
                  "longitude": "79.83842000"
              },
              {
                  "id": 132676,
                  "name": "Kadipur",
                  "latitude": "26.16779000",
                  "longitude": "82.37028000"
              },
              {
                  "id": 147491,
                  "name": "Kagarol",
                  "latitude": "27.01666667",
                  "longitude": "77.85000000"
              },
              {
                  "id": 132335,
                  "name": "Kaimganj",
                  "latitude": "27.55441000",
                  "longitude": "79.33525000"
              },
              {
                  "id": 132339,
                  "name": "Kairana",
                  "latitude": "29.39541000",
                  "longitude": "77.20540000"
              },
              {
                  "id": 132679,
                  "name": "Kakori",
                  "latitude": "26.86800000",
                  "longitude": "80.78570000"
              },
              {
                  "id": 132342,
                  "name": "Kakrala",
                  "latitude": "27.89269000",
                  "longitude": "79.19450000"
              },
              {
                  "id": 132690,
                  "name": "Kalinagar",
                  "latitude": "28.62019000",
                  "longitude": "80.08152000"
              },
              {
                  "id": 132683,
                  "name": "Kalpi",
                  "latitude": "26.11667000",
                  "longitude": "79.73333000"
              },
              {
                  "id": 147492,
                  "name": "Kalyanpur",
                  "latitude": "26.51912222",
                  "longitude": "80.24980556"
              },
              {
                  "id": 132361,
                  "name": "Kamalganj",
                  "latitude": "27.26181000",
                  "longitude": "79.63134000"
              },
              {
                  "id": 132364,
                  "name": "Kampil",
                  "latitude": "27.61268000",
                  "longitude": "79.27687000"
              },
              {
                  "id": 132697,
                  "name": "Kandhla",
                  "latitude": "29.32104000",
                  "longitude": "77.27101000"
              },
              {
                  "id": 132378,
                  "name": "Kannauj",
                  "latitude": "27.01770000",
                  "longitude": "79.67846000"
              },
              {
                  "id": 132384,
                  "name": "Kanpur",
                  "latitude": "26.46523000",
                  "longitude": "80.34975000"
              },
              {
                  "id": 132385,
                  "name": "Kanpur Dehat",
                  "latitude": "26.41506000",
                  "longitude": "79.98957000"
              },
              {
                  "id": 132711,
                  "name": "Kant",
                  "latitude": "27.81049000",
                  "longitude": "79.79185000"
              },
              {
                  "id": 132712,
                  "name": "Kanth",
                  "latitude": "29.05939000",
                  "longitude": "78.62951000"
              },
              {
                  "id": 147493,
                  "name": "Kaptanganj",
                  "latitude": "26.93000000",
                  "longitude": "83.72000000"
              },
              {
                  "id": 147494,
                  "name": "Kara",
                  "latitude": "25.70000000",
                  "longitude": "81.35000000"
              },
              {
                  "id": 132413,
                  "name": "Karari",
                  "latitude": "25.45241000",
                  "longitude": "81.42675000"
              },
              {
                  "id": 147495,
                  "name": "Karbigwan",
                  "latitude": "26.20000000",
                  "longitude": "80.50000000"
              },
              {
                  "id": 147496,
                  "name": "Karchana",
                  "latitude": "25.28000000",
                  "longitude": "81.93000000"
              },
              {
                  "id": 132400,
                  "name": "Karhal",
                  "latitude": "27.00089000",
                  "longitude": "78.93935000"
              },
              {
                  "id": 132722,
                  "name": "Kasganj",
                  "latitude": "27.80882000",
                  "longitude": "78.64579000"
              },
              {
                  "id": 132426,
                  "name": "Katra",
                  "latitude": "27.50871000",
                  "longitude": "82.02636000"
              },
              {
                  "id": 147497,
                  "name": "Kausani",
                  "latitude": "29.84305556",
                  "longitude": "79.60333333"
              },
              {
                  "id": 132430,
                  "name": "Kaushambi District",
                  "latitude": "25.53074000",
                  "longitude": "81.37729000"
              },
              {
                  "id": 132440,
                  "name": "Kemri",
                  "latitude": "28.80673000",
                  "longitude": "79.20480000"
              },
              {
                  "id": 132449,
                  "name": "Khada",
                  "latitude": "27.18333000",
                  "longitude": "83.88333000"
              },
              {
                  "id": 132512,
                  "name": "Khaga",
                  "latitude": "25.77215000",
                  "longitude": "81.10393000"
              },
              {
                  "id": 147498,
                  "name": "Khailar",
                  "latitude": "25.35000000",
                  "longitude": "78.53000000"
              },
              {
                  "id": 132454,
                  "name": "Khair",
                  "latitude": "27.94195000",
                  "longitude": "77.84243000"
              },
              {
                  "id": 132455,
                  "name": "Khairabad",
                  "latitude": "27.52698000",
                  "longitude": "80.75461000"
              },
              {
                  "id": 132459,
                  "name": "Khalilabad",
                  "latitude": "26.77268000",
                  "longitude": "83.07179000"
              },
              {
                  "id": 132514,
                  "name": "Khanpur",
                  "latitude": "28.53446000",
                  "longitude": "78.06546000"
              },
              {
                  "id": 132473,
                  "name": "Kharela",
                  "latitude": "25.54277000",
                  "longitude": "79.81235000"
              },
              {
                  "id": 132475,
                  "name": "Khargupur",
                  "latitude": "27.37611000",
                  "longitude": "81.98820000"
              },
              {
                  "id": 132479,
                  "name": "Kharkhauda",
                  "latitude": "28.83644000",
                  "longitude": "77.74159000"
              },
              {
                  "id": 132483,
                  "name": "Khatauli",
                  "latitude": "29.27844000",
                  "longitude": "77.73302000"
              },
              {
                  "id": 132490,
                  "name": "Khekra",
                  "latitude": "28.86586000",
                  "longitude": "77.28410000"
              },
              {
                  "id": 132492,
                  "name": "Kheri",
                  "latitude": "28.11667000",
                  "longitude": "80.71667000"
              },
              {
                  "id": 132503,
                  "name": "Khudaganj",
                  "latitude": "28.14607000",
                  "longitude": "79.71472000"
              },
              {
                  "id": 132509,
                  "name": "Khurja",
                  "latitude": "28.25382000",
                  "longitude": "77.85535000"
              },
              {
                  "id": 132520,
                  "name": "Khutar",
                  "latitude": "28.20307000",
                  "longitude": "80.27046000"
              },
              {
                  "id": 132528,
                  "name": "Kirakat",
                  "latitude": "25.63745000",
                  "longitude": "82.91596000"
              },
              {
                  "id": 132526,
                  "name": "Kiraoli",
                  "latitude": "27.13768000",
                  "longitude": "77.78516000"
              },
              {
                  "id": 132734,
                  "name": "Kiratpur",
                  "latitude": "29.50671000",
                  "longitude": "78.20613000"
              },
              {
                  "id": 132531,
                  "name": "Kishanpur",
                  "latitude": "25.64232000",
                  "longitude": "81.02270000"
              },
              {
                  "id": 147499,
                  "name": "Kishanpur baral",
                  "latitude": "29.20000000",
                  "longitude": "77.28333333"
              },
              {
                  "id": 132532,
                  "name": "Kishni",
                  "latitude": "27.02487000",
                  "longitude": "79.26200000"
              },
              {
                  "id": 132535,
                  "name": "Kithor",
                  "latitude": "28.86684000",
                  "longitude": "77.93861000"
              },
              {
                  "id": 132564,
                  "name": "Konch",
                  "latitude": "25.99451000",
                  "longitude": "79.15127000"
              },
              {
                  "id": 132575,
                  "name": "Kopaganj",
                  "latitude": "26.01923000",
                  "longitude": "83.56630000"
              },
              {
                  "id": 132589,
                  "name": "Kosi",
                  "latitude": "27.79449000",
                  "longitude": "77.43680000"
              },
              {
                  "id": 132592,
                  "name": "Kota",
                  "latitude": "24.44643000",
                  "longitude": "83.13063000"
              },
              {
                  "id": 132605,
                  "name": "Kotra",
                  "latitude": "25.80770000",
                  "longitude": "79.30909000"
              },
              {
                  "id": 147500,
                  "name": "Kuchesar",
                  "latitude": "28.68333333",
                  "longitude": "77.95000000"
              },
              {
                  "id": 147501,
                  "name": "Kudarkot",
                  "latitude": "26.81666667",
                  "longitude": "79.40000000"
              },
              {
                  "id": 132635,
                  "name": "Kulpahar",
                  "latitude": "25.32007000",
                  "longitude": "79.63931000"
              },
              {
                  "id": 132644,
                  "name": "Kunda",
                  "latitude": "25.71702000",
                  "longitude": "81.51396000"
              },
              {
                  "id": 132645,
                  "name": "Kundarkhi",
                  "latitude": "28.68304000",
                  "longitude": "78.78559000"
              },
              {
                  "id": 147502,
                  "name": "Kundarki",
                  "latitude": "28.68300000",
                  "longitude": "78.78500000"
              },
              {
                  "id": 132664,
                  "name": "Kurara",
                  "latitude": "25.98046000",
                  "longitude": "79.98984000"
              },
              {
                  "id": 147503,
                  "name": "Kurebharsaidkhanpur",
                  "latitude": "26.43333333",
                  "longitude": "82.11666667"
              },
              {
                  "id": 132665,
                  "name": "Kushinagar",
                  "latitude": "26.74028000",
                  "longitude": "83.88889000"
              },
              {
                  "id": 147504,
                  "name": "Kusmara",
                  "latitude": "27.11666667",
                  "longitude": "79.28333333"
              },
              {
                  "id": 147505,
                  "name": "Kuthaund",
                  "latitude": "26.36666667",
                  "longitude": "79.41666667"
              },
              {
                  "id": 132790,
                  "name": "Laharpur",
                  "latitude": "27.70827000",
                  "longitude": "80.90256000"
              },
              {
                  "id": 132748,
                  "name": "Lakhimpur",
                  "latitude": "27.94822000",
                  "longitude": "80.77935000"
              },
              {
                  "id": 132745,
                  "name": "Lakhna",
                  "latitude": "26.64822000",
                  "longitude": "79.14770000"
              },
              {
                  "id": 132796,
                  "name": "Lalganj",
                  "latitude": "25.93182000",
                  "longitude": "81.70478000"
              },
              {
                  "id": 132755,
                  "name": "Lalitpur",
                  "latitude": "24.50000000",
                  "longitude": "78.50000000"
              },
              {
                  "id": 147506,
                  "name": "Lambhua",
                  "latitude": "26.15000000",
                  "longitude": "82.21000000"
              },
              {
                  "id": 132757,
                  "name": "Lar",
                  "latitude": "26.20394000",
                  "longitude": "83.96906000"
              },
              {
                  "id": 147507,
                  "name": "Lawar",
                  "latitude": "29.11666667",
                  "longitude": "77.76666667"
              },
              {
                  "id": 132803,
                  "name": "Lawar Khas",
                  "latitude": "29.11091000",
                  "longitude": "77.77767000"
              },
              {
                  "id": 132775,
                  "name": "Loni",
                  "latitude": "28.75143000",
                  "longitude": "77.29023000"
              },
              {
                  "id": 132782,
                  "name": "Lucknow",
                  "latitude": "26.83928000",
                  "longitude": "80.92313000"
              },
              {
                  "id": 132783,
                  "name": "Lucknow District",
                  "latitude": "26.75000000",
                  "longitude": "81.00000000"
              },
              {
                  "id": 147508,
                  "name": "Machhali Shahar",
                  "latitude": "25.68000000",
                  "longitude": "82.42000000"
              },
              {
                  "id": 132805,
                  "name": "Machhlishahr",
                  "latitude": "25.68564000",
                  "longitude": "82.41106000"
              },
              {
                  "id": 133057,
                  "name": "Madhoganj",
                  "latitude": "27.11807000",
                  "longitude": "80.14058000"
              },
              {
                  "id": 133058,
                  "name": "Madhogarh",
                  "latitude": "26.27522000",
                  "longitude": "79.18590000"
              },
              {
                  "id": 132823,
                  "name": "Maghar",
                  "latitude": "26.75586000",
                  "longitude": "83.12773000"
              },
              {
                  "id": 132845,
                  "name": "Mahaban",
                  "latitude": "27.43262000",
                  "longitude": "77.74338000"
              },
              {
                  "id": 132826,
                  "name": "Maharajganj",
                  "latitude": "27.16945000",
                  "longitude": "83.50667000"
              },
              {
                  "id": 132836,
                  "name": "Mahmudabad",
                  "latitude": "27.29191000",
                  "longitude": "81.11775000"
              },
              {
                  "id": 132837,
                  "name": "Mahoba",
                  "latitude": "25.29210000",
                  "longitude": "79.87242000"
              },
              {
                  "id": 132839,
                  "name": "Maholi",
                  "latitude": "27.66368000",
                  "longitude": "80.47371000"
              },
              {
                  "id": 147509,
                  "name": "Mahrajganj",
                  "latitude": "26.26666667",
                  "longitude": "83.11666667"
              },
              {
                  "id": 147510,
                  "name": "Mahrajganj (Raebareli)",
                  "latitude": "26.38333333",
                  "longitude": "81.28333333"
              },
              {
                  "id": 132840,
                  "name": "Mahroni",
                  "latitude": "24.58624000",
                  "longitude": "78.72771000"
              },
              {
                  "id": 147511,
                  "name": "Mahul",
                  "latitude": "26.13333333",
                  "longitude": "82.81666667"
              },
              {
                  "id": 132855,
                  "name": "Mailani",
                  "latitude": "28.29088000",
                  "longitude": "80.34380000"
              },
              {
                  "id": 132857,
                  "name": "Mainpuri",
                  "latitude": "27.16667000",
                  "longitude": "79.00000000"
              },
              {
                  "id": 147512,
                  "name": "Majhupur",
                  "latitude": "27.03333333",
                  "longitude": "79.41666667"
              },
              {
                  "id": 147513,
                  "name": "Makanpur",
                  "latitude": "26.90222222",
                  "longitude": "79.97805556"
              },
              {
                  "id": 147514,
                  "name": "Malasa",
                  "latitude": "26.26755000",
                  "longitude": "79.94489000"
              },
              {
                  "id": 132878,
                  "name": "Malihabad",
                  "latitude": "26.92223000",
                  "longitude": "80.71078000"
              },
              {
                  "id": 132899,
                  "name": "Mandawar",
                  "latitude": "29.48655000",
                  "longitude": "78.12732000"
              },
              {
                  "id": 132910,
                  "name": "Maniar",
                  "latitude": "25.98546000",
                  "longitude": "84.17233000"
              },
              {
                  "id": 133079,
                  "name": "Manikpur",
                  "latitude": "25.06083000",
                  "longitude": "81.09961000"
              },
              {
                  "id": 132914,
                  "name": "Manjhanpur",
                  "latitude": "25.53046000",
                  "longitude": "81.37566000"
              },
              {
                  "id": 132917,
                  "name": "Mankapur",
                  "latitude": "27.05189000",
                  "longitude": "82.22961000"
              },
              {
                  "id": 133087,
                  "name": "Marahra",
                  "latitude": "27.73680000",
                  "longitude": "78.56891000"
              },
              {
                  "id": 132936,
                  "name": "Mariahu",
                  "latitude": "25.60404000",
                  "longitude": "82.60379000"
              },
              {
                  "id": 132940,
                  "name": "Mataundh",
                  "latitude": "25.43594000",
                  "longitude": "80.15653000"
              },
              {
                  "id": 132941,
                  "name": "Mathura",
                  "latitude": "27.63333000",
                  "longitude": "77.58333000"
              },
              {
                  "id": 132944,
                  "name": "Mau",
                  "latitude": "26.02940000",
                  "longitude": "83.50756000"
              },
              {
                  "id": 147515,
                  "name": "Mau Aima",
                  "latitude": "25.70000000",
                  "longitude": "81.91666667"
              },
              {
                  "id": 132945,
                  "name": "Mau Aimma",
                  "latitude": "25.69515000",
                  "longitude": "81.92336000"
              },
              {
                  "id": 132946,
                  "name": "Maudaha",
                  "latitude": "25.68312000",
                  "longitude": "80.11419000"
              },
              {
                  "id": 147516,
                  "name": "Maurawan",
                  "latitude": "26.43000000",
                  "longitude": "80.88000000"
              },
              {
                  "id": 132951,
                  "name": "Mawana",
                  "latitude": "29.10288000",
                  "longitude": "77.92199000"
              },
              {
                  "id": 147517,
                  "name": "Mawar",
                  "latitude": "26.30416667",
                  "longitude": "79.92111111"
              },
              {
                  "id": 132958,
                  "name": "Meerut",
                  "latitude": "28.91667000",
                  "longitude": "77.68333000"
              },
              {
                  "id": 147518,
                  "name": "Mehdawal",
                  "latitude": "26.98333333",
                  "longitude": "83.11666667"
              },
              {
                  "id": 132962,
                  "name": "Mehnagar",
                  "latitude": "25.87889000",
                  "longitude": "83.11611000"
              },
              {
                  "id": 132963,
                  "name": "Mehndawal",
                  "latitude": "26.97579000",
                  "longitude": "83.10995000"
              },
              {
                  "id": 132974,
                  "name": "Milak",
                  "latitude": "28.61031000",
                  "longitude": "79.16997000"
              },
              {
                  "id": 147519,
                  "name": "Milkipur",
                  "latitude": "26.60000000",
                  "longitude": "81.91000000"
              },
              {
                  "id": 133096,
                  "name": "Miranpur",
                  "latitude": "29.29026000",
                  "longitude": "77.94939000"
              },
              {
                  "id": 133097,
                  "name": "Miranpur Katra",
                  "latitude": "28.02963000",
                  "longitude": "79.66778000"
              },
              {
                  "id": 133095,
                  "name": "Mirganj",
                  "latitude": "28.54012000",
                  "longitude": "79.20817000"
              },
              {
                  "id": 132976,
                  "name": "Mirzapur",
                  "latitude": "25.14490000",
                  "longitude": "82.56534000"
              },
              {
                  "id": 132977,
                  "name": "Misrikh",
                  "latitude": "27.43137000",
                  "longitude": "80.53157000"
              },
              {
                  "id": 132986,
                  "name": "Mohan",
                  "latitude": "26.78008000",
                  "longitude": "80.67497000"
              },
              {
                  "id": 132981,
                  "name": "Mohanpur",
                  "latitude": "28.25261000",
                  "longitude": "80.24498000"
              },
              {
                  "id": 133001,
                  "name": "Moradabad",
                  "latitude": "28.85250000",
                  "longitude": "78.79703000"
              },
              {
                  "id": 133004,
                  "name": "Moth",
                  "latitude": "25.72595000",
                  "longitude": "78.95029000"
              },
              {
                  "id": 133007,
                  "name": "Mubarakpur",
                  "latitude": "26.08866000",
                  "longitude": "83.29088000"
              },
              {
                  "id": 133014,
                  "name": "Mughal Sarai",
                  "latitude": "25.28307000",
                  "longitude": "83.11968000"
              },
              {
                  "id": 133016,
                  "name": "Muhammadabad",
                  "latitude": "25.61907000",
                  "longitude": "83.75576000"
              },
              {
                  "id": 147520,
                  "name": "Mukteshwar",
                  "latitude": "29.47220000",
                  "longitude": "79.64790000"
              },
              {
                  "id": 147521,
                  "name": "Mungra Badshahpur",
                  "latitude": "25.65000000",
                  "longitude": "82.18000000"
              },
              {
                  "id": 147522,
                  "name": "Munsyari",
                  "latitude": "30.06741389",
                  "longitude": "80.23856111"
              },
              {
                  "id": 147523,
                  "name": "Muradabad",
                  "latitude": "28.83888889",
                  "longitude": "78.77694444"
              },
              {
                  "id": 133043,
                  "name": "Muradnagar",
                  "latitude": "28.78069000",
                  "longitude": "77.49865000"
              },
              {
                  "id": 133038,
                  "name": "Mursan",
                  "latitude": "27.57788000",
                  "longitude": "77.94091000"
              },
              {
                  "id": 133048,
                  "name": "Musafir-Khana",
                  "latitude": "26.37837000",
                  "longitude": "81.79607000"
              },
              {
                  "id": 147524,
                  "name": "Musafirkhana",
                  "latitude": "26.45000000",
                  "longitude": "81.80000000"
              },
              {
                  "id": 133051,
                  "name": "Muzaffarnagar",
                  "latitude": "29.45000000",
                  "longitude": "77.58333000"
              },
              {
                  "id": 133109,
                  "name": "Nadigaon",
                  "latitude": "26.10784000",
                  "longitude": "79.02283000"
              },
              {
                  "id": 133120,
                  "name": "Nagina",
                  "latitude": "29.44433000",
                  "longitude": "78.43646000"
              },
              {
                  "id": 147525,
                  "name": "Nagla",
                  "latitude": "29.01000000",
                  "longitude": "79.51000000"
              },
              {
                  "id": 133119,
                  "name": "Nagram",
                  "latitude": "26.61872000",
                  "longitude": "81.14043000"
              },
              {
                  "id": 133127,
                  "name": "Najibabad",
                  "latitude": "29.61194000",
                  "longitude": "78.34274000"
              },
              {
                  "id": 133129,
                  "name": "Nakur",
                  "latitude": "29.91964000",
                  "longitude": "77.30438000"
              },
              {
                  "id": 133139,
                  "name": "Nanauta",
                  "latitude": "29.71215000",
                  "longitude": "77.41728000"
              },
              {
                  "id": 133142,
                  "name": "Nandgaon",
                  "latitude": "27.71102000",
                  "longitude": "77.38653000"
              },
              {
                  "id": 133270,
                  "name": "Nanpara",
                  "latitude": "27.86459000",
                  "longitude": "81.50036000"
              },
              {
                  "id": 133161,
                  "name": "Narauli",
                  "latitude": "28.48547000",
                  "longitude": "78.71484000"
              },
              {
                  "id": 133162,
                  "name": "Naraura",
                  "latitude": "28.20147000",
                  "longitude": "78.38723000"
              },
              {
                  "id": 147526,
                  "name": "Narora",
                  "latitude": "28.19666667",
                  "longitude": "78.38138889"
              },
              {
                  "id": 147527,
                  "name": "Naugama",
                  "latitude": "27.70000000",
                  "longitude": "79.65000000"
              },
              {
                  "id": 147528,
                  "name": "Naurangpur",
                  "latitude": "27.16666667",
                  "longitude": "79.78333333"
              },
              {
                  "id": 133183,
                  "name": "Nautanwa",
                  "latitude": "27.42752000",
                  "longitude": "83.41789000"
              },
              {
                  "id": 133191,
                  "name": "Nawabganj",
                  "latitude": "26.93129000",
                  "longitude": "81.19841000"
              },
              {
                  "id": 147529,
                  "name": "Nawabganj (Barabanki)",
                  "latitude": "26.94000000",
                  "longitude": "81.19000000"
              },
              {
                  "id": 147530,
                  "name": "Nawabganj (Bareilly)",
                  "latitude": "28.54000000",
                  "longitude": "79.63300000"
              },
              {
                  "id": 147531,
                  "name": "Newara",
                  "latitude": "27.76666667",
                  "longitude": "79.28333333"
              },
              {
                  "id": 133212,
                  "name": "Nichlaul",
                  "latitude": "27.31247000",
                  "longitude": "83.72530000"
              },
              {
                  "id": 147532,
                  "name": "Nigoh",
                  "latitude": "26.75000000",
                  "longitude": "79.15000000"
              },
              {
                  "id": 133215,
                  "name": "Nihtaur",
                  "latitude": "29.32416000",
                  "longitude": "78.38724000"
              },
              {
                  "id": 133225,
                  "name": "Niwari",
                  "latitude": "28.87611000",
                  "longitude": "77.53820000"
              },
              {
                  "id": 133228,
                  "name": "Nizamabad",
                  "latitude": "26.05295000",
                  "longitude": "83.05787000"
              },
              {
                  "id": 133230,
                  "name": "Noida",
                  "latitude": "28.58000000",
                  "longitude": "77.33000000"
              },
              {
                  "id": 133292,
                  "name": "Nurpur",
                  "latitude": "29.14956000",
                  "longitude": "78.40840000"
              },
              {
                  "id": 133295,
                  "name": "Obra",
                  "latitude": "24.41863000",
                  "longitude": "82.98797000"
              },
              {
                  "id": 133302,
                  "name": "Orai",
                  "latitude": "25.99023000",
                  "longitude": "79.45334000"
              },
              {
                  "id": 133303,
                  "name": "Oran",
                  "latitude": "25.36882000",
                  "longitude": "80.74230000"
              },
              {
                  "id": 133309,
                  "name": "Pachperwa",
                  "latitude": "27.51234000",
                  "longitude": "82.64297000"
              },
              {
                  "id": 133316,
                  "name": "Padrauna",
                  "latitude": "26.90403000",
                  "longitude": "83.98087000"
              },
              {
                  "id": 133318,
                  "name": "Pahasu",
                  "latitude": "28.17220000",
                  "longitude": "78.06376000"
              },
              {
                  "id": 147533,
                  "name": "Paigaon",
                  "latitude": "27.78333333",
                  "longitude": "77.53333333"
              },
              {
                  "id": 133531,
                  "name": "Pali",
                  "latitude": "24.49188000",
                  "longitude": "78.41617000"
              },
              {
                  "id": 133326,
                  "name": "Palia Kalan",
                  "latitude": "28.43205000",
                  "longitude": "80.58137000"
              },
              {
                  "id": 147534,
                  "name": "Paras Rampur",
                  "latitude": "31.32388889",
                  "longitude": "75.67472222"
              },
              {
                  "id": 133550,
                  "name": "Parichha",
                  "latitude": "25.50789000",
                  "longitude": "78.75954000"
              },
              {
                  "id": 133372,
                  "name": "Parichhatgarh",
                  "latitude": "28.97841000",
                  "longitude": "77.93422000"
              },
              {
                  "id": 133365,
                  "name": "Parshadepur",
                  "latitude": "26.07354000",
                  "longitude": "81.49207000"
              },
              {
                  "id": 147535,
                  "name": "Pathakpura",
                  "latitude": "26.84441000",
                  "longitude": "78.74037000"
              },
              {
                  "id": 133385,
                  "name": "Patiali",
                  "latitude": "27.69086000",
                  "longitude": "78.99823000"
              },
              {
                  "id": 133391,
                  "name": "Patti",
                  "latitude": "25.92150000",
                  "longitude": "82.20048000"
              },
              {
                  "id": 133398,
                  "name": "Pawayan",
                  "latitude": "28.06626000",
                  "longitude": "80.10305000"
              },
              {
                  "id": 147536,
                  "name": "Payagpur",
                  "latitude": "27.40000000",
                  "longitude": "81.80000000"
              },
              {
                  "id": 133432,
                  "name": "Phalauda",
                  "latitude": "29.18824000",
                  "longitude": "77.82996000"
              },
              {
                  "id": 147537,
                  "name": "Phaphamau",
                  "latitude": "25.53333333",
                  "longitude": "81.86666667"
              },
              {
                  "id": 133435,
                  "name": "Phaphund",
                  "latitude": "26.59888000",
                  "longitude": "79.46437000"
              },
              {
                  "id": 133436,
                  "name": "Phariha",
                  "latitude": "27.32166000",
                  "longitude": "78.47267000"
              },
              {
                  "id": 147538,
                  "name": "Pheona",
                  "latitude": "29.08333333",
                  "longitude": "78.35000000"
              },
              {
                  "id": 133443,
                  "name": "Phulpur",
                  "latitude": "25.54895000",
                  "longitude": "82.08950000"
              },
              {
                  "id": 147539,
                  "name": "Pichhaura",
                  "latitude": "26.33333333",
                  "longitude": "79.31666667"
              },
              {
                  "id": 133445,
                  "name": "Pihani",
                  "latitude": "27.61987000",
                  "longitude": "80.20343000"
              },
              {
                  "id": 133561,
                  "name": "Pilibhit",
                  "latitude": "28.63124000",
                  "longitude": "79.80436000"
              },
              {
                  "id": 133447,
                  "name": "Pilkhua",
                  "latitude": "28.71271000",
                  "longitude": "77.65600000"
              },
              {
                  "id": 147540,
                  "name": "Pilkhuwa",
                  "latitude": "28.71196944",
                  "longitude": "77.65445556"
              },
              {
                  "id": 133452,
                  "name": "Pinahat",
                  "latitude": "26.88487000",
                  "longitude": "78.37647000"
              },
              {
                  "id": 133456,
                  "name": "Pipraich",
                  "latitude": "26.82745000",
                  "longitude": "83.52632000"
              },
              {
                  "id": 147541,
                  "name": "Pipri",
                  "latitude": "24.18000000",
                  "longitude": "83.00000000"
              },
              {
                  "id": 133488,
                  "name": "Pratapgarh",
                  "latitude": "25.75000000",
                  "longitude": "81.75000000"
              },
              {
                  "id": 57640,
                  "name": "Prayagraj (Allahabad)",
                  "latitude": "25.42012000",
                  "longitude": "81.88385000"
              },
              {
                  "id": 133495,
                  "name": "Pukhrayan",
                  "latitude": "26.22375000",
                  "longitude": "79.83739000"
              },
              {
                  "id": 133569,
                  "name": "Puranpur",
                  "latitude": "28.51283000",
                  "longitude": "80.14829000"
              },
              {
                  "id": 147542,
                  "name": "Purmafi",
                  "latitude": "29.55000000",
                  "longitude": "77.26666667"
              },
              {
                  "id": 133514,
                  "name": "Purwa",
                  "latitude": "26.45756000",
                  "longitude": "80.77403000"
              },
              {
                  "id": 147543,
                  "name": "Qadirganj",
                  "latitude": "27.78333333",
                  "longitude": "79.06666667"
              },
              {
                  "id": 133578,
                  "name": "Rabupura",
                  "latitude": "28.25153000",
                  "longitude": "77.60253000"
              },
              {
                  "id": 147544,
                  "name": "Radha Kund",
                  "latitude": "27.52444444",
                  "longitude": "77.49027778"
              },
              {
                  "id": 133658,
                  "name": "Radhakund",
                  "latitude": "27.52432000",
                  "longitude": "77.49101000"
              },
              {
                  "id": 133580,
                  "name": "Raebareli",
                  "latitude": "26.23090000",
                  "longitude": "81.23315000"
              },
              {
                  "id": 133688,
                  "name": "Rajapur",
                  "latitude": "25.38725000",
                  "longitude": "81.15125000"
              },
              {
                  "id": 133700,
                  "name": "Ramkola",
                  "latitude": "26.90172000",
                  "longitude": "83.83758000"
              },
              {
                  "id": 133704,
                  "name": "Ramnagar",
                  "latitude": "25.26907000",
                  "longitude": "83.02971000"
              },
              {
                  "id": 133705,
                  "name": "Rampur",
                  "latitude": "28.81014000",
                  "longitude": "79.02699000"
              },
              {
                  "id": 133707,
                  "name": "Rampura",
                  "latitude": "26.34967000",
                  "longitude": "79.18234000"
              },
              {
                  "id": 133720,
                  "name": "Ranipur",
                  "latitude": "25.25034000",
                  "longitude": "79.06204000"
              },
              {
                  "id": 147545,
                  "name": "Ranipur Barsi",
                  "latitude": "29.90000000",
                  "longitude": "77.21666667"
              },
              {
                  "id": 133612,
                  "name": "Rasra",
                  "latitude": "25.85760000",
                  "longitude": "83.85487000"
              },
              {
                  "id": 133613,
                  "name": "Rasulabad",
                  "latitude": "26.74491000",
                  "longitude": "80.49012000"
              },
              {
                  "id": 133723,
                  "name": "Rath",
                  "latitude": "25.59474000",
                  "longitude": "79.56660000"
              },
              {
                  "id": 133728,
                  "name": "Raya",
                  "latitude": "27.55607000",
                  "longitude": "77.78972000"
              },
              {
                  "id": 147546,
                  "name": "Rehar",
                  "latitude": "29.36666667",
                  "longitude": "78.76666667"
              },
              {
                  "id": 147547,
                  "name": "Renukoot",
                  "latitude": "24.20000000",
                  "longitude": "83.03000000"
              },
              {
                  "id": 133628,
                  "name": "Renukut",
                  "latitude": "24.21641000",
                  "longitude": "83.03580000"
              },
              {
                  "id": 133629,
                  "name": "Reoti",
                  "latitude": "25.85091000",
                  "longitude": "84.37780000"
              },
              {
                  "id": 147548,
                  "name": "Reotipur",
                  "latitude": "25.55000000",
                  "longitude": "83.71666667"
              },
              {
                  "id": 133637,
                  "name": "Richha",
                  "latitude": "28.69467000",
                  "longitude": "79.52284000"
              },
              {
                  "id": 133641,
                  "name": "Robertsganj",
                  "latitude": "24.68860000",
                  "longitude": "83.06784000"
              },
              {
                  "id": 133737,
                  "name": "Rudarpur",
                  "latitude": "26.44467000",
                  "longitude": "83.61302000"
              },
              {
                  "id": 147549,
                  "name": "Rudauli",
                  "latitude": "26.75000000",
                  "longitude": "81.75000000"
              },
              {
                  "id": 133655,
                  "name": "Rura",
                  "latitude": "26.49001000",
                  "longitude": "79.90108000"
              },
              {
                  "id": 147550,
                  "name": "Sabalpur",
                  "latitude": "27.17604900",
                  "longitude": "79.42012000"
              },
              {
                  "id": 147551,
                  "name": "Sachendi",
                  "latitude": "26.37116500",
                  "longitude": "80.11230000"
              },
              {
                  "id": 133744,
                  "name": "Sadabad",
                  "latitude": "27.43818000",
                  "longitude": "78.03758000"
              },
              {
                  "id": 134059,
                  "name": "Sadat",
                  "latitude": "25.67117000",
                  "longitude": "83.30269000"
              },
              {
                  "id": 133747,
                  "name": "Safipur",
                  "latitude": "26.73783000",
                  "longitude": "80.34350000"
              },
              {
                  "id": 133753,
                  "name": "Saharanpur",
                  "latitude": "29.90000000",
                  "longitude": "77.68333000"
              },
              {
                  "id": 133750,
                  "name": "Sahaspur",
                  "latitude": "29.12125000",
                  "longitude": "78.62273000"
              },
              {
                  "id": 133751,
                  "name": "Sahaswan",
                  "latitude": "28.07227000",
                  "longitude": "78.75082000"
              },
              {
                  "id": 133754,
                  "name": "Sahawar",
                  "latitude": "27.79603000",
                  "longitude": "78.83373000"
              },
              {
                  "id": 147552,
                  "name": "Sahibabad",
                  "latitude": "28.68333333",
                  "longitude": "77.40000000"
              },
              {
                  "id": 147553,
                  "name": "Sahpau",
                  "latitude": "27.43527778",
                  "longitude": "78.14138889"
              },
              {
                  "id": 133755,
                  "name": "Saidpur",
                  "latitude": "25.53749000",
                  "longitude": "83.22378000"
              },
              {
                  "id": 147554,
                  "name": "Sakhanu",
                  "latitude": "27.95472222",
                  "longitude": "79.22750000"
              },
              {
                  "id": 133762,
                  "name": "Sakit",
                  "latitude": "27.43463000",
                  "longitude": "78.77903000"
              },
              {
                  "id": 147555,
                  "name": "Salempur",
                  "latitude": "26.30000000",
                  "longitude": "83.91666667"
              },
              {
                  "id": 133765,
                  "name": "Salon",
                  "latitude": "26.02857000",
                  "longitude": "81.45403000"
              },
              {
                  "id": 133770,
                  "name": "Sambhal",
                  "latitude": "28.58498000",
                  "longitude": "78.56959000"
              },
              {
                  "id": 133773,
                  "name": "Samthar",
                  "latitude": "25.84348000",
                  "longitude": "78.90683000"
              },
              {
                  "id": 134072,
                  "name": "Sandi",
                  "latitude": "27.28867000",
                  "longitude": "79.95190000"
              },
              {
                  "id": 133778,
                  "name": "Sandila",
                  "latitude": "27.06989000",
                  "longitude": "80.51497000"
              },
              {
                  "id": 133792,
                  "name": "Sant Kabir Nagar",
                  "latitude": "26.79016000",
                  "longitude": "83.03481000"
              },
              {
                  "id": 133793,
                  "name": "Sant Ravi Das Nagar",
                  "latitude": "25.35792000",
                  "longitude": "82.43080000"
              },
              {
                  "id": 133813,
                  "name": "Sarai Akil",
                  "latitude": "25.37890000",
                  "longitude": "81.51035000"
              },
              {
                  "id": 133799,
                  "name": "Sarai Ekdil",
                  "latitude": "26.74442000",
                  "longitude": "79.09353000"
              },
              {
                  "id": 133812,
                  "name": "Sarai Mir",
                  "latitude": "26.02705000",
                  "longitude": "82.91843000"
              },
              {
                  "id": 133802,
                  "name": "Sarauli",
                  "latitude": "28.49404000",
                  "longitude": "79.09177000"
              },
              {
                  "id": 133803,
                  "name": "Sardhana",
                  "latitude": "29.14551000",
                  "longitude": "77.61433000"
              },
              {
                  "id": 133814,
                  "name": "Sarila",
                  "latitude": "25.77579000",
                  "longitude": "79.67535000"
              },
              {
                  "id": 147556,
                  "name": "Sarurpur",
                  "latitude": "29.03333333",
                  "longitude": "77.23333333"
              },
              {
                  "id": 134080,
                  "name": "Sasni",
                  "latitude": "27.70287000",
                  "longitude": "78.08278000"
              },
              {
                  "id": 133821,
                  "name": "Satrikh",
                  "latitude": "26.86045000",
                  "longitude": "81.19567000"
              },
              {
                  "id": 133828,
                  "name": "Saurikh",
                  "latitude": "27.03051000",
                  "longitude": "79.48813000"
              },
              {
                  "id": 133833,
                  "name": "Sector",
                  "latitude": "28.57080000",
                  "longitude": "77.32610000"
              },
              {
                  "id": 133839,
                  "name": "Seohara",
                  "latitude": "29.20904000",
                  "longitude": "78.58837000"
              },
              {
                  "id": 133905,
                  "name": "Shahabad",
                  "latitude": "27.64310000",
                  "longitude": "79.94020000"
              },
              {
                  "id": 133892,
                  "name": "Shahganj",
                  "latitude": "26.04965000",
                  "longitude": "82.68423000"
              },
              {
                  "id": 133894,
                  "name": "Shahi",
                  "latitude": "28.55023000",
                  "longitude": "79.31761000"
              },
              {
                  "id": 133895,
                  "name": "Shahjahanpur",
                  "latitude": "28.00000000",
                  "longitude": "79.83333000"
              },
              {
                  "id": 133901,
                  "name": "Shahpur",
                  "latitude": "29.35010000",
                  "longitude": "77.55160000"
              },
              {
                  "id": 133913,
                  "name": "Shamli",
                  "latitude": "29.44970000",
                  "longitude": "77.30959000"
              },
              {
                  "id": 133855,
                  "name": "Shamsabad",
                  "latitude": "27.01718000",
                  "longitude": "78.12358000"
              },
              {
                  "id": 133856,
                  "name": "Shankargarh",
                  "latitude": "25.18200000",
                  "longitude": "81.61769000"
              },
              {
                  "id": 133862,
                  "name": "Shergarh",
                  "latitude": "28.65128000",
                  "longitude": "79.36815000"
              },
              {
                  "id": 133864,
                  "name": "Sherkot",
                  "latitude": "29.32704000",
                  "longitude": "78.57429000"
              },
              {
                  "id": 147557,
                  "name": "Shibnagar",
                  "latitude": "28.50000000",
                  "longitude": "79.98333333"
              },
              {
                  "id": 133869,
                  "name": "Shikarpur",
                  "latitude": "28.28072000",
                  "longitude": "78.01411000"
              },
              {
                  "id": 147558,
                  "name": "Shikarpur (Bulandshahr)",
                  "latitude": "28.28000000",
                  "longitude": "78.02000000"
              },
              {
                  "id": 133867,
                  "name": "Shikohabad",
                  "latitude": "27.10800000",
                  "longitude": "78.58661000"
              },
              {
                  "id": 133914,
                  "name": "Shishgarh",
                  "latitude": "28.72928000",
                  "longitude": "79.31469000"
              },
              {
                  "id": 147559,
                  "name": "Shivrajpur",
                  "latitude": "26.85722222",
                  "longitude": "79.11500000"
              },
              {
                  "id": 133885,
                  "name": "Shrawasti",
                  "latitude": "27.50746000",
                  "longitude": "82.00470000"
              },
              {
                  "id": 133918,
                  "name": "Siddharthnagar",
                  "latitude": "27.25797000",
                  "longitude": "83.01465000"
              },
              {
                  "id": 147560,
                  "name": "Siddhaur",
                  "latitude": "26.76944444",
                  "longitude": "81.41805556"
              },
              {
                  "id": 133921,
                  "name": "Sidhauli",
                  "latitude": "27.28202000",
                  "longitude": "80.83450000"
              },
              {
                  "id": 133923,
                  "name": "Sidhpura",
                  "latitude": "27.63312000",
                  "longitude": "78.86918000"
              },
              {
                  "id": 133929,
                  "name": "Sikandarabad",
                  "latitude": "28.45226000",
                  "longitude": "77.70004000"
              },
              {
                  "id": 133928,
                  "name": "Sikandarpur",
                  "latitude": "26.04327000",
                  "longitude": "84.05298000"
              },
              {
                  "id": 133930,
                  "name": "Sikandra",
                  "latitude": "26.36722000",
                  "longitude": "79.62980000"
              },
              {
                  "id": 133931,
                  "name": "Sikandra Rao",
                  "latitude": "27.68859000",
                  "longitude": "78.37985000"
              },
              {
                  "id": 147561,
                  "name": "Sikandrabad",
                  "latitude": "28.44952500",
                  "longitude": "77.69415278"
              },
              {
                  "id": 133969,
                  "name": "Sirathu",
                  "latitude": "25.64292000",
                  "longitude": "81.31855000"
              },
              {
                  "id": 133965,
                  "name": "Sirsa",
                  "latitude": "25.26340000",
                  "longitude": "82.09190000"
              },
              {
                  "id": 133966,
                  "name": "Sirsaganj",
                  "latitude": "27.05715000",
                  "longitude": "78.68661000"
              },
              {
                  "id": 133963,
                  "name": "Sirsi",
                  "latitude": "28.63916000",
                  "longitude": "78.64303000"
              },
              {
                  "id": 133971,
                  "name": "Sisauli",
                  "latitude": "29.41386000",
                  "longitude": "77.46890000"
              },
              {
                  "id": 133972,
                  "name": "Siswa Bazar",
                  "latitude": "27.14652000",
                  "longitude": "83.75803000"
              },
              {
                  "id": 134091,
                  "name": "Sitapur",
                  "latitude": "27.50000000",
                  "longitude": "80.91667000"
              },
              {
                  "id": 133992,
                  "name": "Sonbhadra",
                  "latitude": "24.40212000",
                  "longitude": "83.05352000"
              },
              {
                  "id": 134005,
                  "name": "Soron",
                  "latitude": "27.89055000",
                  "longitude": "78.74621000"
              },
              {
                  "id": 134056,
                  "name": "Suar",
                  "latitude": "29.02841000",
                  "longitude": "79.05654000"
              },
              {
                  "id": 134040,
                  "name": "Sultanpur",
                  "latitude": "26.25000000",
                  "longitude": "82.00000000"
              },
              {
                  "id": 134053,
                  "name": "Surianwan",
                  "latitude": "25.46387000",
                  "longitude": "82.41922000"
              },
              {
                  "id": 134229,
                  "name": "Tajpur",
                  "latitude": "29.16242000",
                  "longitude": "78.48458000"
              },
              {
                  "id": 134231,
                  "name": "Talbahat",
                  "latitude": "25.04357000",
                  "longitude": "78.43441000"
              },
              {
                  "id": 134233,
                  "name": "Talgram",
                  "latitude": "27.04753000",
                  "longitude": "79.64811000"
              },
              {
                  "id": 134235,
                  "name": "Tanda",
                  "latitude": "28.97621000",
                  "longitude": "78.94187000"
              },
              {
                  "id": 147562,
                  "name": "Terha",
                  "latitude": "25.83330000",
                  "longitude": "80.25000000"
              },
              {
                  "id": 134136,
                  "name": "Thakurdwara",
                  "latitude": "29.19203000",
                  "longitude": "78.86145000"
              },
              {
                  "id": 134165,
                  "name": "Thana Bhawan",
                  "latitude": "29.58605000",
                  "longitude": "77.41811000"
              },
              {
                  "id": 147563,
                  "name": "Tigri",
                  "latitude": "28.51083333",
                  "longitude": "77.23888889"
              },
              {
                  "id": 134170,
                  "name": "Tikaitnagar",
                  "latitude": "26.94612000",
                  "longitude": "81.56583000"
              },
              {
                  "id": 134245,
                  "name": "Tikri",
                  "latitude": "29.22910000",
                  "longitude": "77.35479000"
              },
              {
                  "id": 134171,
                  "name": "Tilhar",
                  "latitude": "27.96282000",
                  "longitude": "79.73827000"
              },
              {
                  "id": 147564,
                  "name": "Tilsahri",
                  "latitude": "26.33330000",
                  "longitude": "80.41670000"
              },
              {
                  "id": 134173,
                  "name": "Tindwari",
                  "latitude": "25.61739000",
                  "longitude": "80.52718000"
              },
              {
                  "id": 134202,
                  "name": "Titron",
                  "latitude": "29.66824000",
                  "longitude": "77.32391000"
              },
              {
                  "id": 147565,
                  "name": "Tori Fatehpur",
                  "latitude": "25.45000000",
                  "longitude": "79.13330000"
              },
              {
                  "id": 134210,
                  "name": "Tori-Fatehpur",
                  "latitude": "25.45505000",
                  "longitude": "79.11428000"
              },
              {
                  "id": 134218,
                  "name": "Tulsipur",
                  "latitude": "27.53370000",
                  "longitude": "82.41653000"
              },
              {
                  "id": 134248,
                  "name": "Tundla",
                  "latitude": "27.21460000",
                  "longitude": "78.23683000"
              },
              {
                  "id": 134261,
                  "name": "Ugu",
                  "latitude": "26.79681000",
                  "longitude": "80.32093000"
              },
              {
                  "id": 134262,
                  "name": "Ujhani",
                  "latitude": "28.00311000",
                  "longitude": "79.00821000"
              },
              {
                  "id": 147566,
                  "name": "Umri",
                  "latitude": "26.33333333",
                  "longitude": "79.25000000"
              },
              {
                  "id": 134471,
                  "name": "Un",
                  "latitude": "29.58479000",
                  "longitude": "77.25540000"
              },
              {
                  "id": 134285,
                  "name": "Unnao",
                  "latitude": "26.50000000",
                  "longitude": "80.50000000"
              },
              {
                  "id": 147567,
                  "name": "Usawan",
                  "latitude": "27.81583333",
                  "longitude": "79.34861111"
              },
              {
                  "id": 134294,
                  "name": "Usehat",
                  "latitude": "27.79796000",
                  "longitude": "79.23763000"
              },
              {
                  "id": 147568,
                  "name": "Uska",
                  "latitude": "27.20000000",
                  "longitude": "83.11666667"
              },
              {
                  "id": 134296,
                  "name": "Utraula",
                  "latitude": "27.31933000",
                  "longitude": "82.41872000"
              },
              {
                  "id": 134327,
                  "name": "Varanasi",
                  "latitude": "25.31668000",
                  "longitude": "83.01041000"
              },
              {
                  "id": 147569,
                  "name": "Vindhyachal",
                  "latitude": "25.16670000",
                  "longitude": "82.50000000"
              },
              {
                  "id": 134376,
                  "name": "Vrindavan",
                  "latitude": "27.58105000",
                  "longitude": "77.69662000"
              },
              {
                  "id": 147570,
                  "name": "Walterganj",
                  "latitude": "26.86670000",
                  "longitude": "82.71670000"
              },
              {
                  "id": 134401,
                  "name": "Wazirganj",
                  "latitude": "28.21145000",
                  "longitude": "79.05665000"
              },
              {
                  "id": 147571,
                  "name": "Yusufpur",
                  "latitude": "25.66670000",
                  "longitude": "83.46670000"
              },
              {
                  "id": 134439,
                  "name": "Zafarabad",
                  "latitude": "25.69867000",
                  "longitude": "82.73354000"
              },
              {
                  "id": 134441,
                  "name": "Zaidpur",
                  "latitude": "26.83093000",
                  "longitude": "81.32929000"
              },
              {
                  "id": 134442,
                  "name": "Zamania",
                  "latitude": "25.41961000",
                  "longitude": "83.55786000"
              }
          ]
      },
      {
          "id": 4016,
          "name": "Uttarakhand",
          "state_code": "UT",
          "latitude": "30.06675300",
          "longitude": "79.01929970",
          "type": "state",
          "cities": [
              {
                  "id": 57643,
                  "name": "Almora",
                  "latitude": "29.69223000",
                  "longitude": "79.49789000"
              },
              {
                  "id": 57800,
                  "name": "Bageshwar",
                  "latitude": "29.97315000",
                  "longitude": "79.83224000"
              },
              {
                  "id": 57879,
                  "name": "Barkot",
                  "latitude": "30.80861000",
                  "longitude": "78.20596000"
              },
              {
                  "id": 58153,
                  "name": "Bazpur",
                  "latitude": "29.15299000",
                  "longitude": "79.10814000"
              },
              {
                  "id": 58020,
                  "name": "Bhim Tal",
                  "latitude": "29.34447000",
                  "longitude": "79.56336000"
              },
              {
                  "id": 57998,
                  "name": "Bhowali",
                  "latitude": "29.38985000",
                  "longitude": "79.50481000"
              },
              {
                  "id": 58059,
                  "name": "Birbhaddar",
                  "latitude": "30.07120000",
                  "longitude": "78.28189000"
              },
              {
                  "id": 58176,
                  "name": "Chakrata",
                  "latitude": "30.70369000",
                  "longitude": "77.86386000"
              },
              {
                  "id": 58182,
                  "name": "Chamoli",
                  "latitude": "30.50000000",
                  "longitude": "79.50000000"
              },
              {
                  "id": 58183,
                  "name": "Champawat",
                  "latitude": "29.28756000",
                  "longitude": "80.03737000"
              },
              {
                  "id": 131615,
                  "name": "Clement Town",
                  "latitude": "30.26361000",
                  "longitude": "78.00862000"
              },
              {
                  "id": 131676,
                  "name": "Dehradun",
                  "latitude": "30.33000000",
                  "longitude": "78.06000000"
              },
              {
                  "id": 131702,
                  "name": "Devaprayag",
                  "latitude": "30.14603000",
                  "longitude": "78.60272000"
              },
              {
                  "id": 131754,
                  "name": "Dharchula",
                  "latitude": "29.84707000",
                  "longitude": "80.51951000"
              },
              {
                  "id": 131784,
                  "name": "Doiwala",
                  "latitude": "30.17667000",
                  "longitude": "78.11659000"
              },
              {
                  "id": 131793,
                  "name": "Dugadda",
                  "latitude": "29.80673000",
                  "longitude": "78.61109000"
              },
              {
                  "id": 131804,
                  "name": "Dwarahat",
                  "latitude": "29.77785000",
                  "longitude": "79.42731000"
              },
              {
                  "id": 131923,
                  "name": "Garhwal",
                  "latitude": "29.96366000",
                  "longitude": "78.92853000"
              },
              {
                  "id": 132058,
                  "name": "Haldwani",
                  "latitude": "29.22254000",
                  "longitude": "79.52860000"
              },
              {
                  "id": 132069,
                  "name": "Harbatpur",
                  "latitude": "30.43863000",
                  "longitude": "77.74058000"
              },
              {
                  "id": 132075,
                  "name": "Haridwar",
                  "latitude": "29.94791000",
                  "longitude": "78.16025000"
              },
              {
                  "id": 132247,
                  "name": "Jaspur",
                  "latitude": "29.27919000",
                  "longitude": "78.82798000"
              },
              {
                  "id": 132296,
                  "name": "Joshimath",
                  "latitude": "30.55543000",
                  "longitude": "79.56436000"
              },
              {
                  "id": 132685,
                  "name": "Kaladhungi",
                  "latitude": "29.28351000",
                  "longitude": "79.35100000"
              },
              {
                  "id": 132686,
                  "name": "Kalagarh Project Colony",
                  "latitude": "29.47780000",
                  "longitude": "78.78449000"
              },
              {
                  "id": 132418,
                  "name": "Kashipur",
                  "latitude": "29.21399000",
                  "longitude": "78.95693000"
              },
              {
                  "id": 132484,
                  "name": "Khatima",
                  "latitude": "28.92134000",
                  "longitude": "79.97075000"
              },
              {
                  "id": 132521,
                  "name": "Kichha",
                  "latitude": "28.91154000",
                  "longitude": "79.52009000"
              },
              {
                  "id": 132597,
                  "name": "Kotdwara",
                  "latitude": "29.74612000",
                  "longitude": "78.52219000"
              },
              {
                  "id": 132749,
                  "name": "Laksar",
                  "latitude": "29.75870000",
                  "longitude": "78.04148000"
              },
              {
                  "id": 132756,
                  "name": "Lansdowne",
                  "latitude": "29.84183000",
                  "longitude": "78.68014000"
              },
              {
                  "id": 132767,
                  "name": "Lohaghat",
                  "latitude": "29.40356000",
                  "longitude": "80.08965000"
              },
              {
                  "id": 132908,
                  "name": "Manglaur",
                  "latitude": "29.79094000",
                  "longitude": "77.87836000"
              },
              {
                  "id": 133046,
                  "name": "Mussoorie",
                  "latitude": "30.45498000",
                  "longitude": "78.07068000"
              },
              {
                  "id": 133123,
                  "name": "Naini Tal",
                  "latitude": "29.39743000",
                  "longitude": "79.44686000"
              },
              {
                  "id": 133166,
                  "name": "Narendranagar",
                  "latitude": "30.16173000",
                  "longitude": "78.28712000"
              },
              {
                  "id": 133394,
                  "name": "Pauri",
                  "latitude": "30.15286000",
                  "longitude": "78.77710000"
              },
              {
                  "id": 133563,
                  "name": "Pipalkoti",
                  "latitude": "30.42553000",
                  "longitude": "79.43066000"
              },
              {
                  "id": 133464,
                  "name": "Pithoragarh",
                  "latitude": "30.00000000",
                  "longitude": "80.25000000"
              },
              {
                  "id": 133666,
                  "name": "Raipur",
                  "latitude": "30.31097000",
                  "longitude": "78.08979000"
              },
              {
                  "id": 133735,
                  "name": "Raiwala Bara",
                  "latitude": "30.01864000",
                  "longitude": "78.22930000"
              },
              {
                  "id": 133703,
                  "name": "Ramnagar",
                  "latitude": "29.39250000",
                  "longitude": "79.12830000"
              },
              {
                  "id": 133716,
                  "name": "Ranikhet",
                  "latitude": "29.64082000",
                  "longitude": "79.43229000"
              },
              {
                  "id": 133638,
                  "name": "Rishikesh",
                  "latitude": "30.10778000",
                  "longitude": "78.29255000"
              },
              {
                  "id": 133650,
                  "name": "Roorkee",
                  "latitude": "29.86632000",
                  "longitude": "77.89118000"
              },
              {
                  "id": 133652,
                  "name": "Rudraprayag",
                  "latitude": "30.60872000",
                  "longitude": "79.06517000"
              },
              {
                  "id": 133973,
                  "name": "Sitarganj",
                  "latitude": "28.92930000",
                  "longitude": "79.70436000"
              },
              {
                  "id": 134027,
                  "name": "Srinagar",
                  "latitude": "30.22243000",
                  "longitude": "78.78341000"
              },
              {
                  "id": 134038,
                  "name": "Sultanpur",
                  "latitude": "29.75534000",
                  "longitude": "78.11034000"
              },
              {
                  "id": 134110,
                  "name": "Tanakpur",
                  "latitude": "29.07400000",
                  "longitude": "80.11139000"
              },
              {
                  "id": 134122,
                  "name": "Tehri",
                  "latitude": "30.39086000",
                  "longitude": "78.48030000"
              },
              {
                  "id": 134123,
                  "name": "Tehri-Garhwal",
                  "latitude": "30.50000000",
                  "longitude": "78.66667000"
              },
              {
                  "id": 134256,
                  "name": "Udham Singh Nagar",
                  "latitude": "29.02746000",
                  "longitude": "79.52347000"
              },
              {
                  "id": 134301,
                  "name": "Uttarkashi",
                  "latitude": "30.72986000",
                  "longitude": "78.44342000"
              },
              {
                  "id": 134360,
                  "name": "Vikasnagar",
                  "latitude": "30.46944000",
                  "longitude": "77.77275000"
              }
          ]
      },
      {
          "id": 4853,
          "name": "West Bengal",
          "state_code": "WB",
          "latitude": "22.98675690",
          "longitude": "87.85497550",
          "type": "state",
          "cities": [
              {
                  "id": 153350,
                  "name": "Adra",
                  "latitude": "23.49601500",
                  "longitude": "86.67249000"
              },
              {
                  "id": 141852,
                  "name": "Ahmedpur",
                  "latitude": "23.83009000",
                  "longitude": "87.68661000"
              },
              {
                  "id": 141853,
                  "name": "Aistala",
                  "latitude": "23.18000000",
                  "longitude": "88.58000000"
              },
              {
                  "id": 141854,
                  "name": "Aknapur",
                  "latitude": "18.38576389",
                  "longitude": "77.27225278"
              },
              {
                  "id": 141855,
                  "name": "Alipurduar",
                  "latitude": "26.49136000",
                  "longitude": "89.52796000"
              },
              {
                  "id": 142112,
                  "name": "Amlagora",
                  "latitude": "22.84616000",
                  "longitude": "87.33559000"
              },
              {
                  "id": 141857,
                  "name": "Amta",
                  "latitude": "22.57333333",
                  "longitude": "88.01611111"
              },
              {
                  "id": 141858,
                  "name": "Amtala",
                  "latitude": "22.22000000",
                  "longitude": "88.17000000"
              },
              {
                  "id": 141859,
                  "name": "Andal",
                  "latitude": "23.60000000",
                  "longitude": "87.20000000"
              },
              {
                  "id": 141860,
                  "name": "Arambagh community development block",
                  "latitude": "22.88000000",
                  "longitude": "87.78000000"
              },
              {
                  "id": 141861,
                  "name": "Asansol",
                  "latitude": "23.68333333",
                  "longitude": "86.96666667"
              },
              {
                  "id": 141862,
                  "name": "Ashoknagar Kalyangarh",
                  "latitude": "22.83300000",
                  "longitude": "88.63300000"
              },
              {
                  "id": 141863,
                  "name": "Badkulla",
                  "latitude": "23.28000000",
                  "longitude": "88.53000000"
              },
              {
                  "id": 141864,
                  "name": "Baduria",
                  "latitude": "22.74000000",
                  "longitude": "88.79000000"
              },
              {
                  "id": 141865,
                  "name": "Bagdogra",
                  "latitude": "26.69980400",
                  "longitude": "88.31939200"
              },
              {
                  "id": 141866,
                  "name": "Bagnan",
                  "latitude": "22.47000000",
                  "longitude": "87.97000000"
              },
              {
                  "id": 141867,
                  "name": "Bagula",
                  "latitude": "23.33500000",
                  "longitude": "88.64400000"
              },
              {
                  "id": 141868,
                  "name": "Bahula",
                  "latitude": "23.65741900",
                  "longitude": "87.19597400"
              },
              {
                  "id": 141869,
                  "name": "Baidyabati",
                  "latitude": "22.79000000",
                  "longitude": "88.32000000"
              },
              {
                  "id": 141870,
                  "name": "Bakreswar",
                  "latitude": "23.88320000",
                  "longitude": "87.37265000"
              },
              {
                  "id": 141871,
                  "name": "Balarampur",
                  "latitude": "23.09714000",
                  "longitude": "86.22292000"
              },
              {
                  "id": 141903,
                  "name": "Bali Chak",
                  "latitude": "22.36482000",
                  "longitude": "87.55304000"
              },
              {
                  "id": 141872,
                  "name": "Bally",
                  "latitude": "22.65000000",
                  "longitude": "88.34000000"
              },
              {
                  "id": 141873,
                  "name": "Balurghat",
                  "latitude": "25.21666667",
                  "longitude": "88.76666667"
              },
              {
                  "id": 141874,
                  "name": "Bamangola community development block",
                  "latitude": "25.17000000",
                  "longitude": "88.33500000"
              },
              {
                  "id": 141875,
                  "name": "Baneswar",
                  "latitude": "26.65000000",
                  "longitude": "89.81666667"
              },
              {
                  "id": 141876,
                  "name": "Bangaon",
                  "latitude": "23.07000000",
                  "longitude": "88.82000000"
              },
              {
                  "id": 141877,
                  "name": "Bankra",
                  "latitude": "22.63000000",
                  "longitude": "88.30000000"
              },
              {
                  "id": 141878,
                  "name": "Bankura",
                  "latitude": "23.25000000",
                  "longitude": "87.06666667"
              },
              {
                  "id": 141879,
                  "name": "Bansberia",
                  "latitude": "22.97000000",
                  "longitude": "88.40000000"
              },
              {
                  "id": 141880,
                  "name": "Bansihari community development block",
                  "latitude": "25.40000000",
                  "longitude": "88.41670000"
              },
              {
                  "id": 141881,
                  "name": "Barabazar",
                  "latitude": "23.36000000",
                  "longitude": "86.65000000"
              },
              {
                  "id": 141882,
                  "name": "Baranagar",
                  "latitude": "22.64000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 141883,
                  "name": "Barasat",
                  "latitude": "22.23333333",
                  "longitude": "88.45000000"
              },
              {
                  "id": 141884,
                  "name": "Bardhaman",
                  "latitude": "23.25000000",
                  "longitude": "87.85000000"
              },
              {
                  "id": 141885,
                  "name": "Barjora",
                  "latitude": "23.43333333",
                  "longitude": "87.28333333"
              },
              {
                  "id": 141886,
                  "name": "Barrackpore",
                  "latitude": "22.75000000",
                  "longitude": "88.36666667"
              },
              {
                  "id": 141887,
                  "name": "Baruipur",
                  "latitude": "22.35000000",
                  "longitude": "88.44000000"
              },
              {
                  "id": 141888,
                  "name": "Basanti",
                  "latitude": "22.18915340",
                  "longitude": "88.67056850"
              },
              {
                  "id": 141889,
                  "name": "Basirhat",
                  "latitude": "22.65722222",
                  "longitude": "88.89416667"
              },
              {
                  "id": 141904,
                  "name": "Bawali",
                  "latitude": "22.42563000",
                  "longitude": "88.19336000"
              },
              {
                  "id": 141890,
                  "name": "Begampur",
                  "latitude": "22.74000000",
                  "longitude": "88.24000000"
              },
              {
                  "id": 141891,
                  "name": "Belda",
                  "latitude": "22.08000000",
                  "longitude": "87.35000000"
              },
              {
                  "id": 141892,
                  "name": "Beldanga",
                  "latitude": "23.93000000",
                  "longitude": "88.25000000"
              },
              {
                  "id": 141893,
                  "name": "Beliatore",
                  "latitude": "23.33333333",
                  "longitude": "87.21666667"
              },
              {
                  "id": 141894,
                  "name": "Berhampore",
                  "latitude": "24.10000000",
                  "longitude": "88.25000000"
              },
              {
                  "id": 141895,
                  "name": "Bhadreswar",
                  "latitude": "22.82000000",
                  "longitude": "88.35000000"
              },
              {
                  "id": 141896,
                  "name": "Bhandardaha",
                  "latitude": "22.62000000",
                  "longitude": "88.21000000"
              },
              {
                  "id": 141897,
                  "name": "Bhatpara",
                  "latitude": "22.86666667",
                  "longitude": "88.41666667"
              },
              {
                  "id": 141898,
                  "name": "Birbhum district",
                  "latitude": "24.00000000",
                  "longitude": "87.58333000"
              },
              {
                  "id": 141899,
                  "name": "Birpara",
                  "latitude": "26.50000000",
                  "longitude": "89.50000000"
              },
              {
                  "id": 141900,
                  "name": "Bishnupur",
                  "latitude": "22.38000000",
                  "longitude": "88.27000000"
              },
              {
                  "id": 141901,
                  "name": "Bolpur",
                  "latitude": "23.67000000",
                  "longitude": "87.72000000"
              },
              {
                  "id": 141902,
                  "name": "Budge Budge",
                  "latitude": "22.47000000",
                  "longitude": "88.17000000"
              },
              {
                  "id": 141905,
                  "name": "Canning",
                  "latitude": "22.32000000",
                  "longitude": "88.67000000"
              },
              {
                  "id": 141906,
                  "name": "Chakapara",
                  "latitude": "22.63000000",
                  "longitude": "88.35000000"
              },
              {
                  "id": 141907,
                  "name": "Chakdaha",
                  "latitude": "23.08000000",
                  "longitude": "88.52000000"
              },
              {
                  "id": 141908,
                  "name": "Champadanga",
                  "latitude": "22.83000000",
                  "longitude": "87.96000000"
              },
              {
                  "id": 141914,
                  "name": "Champahati",
                  "latitude": "22.40026000",
                  "longitude": "88.49209000"
              },
              {
                  "id": 141909,
                  "name": "Champdani",
                  "latitude": "22.80000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 141910,
                  "name": "Chandannagar",
                  "latitude": "22.86666667",
                  "longitude": "88.38333333"
              },
              {
                  "id": 141911,
                  "name": "Chandrakona",
                  "latitude": "22.73000000",
                  "longitude": "87.52000000"
              },
              {
                  "id": 141912,
                  "name": "Chittaranjan",
                  "latitude": "23.87000000",
                  "longitude": "86.87000000"
              },
              {
                  "id": 141913,
                  "name": "Churulia",
                  "latitude": "23.78000000",
                  "longitude": "87.08000000"
              },
              {
                  "id": 141915,
                  "name": "Contai",
                  "latitude": "21.78000000",
                  "longitude": "87.75000000"
              },
              {
                  "id": 141916,
                  "name": "Cooch Behar",
                  "latitude": "26.31666667",
                  "longitude": "89.43333333"
              },
              {
                  "id": 141917,
                  "name": "Cossimbazar",
                  "latitude": "24.12000000",
                  "longitude": "88.28000000"
              },
              {
                  "id": 141918,
                  "name": "Dakshin Dinajpur district",
                  "latitude": "25.22000000",
                  "longitude": "88.76000000"
              },
              {
                  "id": 141919,
                  "name": "Dalkola",
                  "latitude": "25.87577000",
                  "longitude": "87.84009000"
              },
              {
                  "id": 141920,
                  "name": "Dam Dam",
                  "latitude": "22.63333333",
                  "longitude": "88.42277778"
              },
              {
                  "id": 141921,
                  "name": "Darjeeling",
                  "latitude": "27.04166667",
                  "longitude": "88.26305556"
              },
              {
                  "id": 141922,
                  "name": "Daulatpur",
                  "latitude": "25.32605000",
                  "longitude": "88.32989000"
              },
              {
                  "id": 141923,
                  "name": "Debagram",
                  "latitude": "23.68333333",
                  "longitude": "88.28333333"
              },
              {
                  "id": 141924,
                  "name": "Debipur",
                  "latitude": "24.25029000",
                  "longitude": "88.61824000"
              },
              {
                  "id": 141925,
                  "name": "Dhaniakhali community development block",
                  "latitude": "22.97000000",
                  "longitude": "88.10000000"
              },
              {
                  "id": 141926,
                  "name": "Dhulagari",
                  "latitude": "22.58222222",
                  "longitude": "88.17111111"
              },
              {
                  "id": 141927,
                  "name": "Dhulian",
                  "latitude": "24.68000000",
                  "longitude": "87.97000000"
              },
              {
                  "id": 141928,
                  "name": "Dhupguri",
                  "latitude": "26.60000000",
                  "longitude": "89.02000000"
              },
              {
                  "id": 141929,
                  "name": "Diamond Harbour",
                  "latitude": "22.20000000",
                  "longitude": "88.20000000"
              },
              {
                  "id": 141930,
                  "name": "Digha",
                  "latitude": "21.68000000",
                  "longitude": "87.55000000"
              },
              {
                  "id": 141931,
                  "name": "Dinhata",
                  "latitude": "26.13000000",
                  "longitude": "89.47000000"
              },
              {
                  "id": 141932,
                  "name": "Domjur",
                  "latitude": "22.64000000",
                  "longitude": "88.22000000"
              },
              {
                  "id": 141933,
                  "name": "Dubrajpur",
                  "latitude": "23.80000000",
                  "longitude": "87.38000000"
              },
              {
                  "id": 141934,
                  "name": "Durgapur",
                  "latitude": "23.55000000",
                  "longitude": "87.32000000"
              },
              {
                  "id": 141935,
                  "name": "Egra",
                  "latitude": "21.90000000",
                  "longitude": "87.53000000"
              },
              {
                  "id": 141936,
                  "name": "Falakata",
                  "latitude": "26.53000000",
                  "longitude": "89.20000000"
              },
              {
                  "id": 141937,
                  "name": "Farakka",
                  "latitude": "24.81667000",
                  "longitude": "87.90000000"
              },
              {
                  "id": 141938,
                  "name": "Fort Gloster",
                  "latitude": "22.50444444",
                  "longitude": "88.18333333"
              },
              {
                  "id": 141939,
                  "name": "Gaighata community development block",
                  "latitude": "22.93000000",
                  "longitude": "88.73000000"
              },
              {
                  "id": 141940,
                  "name": "Gairkata",
                  "latitude": "26.68000000",
                  "longitude": "89.03000000"
              },
              {
                  "id": 141941,
                  "name": "Gangadharpur",
                  "latitude": "22.76040000",
                  "longitude": "88.22180000"
              },
              {
                  "id": 141942,
                  "name": "Gangarampur",
                  "latitude": "25.40000000",
                  "longitude": "88.52000000"
              },
              {
                  "id": 141943,
                  "name": "Garui",
                  "latitude": "22.63333333",
                  "longitude": "88.40000000"
              },
              {
                  "id": 141944,
                  "name": "Garulia",
                  "latitude": "22.82000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 141945,
                  "name": "Ghatal",
                  "latitude": "22.67000000",
                  "longitude": "87.72000000"
              },
              {
                  "id": 141946,
                  "name": "Giria",
                  "latitude": "24.51666667",
                  "longitude": "88.06666667"
              },
              {
                  "id": 141947,
                  "name": "Gobardanga",
                  "latitude": "22.87000000",
                  "longitude": "88.76000000"
              },
              {
                  "id": 141948,
                  "name": "Gobindapur",
                  "latitude": "22.59306000",
                  "longitude": "88.09139000"
              },
              {
                  "id": 141950,
                  "name": "Gopalpur",
                  "latitude": "22.61845000",
                  "longitude": "88.75119000"
              },
              {
                  "id": 141949,
                  "name": "Gopinathpur",
                  "latitude": "23.22000000",
                  "longitude": "88.15000000"
              },
              {
                  "id": 141951,
                  "name": "Gorubathan",
                  "latitude": "26.97000000",
                  "longitude": "88.70000000"
              },
              {
                  "id": 141952,
                  "name": "Gosaba",
                  "latitude": "22.16000000",
                  "longitude": "88.80000000"
              },
              {
                  "id": 141953,
                  "name": "Gosanimari",
                  "latitude": "26.15000000",
                  "longitude": "89.36666667"
              },
              {
                  "id": 141954,
                  "name": "Gurdaha",
                  "latitude": "22.73472222",
                  "longitude": "88.75944444"
              },
              {
                  "id": 141955,
                  "name": "Guskhara",
                  "latitude": "23.49277778",
                  "longitude": "87.73472222"
              },
              {
                  "id": 141956,
                  "name": "Habra",
                  "latitude": "22.83000000",
                  "longitude": "88.63000000"
              },
              {
                  "id": 141957,
                  "name": "Haldia",
                  "latitude": "22.06046000",
                  "longitude": "88.10975000"
              },
              {
                  "id": 141958,
                  "name": "Haldibari",
                  "latitude": "26.33000000",
                  "longitude": "88.77000000"
              },
              {
                  "id": 141959,
                  "name": "Halisahar",
                  "latitude": "22.95000000",
                  "longitude": "88.42000000"
              },
              {
                  "id": 141960,
                  "name": "Harindanga",
                  "latitude": "22.03333333",
                  "longitude": "88.31666667"
              },
              {
                  "id": 141961,
                  "name": "Haringhata",
                  "latitude": "22.95000000",
                  "longitude": "88.57000000"
              },
              {
                  "id": 141962,
                  "name": "Haripur",
                  "latitude": "22.93611000",
                  "longitude": "88.23194000"
              },
              {
                  "id": 141963,
                  "name": "Hasimara",
                  "latitude": "26.75000000",
                  "longitude": "89.35000000"
              },
              {
                  "id": 141964,
                  "name": "Hindusthan Cables Town",
                  "latitude": "23.82000000",
                  "longitude": "86.90000000"
              },
              {
                  "id": 141965,
                  "name": "Hooghly district",
                  "latitude": "22.91000000",
                  "longitude": "88.39000000"
              },
              {
                  "id": 141966,
                  "name": "Howrah",
                  "latitude": "22.57688000",
                  "longitude": "88.31857000"
              },
              {
                  "id": 141967,
                  "name": "Ichapur",
                  "latitude": "22.80499000",
                  "longitude": "88.37088000"
              },
              {
                  "id": 141968,
                  "name": "Indpur community development block",
                  "latitude": "23.16670000",
                  "longitude": "86.93330000"
              },
              {
                  "id": 141969,
                  "name": "Ingraj Bazar",
                  "latitude": "25.00447000",
                  "longitude": "88.14573000"
              },
              {
                  "id": 141970,
                  "name": "Islampur",
                  "latitude": "26.27000000",
                  "longitude": "88.20000000"
              },
              {
                  "id": 141971,
                  "name": "Jafarpur",
                  "latitude": "22.32000000",
                  "longitude": "88.23000000"
              },
              {
                  "id": 141972,
                  "name": "Jaigaon",
                  "latitude": "26.86666667",
                  "longitude": "89.38333333"
              },
              {
                  "id": 141973,
                  "name": "Jalpaiguri",
                  "latitude": "26.51666667",
                  "longitude": "88.73333333"
              },
              {
                  "id": 141974,
                  "name": "Jamuria",
                  "latitude": "23.70000000",
                  "longitude": "87.08000000"
              },
              {
                  "id": 141975,
                  "name": "Jangipur",
                  "latitude": "24.47001000",
                  "longitude": "88.07659000"
              },
              {
                  "id": 141976,
                  "name": "Jaynagar Majilpur",
                  "latitude": "22.17722222",
                  "longitude": "88.42583333"
              },
              {
                  "id": 141977,
                  "name": "Jejur",
                  "latitude": "22.88000000",
                  "longitude": "88.12000000"
              },
              {
                  "id": 141978,
                  "name": "Jhalida",
                  "latitude": "23.36541000",
                  "longitude": "85.97581000"
              },
              {
                  "id": 141979,
                  "name": "Jhargram",
                  "latitude": "22.45000000",
                  "longitude": "86.98000000"
              },
              {
                  "id": 141980,
                  "name": "Jhilimili",
                  "latitude": "22.81670000",
                  "longitude": "86.61670000"
              },
              {
                  "id": 141981,
                  "name": "Kakdwip",
                  "latitude": "21.88330000",
                  "longitude": "88.18330000"
              },
              {
                  "id": 141982,
                  "name": "Kalaikunda",
                  "latitude": "22.33916667",
                  "longitude": "87.22638889"
              },
              {
                  "id": 141983,
                  "name": "Kaliaganj",
                  "latitude": "25.63000000",
                  "longitude": "88.32000000"
              },
              {
                  "id": 141984,
                  "name": "Kalimpong",
                  "latitude": "27.07059000",
                  "longitude": "88.47529000"
              },
              {
                  "id": 141985,
                  "name": "Kalna",
                  "latitude": "23.22000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 141986,
                  "name": "Kalyani",
                  "latitude": "22.97500000",
                  "longitude": "88.43444444"
              },
              {
                  "id": 141987,
                  "name": "Kamarhati",
                  "latitude": "22.67000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 141988,
                  "name": "Kamarpukur",
                  "latitude": "22.91000000",
                  "longitude": "87.65000000"
              },
              {
                  "id": 141989,
                  "name": "Kanchrapara",
                  "latitude": "22.97000000",
                  "longitude": "88.43000000"
              },
              {
                  "id": 141990,
                  "name": "Kandi",
                  "latitude": "23.95000000",
                  "longitude": "88.03000000"
              },
              {
                  "id": 141991,
                  "name": "Karimpur",
                  "latitude": "23.96666667",
                  "longitude": "88.61666667"
              },
              {
                  "id": 141992,
                  "name": "Katwa",
                  "latitude": "23.65000000",
                  "longitude": "88.13000000"
              },
              {
                  "id": 141993,
                  "name": "Kenda",
                  "latitude": "23.20000000",
                  "longitude": "86.53000000"
              },
              {
                  "id": 141994,
                  "name": "Keshabpur",
                  "latitude": "22.97000000",
                  "longitude": "88.26000000"
              },
              {
                  "id": 141995,
                  "name": "Kharagpur",
                  "latitude": "22.33023900",
                  "longitude": "87.32365300"
              },
              {
                  "id": 141996,
                  "name": "Kharar",
                  "latitude": "22.70000000",
                  "longitude": "87.68000000"
              },
              {
                  "id": 141997,
                  "name": "Kharba",
                  "latitude": "25.42000000",
                  "longitude": "88.07000000"
              },
              {
                  "id": 141998,
                  "name": "Khardaha",
                  "latitude": "22.72000000",
                  "longitude": "88.38000000"
              },
              {
                  "id": 141999,
                  "name": "Khatra",
                  "latitude": "22.98000000",
                  "longitude": "86.85000000"
              },
              {
                  "id": 142000,
                  "name": "Kirnahar",
                  "latitude": "23.75000000",
                  "longitude": "87.87000000"
              },
              {
                  "id": 142001,
                  "name": "Kolkata",
                  "latitude": "22.54111111",
                  "longitude": "88.33777778"
              },
              {
                  "id": 142002,
                  "name": "Konnagar",
                  "latitude": "22.70000000",
                  "longitude": "88.35000000"
              },
              {
                  "id": 142003,
                  "name": "Krishnanagar",
                  "latitude": "23.40000000",
                  "longitude": "88.50000000"
              },
              {
                  "id": 142004,
                  "name": "Krishnapur",
                  "latitude": "22.67000000",
                  "longitude": "88.26000000"
              },
              {
                  "id": 142005,
                  "name": "Kshirpai",
                  "latitude": "22.71096640",
                  "longitude": "87.61740380"
              },
              {
                  "id": 142006,
                  "name": "Kulpi",
                  "latitude": "22.08000000",
                  "longitude": "88.24000000"
              },
              {
                  "id": 142007,
                  "name": "Kultali",
                  "latitude": "21.90000000",
                  "longitude": "88.40000000"
              },
              {
                  "id": 142008,
                  "name": "Kulti",
                  "latitude": "23.73000000",
                  "longitude": "86.85000000"
              },
              {
                  "id": 142009,
                  "name": "Kurseong",
                  "latitude": "26.88000000",
                  "longitude": "88.28000000"
              },
              {
                  "id": 142010,
                  "name": "Lalgarh",
                  "latitude": "22.58000000",
                  "longitude": "87.05000000"
              },
              {
                  "id": 142011,
                  "name": "Lalgola",
                  "latitude": "24.42000000",
                  "longitude": "88.25000000"
              },
              {
                  "id": 142012,
                  "name": "Loyabad",
                  "latitude": "23.67000000",
                  "longitude": "86.67000000"
              },
              {
                  "id": 142013,
                  "name": "Madanpur",
                  "latitude": "23.02000000",
                  "longitude": "88.48000000"
              },
              {
                  "id": 142014,
                  "name": "Madhyamgram",
                  "latitude": "22.70000000",
                  "longitude": "88.45000000"
              },
              {
                  "id": 142015,
                  "name": "Mahiari",
                  "latitude": "22.59000000",
                  "longitude": "88.24000000"
              },
              {
                  "id": 142016,
                  "name": "Mahishadal community development block",
                  "latitude": "22.18333300",
                  "longitude": "87.98333300"
              },
              {
                  "id": 142017,
                  "name": "Mainaguri",
                  "latitude": "26.57000000",
                  "longitude": "88.82000000"
              },
              {
                  "id": 142018,
                  "name": "Manikpara",
                  "latitude": "22.36666667",
                  "longitude": "87.11666667"
              },
              {
                  "id": 142019,
                  "name": "Masila",
                  "latitude": "22.58083000",
                  "longitude": "88.23278000"
              },
              {
                  "id": 142020,
                  "name": "Mathabhanga",
                  "latitude": "26.34197000",
                  "longitude": "89.21555000"
              },
              {
                  "id": 142021,
                  "name": "Matiali community development block",
                  "latitude": "26.92715900",
                  "longitude": "88.81330490"
              },
              {
                  "id": 142022,
                  "name": "Matigara community development block",
                  "latitude": "26.71666700",
                  "longitude": "88.38333300"
              },
              {
                  "id": 142023,
                  "name": "Medinipur",
                  "latitude": "22.43333333",
                  "longitude": "87.33333333"
              },
              {
                  "id": 142024,
                  "name": "Mejia community development block",
                  "latitude": "23.57000000",
                  "longitude": "87.10000000"
              },
              {
                  "id": 142025,
                  "name": "Memari",
                  "latitude": "23.20000000",
                  "longitude": "88.12000000"
              },
              {
                  "id": 142026,
                  "name": "Mirik",
                  "latitude": "26.88700000",
                  "longitude": "88.18700000"
              },
              {
                  "id": 142028,
                  "name": "Monoharpur",
                  "latitude": "22.68000000",
                  "longitude": "88.30000000"
              },
              {
                  "id": 142029,
                  "name": "Muragacha",
                  "latitude": "23.53631000",
                  "longitude": "88.39425000"
              },
              {
                  "id": 142030,
                  "name": "Muri",
                  "latitude": "23.37000000",
                  "longitude": "85.86000000"
              },
              {
                  "id": 142031,
                  "name": "Murshidabad",
                  "latitude": "24.18000000",
                  "longitude": "88.27000000"
              },
              {
                  "id": 142032,
                  "name": "Nabadwip",
                  "latitude": "23.40722222",
                  "longitude": "88.37777778"
              },
              {
                  "id": 142033,
                  "name": "Nabagram",
                  "latitude": "22.29000000",
                  "longitude": "88.51000000"
              },
              {
                  "id": 142034,
                  "name": "Nadia district",
                  "latitude": "23.40000000",
                  "longitude": "88.50000000"
              },
              {
                  "id": 142035,
                  "name": "Nagarukhra",
                  "latitude": "22.94099000",
                  "longitude": "88.63701000"
              },
              {
                  "id": 142036,
                  "name": "Nagrakata",
                  "latitude": "26.90000000",
                  "longitude": "88.96670000"
              },
              {
                  "id": 142037,
                  "name": "Naihati",
                  "latitude": "22.90000000",
                  "longitude": "88.42000000"
              },
              {
                  "id": 142038,
                  "name": "Naksalbari",
                  "latitude": "26.68333333",
                  "longitude": "88.21666667"
              },
              {
                  "id": 142039,
                  "name": "Nalhati",
                  "latitude": "24.30000000",
                  "longitude": "87.82000000"
              },
              {
                  "id": 142040,
                  "name": "Nalpur",
                  "latitude": "22.53000000",
                  "longitude": "88.19000000"
              },
              {
                  "id": 142041,
                  "name": "Namkhana community development block",
                  "latitude": "21.70000000",
                  "longitude": "88.14000000"
              },
              {
                  "id": 142042,
                  "name": "Nandigram",
                  "latitude": "22.01000000",
                  "longitude": "87.99000000"
              },
              {
                  "id": 142043,
                  "name": "Nangi",
                  "latitude": "22.50833333",
                  "longitude": "88.21527778"
              },
              {
                  "id": 142044,
                  "name": "Nayagram community development block",
                  "latitude": "22.03190000",
                  "longitude": "87.17810000"
              },
              {
                  "id": 142045,
                  "name": "North 24 Parganas district",
                  "latitude": "22.13000000",
                  "longitude": "88.50000000"
              },
              {
                  "id": 142046,
                  "name": "Odlabari",
                  "latitude": "26.83638889",
                  "longitude": "88.62944444"
              },
              {
                  "id": 142047,
                  "name": "Paikpara",
                  "latitude": "24.77121000",
                  "longitude": "87.92251000"
              },
              {
                  "id": 142048,
                  "name": "Panagarh",
                  "latitude": "23.45000000",
                  "longitude": "87.43000000"
              },
              {
                  "id": 142049,
                  "name": "Panchla",
                  "latitude": "22.54000000",
                  "longitude": "88.14000000"
              },
              {
                  "id": 142050,
                  "name": "Panchmura",
                  "latitude": "22.96670000",
                  "longitude": "87.16670000"
              },
              {
                  "id": 142051,
                  "name": "Pandua",
                  "latitude": "23.08000000",
                  "longitude": "88.28000000"
              },
              {
                  "id": 142052,
                  "name": "Panihati",
                  "latitude": "22.69000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 142053,
                  "name": "Panskura",
                  "latitude": "22.42000000",
                  "longitude": "87.70000000"
              },
              {
                  "id": 142054,
                  "name": "Parbatipur",
                  "latitude": "22.66250000",
                  "longitude": "88.22222000"
              },
              {
                  "id": 142055,
                  "name": "Paschim Medinipur district",
                  "latitude": "22.43333333",
                  "longitude": "87.33333333"
              },
              {
                  "id": 142056,
                  "name": "Patiram",
                  "latitude": "25.31666667",
                  "longitude": "88.75000000"
              },
              {
                  "id": 142062,
                  "name": "Patrasaer",
                  "latitude": "23.19697000",
                  "longitude": "87.53319000"
              },
              {
                  "id": 142057,
                  "name": "Patuli",
                  "latitude": "23.55000000",
                  "longitude": "88.25000000"
              },
              {
                  "id": 142058,
                  "name": "Pujali",
                  "latitude": "22.47000000",
                  "longitude": "88.15000000"
              },
              {
                  "id": 142059,
                  "name": "Puncha community development block",
                  "latitude": "23.12300000",
                  "longitude": "86.65300000"
              },
              {
                  "id": 142060,
                  "name": "Purba Medinipur district",
                  "latitude": "22.30000000",
                  "longitude": "87.91666667"
              },
              {
                  "id": 142061,
                  "name": "Purulia",
                  "latitude": "23.33333333",
                  "longitude": "86.36666667"
              },
              {
                  "id": 142063,
                  "name": "Raghudebbati",
                  "latitude": "22.53000000",
                  "longitude": "88.20000000"
              },
              {
                  "id": 142064,
                  "name": "Raghunathpur",
                  "latitude": "23.55000000",
                  "longitude": "86.67000000"
              },
              {
                  "id": 142065,
                  "name": "Raiganj",
                  "latitude": "25.61666667",
                  "longitude": "88.11666667"
              },
              {
                  "id": 142066,
                  "name": "Rajmahal",
                  "latitude": "25.05000000",
                  "longitude": "87.84000000"
              },
              {
                  "id": 142067,
                  "name": "Rajnagar community development block",
                  "latitude": "23.94720000",
                  "longitude": "87.36250000"
              },
              {
                  "id": 142068,
                  "name": "Ramchandrapur",
                  "latitude": "22.90000000",
                  "longitude": "88.48000000"
              },
              {
                  "id": 142069,
                  "name": "Ramjibanpur",
                  "latitude": "22.83000000",
                  "longitude": "87.62000000"
              },
              {
                  "id": 142075,
                  "name": "Ramnagar",
                  "latitude": "22.77778000",
                  "longitude": "88.24639000"
              },
              {
                  "id": 142070,
                  "name": "Rampur Hat",
                  "latitude": "24.17737000",
                  "longitude": "87.78275000"
              },
              {
                  "id": 142071,
                  "name": "Ranaghat",
                  "latitude": "23.18000000",
                  "longitude": "88.58000000"
              },
              {
                  "id": 142072,
                  "name": "Raniganj",
                  "latitude": "23.62000000",
                  "longitude": "87.13000000"
              },
              {
                  "id": 142073,
                  "name": "Raypur",
                  "latitude": "22.41083000",
                  "longitude": "88.50944000"
              },
              {
                  "id": 142074,
                  "name": "Rishra",
                  "latitude": "22.71000000",
                  "longitude": "88.35000000"
              },
              {
                  "id": 142076,
                  "name": "Sahapur",
                  "latitude": "22.52000000",
                  "longitude": "88.17000000"
              },
              {
                  "id": 142077,
                  "name": "Sainthia",
                  "latitude": "23.95000000",
                  "longitude": "87.67000000"
              },
              {
                  "id": 142078,
                  "name": "Salanpur community development block",
                  "latitude": "23.76702000",
                  "longitude": "86.87492000"
              },
              {
                  "id": 142079,
                  "name": "Sankarpur",
                  "latitude": "23.60000000",
                  "longitude": "87.20000000"
              },
              {
                  "id": 142080,
                  "name": "Sankrail",
                  "latitude": "22.57000000",
                  "longitude": "88.24000000"
              },
              {
                  "id": 142081,
                  "name": "Santipur",
                  "latitude": "23.25000000",
                  "longitude": "88.43000000"
              },
              {
                  "id": 142082,
                  "name": "Santoshpur",
                  "latitude": "22.50000000",
                  "longitude": "88.17000000"
              },
              {
                  "id": 142083,
                  "name": "Santuri community development block",
                  "latitude": "23.52720000",
                  "longitude": "86.85709000"
              },
              {
                  "id": 142084,
                  "name": "Sarenga",
                  "latitude": "22.54000000",
                  "longitude": "88.21000000"
              },
              {
                  "id": 142085,
                  "name": "Serampore",
                  "latitude": "22.75000000",
                  "longitude": "88.34000000"
              },
              {
                  "id": 142086,
                  "name": "Serpur",
                  "latitude": "24.13000000",
                  "longitude": "88.00000000"
              },
              {
                  "id": 142087,
                  "name": "Shyamnagar West Bengal",
                  "latitude": "22.83000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 142088,
                  "name": "Siliguri",
                  "latitude": "26.71004000",
                  "longitude": "88.42851000"
              },
              {
                  "id": 142089,
                  "name": "Singur",
                  "latitude": "22.81000000",
                  "longitude": "88.23000000"
              },
              {
                  "id": 142090,
                  "name": "Sodpur",
                  "latitude": "22.70416667",
                  "longitude": "88.39166667"
              },
              {
                  "id": 142091,
                  "name": "Solap",
                  "latitude": "22.12777778",
                  "longitude": "88.15861111"
              },
              {
                  "id": 142092,
                  "name": "Sonada",
                  "latitude": "27.00000000",
                  "longitude": "88.14000000"
              },
              {
                  "id": 142093,
                  "name": "Sonamukhi",
                  "latitude": "23.30000000",
                  "longitude": "87.42000000"
              },
              {
                  "id": 142094,
                  "name": "Sonarpur community development block",
                  "latitude": "22.44259000",
                  "longitude": "88.43044000"
              },
              {
                  "id": 142095,
                  "name": "South 24 Parganas district",
                  "latitude": "22.16197000",
                  "longitude": "88.43170000"
              },
              {
                  "id": 142096,
                  "name": "Srikhanda",
                  "latitude": "23.60000000",
                  "longitude": "88.08330000"
              },
              {
                  "id": 142097,
                  "name": "Srirampur",
                  "latitude": "23.35000000",
                  "longitude": "88.12000000"
              },
              {
                  "id": 142098,
                  "name": "Suri",
                  "latitude": "23.91666667",
                  "longitude": "87.53333333"
              },
              {
                  "id": 142099,
                  "name": "Swarupnagar community development block",
                  "latitude": "22.83330000",
                  "longitude": "88.86670000"
              },
              {
                  "id": 142100,
                  "name": "Takdah",
                  "latitude": "27.03330000",
                  "longitude": "88.36670000"
              },
              {
                  "id": 142101,
                  "name": "Taki",
                  "latitude": "22.59000000",
                  "longitude": "88.92000000"
              },
              {
                  "id": 142102,
                  "name": "Tamluk",
                  "latitude": "22.30000000",
                  "longitude": "87.91666667"
              },
              {
                  "id": 142103,
                  "name": "Tarakeswar",
                  "latitude": "22.89000000",
                  "longitude": "88.02000000"
              },
              {
                  "id": 142104,
                  "name": "Titagarh",
                  "latitude": "22.74000000",
                  "longitude": "88.37000000"
              },
              {
                  "id": 142105,
                  "name": "Tufanganj",
                  "latitude": "26.32000000",
                  "longitude": "89.67000000"
              },
              {
                  "id": 142106,
                  "name": "Tulin",
                  "latitude": "23.37000000",
                  "longitude": "85.90000000"
              },
              {
                  "id": 142107,
                  "name": "Uchalan",
                  "latitude": "23.03330000",
                  "longitude": "87.78330000"
              },
              {
                  "id": 142108,
                  "name": "Ula",
                  "latitude": "22.72250000",
                  "longitude": "88.55556000"
              },
              {
                  "id": 142109,
                  "name": "Uluberia",
                  "latitude": "22.47000000",
                  "longitude": "88.11000000"
              },
              {
                  "id": 142110,
                  "name": "Uttar Dinajpur district",
                  "latitude": "25.62000000",
                  "longitude": "88.12000000"
              },
              {
                  "id": 142111,
                  "name": "Uttarpara Kotrung",
                  "latitude": "22.67000000",
                  "longitude": "88.35000000"
              }
          ]
      }
  ]
}]

role: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {

  }
  ngOnInit(): void {
    // this.role = this.userService.loggedUser.role;
    
  }
  onMyOrders(){
    this.router.navigate(['/orders']);
  }
  onShopOrders(){
    this.router.navigate(['/shop/orders']);
  }

  onProfile() {
    // this.router.navigate(['profile'], { relativeTo: this.route });
    this.router.navigate(['/user/profile']);
  }
 
  onGeoData(){
    interface City {
      name: string;
    }
    
    interface State {
      name: string;
      cities: City[];
    }
    
    interface Country {
      countryName: string;
      states: State[];
    }

    let fromStorage = JSON.parse(localStorage.getItem('data'));
    console.log(fromStorage);
    let countries: Country[] = [];
  
    for (const cnt of fromStorage) {
      let country: Country = {
        countryName: cnt.name,
        states: [],
      };
  
      for (const st of cnt.states) {
        let cities: City[] = [];
  
        for (const city of st.cities) {
          if (city.name) {
            cities.push(city.name);
          }
        }
  
        let state: State = {
          name: st.name,
          cities: cities,
        };
  
        country.states.push(state);
      }
  
      countries.push(country);
    }
  
    localStorage.setItem('data', JSON.stringify(countries));
    localStorage.removeItem('countries');
  }
  



}




