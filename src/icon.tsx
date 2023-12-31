interface IconProps {
    size?: number
}

export const Minimize = (props: IconProps) => {
    return (
        <svg
            aria-hidden="false"
            width={props.size}
            height={props.size}
            viewBox="0 0 12 12">
            <rect fill="currentColor" width="10" height="1" x="1" y="6" />
        </svg>
    )
}

export const Maximize = (props: IconProps) => {
    return (
        <svg
            aria-hidden="false"
            width={props.size}
            height={props.size}
            viewBox="0 0 12 12">
            <rect
                width="9"
                height="9"
                x="1.5"
                y="1.5"
                fill="none"
                stroke="currentColor"
            />
        </svg>
    )
}

export const Close = (props: IconProps) => {
    return (
        <svg
            aria-hidden="false"
            width={props.size}
            height={props.size}
            viewBox="0 0 12 12">
            <polygon
                fill="currentColor"
                fill-rule="evenodd"
                points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
            />
        </svg>
    )
}

export const FuturesIcon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={props.size}
            height={props.size}>
            <path
                d="M12.508,92.989c-3.584,0-6.5-2.916-6.5-6.5c0-3.068,2.137-5.646,5-6.325V29.54 c0-3.584,2.916-6.5,6.5-6.5h12c0.168,0,0.335,0.006,0.5,0.019V20.48c0-3.584,2.916-6.5,6.5-6.5h12c3.584,0,6.5,2.916,6.5,6.5 v22.527c0.165-0.013,0.332-0.019,0.5-0.019h12c0.168,0,0.335,0.006,0.5,0.019v-1.519c0-3.584,2.916-6.5,6.5-6.5h12 c3.584,0,6.5,2.916,6.5,6.5v39c2.347,0.981,4,3.301,4,6c0,3.584-2.916,6.5-6.5,6.5H12.508z"
                opacity=".35"
            />
            <path
                fill="#f2f2f2"
                d="M10.508,90.989c-3.584,0-6.5-2.916-6.5-6.5c0-3.068,2.137-5.646,5-6.325V27.54 c0-3.584,2.916-6.5,6.5-6.5h12c0.168,0,0.335,0.006,0.5,0.019V18.48c0-3.584,2.916-6.5,6.5-6.5h12c3.584,0,6.5,2.916,6.5,6.5 v22.527c0.165-0.013,0.332-0.019,0.5-0.019h12c0.168,0,0.335,0.006,0.5,0.019v-1.519c0-3.584,2.916-6.5,6.5-6.5h12 c3.584,0,6.5,2.916,6.5,6.5v39c2.347,0.981,4,3.301,4,6c0,3.584-2.916,6.5-6.5,6.5H10.508z"
            />
            <polygon
                fill="#96c362"
                points="27.008,83.989 15.508,83.989 15.508,27.539 27.508,27.539"
            />
            <polygon
                fill="#ffc571"
                points="27.008,83.989 15.508,83.989 15.508,27.539 27.508,27.539"
            />
            <polygon
                fill="#ffc571"
                points="65.508,84.489 54.008,84.489 53.508,47.489 65.508,47.489"
            />
            <polygon
                fill="#ff7575"
                points="84.508,84.489 73.008,84.489 72.508,39.489 84.508,39.489"
            />
            <rect
                width="12"
                height="56.949"
                x="15.508"
                y="27.539"
                fill="none"
                stroke="#40396e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
            />
            <polygon
                fill="#ff7575"
                points="46.008,83.989 34.508,83.989 34.508,18.48 46.508,18.48"
            />
            <rect
                width="12"
                height="66.008"
                x="34.508"
                y="18.48"
                fill="none"
                stroke="#40396e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
            />
            <rect
                width="12"
                height="37"
                x="53.508"
                y="47.489"
                fill="none"
                stroke="#40396e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
            />
            <rect
                width="12"
                height="45"
                x="72.508"
                y="39.489"
                fill="none"
                stroke="#40396e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
            />
            <line
                x1="10.508"
                x2="88.508"
                y1="84.489"
                y2="84.489"
                fill="none"
                stroke="#40396e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
            />
        </svg>
    )
}

