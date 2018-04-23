import fontawesome from '@fortawesome/fontawesome';

import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';

import faClock from '@fortawesome/fontawesome-free-regular/faClock';

import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG';
import faPinterestP from '@fortawesome/fontawesome-free-brands/faPinterestP';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';



fontawesome.library.add({ faAngleDown, faPhone, faTimes, faMinus, faPlus });
fontawesome.library.add(faClock);
fontawesome.library.add({ faFacebookF, faInstagram, faGooglePlusG, faPinterestP, faTwitter })



/* HOMEMADE */


/*------------------------------------*\
    CLENDAR FOR DATEPICKER
\*------------------------------------*/
const calendarsDatePicker = document.querySelectorAll('.calendar-for-datepicker');

calendarsDatePicker.forEach(cal => cal.innerHTML = `<svg viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <ellipse id="path-1" cx="3.10913706" cy="6.17597293" rx="3.10913706" ry="3.08798646"></ellipse>
        <ellipse id="path-2" cx="3.10913706" cy="6.17597293" rx="3.10913706" ry="3.08798646"></ellipse>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="calendar">
            <path d="M0,6.21827411 L50,6.21827411 L50,50 L0,50 L0,6.21827411 Z M3.125,15.6000725 L3.125,46.8727339 L46.875,46.8727339 L46.875,15.6000725 L3.125,15.6000725 Z" id="calendar-body" fill="#000" class="to-fill"></path>
            <g id="accroche-left" transform="translate(9.263959, 0.000000)">
                <g id="bottom">
                    <use fill="#000" class="to-fill" fill-rule="evenodd" xlink:href="#path-1"></use>
                    <ellipse stroke="#FFFFFF" stroke-width="2" cx="3.10913706" cy="6.17597293" rx="4.10913706" ry="4.08798646"></ellipse>
                </g>
                <rect id="middle" fill="#000" class="to-fill" x="0" y="3.08798646" width="6.21827411" height="3.70558376"></rect>
                <ellipse id="top" fill="#000" class="to-fill" cx="3.10913706" cy="3.08798646" rx="3.10913706" ry="3.08798646"></ellipse>
            </g>
            <g id="accroche-right" transform="translate(34.263959, 0.000000)">
                <g id="bottom">
                    <use fill="#000" class="to-fill" fill-rule="evenodd" xlink:href="#path-2"></use>
                    <ellipse stroke="#FFFFFF" stroke-width="2" cx="3.10913706" cy="6.17597293" rx="4.10913706" ry="4.08798646"></ellipse>
                </g>
                <rect id="middle" fill="#000" class="to-fill" x="0" y="3.08798646" width="6.21827411" height="3.70558376"></rect>
                <ellipse id="top" fill="#000" class="to-fill" cx="3.10913706" cy="3.08798646" rx="3.10913706" ry="3.08798646"></ellipse>
            </g>
            <g id="squares" transform="translate(9.517766, 18.908629)" fill="#000" class="to-fill">
                <rect id="square-8" x="12.4365482" y="18.9086294" width="6.09137056" height="6.09137056"></rect>
                <rect id="square-7" x="0" y="18.9086294" width="6.09137056" height="6.09137056"></rect>
                <rect id="square-6" x="24.8730964" y="9.26395939" width="6.09137056" height="6.09137056"></rect>
                <rect id="square-5" x="12.4365482" y="9.26395939" width="6.09137056" height="6.09137056"></rect>
                <rect id="square-4" x="0" y="9.26395939" width="6.09137056" height="6.09137056"></rect>
                <rect id="square-3" x="24.8730964" y="0" width="6.09137056" height="6.09137056"></rect>
                <rect id="square-2" x="12.4365482" y="0" width="6.09137056" height="6.09137056"></rect>
                <rect id="square-1" x="0" y="0" width="6.09137056" height="6.09137056"></rect>
            </g>
        </g>
    </g>
</svg>
`)