export const SettingIcon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={props.size}
            height={props.size}>
            <path
                d="M40.5,95c-4.687,0-8.5-3.813-8.5-8.5V72H17.5C12.813,72,9,68.187,9,63.5	v-23c0-4.687,3.813-8.5,8.5-8.5H32V17.5c0-4.687,3.813-8.5,8.5-8.5h23c4.687,0,8.5,3.813,8.5,8.5V32h14.5c4.687,0,8.5,3.813,8.5,8.5	v23c0,4.687-3.813,8.5-8.5,8.5H72v14.5c0,4.687-3.813,8.5-8.5,8.5H40.5z"
                opacity=".35"
            />
            <path
                fill="#f2f2f2"
                d="M38.5,93c-4.687,0-8.5-3.813-8.5-8.5V70H15.5C10.813,70,7,66.187,7,61.5v-23	c0-4.687,3.813-8.5,8.5-8.5H30V15.5c0-4.687,3.813-8.5,8.5-8.5h23c4.687,0,8.5,3.813,8.5,8.5V30h14.5c4.687,0,8.5,3.813,8.5,8.5v23	c0,4.687-3.813,8.5-8.5,8.5H70v14.5c0,4.687-3.813,8.5-8.5,8.5H38.5z"
            />
            <path
                fill="#9ba7c5"
                d="M84.5,36.5h-21v-21c0-1.105-0.895-2-2-2h-23c-1.105,0-2,0.895-2,2v21h-21c-1.105,0-2,0.895-2,2v23	c0,1.105,0.895,2,2,2h21v21c0,1.105,0.895,2,2,2h23c1.105,0,2-0.895,2-2v-21h21c1.105,0,2-0.895,2-2v-23	C86.5,37.395,85.605,36.5,84.5,36.5z"
            />
            <path
                fill="#40396e"
                d="M62,63.5h22.5c1.105,0,2-0.895,2-2V59H64	c-1.105,0-2,0.895-2,2V63.5z"
                opacity=".35"
            />
            <path
                fill="#40396e"
                d="M15.5,63.5H38V61c0-1.105-0.895-2-2-2H13.5v2.5	C13.5,62.605,14.395,63.5,15.5,63.5z"
                opacity=".35"
            />
            <path
                fill="#40396e"
                d="M38.5,86.5h23c1.105,0,2-0.895,2-2V82h-27v2.5	C36.5,85.605,37.395,86.5,38.5,86.5z"
                opacity=".35"
            />
            <path
                fill="#40396e"
                d="M61.5,88h-23c-1.93,0-3.5-1.57-3.5-3.5V65H15.5c-1.93,0-3.5-1.57-3.5-3.5v-23	c0-1.93,1.57-3.5,3.5-3.5H35V15.5c0-1.93,1.57-3.5,3.5-3.5h23c1.93,0,3.5,1.57,3.5,3.5V35h19.5c1.93,0,3.5,1.57,3.5,3.5v23	c0,1.93-1.57,3.5-3.5,3.5H65v19.5C65,86.43,63.43,88,61.5,88z M15.5,38c-0.276,0-0.5,0.224-0.5,0.5v23c0,0.275,0.224,0.5,0.5,0.5h21	c0.829,0,1.5,0.672,1.5,1.5v21c0,0.275,0.224,0.5,0.5,0.5h23c0.275,0,0.5-0.225,0.5-0.5v-21c0-0.828,0.672-1.5,1.5-1.5h21	c0.275,0,0.5-0.225,0.5-0.5v-23c0-0.276-0.225-0.5-0.5-0.5h-21c-0.828,0-1.5-0.671-1.5-1.5v-21c0-0.276-0.225-0.5-0.5-0.5h-23	c-0.276,0-0.5,0.224-0.5,0.5v21c0,0.829-0.671,1.5-1.5,1.5H15.5z"
            />
        </svg>
    )
}