/*------------------------------------*\
    CALENDAR FOR MENU
\*------------------------------------*/


const calendarsMenu = document.querySelectorAll('.calendar-for-menu');

calendarsMenu.forEach(cal => cal.innerHTML = `<svg viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M87.2714657,9.22862922 L74.3982248,9.22862922 L74.3982248,3.19798665 C74.3982248,1.57826292 73.0852333,0.265217391 71.4655762,0.265217391 C69.8459191,0.265217391 68.5329277,1.57826292 68.5329277,3.19798665 L68.5329277,9.06352518 L50.6111866,9.06352518 L50.6111866,3.19798665 C50.6111866,2.15020908 50.052227,1.18202266 49.1448623,0.658133866 C48.2374977,0.134245068 47.1195783,0.134245068 46.2122137,0.658133866 C45.3048491,1.18202266 44.7458894,2.15020908 44.7458895,3.19798665 L44.7458895,9.06352518 L26.984901,9.06352518 L26.984901,3.19798665 C26.984901,2.15020909 26.4259413,1.18202269 25.5185767,0.658133896 C24.6112121,0.134245106 23.4932928,0.134245106 22.5859281,0.658133896 C21.6785635,1.18202269 21.1196038,2.15020909 21.1196039,3.19798665 L21.1196039,9.06352518 L8.24636293,9.06352518 C3.86246588,9.12654799 0.323889782,12.6652698 0.260869565,17.0493473 L0.260869565,87.2793952 C0.268045629,91.686867 3.83907257,95.2580409 8.24636293,95.2652173 L87.2758104,95.2652173 C91.6831007,95.2580409 95.2541277,91.686867 95.2613037,87.2793952 L95.2613037,17.0493473 C95.1829604,12.6968281 91.624485,9.21367465 87.2714657,9.22862922 Z M89.2261581,87.28374 C89.2471961,87.8084531 89.047978,88.3180787 88.6766687,88.689405 C88.3053594,89.0607313 87.7957571,89.2599585 87.271068,89.2389195 L8.24632644,89.2389195 C7.72163734,89.2599585 7.21203512,89.0607313 6.84072579,88.689405 C6.46941645,88.3180787 6.27019839,87.8084531 6.29123634,87.28374 L6.29123634,17.0493473 C6.27019839,16.5246342 6.46941645,16.0150086 6.84072579,15.6436823 C7.21203512,15.272356 7.72163734,15.0731288 8.24632644,15.0941677 L21.1151639,15.0941677 L21.1151639,20.9597063 C21.115164,22.57943 22.4281494,23.8924754 24.047799,23.8924754 C25.6674487,23.8924754 26.9804341,22.57943 26.9804342,20.9597063 L26.9804342,15.0941677 L44.7413415,15.0941677 L44.7413415,20.9597063 C44.7413415,22.57943 46.054327,23.8924755 47.6739767,23.8924755 C49.2936263,23.8924755 50.6066118,22.57943 50.6066118,20.9597063 L50.6066118,15.0941677 L68.3675192,15.0941677 L68.3675192,20.9597063 C68.3675192,22.57943 69.6805046,23.8924755 71.3001543,23.8924755 C72.919804,23.8924755 74.2327894,22.57943 74.2327894,20.9597063 L74.2327894,15.0941677 L87.1103162,15.0941677 C87.6350053,15.0731288 88.1446075,15.272356 88.5159168,15.6436823 C88.8872262,16.0150086 89.0864442,16.5246342 89.0654063,17.0493473 L89.0654063,87.2793952 L89.2261581,87.28374 Z" id="Path_83" class="to-fill"></path>
            <rect id="Rectangle_38" x="20.9695652" y="35.8130435" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_39" x="20.9695652" y="50.6521739" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_40" x="20.9695652" y="65.4913043" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_41" x="41.8434783" y="65.4913043" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_42" x="41.8434783" y="50.6521739" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_43" x="41.8434783" y="35.8130435" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_44" x="62.5521739" y="65.4913043" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_45" x="62.5521739" y="50.6521739" width="11.9043478" height="8.96956522" class="to-fill"></rect>
            <rect id="Rectangle_46" x="62.5521739" y="35.8130435" width="11.9043478" height="8.96956522" class="to-fill"></rect>

</svg>

`)