export const AboutIcon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={props.size}
            height={props.size}>
            <path
                d="M60.551,97c-3.629,0-6.77-2.532-7.639-6.157c-0.596-2.485-0.045-4.935,1.393-6.775	c-0.947,0.024-1.763,0.03-2.305,0.03c-0.542,0,0.947,0.387,0,0.363c1.438,1.841-0.316,3.897-0.912,6.382	C50.219,94.468,47.078,97,43.449,97l-0.15-0.002c-8.198-0.015-15.343-3.509-18.213-8.909c-0.849-1.598-1.283-3.297-1.307-5.015	c-0.35,0.02-0.709,0.029-1.078,0.029c-0.522,0-1.065-0.021-1.622-0.062c-0.341,0.046-0.69,0.068-1.046,0.068	c-5.355,0-14.029-6.039-15.563-12.214c-0.918-3.698,0.633-7.132,4.052-8.986c-2.727-3.272-4.965-8.557-4.69-13.109	c0.229-3.779,2.183-6.854,5.361-8.436l0.573-0.285l0.022-0.004c-2.364-11.882,1.26-19.689,4.822-24.211	C20.911,7.867,30.63,5.029,37.038,5.029c7.903,0,10.056,4.031,10.614,5.764c0.571,1.772,0.629,4.206-1.35,6.926	c0.475,1.335,0.641,2.836,0.458,4.428c-0.035,0.303-0.083,0.607-0.143,0.915c0.289-0.034,0.584-0.052,0.882-0.052	c1.687,0,3.246,0.56,4.5,1.504c1.254-0.944,2.813-1.504,4.5-1.504c0.298,0,0.593,0.018,0.882,0.052	c-0.06-0.308-0.108-0.612-0.143-0.915c-0.183-1.592-0.017-3.092,0.458-4.428c-1.979-2.721-1.922-5.154-1.351-6.926	c0.559-1.733,2.711-5.764,10.615-5.764c6.408,0,16.126,2.838,22.427,10.835c3.562,4.521,7.186,12.33,4.822,24.211l0.022,0.004	l0.573,0.285c3.178,1.582,5.132,4.656,5.361,8.436c0.275,4.553-1.963,9.837-4.69,13.109c3.418,1.854,4.97,5.288,4.052,8.986	c-1.534,6.175-10.208,12.214-15.563,12.214c0,0,0,0,0,0c-0.356,0-0.705-0.022-1.046-0.068c-0.556,0.042-1.099,0.062-1.622,0.062	c-0.369,0-0.728-0.01-1.078-0.029c-0.024,1.718-0.458,3.417-1.307,5.015c-2.866,5.394-9.996,8.886-18.181,8.909L60.551,97z"
                opacity=".35"
            />
            <path
                fill="#f2f2f2"
                d="M58.551,95c-3.629,0-6.77-2.532-7.639-6.157c-0.596-2.485-0.045-4.935,1.393-6.775	c-0.947,0.024-1.763,0.03-2.305,0.03c-0.542,0-1.358-0.006-2.305-0.03c1.438,1.841,1.988,4.29,1.393,6.775	C48.219,92.468,45.078,95,41.449,95l-0.15-0.002c-8.198-0.015-15.343-3.509-18.213-8.909c-0.849-1.598-1.283-3.297-1.307-5.015	c-0.35,0.02-0.709,0.029-1.078,0.029c-0.522,0-1.065-0.021-1.622-0.062c-0.341,0.046-0.69,0.068-1.046,0.068	c-5.355,0-14.029-6.039-15.563-12.214c-0.918-3.698,0.633-7.132,4.052-8.986c-2.727-3.272-4.965-8.557-4.69-13.109	c0.229-3.779,2.183-6.854,5.361-8.436l0.573-0.285l0.022-0.004c-2.364-11.882,1.26-19.689,4.822-24.211	C18.911,5.867,28.63,3.029,35.038,3.029c7.903,0,10.056,4.031,10.614,5.764c0.571,1.772,0.629,4.206-1.35,6.926	c0.475,1.335,0.641,2.836,0.458,4.428c-0.035,0.303-0.083,0.607-0.143,0.915c0.289-0.034,0.584-0.052,0.882-0.052	c1.687,0,3.246,0.56,4.5,1.504c1.254-0.944,2.813-1.504,4.5-1.504c0.298,0,0.593,0.018,0.882,0.052	c-0.06-0.308-0.108-0.612-0.143-0.915c-0.183-1.592-0.017-3.092,0.458-4.428c-1.979-2.721-1.922-5.154-1.351-6.926	c0.559-1.733,2.711-5.764,10.615-5.764c6.408,0,16.126,2.838,22.427,10.835c3.562,4.521,7.186,12.33,4.822,24.211l0.022,0.004	l0.573,0.285c3.178,1.582,5.132,4.656,5.361,8.436c0.275,4.553-1.963,9.837-4.69,13.109c3.418,1.854,4.97,5.288,4.052,8.986	c-1.534,6.175-10.208,12.214-15.563,12.214c0,0,0,0,0,0c-0.356,0-0.705-0.022-1.046-0.068c-0.556,0.042-1.099,0.062-1.622,0.062	c-0.369,0-0.728-0.01-1.078-0.029c-0.024,1.718-0.458,3.417-1.307,5.015c-2.866,5.394-9.996,8.886-18.181,8.909L58.551,95z"
            />
            <path
                fill="#f4665c"
                d="M24.427,19.64c0,0,5.126,3.381,12.28-2.503c0.546-0.449,1.372-0.02,1.287,0.681	c-0.489,4.038-4.232,13.19-19.216,13.19L24.427,19.64z"
            />
            <path
                fill="#f4665c"
                d="M25.353,50.278l-8.567-7.659c-2.294-2.051-2.391-5.601-0.211-7.772l0,0 c2.192-2.184,5.779-2.073,7.831,0.242L32,43.657L25.353,50.278z"
            />
            <path
                fill="#f4665c"
                d="M74.647,50.278l8.567-7.659c2.294-2.051,2.391-5.601,0.211-7.772l0,0 c-2.192-2.184-5.779-2.073-7.831,0.242L68,43.657L74.647,50.278z"
            />
            <circle cx="45.5" cy="28.509" r="2.5" fill="#40396e" />
            <circle cx="54.5" cy="28.509" r="2.5" fill="#40396e" />
            <path
                fill="#ff7575"
                d="M13.549,56.852c0.161,1.909,1.687,3.352,3.451,3.157l8.183-0.904l1.256-7.333L17,53.045 c-0.151-0.017-0.297-0.003-0.444,0.004c-3.1-2.906-4.957-6.155-5.961-8.414c-0.333-0.749-1.449-0.558-1.517,0.26 C8.786,48.405,9.127,54.005,13.549,56.852z"
            />
            <path
                fill="#ff7575"
                d="M31.749,61.414l-10.651,5.822c-0.658,0.373-1.153,0.921-1.463,1.553 c-4.075-0.481-7.305-1.909-9.348-3.086c-0.708-0.408-1.583,0.474-1.19,1.199c1.856,3.423,5.786,8.455,12.258,6.754 c1.211,0.565,2.697,0.456,3.823-0.469l9.597-7.53L31.749,61.414z"
            />
            <path
                fill="#ff7575"
                d="M45,71.41l-3.476-3.878l-9.94,6.966c-1.166,0.844-1.668,2.253-1.427,3.58 c-0.813,0.238-1.459,0.809-1.406,2.05c0.286,6.695,9.286,7.943,13.51,7.878c0.847-0.013,1.184-1.057,0.457-1.42 c-2.113-1.054-5.07-2.914-7.602-5.84c0.427-0.181,0.832-0.435,1.18-0.792L45,71.41z"
            />
            <path
                fill="#ff7575"
                d="M83,60.009c1.764,0.195,3.29-1.249,3.451-3.157c4.422-2.848,4.763-8.447,4.47-11.958 c-0.068-0.817-1.184-1.009-1.517-0.26c-1.004,2.259-2.861,5.508-5.961,8.414c-0.147-0.007-0.293-0.02-0.444-0.004l-9.439-1.273 l1.256,7.333L83,60.009z"
            />
            <path
                fill="#ff7575"
                d="M89.712,65.703c-2.043,1.177-5.274,2.605-9.348,3.086c-0.31-0.632-0.805-1.18-1.463-1.553 l-10.651-5.822l-3.026,4.244l9.597,7.53c1.127,0.925,2.612,1.033,3.823,0.469c6.472,1.701,10.402-3.331,12.258-6.754 C91.295,66.178,90.42,65.295,89.712,65.703z"
            />
            <path
                fill="#ff7575"
                d="M69.843,78.079c0.241-1.328-0.26-2.736-1.427-3.58l-9.94-6.966L55,71.41l8.704,8.545 c0.348,0.357,0.753,0.611,1.18,0.792c-2.532,2.925-5.49,4.786-7.602,5.84c-0.727,0.363-0.39,1.407,0.457,1.42 c4.223,0.065,13.224-1.182,13.51-7.878C71.302,78.888,70.656,78.316,69.843,78.079z"
            />
            <circle cx="48.5" cy="56.5" r="2.5" fill="#40396e" opacity=".35" />
            <circle cx="53.5" cy="65.5" r="2.5" fill="#40396e" opacity=".35" />
            <circle cx="43" cy="65" r="2" fill="#40396e" opacity=".35" />
            <circle cx="58.5" cy="58.5" r="1.5" fill="#40396e" opacity=".35" />
            <path
                fill="#40396e"
                d="M24.427,19.64c0,0,5.126,3.381,12.28-2.503c0.546-0.449,1.372-0.02,1.287,0.681	c-0.489,4.038-4.232,13.19-19.216,13.19L24.427,19.64z"
                opacity=".35"
            />
            <path
                fill="#f4665c"
                d="M21,34.009c0,0-0.692-1.195-0.483-2.513c0.505-3.193,6.717-10.441,7.034-10.806	c2.031-2.339,4.917-4.426,11.048-8.574c0.729-0.493,0.456-1.62-0.409-1.785C34.088,9.548,24.973,9.113,19,16.763	c-8,10.247-4,21.247-4,21.247L21,34.009z"
            />
            <path
                fill="#f4665c"
                d="M75.545,19.64c0,0-5.126,3.381-12.28-2.503c-0.546-0.449-1.372-0.02-1.287,0.681	c0.489,4.038,4.232,13.19,19.216,13.19L75.545,19.64z"
            />
            <path
                fill="#40396e"
                d="M75.545,19.64c0,0-5.126,3.381-12.28-2.503c-0.546-0.449-1.372-0.02-1.287,0.681	c0.489,4.038,4.232,13.19,19.216,13.19L75.545,19.64z"
                opacity=".35"
            />
            <path
                fill="#f4665c"
                d="M78.972,34.009c0,0,0.692-1.195,0.483-2.513c-0.505-3.193-6.487-10.123-6.79-10.5	c-2.652-3.301-5.161-4.732-11.292-8.88c-0.729-0.493-0.456-1.62,0.409-1.785c4.103-0.783,13.218-1.218,19.191,6.432	c8,10.247,4,21.247,4,21.247L78.972,34.009z"
            />
            <path
                fill="#40396e"
                d="M91.05,64.281c-0.71-0.376-1.554-0.454-2.316-0.202c-2.2,0.727-3.986,2.111-7.434,2.554	c-0.813-1.08-4.774-2.889-5.936-3.611c0.468-0.568,0.903-1.136,1.302-1.701c3.847,0.421,10.44,2.147,11.606-3.308	c3.127-2.06,7.968-12.355,2.307-15.172c-1.32-0.277-2.711,0.392-3.305,1.637c-0.826,1.714-2.272,4.175-4.578,6.508l-2.783-0.376	c-0.066-0.69-0.174-1.38-0.324-2.067c0,0,5.411-3.388,7.378-9.893c8.585-35.669-41.18-35.317-24.509-23.325	c-6.15,2.499,0.714,15.25,13.053,17.206c-1.078,0.621-3.069,3.169-3.955,4.101C66.077,32.257,58.039,30.01,50,30.009	c-8.039,0-16.077,2.247-21.555,6.621c-0.886-0.932-2.877-3.479-3.955-4.101c12.338-1.955,19.202-14.706,13.053-17.206	C54.214,3.333,4.448,2.981,13.034,38.65c1.966,6.506,7.378,9.893,7.378,9.893c-0.15,0.687-0.258,1.377-0.324,2.067l-2.783,0.376	c-2.305-2.333-3.752-4.794-4.578-6.508c-0.594-1.244-1.984-1.914-3.305-1.637c-5.661,2.818-0.819,13.113,2.307,15.172	c1.167,5.455,7.759,3.729,11.606,3.308c0.399,0.565,0.834,1.132,1.302,1.701c-1.162,0.722-5.123,2.53-5.936,3.611	c-3.448-0.443-5.234-1.828-7.434-2.554c-0.762-0.252-1.607-0.173-2.316,0.202c-6.235,3.302,6.023,12.974,9.867,11.716	c6.379,0.686,8.769-2.014,13.409-5.797c0.311,0.244,0.63,0.489,0.957,0.736c-2.073,1.392-5.051,3.189-5.067,5.985	c-4.663,6.906,3.552,13.077,13.235,13.077c3.01,0.097,4.137-4.26,1.444-5.629c-1.273-0.7-2.998-1.807-4.686-3.392l4.388-4.308	c1.709,0.285,4.606,0.428,7.503,0.428s5.793-0.143,7.503-0.428l4.388,4.308c-1.688,1.585-3.413,2.692-4.686,3.392	c-2.693,1.369-1.566,5.725,1.444,5.629c9.683-0.001,17.898-6.172,13.235-13.077c-0.016-2.796-2.994-4.593-5.067-5.985	c0.326-0.247,0.645-0.492,0.957-0.736c4.64,3.783,7.031,6.483,13.409,5.797C85.026,77.255,97.285,67.583,91.05,64.281z M78.549,72.597c-2.365,1.883-7.655-4.01-10.134-5.817c-0.366-0.267-0.853-0.257-1.204,0.03c-1.38,1.13-2.9,2.272-4.453,3.381	c-0.574,0.41-0.557,1.262,0.032,1.65c2.571,1.693,7.32,4.029,5.908,6.945c0.694,0.257,1.658,0.19,1.552,1.3	c-0.259,6.077-9.011,6.824-11.601,6.912c2.276-1.162,5.659-3.793,7.889-6.634c-1.724-0.208-6.025-5.001-7.831-6.745	c-0.253-0.244-0.613-0.345-0.95-0.245C55.96,73.911,52.98,74.179,50,74.179s-5.96-0.268-7.756-0.804	c-0.337-0.101-0.697,0-0.95,0.245c-1.806,1.744-6.107,6.537-7.831,6.745c2.23,2.841,5.612,5.472,7.889,6.634	c-2.59-0.088-11.341-0.835-11.601-6.912c-0.107-1.11,0.858-1.043,1.552-1.3c-1.412-2.916,3.338-5.252,5.908-6.945	c0.59-0.388,0.607-1.24,0.032-1.65c-1.553-1.11-3.073-2.251-4.453-3.381c-0.351-0.287-0.838-0.297-1.204-0.03	c-2.479,1.807-7.769,7.701-10.134,5.817c-4.845,1.74-9.407-2.071-11.273-5.809c2.095,1.209,6.034,2.735,10.044,3.076	c0.178-1.625,5.518-4.036,8.066-5.376c0.583-0.306,0.722-1.082,0.272-1.562c-1.303-1.389-2.521-2.867-3.45-4.334	c-0.189-0.298-0.509-0.48-0.861-0.46c-2.927,0.168-10.065,2.677-9.745-1.855c-3.991-2.218-4.673-7.302-4.48-10.498	c1.074,2.284,3.184,5.609,6.156,8.287c0.365,0.074,4.173-0.459,5.973-0.708c0.502-0.069,0.855-0.504,0.856-1.011	c0.004-1.367,0.188-2.744,0.56-4.09c0.119-0.43-0.049-0.878-0.422-1.123C6.903,36.493,16.238,6.856,38.003,11.313	c-5.52,3.821-8.008,6.489-10.695,9.683c-0.635,0.755,0.088,1.881,1.039,1.62c3-0.827,5.777-2.079,8.564-4.358	c-0.162,2.364-3.769,10.822-15.206,11.641c-0.411,0.029-0.78,0.296-0.909,0.688c-0.298,0.903-0.502,1.71-0.661,2.487	c-0.11,0.538,0.247,1.048,0.784,1.162c2.374,0.504,4.84,3.863,6.518,5.805c0.372,0.431,1.013,0.454,1.434,0.071	c5.164-4.696,13.147-7.104,21.13-7.104s15.966,2.408,21.13,7.104c0.421,0.383,1.062,0.359,1.434-0.071	c1.677-1.942,4.143-5.301,6.518-5.805c0.538-0.114,0.894-0.624,0.784-1.162c-0.159-0.777-0.363-1.584-0.661-2.487	c-0.129-0.392-0.498-0.658-0.909-0.688c-11.437-0.819-15.044-9.277-15.206-11.641c2.787,2.279,5.564,3.531,8.564,4.358	c0.951,0.262,1.674-0.865,1.039-1.62c-2.687-3.193-5.175-5.861-10.695-9.683c21.765-4.457,31.1,25.18,14.856,35.822	c-0.373,0.244-0.54,0.693-0.422,1.123c0.372,1.346,0.556,2.723,0.56,4.09c0.001,0.507,0.354,0.941,0.856,1.011	c1.799,0.249,5.607,0.782,5.973,0.708c2.972-2.678,5.082-6.003,6.156-8.287c0.193,3.196-0.49,8.28-4.48,10.498	c0.319,4.531-6.818,2.023-9.745,1.855c-0.352-0.02-0.672,0.162-0.861,0.46c-0.929,1.467-2.147,2.945-3.45,4.334	c-0.451,0.48-0.311,1.256,0.272,1.562c2.548,1.34,7.889,3.751,8.066,5.376c4.009-0.341,7.949-1.867,10.044-3.076	C87.956,70.526,83.394,74.337,78.549,72.597z"
            />
            <g opacity=".35">
                <path
                    fill="#40396e"
                    d="M13.549,56.852c0.161,1.909,1.687,3.352,3.451,3.157l8.183-0.904l1.256-7.333L17,53.045 c-0.151-0.017-0.297-0.003-0.444,0.004c-3.1-2.906-4.957-6.155-5.961-8.414c-0.333-0.749-1.449-0.558-1.517,0.26 C8.786,48.405,9.127,54.005,13.549,56.852z"
                />
                <path
                    fill="#40396e"
                    d="M31.749,61.414l-10.651,5.822c-0.658,0.373-1.153,0.921-1.463,1.553 c-4.075-0.481-7.305-1.909-9.348-3.086c-0.708-0.408-1.583,0.474-1.19,1.199c1.856,3.423,5.786,8.455,12.258,6.754 c1.211,0.565,2.697,0.456,3.823-0.469l9.597-7.53L31.749,61.414z"
                />
                <path
                    fill="#40396e"
                    d="M45,71.41l-3.476-3.878l-9.94,6.966c-1.166,0.844-1.668,2.253-1.427,3.58 c-0.813,0.238-1.459,0.809-1.406,2.05c0.286,6.695,9.286,7.943,13.51,7.878c0.847-0.013,1.184-1.057,0.457-1.42 c-2.113-1.054-5.07-2.914-7.602-5.84c0.427-0.181,0.832-0.435,1.18-0.792L45,71.41z"
                />
                <path
                    fill="#40396e"
                    d="M83,60.009c1.764,0.195,3.29-1.249,3.451-3.157c4.422-2.848,4.763-8.447,4.47-11.958 c-0.068-0.817-1.184-1.009-1.517-0.26c-1.004,2.259-2.861,5.508-5.961,8.414c-0.147-0.007-0.293-0.02-0.444-0.004l-9.439-1.273 l1.256,7.333L83,60.009z"
                />
                <path
                    fill="#40396e"
                    d="M89.712,65.703c-2.043,1.177-5.274,2.605-9.348,3.086c-0.31-0.632-0.805-1.18-1.463-1.553 l-10.651-5.822l-3.026,4.244l9.597,7.53c1.127,0.925,2.612,1.033,3.823,0.469c6.472,1.701,10.402-3.331,12.258-6.754 C91.295,66.178,90.42,65.295,89.712,65.703z"
                />
                <path
                    fill="#40396e"
                    d="M69.843,78.079c0.241-1.328-0.26-2.736-1.427-3.58l-9.94-6.966L55,71.41l8.704,8.545 c0.348,0.357,0.753,0.611,1.18,0.792c-2.532,2.925-5.49,4.786-7.602,5.84c-0.727,0.363-0.39,1.407,0.457,1.42 c4.223,0.065,13.224-1.182,13.51-7.878C71.302,78.888,70.656,78.316,69.843,78.079z"
                />
            </g>
            <path
                fill="#ff7575"
                d="M49.999,32.919c-14.919,0-27.013,8.328-27.013,19.356c0,7.485,9.322,14.967,18.088,20.544	c1.231,0.783,2.694,1.191,4.189,1.191l4.736,1l4.733-1c1.495,0,2.958-0.407,4.189-1.191c8.766-5.577,18.088-13.059,18.088-20.544	C77.011,41.247,64.917,32.919,49.999,32.919z"
            />
        </svg>
    )
}