/*------------------------------------*\
    PIN
\*------------------------------------*/

const mapPins = document.querySelectorAll('.map-pin');

mapPins.forEach(pin => pin.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 160" >
  <path class="to-fill" d="M64,2C41.91,2,24,19.08,24,40.15S64,126,64,126s40-64.77,40-85.85S86.09,2,64,2Zm0,51.67a15.1,15.1,0,1,1,15.1-15.1A15.1,15.1,0,0,1,64,53.67Z"/>
</svg>
`)

/*------------------------------------*\
    ARROW
\*------------------------------------*/

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => arrow.innerHTML = `<svg viewBox="0 0 44 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M43.5,9.5 L1.5,9.5" id="Line" class="to-stroke"></path>
  <path d="M10.5,0.5 L0.5,9.5" id="Line-2" class="to-stroke"></path>
  <path d="M10.5,9.5 L0.5,18.5" id="Line-2" class="to-stroke" transform="translate(5.500000, 14.000000) scale(1, -1) translate(-5.500000, -14.000000) "></path>
</svg>`)

/*------------------------------------*\
    SHOWER
\*------------------------------------*/

const showers = document.querySelectorAll('.shower');

showers.forEach(shower => shower.innerHTML = `<svg viewBox="0 0 21 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="douche" transform="translate(0.000000, 1.000000)" stroke="#000000" stroke-width="0.75">
            <path d="M11.8,6.6 C11.8,3.92141896 9.62858104,1.75 6.95,1.75 C4.27141896,1.75 2.1,3.92141896 2.1,6.6 L2.1,26.3" id="Path_118" class="to-stroke"></path>
            <path d="M13.6,6.6 C13.6000001,4.24204706 12.3420472,2.06320866 10.3000001,0.884232171 C8.25795292,-0.294744319 5.74204708,-0.294744319 3.69999994,0.884232171 C1.65795281,2.06320866 0.39999993,4.24204706 0.4,6.6 L0.4,26.3" id="Path_119" class="to-stroke"></path>
            <polygon id="Path_120" points="19.8 12.8 5.6 12.8 5.6 11.5 11.8 6.6 13.6 6.6 19.8 11.5" class="to-stroke"></polygon>
            <path d="M7,14.1 L7,15.9" id="Line_115" class="to-stroke"></path>
            <path d="M9,15 L9,16.8" id="Line_116" class="to-stroke"></path>
            <path d="M10,14.1 L10,15" id="Line_117" class="to-stroke"></path>
            <path d="M12,15 L12,16.8" id="Line_118" class="to-stroke"></path>
            <path d="M14,19.4 L14,20.3" id="Line_119" class="to-stroke"></path>
            <path d="M16,17.6 L16,18.5" id="Line_120" class="to-stroke"></path>
            <path d="M14,14.1 L14,15" id="Line_121" class="to-stroke"></path>
            <path d="M12,17.6 L12,18.5" id="Line_122" class="to-stroke"></path>
            <path d="M12,20.3 L12,22.1" id="Line_123" class="to-stroke"></path>
            <path d="M16,14.1 L16,16.8" id="Line_124" class="to-stroke"></path>
            <path d="M18,14.1 L18,15.9" id="Line_125" class="to-stroke"></path>
            <path d="M18,17.6 L18,19.4" id="Line_126" class="to-stroke"></path>
            <path d="M10,16.8 L10,19.4" id="Line_127" class="to-stroke"></path>
            <path d="M9,17.6 L9,18.5" id="Line_128" class="to-stroke"></path>
            <path d="M9,19.4 L9,21.2" id="Line_129" class="to-stroke"></path>
            <path d="M7,17.6 L7,18.5" id="Line_130" class="to-stroke"></path>
            <path d="M14,16.8 L14,18.5" id="Line_131" class="to-stroke"></path>
            <path d="M6.1,10.7 L19.3,10.7" id="Line_132" class="to-stroke"></path>
        </g>
    </g>
</svg>
`)

/*------------------------------------*\
    TERRASSE
\*------------------------------------*/
const terrasses = document.querySelectorAll('.terrasse');

terrasses.forEach(terrasse => terrasse.innerHTML = `<svg viewBox="0 0 34 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="terrasse" stroke-width="0.75" stroke="#000000" class="to-stroke">
            <polyline id="Path_121" points="3.9 20.6 10.8 20.6 10.9 26.2" class="to-stroke"></polyline>
            <path d="M3.9,20.6 L2.8,26.2" id="Line_133" class="to-stroke"></path>
            <path d="M3.9,20.6 L1,12.2" id="Line_134" class="to-stroke"></path>
            <polyline id="Path_122" points="8.9 20.6 6.9 18.6 3 18.6" class="to-stroke"></polyline>
            <polyline id="Path_123" points="30.1 20.6 23.2 20.6 23.1 26.2" class="to-stroke"></polyline>
            <path d="M30.1,20.6 L31.2,26.2" id="Line_135" class="to-stroke"></path>
            <path d="M30.1,20.6 L33,12.2" id="Line_136" class="to-stroke"></path>
            <polyline id="Path_124" points="25.2 20.6 27.1 18.6 31 18.6" class="to-stroke"></polyline>
            <path d="M0.2,25.7 L33.7,25.7" id="Line_137" class="to-stroke"></path>
            <path d="M13,19.7 L20.9,19.7" id="Line_138" class="to-stroke"></path>
            <path d="M16,26 L16,0.9" id="Line_139" class="to-stroke"></path>
            <path d="M12.5,9.8 C12.5,5.2 13.5,1.4 16.9,1.4 C20.3,1.4 21.3,5.1 21.3,9.8" id="Path_125" class="to-stroke"></path>
            <path d="M8.6,9.8 L25.3,9.8 C25.3,5.18842234 21.5615777,1.45 16.95,1.45 C12.3384223,1.45 8.6,5.18842234 8.6,9.8 Z" id="Path_126" class="to-stroke"></path>
        </g>
    </g>
</svg>
`)

/*------------------------------------*\
    M2
\*------------------------------------*/
const m2s = document.querySelectorAll('.m2');

m2s.forEach(m2 => m2.innerHTML = `<svg viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="m2" transform="translate(0.000000, -1.000000)" stroke-width="0.75" stroke="#000000">
            <g id="Group_159" transform="translate(0.000000, 0.700000)">
                <g id="Group_158">
                    <polyline id="Path_113" points="7.4 5.8 3.6 2 4.6 0.9 0.8 0.9 0.8 4.7 1.8 3.7 6.7 8.6" class="to-stroke"></polyline>
                    <polyline id="Path_114" points="15 16.9 19.6 21.4 18.5 22.5 22.3 22.5 22.3 18.6 21.3 19.7 16.1 14.5" class="to-stroke"></polyline>
                </g>
            </g>
            <g id="Group_161" transform="translate(0.000000, 0.700000)">
                <g id="Group_160">
                    <polyline id="Path_115" points="15.7 5.8 19.6 2 18.5 0.9 22.3 0.9 22.3 4.7 21.3 3.7 16.4 8.6" class="to-stroke"></polyline>
                    <polyline id="Path_116" points="8.1 16.9 3.6 21.4 4.6 22.5 0.8 22.5 0.8 18.6 1.8 19.7 7 14.5" class="to-stroke"></polyline>
                </g>
            </g>
        </g>
    </g>
</svg>`)

/*------------------------------------*\
    PERSONS
\*------------------------------------*/
const personsx2s = document.querySelectorAll('.personsx2');

personsx2s.forEach(personsx2 => personsx2.innerHTML = `<svg viewBox="0 0 28 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="persons-x2">
            <g id="2-persons" stroke="#000000" stroke-width="0.75">
                <path d="M5,29.7 L5,19.3" id="Line_114" stroke-linejoin="round" class="to-stroke"></path>
                <circle id="Ellipse_3" stroke-linejoin="round" cx="5.9" cy="3.3" r="2.3" class="to-stroke"></circle>
                <path d="M2.7,29.7 L2.7,17.9 L0.9,17.9 L0.9,10.6 C0.88886767,9.74794325 1.22243357,8.92752662 1.82498009,8.32498009 C2.42752662,7.72243357 3.24794325,7.38886767 4.1,7.4 L7.7,7.4 C8.55205675,7.38886767 9.37247338,7.72243357 9.97501991,8.32498009 C10.5775664,8.92752662 10.9111323,9.74794325 10.9,10.6 L10.9,17.9 L9,17.9 L9,29.7" id="Path_117" class="to-stroke"></path>
            </g>
            <g id="x-2" transform="translate(14.000000, 8.000000)" font-size="10" font-family="Roboto-Regular, Roboto" fill="#000000" font-weight="normal" class="to-fill">
                <text>
                    <tspan x="0.648" y="9.436">x 2</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>

`)


/*------------------------------------*\
    BED
\*------------------------------------*/

const beds = document.querySelectorAll('.bed');

beds.forEach(bed => bed.innerHTML = `<svg viewBox="0 0 21 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="bed" transform="translate(0.000000, 1.000000)" stroke="#222829" class="to-stroke">
            <path d="M20.48,10.035 L20.48,17.264 L19.103,17.264 L19.103,15.199 L1.89,15.199 L1.89,17.265 L0.513,17.265 L0.513,10.035 C0.510327785,9.3950128 0.763379571,8.78046604 1.2159228,8.3279228 C1.66846604,7.87537957 2.2830128,7.62232778 2.923,7.625 L18.07,7.625 C18.7099872,7.62232778 19.324534,7.87537957 19.7770772,8.3279228 C20.2296204,8.78046604 20.4826722,9.3950128 20.48,10.035 Z" id="bedbody" class="to-stroke"></path>
            <path d="M2.234,7.625 L2.234,2.461 C2.23132778,1.8210128 2.48437957,1.20646604 2.9369228,0.753922804 C3.38946604,0.301379571 4.0040128,0.0483277846 4.644,0.051 L16.344,0.051 C16.9839872,0.0483277846 17.598534,0.301379571 18.0510772,0.753922804 C18.5036204,1.20646604 18.7566722,1.8210128 18.754,2.461 L18.754,7.625" id="bedhead" class="to-stroke"></path>
            <g id="pillows" transform="translate(3.611000, 3.494000)" class="to-stroke">
                <path d="M-3.63478778e-17,3.1 L-3.63478778e-17,1.721 C-0.00569545816,1.26284015 0.173794166,0.821780101 0.497787134,0.497787134 C0.821780101,0.173794166 1.26284015,-0.00569545816 1.721,4.29615111e-17 L4.475,4.29615111e-17 C4.93384868,-0.00678414865 5.37595049,0.172224571 5.7008174,0.496338167 C6.02568431,0.820451763 6.2057189,1.26213681 6.2,1.721 L6.2,3.1" id="pillow_left" class="to-stroke"></path>
                <path d="M7.574,3.1 L7.574,1.721 C7.56830454,1.26284015 7.74779417,0.821780101 8.07178713,0.497787134 C8.3957801,0.173794166 8.83684015,-0.00569545816 9.295,1.58564568e-17 L12.049,1.58564568e-17 C12.5078487,-0.00678414865 12.9499505,0.172224571 13.2748174,0.496338167 C13.5996843,0.820451763 13.7797189,1.26213681 13.774,1.721 L13.774,3.1" id="pillow_right" class="to-stroke"></path>
            </g>
        </g>
    </g>
</svg>`)

/*------------------------------------*\
    PERSON
\*------------------------------------*/
const persons = document.querySelectorAll('.person');

persons.forEach(person => person.innerHTML = `<svg viewBox="0 0 12 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="person" transform="translate(0.000000, 1.000000)" stroke="#000000">
            <path d="M5,28.7 L5,18.3" id="Line_114" stroke-linejoin="round" class="to-stroke"></path>
            <circle id="Ellipse_3" stroke-linejoin="round" cx="5.9" cy="2.3" r="2.3" class="to-stroke"></circle>
            <path d="M2.7,28.7 L2.7,16.9 L0.9,16.9 L0.9,9.6 C0.88886767,8.74794325 1.22243357,7.92752662 1.82498009,7.32498009 C2.42752662,6.72243357 3.24794325,6.38886767 4.1,6.4 L7.7,6.4 C8.55205675,6.38886767 9.37247338,6.72243357 9.97501991,7.32498009 C10.5775664,7.92752662 10.9111323,8.74794325 10.9,9.6 L10.9,16.9 L9,16.9 L9,28.7" id="Path_117" class="to-stroke"></path>
        </g>
    </g>
</svg>`)


/*------------------------------------*\
    CHILD-HEAD
\*------------------------------------*/


const childHeads = document.querySelectorAll('.child-head');

childHeads.forEach(childHead => childHead.innerHTML = `<svg viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="0.75" fill="none" fill-rule="evenodd">
        <g id="child-head" stroke="#000000" class="to-stroke">
            <circle id="head" cx="6.608" cy="6.491" r="5.825" class="to-stroke"></circle>
            <path d="M4.666,5.666 L3.372,5.666" id="eye-left" class="to-stroke"></path>
            <path d="M9.843,5.666 L8.549,5.666" id="eye-right" class="to-stroke"></path>
            <path d="M7.902,8.432 C7.902,9.14693261 7.32243261,9.7265 6.6075,9.7265 C5.89256739,9.7265 5.313,9.14693261 5.313,8.432" id="smile" class="to-stroke"></path>
            <path d="M11.786,3.255 C10.9834284,3.66473685 10.0979717,3.88601552 9.197,3.902 C7.76963836,3.89597383 6.61402617,2.74036164 6.608,1.313 L6.608,0.666" id="hair-right" class="to-stroke"></path>
            <path d="M1.43,3.255 C2.23257162,3.66473685 3.11802831,3.88601552 4.019,3.902 C5.44636164,3.89597383 6.60197383,2.74036164 6.608,1.313 L6.608,0.666" id="hair-left" class="to-stroke"></path>
        </g>
    </g>
</svg>`)

/*------------------------------------*\
    ANGLE-UP
\*------------------------------------*/


const angleUps = document.querySelectorAll('.angle-up-icon');

angleUps.forEach(angleUp => angleUp.innerHTML = `<svg viewBox="0 0 93 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="angle-up" >
            <g transform="translate(9.000000, 6.000000)" id="Line" stroke-linecap="square">
                <path d="M19.2598846,-5.90811691 L19.2598846,44.0918831" transform="translate(19.259885, 19.091883) rotate(45.000000) translate(-19.259885, -19.091883) " class="to-stroke"></path>
                <path d="M29.6152237,19.0918831 L79.6152237,19.0918831" transform="translate(54.615224, 19.091883) rotate(45.000000) translate(-54.615224, -19.091883) " class="to-stroke"></path>
            </g>
            <rect id="background" x="0.5" y="0.5" width="92" height="51"></rect>
        </g>
    </g>
</svg>`)
